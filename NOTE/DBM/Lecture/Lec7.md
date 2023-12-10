# Relational Database Design-Functional Dependency

Functional dependencies are some constraints on the set of legal relations.
The constraint is that the value for a certain set of attributes uniquely determines the value for another set of attributes. *约束条件是一组属性的值唯一确定另一组属性的值*
A functional dependency is a generalization of the notion of a key. *功能依赖关系是键概念的泛化*

## Functional Dependency Property *功能依赖*

- $K$ is a super key for relation schema iff $K \rightarrow R$
- $K$ is a condidate key for $R$ iff $K \rightarrow R$ and for no $\alpha \notin K, \alpha \rightarrow R$  

- Functional dependencies can express constraints that cannot be expressed using superkeys.
For example:

$course_info=(\underline{c\_name, p\_code},credits,domain,c\_number)$

We can use functional dependency to hold

$c\_name \rightarrow credits$

But would not expect the following to hold:

$credits \rightarrow c\_name$

- we can use  functional dependency to specify constraints on the set of legal relations

- Trivial
A functional dependency is trivial if it is satisfied by all instances of a relation.
Equivalently,
If $\beta \subseteq \alpha $, then $\alpha \rightarrow \beta$ is trivial.
Example:
$(credits,domain,c\_number \rightarrow c\_number)$
$(c\_name \rightarrow c\_name)$

## Closure of a Set of Functional Dependencies *功能依赖的闭包*

The set of all functional dependencies logically implied by $F$ is the closure of $F$, denoted by $F^+$.

$F^+$ is a superset of $F$.

### How to find $F^+$

- Applying Armstrong's Axioms
  1. reflexivity
     - if $\beta \subseteq \alpha,$ then $\alpha \rightarrow \beta$
  2. augumentation
     - if $\alpha \rightarrow \beta,$ then $\gamma \alpha \rightarrow \gamma \beta$ for any $\gamma$.  
  3. transitity
     - if $\alpha \rightarrow \beta \ and \beta \rightarrow \gamma, then \alpha \rightarrow \gamma.$
- These rules are sound and complete.

This method is also apply in Attribute Closure.
