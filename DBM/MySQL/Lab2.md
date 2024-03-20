# Cross table query

- Sometimes a single table does not contain all desired attributes.

## Cross table

The crossing of tables is the cartesian product of them.
Equivalent to querying from a (temporary) table A×B, the cartesian product of A and B.
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/MySQL/Crosstable.png"/>

```sql

temp=city x country
SELECT city FROM temp WHERE city.country_id=country.country_id AND country='China'
```

## A table times itself

- 对于一部分相同但是仍有部份不同需要找出时

```sql
SELECT a1.city_id
FROM address AS a1, address AS a2
WHERE a1.city_id = a2.city_id AND
 a1.address_id <> a2.address_id
```
