CREATE EXTENSION IF NOT EXISTS vector;

/*
  Warnings:

  - You are about to drop the column `timestamp` on the `Embedding` table. All the data in the column will be lost.
  - You are about to drop the column `transcriptId` on the `Embedding` table. All the data in the column will be lost.
  - Added the required column `duration` to the `Embedding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `offset` to the `Embedding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoId` to the `Embedding` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Embedding" DROP CONSTRAINT "Embedding_transcriptId_fkey";

-- AlterTable
ALTER TABLE "Embedding" DROP COLUMN "timestamp",
DROP COLUMN "transcriptId",
ADD COLUMN     "duration" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "offset" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "videoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Embedding" ADD CONSTRAINT "Embedding_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "YoutubeVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
