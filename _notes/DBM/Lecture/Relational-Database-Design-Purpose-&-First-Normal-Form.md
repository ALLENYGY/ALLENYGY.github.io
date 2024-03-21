---
Title: "[[Relational-Database-Design-Purpose-&-First-Normal-Form]]"
status: DONE
tags:
  - DataBase
  - NOTE
  - Lec6
Author:
  - AllenYGY
created: 2023-12-03T22:39
updated: 2024-03-21T21:39
---
# [[Relational-Database-Design-Purpose-&-First-Normal-Form]]

- Good Relational Design
  - Retrieve information easily, obtain all constraints, minimize redundancies, and have no ambiguous

Normally, The logical design is good enough because the ER diagram is carefully designed.

- Large Schema

Suppose that instead of the schemas
    $course =(\underline{(c\_name)},credits,domain,c\_number)$
    $offer=(\underline{p\_code,c\_name})$
we have a larger schema
    $course_info=(c\_name,credits,domain,c\_number,p\_code)$
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/DBM/problem_large_schema.png"/>
From the example, we see redundancy occurs.

- Small Schema

Sometimes decompositions are useless.
Sometimes naive decompositions create inconsistency.

## Functional Dependency

For one attribute A of the schema, the other attributes it can be  identified.
A->B,C,D

## First Normal Form *第一范式*

A domain is atomic if its elements are considered to be indivisible units.
A relational schema R is in first normal form if the domains of all attributes of R are atomic.
Non-atomic values complicate storage and encourage redundant (repeated) storage of data.
Atomicity is actually a property of how the elements of the domain are used.
