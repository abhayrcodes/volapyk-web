-- ONLY FOR REFERENCE

CREATE TABLE service_main2 (entry_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, service_id INTEGER NOT NULL, link_id INTEGER NOT NULL, quote_id INTEGER NOT NULL, value1 INTEGER NOT NULL, value2 REAL NOT NULL);
INSERT INTO service_main2 (service_id, link_id, quote_id, value1, value2) SELECT service_id, link_id, quote_id, value1, value2 FROM service_main;
DROP TABLE service_main;
ALTER TABLE service_main2 RENAME TO service_main;

ATTACH DATABASE frontend3.db AS old;
INSERT INTO cases SELECT * FROM old.cases;
INSERT INTO modified_services SELECT * FROM old.modified_services;
INSERT INTO new_links SELECT * FROM old.new_links;
INSERT INTO quotes SELECT * FROM old.quotes;
INSERT INTO scored_links SELECT * FROM old.scored_links;
INSERT INTO service_main SELECT * FROM old.service_main;
INSERT INTO service_scores SELECT * FROM old.service_scores;