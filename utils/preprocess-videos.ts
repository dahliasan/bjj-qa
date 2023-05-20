import {
  TranscriptItem,
  Transcript,
  YTChunks,
  YTVideo,
} from "@/types/transcript";

import { TokenTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";
import { load } from "cheerio";
import * as xml2js from "xml2js";
import he from "he";

import { LLMChain } from "langchain/chains";
import { openai } from "./openai-client";
import { CHUNK_PROMPT_TEMPLATE } from "./prompts";

import Fuse from "fuse.js";

/* Functions for scrape and embed v1 */
export function createChunks(
  transcript: TranscriptItem[],
  options: { maxChars: number; maxDurationInSeconds: number; metadataToAdd: {} }
) {
  const { maxChars, maxDurationInSeconds, metadataToAdd } = options;
  const metadataString =
    Object.entries(metadataToAdd)
      .map(
        ([key, value]) =>
          `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`
      )
      .join("\n") + "\n";

  let chunks = [];
  let currentChunk = {
    text: metadataString + `start time: ${transcript[0].start}\n\n`,
    startTime: transcript[0].start,
    duration: 0,
    charCount: 0,
  };

  for (const entry of transcript) {
    const startTime = entry.start;
    const duration = entry.duration;
    const text = entry.text;
    const lineChars = text.length;

    const maxCharsExceeded = currentChunk.charCount + lineChars > maxChars;
    const maxDurationExceeded =
      currentChunk.duration + duration > maxDurationInSeconds;

    if (!maxCharsExceeded && !maxDurationExceeded) {
      currentChunk.text += " " + text;
      currentChunk.duration += duration;
      currentChunk.charCount += lineChars;
    } else {
      chunks.push(currentChunk);

      currentChunk = {
        text: metadataString + `start time: ${startTime}\n\n` + text,
        startTime: startTime,
        duration: duration,
        charCount: lineChars,
      };
    }
  }

  // Add the last chunk if it's not empty
  if (currentChunk.text !== metadataString) {
    chunks.push(currentChunk);
  }

  return chunks;
}

export function extractMetadata(text: string, labels: string[]) {
  const metadata = {} as Record<string, string>;

  try {
    for (const label of labels) {
      const regex = new RegExp(`${label}:\\s*(.+?)\\n`, "i");
      const match = text.match(regex);

      if (match) {
        metadata[label] = match[1];
        text = text.replace(regex, ""); // Remove the matched metadata from the text
      } else {
        metadata[label] = "";
      }
    }

    return { metadata, remainingText: text.trim() };
  } catch (error) {
    console.error(error);
    return { metadata: {}, remainingText: text };
  }
}

export async function fetchTranscript(
  videoId: string
): Promise<TranscriptItem[]> {
  const timedText = await fetchTimedText(videoId);

  const transcript = await parseXml(timedText);

  return transcript.transcript.text;
}

export async function createChunksNLP(
  transcript: TranscriptItem[],
  videoMetadata: YTVideo
): Promise<Document[]> {
  // get max token count for transcript
  const transcriptMaxTokenCount = 3000;

  const { title, channel, thumbnailUrl, videoId } = videoMetadata;
  let response;

  try {
    // combine all the text into one string
    const text = transcript.map((entry) => entry.text).join(" ");

    // split text by tokens count
    const splitter = new TokenTextSplitter({
      encodingName: "cl100k_base",
      chunkSize: transcriptMaxTokenCount,
      chunkOverlap: 100,
    });

    const output = await splitter.createDocuments([text]);

    const chain = new LLMChain({ llm: openai, prompt: CHUNK_PROMPT_TEMPLATE });

    // Initialize an empty array to hold all the chunk documents
    const allChunkDocs = [];

    // Loop over each document in the output array
    for (const document of output) {
      // Extract the page content from the document
      const { pageContent } = document;

      // If page content is less than 50 words then skip it
      if (pageContent.split(" ").length < 50) {
        continue;
      }

      // Call the chain function to generate chunks from the page content
      response = await chain.call({ transcript: pageContent, title });
      const chunks = JSON.parse(response.text);

      console.log(`GPT created ${chunks.length} chunks from ${videoId}`);

      // Append the transcript text and timestamp to each chunk
      addTranscriptToChunks(pageContent, chunks, videoId);
      addTimestampToChunks(transcript, chunks);

      // Map the chunks to an array of chunk documents
      const chunkDocs = chunks.map((chunk: YTChunks) => {
        // Extract the chunk title and metadata from the chunk object
        const {
          title: chunkTitle,
          keywords,
          summary,
          text,
          ...metadata
        } = chunk;

        // Create a new document object for the chunk
        const pageContent = `video title: ${title}\n\n chunk title: ${chunkTitle}\n\n${summary}\n\nkeywords: ${keywords}\n\n${text}`;

        const chunkDoc = new Document({
          pageContent,
          metadata: {
            videoId,
            videoTitle: title,
            channel,
            chunkTitle,
            summary,
            keywords,
            text,
            ...metadata,
            thumbnailUrl,
          },
        });

        return chunkDoc;
      });

      // Add the chunk documents to the array of all chunk documents
      allChunkDocs.push(...chunkDocs);
    }

    return allChunkDocs;
  } catch (error: any) {
    if (response) {
      console.error(`Error in createChunksNLP for ${videoId}:`, response);
    }

    throw error;
  }
}

export function addTranscriptToChunks(
  transcript: string,
  chunks: YTChunks[],
  videoId: string
) {
  if (!transcript) {
    console.warn("The transcript is empty. No chunks will be processed.");
    return;
  }

  const transcriptClean = removePunctuation(transcript.toLowerCase());

  const transcriptWords = transcriptClean.split(" ");

  // Create an array of 10-word phrases along with their starting indexes
  const phrases = transcriptWords.map((_, i, arr) => {
    const phrase = arr.slice(i, i + 10).join(" ");
    return {
      phrase,
      index: arr.slice(0, i).join(" ").length + i, // Account for spaces
    };
  });

  const fuse = new Fuse(phrases, { includeScore: true, keys: ["phrase"] });

  let nextStart = 0; // Initialize nextStart

  for (let index = 0; index < chunks.length; index++) {
    const chunk = chunks[index];
    const openingWords = removePunctuation(chunk.opening.toLowerCase());

    let start =
      nextStart !== -1 ? nextStart : transcriptClean.indexOf(openingWords);
    if (start === -1) {
      // If exact match is not found, use fuzzy search
      console.warn(
        `${videoId} - Could not find "${openingWords}" in chunk ${index} using simple string search, using fuzzy search`
      );
      const results = fuse.search(openingWords);
      console.log("fuzzy search results", results);
      if (results.length > 0) {
        // You can adjust the threshold
        start = results[0].item.index; // Use the index of the match
      } else {
        throw new Error(
          `Could not find "${openingWords}" in "${transcriptClean}"`
        );
      }
    }

    let end = transcriptClean.length;

    if (index < chunks.length - 1) {
      const nextOpeningWords = removePunctuation(
        chunks[index + 1].opening.toLowerCase()
      );
      nextStart = transcriptClean.indexOf(
        nextOpeningWords,
        start + openingWords.length
      );
      if (nextStart === -1) {
        // If exact match is not found, use fuzzy search
        const nextResults = fuse.search(nextOpeningWords);
        if (nextResults.length > 0) {
          // You can adjust the threshold
          nextStart = nextResults[0].item.index; // Use the index of the match
        }
      }
      end = nextStart !== -1 ? nextStart : end;
    }

    chunk.text = transcriptClean.slice(start, end);
  }
}

export function addTimestampToChunks(
  transcript: TranscriptItem[],
  chunks: YTChunks[]
) {
  chunks.forEach((chunk) => {
    const matches = findBestMatches(transcript, chunk.opening);

    // get the first item in matches
    const firstMatch = matches[0];

    // Only update the startTime if a match was found
    if (firstMatch) {
      chunk.startTime = firstMatch.start;
    } else {
      // Handle the case where no match was found
      console.warn(
        `No matches found for chunk starting with "${chunk.opening}". Setting startTime to null.`
      );
      chunk.startTime = null;
    }
  });
}

function findBestMatches(
  transcript: TranscriptItem[],
  words: string
): TranscriptItem[] {
  // Return empty array for empty words or transcript
  if (!words.trim() || !transcript.length) {
    return [];
  }

  const wordsArray = words
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(/[^\w\s]|_/g, ""));

  let maxMatchCount = 0;
  const bestMatches: TranscriptItem[] = [];

  transcript.forEach((line) => {
    const lineWords = line.text
      .toLowerCase()
      .split(" ")
      .map((word) => word.replace(/[^\w\s]|_/g, ""));

    let matchCount = 0;

    wordsArray.forEach((word) => {
      if (lineWords.includes(word)) {
        matchCount++;
      }
    });

    if (matchCount > maxMatchCount) {
      maxMatchCount = matchCount;
      bestMatches.length = 0; // Clear previous best matches
      bestMatches.push(line);
    } else if (matchCount === maxMatchCount) {
      bestMatches.push(line);
    }
  });

  return bestMatches;
}

function removePunctuation(text: string) {
  return text.replace(/[^\w\s]/g, "");
}

export async function fetchTimedText(
  videoId: string,
  attempts: number = 3
): Promise<string> {
  while (attempts > 0) {
    try {
      // Fetch the HTML of the YouTube video page
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      const response = await fetch(videoUrl);
      const html = await response.text();

      // Check if the HTML contains the word "timedtext"
      const containsTimedText = html.includes("timedtext");

      if (!containsTimedText) {
        attempts = 1;
        throw new Error(`timedtext not found in ${videoId}`);
      }

      // Parse the HTML using Cheerio
      const $ = load(html);

      // Extract the content of the ytInitialPlayerResponse element
      const ytInitialPlayerResponseScript = $(
        'script:contains("ytInitialPlayerResponse")'
      ).html();

      if (!ytInitialPlayerResponseScript) {
        throw new Error(`ytInitialPlayerResponse not found in ${videoId}`);
      }

      // Extract the JSON object from the script content
      const jsonStartIndex = ytInitialPlayerResponseScript.indexOf("{");
      const jsonEndIndex = ytInitialPlayerResponseScript.lastIndexOf("}") + 1;

      const jsonContent = ytInitialPlayerResponseScript.slice(
        jsonStartIndex,
        jsonEndIndex
      );

      // Parse the JSON object
      const parsedObj = JSON.parse(jsonContent);

      // Extract the timed text URL from the content
      const timedTextUrl =
        parsedObj.captions.playerCaptionsTracklistRenderer.captionTracks[0]
          .baseUrl;

      // Fetch the timed text
      const timedTextResponse = await fetch(timedTextUrl);
      const timedText = await timedTextResponse.text();

      return timedText;
    } catch (error: any) {
      if (attempts === 1) {
        // if this was the last attempt, throw the error
        throw error;
      }

      console.log(`videoId: ${videoId}`, error.message);

      // Wait for 2 seconds before retrying
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    attempts--;
  }

  // If all attempts fail, return undefined
  throw new Error("Failed to fetch timed text.");
}

function decodeHtml(html: string) {
  if (!html) {
    return "";
  }
  return he.decode(html);
}

export async function parseXml(xml: string): Promise<Transcript> {
  return new Promise((resolve, reject) => {
    xml2js.parseString(
      xml,
      { trim: true, explicitArray: false },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          // Map the parsed XML to the Transcript interface
          const transcript: Transcript = {
            transcript: {
              text: result.transcript.text.map((item: any) => ({
                start: Number(item.$.start),
                duration: Number(item.$.dur),
                text: decodeHtml(item._),
              })),
            },
          };

          resolve(transcript);
        }
      }
    );
  });
}
