# Advanced SQL

Constraints

- Integrity Constraints
- Check Clauses
- Referential Integrity
- Keys and Referential Integrity
- Cascading actions in referential integrity
- Assertions

## Integrity Constraints

Integrity constraints guard against accidental damage to the database, by ensuring that authorized changes to the database do not result in a loss of data consistency.

- Example:
  - gpa must be from 0.0 to 4.0

```sql
ALTER TABLE STUDENT
ADD CONSTRAINT gpa_domain
CHECK()
```