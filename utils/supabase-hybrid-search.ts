import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { supabaseClient } from "./supabase-client";
import { SupabaseHybridSearch } from "langchain/retrievers/supabase";

export const getRelevantDocuments = async (
  query: string,
  options?: {
    similarityK?: number;
    keywordK?: number;
  }
) => {
  const { similarityK, keywordK } = options || {};

  const client = supabaseClient;

  const embeddings = new OpenAIEmbeddings();

  const retriever = new SupabaseHybridSearch(embeddings, {
    client,
    //  Below are the defaults, expecting that you set up your supabase table and functions according to the guide above. Please change if necessary.
    similarityK: similarityK ?? 2,
    keywordK: keywordK ?? 2,
    tableName: "documents",
    similarityQueryName: "match_documents",
    keywordQueryName: "kw_match_documents",
  });

  const results = await retriever.getRelevantDocuments(query);

  return results;
};
