# Relational Database Design BCNF

## Lossless-join Decomposition

- For the case of $R=R_1\cup R_2$ a decomposition of $R$ into $R_1$ and $R_2$ is lossless join if and only if at least one of the following dependencies is in $F^+$:

$R_1 \cup R_2\rightarrow R_1$
$R_1 \cup R_2\rightarrow R_2$

## Dependency Preservation

- Let the schema $R$ is decomposed into $R_1,R_2,\dots R_n$.
- Let $F_i$ be the subset of dependencies $F^+$ that only includes attributes in $R_i$ for $1 \leq i \leq n$,
- The decomposition is dependency preserving,  if
${(F_1 \cup F_2\cup \dots \cup F_n)}^+ =F^+$
- If the decomposition is not dependency preserving, then checking updates for violation of functional dependencies may require computing joins, which is expensive.

Example:
$R=\{A,B,C\}$
$F=\{A\rightarrow B,B\rightarrow C\}$
can be decomposed in two different ways

- $R_1=\{A,B\}, R_2 =\{B,C\}$
  - Lossless-join decomposition
    - $R_1 \cap R_2=\{B\} \ and\ B\rightarrow BC$
    - Dependency preserving

- $R_1=\{A,B\}, R_2 =\{A,C\}$
  - Lossless-join decomposition
    - $R_1 \cap R_2=\{A\} \ and\ A\rightarrow AB$
    - Not dependency preserving (cannot check $B \rightarrow C$ without computing $R_1 ⨝ R_2$)
