import { SupabaseVectorStore } from "langchain/vectorstores";
import { supabaseClient } from "@/utils/supabase-client";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

(async () => {
  const vectorStore = await SupabaseVectorStore.fromExistingIndex(
    new OpenAIEmbeddings(),
    {
      client: supabaseClient,
      tableName: "documents",
      queryName: "match_documents",
    }
  );
  const result = await vectorStore.similaritySearch(
    "how do i pass knee shield",
    4
  );
  console.log(result);
})();
