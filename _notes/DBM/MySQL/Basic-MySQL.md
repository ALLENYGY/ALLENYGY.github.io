---
Title: "[[Basic-MySQL]]"
status: DONE
tags:
  - MySQL
  - NOTE
  - Lec1
Author:
  - AllenYGY
created: 2023-11-17T15:52
updated: 2024-03-21T21:43
---

# [[Basic-MySQL]]

The basic query has three clauses: SELECT, FROM, and WHERE.

- SELECT: contains one or multiple attributes.
  These attributes are displayed in the result.
  The symbol “*” means all attributes.
- The FROM clause contains one or more tables.
- The WHERE clause contains a single predicate.
It is a logical test on every row of the table which returns true or false.
If multiple queries are executed at the same time, a semicolon “;” is used as a delimiter to split two queries.

- A query is executed as follows.
The system test the predicate on every tuple from the table in the FROM clause.
If a tuple satisfies the predicate, show the values of the attributes in the SELECT clause in the result.

## Predicates

1. The predicate in the WEHERE clause is regarded as a logic test.
  The return value of a predicate is a Boolean, either 1 (True) or 0 (False).
2. Formally, suppose op is a relation operator, which can be =, >, >=, <, <=, and <> (not equal);
  a predicate can be a single term

```pseudocode
  pred = term
  term = exp op exp
```
“exp” is an arithmetic expression which contains attributes and constants.

For example

```sql
rental_rate < 1
```

1. A predicate can also be a composition of terms.

```pseudocode
  pred = NOT pred
  pred = pred AND pred
  pred = pred OR pred
```

NOT, AND, OR are logical operators.
For example,

```sql
NOT rental_rate < 1
(NOT rental_rate < 1) AND release_year = 2006
```

```sql
SELECT * FROM film WHERE rating="PG-13"
```
SQL is case insensitive.
However, to make query readable, we write
key words (like SELECT, FROM, etc.) in capital;
attributes and tables in lower cases; and string constant in the original form.

In general, a basic query is in the form
```sql
SELECT a1,⋯,an FROM r WHERE P
```
where $a_1,⋯,a_n$ are attributes; r is a table; and P is a predicate.
