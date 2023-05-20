import { LLMChain } from "langchain/chains";
import {
  CONDENSE_PROMPT,
  QA_PROMPT,
  formatChatHistory,
  formatContextFromDocuments,
} from "./prompts";
import { openai } from "./openai-client";
import { getRelevantDocuments } from "./supabase-hybrid-search";
import { Document } from "langchain/document";
import { OpenAI } from "langchain/dist";

export const getHybridSearchAnswerChain = async (
  model: OpenAI,
  question: string,
  chat_history: string[][]
) => {
  // first prompt to gpt to condense the question
  const questionGenerator = new LLMChain({
    llm: openai,
    prompt: CONDENSE_PROMPT,
  });

  const formattedChatHistory = formatChatHistory(chat_history);

  const questionResponse = await questionGenerator.call({
    question,
    chat_history: formattedChatHistory,
  });

  const standaloneQuestion = questionResponse.text;

  // second prompt to fetch most relevant documents
  const relevantDocs = await getRelevantDocuments(standaloneQuestion);
  const formattedContext = formatContextFromDocuments(relevantDocs);

  const answerGenerator = new LLMChain({
    llm: model,
    prompt: QA_PROMPT,
  });

  const answerResponse = await answerGenerator.call({
    question: standaloneQuestion,
    context: formattedContext,
  });

  // Return the answer and the relevant documents
  return {
    text: answerResponse.text,
    sourceDocuments: relevantDocs,
  };
};

// (async () => {
//   const answer = await getHybridSearchAnswerChain(
//     openaiStream,
//     "what do you mean control space?",
//     []
//   );

//   console.log(answer);
// })();
