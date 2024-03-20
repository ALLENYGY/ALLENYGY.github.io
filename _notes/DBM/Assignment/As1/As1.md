# Assignment

## Q1. Please explain why people use database systems instead of file systems with 3 examples

1. **Atomicity of updates**
    For example, it can ensure that fund transfers between accounts are either successfully completed or not executed at all. In database systems, this guarantee can prevent situations where funds are deducted for some reason but not added to another account, thereby avoiding data inconsistency and financial losses. File systems lack such guarantees, making inconsistencies more likely in such transactions.
2. **Concurrent access by multiple users**
    For example, database systems enable multiple students to enroll in courses simultaneously, enhancing system performance. However, without proper management, uncontrolled concurrent access may lead to issues like overbooking courses, causing frustration among students.
3. **Security problems**
    For example, in a healthcare database, it's vital to control access to patient records. Database systems offer fine-grained access control, allowing restrictions based on roles. For instance, doctors and nurses can access medical records, but administrative staff cannot. Achieving this control is challenging in a file system, posing security risks.

## Q2. Please list the steps to design a database

1. **Conceptual Design**
2. **Logical Design**
3. **Optimization**
4. **Physical Design**

## Q3. What is a schema?

- A schema in the context of databases is a structured blueprint that defines how data is organized, relationships are managed, and constraints are applied within a database system.

## Q4. What is a key?

- The set of special attribute(s) is called key.
- Formally, a key of an entity set is a set of attributes that can uniquely identify the entities.

## Q5. Suppose you are the manager of a supermarket. You want to design an ER diagram to model customers, products, and sales under the following assumptions

<!-- ![DB-As1-Supermarket](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/DB-As1-Supermarket.png) -->
<!-- ![DB-As1-Supermarket](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/DB-Supermarket-1.png) -->
<!-- ![DB-Supermarket](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/DB-Supermarket-3.png) -->
![DB-Supermarket](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/DB-Supermarket.png)

## Q6. Write a query for each following question. Assuming students’ name and instructors’ name are unique

1.Find the major number of the student Eva:

```sql
SELECT major
FROM student
WHERE sname='Eva';
```

2.Find the name of the professors (instructors’ position) who are from the Computer Science department:

```sql
SELECT iname 
FROM instructor
WHERE department='Computer Science';
```

3.Find the name of the professors (instructors’ position) who are from the Computer Science department:

```sql
SELECT cname
FROM course
WHERE credit=1;
```

4.Find the name of the students who have received an A in a course in semester 2023 Spring:

```sql
SELECT sname 
FROM student, enroll
WHERE enroll.grade = 'A'
AND enroll.semester = '2023 Spring'
AND student.sID = enroll.sID;
```

5.Find the name of the courses which are instructed by Dave (instructor’s name):

```sql
SELECT cname
FROM course,instructor,teach
WHERE instructor.iname = 'Dave'
AND instructor.iID = teach.iID
AND teach.cID = course.cID;
```

6.Find the name of the instructors who have taught Frank (student’s name) in semester 2022 Fall:

```sql
SELECT iname
FROM instructor,student,teach,enroll
WHERE student.sname = 'Frank'
AND student.sID = enroll.sID
AND enroll.cID = teach.cID 
AND teach.semester = '2022 Fall'
AND teach.iID = instructor.iID
```
