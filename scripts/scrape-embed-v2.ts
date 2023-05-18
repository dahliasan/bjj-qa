import { createChunksNLP, fetchTranscript } from "@/utils/preprocess-videos";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { YoutubeTranscript } from "youtube-transcript";
import { Document } from "langchain/document";
import type { SupabaseClient } from "@supabase/supabase-js";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
import { supabaseClient } from "@/utils/supabase-client";
import { Embeddings } from "langchain/dist/embeddings/base";
import { YTVideo } from "@/types/transcript";

import Bottleneck from "bottleneck";

(async () => {
  // Get video data from CSV
  const docs = await getYoutubeDataFromCsv(
    "data/youtube videos - Sheet1.csv",
    supabaseClient
  );

  console.log(docs.length, " youtube video data retrieved");

  // Get transcripts from YouTube
  console.log("getting transcripts from YouTube");
  const transcriptDocs = await getTranscriptsAndChunk(docs.slice(0, 15));

  // Embed docs into Supabase
  console.log("embedding docs into Supabase");
  await embedDocuments(supabaseClient, transcriptDocs, new OpenAIEmbeddings());

  // Add video metadata to the videos table
  console.log("adding video metadata to the videos table");
  await addVideo(supabaseClient, transcriptDocs);
})();

// Main Functions
async function getYoutubeDataFromCsv(path: string, client: SupabaseClient) {
  console.log("loading CSV data from", path);
  const loader = new CSVLoader(path);
  const docs = await loader.load();

  // Fetch existing video IDs from the videos table
  console.log("fetching existing video IDs from the videos table");
  const { data: existingVideoIds, error } = await client
    .from("videos")
    .select("video_id");
  if (error) {
    console.error("Error fetching existing video IDs:", error.message);
    return [];
  }

  const uniqueVideoIds = new Set(
    existingVideoIds.map((record) => record.video_id)
  );

  // Parse video data from the CSV
  console.log("parsing video data from the csv");
  const parsedDocs = docs
    .filter((doc) => doc.pageContent)
    .map((doc) => {
      const { pageContent } = doc;

      const title = pageContent.match(/video: (.+)/)?.[1] ?? "";
      const videoUrl = pageContent.match(/video_url: (.+)/)?.[1] ?? "";
      const videoId = videoUrl.split("v=")[1]?.split("&")[0] || "";
      const channel = pageContent.match(/channel: (.+)/)?.[1] ?? "";
      const thumbnailUrl = pageContent.match(/thumbnail: (.+)/)?.[1] ?? "";

      return { title, videoId, channel, thumbnailUrl };
    });

  // Deduplicate video data
  console.log("deduplicating video data");
  function removeDuplicateDocs(docs: YTVideo[]): YTVideo[] {
    const uniqueDocsMap = new Map<string, YTVideo>();

    for (const doc of docs) {
      uniqueDocsMap.set(doc.videoId, doc);
    }

    return Array.from(uniqueDocsMap.values());
  }
  const uniqueDocs = removeDuplicateDocs(parsedDocs);

  return Promise.resolve(
    uniqueDocs.filter((doc) => !uniqueVideoIds.has(doc.videoId))
  );
}

// Replace maxConcurrent and minTime with your actual rate limit values
const limiter = new Bottleneck({
  maxConcurrent: 10, // Maximum number of requests that can be run at the same time
  minTime: 1000, // Minimum time between each task in milliseconds
});

async function getTranscriptsAndChunk(docs: YTVideo[]): Promise<Document[]> {
  console.log("Fetching video transcripts...");

  const promises = docs.map((doc) => {
    return limiter.schedule(async () => {
      const { videoId } = doc;

      console.log("Fetching transcript for video", videoId);

      try {
        const transcript = await fetchTranscript(videoId);
        const chunks = await createChunksNLP(transcript, doc);

        console.log("Successfully fetched and processed transcript");
        return chunks;
      } catch (error: any) {
        console.error(
          `Error processing transcript for video ${videoId}:`,
          error.message
        );
        return [];
      }
    });
  });

  const docsArray: Document[][] = await Promise.all(promises);

  console.log("Successfully fetched and processed transcripts");

  // Filter out any empty arrays and flatten the array of arrays
  return docsArray.filter((docArray) => docArray.length > 0).flat();
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

async function addVideo(client: SupabaseClient, docs: Record<string, any>[]) {
  console.log("adding video metadata...");

  for (let doc of docs) {
    if (doc.metadata) {
      doc = doc.metadata;
    }

    const { videoId, videoTitle, channel, thumbnailUrl } = doc;

    try {
      await client.from("videos").insert([
        {
          video_id: videoId,
          title: videoTitle,
          channel,
          thumbnail_url: thumbnailUrl,
        },
      ]);
    } catch (error: any) {
      console.error(
        `Error inserting video metadata for video ID ${videoId}:`,
        error.message
      );
    }
  }
  console.log("video metadata successfully added to the videos table");
}
