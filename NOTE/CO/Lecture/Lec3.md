# *Boolean Algebra: From Bits to Logic*

- Computers represent information by bit (Binary digit)
- A bit has two possible values, namely 0 and 1.
- A bit can be used to represent a truth value, true and false.
- Therefore bits operations correspond to the logical operations in Boolean Algebra.

## *Boolean Functions*

- A function is a relation that uniquely associates members of one set with members of another set
- A Boolean function has
  - At least one Boolean variable
  - At least one Boolean operator
  - At least one input from the set {0,1}
- It produces an output that is also a member of the set {0,1}
- $F = X+YZ'$
- Precedence
  - NOT top priority,
  - followed by AND
  - then OR
![CO-Boolean-Identities](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-Boolean-Identities.png)

## *Canonical Forms*

- There are two canonical forms
  - Sum-of-products
  - Product-of-sums

### *Sum-of-Products*

- Also called Disjunctive Normal Form (DNF) *析取范式*
- **Look at ONE**
![DNF](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-DNF.png)

### *Product-of-Sums*

- Also called Conjunctive Normal Form (CNF) *合取范式*
- **Look at ZERO**
![CNF](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-CNF.png)
