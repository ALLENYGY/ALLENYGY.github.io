# Sets and N-tuple

## Sets

* A setis a collection of objects
* Sets are used to group objects together

### Notation of Sets

* {}
* Expressions:
  * List all the members
    * $C=\{a,b,c\}$
  * Use predicates
    * $E=\{x|x\%2=0\}$
  * Use suspension points
    * $S=\{...,-3,-2,-1\}$

* Properties：
  * No order
  * No duplicated elements

### Universial Sets

* A universal set^[通用集,泛集] is a set that contains all the objects under consideration
* Some Common universial sets
  * ℕ : the set of all natural numbers
  * ℤ : the set of  integers
  * $ℤ^+$: the set of all the positive integers
  * ℚ: the set of all rational numbers
  * ℝ: the set of all the real numbers
  * ℂ: the set of all complex numbers

### Venn Diagrams

* A Venn diagram includes two basic shapes
  * A rectangle: indicates the universal set (all the objects under consideration)
  * Circles or other shapes: indicate normal sets.

### Elements and sets

* $x \in S$: x is in or is an element of S.
* $x \notin S$: x is not in or is not an element of S.

### Subsets

* Subsets
  * The set $S_1$ is a subsets of the set $S_2$ (denoted $S_1\subseteq S_2$) iff $\forall x(x\in S_1 \rightarrow x \in S_2)$
  * $A \subseteq A$
* $S_1=S_2$ iff
  * $(\forall x(x \in S_1 \rightarrow x\in S_2)) \wedge (\forall x(x \in S_2 \rightarrow x\in S_1))$
  * $\forall x(x \in S_1 \leftrightarrow x\in S_2)$
  * $(S_1 \subseteq S_2) \wedge (S_2 \subseteq S_1)$
* Proper Subsets
  * The set $S_1$ is a proper subsets of the set $S_2$ (denoted $S_1\subset S_2$) iff $\forall x(x\in S_1 \rightarrow x \in S_2) \wedge (S_1 \not= S_2)$
* Empty sets denoted $\emptyset$

### Cardinality

* Cardinality is the number of distinct elements in a set.
  * The cardinality of a set $S$ is denoted as $|S|$.
  * The Cardinality an be finite or infinite.
    * eg. $S=\{a,b,c,d,e\}$, $|S|=5$

### Power Sets

* The power sets of $S$ is $P(S)$ which is the set of all the subsets of $S$.
  * $P(S)=\{A|A\subseteq S\}$
* The Cardinality of $|P(S)|$ = $2^{|S|}$^[use induction to proof]

## Ordered n-tuple

* The form $(a_1,a_2,...,a_n)$ or $<a_1,a_2,...,a_n>$
  * Called ordered n-tuple
  * The elements in the tuple are ordered
  * E.g.,
    * $(2,3)$ is a 2-tuple $(3,2)$ is a 2-tuple they are different

## Cartesian Product

* Cartesian product of two sets $S_1$ and $S_2$ denoted($S_1 × S_2$)
  * $S_1 × S_2 = \{(a,b)| a\in S_1 \wedge b \in S_2\}$

* if $|S_1|=m$ and $|S_2|=n$, then $|S_1 × S_2| = m × n$
* $S_1 × S_2 \not= S_2 × S_1$
* $S_1 × S_2 × S_3 \not= (S_1 × S_2) × S_3$
  