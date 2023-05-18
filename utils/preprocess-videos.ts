import {
  TranscriptItem,
  Transcript,
  YTChunks,
  YTVideo,
} from "@/types/transcript";

import {
  makeChain,
  CHUNK_PROMPT_TEMPLATE,
} from "./makechain-create-timestamps";

import { encoding_for_model } from "@dqbd/tiktoken";
import { TokenTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";
import { load } from "cheerio";
import * as xml2js from "xml2js";
import he from "he";

// for scrape-embed v1
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

// for scrape-embed v1
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

// for scrape-embed v2
export async function createChunksNLP(
  transcript: TranscriptItem[],
  videoMetadata: YTVideo
): Promise<Document[]> {
  const GPT3_MAX_TOKEN = 4096;
  const OUTPUT_MAX_TOKEN = 800;

  // get token count for template
  const encoder = encoding_for_model("gpt-3.5-turbo");
  const tokens = encoder.encode(CHUNK_PROMPT_TEMPLATE, "all");
  const templateTokenCount = tokens.length;

  // get max token count for transcript
  const transcriptMaxTokenCount =
    GPT3_MAX_TOKEN - OUTPUT_MAX_TOKEN - templateTokenCount;

  const { title, channel, thumbnailUrl, videoId } = videoMetadata;

  try {
    // combine all the text into one string
    const text = transcript.map((entry) => entry.text).join(" ");

    // split text by tokens count
    const splitter = new TokenTextSplitter({
      encodingName: "cl100k_base",
      chunkSize: transcriptMaxTokenCount,
      chunkOverlap: 0,
    });

    const output = await splitter.createDocuments([text]);

    const chain = makeChain();

    // Initialize an empty array to hold all the chunk documents
    const allChunkDocs = [];

    // Loop over each document in the output array
    for (const document of output) {
      // Extract the page content from the document
      const { pageContent } = document;

      // Call the chain function to generate chunks from the page content
      const res = await chain.call({ transcript: pageContent, title });
      const chunks = JSON.parse(res.text);

      console.log(`GPT created ${chunks.length} chunks from ${videoId}`);

      // Append the transcript text and timestamp to each chunk
      addTranscriptToChunks(pageContent, chunks);
      addTimestampToChunks(transcript, chunks);

      // Map the chunks to an array of chunk documents
      const chunkDocs = chunks.map((chunk: YTChunks) => {
        // Extract the chunk title and metadata from the chunk object
        const { title: chunkTitle, keywords, description, ...metadata } = chunk;

        // Create a new document object for the chunk
        const pageContent = `${title}\n\n${chunkTitle}\n\n${description}\n\n${keywords}`;

        const chunkDoc = new Document({
          pageContent,
          metadata: {
            videoId,
            videoTitle: title,
            channel,
            chunkTitle,
            description,
            keywords,
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
  } catch (error) {
    console.error("Error in createChunksNLP:", error.message);
    throw error;
  }
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

export function addTimestampToChunks(
  transcript: TranscriptItem[],
  chunks: YTChunks[]
) {
  chunks.forEach((chunk) => {
    const matches = findBestMatches(transcript, chunk.starting_words);

    // get the first item in matches
    const firstMatch = matches[0];

    // Only update the startTime if a match was found
    if (firstMatch) {
      chunk.startTime = firstMatch.start;
    } else {
      // Handle the case where no match was found
      console.warn(
        `No matches found for chunk starting with "${chunk.starting_words}". Setting startTime to null.`
      );
      chunk.startTime = null;
    }
  });
}

export function addTranscriptToChunks(transcript: string, chunks: YTChunks[]) {
  if (!transcript) {
    console.warn("The transcript is empty. No chunks will be processed.");
    return;
  }

  const lowerCaseTranscript = removePunctuation(transcript.toLowerCase());

  chunks.forEach((chunk, index) => {
    const lowerCaseStartingWords = removePunctuation(
      chunk.starting_words.toLowerCase()
    );
    const start = lowerCaseTranscript.lastIndexOf(lowerCaseStartingWords);

    if (start === -1) {
      console.warn(
        `Starting words "${chunk.starting_words}" not found in the transcript`
      );
      return;
    }

    let end = lowerCaseTranscript.length;
    if (index < chunks.length - 1) {
      const nextStart = lowerCaseTranscript.lastIndexOf(
        removePunctuation(chunks[index + 1].starting_words.toLowerCase())
      );
      if (nextStart !== -1) {
        end = nextStart;
      }
    }

    chunk.text = lowerCaseTranscript.slice(start, end);
  });
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

// parse XML

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

export async function fetchTranscript(
  videoId: string
): Promise<TranscriptItem[]> {
  const timedText = await fetchTimedText(videoId);

  const transcript = await parseXml(timedText);

  return transcript.transcript.text;
}
