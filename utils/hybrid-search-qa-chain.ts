import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { openai, openaiStream } from "./openai-client";
import { getRelevantDocuments } from "./supabase-hybrid-search";
import { Document } from "langchain/document";
import { OpenAI } from "langchain/dist";

const CONDENSE_PROMPT =
  PromptTemplate.fromTemplate(`Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question. If the follow up question is already a standalone question, just return the follow up question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`);

const QA_PROMPT = PromptTemplate.fromTemplate(
  `You are an AI assistant and your task is to give relevant, useful and accurate answers to Brazilian Jiu Jitsu (BJJ) questions. First find a suitable answer based on the context provided. If you can't find a suitable answer in the provided context, say "Hmm, I'm not sure. I don't have enough information from the current database to provide an accurate answer. But here's an answer from my own knowledge:" and provide a free-form answer after this line. Here are instructions for your answer format:
  - If appropriate, format your answer as a list in markdown.
  - Including inline citations by citing the video id in square brackets eg: [1].

Question: {question}
=========
{context}
=========
Brief, concise answer in Markdown:
`
);

export const getAnswerChain = async (
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

  console.log(formattedContext);
  console.log(answerResponse);
};

let chat_history = [
  [
    "give me a chain for passing half guard",
    "Here are four different options for passing half guard:- Butterfly Guard Pass Using Underhook To Force Half Guard: Get one leg in between your opponents legs and use an underhook to turn them, forcing them into half guard.- Effective Strategy for Passing a Long Legged Open Guard: Switch to a traverse half guard or go to a head-to-head position to start passing an opponents half guard.- How To Do The Perfect Jiu Jitsu Half Guard Passing by John Danaher: Control your opponents head before moving to the hips, using your legs instead of your arms to pass guard.- How To Do The Perfect Jiu Jitsu Half Guard Passing by John Danaher: Focus on the head instead of the hips, using an entire structure on half guard passing as a powerful tool in grappling and mixed martial arts.",
  ],
  [
    "give me the important concepts i need to know about passing and underhooks",
    "To pass half guard and prevent underhooks, important concepts to know include using head control and double underhooks to go to mount or knee slide on the other side. It is also important to control space and prevent your opponent from getting underhooks.",
  ],
];

// getAnswerChain("what do you mean control space?", chat_history);

function formatChatHistory(chatHistory: string[][]) {
  let formattedString = "";
  for (let chat of chatHistory) {
    formattedString += `user: ${chat[0]}\n`;
    formattedString += `system: ${chat[1]}\n\n`;
  }
  return formattedString;
}

function formatContextFromDocuments(documents: Document[]) {
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
