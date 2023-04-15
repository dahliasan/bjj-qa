// script.js
import { CSVLoader } from "langchain/document_loaders";
import { YoutubeTranscript } from "youtube-transcript";

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
      console.log(transcript);

      const biggerChunks = createChunks(transcript, {
        maxChars: 1000,
        maxDurationInSeconds: 60,
        metadata: { "video title": title, channel },
      });
      console.log(biggerChunks);
    } catch (error) {
      console.log(videoId, error);
    }
  });
})();

function createChunks(transcript, options) {
  const FACTOR = 1000; // Convert to seconds

  const { maxChars, maxDurationInSeconds, metadata } = options;
  const metadataString =
    Object.entries(metadata)
      .map(
        ([key, value]) =>
          `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`
      )
      .join("\n") + "\n\n";

  let chunks = [];
  let currentChunk = {
    text: metadataString,
    startTime: transcript[0].offset / FACTOR,
    duration: 0,
    charCount: 0,
  };

  for (const entry of transcript) {
    const startTime = entry.offset / FACTOR;
    const duration = entry.duration / FACTOR;
    const text = entry.text;
    const lineChars = text.length;

    const maxCharsExceeded = currentChunk.charCount + lineChars > maxChars;
    const maxDurationExceeded =
      currentChunk.duration + duration > maxDurationInSeconds;

    if (!maxCharsExceeded && !maxDurationExceeded) {
      currentChunk.text += " " + text;
      currentChunk.duration += duration;
      currentChunk.charCount += lineChars;
    } else {
      chunks.push(currentChunk);

      currentChunk = {
        text: metadataString + text,
        startTime: startTime,
        duration: duration,
        charCount: lineChars,
      };
    }
  }

  // Add the last chunk if it's not empty
  if (currentChunk.text !== metadataString) {
    chunks.push(currentChunk);
  }

  return chunks;
}
