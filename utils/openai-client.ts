import { OpenAI } from "langchain/llms";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OpenAI Credentials");
}

export const openai = new OpenAI({
  temperature: 0,
  modelName: "gpt-3.5-turbo",
});

export const openaiStream = new OpenAI({
  temperature: 0.3,
  streaming: true,
  modelName: "gpt-3.5-turbo",
});
