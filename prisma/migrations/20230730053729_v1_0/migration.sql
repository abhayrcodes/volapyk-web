-- CreateTable
CREATE TABLE "cases" (
    "id" INTEGER NOT NULL,
    "title" TEXT,
    "classification" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "modified_services" (
    "service_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "new_links" (
    "service_id" INTEGER NOT NULL,
    "service_name" TEXT NOT NULL,
    "link" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "quotes" (
    "service_id" INTEGER NOT NULL,
    "link_id" INTEGER NOT NULL,
    "quote_id" INTEGER NOT NULL,
    "quote" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "scored_links" (
    "service_id" INTEGER NOT NULL,
    "link_id" INTEGER NOT NULL,
    "link" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "service_main" (
    "service_id" INTEGER NOT NULL,
    "link_id" INTEGER NOT NULL,
    "quote_id" INTEGER NOT NULL,
    "value1" INTEGER NOT NULL,
    "value2" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "service_scores" (
    "service_id" INTEGER NOT NULL,
    "service_name" TEXT NOT NULL,
    "num_score" REAL NOT NULL,
    "char_score" TEXT NOT NULL,
    "relevance_percent" INTEGER NOT NULL,
    "case0_id" INTEGER NOT NULL,
    "case0_title" TEXT NOT NULL,
    "case0_class" TEXT NOT NULL,
    "case1_id" INTEGER NOT NULL,
    "case1_title" TEXT NOT NULL,
    "case1_class" TEXT NOT NULL,
    "case2_id" INTEGER NOT NULL,
    "case2_title" TEXT NOT NULL,
    "case2_class" TEXT NOT NULL,
    "case3_id" INTEGER NOT NULL,
    "case3_title" TEXT NOT NULL,
    "case3_class" TEXT NOT NULL,
    "case4_id" INTEGER NOT NULL,
    "case4_title" TEXT NOT NULL,
    "case4_class" TEXT NOT NULL,
    "case5_id" INTEGER NOT NULL,
    "case5_title" TEXT NOT NULL,
    "case5_class" TEXT NOT NULL,
    "case6_id" INTEGER NOT NULL,
    "case6_title" TEXT NOT NULL,
    "case6_class" TEXT NOT NULL,
    "case7_id" INTEGER NOT NULL,
    "case7_title" TEXT NOT NULL,
    "case7_class" TEXT NOT NULL,
    "case8_id" INTEGER NOT NULL,
    "case8_title" TEXT NOT NULL,
    "case8_class" TEXT NOT NULL,
    "case9_id" INTEGER NOT NULL,
    "case9_title" TEXT NOT NULL,
    "case9_class" TEXT NOT NULL,
    "case10_id" INTEGER NOT NULL,
    "case10_title" TEXT NOT NULL,
    "case10_class" TEXT NOT NULL,
    "case11_id" INTEGER NOT NULL,
    "case11_title" TEXT NOT NULL,
    "case11_class" TEXT NOT NULL,
    "case12_id" INTEGER NOT NULL,
    "case12_title" TEXT NOT NULL,
    "case12_class" TEXT NOT NULL,
    "case13_id" INTEGER NOT NULL,
    "case13_title" TEXT NOT NULL,
    "case13_class" TEXT NOT NULL,
    "case14_id" INTEGER NOT NULL,
    "case14_title" TEXT NOT NULL,
    "case14_class" TEXT NOT NULL,
    "case15_id" INTEGER NOT NULL,
    "case15_title" TEXT NOT NULL,
    "case15_class" TEXT NOT NULL,
    "case16_id" INTEGER NOT NULL,
    "case16_title" TEXT NOT NULL,
    "case16_class" TEXT NOT NULL,
    "case17_id" INTEGER NOT NULL,
    "case17_title" TEXT NOT NULL,
    "case17_class" TEXT NOT NULL,
    "case18_id" INTEGER NOT NULL,
    "case18_title" TEXT NOT NULL,
    "case18_class" TEXT NOT NULL,
    "case19_id" INTEGER NOT NULL,
    "case19_title" TEXT NOT NULL,
    "case19_class" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "cases_id_key" ON "cases"("id");

-- CreateIndex
CREATE UNIQUE INDEX "cases_title_key" ON "cases"("title");

-- CreateIndex
CREATE UNIQUE INDEX "modified_services_service_id_key" ON "modified_services"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "new_links_link_key" ON "new_links"("link");

-- CreateIndex
CREATE UNIQUE INDEX "quotes_quote_id_key" ON "quotes"("quote_id");

-- CreateIndex
CREATE UNIQUE INDEX "scored_links_link_id_key" ON "scored_links"("link_id");

-- CreateIndex
CREATE UNIQUE INDEX "scored_links_link_key" ON "scored_links"("link");

-- CreateIndex
CREATE UNIQUE INDEX "service_main_service_id_key" ON "service_main"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "service_scores_service_id_key" ON "service_scores"("service_id");
