import { encoding_for_model } from "@dqbd/tiktoken";

// count tokens in the text
const encoder = encoding_for_model("gpt-3.5-turbo");
const tokens = encoder.encode(text, "all");
const tokenCount = tokens.length;
console.log(`Token count: ${tokenCount}`);
