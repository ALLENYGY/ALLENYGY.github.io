# Assignment

## Question-1

a) Find the students who have more enrollments than other students. Display your answer by sID and sname.

```sql
SELECT  sID, sname
FROM student JOIN enroll USING (sID)
GROUP BY cID
ORDER BY COUNT(DISTINCT cID) DESC
LIMIT 1;
```

b) Find the students who have enrolled all courses. Display your answer by sID and sname.

```sql
SELECT sID, sname
FROM student
WHERE sID IN ( SELECT sID
FROM enroll
GROUP BY enroll.sID
HAVING COUNT(DISTINCT enroll.cID) 
= (SELECT COUNT(DISTINCT cID) 
FROM course );

```

c) Find the students who have taken all courses instructed by Goliath (instructor’s name and assuming that there is no other instructor who is called Goliath). Display your answer by sID and sname.

```sql
SELECT s.sID, s.sname
FROM student s
JOIN course c ON 1=1
LEFT JOIN enroll e ON s.sID = e.sID AND c.cID = e.cID
WHERE NOT EXISTS (
    SELECT *
    FROM teach t
    JOIN instructor i ON t.iID = i.iID
    WHERE i.iname = 'Goliath' AND t.cID = c.cID
        AND NOT EXISTS (
            SELECT *
            FROM enroll e2
            WHERE e2.sID = s.sID AND e2.cID = t.cID
        )
)
GROUP BY s.sID, s.sname
HAVING COUNT(DISTINCT c.cID) = COUNT(DISTINCT e.cID)
```

d) Implement a constraint to guarantee that the position of an instructor is one of “lecturer”, “assistant professor”, “associated professor”, and “professor”.

```sql
ALTER TABLE instructor
ADD CONSTRAINT position_domain
CHECK (position IN 
("lecturer", "assistant professor", "associated professor","professor"));

```

e) Implement a constraint to guarantee that “no student is enrolled to a course which is not taught by any instructor”.

```sql
ALTER TABLE student
ADD CONSTRAINT teach_course
FOREIGN KEY (cID) REFERENCES course(cID)
ADD CONSTRIANT teach_instructor
FOREIGN KEY (iID) REFERENCES course(iID)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
DELIMITER |
  CREATE TRIGGER guarantee_student
  AFTER INSERT ON student
  FOR EACH ROW
  BEGIN
    IF new.id NOT IN (
      SELECT iID FROM instructor) 
THEN 
    DELETE FROM student WHERE student.sID = new.sID;
  END IF;
END;|
DELIMITER ;

```

## Question-2

Please prove the three rules union, decomposition, pseudotransitivity (Lecture 9 Page 14) using Armstrong’s Axioms (Page 11). (12 pt)

- For union:
If $\alpha \rightarrow \beta $ and $\alpha \rightarrow \gamma,$ then $\alpha \rightarrow \gamma \beta$

1. $\alpha \rightarrow \beta$
2. $\alpha \alpha \rightarrow \alpha \beta$ According to augmentation
3. $\alpha \rightarrow \alpha \beta$
4. $\alpha \rightarrow \gamma$
5. $\alpha \beta \rightarrow \gamma \beta$
6. $\alpha \rightarrow \alpha \beta \rightarrow \beta \gamma$ According to transitivity
7. $\alpha \rightarrow \beta \gamma$

- For augmentation:
if $\alpha \rightarrow \beta \gamma$, then $\alpha \rightarrow \beta$ and $\alpha \rightarrow \gamma$

1. $\alpha \rightarrow \beta \gamma$
2. $\beta \gamma \rightarrow \beta$  according to reflexivity
3. $\beta \gamma \rightarrow \gamma$ according to reflexivity
4. $\therefore \alpha \rightarrow \beta,\alpha \rightarrow \gamma$ according to transitivity

- For pseudotransitivity
if $\alpha \rightarrow \beta$ and $\gamma \beta \rightarrow \epsilon$ then $\alpha \gamma \rightarrow \epsilon$

1. $\because \alpha \rightarrow \beta$
2. $\therefore \alpha \gamma \rightarrow \beta \gamma$ according to augmentation
3. $\because \alpha \gamma \rightarrow \beta \gamma \rightarrow \epsilon$ according to transitivity
4. $\therefore \alpha \gamma \rightarrow \epsilon$

## Question-3

a. Find all condidate keys

L: A
R: BCH
LR:DEFG
N:

$A^+=ABCDE != U$
$AD^{+}=\{ABCDE\} != U$
$AE^{+}=\{ABCDE\} != U$
$AF^{+}=\{ABCDEFGH\}=U$
$AG^{+}=ABCDEG$

There is only one candidate key AF

b. Decompose the schema in BCNF

Remove redundant functional dependencies and extraneous Attributes

$F=\{A\rightarrow BCDE, F\rightarrow GH \}$

Iteration 1: $A\rightarrow BCDE$ violates BCNF
Decomposition R into

$R_1=\{ABCDE\}$
$F_1=\{A\rightarrow BCDE\}$
$R_2=\{FGH\}$
$F_2=\{F\rightarrow GH\}$

$R_1$ and $R_2$ satisfy BCNF

c. The decomposition in b) is dependency preserving.

$F_1^+=\{ABCDE\}$
$F_2^+=\{FGH\}$

$\{F_1 \cup F_2\}^+ = ABCDEFG=F^+$
$\therefore$ it is dependency-preserving

d. What is the canonical cover of the functional dependencies?

$F_c=\{A\rightarrow BCDE,F\rightarrow GH\}$

e. There are no redundant dependencies or extraneous attributes in any one of the dependencies.

$R_1=\{ABCDE\}$
$R_2=\{FGH\}$
$R_3=\{AF\}$

It has been satisfy BCNF, so it's also 3NF.
