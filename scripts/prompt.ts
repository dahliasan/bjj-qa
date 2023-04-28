import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { StructuredOutputParser } from "langchain/output_parsers";
import { text } from "./demo-transcript";

export const run = async () => {
  // With a `StructuredOutputParser` we can define a schema for the output.
  const parser = StructuredOutputParser.fromNamesAndDescriptions({
    heading: "descriptive topic heading for the chunk",
    starting_words: "first 5 words of the chunk",
    tags: "relevant keywords and metadata that describe the BJJ position and type of technique covered",
    description:
      "detailed summary of the topic or technique covered in the chunk",
  });

  const formatInstructions = parser.getFormatInstructions();

  const prompt = new PromptTemplate({
    template: `Split the Brazilian Jiu Jitsu (BJJ) video transcript into meaningful chunks based on the main topic or technique covered.

      {format_instructions}

      Transcript: {transcript}`,
    inputVariables: ["transcript"],
    partialVariables: { format_instructions: formatInstructions },
  });

  const model = new OpenAI({ temperature: 0 });

  const input = await prompt.format({
    transcript: text,
  });

  const response = await model.call(input);

  console.log(input);
  /*
  Answer the users question as best as possible.
  The output should be a markdown code snippet formatted in the following schema:
  ```json
  {
      "answer": string // answer to the user's question
      "source": string // source used to answer the user's question, should be a website.
  }
  ```
  */

  console.log(response);
  /*
  ```json
  {
      "answer": "Paris",
      "source": "https://en.wikipedia.org/wiki/France"
  }
  ```
  */

  console.log(parser.parse(response));
  // { answer: 'Paris', source: 'https://en.wikipedia.org/wiki/France' }
};

run();
