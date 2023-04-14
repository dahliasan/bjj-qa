import { PrismaClient, Prisma, Embedding } from '@prisma/client'
import { CSVLoader } from 'langchain/document_loaders'
import { YoutubeTranscript } from 'youtube-transcript'
import { PrismaVectorStore } from 'langchain/vectorstores'
import { OpenAIEmbeddings } from 'langchain/embeddings'
import { createFlexibleChunks } from '../utils/chunk-transcript'

export interface TranscriptChunk {
  text: string
  duration: number
  offset: number
}

export type Transcript = TranscriptChunk[]

const prisma = new PrismaClient()

const storeTranscriptEmbeddings = async (
  db: PrismaClient,
  chunks: Transcript,
  videoId: any
) => {
  const vectorStore = PrismaVectorStore.withModel<Embedding>(db).create(
    new OpenAIEmbeddings(),
    {
      prisma: Prisma,
      tableName: 'Embedding',
      vectorColumnName: 'embedding',
      columns: {
        id: PrismaVectorStore.IdColumn,
        chunk: PrismaVectorStore.ContentColumn,
      },
    }
  )

  await vectorStore.addModels(
    await db.$transaction(
      chunks.map((chunk) =>
        db.embedding.create({
          data: {
            chunk: chunk.text,
            duration: chunk.duration,
            offset: chunk.offset,
            video: {
              connect: {
                videoId: videoId,
              },
            },
          },
        })
      )
    )
  )
}

async function main() {
  // load videos from csv
  const loader = new CSVLoader('data/youtube videos - Sheet1.csv')
  const videos = await loader.load()
  const firstTwoVideos = videos.slice(0, 2)

  //   save each video metadata to database
  for (const video of firstTwoVideos) {
    const pageContent = video.pageContent
    const metadata = video.metadata
    const title = pageContent?.match(/video: (.+)/)?.[1] ?? ''
    const videoUrl = pageContent?.match(/video_url: (.+)/)?.[1] ?? ''
    const videoId = videoUrl.split('v=')[1].split('&')[0] ?? ''
    const channel = pageContent?.match(/channel: (.+)/)?.[1] ?? ''
    const thumbnailUrl = pageContent?.match(/thumbnail: (.+)/)?.[1] ?? ''

    console.log('processing video: ', videoId)
    console.log('saving video metadata to database...')
    await prisma.youtubeVideo.upsert({
      where: { videoId },
      update: {},
      create: {
        videoId,
        title,
        channel,
        thumbnailUrl,
      },
    })

    // get transcript chunks for each video
    let transcript
    try {
      // get transcript chunks for each video
      transcript = await YoutubeTranscript.fetchTranscript(videoId)
      console.log('retrieved transcript for video: ', videoId)

      // chunk transcript
      console.log('chunking transcript...')
      transcript = createFlexibleChunks(transcript, 1000, 60000) // max 1000 chracters or 1 minute
    } catch (e) {
      console.log('videoId: ', videoId)
      console.log(metadata)
      console.error(e)
    }

    if (transcript && transcript.length > 0) {
      // Store transcript embeddings in database
      console.log('storing transcript embeddings in database...')
      await storeTranscriptEmbeddings(prisma, transcript, videoId)
    }
  }
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
