---
Title: "[[Relational-Database-Design-Functional-Dependency]]"
status: DONE
tags:
  - DataBase
  - NOTE
  - Lec8
Author:
  - AllenYGY
created: 2023-12-28T00:16
updated: 2024-03-21T23:28
---
# [[Relational-Database-Design-Functional-Dependency]]

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
  3. transitivity
     - if $\alpha \rightarrow \beta$ and $\beta \rightarrow \gamma$, then $\alpha \rightarrow \gamma.$
- These rules are sound and complete.

This method is also apply in Attribute Closure.

### Prove Armstrong's Axioms

For Union:
If $\alpha \rightarrow \beta $ and $\alpha \rightarrow \gamma,$ then $\alpha \rightarrow \gamma \beta$

1. $\alpha \rightarrow \beta$
2. $\alpha \alpha \rightarrow \alpha \beta$ According to augmentation
3. $\alpha \rightarrow \alpha \beta$
4. $\alpha \rightarrow \gamma$
5. $\alpha \beta \rightarrow \gamma \beta$
6. $\alpha \rightarrow \alpha \beta \rightarrow \beta \gamma$ According to transitivity
7. $\alpha \rightarrow \beta \gamma$

For Decomposition:
if $\alpha \rightarrow \beta \gamma$, then $\alpha \rightarrow \beta$ and $\alpha \rightarrow \gamma$

1. $\alpha \rightarrow \beta \gamma$
2. $\beta \gamma \rightarrow \beta$  according to reflexivity
3. $\beta \gamma \rightarrow \gamma$ according to reflexivity
4. $\therefore \alpha \rightarrow \beta,\alpha \rightarrow \gamma$ according to transitivity

For pseudotransitivity
if $\alpha \rightarrow \beta$ and $\gamma \beta \rightarrow \epsilon$ then $\alpha \gamma \rightarrow \epsilon$

1. $\because \alpha \rightarrow \beta$
2. $\therefore \alpha \gamma \rightarrow \beta \gamma$ according to augmentation
3. $\because \alpha \gamma \rightarrow \beta \gamma \rightarrow \epsilon$ according to transitivity
4. $\therefore \alpha \gamma \rightarrow \epsilon$
