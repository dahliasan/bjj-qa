import { OpenAI } from "langchain/llms/openai";
import { LLMChain, ChatVectorDBQAChain, loadQAChain } from "langchain/chains";
import { SupabaseVectorStore } from "langchain/vectorstores";
import { PromptTemplate } from "langchain/prompts";
import { openai } from "./openai-client";

const CONDENSE_PROMPT =
  PromptTemplate.fromTemplate(`Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question. If the follow up question is already a standalone question, just return the follow up question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`);

// const QA_PROMPT = PromptTemplate.fromTemplate(
//   `You are an AI assistant and a brazilian jiu jitsu (bjj) expert. You are given the following extracted parts of various youtube videos and a question. Provide a conversational answer based on the context provided. If you can't find the answer in the context below, just say "Hmm, I'm not sure." Don't try to make up an answer. If the question is not related to bjj or the context provided, politely inform them that you only answer questions that are related to bjj.

//       Question: {question}
//       =========
//       {context}
//       =========
//       Brief concise answer in Markdown:`
// );
const QA_PROMPT = PromptTemplate.fromTemplate(
  `You are an AI assistant with a deep understanding of Brazilian jiu-jitsu (BJJ). Your task is to provide a concise answer to the user's question by summarizing and synthesizing information from multiple text sources. First determine based on the video titles if the provided context are useful for answering the question. If you can't find a suitable answer in the provided context, say "Hmm, I'm not sure. I do not have enough information from the current database to provide an accurate answer".

Question: {question}
=========
{context}
=========
Brief, concise answer in Markdown, based on the provided text sources:
`
);

export const makeChain = (
  vectorstore: SupabaseVectorStore,
  streamModel: OpenAI
) => {
  // first prompt to gpt to condense the question
  const questionGenerator = new LLMChain({
    llm: openai,
    prompt: CONDENSE_PROMPT,
  });

  const docChain = loadQAChain(streamModel, { prompt: QA_PROMPT });

  // chain the two prompts together
  return new ChatVectorDBQAChain({
    vectorstore,
    combineDocumentsChain: docChain,
    questionGeneratorChain: questionGenerator,
    returnSourceDocuments: true,
    k: 4,
  });
};
