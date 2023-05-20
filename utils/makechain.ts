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
  `You are an AI assistant and your task is to give relevant, useful and accurate answers to Brazilian Jiu Jitsu (BJJ) questions. If your answer is a BJJ technique, it should be formatted as logical step-by-step unordered list in markdown. First find a suitable answer based on the context provided. If you can't find a suitable answer in the provided context, say "Hmm, I'm not sure. I don't have enough information from the current database to provide an accurate answer. But here's an answer from my own knowledge:" and provide a free-form answer after this line.

Question: {question}
=========
{context}
=========
Brief, concise answer in Markdown:
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

  // second prompt to gpt to answer the question
  const docChain = loadQAChain(streamModel, { prompt: QA_PROMPT });

  // chain the two prompts together
  return new ChatVectorDBQAChain({
    vectorstore,
    combineDocumentsChain: docChain,
    questionGeneratorChain: questionGenerator,
    returnSourceDocuments: true,
    k: 1,
  });
};
