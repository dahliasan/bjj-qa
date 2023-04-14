import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaVectorStore } from 'langchain/vectorstores'
import { OpenAIEmbeddings } from 'langchain/embeddings'
import { PrismaClient, Prisma, Embedding } from '@prisma/client'
import { openaiStream } from '@/utils/openai-client'
import { ConversationalRetrievalQAChain } from 'langchain/chains'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { question, history } = req.body

  if (!question) {
    return res.status(400).json({ message: 'No question in the request' })
  }
  // OpenAI recommends replacing newlines with spaces for best results
  const sanitizedQuestion = question.trim().replaceAll('\n', ' ')

  /* create vectorstore*/
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

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
  })

  const sendData = (data: string) => {
    res.write(`data: ${data}\n\n`)
  }

  sendData(JSON.stringify({ data: '' }))

  const model = openaiStream
  model.callbackManager.handleLLMNewToken = async (token: string) => {
    sendData(JSON.stringify({ msg: token }))
  }

  // create the chain
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever(),
    { returnSourceDocuments: true }
  )

  try {
    //Ask a question
    const response = await chain.call({
      question: sanitizedQuestion,
      chat_history: history || [],
    })
    sendData(JSON.stringify({ sources: response }))
  } catch (error) {
    console.log('error', error)
  } finally {
    sendData('[DONE]')
    res.end()
  }
}
