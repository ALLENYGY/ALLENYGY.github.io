# Data Modification

- INSERT

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES
    (value1_1, value1_2, value1_3, ...),
    (value2_1, value2_2, value2_3, ...),
    ...
```

```sql
INSERT INTO destination_table (column1, column2, ...)
SELECT column1, column2, ...
FROM source_table
WHERE conditions;
```

- UPDATE

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

- DELETE

```sql
DELETE FROM table_name
WHERE condition;
```

Usually, database users are only allowed to change data (table rows), which is covered by this lab.
Table columns are related to the logical design and are managed by database managers.
To change the logical design, you need ALTER TABLE (last lab).

## INSERT

1. To insert a record for a program:

Program code: 1001
Program name: Computer Science
Division: Science and Technology
Director: NULL (unknown)

```sql
INSERT INTO program (p_code, p_name, division, director_id) VALUES (1001, 'Computer Science', 'Science and Technology', NULL);
```

The schema of the table is to remind users the data types, which can be omitted.
Currently, the instructor table is empty. So, the program director is unknown.

- Insert Example

```txt
Course:
Name: Introduction to Biology,   Credits: 3, 
Domain: ENVS,      Course Number: 2001

Instructor:
ID: 20002,   Name: S.H. Zee,  Title: Professor, 
Salary: 100000,  Program: Environmental Science

Program:
ID: 1002,      Name: Environmental Science,  
Division: Science and Technology,  Program director: Unknown
```

the instructor cannot be inserted before the program

```sql
INSERT INTO course VALUES 
('Introduction to Biology', 3, 'ENVS', 2001);

INSERT INTO program VALUES 
(1002, 'Environmental Science', 'Science and Technology', NULL);

INSERT INTO program VALUES
(20002, 'S.H. Zee', 'Professor', 100000, 1002);
```

2. Sometimes we can insert data constructed from other tables.
Suppose we want to express that the program Environmental Science offers the course Introduction to Biology.

```sql
INSERT INTO offer 
        SELECT p_code,c_name 
        FROM program,course 
        WHERE p_name='Environmental Science' 
          AND c_name = 'Introduction to Biology '
```

- SELECT…FROM…WHERE… constructs the tuples which are inserted to “offer”.

## UPDATE

- Suppose Prof. S.T. Kwok becomes the new program director for Computer Science. We need to update the table.

```sql
UPDATE program 
SET director_id = (SELECT id FROM instructor WHERE i_name='S.T. Kwok') 
WHERE p_name = 'Computer Science'
```

UPDATE: the keyword to update a table, followed by the table name.
SET: the keyword to update a specific column, followed by an assignment operation.
(…): a subquery to find the person id of S.T. Kwok.
WHERE: only update the rows which satisfy the condition in the WHERE clause.

## DELETE

- Suppose Prof. S.T. Kwok has retired. All his information should be removed from the system.

```sql
DELETE FROM instructor WHERE i_name='S.T. Kwok'
```

- Every row which satisfies the condition will be removed. Thus, be careful.
