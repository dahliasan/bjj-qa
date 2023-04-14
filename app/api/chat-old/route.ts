import { NextRequest, NextResponse } from 'next/server'
import { PrismaVectorStore } from 'langchain/vectorstores'
import { OpenAIEmbeddings } from 'langchain/embeddings'
import { PrismaClient, Prisma, Embedding } from '@prisma/client'
import { openaiStream } from '@/utils/openai-client'
import { ConversationalRetrievalQAChain } from 'langchain/chains'

// export const config = {
//   runtime: 'edge',
// }

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const data = await request.json()
  const { question, history } = data

  if (!question) {
    return NextResponse.json(
      { message: 'No question in the request' },
      { status: 400 }
    )
  }

  const sanitizedQuestion = question.trim().replaceAll('\n', ' ')

  const vectorStore = PrismaVectorStore.withModel<Embedding>(prisma).create(
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

  const sendData = (data: string) => {
    return NextResponse.json(
      { data: `${data}\n\n` },
      {
        status: 200,
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache, no-transform',
          Connection: 'keep-alive',
        },
      }
    )
  }
  const model = openaiStream

  model.callbackManager.handleLLMNewToken = async (token: string) => {
    sendData(token)
    return Promise.resolve()
  }

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever(),
    { returnSourceDocuments: true }
  )
  try {
    const response = await chain.call({
      question: sanitizedQuestion,
      chat_history: history || [],
    })

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.log('error', error)
  } finally {
    sendData('[DONE]')
  }
}
