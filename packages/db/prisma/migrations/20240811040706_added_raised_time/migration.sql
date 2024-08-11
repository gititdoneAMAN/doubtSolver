/*
  Warnings:

  - Added the required column `raisedAt` to the `Doubts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Doubts" ADD COLUMN     "raisedAt" TIMESTAMP(3) NOT NULL;
