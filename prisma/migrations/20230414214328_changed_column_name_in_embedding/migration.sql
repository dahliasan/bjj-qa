CREATE EXTENSION IF NOT EXISTS vector;


/*
  Warnings:

  - You are about to drop the column `offset` on the `Embedding` table. All the data in the column will be lost.
  - Added the required column `startTime` to the `Embedding` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Embedding" DROP COLUMN "offset",
ADD COLUMN     "startTime" INTEGER NOT NULL;
