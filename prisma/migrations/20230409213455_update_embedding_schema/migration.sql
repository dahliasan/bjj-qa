CREATE EXTENSION IF NOT EXISTS vector;

/*
  Warnings:

  - You are about to alter the column `duration` on the `Embedding` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `offset` on the `Embedding` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Embedding" ALTER COLUMN "duration" SET DATA TYPE INTEGER,
ALTER COLUMN "offset" SET DATA TYPE INTEGER;
