CREATE EXTENSION IF NOT EXISTS vector;


-- DropForeignKey
ALTER TABLE "Embedding" DROP CONSTRAINT "Embedding_videoId_fkey";

-- AlterTable
ALTER TABLE "Embedding" ALTER COLUMN "videoId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Embedding" ADD CONSTRAINT "Embedding_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "YoutubeVideo"("videoId") ON DELETE RESTRICT ON UPDATE CASCADE;
