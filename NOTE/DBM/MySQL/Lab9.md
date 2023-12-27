# Division and Correlated Subquery

## Division

Division operator is used for queries involving “all”.

### Example

Query: “Retrieve (all) course names that is/are taught by all programmes.”

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Mysql/Division.png"/>

The solution to the query is

$$
catalogue \div programe
$$

Database is taught by all programmes, i.e. both CST and DS.

$$
(catalogue \div programme) \times programme =\{(Database,CST),(Database,DS)\}
$$

$$
\therefore
(catalogue \div programme) \times programme \sube catalogue
$$

## Correlated Subquery

```sql
SELECT 𝐶1.𝑐_𝑛𝑎𝑚𝑒
FROM 𝑐𝑎𝑡𝑎𝑙𝑜𝑔𝑢𝑒 AS 𝐶1
WHERE NOT EXISTS (  // 遍历C1
  (SELECT 𝑝_𝑛𝑎𝑚𝑒  //Divisor
  FROM 𝑝𝑟𝑜𝑔𝑟𝑎𝑚𝑚𝑒)
    EXCEPT
  (SELECT 𝑝_𝑛𝑎𝑚𝑒 //Dividend
  FROM 𝑐𝑎𝑡𝑎𝑙𝑢𝑔𝑢𝑒 AS 𝐶2
  WHERE 𝐶2.𝑐_𝑛𝑎𝑚𝑒=𝐶1.𝑐_𝑛𝑎𝑚𝑒)// 得到C1.c_name对应的p_name集合
)
```

NOT EXISTS: 检查集合是不是NULL

- If true return true; else return false;

第一个SELECT选择的是除数
第二个SELECT选择的是被除数
EXCEPT 去除集合的公共元素

```sql
SELECT 𝐶1.𝑐_𝑛𝑎𝑚𝑒
FROM 𝑐𝑎𝑡𝑎𝑙𝑜𝑔𝑢𝑒 AS 𝐶1
WHERE NOT EXISTS (
  SELECT *
  FROM 𝑝𝑟𝑜𝑔𝑟𝑎𝑚𝑚𝑒
  WHERE 𝑝_𝑛𝑎𝑚𝑒 NOT IN(
    SELECT 𝐶2.𝑝_𝑛𝑎𝑚𝑒
    FROM 𝑐𝑎𝑡𝑎𝑙𝑜𝑔𝑢𝑒 AS 𝐶2
    WHERE 𝐶2.𝑝_𝑛𝑎𝑚𝑒=𝐶1.𝑝_𝑛𝑎𝑚𝑒
  )
)
```

### Example-for-Correlated-Subquery

- $student=(\underline{sID},sname,gender,gpa,major,phone)$
- $instructor=(\underline{iID},iname,gender,position,department)$
- $course=(\underline{cID},cname,credit)$
- $enroll=(\underline{sID,cID},semester,grade)$
// sID is a foreign key to student.sID. cID is a foreign key to course.cID.
- $teach=(\underline{iID,cID,semester})$
// iID is a foreign key to instructor.iID. cID is a foreign key to course.cID.

1. Find the students who have enrolled all courses. Display your answer by sID and sname.

```sql
SELECT s1.sID,s1.sname
FROM student AS s1
WHERE NOT EXISTS(
  (SELECT cID FROM course)
  EXCEPT
  (SELECT cID 
  FROM enroll AS e1
  WHERE s1.sID=e1.sID
  )
)
```

```sql
SELECT s1.sID,s1.sname
FROM student AS s1
WHERE NOT EXISTS(
  SELECT cID FROM course
  WHERE cID NOT IN(
    SELECT cID 
    FROM enroll AS e1
    WHERE s1.sID=e1.sID
  )
)
```
^[不需要将student，enroll，course合起来]

2. Find the students who have taken all courses instructed by Goliath (instructor’s name and assuming that there is no other instructor who is called Goliath). Display your answer by sID and sname.

Divisor: course that taught by Goliath
Dividend: enroll

```sql
SELECT s1.sID,s1.sname
FROM student AS s1
WHERE NOT EXISTS(
  (SELECT cID FROM course  WHERE cname='Goliath') 
  EXCEPT
  (SELECT cID FROM enroll AS e1
  WHERE e1.sID=s1.sID)
)
```

```sql
SELECT s1.sID,s1.sname
FROM student AS s1 
WHERE NOT EXISTS(
    (SELECT cID 
    FROM course 
    JOIN teach USING(cID) 
    JOIN instructor USING(iID) 
    WHERE iname='Goliath'
    AND cID NOT IN 
        (SELECT cID FROM enroll AS e1
        WHERE e1.sID=s1.sID)
    )
  );
```
