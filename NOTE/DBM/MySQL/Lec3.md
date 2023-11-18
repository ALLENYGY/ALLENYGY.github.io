# Join

- Are you tired of condition checking in cross table queries?

The NATURAL JOIN operator associates two tables by the common attributes.
After NATURAL JOIN, the duplicated attributes are omitted.

```sql
SELECT * FROM city NATURAL JOIN country
```
is implemented as
```sql
SELECT city.country_id, city.last_update, city_id, city, country
FROM city, country
WHERE city.country_id = country.country_id AND
    city.last_update = country.last_update
```

## Join Condition

- Join conditions define in which condition the tuples are associated.
- Two tuples are associated if
  - NATURAL: all common attributes have the same value.
  - ON \<predicate\>: the predicate is evaluated to be true.
  - USING $(A_1,A_2,⋯,A_n)$: the common attributes in list have the same value.

For example, these queries are equivalent.

```sql
SELECT first_name, last_name, address, district, postal_code 
FROM customer NATURAL JOIN address

SELECT first_name, last_name, address, district, postal_code
FROM customer JOIN address ON customer.address_id = address.address_id AND customer.last_update = address.last_update

SELECT first_name, last_name, address, district, postal_code
FROM customer JOIN address USING (address_id, last_update)
```

### JOIN

- A JOIN without any condition is same as a cartesian product.
Sometimes more than two tables are joined together.

```sql
  SELECT *FROM table1 NATURAL JOIN table2 NATURAL JOIN table3
```
The query is understood as
```sql
  SELECT* FROM (table1 NATURAL JOIN table2) NATURAL JOIN table3
```

Notes:

- The predicate in the ON clause is user-defined, which is very flexible.
- NATURAL and USING combine the common attributes. But ON duplicates common attributes.

### JOIN type

- Sometimes users want to keep the unmatched tuples after joining two tables.

OUTER JOIN can handle it.

- table1 NATURAL LEFT OUTER JOIN table2
All tuples in table1 are in the result. For the unmatched tuples, the values of the attributes from table2 are NULL, meaning “unknown”. (NULL values will be introduced in following labs.)

- table1 NATURAL RIGHT OUTER JOIN table2
The unmatched tuples from table2 are kept.

- table1 NATURAL FULL OUTER JOIN table2
All tuples (from both table1 and table2) are kept.

- NATURAL is the join condition.
On the opposite of OUTER, INNER JOIN does not keep the unmatched tuples.
Same as JOIN. “INNER” is usually omitted.

Suppose we try to join this 2 tables
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/MySQL/OUTERJOIN-1.png"/>

- LEFT OUTER JOIN

```sql
SELECT *  FROM person NATURAL LEFT OUTER JOIN address
```

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/MySQL/LEFTJOIN.png"/>

- RIGHT OUTER JOIN

```sql
SELECT *  FROM person NATURAL RIGHT OUTER JOIN address
```

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/MySQL/RIGHTJOIN.png"/>

- FULL OUTER JOIN

```sql
SELECT * FROM person NATURAL FULL OUTER JOIN address
```

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/MySQL/FULLOUTERJOIN.png"/>
