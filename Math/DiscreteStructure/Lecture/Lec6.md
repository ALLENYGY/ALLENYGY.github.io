# Functions, Sequence, and Summations

## Functions

* A function $f$ from $A$ to $B$ is a subset of $A×B$ which satisfies the following two conditions
  * 1. $\forall x (x \in A \rightarrow \exists y (y \in B \wedge (x,y) \in f))$^[For all elements in A]
  * 2. $(((x_1,y_1) \in f \wedge (x_1,y_2)\in f) \rightarrow y_1 =y_2)$ ^[One and only one y in B for each x in A]

### One-to-One Functions (Injections)

* $f$ is one-to-one iff:
  * For $a,b \in A$, if $a\not=b$ then $f(a) \not= f(b)$
* One-to-One function is also called injective function ^[(单射)]

### Onto Functions (Surjections)

* $f$ is onto iff:
  * $\forall y \in B (\exists x (x \in A \wedge f(x) = y))$
* Onto function is also called surjective function ^[(满射函数)
值域y是满的，每个y都有x对应，不存在某个y没有x对应的情况]

### One-to-One and Onto Functions (Bijections)

* $f$ is a bijective function iff
  * $f$ is both onto and one-to-one
* One-to-One and onto function is also called bijective function ^[(双射函数)]

#### Relationship between domain, co-domain and range

* Injection: $|A| =|f(A)|<=|B|$
* Surjection: $|f(A)|=|B|$, But $|A|$ may not equal to $|f(A)|$
* Bijection: $|A|=|f(A)|=|B|$

### Image, Pre-image and Range

* If $y= f(x)$ from set A to set B, then
  * $y$ is called the image of $x$ under $f$
  * $x$ is called a pre-image of $y$
  * The set of all the images of the elements in the domain under is called the range of $f$.

### Inverse Function

* $f:$ $A \rightarrow B$ is a bijection.
  * The inverse of $f$ is bijection $f^{-1}:$ $B \rightarrow A $ such that $f^{-1}(f(x))=x$ for all x $\in A$
  * if $f(x) = y$ then $f^{-1}(y)=x$

### Composition Function

If $f$ is a function from $A$ to $B$ and $g$ is a function from $B$ to $C$, then $g * f(x) (g(f(x)))$ is the composition of g and f

### Two special functions

* Floor Function
  * Denoted $\lfloor x\rfloor $ eg. $\lfloor 2.9\rfloor =3$
* Ceiling Funcation
* Denoted $\lceil x\rceil$ eg. $\lceil -2.9 \rceil=-2$

## Sequences

* Sequences are ordered lists of elements
* A sequence is a function from  a subset of the set of integers $\{0, 1, 2,3,…\}$ or $\{1,2,3,…\}$ to a set $S$, denoted $\{a_n\}$. The integers determine the positions of the elements in the list.

## Summations

* Sequences are very useful in summations.
* A summation is the value of the sum of the terms of a sequence.
$$a_1+a_2+a_3+...+a_n=\sum^{n}_{j=1}a_j=\sum_{1\leq j \leq n}a_j=\sum^n_{j=1}a_j=\sum^n_{k=1}a_k$$

### Some Special Summations

* A geometric series is a summation of a geometric progression
  * Geometric progression: $a,ar,ar^2,…$
  * Geometric series: $\sum^n_{j=0}ar^j$
* A harmonic series is the summation of a harmonic progression
  * Harmonic progression: $1,\frac{1}{2},\frac{1}{3},\frac{1}{4},...,\frac{1}{n}$
  * Harmonic series:$\sum^n_{j=1}\frac{1}{j}$
