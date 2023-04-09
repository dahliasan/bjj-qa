CREATE EXTENSION IF NOT EXISTS vector;

-- CreateTable
CREATE TABLE "Transcript" (
    "id" SERIAL NOT NULL,
    "videoId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "transcript" TEXT NOT NULL,
    "category" TEXT,
    "channel" TEXT,
    "thumbnailUrl" TEXT,

    CONSTRAINT "Transcript_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Embedding" (
    "id" SERIAL NOT NULL,
    "transcriptId" INTEGER NOT NULL,
    "chunk" TEXT NOT NULL,
    "timestamp" TEXT NOT NULL,
    "embedding" vector,

    CONSTRAINT "Embedding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transcript_videoId_key" ON "Transcript"("videoId");

-- AddForeignKey
ALTER TABLE "Embedding" ADD CONSTRAINT "Embedding_transcriptId_fkey" FOREIGN KEY ("transcriptId") REFERENCES "Transcript"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
