import { createChunks } from "@/utils/transcript";
import { CSVLoader } from "langchain/document_loaders";
import { YoutubeTranscript } from "youtube-transcript";
import { Document } from "langchain/document";
import type { SupabaseClient } from "@supabase/supabase-js";
import { Embeddings, OpenAIEmbeddings } from "langchain/embeddings";
import { SupabaseVectorStore } from "langchain/vectorstores";
import { supabaseClient } from "@/utils/supabase-client";

// data/youtube videos - Sheet1.csv
async function getYoutubeDataFromCsv(path: string) {
  const loader = new CSVLoader(path);
  const docs = await loader.load();

  return Promise.resolve(
    docs
      .filter((doc) => doc.pageContent)
      .map((doc) => {
        const { pageContent } = doc;

        const title = pageContent.match(/video: (.+)/)?.[1] ?? "";
        const videoUrl = pageContent.match(/video_url: (.+)/)?.[1] ?? "";
        const videoId = videoUrl.split("v=")[1].split("&")[0] ?? "";
        const channel = pageContent.match(/channel: (.+)/)?.[1] ?? "";
        const thumbnailUrl = pageContent.match(/thumbnail: (.+)/)?.[1] ?? "";

        return { title, videoId, channel, thumbnailUrl };
      })
  );
}

async function getTranscriptsFromYoutubeData(docs: any[]): Promise<Document[]> {
  const promises = docs.map(async (doc: any) => {
    const { videoId, title, channel } = doc;

    try {
      const transcript = await YoutubeTranscript.fetchTranscript(videoId);

      const biggerChunks = createChunks(transcript, {
        maxChars: 1000,
        maxDurationInSeconds: 60,
        metadataToAdd: { "video title": title, channel },
      });

      const newDocs = biggerChunks.map((chunk) => {
        const { text, ...chunkMetadata } = chunk;

        return new Document({
          pageContent: chunk.text,
          metadata: { ...doc, ...chunkMetadata },
        });
      });

      return newDocs;
    } catch (error: any) {
      console.log(videoId, error);
      return []; // return an empty array if there's an error
    }
  });

  const docsArray = await Promise.all(promises);

  // use filter to remove any empty array from the resulting array
  return docsArray.filter((doc) => doc.length > 0).flat();
}

async function embedDocuments(
  client: SupabaseClient,
  docs: Document[],
  embeddings: Embeddings
) {
  console.log("creating embeddings...");
  await SupabaseVectorStore.fromDocuments(docs, embeddings, { client });
  console.log("embeddings successfully stored in supabase");
}

(async () => {
  const docs = await getYoutubeDataFromCsv("data/youtube videos - Sheet1.csv");
  const docsWithTranscripts = await getTranscriptsFromYoutubeData(docs);

  //   embed docs into supabase
  await embedDocuments(
    supabaseClient,
    docsWithTranscripts,
    new OpenAIEmbeddings()
  );
})();
