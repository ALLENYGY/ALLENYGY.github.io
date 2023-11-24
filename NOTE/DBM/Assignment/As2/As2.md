# Assignment

## Q1. Convert the following ER diagram into logical schemas. (20pt)

$person=(\underline{p\_id},name,gender)$
$employ=(\underline{p\_id},position,salary)$
$customer=(\underline{p\_id},calss,phone)$
$purchase=(\underline{b\_id},date,order,p\_id)$
$coupon=(\underline{id},discount,p\_id,t\_id)$
$use=(\underline{id},b\_id)$
$product\_type=(\underline{t\_id},manufacturer,type,price)$
$contain=(\underline{b\_id},l\_id)$
$product=(\underline{i\_id},exp\_date,man\_date,\underline{t\_id})$

## Q2. Implement your logical design in SQL. You need to select suitable data types and link foreign keys properly. (20pt)

```sql
CREATE TABLE person (
    p_id INT PRIMARY KEY,
    name VARCHAR(255),
    gender VARCHAR(10)
);
```
```sql
CREATE TABLE employ (
    p_id INT PRIMARY KEY,
    position VARCHAR(100),
    salary DECIMAL(10, 2),
    FOREIGN KEY (p_id) REFERENCES person(p_id)
);
```

```sql
CREATE TABLE customer (
    p_id INT PRIMARY KEY,
    class VARCHAR(50),
    phone VARCHAR(20),
    FOREIGN KEY (p_id) REFERENCES person(p_id)
);
```

```sql
CREATE TABLE purchase (
    b_id INT PRIMARY KEY,
    date DATE,
    order VARCHAR(255),
    p_id INT,
    FOREIGN KEY (p_id) REFERENCES person(p_id)
);
```

```sql
CREATE TABLE use(
  id INT PRIMARY KEY,
  b_id INT PRIMARY KEY,
)
```

```sql
CREATE TABLE coupon(
  id INT PRIMARY KEY,
  disconut DECIMAL(10,2),
  p_id INT,
  t_id INT,
  FOREIGN KEY (p_id) REFERENCES person(p_id)
  FOREIGN KEY (t_id) REFERENCES product_type(t_id)
)
```

```sql
CREATE TABLE product_type(
  t_id INT PRIMARY KEY,
  manufacturer VARCHAR(50),
  type VARCHAR(20),
  price DECIMAL(10,2),
)
```

```sql
CREATE TABLE contain(
  b_id INT PRIMARY KEY,
  i_id INT,
  FOREIGN KEY (b_id) REFERENCES purchase(b_id),
  FOREIGN KEY (i_id) REFERENCES product(i_id)
)
```

```sql
CREATE TABLE product(
  i_id INT PRIMARY KEY,
  t_id INT PRIMARY KEY,
  exp_date date,
  man_date date,
  FOREIGN KEY (t_id) REFERENCES product_type(t_id)
)
```

## 

## Q4

- Find the number of courses taught by Goliath (instructor’s name) over the years.

```sql
SELECT COUNT(DISTINCT cID) AS num_courses_taught
FROM teach
WHERE iID = 'Goliath';
```

- Find the number of courses taught by each instructor in the semester 23F.

```sql
SELECT COUNT(DISTINCT cID) As num_courses_taught_each_instructor
FROM instructor
JOIN teach USING(iID)
GROUP BY (i.name)
WHERE teach.semester='23F'
```

- Find the semester in which Goliath teaches more courses than other semesters.

```sql
SELECT teach.semester, COUNT(teach.cID) AS num_courses
FROM teach JOIN instrtuctor USING(iID)
WHERE instructor.iname='Goliath'
GROUP BY teach.semester
ORDER BY num_courses DESC
LIMIT 1;
```

- Insert a new student of ID: 123456, name: ‘Tomas’, gender: Male, GPA: unknown, major: ACCT, and phone number: 32165498701.

```sql
INSERT INTO student VALUES 
(123456, 3, 'Tomas','Male',NULL,'ACCT', 32165498701);
```

- Student ‘Dennis’ quit from the college. Please remove his information from the database.

```sql
DELETE FROM student
WHERE sname='Dennis'
```
