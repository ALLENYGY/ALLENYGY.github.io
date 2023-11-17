# Basic MySQL

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

- rental_rate < 1

3. A predicate can also be a composition of terms.

```pseudocode
  pred = NOT pred
  pred = pred AND pred
  pred = pred OR pred
```
