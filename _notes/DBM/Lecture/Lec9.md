# Relational Database Design 3rd Normal Form

- There are some situations that
  - BCNF decomposition is not dependency preserving, but
  - efficiently checking the dependency violation on updates is important.
- Thus, we define a weaker normal form called Third Normal Form (3NF).
  - 3NF allows some redundancy
  - But functional dependencies can be checked on individual relations without computing a join.
There is always a lossless-join, dependency-preserving decomposition into 3NF.

## $3^{rd}$ Normal Form
