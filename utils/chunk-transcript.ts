import { Transcript } from '@/prisma/seed'

export function createFlexibleChunks(
  transcript: Transcript,
  maxChars: number,
  maxDuration: number
) {
  const newTranscript = []
  let chunkText = ''
  let chunkDuration = 0
  let chunkOffset = transcript[0].offset

  for (const entry of transcript) {
    if (
      chunkText.length + entry.text.length <= maxChars ||
      chunkDuration + entry.duration <= maxDuration
    ) {
      chunkText += ' ' + entry.text
      chunkDuration += entry.duration
    } else {
      newTranscript.push({
        text: chunkText.trim(),
        duration: chunkDuration,
        offset: chunkOffset,
      })

      chunkText = entry.text
      chunkDuration = entry.duration
      chunkOffset = entry.offset
    }
  }

  // Add the last chunk if it's not empty
  if (chunkText !== '') {
    newTranscript.push({
      text: chunkText.trim(),
      duration: chunkDuration,
      offset: chunkOffset,
    })
  }

  return newTranscript
}
