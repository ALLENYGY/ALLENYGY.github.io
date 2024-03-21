---
Title: "[[Null-Subquery]]"
status: DONE
tags:
  - MySQL
  - NOTE
  - Lec7
Author:
  - AllenYGY
created: 2023-12-27T01:37
updated: 2024-03-21T21:49
---

# [[Null-Subquery]]

## NULL

- The domain of each data type contains a special value – NULL.
  - NULL means the value is unknown or does not exist.
  - NULL values can participate calculations in the arithmetic expressions
  - aggregation functions, comparisons, and predicates (logical test) in the WHERE clause.

### Arithmetic and Atomic Predicate

- To check whether a value of an attribute is NULL (atomic predicate)

```sql
WHERE attribute IS NULL
```

- Any arithmetic expression which has NULL values is evaluated as NULL.
For example, this query is same as the above.
SELECT * FROM staff WHERE (picture+1) IS NULL

### Aggregation

Different aggregation functions treat NULL values differently.

- If NULL values and non-NULL values are mixed,
  - all aggregation functions ignore NULL values.
- If the group only consists of NULL values,
  - count returns 0;
  - other aggregation functions return NULL.

- 如果NULL与非NULL的属性混合 那么所有aggregation function会忽略 NULL
- 如果只有NULL，那么count() return 0,其他aggragation function return NULL

### Comparison and Compound Predicates

- The logic with NULL values has three constants:
  - TRUE, FALSE, and UNKNOWN *三值判断体系*
- A comparison with NULL values is evaluated as UNKNOWN.
To check whether a logical constant is UNKNOWN, use IS UNKNOWN.
For example, try the query and check the outcome.

SELECT staff_id FROM staff WHERE (staff_rating>5) IS UNKNOWN

- 如果某个 attribute = NULL 那么他的逻辑判断结果 为 UNKNOWN

- OR:
  - (unknown OR true) = true
  - (unknown OR false) = unknown
  - (unknown OR unknown) = unknown
- AND:
  - (true AND unknown) = unknown
  - (false AND unknown) = false
  - (unknown AND unknown) = unknown
- NOT:
  - (NOT unknown) = unknown

## Subquery

- A subquery is a query (SELECT…FROM…WHERE) inside another query.

Subqueries can be in all of SELECT, FROM, and WHERE clauses.

In the FROM clause, users need to indicate some tables.
A “SELECT…FROM…WHERE…” query returns a temporary table. (The type is matched.)
