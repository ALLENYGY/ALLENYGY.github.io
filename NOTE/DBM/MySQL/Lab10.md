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
CHECK(gpa>=0.00 AND gpa<=4.00)
```

## Referential Integrity

Referential integrity ensures that a value that appears in one relation table for a given set of attributes must also appears in the corresponding set of attributes in the other relation table

关联删除
关联更新
