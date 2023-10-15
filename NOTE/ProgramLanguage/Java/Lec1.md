# Unified Modeling Language

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

<!-- - [Unified Modeling Language](#unified-modeling-language)
  - [UML](#uml)
  - [Class Diagram](#class-diagram)
  - [Class Relationship](#class-relationship)
    - [Association (directional + Multiplicity)](#association-directional--multiplicity)
    - [Aggregation](#aggregation)
    - [Composition](#composition)
    - [Inheritance](#inheritance)
  - [Realization/Implementation](#realizationimplementation) -->

<!-- /code_chunk_output -->

## UML

- Class diagrams
  - Sequence diagrams
  - Use case diagrams
  - Activity diagrams

## Class Diagram

- Describe the system in terms of classes and their relationships.

- Natural ways of reflecting the real-world entities and their relationships.

## Class Relationship

### Association (directional + Multiplicity)

> Association represents a general binary relationship that describes an activity between two classes.

A class is aware of and holds a reference to another class.

![Association](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/woM42m.png)

- Bidirectional or Unidirectional
  - Unidirection
  - ![Has-A1](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/KXsYDz.png)  ![Has-A2](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/bIgbwh.png)
  - Bidirectional
  - ![Bidirection](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/W6reqQ.png)

### Aggregation

A special type of association, which represents a ==“Has-A”== relationship  **空心菱形**

- They may have different life cycles.
- ![Aggregation](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/spPC2D.png)

### Composition

Represents a ==“Part-of”== relationship. **实心菱形**

- Life cycle of the part is dependent on the whole’s life cycle
- ![Composition](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/w0JW5S.png)

### Inheritance

Often referred as a “is-a” relationship. **三角空心**
>E.g., a dog is an animal.

- ![Inheritance](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/w0JW5S.png)

## Realization/Implementation

For interface

- In Java, an interface is not a class but a set of requirements for classes that want to conform to the interface
- ![Realization&Implementation](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/ssxw42.png)
