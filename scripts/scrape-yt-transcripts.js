// script.js
import { CSVLoader } from 'langchain/document_loaders'
import { YoutubeTranscript } from 'youtube-transcript'
;(async () => {
  const loader = new CSVLoader('data/youtube videos - Sheet1.csv')

  const docs = await loader.load()

  docs.slice(0, 1).forEach(async (doc) => {
    const pageContent = doc.pageContent
    const title = pageContent.match(/video: (.+)/)[1]
    const videoUrl = pageContent.match(/video_url: (.+)/)[1]
    const videoId = videoUrl.split('v=')[1].split('&')[0]
    const channel = pageContent.match(/channel: (.+)/)[1]
    const thumbnailUrl = pageContent.match(/thumbnail: (.+)/)[1]

    try {
      const transcript = await YoutubeTranscript.fetchTranscript(videoId)

      const biggerChunks = createFlexibleChunks(transcript, 512, 60000)
      console.log(biggerChunks)
    } catch (error) {
      console.log(videoId, error)
    }
  })
})()

function createFlexibleChunks(transcript, maxChars, maxDuration) {
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
