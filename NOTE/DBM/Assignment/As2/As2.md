# Assignment

## Q1. Convert the following ER diagram into logical schemas. (20pt)

$person=(\underline{p\_id},name,gender)$
$employ=(\underline{p\_id},position,salary)$
$customer=(\underline{p\_id},calss,phone)$
$purchase=(\underline{b\_id},date,order,p\_id)$
$coupon=(\underline{id},discount,p\_id,t\_id)$
$use=(\underline{id},b\_id)$
$product\_type=(\underline{t\_id},manufacturer,type,price)$
$contain=(\underline{b_id},l\_id)$
$product=(\underline{i\_id},exp_date,man_date,\underline{t\_id})$

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
