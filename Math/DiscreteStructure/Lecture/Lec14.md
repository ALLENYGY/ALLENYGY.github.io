
# Boolean Algebras- Boolean Expressions

* The operands are {0,1}.

* The operators are $\{· × +\}$  (multiplication, addition, complement).

* Similar to basic arithmetic (addition table for example), we can form tables to show calculations in Boolean algebra.

![Operators](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Operators.png)

![ComOperators](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ComOperators.png)

![Identities](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Identities.png)

* Unit Property: $x+x=1$
* Zero Property: $x \cdot \neg x=0$

## Constructing Boolean Functions

### Disjunctive Normal Form，DNF

* The disjunctive normal form (DNF) of a Boolean expression is the unique sum of min-terms of the variables in the expression (function).
  * Each min-term has exactly one literal for every variable.
  * Also called sum of products expansion.
  * At most one min-term can have value 1 for a combination of values of
  variables.
  * Some of min-terms can be simplified by a method (next lecture). After
  simplification, the expression is called sum of product.
  * But in some books, DNF means the sum of products (after
  simplification) while canonical disjunctive normal form (CDNF) is the
  sum of products expansion. We do not use this naming in this course.
* ![DNF](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/DNF.png)

### Maxterms, CNF

* A max-term of Boolean variables $X_1, X_2,.., X_n,$ is the sum of n literals y_1 + y_2+,..., +y_n where y_i (1 < i < n) is either $x_{i}$; or $\bar {x_{i}}$;
* The conjunctive normal form (CNF) of a Boolean expression is theproduct of max-terms of the variables in the expression (function) Also called product of sums expansion.
* ![CNF](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CNF1.png)
* ![CNF1](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CNF1.png)

![Completeness01](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/FunctionalCompleteness01.png)

![Completeness02](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/FunctionalCompleteness02.png)

![Completeness03](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/FunctionalCompleteness03.png)

![Completeness04](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/FunctionalCompleteness04.png)