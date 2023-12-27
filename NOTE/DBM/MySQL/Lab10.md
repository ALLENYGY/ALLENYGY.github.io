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
