import { YTTranscript } from "@/types/transcript";

export function createChunks(
  transcript: YTTranscript[],
  options: { maxChars: number; maxDurationInSeconds: number; metadata: {} }
) {
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