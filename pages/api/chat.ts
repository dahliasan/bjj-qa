import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaVectorStore } from "langchain/vectorstores";
import { OpenAIEmbeddings } from "langchain/embeddings";
import { PrismaClient, Prisma, Embedding } from "@prisma/client";
import { openaiStream } from "@/utils/openai-client";
import { ConversationalRetrievalQAChain } from "langchain/chains";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { question, history } = req.body;

  if (!question) {
    return res.status(400).json({ message: "No question in the request" });
  }
  // OpenAI recommends replacing newlines with spaces for best results
  const sanitizedQuestion = question.trim().replaceAll("\n", " ");

  /* create vectorstore*/
  const vectorStore = PrismaVectorStore.withModel<Embedding>(prisma).create(
    new OpenAIEmbeddings(),
    {
      prisma: Prisma,
      tableName: "Embedding",
      vectorColumnName: "embedding",
      columns: {
        id: PrismaVectorStore.IdColumn,
        chunk: PrismaVectorStore.ContentColumn,
        videoId: PrismaVectorStore.IdColumn,
      },
    }
  );

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache, no-transform",
    Connection: "keep-alive",
  });

  const sendData = (data: string) => {
    res.write(`data: ${data}\n\n`);
  };

  sendData(JSON.stringify({ data: "" }));

  const model = openaiStream;
  model.callbackManager.handleLLMNewToken = async (token: string) => {
    sendData(JSON.stringify({ msg: token }));
  };

  // create the chain
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever(),
    {
      returnSourceDocuments: true,
      questionGeneratorTemplate: `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question. Please end the question with a line break.
Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`,
      qaTemplate: `You are an AI assistant and a brazilian jiu jitsu (bjj) expert. You are given the following extracted parts of various youtube videos and a question. Provide a conversational answer based on the context provided.
You should only use hyperlinks as references that are explicitly listed as a source in the context below. Do NOT make up a hyperlink that is not listed below.
If you can't find the answer in the context below, just say "Hmm, I'm not sure." Don't try to make up an answer.
If the question is not related to bjj or the context provided, politely inform them that you are tuned to only answer questions that are related to bjj.
Choose the most relevant link that matches the context provided:

Question: {question}
=========
{context}
=========
Answer in Markdown:`,
    }
  );

  try {
    //Ask a question
    const response = await chain.call({
      question: sanitizedQuestion,
      chat_history: history || [],
    });
    sendData(JSON.stringify({ sources: response }));
  } catch (error) {
    console.log("error", error);
  } finally {
    sendData("[DONE]");
    res.end();
  }
}
