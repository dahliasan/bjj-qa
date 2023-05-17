// script.js
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { YoutubeTranscript } from "youtube-transcript";
import { encoding_for_model } from "@dqbd/tiktoken";
import { TokenTextSplitter } from "langchain/text_splitter";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { YTChunks, YTTranscript } from "@/types/transcript";
import { Document } from "langchain/document";
import {
  addTimestampToChunks,
  addTranscriptToChunks,
  fetchTranscript,
} from "@/utils/preprocess-videos";

const GPT3_MAX_TOKEN = 4096;
const OUTPUT_MAX_TOKEN = 800;

const CHUNK_PROMPT_TEMPLATE = `Split the brazilian jiu jitsu (bjj) video transcript into chunks by topic or technique covered. Your response should be in JSON of a list of chunks, each with the following fields:

=====
"title": string
"starting_words": string // first 5 words of the chunk to help identify it. DO NOT FIX SPELLING ERRORS
"keywords": string
"description": string
=====

Title: {title}
Transcript: {transcript}
`;

// get token count for template
const encoder = encoding_for_model("gpt-3.5-turbo");
const tokens = encoder.encode(CHUNK_PROMPT_TEMPLATE, "all");
const templateTokenCount = tokens.length;

// get max token count for transcript
const transcriptMaxTokenCount =
  GPT3_MAX_TOKEN - OUTPUT_MAX_TOKEN - templateTokenCount;

(async () => {
  const loader = new CSVLoader("data/youtube videos - Sheet1.csv");

  const docs = await loader.load();

  docs.slice(0, 1).forEach(async (doc) => {
    const { pageContent } = doc;
    if (!pageContent) return;

    const title = pageContent.match(/video: (.+)/)?.[1] ?? "";
    const videoUrl = pageContent.match(/video_url: (.+)/)?.[1] ?? "";
    const videoId = videoUrl.split("v=")[1].split("&")[0] ?? "";
    const channel = pageContent.match(/channel: (.+)/)?.[1] ?? "";
    const thumbnailUrl = pageContent.match(/thumbnail: (.+)/)?.[1] ?? "";

    try {
      const transcript = await fetchTranscript(videoId);

      // combine all the text into one string
      const text = transcript.map((entry) => entry.text).join(" ");

      // split text by tokens count
      const splitter = new TokenTextSplitter({
        encodingName: "cl100k_base",
        chunkSize: transcriptMaxTokenCount,
        chunkOverlap: 0,
      });

      const output = await splitter.createDocuments([text]);

      // generate chunks using gpt
      const model = new OpenAI({
        modelName: "gpt-3.5-turbo",
        temperature: 0,
        cache: true,
        maxConcurrency: 5,
      });

      const prompt = PromptTemplate.fromTemplate(CHUNK_PROMPT_TEMPLATE);
      const chain = new LLMChain({ llm: model, prompt: prompt });

      // Initialize an empty array to hold all the chunk documents
      const allChunkDocs = [];

      // Loop over each document in the output array
      for (const document of output) {
        // Extract the page content from the document
        const { pageContent } = document;

        // Call the chain function to generate chunks from the page content
        const res = await chain.call({ transcript: pageContent, title });
        const chunks = JSON.parse(res.text);

        console.log(chunks);
        // Add the transcript text and timestamp to each chunk
        addTranscriptToChunks(pageContent, chunks);
        addTimestampToChunks(transcript, chunks);

        // Create a new document for each chunk
        const chunkDocs = chunks.map((chunk: YTChunks) => {
          // Extract the chunk title and metadata from the chunk object
          const {
            title: chunkTitle,
            keywords,
            description,
            ...metadata
          } = chunk;

          // Create a new document object for the chunk
          const pageContent = `${title}
          ${chunkTitle}
          ${keywords}
          ${description}`;

          const chunkDoc = new Document({
            pageContent,
            metadata: {
              videoId,
              videoTitle: title,
              channel,
              thumbnailUrl,
              chunkTitle,
              description,
              ...metadata,
            },
          });

          return chunkDoc;
        });

        // Add the chunk documents to the array of all chunk documents
        allChunkDocs.push(...chunkDocs);
      }

      return allChunkDocs;
    } catch (error) {
      console.log(videoId, error);
    }
  });
})();
