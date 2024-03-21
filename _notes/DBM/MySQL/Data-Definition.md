---
Title: "[[Data-Definition]]"
status: DONE
tags:
  - MySQL
  - NOTE
  - Lec5
Author:
  - AllenYGY
created: 2023-11-18T12:37
updated: 2024-03-21T21:47
---
# [[Data-Definition]]

- Data definition language defines
- Databases
- Tables
- Attributes and their types
- Constraints

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department VARCHAR(100),
    salary DECIMAL(10, 2) NOT NULL
);
```

```sql
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
    PRIMARY KEY (column_name(s)),
    FOREIGN KEY (column_name) REFERENCES other_table_name(column_name)
);
```

```sql
ALTER TABLE borrow ADD FOREIGN KEY (ISBN) REFERENCES books(ISBN)
```

## CREATE

- create database

```sql
CREATE DATABASE uic_example
```

- create table

```sql
CREATE TABLE table_name (
  attribute1 type1,
  attribute2 type2,
  …
  constraint1, 
  constraint2,
  …
)
```

“table_name” is the name of the table.
“attribute” is the name of the attribute.
“type” is the data type for the attribute.
“constraint” is a condition on the table. If users try to insert some data violating the condition, the system will give a warning.

## Data Type

|Data Type|Description|
|---------|----------|
| char(n) |fixed length character string of at most length n.|
| varchar(n) |variable length character string of at most length n.|
| int| integer (a finite subset of the integers that is - machine-dependent).|
| smallint|small integer (a machine-dependent subset of the integer - domain type).|
| numeric(p,n)|fixed point number, with user-specified precision of p digits, and with n digits to the right of decimal point. |
| real |floating point, with machine-dependent precision.|
| float(n)| floating point number, with user-specified precision of at  least n digits.|
| year |4-digit string or 4-digit number from 1901 to 2155.|
| date |in ‘YYYY-MM-DD’ format from 1000-01-01 to 9999-12-31.|
| time |in ‘HH:MM:SS’ format.|
| blob |binary large object, usually for images.|
| clob |character large object, usually for long text.|

VARCHAR 不定长
CHAR 定长

## Constraints

- PRIMARY KEY (attribute)
One or multiple attribute(s)
Uniquely identify the tuples
Unique for each table
Cannot be a NULL value by default
- NOT NULL
The value of the attribute cannot be unknown.
The condition is checked when rows are inserted into the table.

## Foreign key

```sql
FOREIGN KEY (attribute(s)1) REFERENCES table2(attribute(s)2)
```

- “attribute(s)1” in the current table and “attribute(s)2” in “table2” represent the same piece of information.
- “attribute(s)2” is the primary key for “table2”.
- A value of “attribute(s)1” in the current table cannot exist alone.

- To add foreign keys to an existing table, we need to change the schema.

```sql
ALTER TABLE borrow ADD FOREIGN KEY (ISBN) REFERENCES books(ISBN)
```

ALTER TABLE: the keyword to change the schema of a table.
borrow: the table name.
ADD: to add new attributes or constraints (“DROP” to remove attributes or constraints).
FOREIGN KEY: the constraint.
(ISBN): the foreign key.
REFERENCES: the keyword to indicate which attribute is the target.
books(ISBN): the attribute “ISBN” in the table “books” is referenced.
