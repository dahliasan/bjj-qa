import { OpenAI, OpenAIChat } from 'langchain/llms'

import { ConversationalRetrievalQAChain } from 'langchain/chains'
import { HNSWLib } from 'langchain/vectorstores'
import { OpenAIEmbeddings } from 'langchain/embeddings'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import * as fs from 'fs'
import { config } from 'dotenv'
config()

export const run = async () => {
  /* Initialize the LLM to use to answer the question */
  const model = new OpenAI({})
  /* Load in the file we want to do question answering over */
  const text = fs.readFileSync('state_of_the_union.txt', 'utf8')
  /* Split the text into chunks */
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 })
  const docs = await textSplitter.createDocuments([text])
  /* Create the vectorstore */
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings())
  /* Create the chain */
  const options = {
    returnSourceDocuments: true,
  }
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever(),
    options
  )
  /* Ask it a question */
  const question = 'What did the president say about Justice Breyer?'
  const res = await chain.call({ question, chat_history: [] })
  console.log(res)
  /* Ask it a follow up question */
  const chatHistory = question + res.text
  const followUpRes = await chain.call({
    question: 'repeat your last message',
    chat_history: chatHistory,
  })
  console.log(followUpRes)
}

// run()

const chat = new OpenAI({
  streaming: true,
})

chat.callbackManager.handleLLMNewToken = async (token) => {
  console.log(token)
}

const response = await chat.call('Write me a song about sparkling water.')
console.log(response)
