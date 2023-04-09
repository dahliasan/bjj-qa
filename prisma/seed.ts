import { PrismaClient } from '@prisma/client'
import { CSVLoader } from 'langchain/document_loaders'
import { YoutubeTranscript } from 'youtube-transcript'
import { Embeddings, OpenAIEmbeddings } from 'langchain/embeddings'

const prisma = new PrismaClient()

async function main() {
  const loader = new CSVLoader('data/youtube videos - Sheet1.csv')

  const videos = await loader.load()

  videos.forEach(async (video) => {
    const pageContent = video.pageContent
    const metadata = video.metadata
    const title = pageContent?.match(/video: (.+)/)?.[1] ?? ''
    const videoUrl = pageContent?.match(/video_url: (.+)/)?.[1] ?? ''
    const videoId = videoUrl?.match(/v=(.+)/)?.[1] ?? ''
    const channel = pageContent?.match(/channel: (.+)/)?.[1] ?? ''
    const thumbnailUrl = pageContent?.match(/thumbnail: (.+)/)?.[1] ?? ''
    let transcript

    try {
      transcript = await YoutubeTranscript.fetchTranscript(videoId)
    } catch (e) {
      console.log('videoId: ', videoId)
      console.log(metadata)
      console.error(e)
    }

    const newVideo = await prisma.youtubeVideo.upsert({
      where: { videoId },
      update: {},
      create: {
        videoId,
        title,
        channel,
        thumbnailUrl,
        embedding: {
          create: {
            chunk: 'Check out Prisma with Next.js',
            duration: 123,
            offset: 123,
          },
        },
      },
    })

    //   save each video metadata to database

    //   get transcript chunks for each video

    //   save each chunk to database
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
