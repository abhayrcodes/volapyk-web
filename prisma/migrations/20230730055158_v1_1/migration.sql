/*
  Warnings:

  - Made the column `title` on table `cases` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cases" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "classification" TEXT NOT NULL
);
INSERT INTO "new_cases" ("classification", "id", "title") SELECT "classification", "id", "title" FROM "cases";
DROP TABLE "cases";
ALTER TABLE "new_cases" RENAME TO "cases";
CREATE UNIQUE INDEX "cases_id_key" ON "cases"("id");
CREATE UNIQUE INDEX "cases_title_key" ON "cases"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
