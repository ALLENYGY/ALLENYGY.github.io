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
  - ON <predicate>: the predicate is evaluated to be true.
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
