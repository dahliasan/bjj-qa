import { supabaseClient } from "@/utils/supabase-client";
import { getYoutubeDataFromCsv, addVideo } from "./scrape-embed";

(async () => {
  const docs = await getYoutubeDataFromCsv(
    "data/youtube videos - Sheet1.csv",
    supabaseClient
  );
  // Add video metadata to the videos table
  await addVideo(supabaseClient, docs);
})();
