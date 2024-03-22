# D427 Data Management Applications

## Tips

- <https://www.reddit.com/r/WGU/comments/160o0zn/passed_data_management_applications_d427/>
  - zybooks labs **2.9 – 2.12, 2.14, 7.1 – 7.9, 8.1 – 8.17**.
- <https://www.reddit.com/r/wgu_devs/comments/16y8s91/passed_d427_data_management_applications_in_5/>
  - Something around 80% of the PA/OA are syntax-based questions like the Section 7 & 8 labs, so you don't need to go super hard into nitty-gritty details about database design or models. I just recommend you have a general understanding of:
  - Database Model Relationships cardinality: (one-to-many, many-to-many, one-to-one, many-to-one)
  - Definitely make sure you know the following info (This is from Zybooks from chapter 1 that I looked at briefly following a question I had on my PA):
    - Data Definition Language (DDL) defines the structure of the database. CREATE, ALTER, DROP.
    - Data Query Language (DQL) retrieves data from the database. SELECT
    - Data Manipulation Language (DML) Manipulates data stored in a database. INSERT, UPDATE, DELETE.
    - Data Control Language (DCL) controls database user access.
    - Data Transaction Language (DTL) manages database transactions.
- <https://www.reddit.com/r/wgu_devs/comments/17afghu/i_passed_data_management_applications_d427/>
  - UPDATE Table Data
  - INSERT INTO Table Data
  - ALTER Table Data Adding Columns/Keys
  - Adding Primary Keys and Foreign Keys
  - COUNT(\*) statement for counting the total number of things
  - MIN/MAX statements
  - Adding and removing an index
  - Knowing how to use LEFT/RIGHT Join
  - Removing Columns
  - Adding and Dropping Views
  - DELETE statements
  - ORDER BY statements
  - GROUP BY statements
  - WHERE statements
  - Data types:
    - Char (fixed string)
    - VarChar (Variable length string)
    - INT (UNSIGNED For Positive)
    - DATE (For date)
    - DECIMAL (UNSIGNED For positive decimals).
  - Need to know all ALTER statements and MAX() MIN() or COUNT().
- I found the biggest help was when I discovered the DESCRIBE statement as I was able to verify my statements worked as intended before submitting.

```sql
-- all have same results.
SHOW COLUMNS FROM table_name;
EXPLAIN table_name;
SHOW CREATE TABLE table_name; -- view all table contraints.

-- Correct way to query.
SELECT * FROM table_name
WHERE = "some condition";
DESCRIBE table_name;
```

- <https://www.reddit.com/r/WGU_CompSci/comments/199tofm/d427_data_management_applications_passed_in_2_days/>
  - [zybook 7,8 answer key](https://quizlet.com/849950034/wgu-d427-data-management-applications-zybooks-labs-7-and-8-flash-cards/?i=4ztji0&x=1jqt)
  - KNOW: **Cardinality, DDL, DML, JOINS (OUTER/INNER), FOREIGN KEYS, PRIMARY KEYS, GROUP BY, ORDER BY, INDEXES, VIEWS**: for both the syntax and general multiple choice questions.

```sql
-- ALTER
ALTER TABLE tb_name
  [ ADD [CONSTRAINT|COLUMN] | DROP [CONSTRAINT|COLUMN] | CHANGE | MODIFY ] col_name INT NOT NULL;
ALTER TABLE tb
  [CHANGE|MODIFY] col INT PRIMARY KEY;

-- CREATE
CREATE TABLE tb(
  ID INT UNSIGNED AUTO_INCREMENT NOT NULL,
  col2 VARCHAR(255) NOT NULL,
  PRIMARY KEY(col1)
);

-- DELETE
DELETE FROM tb_name
WHERE col = 4
  OR col2 = 5

-- INDEX
CREATE INDEX index_name
  ON table_name (column1, column2, ...);
-- INDEX DROP
DROP INDEX index_name
  ON table_name;

-- INSERT
INSERT INTO tb_name (col1, col2) VALUES
  (val1, val2),
  (val1, val2);

-- JOIN: INNER JOIN, OUTER: LEFT, RIGHT, FULL: CROSS.
-- INNER and OUTER are optional key words.
-- INNER: return conditional true.
-- OUTER return at least one full table and conditional true from other table.
-- FULL: return both tables.

-- KEY: PRIMARY, FOREIGN
ALTER TABLE tb
  ADD CONSTRAINT PRIMARY KEY () ON [DELETE|UPDATE] [CASCADE|SET NULL|SET DEFAULT|NO ACTION]
ALTER TABLE tb
  ADD CONSTRAINT optional_name FOREIGN KEY () REFERENCES tb(col1, col2)
    ON [DELETE|UPDATE] [CASCADE|SET NULL|SET DEFAULT|NO ACTION]

-- SELECT
SELECT col1, col2...
FROM tb
WHERE col = 5;
-- DISTINCT
SELECT DISTINCT col -- only unique values will be returned.
FROM tb;
-- GROUP BY
select col, count(*) AS 'Count'
from tb
group by col
  HAVING col = 2019;

-- UPDATE
UPDATE table_name
SET
  column1_name = column_value * 2,
  column2_name = another_columnS
WHERE column_id IN (3, 4); -- many at a time.
WHERE column_id LIKE '%h'; -- ends with h.

-- VIEW
CREATE VIEW view_name AS
SELECT col1, col2
FROM tb
WHERE col1 = 5;
-- DROP
DROP VIEW view_name;
```
