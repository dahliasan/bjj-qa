import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
import { supabaseClient } from "@/utils/supabase-client";
import { makeChain } from "@/utils/makechain";
import { NextRequest, NextResponse } from "next/server";
import { openaiStream } from "@/utils/openai-client";

import { PrismaClient } from "@prisma/client";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { question, history } = await req.json();

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
      encoder.encode(
        `data: ${JSON.stringify({
          type: "token",
          value: token.replace(/["'\n\r]/g, ""),
        })}\n\n`
      )
    );
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
    .then(async (response) => {
      // Send the formatted response
      await writer.ready;

      await writer.write(
        encoder.encode(
          `data: ${JSON.stringify({
            type: "response",
            data: response,
          })}\n\n`
        )
      );

      // save question and response to db
      const prisma = new PrismaClient();
      await prisma.userQuery.create({
        data: {
          query: sanitizedQuestion,
          aiResponse: response,
        },
      });

      await writer.write(
        encoder.encode(
          `data: ${JSON.stringify({
            type: "done",
          })}\n\n`
        )
      );

      // Close the stream
      await writer.close();
      console.log(response);
    })
    .catch(console.error);

  return new NextResponse(stream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });
}
