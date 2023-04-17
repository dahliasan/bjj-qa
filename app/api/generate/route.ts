// Import necessary modules
import { NextResponse } from "next/server";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
import { supabaseClient } from "@/utils/supabase-client";
import { makeChain } from "@/utils/makechain";
import { openaiStream } from "@/utils/openai-client";
import { LLMResult } from "langchain/dist/schema";

// Set runtime to edge (can use this if you don't use prisma) /node.js
export const runtime = "nodejs";

// Define async POST function
export async function POST(request: Request) {
  // Get the message from the request
  const { question, history } = await request.json();

  // OpenAI recommends replacing newlines with spaces for best results
  const sanitizedQuestion = question.trim().replaceAll("\n", " ");

  // Create a TextEncoder instance
  const encoder = new TextEncoder();

  // Create a TransformStream instance
  const stream = new TransformStream();

  // Get a writable stream writer
  const writer = stream.writable.getWriter();

  // Function to handle new tokens
  const handleNewToken = async (token: any) => {
    await writer.ready;
    await writer.write(encoder.encode(`data: ${token}\n\n`));
  };

  // Function to handle the end of tokens
  const handleTokenEnd = async (output: LLMResult, verbose: boolean = true) => {
    // Include source documents in the event stream
    console.log(output);
    const sourceDocuments = JSON.stringify(output);
    await writer.ready;
    await writer.write(encoder.encode(`data: ${sourceDocuments}\n\n`));
    await writer.write(encoder.encode(`data: [DONE]\n\n`));
    await writer.close();
  };

  // Function to handle token errors
  const handleTokenError = async (error: any) => {
    await writer.ready;
    await writer.abort(error);
  };

  // Initialize the chain
  const vectorStore = await SupabaseVectorStore.fromExistingIndex(
    new OpenAIEmbeddings(),
    { client: supabaseClient }
  );

  const model = openaiStream;

  model.callbackManager.handleLLMNewToken = handleNewToken;
  model.callbackManager.handleLLMEnd = handleTokenEnd;
  model.callbackManager.handleLLMError = handleTokenError;

  const chain = makeChain(vectorStore, model);

  // Call the chain with the message
  chain.call({
    question: sanitizedQuestion,
    chat_history: history || [],
  });

  // Return a new NextResponse with the readable stream and headers
  return new NextResponse(stream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });
}
