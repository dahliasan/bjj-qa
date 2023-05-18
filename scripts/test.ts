import { fetchTranscript } from "../utils/preprocess-videos";
import { makeChain } from "../utils/makechain-create-timestamps";

// Usage example
const videoId = "atIixTkbQGE";

fetchTranscript(videoId).then(async (transcript) => {
  console.log(transcript);
});
