import { createChunks, fetchTranscript } from "@/utils/preprocess-videos";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { Document } from "langchain/document";
import type { SupabaseClient } from "@supabase/supabase-js";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
import { supabaseClient } from "@/utils/supabase-client";
import { Embeddings } from "langchain/dist/embeddings/base";

export interface Doc {
  videoId: string;
  [key: string]: any;
}

// data/youtube videos - Sheet1.csv
export async function getYoutubeDataFromCsv(
  path: string,
  client: SupabaseClient
) {
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
  function removeDuplicateDocs(docs: Doc[]): Doc[] {
    const uniqueDocsMap = new Map<string, Doc>();

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

export async function getTranscriptsFromYoutubeData(
  docs: any[]
): Promise<Document[]> {
  console.log("fetching video transcripts...");

  const promises = docs.map(async (doc: any) => {
    const { videoId, title, channel } = doc;

    try {
      const transcript = await fetchTranscript(videoId);

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
      console.log(videoId, "error fetching transcript", error.message);
      return []; // return an empty array if there's an error
    }
  });

  const docsArray = await Promise.all(promises);

  console.log("successfully fetched transcripts");

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

export async function addVideo(
  client: SupabaseClient,
  docs: Record<string, any>[]
) {
  console.log("adding video metadata...");

  for (let doc of docs) {
    if (doc.metadata) {
      doc = doc.metadata;
    }

    const { videoId, title, channel, thumbnailUrl } = doc;

    try {
      await client.from("videos").insert([
        {
          video_id: videoId,
          title,
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

(async () => {
  const docs = await getYoutubeDataFromCsv(
    "data/youtube videos - Sheet1.csv",
    supabaseClient
  );
  const docsWithTranscripts = await getTranscriptsFromYoutubeData(docs);

  // Embed docs into Supabase
  await embedDocuments(
    supabaseClient,
    docsWithTranscripts,
    new OpenAIEmbeddings()
  );

  // Add video metadata to the videos table
  await addVideo(supabaseClient, docsWithTranscripts);
})();
