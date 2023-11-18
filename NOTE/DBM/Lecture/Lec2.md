# Entity-Relationship Model Constraints

- Cardinality Constraints  **基数约束** (one-one/one-many/many-many)
- Participation Constraints **参与约束** (for all/some)
- Constraints for Ternary Relationship Sets **三元关系集的约束**

## Motivation

- “how many entities can be associated with one entity at most (or at least)?”

- Can one student have multiple majors?
- Can one program have multiple students?
- Does every student have a major?
- Is every program the major for some students?

> To express the answers, ER diagrams have constraints on relationship sets.

Two types of constraints

- Cardinality constraints
- Participation constraints

> “Cardinality” is a term from set theory. It is the number of items in a set.

## Cardinality Constraints

To express the cardinality constraints.
ER diagrams use an arrow $\rightarrow$ pointing to the one side.
For the many side, the links simply have no arrow ($——$).

### **One-to-Many** relationship

- An example for Cardinality Constraints One to many relationships:
  
![Many-to-one](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER/Many-to-one.png)

>Many student can only have one program

Here are some conditions for the example:

1. one student can only associate with at most one program as his/her major
2. one major program can have many students.

A one-to-many relationship is the reverse of many-to-one.

### **One-to-One** relationship

One entity from one entity set is associated with at most one entity from the other entity set and vice versa.

- For example, one instructor can be the program director of at most one program, and one program has at most one program director.

![One-to-one](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER/One-to-one.png)

### **Many-to-many** relationship

One entity from one entity set can be associated with multiple entities from the other entity set and vice versa.

- For example, one student can borrow multiple books, and one book can be borrowed by multiple students.

![Many-to-many](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER-Many-to-many.png)

## Participation Constraints

- Total Participation
  - Every entity participates a relationship.
  - The link is a double line (=).
- Partial Participation
  - There are some entities do not participate any relationship.
  - The link is a single line (−).

### Total Participation

- Example:
Every student has a major.
Every program is the major for some students. (Programs also totally participate.)

![Total-participation](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER-Total-participation.png)

### Particial Participation

- Example:
It’s possible that an instructors is not a program director for any program.
But every program has a program director.

![Particial-participation](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER-Partical-participation.png)

![Alternative-Notations](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER-Alternative-Notations.png)

## Constraints for Ternary Relationship Sets

we usually avoid using constraints on ternary relationship sets.
If expressing constraints is important, ternary relationship sets can always be converted into several binary ones.

Non-binary relationships with constrains is complex.

- Not suggested to use constraints on non-binary relationships (ambiguous)
- See lecture: convert non-binary to binary