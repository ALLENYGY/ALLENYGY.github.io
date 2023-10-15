<!-- vscode-markdown-toc -->
# Linear Algebra

- 本文主要对 UIC 线性代数课程向量空间定理汇总
- 具体理解仍需要靠自主学习

<!-- - 1. [Chapter Vector Spaces](#ChapterVectorSpaces)
  - 1.1. [Ⅰ Vector and Vector Space Axioms](#VectorandVectorSpaceAxioms)
    - 1.1.1. [$\mathbb{R}^{n}$ ^[Euclidean Vector Spaces]](#mathbbRnEuclideanVectorSpaces)
    - 1.1.2. [Vector Space Axioms](#VectorSpaceAxioms)
    - 1.1.3. [Theorem](#Theorem)
  - 1.2. [Ⅱ Subspace & Null space](#SubspaceNullspace)
    - 1.2.1. [Subspaces of Vector Spaces](#SubspacesofVectorSpaces)
    - 1.2.2. [Null space of a Matrix](#NullspaceofaMatrix)
    - 1.2.3. [The Span of a Set of Vectors](#TheSpanofaSetofVectors)
    - 1.2.4. [Theorem](#Theorem-1)
    - 1.2.5. [Spanning Set](#SpanningSet)
  - 1.3. [Ⅲ Linear Independence](#LinearIndependence)
    - 1.3.1. [Linear Dependence](#LinearDependence)
    - 1.3.2. [Theorem 1.3.0](#Theorem1.3.0)
    - 1.3.3. [Linear Independence](#LinearIndependence-1)
    - 1.3.4. [Theorem 1.3.1 ^[Only Square matrix]](#Theorem1.3.1OnlySquarematrix)
    - 1.3.5. [Theorem 1.3.2](#Theorem1.3.2)
  - 1.4. [Ⅳ Basis and Dimension](#BasisandDimension)
    - 1.4.1. [Standard Basis of $R^n$](#StandardBasisof)
    - 1.4.2. [Dimension](#Dimension)
    - 1.4.3. [Theorem 1.4.1](#Theorem1.4.1)
    - 1.4.4. [Theorem 1.4.3](#Theorem1.4.3)
    - 1.4.5. [Theorem 1.4.4](#Theorem1.4.4)
  - 1.5. [Ⅴ Change of Basis](#ChangeofBasis)
    - 1.5.1. [Coordinate Vector](#CoordinateVector)
    - 1.5.2. [Changing Coordinates](#ChangingCoordinates)
  - 1.6. [Ⅵ Row space & column space](#Rowspacecolumnspace)
    - 1.6.1. [Row space & column space](#Rowspacecolumnspace-1)
    - 1.6.2. [Theorem 1.6.1](#Theorem1.6.1)
    - 1.6.3. [Theorem 1.6.2](#Theorem1.6.2)
    - 1.6.4. [Rank](#Rank)
    - 1.6.5. [Dimension Theorem 1.6.3](#DimensionTheorem1.6.3)
    - 1.6.6. [Consistency theorem for Linear System 1.6.4](#ConsistencytheoremforLinearSystem1.6.4)
    - 1.6.7. [Nullity](#Nullity)
    - 1.6.8. [Theorem 1.6.5](#Theorem1.6.5)
    - 1.6.9. [Property](#Property) -->

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## 1. <a name='Chapter VectorSpaces'></a>Chapter  Vector Spaces

### 1.1. <a name='VectorandVectorSpaceAxioms'></a>Ⅰ Vector and Vector Space Axioms

#### 1.1.1. <a name='mathbbRnEuclideanVectorSpaces'></a>$\mathbb{R}^{n}$ ^[Euclidean Vector Spaces]

- Definition:
  - The set of all column n-vectors ${[u_1,u_2,...,u_n]}^T$ is called
  n-dimensional real space and is denoted $R^n$.^[Perhaps the most elementary vector spaces are the Euclidean vector spaces $R^n$.]
  - $u_i$ is the i-th component of $[u_1,u_2,...,u_n]^T$.

##### Addition and Scalar Multiplication

- Let $u=[u_1,u_2,...,u_n ]^T$ and $v=[v_1,v_2,...,v_n ]^T$ be two elements of $R^n$ and let c be a scalar. Addition and scalar multiplication are defined as
  - Addition:
    $$u+v=[u_1+v_1,u_2+v_2,...,u_n+v_n ]^T$$
  - Scalar multiplication:
    $$cu=[cu_1,cu_2,...,cu_n ]^T$$

##### Prove a VectorSpace

- $u, v\in R^n -> u+v \in R^n$  ($R^n$ is closed under addition)
- $u \in R^n, c \in R, cu \in R^n$ ($R^n$ is closed under scalar multiplication)

##### Zero vector

- Definition:
    The vector $[0,0,...,0]^T$, having n zero components, is called the zero vector of $R^n$ and is denoted 0.
- Property: for any vector v, 0 + v = v, v + 0 = v.

##### Negative Vector

- Definition:
    The vector $(–1)u$ is written $–u$ and is called the negative of $u$. It is a vector having the same magnitude as $u$, but lies in the opposite direction to $u$.
- Property: for any vector $u$, $u + (–u) = 0 = (- u) + u $

#### 1.1.2. <a name='VectorSpaceAxioms'></a>Vector Space Axioms

- Definition:
  Let V be a set on which the operations of addition and scalar multiplication are defined.^[By this we mean that, with each pair of elements x and y in V, we can associate a unique element x+y that is also in V, and with each element x in V and each scalar α, we can associate a unique element αx in V.] The set V together with the operations of addition and scalar multiplication is said to form a vector space
  if the following axioms are satisfied:
  - $A_1$.  $x + y = y + x$  for any x and y in V.
  - $A_2$. $(x + y) + z = x + (y + z)$ for any x, y, and z in V.
  - $A_3$. There exists an element 0 in V such that x + 0 = x for each x ∈ V.
  - $A_4$. For each x ∈ V, there exists an element −x in V such that x + (−x) = 0.
  - $A_5. α(x + y) = αx + αy$ for each scalar α and any x and y in V.
  - $A_6. (α + β)x = αx + βx$ for any scalars α and β and any x ∈ V.
  - $A_7. (αβ)x = α(βx)$ for any scalars α and β and any x ∈ V.
  - $A_8. 1x = x$ for all x ∈ V.

##### $R^{m\times n}$ is a Vector Space ^[Here “vector” is one m×n matrix]

- prove:
  - Addition: $A+B= (a_{ij})+(b_{ij})= (a_{ij}+b_{ij})$ [the sum is still an m×n matrix]
  - Scalar multiplication: $cA = c(a_{ij}) =(ca_{ij})$ [It is still an m×n matrix]

##### $C[a,b]$ is a Vector Space

- Definition:
    $C[a,b]$ is the set of all real-valued continuous functions defined on the interval $[a,b]$. Vectors in this case are continuous real-valued functions.
- prove:
  - Addition: $(f+g)(x) = f(x) + g(x)$
  - Scalar multiplication: (𝛼𝑓)(x) =𝛼𝑓(x)

##### $P_n$ is a Vector Space

Definition:
A polynomial of degree k (k≥0) is a function of the form
$p(x)= a_0 + a_1x + a_2x^2 +  ...  + a_k x^k$  where $a_k≠0$.
$0(x) = 0$ is also considered to be a polynomial.

#### 1.1.3. <a name='Theorem'></a>Theorem

- If V is a vector space and x ∈V , then
  1. 0x = 0
  2. x + v = 0 implies that v = -x
  3. (-1)x = -x.
- Proof
  1. x=(1+0)x=1x+0x=x+0x, therefore 0x=0
  2. x+v=0, then –x=-x+0=-x+(x+v)=v
  3. 0=0x=(1-1)x=1x+(-1)x, x+(-1)x=0, therefore (-1)x=-x

### 1.2. <a name='SubspaceNullspace'></a>Ⅱ Subspace & Null space

#### 1.2.1. <a name='SubspacesofVectorSpaces'></a>Subspaces of Vector Spaces

- Definition:
    Let V be a vector space (for example, $R^n$). A nonempty subset S of V is a subspace if it is closed under addition and closed under scalar multiplication.

To show that a subset S of a vector space forms a subspace, we must show that

- S is nonempty (it contains the zero vector)
- $u, v\in S ⇒ u+v \in S$    (S is closed under addition)
- $u \in S, c \in R ⇒ cu \in S$ (S is closed under scalar multiplication)

##### Trivial subspace

- Definition:
    If V is a vector space, then V is a subspace of itself, and S = {0} is a subspace of V.
    All the other subspaces are referred to as proper subspaces.
- We refer to {0} as the zero subspace.

#### 1.2.2. <a name='NullspaceofaMatrix'></a>Null space of a Matrix

- Definition:
  For a m×n matrix A, let 𝑁(A) denote the set of all solutions to the homogeneous system Ax = 0, that is 𝑁(A)={$x \inR^n$|Ax=𝟎}
Null space is a subspace
  - Addition: if 𝒙,𝒚∈𝑁(A), then A𝒙=𝟎,  A𝒚=𝟎⇒A(𝒙+𝒚)=𝟎, so x+𝑦∈𝑁(A)
  - Scalar multiplication: if 𝒙∈𝑁(A), c∈R, then A𝒙=𝟎⇒A(c𝒙)=𝟎 ⇒ c𝒙∈𝑁(A)

#### 1.2.3. <a name='TheSpanofaSetofVectors'></a>The Span of a Set of Vectors

- Definition:
  - For vectors $v_1,v_2,...,v_n$ from a vector space V and scalars $a_1,a_2,...,a_n,$ the sum $a_1v_1+a_2v_2+...+a_nv_n$ is called a linear combination of $v_1,v_2,...,v_n$.
  - The set of all possible linear combinations of $v_1,v_2,...,v_n$ is called the span of $v_1,v_2,...,v_n$, denoted by $Span(v_1,v_2,...,v_n)$:
  $Span$($v_1,v_2,...,v_n$)={$a_1 v_1+a_2 v_2+⋯+a_n v_n a_i∈R$}

#### 1.2.4. <a name='Theorem-1'></a>Theorem

If $v_1,v_2,...,v_n$ are vectors from a vector space V , then $Span(v_1,v_2,...,v_n)$ is a subspace of V.

#### 1.2.5. <a name='SpanningSet'></a>Spanning Set

- Definition:
  The set of vectors {$v_1,v_2,...,v_n$} is a spanning set for a vector space V if and only if every vector in V can be written as a linear combination of $v_1,v_2,...,v_n$, that is to say, for any x𝜖V there exist scalars $a_1,a_2,...,a_n$ such that $$x=a_1v_1+a_2v_2+...+a_n v_n$$

##### How to check if a set spans $R^n$

- Step 1: Put the column vectors into a matrix, A=[$v_1, v_2$,...]
- Step 2: Augment the matrix by the vector $b=[a, b, c]^T$
- Step 3: Row reduce the augmented matrix $[A|b]$ to check whether it is consistent for All a, b, c
- Step 4: If $[A|b]$ is consistent for All a, b, c, then the columns of $A, v_1, v_2,...$, is a spanning set of $R^n$.

### 1.3. <a name='LinearIndependence'></a>Ⅲ Linear Independence

#### 1.3.1. <a name='LinearDependence'></a>Linear Dependence

- Definition:
The vectors $v_1,v_2,...,v_n$ in a vector space V are said to be linearly dependent (线性相关) if and only if there exist scalars $a_1,a_2,...,a_n$, not all zero, such that
$$a_1 v_1+a_2 v_2+...+a_n v_n=0$$
- Let $A=[v_1,v_2,...,v_n]$, then $v_1,v_2,...,v_n$ is linearly dependent if and only if the null space of A, 𝑁(A), is NOT the zero subspace {0}.

#### 1.3.2. <a name='Theorem1.3.0'></a>Theorem 1.3.0

Nonzero vectors $v_1,v_2,...,v_n$ are linearly dependent if and only if at least one vector is a linear combination of the others.

#### 1.3.3. <a name='LinearIndependence-1'></a>Linear Independence

- Definition:
The vectors $v_1,v_2,...,v_n$ in a vector space V are said to be  linearly independent (线性无关) if $$a_1 v_1+a_2 v_2+...+a_n v_n=0$$
implies that all the scalers $a_1,a_2,...,a_n$ must equal to 0.
- Let $A=[v_1,v_2,...,v_n]$, then $v_1,v_2,...,v_n$ is linearly independent if and only if the null space of A is the zero subspace: 𝑁(A)={𝟎}.
- None of the vectors $v_1,v_2,...,v_n$ can be written as a linear combination of the others.

#### 1.3.4. <a name='Theorem1.3.1OnlySquarematrix'></a>Theorem 1.3.1 ^[Only Square matrix]

Let $x_1,x_2,...,x_n$ be n vectors in $R^n$ and let $X=[x_1,x_2,...,x_n]$.

- The vectors $x_1,x_2,...,x_n$ will be linearly dependent if and only if 𝑋 is singular.

#### 1.3.5. <a name='Theorem1.3.2'></a>Theorem 1.3.2

Let $v_1, ..., v_n$ be vectors in a vector space V.

- A vector $v \in Span(v_1, ..., v_n)$ can be written uniquely as a linear combination of $v_1, ..., v_n$ if and only if $v_1, ..., v_n$ are linearly independent.

### 1.4. <a name='BasisandDimension'></a>Ⅳ Basis and Dimension

- Definition：
    The vectors $v_1,v_2,...,v_n$ form a basis for a vector space V if and only if
  - $v_1,v_2,...,v_n$ are linearly independent.
  - $v_1,v_2,...,v_n$ span V.
- If $v_1,v_2,...,v_n$ form a basis for V, then:for any 𝒃∈V, there exists unique $a_1, a_2,..., a_n,$ such that $$b=a_1 v_1+a_2 v_2,+⋯+a_n v_n$$

#### 1.4.1. <a name='StandardBasisof'></a>Standard Basis of $R^n$

- Definition：
    The set {$e_1=[1, 0, ..., 0]^T, e_2=[0, 1, ..., 0]^T, ..., e_n=[0, ..., 1]^T$} of n vectors is the standard basis for $R^n$.
  - Standard basis for $R^3$: {$e_1,e_2,e_3$}.
  - Standard basis for $P_4$: {$1, x, x^2,x^3$}.  

#### 1.4.2. <a name='Dimension'></a>Dimension

- Definition:
    Let V be a vector space. If V has a basis consisting of n vectors, we say that V has dimension n and write dim V=n
- The subspace {0} of V is said to have dimension 0.
- V is  finite dimensional if there is a finite set of vectors that spans V; otherwise V is infinite dimensional.
  - dim R^n = n
  - dim R^(m×n) = m×n
  - dim Pn = n

#### 1.4.3. <a name='Theorem1.4.1'></a>Theorem 1.4.1

- If S = {$v_1,v_2,...,v_n$} is a spanning set for a vector space V , then any collection of m vectors in V with m > n is linearly dependent.

##### Important Corollary (1.4.2)

- If {$v_1,v_2,...,v_n$} and {$u_1,u_2,...,u_m$} are both bases for a vector space V , then m = n.

#### 1.4.4. <a name='Theorem1.4.3'></a>Theorem 1.4.3

If V is a vector space with dim ⁡V = n > 0, then

- Any set of n linearly independent vectors also spans V;
- Any n vectors that span V are also linearly independent

#### 1.4.5. <a name='Theorem1.4.4'></a>Theorem 1.4.4

If V is a vector space with dim V = n > 0, then

- No set with k < n vectors can span V ;
- Any subset of k < n linearly independent vectors can be extended to form a basis for V;
- Any spanning set of V with m > n vectors can be cut down to form a basis for V .

### 1.5. <a name='ChangeofBasis'></a>Ⅴ Change of Basis  

#### 1.5.1. <a name='CoordinateVector'></a>Coordinate Vector

- Definition：
Let V be a vector space and let E={$v_1,v_2,...,v_n$} be an ordered basis for V. If v is any element of V, then v can be written uniquely in the form
$$v=c_1 v_1+c_2 v_2+...+c_n v_n$$ where $c_1,c_2...,c_n$ are scalers.
Thus, we can associate each vector v a unique column vector {$c_1,c_2...,c_n$}$^T$. The vector is called the coordinate vector of v with respect to (w.r.t). the ordered basis E, denoted $[v]_E$.

#### 1.5.2. <a name='ChangingCoordinates'></a>Changing Coordinates

Given vector $x=[x_1,x_2]^T$, find its coordinates (w.r.t). $u_1$ and $u_2$.

- As we have x=Uc.
- Matrix U is nonsingular, therefore $c=U^{−1}x$.
- Thus, $U^{−1}$ is the transition matrix from {$e_1,e_2$} to {$u_1,u_2$}.
  
Given vector $c_1 u_1+c_2 u_2$, find its coordinates w.r.t. $e_1$ and $e_2$.

- If c is the coordinate vector of x with respect to the basis {$u_1,u_2, ...$}, then
  - x=Uc
- And
  - $c=U^{−1}x$
- Where U={$u_1,u_2,...$} is called the ==transition matrix== from the {$u_1,u_2, ...$} to the standard basis {$e_1,e_2,...$}, and $U^{−1}$ is the transition matrix from {$e_1,e_2,...$} to {$u_1,u_2,...$}.

Changing coordinate vectors from one basis {$v_1,v_2$} of $R^2$ to another basis {$u_1,u_2$}:

- Suppose for a given vector x, its coordinates (w.r.t.) {$v_1,v_2$} are known: $$x=c_1 v_1+c_2 v_2$$
We want to write x as $d_1 u_1+d_2 u_2$.
- We have $x=c_1 v_1+c_2 v_2=d_1 u_1+d_2 u_2$; Let $V=[v_1,v_2]$ and $U=[u_1,u_2]$.
- Then $$Vc=Ud ⇒  d=U^{−1} Vc$$ $$S=U^{−1}V$$ is the transition matrix from {$v_1,v_2$} to {$u_1,u_2$}.
- Property
  - A transition matrix is nonsingular
  - If S is the transition matrix from {$v_1,v_2,...,v_n$} to {$u_1, u_2,...,u_n$}, then $S^{−1}$ is the transition matrix from {$u_1, u_2,...,u_n$} to {$v_1,v_2,...,v_n$}.

### 1.6. <a name='Rowspacecolumnspace'></a>Ⅵ Row space & column space

#### 1.6.1. <a name='Rowspacecolumnspace-1'></a>Row space & column space

For an m×n matrix A, the rows are n-vectors from $R^{1×n}$, and the column vectors are m-vectors from $R^m$.

- Definition:
  - For an m×n matrix A, the subspace of $R^{1×n}$ spanned by the row vectors of A is called the row space of A.
  - The subspace of $R^m$ spanned by the column vectors of A is called the column space of A.

#### 1.6.2. <a name='Theorem1.6.1'></a>Theorem 1.6.1

- Two row-equivalent matrices have the same row space.

#### 1.6.3. <a name='Theorem1.6.2'></a>Theorem 1.6.2

- Two row-equivalent matrices have the same null space.
- If U is the rref of A and $c_1 u_1+c_2 u_2+...=0$, then als $c_1 a_1+c_2 a_2+...=0$.
- All the column vectors of A corresponding to the leading variables in U form a basis of the column space of A.

#### 1.6.4. <a name='Rank'></a>Rank

- Definition:
The rank of a matrix A is the dimension of the row space of A, denoted rank(A).
- Property: The rank of a reduced row echelon form is equal to the number of lead variables

#### 1.6.5. <a name='DimensionTheorem1.6.3'></a>Dimension Theorem 1.6.3

- dim(Row Space A) = dim(Column Space A) = rank(A).

#### 1.6.6. <a name='ConsistencytheoremforLinearSystem1.6.4'></a>Consistency theorem for Linear System 1.6.4

- The linear system Ax = 𝐛 is consistent if and only if 𝐛 is in the column space of A.
  - An n×n square matrix A is nonsingular if and only if the column vectors of A form a basis for $R^n$ ⇔ Ax=b always have unique solution ⇔ 𝑟ank(A)=n⇔det⁡(A)≠0

#### 1.6.7. <a name='Nullity'></a>Nullity

- Definition:
The nullity of a matrix A is the dimension of the null space of A, that is nullity(A) = dim(𝑁(A)).
- Properties：
  - The number of lead variables:   rank(A)
  - The number of free variables:   dim(N(A))
  - The number of variables:        n

#### 1.6.8. <a name='Theorem1.6.5'></a>Theorem 1.6.5

- rank(A)+dim(N(A))=n

#### 1.6.9. <a name='Property'></a>Property

Let $A∈R^{m×n}$. The following are equivalent:

- The columns of A are linearly independent
- 𝑁(A)={𝟎}
- Nullity(A) = 0
- A𝒙=𝒃 has at most 1 solution for any 𝒃

Let $A∈R^{m×n}$. The following are equivalent:

- The columns of A spans $R^m$
- The column space of A is $R^m$
- Rank(A) = m
- A𝒙=𝒃 always have at least 1 solution for any 𝒃

___
