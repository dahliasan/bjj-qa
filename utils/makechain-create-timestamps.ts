import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { openai } from "./openai-client";

export const CHUNK_PROMPT_TEMPLATE = `Split the brazilian jiu jitsu (bjj) video transcript into chunks by topic or technique covered. Your response should be in JSON of a list of chunks, each with the following fields:

=====
"title": string
"starting_words": string // first 5 words of the chunk to help identify it. DO NOT FIX SPELLING ERRORS
"keywords": string
"description": string
=====

Title: {title}
Transcript: {transcript}
`;

const CHUNK_PROMPT = PromptTemplate.fromTemplate(CHUNK_PROMPT_TEMPLATE);

export const makeChain = () => {
  return new LLMChain({ llm: openai, prompt: CHUNK_PROMPT });
};
