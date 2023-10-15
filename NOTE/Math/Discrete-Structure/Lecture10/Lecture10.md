# Relation

## Relationships

* Relationships exist in our daily life
* A relation is a structure that is used to represent the relationships between elements.
* Category of relations
  * Binary relations
  * N-ary relations

## Binary Relations

* A binary relation R from the set 𝐴 to the set 𝐵 is a subset of 𝐴 × 𝐵.
  * $R$ is a set of ordered pairs in the form (𝑎, 𝑏) where 𝑎 is from 𝐴 and 𝑏 is from 𝐵.
  * 𝑎 𝑅 𝑏 denotes (𝑎, 𝑏) ∈ 𝑅, called 𝑎 is related to 𝑏 by 𝑅.
  
## Representing Relations

* There are several other ways to represent relations
  * Tables
  * Matrices
  * Graphs

## Functions and Relations

* All the functions are relations.
* It is not the case that all the relations are functions.
* Functions are the specialization of relations.
* Relations are the generalization of functions.

## Relation on the Set

* A relation on a set 𝐴 is a relation from 𝐴 to 𝐴.

## Properties of Relations

### Reflexive

* A relation 𝑅 on a set 𝐴 is called reflexive if (𝑎, 𝑎) ∈ 𝑅 for every element 𝑎 ∈ 𝐴.

### Symmetric

* A relation 𝑅 on a set 𝐴 is called symmetric if (𝑏, 𝑎) ∈ 𝑅 whenever (𝑎, 𝑏) ∈ 𝑅.

### Anti-symmetric

* A relation 𝑅 on a set 𝐴 is called anti-symmetric if whenever (𝑎, 𝑏) ∈ 𝑅 and (𝑏, 𝑎) ∈ 𝑅, then 𝑎 = 𝑏
(i.e, if 𝑎 ≠ 𝑏 and (𝑎, 𝑏) ∈ 𝑅 then (b, 𝑎) $\notin $𝑅)

### Transitive

* A relation 𝑅 on a set 𝐴 is called transitive if whenever (𝑎, 𝑏) ∈ 𝑅 and (𝑏, 𝑐) ∈ 𝑅, then (𝑎, 𝑐) ∈ 𝑅.

## Combining Relations

* 𝑅: a relation from 𝐴 to 𝐵.
* 𝑆: a relation from 𝐵 to 𝐶.
* The composite of 𝑅 and 𝑆 (𝑆 ◦ 𝑅): consisting of all ordered pairs (𝑎, 𝑐) where 𝑎 ∈ 𝐴, and 𝑐 ∈ 𝐶 if there exists 𝑏 such that (𝑎, 𝑏) ∈ 𝑅 and (𝑏, 𝑐) ∈ 𝑆.

## Powers of a Relation

* Let 𝑅 be a relation on the set 𝐴. The powers 𝑅𝑛for integer 𝑛 with 𝑛 > 0 are defined recursively by
  * $R ^1 = R$
  * $R ^ n=R^{n-1} * R$
* For example
  * 𝑅 = {(1, 2), (2, 3), (3, 1)}
  * $𝑅^1$ = {(1, 2), (2, 3), (3, 1)}
  * 𝑅 ◦ 𝑅 = {(1, 3), (2, 1), (3, 2)}
* Theorem:
  * The relation 𝑅 on a set 𝐴 is transitive if and only if $𝑅_𝑛 ⊆ 𝑅$ for 𝑛 = 1, 2, 3, ⋯

## 𝑛-ary Relations

* Let 𝐴1, 𝐴2, … , 𝐴𝑛 be sets.
  * An 𝑛-ary relation on these sets is a subset of $𝐴_1 × 𝐴_2 ×⋯ × 𝐴_𝑛$
  * Domain: $𝐴_1 × 𝐴_2 × ⋯ × 𝐴_𝑛$
  * Degree: $n$
