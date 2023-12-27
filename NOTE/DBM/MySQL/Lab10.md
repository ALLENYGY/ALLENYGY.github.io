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
WHERE NOT EXISTS (
  (SELECT 𝑝_𝑛𝑎𝑚𝑒
  FROM 𝑝𝑟𝑜𝑔𝑟𝑎𝑚𝑚𝑒)
    EXCEPT
  (SELECT 𝑝_𝑛𝑎𝑚𝑒
  FROM 𝑐𝑎𝑡𝑎𝑙𝑢𝑔𝑢𝑒 AS 𝐶2
  WHERE 𝐶2.𝑐_𝑛𝑎𝑚𝑒=𝐶1.𝑐_𝑛𝑎𝑚𝑒)
)
```
