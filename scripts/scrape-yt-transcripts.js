// script.js
import { CSVLoader } from 'langchain/document_loaders'
import { YoutubeTranscript } from 'youtube-transcript'
import { OpenAIEmbeddings } from 'langchain/embeddings'
;(async () => {
  const loader = new CSVLoader('data/youtube videos - Sheet1.csv')

  const docs = await loader.load()
  console.log(docs)

  docs.slice(0, 1).forEach(async (doc) => {
    const pageContent = doc.pageContent
    const title = pageContent.match(/video: (.+)/)[1]
    const videoUrl = pageContent.match(/video_url: (.+)/)[1]
    const videoId = videoUrl.split('v=')[1].split('&')[0]
    const channel = pageContent.match(/channel: (.+)/)[1]
    const thumbnailUrl = pageContent.match(/thumbnail: (.+)/)[1]

    try {
      const transcript = await YoutubeTranscript.fetchTranscript(videoId)
      console.log({
        title,
        videoId,
        channel,
        thumbnailUrl,
        transcript: transcript[0],
      })

      /* Create instance */
      const embeddings = new OpenAIEmbeddings()

      /* Embed queries */
      const res = await embeddings.embedQuery('Hello world')
    } catch (error) {
      console.log(videoId, error)
    }
  })
})()
