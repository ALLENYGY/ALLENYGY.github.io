---
Title: "[[Set-Operation-&-WHERE-subquery]]"
status: DONE
tags:
  - MySQL
  - NOTE
  - Lec8
Author:
  - AllenYGY
created: 2023-12-27T21:21
updated: 2024-03-21T21:49
---

# [[Set-Operation-&-WHERE-subquery]]

- Set Operations
  - Union
  - Intersection
  - Set difference
- Subquery
  - IN subquery
  - NOT IN subquery

## Set

Tables are treated as sets in relational databases.

Let A and B be two sets.

The union of $A$ and $B$ is the set $A\cup B= \{t|t \in A \vee t \in B\}$.
The intersection of $A$ and $B$ is the set $A\cap B= \{t|t \in A \land t \in B\}$.
The set difference of $A$ and $B$ is the set $A-B$=$\{t|t\in A \land t \notin B\}$.

For example, $A=\{x,1\}, B=\{1,y\}$
$A \cup B=\{𝑥,1,𝑦\}$
$A\cap 𝐵=\{1\}$
$A-B=\{x\}$.

### UNION

The two tables of the union must be compatible: corresponding columns must be of the same type.

```sql
TableA UNION TableB;
```

- MySQL is very robust. It allows union between different types.

For example,
```sql
(SELECT actor_id FROM actor) UNION (SELECT first_name FROM actor)
However, this is NOT the reason for a union without type checking.
```

### INTERSECTION

```sql
TableA INTERSECT TableB;
```

```sql
(SELECT columns FROM tables1 WHERE P1) 
INTERSECT 
(SELECT columns FROM tables2 WHERE P2)
```
The corresponding IN subquery is $(\forall x \in A, x\in B)$

```sql
SELECT columns FROM tables1 
WHERE P1 AND columns IN (
    SELECT columns FROM tables2 WHERE P2
    )
```

- Find the id of the English films which are played by Tim Hackman.

```sql
(SELECT film_id
FROM film_actor JOIN actor USING(actor_id) 
WHERE first_name='Tim' AND last_name='Hackman')
INTERSECT
(SELECT film_id 
FROM film JOIN language USING(language_id) 
WHERE name='English')
```

- can implemented by IN

```sql
SELECT film_id
FROM film_actor JOIN actor USING(actor_id) 
WHERE first_name='Tim' 
  AND last_name='Hackman'
  AND film_id IN(
    SELECT film_id 
    FROM film JOIN language USING(language_id) 
    WHERE name='English')
```

- It can also be implemented by using SOME.
If an element is in a set, then the element is equal to some element in the set.

```sql
    SELECT film_id
    FROM film JOIN language USING(language_id)
    WHERE name = 'English' AND
      film_id = SOME(
        SELECT film_id
        FROM film_actor JOIN actor USING(actor_id)
        WHERE first_name='Tim' AND last_name='Hackman'
      )
```

### Set Difference

For set difference use the keyword EXCEPT.

```sql
TableA except TableB
```

```sql
(SELECT columns FROM tables1 WHERE P1)
EXCEPT 
(SELECT columns FROM tables2 WHERE P2)
```

Alternatively we can use the NOT IN subquery.

```sql
SELECT columns FROM tables1 
WHERE P1 AND columns NOT IN (
SELECT columns FROM tables2 WHERE P2
)
```

- Find the id of the films which are played by Tim Hackman but not in English.

```sql
(SELECT film_id 
FROM film_actor JOIN actor USING(actor_id) 
WHERE first_name="Tim" AND last_name="Hackman")
EXCEPT
(SELECT film_id
FROM film JOIN language USING(language_id)
WHERE name="English")
```

- can implemented by NOT IN

```sql
SELECT film_id 
FROM film_actor JOIN actor USING(actor_id) 
WHERE first_name="Tim" 
AND last_name="Hackman"
AND film_id NOT IN (
  SELECT film_id
  FROM film JOIN language USING(language_id)
  WHERE name="English")
```
