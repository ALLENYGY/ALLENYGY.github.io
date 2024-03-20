# Logical Design

## Relationship Set

### Many to Many Relationship

对于多对多的情况 无论是否total participation,建表存放两实体主键

- Many to Many
- Many to Many with total participation on one side
- many-to-many with total participation on both sides

For the above 3 cases, we create an individual schema for each relationship set. The column names consist of the key attributes for both entity sets and the attributes for the relationship set (if any).
<!-- 对于以上三种情况，建立一个单独的表来存放关系集，集合内包括两个实体的主键，以及关系本身的属性 -->
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER/ManyCase.png"/>

### One Relationship

- one to one without total participation *一对一*
- one to many without total participation *一对多*
- one to many with total participation on "one" side. *一对多，且一完全参与*

For the above 3 cases, we create an individual schema for each relationship set. The column names consist of the key attributes for both entity sets and the attributes for the relationship set (if any).
对于以上三种情况，建立一个单独的表来存放关系集，集合内包括两个实体的主键，以及关系本身的属性,
但是对于主键却有另外的要求
对于其中的第一种情况 主键为两实体中的一个
对于剩余两种情况 主键在多的的一侧
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER/OneCase.png"/>

### Remaining case

- one-to-one with one total participation and one partial participation
- one-to-one with total participation on both sides
- one-to-many with total participation on the “many” side
- one-to-many with total participation on both sides

For these four cases, there is no need to create a schema.
对于以上四种情况没必要建表

We only need to add a foreign key as a reference to the schema of
the entity set with total participation on the “one” side (case 7 and 8)
the entity set with total participation on the “many” side (case 9 and 10)
对于情况7，8把外键放在一的一侧
对于情况9，10把外键放在多的一侧
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER-Remancase.png"/>

有many放many
没many两边都放

## Composite Attribute

If an entity set has composite attributes, composite attributes are directly substituted by the component attributes.
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER/Composite.png"/>

## ISA Relationship Sets

如果身份重叠则建 高一级 父表

- If the ISA relationship set is overlapping or partial

the schema for the higher-level entity set is like other strong entity sets;
the schema for the lower-level entity set only consists of the attributes of this lower-level entity set and the key of the higher-level entity set;
the key of the higher-level entity set is also the key of the lower-level entity set.
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER/ISA.png"/>
$person=(\underline{id}, name)$
$student=(\underline{id},year,GPA)$
$instructor=(\underline{id},title,salary)$

否则不建表
If the ISA relationship set is disjoint and total

- no need to create a schema for the entity set on the higher level;
- one schema is constructed for each entity set on the lower level, inheriting all attribute from the higher-level entity set.
$student=(\underline{id},name,year,GPA)$
$instructor=(\underline{id},name,title,salary)$

## Aggregation
Aggregations are treated same as other relationship sets.
For example, the schema for “enroll” has the key of “instructor”, “student”, and “section”.
Then, “doing” is a binary many-to-many relationship set. And the method for case 1 can be applied.
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/RE/Aggregation.png"/>
$doing=(\underline{student\_id},\underline{instructor\_id},\underline{course\_name},\underline{section\_number},\underline{project\_id})$
