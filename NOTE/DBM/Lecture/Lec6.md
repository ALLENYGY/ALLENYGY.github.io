# Logical Design

## Many to Many Relationship

对于多对多的情况 无论是否total participation,建表存放两实体主键

- Many to Many
- Many to Many with total participation on one side
- many-to-many with total participation on both sides

For the above 3 cases, we create an individual schema for each relationship set. The column names consist of the key attributes for both entity sets and the attributes for the relationship set (if any).
<!-- 对于以上三种情况，建立一个单独的表来存放关系集，集合内包括两个实体的主键，以及关系本身的属性 -->

## One Relationship

一对多
一对多且 一total

- one to one without total participation *一对一*
- one to many without total participation *一对多*
- one to many with total participation on "one" side. *一对多，且一完全参与*

For the above 3 cases, we create an individual schema for each relationship set. The column names consist of the key attributes for both entity sets and the attributes for the relationship set (if any).
对于以上三种情况，建立一个单独的表来存放关系集，集合内包括两个实体的主键，以及关系本身的属性

同时对于其中的第一种情况 主键为两实体中的一个
对于剩余两种情况 主键在多的的一侧

## More case

- one-to-one with one total participation and one partial participation
- one-to-one with total participation on both sides
- one-to-many with total participation on the “many” side
- one-to-many with total participation on both sides

For these four cases, there is no need to create a schema.
对于以上四种情况没必要建表
We only need to add a foreign key as a reference to the schema of
the entity set with total participation on the “one” side (case 7 and 8)
the entity set with total participation on the “many” side (case 9 and 10)
对于
