---
Title: "[[Entity-Relationship-Model-Modeling]]"
status: DONE
tags:
  - DataBase
  - NOTE
  - Lec1
Author:
  - AllenYGY
created: 2023-11-03T00:59
updated: 2024-03-21T21:34
---

# [[Entity-Relationship-Model-Modeling]]

- Design Process
- Entity Sets
- Attributes
- Relationship Sets

## Database Design Process

- The goal of the relational database design is to create a database in a specific database management system that allows us to
  - Store information
  - Minimize unnecessary redundancies
  - Search information easily

- Design database can be split into multiple phases.
![Design-database](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Design-database.png)

### Conceptual-design

- Focus on describing data and their relationships.
- The outcome of this phase is an ER diagram.
- It provides a graphic representation of the database design.
![ER-diagram-example](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER-diagram-example.png)

>However, designing an ER diagram can be very subjective. Then, the next phase is optimizing the ER diagram using functional dependencies and normal forms.

#### Optimization

- Optimizing the ER diagram using functional dependencies and normal forms.

#### Convert ER diagram to implementation data model

This phase is to convert an ER diagram to the implementation data model of the database system that will be used.

### Logical-design

- Relational schemas will be produced.
The relational schemas of a database are called logical view.

### Physical-design

- Designers will implement the relational schemas in the database management system using a particular data definition language.

## Entity Set

- The entity-relationship model contains three basic concepts:
  - entity sets
  - relationship sets
  - attributes

An entity is a “thing” or “object” in the real world, which is distinguishable from all other objects.
An entity set is the class or type of objects in our model.

## Attribute

- An entity can be described by a set of properties.
- Each property is an attribute of the entity.
- A set of attributes describes and distinguishes the entities in the same entity set.
- One entity can have different attributes in different models for different applications.
- Each entity has a value for each of its attributes.
- The Domain of an attribute is the set of all possible values of the attribute.
  
## ER-Diagram

- rectangles represent entity sets
- ellipses represent attributes
- keys are underlined
- lines link attributes to entity sets
![Basic-ER-Features](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Basic-ER-Features.png)
- a relationship set is denoted by a diamond
![ER-Relationship-set-diamond](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER-Relationship-set-diamond.png)

### Key

- The set of special attribute(s) is called key.
- Formally, a key of an entity set is a set of attributes that **can uniquely identify the entities.**
- Two entities are identical if and only if they have the same value for the key.

### Multi-valued Attribute

- An entity may have multiple values in an attribute which is multi-valued attribute, denoted by double ellipses.

![Multiple-valued-Attribute](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER-Multiple-valued-Attribute.png)
It is possible that one student may have multiple phone numbers.

### Composite Attribute

- One may ask “why the course code is not selected as a key?”
- The reason is that a course code is not atomic.
  - An attribute is atomic if each value of the attribute has only one unit of information.
  - If an attribute is not atomic, it is a composite attribute.

![Composite-attribute](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Composite-attribute.png)
![Composite-attribute](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Compositive-attribute-Example.png)

### Relationship

- A relationship set is a set of relationships of the same type.
![ER-Relationship-set](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER-Relationship-set.png)
- Sets do not allow duplications.
- This is also applied to entity sets.

### Multi-ary Relationship

- If a relationship associates 𝑛 entities, this relationship is 𝒏-ary.
- 𝑛 is the degree of the relationship
- If 𝑛 = 2, the relationship is binary.
- If 𝑛 = 3, the relationship is ternary.
- Theoretically, 𝑛 can be any positive integer.

### Attributes for Relationship Sets

- The relationship set can also have some attributes.
- Example:
  - Sometimes people are also interested in some information about relationships.
  - In the “students borrow books” example, we also want to know when the book is borrowed, when the book is returned, and how long the book is kept by the student.
  - This information does not belong to students or books. It is about the association.
![Attribute-for-relationship-sets](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER-Attribute-for-relationship-sets.png)

### Derived Attributes

- In the previous example, the attribute duration is in a dashed ellipse because it is a derived attribute.
  - If one knows the date of borrow and the date of return, then the duration can be calculated from the two values.

## Summary

![ER-Summary](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER-Summary.png)
