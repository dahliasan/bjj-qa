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

const QA_PROMPT = PromptTemplate.fromTemplate(
  `You are an AI assistant and a brazilian jiu jitsu (bjj) expert. You are given the following extracted parts of various youtube videos and a question. Provide a conversational answer based on the context provided. If you can't find the answer in the context below, just say "Hmm, I'm not sure." Don't try to make up an answer. If the question is not related to bjj or the context provided, politely inform them that you only answer questions that are related to bjj.

      Question: {question}
      =========
      {context}
      =========
      Brief concise answer in Markdown:`
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
