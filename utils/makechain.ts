import { OpenAI } from "langchain/llms/openai";
import { LLMChain, ChatVectorDBQAChain, loadQAChain } from "langchain/chains";
import { HNSWLib, SupabaseVectorStore } from "langchain/vectorstores";
import { PromptTemplate } from "langchain/prompts";
import { openai, openaiStream } from "./openai-client";

const CONDENSE_PROMPT =
  PromptTemplate.fromTemplate(`Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`);

const QA_PROMPT = PromptTemplate.fromTemplate(
  `You are an AI assistant and a brazilian jiu jitsu (bjj) expert. You are given the following extracted parts of various youtube videos and a question. Provide a conversational answer based on the context provided. First, decide which context is relevant based on the video title and form you answer based on those. In bjj a sweep is the opposite of a pass. If you can't find the answer in the context below, just say "Hmm, I'm not sure." Don't try to make up an answer. If the question is not related to bjj or the context provided, politely inform them that you are tuned to only answer questions that are related to bjj.

      Question: {question}
      =========
      {context}
      =========
      Brief concise answer in Markdown:`
);

export const makeChain = (
  vectorstore: SupabaseVectorStore,
  onTokenStream: (token: string) => void
) => {
  // first prompt to gpt to condense the question
  const questionGenerator = new LLMChain({
    llm: openai,
    prompt: CONDENSE_PROMPT,
  });

  // second prompt to gpt to answer the question
  const model = openaiStream;

  model.callbackManager.handleLLMNewToken = async (token: string) => {
    onTokenStream(token);
  };

  const docChain = loadQAChain(model, { prompt: QA_PROMPT });

  // chain the two prompts together
  return new ChatVectorDBQAChain({
    vectorstore,
    combineDocumentsChain: docChain,
    questionGeneratorChain: questionGenerator,
    returnSourceDocuments: true,
    k: 4,
  });
};
