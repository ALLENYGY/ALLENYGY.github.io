<!-- vscode-markdown-toc -->
<!-- - 1. [Chapter 2  Linear Transformations](#Chapter2LinearTransformations)
  - 1.1. [Ⅰ Linear Transformation](#LinearTransformation)
    - 1.1.1. [Linear Transformation](#LinearTransformation-1)
    - 1.1.2. [Maping](#Maping)
    - 1.1.3. [Linear Transformations from $ℝ^𝑛$ to $ℝ^𝑚$](#LinearTransformationsfromto)
    - 1.1.4. [Kernel](#Kernel)
    - 1.1.5. [Image](#Image)
    - 1.1.6. [Range](#Range)
    - 1.1.7. [Theorem 2.1.1 (Kernel/Image are subspaces)](#Theorem2.1.1KernelImagearesubspaces)
  - 1.2. [Ⅱ Matrix Representations of Linear Transformations](#MatrixRepresentationsofLinearTransformations)
    - 1.2.1. [Theorem 2.2.1 (Standard matrix representation)](#Theorem2.2.1Standardmatrixrepresentation)
    - 1.2.2. [Theorem 2.1.2](#Theorem2.1.2)
    - 1.2.3. [Corollary](#Corollary) -->

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->
# Linear Algebra

## 1. <a name='Chapter2LinearTransformations'></a>Linear Transformations

### 1.1. <a name='LinearTransformation'></a>Ⅰ Linear Transformation

#### 1.1.1. <a name='LinearTransformation-1'></a>Linear Transformation

- Definition:
A mapping 𝐿 from a vector space 𝑉 into a vector space 𝑊 is said to be a linear transformation if
$$𝐿(\alpha𝐯_1+ \beta𝐯_2 )= \alpha𝐿(𝐯_1 )+ \beta𝐿(𝐯_2 )$$
for all $𝐯_1,𝐯_2∈ 𝑉$ and for all scalars 𝛼 and 𝛽.
- Alternative definition:
𝐿 is a linear transformation if and only if for all $𝐯_1,𝐯_2∈ 𝑉$ and scalars 𝛼,
$$𝐿(𝐯_1+𝐯_2) = 𝐿(𝐯_1) + 𝐿(𝐯_2)$$
$$𝐿(\alpha𝐯) = \alpha𝐿(𝐯)$$

#### 1.1.2. <a name='Maping'></a>Maping

- Definition:
A mapping 𝐿 from a vector space 𝑉 into a vector space 𝑊 will be denoted
$$𝐿 : 𝑉 → 𝑊$$
When the arrow notation is used, it will be assumed that 𝑉 and 𝑉 represent vector spaces.

#### 1.1.3 linear operator

- Definition:
When the vector spaces 𝑉 and 𝑊 are the same, we will refer to a linear transformation 𝐿 : 𝑉 → 𝑉 as a linear operator on 𝑉. Thus, a linear operator is a linear transformation that maps a vector space 𝑉 into itself.

𝐿𝑖𝑛𝑒𝑎𝑟 𝑜𝑝𝑒𝑟𝑎𝑡𝑜𝑟 ⊂ 𝑙𝑖𝑛𝑒𝑎𝑟 𝑡𝑟𝑎𝑛𝑠𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛
 $$𝐿:𝑉→𝑉  \subset  𝐿:𝑉→𝑊$$

#### 1.1.4. <a name='LinearTransformations'></a>Linear Transformations from $ℝ^𝑛$ to $ℝ^𝑚$

- Definition:
If 𝐴 is any 𝑚×𝑛 matrix, and define
$$𝐿:ℝ^𝑛→ℝ^𝑚$$
via
$$𝐿(𝐱)=𝐴𝐱$$
for all $𝐱∈ℝ^𝑛$. Then 𝐿 is a linear transformation from $ℝ^𝑛$ to $ℝ^𝑚$.
- Property:
If 𝐿 is a linear transformation mapping a vector space 𝑉 into a vector space 𝑊, then
  - $𝐿(𝟎_𝑉) =𝟎_𝑊$ (where $𝟎_𝑉$ and $𝟎_𝑊$ are the zero vectors in 𝑉 and 𝑊, respectively).
  - If $𝐯_1,…,𝐯_n$ are elements of 𝑉 and $\alpha_1,…,\alpha_𝑛$ are scalars, then $𝐿(\alpha_1 𝐯_1+\alpha_2 𝐯_2+…+\alpha_𝑛 𝐯_n)$=$\alpha_1 𝐿(𝐯_1 )+\alpha_2 𝐿(𝐯_2 )…+\alpha_𝑛 𝐿(𝐯_n)$
  - 𝐿(−𝐯)= −𝐿(𝐯) for all  𝐯∈ 𝑉.

#### 1.1.5. <a name='Kernel'></a>Kernel

- Definition:
Let 𝐿 : 𝑉 → 𝑊 be a linear transformation. The kernel of 𝐿, denoted ker⁡(𝐿), is defined by
  - $ker⁡(𝐿)$ = {$𝐯∈ 𝑉 | 𝐿(𝐯) = 𝟎_𝑊$}
- The kernel of 𝐿 is the set of all vectors from 𝑉 that 𝐿 transforms to the zero vector in 𝑊.
- Note, if 𝐿 is defined via matrix multiplication for some matrix 𝐴, then ker⁡(𝐿)=𝑁(𝐴), the null space of 𝐴.

#### 1.1.6. <a name='Image'></a>Image

- Definition:
Let 𝐿 : 𝑉 → 𝑊 be a linear transformation and let 𝑆 be a subspace of 𝑉. The image of 𝑆, denoted 𝐿(𝑆), is defined by
$𝐿(𝑆)$ = {$𝐰∈ 𝑊 |𝐰= 𝐿(𝐯)$ for some $ 𝐯∈ 𝑆$}

#### 1.1.7. <a name='Range'></a>Range

- Definition:
The image of the entire vector space, 𝐿(𝑉), is called the range of 𝐿.

In other word

- If {$𝐯_1, 𝐯_2,…,𝐯_𝑘$} is a spanning set of 𝑆, then 𝐿(𝑆) is the span of $𝐿(𝐯_1), 𝐿(𝐯_2),… 𝐿(𝐯_𝑘)$.
- If 𝐿 is defined via matrix multiplication for some matrix 𝐴, then 𝐿(𝑉), the range of 𝐿, is the column space of 𝐴.

#### 1.1.8. <a name='Theorem2.1.1KernelImagearesubspaces'></a>Theorem 2.1.1 (Kernel/Image are subspaces)

If 𝐿 : 𝑉 → 𝑊 is a linear transformation and 𝑆 is a subspace of 𝑉. Then

- $ker⁡(𝐿)$={$𝐯∈𝑉:𝐿(𝐯)=𝟎_𝑊$} is a subspace of 𝑉.
- $𝐿(𝑆)$={$𝐰∈𝑊:𝐰=𝐿(𝐯)$ for some $𝐯∈𝑆$} is a subspace of 𝑊.

### 1.2. <a name='MatrixRepresentationsofLinearTransformations'></a>Ⅱ Matrix Representations of Linear Transformations

#### 1.2.1. <a name='Theorem2.2.1Standardmatrixrepresentation'></a>Theorem 2.2.1 (Standard matrix representation)

If 𝐿 is a linear transformation mapping $ℝ^𝑛$ into $ℝ^𝑚$, then there is an 𝑚×𝑛 matrix 𝐴, such that for each $x∈ℝ^𝑛$, 𝐿(𝐱)=𝐴𝐱.
In fact, the $𝑗^{𝑡ℎ}$ column vector of 𝐴 is given by $$𝒂_𝑗=𝐿(𝒆_𝑗)$$(𝑗=1,2,…,𝑛)

- How to write the 𝑚×𝑛 matrix 𝐴:
  - See what 𝐿 does to the basis vectors $𝐯_1, 𝐯_2,…,𝐯_𝑛$ in 𝑉. Because $𝐿(𝐯_1)$ is in 𝑊, write it as linear combination of $𝐰_1, 𝐰_2,…,𝐰_𝑚$;
  - write the coordinate vector $[𝐿(𝐯_1)]_𝐹$ as the first column of matrix 𝐴.
  - Repeat for $𝐿(𝐯_2),𝐿(𝐯_3)…$, to find the $2_{nd}, 3_{rd}$,… column of 𝐴.

#### 1.2.2. <a name='Theorem2.1.2'></a>Theorem 2.1.2

If 𝐸={$𝐯_1,𝐯_2,…,𝐯_n$} and 𝐹={$𝐰_1,𝐰_2,…,𝐰_m$} be ordered bases for $ℝ^𝑛$ and $ℝ^𝑚$, respectively. If 𝐿: $ℝ^𝑛→ℝ^𝑚$ is a linear transformation and 𝐴 is the matrix representing 𝐿 w.r.t. 𝐸 and 𝐹, then
$$𝒂_𝑗=𝑊^{−1} 𝐿(𝒗_𝑗 )$$ (𝑗=1,2,…,𝑛)
Where 𝑊=$[𝐰_1,𝐰_2,…,𝐰_m]$.

#### 1.2.3. <a name='Corollary'></a>Corollary

If 𝐴 is the matrix representing the linear transformation 𝐿: $ℝ^𝑛→ℝ^𝑚$ with respect to the bases
𝐸={$𝐮_1,𝐮_2,…,𝐮_n$} and 𝐹={$𝐛_1,𝐛_2,…,𝐛_m$}
then the reduced row echelon form of [$𝐛_1,𝐛_2,…,𝐛_𝑚$|$𝐿(𝐮_1),…,𝐿(𝐮_𝑛)$] is $[𝐼|𝐴]$.
___
