---
Title: "[[Aggregation]]"
status: DONE
tags:
  - MySQL
  - NOTE
  - Lec4
Author:
  - AllenYGY
created: 2023-11-18T12:09
updated: 2024-03-21T21:46
---
# [[Aggregation]]

```sql
SELECT column_name(s), COUNT(*)
FROM table_name
GROUP BY column_name(s)
HAVING condition;
```

- “Aggregation” means performing some operations on a group of objects.

COUNT: count the value
MAX: find the maximum value
MIN: find the minimum value
AVG: calculate the average value
SUM: sum up the values

## COUNT

- Suppose that we want to count the number of different languages.

```sql
SELECT COUNT(*) FROM language
```

- In this example, all tuples in the table “language” is considered as a group. The query counts the number of distinct objects in the group.
After applying an aggregation function, the result of COUNT(*) is treated as an attribute.

## GROUP BY

- For example, find the number of films for each language. The resulting table has two columns, one for languages, one for the number of films.

Only those films of the same language are in the same group (different language different group).
Then, count the number within each group.

- To achieve the grouping, we use GROUP BY.

```sql
SELECT language_id, count(film_id) 
FROM film JOIN language USING(language_id) 
GROUP BY (language_id) 
```

- To indicate the result of aggregation of each group, group by attributes are usually selected.

## HAVING

- Sometimes we need condition checking before and after aggregation functions

- For example, show the actors’ names and the number of Sci-Fi movies played by him/her if the number of Sci-Fi movies is more than 3

```sql
SELECT actor_id,first_name,last_name,COUNT(film_id)
FROM actor JOIN film_actor USING (actor_id) 
    JOIN film USING(film_id) 
    JOIN film_category USING(film_id)
    JOIN category USING(category_id)
WHERE category.name='sci-fi'
GROUP BY actor_id
HAVING COUNT(film_id)>3;
```

- The query is executed in this sequence.

1. Combine the tables in FROM clause
2. Check the condition in WHERE clause
3. Group tuples
4. Aggregation function
5. Check the condition in HAVING clause
6. Output the selected attributes

## DISTINCT

Assuming that every country has a city. Why the following query cannot find the number of countries?

```sql
SELECT COUNT(country_id)
FROM city
```

We only assume that every country has a city. But, a country may have multiple cites.
Those countries will be over counted.
We can use DISTINCT to remove duplications.

```sql
SELECT COUNT(DISTINCT country_id)
FROM city
```
