import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
import { supabaseClient } from "@/utils/supabase-client";
import { makeChain } from "@/utils/makechain";
import { NextRequest, NextResponse } from "next/server";
import { openaiStream } from "@/utils/openai-client";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest, res: NextApiResponse) {
  const { question, history } = (await req.json()) as {
    question: string;
    history: string[];
  };

  // OpenAI recommends replacing newlines with spaces for best results
  const sanitizedQuestion = question.trim().replaceAll("\n", " ");

  /* create vectorstore*/
  const vectorStore = await SupabaseVectorStore.fromExistingIndex(
    new OpenAIEmbeddings(),
    { client: supabaseClient }
  );

  // Call LLM and stream output
  const encoder = new TextEncoder();
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  const model = openaiStream;

  model.callbackManager.handleLLMNewToken = async (token) => {
    await writer.ready;
    await writer.write(
      encoder.encode(`data: ${token.replace(/["'\n\r]/g, "")}\n\n`)
    );
  };

  model.callbackManager.handleLLMEnd = async () => {
    await writer.ready;
    await writer.close();
  };

  model.callbackManager.handleLLMError = async (e) => {
    await writer.ready;
    await writer.abort(e);
  };

  const chain = makeChain(vectorStore, model);

  chain
    .call({
      question: sanitizedQuestion,
      chat_history: history || [],
    })
    .catch(console.error);

  return new NextResponse(stream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });

  // res.writeHead(200, {
  //   "Content-Type": "text/event-stream",
  //   "Cache-Control": "no-cache, no-transform",
  //   Connection: "keep-alive",
  // });

  // const sendData = (data: string) => {
  //   res.write(`data: ${data}\n\n`);
  // };

  // // send first msg
  // sendData(JSON.stringify({ data: "" }));

  // // create the chain
  // const chain = makeChain(vectorStore, (token: string) => {
  //   sendData(JSON.stringify({ msg: token }));
  // });

  // try {
  //   //Ask a question
  //   const response = await chain.call({
  //     question: sanitizedQuestion,
  //     chat_history: history || [],
  //   });
  //   sendData(JSON.stringify({ sources: response }));
  //   console.log("response", response);
  // } catch (error) {
  //   console.log("error", error);
  // } finally {
  //   sendData("[DONE]");
  //   res.end();
  // }
}
