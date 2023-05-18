import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { supabaseClient } from "./supabase-client";
import { SupabaseHybridSearch } from "langchain/retrievers/supabase";

export const getRelevantDocuments = async (query: string) => {
  const client = supabaseClient;

  const embeddings = new OpenAIEmbeddings();

  const retriever = new SupabaseHybridSearch(embeddings, {
    client,
    //  Below are the defaults, expecting that you set up your supabase table and functions according to the guide above. Please change if necessary.
    similarityK: 2,
    keywordK: 2,
    tableName: "documents",
    similarityQueryName: "match_documents",
    keywordQueryName: "kw_match_documents",
  });

  const results = await retriever.getRelevantDocuments(query);

  console.log(results);
};

getRelevantDocuments("knee shield");
