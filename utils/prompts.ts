import { PromptTemplate } from "langchain/prompts";
import { Document } from "langchain/document";

export const CONDENSE_PROMPT =
  PromptTemplate.fromTemplate(`Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question. If the follow up question is already a standalone question, just return the follow up question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`);

export const QA_PROMPT = PromptTemplate.fromTemplate(
  `You are an AI assistant and your task is to give relevant, useful and accurate answers to Brazilian Jiu Jitsu (BJJ) questions. First find a suitable answer based on the context provided. If you can't find a suitable answer in the provided context, say "Hmm, I'm not sure. I don't have enough information from the current database to provide an accurate answer. But here's an answer from my own knowledge:" and provide a free-form answer after this line. Here are instructions for your answer format:
  - If appropriate, format your answer as a list in markdown.
  - Including inline citations to each clause by citing the video id in square brackets eg: [1].

Question: {question}
=========
{context}
=========
Brief, concise answer in Markdown:
`
);

// export const CHUNK_PROMPT_TEMPLATE = `Split the brazilian jiu jitsu (bjj) video transcript into chunks by topic or technique covered. Your response should be in JSON of a list of chunks. Each chunk must contain the following keys.

// JSON Keys:
// "title": string
// "starting_words": string // first 5 words of the chunk to help identify it. DO NOT MODIFY THE ORIGINAL SPELLING.
// "keywords": string
// "description": string

// Title: {title}

// Transcript: {transcript} `;

export const CHUNK_PROMPT_TEMPLATE =
  PromptTemplate.fromTemplate(`Your task is to identify chunks in the following brazilian jiu jitsu (BJJ) video transcript. Maximum 8 chunks. Give your response as a JSON list of chunks. Each chunk must contain the following keys.

JSON Keys:
"title": string
"opening": string // First 10 words of the chunk. Maximum 10 words. Keep verbatim from the original transcript.
"keywords": string
"summary": string // detailed summary

Video Title: {title}
Transcript: {transcript}

JSON:
`);

export function formatChatHistory(chatHistory: string[][]) {
  let formattedString = "";
  for (let chat of chatHistory) {
    formattedString += `user: ${chat[0]}\n`;
    formattedString += `system: ${chat[1]}\n\n`;
  }
  return formattedString;
}

export function formatContextFromDocuments(documents: Document[]) {
  let formattedString = "";
  let video_index = 1;
  for (let doc of documents) {
    formattedString += `Video Id: ${video_index++}\n`;
    formattedString += `Video Title: ${doc.metadata.videoTitle}\n`;
    formattedString += `Author: ${doc.metadata.channel}\n`;
    formattedString += `Transcript: ${doc.metadata.text}\n\n\n`;
  }
  return formattedString;
}
