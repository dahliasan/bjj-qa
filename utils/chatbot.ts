import { supabaseClient } from "@/utils/supabase-client";

async function getVideoTitles(): Promise<string[]> {
  try {
    const { data, error } = await supabaseClient.from("videos").select("title");
    if (error) {
      throw error;
    }
    return data.map((video) => video.title);
  } catch (error: any) {
    console.error("Error retrieving video titles:", error.message);
    return [];
  }
}

(async () => {
  const titles = await getVideoTitles();
  console.log(titles);
})();
