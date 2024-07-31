/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `MarkdownText` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `MarkdownText` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MarkdownText" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MarkdownText_slug_key" ON "MarkdownText"("slug");
