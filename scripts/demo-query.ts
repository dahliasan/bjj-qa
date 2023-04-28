// script.js
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { YoutubeTranscript } from "youtube-transcript";
import { encoding_for_model } from "@dqbd/tiktoken";
import { TokenTextSplitter } from "langchain/text_splitter";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { YTChunks, YTTranscript } from "@/types/transcript";

(async () => {
  const loader = new CSVLoader("data/youtube videos - Sheet1.csv");

  const docs = await loader.load();

  docs.slice(0, 1).forEach(async (doc) => {
    const { pageContent } = doc;
    if (!pageContent) return;

    const title = pageContent.match(/video: (.+)/)?.[1] ?? "";
    const videoUrl = pageContent.match(/video_url: (.+)/)?.[1] ?? "";
    const videoId = videoUrl.split("v=")[1].split("&")[0] ?? "";
    const channel = pageContent.match(/channel: (.+)/)?.[1] ?? "";
    const thumbnailUrl = pageContent.match(/thumbnail: (.+)/)?.[1] ?? "";

    try {
      const transcript = await YoutubeTranscript.fetchTranscript(videoId);

      // combine all the text into one string
      const text = transcript.map((entry) => entry.text).join(" ");

      // split text by tokens count
      const splitter = new TokenTextSplitter({
        encodingName: "cl100k_base",
        chunkSize: 3000,
        chunkOverlap: 0,
      });

      const output = await splitter.createDocuments([text]);
      // console.log(output);

      const template = `Split the Brazilian Jiu Jitsu (BJJ) video transcript into chunks by topic or technique covered. The output should be a JSON following this schema:

      "heading": string // descriptive topic heading for the chunk
      "starting_words": string // first 5 words of the chunk
      "tags": string // relevant keywords and metadata that describe the BJJ position and type of technique covered
      "description": string // detailed summary of the topic or technique covered in the chunk

      =========
      Transcript: {transcript}
      =========

      JSON:
      `;

      // get token count for template
      const encoder = encoding_for_model("gpt-3.5-turbo");
      const tokens = encoder.encode(template, "all");
      const templateTokenCount = tokens.length;

      const model = new OpenAI({
        modelName: "gpt-3.5-turbo",
        temperature: 0,
        cache: true,
      });

      const prompt = PromptTemplate.fromTemplate(template);
      const chain = new LLMChain({ llm: model, prompt: prompt });
      const res = await chain.call({ transcript: text });

      // parse res as json
      const chunks = JSON.parse(res.text);

      // get chunks from json by using starting_words to split transcript text
      appendTranscriptToChunks(text, chunks);
      appendTimestampToChunks(transcript, chunks);

      console.log(chunks);
      // return new chunks
    } catch (error) {
      console.log(videoId, error);
    }
  });
})();

function findBestMatches(
  transcript: YTTranscript[],
  words: string
): YTTranscript[] {
  const wordsArray = words.split(" ");
  let maxMatchCount = 0;
  const bestMatches: YTTranscript[] = [];

  transcript.forEach((line) => {
    const lineWords = line.text.split(" ");
    let matchCount = 0;

    wordsArray.forEach((word) => {
      if (lineWords.includes(word)) {
        matchCount++;
      }
    });

    if (matchCount > maxMatchCount) {
      maxMatchCount = matchCount;
      bestMatches.length = 0; // Clear previous best matches
      bestMatches.push(line);
    } else if (matchCount === maxMatchCount) {
      bestMatches.push(line);
    }
  });

  return bestMatches;
}

function appendTimestampToChunks(
  transcript: YTTranscript[],
  chunks: YTChunks[]
) {
  chunks.forEach((chunk) => {
    const matches = findBestMatches(transcript, chunk.starting_words);

    // get the last item in  matches
    const lastMatch = matches[matches.length - 1];
    chunk.startTime = lastMatch.offset / 1000; // convert to seconds
  });
}

function appendTranscriptToChunks(transcript: string, chunks: YTChunks[]) {
  chunks.forEach((chunk, index) => {
    const lowerCaseTranscript = transcript.toLowerCase();

    const start = lowerCaseTranscript.indexOf(
      chunk.starting_words.toLowerCase()
    );
    let end = -1;

    if (index < chunks.length - 1) {
      end = lowerCaseTranscript.indexOf(
        chunks[index + 1].starting_words.toLowerCase()
      );
    }

    if (start !== -1) {
      chunk.text =
        end === -1
          ? lowerCaseTranscript.slice(start)
          : lowerCaseTranscript.slice(start, end);
    } else {
      console.warn(
        `Starting words "${chunk.starting_words}" not found in the transcript.`
      );
    }
  });
}
