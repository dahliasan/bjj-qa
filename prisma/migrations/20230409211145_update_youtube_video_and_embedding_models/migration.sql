CREATE EXTENSION IF NOT EXISTS vector;

/*
  Warnings:

  - You are about to drop the `Transcript` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Embedding" DROP CONSTRAINT "Embedding_transcriptId_fkey";

-- DropTable
DROP TABLE "Transcript";

-- CreateTable
CREATE TABLE "YoutubeVideo" (
    "id" SERIAL NOT NULL,
    "videoId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "channel" TEXT,
    "thumbnailUrl" TEXT,

    CONSTRAINT "YoutubeVideo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeVideo_videoId_key" ON "YoutubeVideo"("videoId");

-- AddForeignKey
ALTER TABLE "Embedding" ADD CONSTRAINT "Embedding_transcriptId_fkey" FOREIGN KEY ("transcriptId") REFERENCES "YoutubeVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
