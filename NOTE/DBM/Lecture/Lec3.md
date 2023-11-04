# Entity-Relationship Model Extended Features

- Aggregation
- Weak Entity Sets
- Generalization and Specialization

## Aggregation

let “student”, “instructor”, “course”, and “enroll” form an abstract entity as an aggregation. Then “project” only need to associate with the courses which has a course project.
<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/MnKmwI.png' alt='MnKmwI'/>

## Weak Entity Sets

A weak entity is an entity cannot exist alone. The existence depends on another entity of a different type.
弱实体不单独存在，必须依附于实体
A set of weak entities is a weak entity set. Since a weak entity cannot exist alone, it does not have a key.
The existence of a weak entity set depends on the existence of an identifying entity set.
A weak must relate to the identifying entity set via a total, one-to-many relationship set from the identifying to the weak entity set.
An identifying relationship depicted using a double diamond.
The discriminator (or *partial key*) of a weak entity set is the set of attributes that distinguishes among all the entities of a weak entity set.
To distinguish weak entities, one must ***combine the key of the identifying entity set and the discriminator***

- Example

Our original modeling for courses was not accurate.
Instead of saying “a student is enrolled to a course”, it’s better to say, “a student is enrolled to a section of a course”.
Same for instructors, one instructor may teach multiple sections of one course.
An entity set “section” is needed.
But a section needs to be with a course.
Thus, “section” is a weak entity set which depends on “course”.
<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/PWsNRI.png' alt='PWsNRI'/>
Double rectangles denote weak entity sets.
Dashed underlines denote discriminators of weak entity sets.
Double diamonds denote identifying relationship sets.
Assume we model the original “enroll” relationship set without constraints. ^[我的评价是真sharuan]

## Generalization & Specialization

- Similar to the Inheritance
![ER-Generalization.png](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ER-Generalization.png)

Cardinality constraints and participation constraints can be applied on ISA relationship sets.
But some constraints are omitted because
each entity on the lower-level is one entity on the higher-level (the entity sets on the lower-level always fully participate ISA);
one entity cannot be associated with multiple entities in the same entity set on the lower-level.
Thus, the constraints on ISA only discuss
Does one higher-level entity belong to at least one lower-level entity set?
If yes, this ISA is a total generalization.
Does one higher-level entity belong to multiple lower-level entity set?
If No, it is a disjoint generalization.

The above design process is bottom-up, combining several entity sets with same attributes into higher-level entity set.
But sometimes the process is reversed.
Some entity sets can be split into some lower-level entity sets with specific attributes.
This top-down process is called specialization.

Consider the “student” and “instructor” example.
If we want to express every person is either a student or an instructor, then this is a total generalization.
And if we assume nobody can be a student and an instructor at the same time, this is a disjoint generalization.
<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/S0PX3U.png' alt='S0PX3U'/>
