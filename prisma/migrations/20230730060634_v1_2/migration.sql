/*
  Warnings:

  - Added the required column `id` to the `service_main` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_service_main" (
    "id" INTEGER NOT NULL,
    "service_id" INTEGER NOT NULL,
    "link_id" INTEGER NOT NULL,
    "quote_id" INTEGER NOT NULL,
    "value1" INTEGER NOT NULL,
    "value2" REAL NOT NULL
);
INSERT INTO "new_service_main" ("link_id", "quote_id", "service_id", "value1", "value2") SELECT "link_id", "quote_id", "service_id", "value1", "value2" FROM "service_main";
DROP TABLE "service_main";
ALTER TABLE "new_service_main" RENAME TO "service_main";
CREATE UNIQUE INDEX "service_main_id_key" ON "service_main"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
