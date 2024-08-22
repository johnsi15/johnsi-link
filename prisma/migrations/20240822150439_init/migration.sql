/*
  Warnings:

  - You are about to drop the column `slug` on the `Links` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Links` table. All the data in the column will be lost.
  - Added the required column `originalUrl` to the `Links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortUrl` to the `Links` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Links" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "originalUrl" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creatorId" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "lastClicked" DATETIME,
    CONSTRAINT "Links_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Links" ("clicks", "createdAt", "creatorId", "description", "id", "lastClicked") SELECT "clicks", "createdAt", "creatorId", "description", "id", "lastClicked" FROM "Links";
DROP TABLE "Links";
ALTER TABLE "new_Links" RENAME TO "Links";
CREATE UNIQUE INDEX "Links_shortUrl_key" ON "Links"("shortUrl");
CREATE INDEX "Links_shortUrl_idx" ON "Links"("shortUrl");
CREATE INDEX "Links_creatorId_idx" ON "Links"("creatorId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
