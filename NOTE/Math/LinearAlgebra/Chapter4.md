<!-- vscode-markdown-toc -->
<!-- - 1. [Chapter 4 Eigenvalues and Eigenvectors](#Chapter4EigenvaluesandEigenvectors)
	- 1.1. [Ⅰ Eigenvalues and Eigenvectors](#EigenvaluesandEigenvectors)
		- 1.1.1. [Eigenvalues and Eigenvectors](#EigenvaluesandEigenvectors-1)
	- 1.2. [Ⅲ Diagonalization](#Diagonalization)
		- 1.2.1. [Theorem 4.3.1](#Theorem4.3.1)
		- 1.2.2. [Diagonalization](#Diagonalization-1)
		- 1.2.3. [Theorem 4.3.2](#Theorem4.3.2)
		- 1.2.4. [Symmertric Matrix](#SymmertricMatrix)
		- 1.2.5. [Orthogonally Diagonalizable](#OrthogonallyDiagonalizable)
		- 1.2.6. [Spectral Theorem for Real Symmetric Matrices 6.3.3](#SpectralTheoremforRealSymmetricMatrices6.3.3)
	- 1.3. [Ⅴ The Singular Value Decomposition](#TheSingularValueDecomposition)
		- 1.3.1. [Square Symmertric Matrix](#SquareSymmertricMatrix)
		- 1.3.2. [The Singular Value Decomposition](#TheSingularValueDecomposition-1)
		- 1.3.3. [Theorem 4.5.1](#Theorem4.5.1)
	- 1.4. [Ⅵ Quadratic Forms](#QuadraticForms)
		- 1.4.1. [Principal Axes Theorem 4.6.1](#PrincipalAxesTheorem4.6.1)
		- 1.4.2. [Theorem 4.6.2](#Theorem4.6.2)
		- 1.4.3. [Theorem 4.6.3](#Theorem4.6.3) -->

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->
# Linear Algebra

## 1. <a name='Chapter4EigenvaluesandEigenvectors'></a>Eigenvalues and Eigenvectors

### 1.1. <a name='EigenvaluesandEigenvectors'></a>Ⅰ Eigenvalues and Eigenvectors

#### 1.1.1. <a name='EigenvaluesandEigenvectors-1'></a>Eigenvalues and Eigenvectors

- Definition：
Let 𝐴 be an 𝑛×𝑛 matrix.
A scalar 𝜆 is said to be an eigenvalue of 𝐴 if there exists a nonzero vector 𝐱≠0 such that
$$𝐴𝐱=\lambda𝐱$$
Such 𝐱≠0 is said to be an eigenvector for 𝐴 belonging to 𝜆.
  - The pair (𝜆,𝐱) is sometimes called an eigenpair for 𝐴.
  - Eigenvalues and eigenvectors are only defined for square matrices
  - Eigenvectors must be ==nonzero==
- Property
  - 𝐴 is singular ⇔ 𝜆=0 is an eigenvalue of 𝐴.
  - If 𝐴 is nonsingular, then $\lambda^{−1}$ is an eigenvalue of $𝐴^{−1}$, and 𝐱 is an eigenvector of 𝐴^(−1) belonging to 𝜆^(−1), i.e. 𝐴^(−1) 𝐱=𝜆^(−1) 𝐱.
  - For $𝑚\geq1$, $\lambda^𝑚$ is an eigenvalue of $𝐴^𝑚$, and 𝐱 is an eigenvector of $𝐴^𝑚$ belonging to $\lambda^𝑚$, i.e. $𝐴^𝑚 𝐱=\lambda^𝑚 𝐱.$
  - If $𝐴^2=𝐴$, what can 𝜆 be? Hint: $𝐴^2 𝐱=𝐴𝐱$.
  - If $𝐴^30=O$, what can 𝜆 be? Hint: $𝐴^30 𝐱=𝑂𝐱$

---
Find eigenvalue and eignvector
$$𝐴𝐱=\lambda𝐱⟺𝐴𝐱−\lambda𝐱=0⟺(𝐴−\lambda𝐼)𝐱=0⇔𝐱∈𝑁(𝐴−\lambda𝐼)$$

- 𝑁(𝐴−𝜆𝐼): eigenspace 特征空间 corresponding to the eigenvalue 𝜆.
This has a nontrivial solution 𝐱 ≠𝟎 if and only if we pick 𝜆 so that the square matrix (𝐴−𝜆𝐼) is singular.That is: $$det⁡(𝐴−\lambda𝐼)=0.$$
First use det⁡(𝐴−𝜆𝐼)=0 to find all eigenvalues for 𝐴, and then use 𝑁(𝐴−𝜆𝐼) to find all eigenvectors for 𝐴.

---

- Property:
Let 𝐴 be an 𝑛×𝑛 matrix and 𝜆 be a scalar. The following statements are equivalent:
  - 𝜆 is an eigenvalue of 𝐴.
  - (𝐴−𝜆𝐼)𝐱=𝟎 has nontrivial solutions.
  - 𝑁(𝐴−𝜆𝐼)≠{𝟎}
  - 𝐴−𝜆𝐼 is singular.
  - det⁡(𝐴−𝜆𝐼)=0

- 𝑝(𝜆)=det⁡(𝐴−𝜆𝐼) is a degree 𝑛 polynomial in variable 𝜆, called the characteristic polynomial 特征多项式.
- det⁡(𝐴−𝜆𝐼)=0: characteristic equation for 𝐴

### 1.2. <a name='Diagonalization'></a>Ⅲ Diagonalization

#### 1.2.1. <a name='Theorem4.3.1'></a>Theorem 4.3.1

If $\lambda_1 , \lambda_2，… \lambda_𝑘$  are distinct eigenvalues of an  𝑛×𝑛 matrix 𝐴 with corresponding eigenvectors $𝐱_1,𝐱_2,…,𝐱_𝑘$, then the vectors $𝐱_1,𝐱_2,…,𝐱_𝑘$ are linearly independent.

#### 1.2.2. <a name='Diagonalization-1'></a>Diagonalization

An 𝑛×𝑛 matrix 𝐴 is said to be diagonalizable if there exists a nonsingular matrix 𝑋 and a diagonal matrix 𝐷 such that
$$𝑋^{−1} 𝐴𝑋=𝐷$$
We say that 𝑋 diagonalizes 𝐴.

#### 1.2.3. <a name='Theorem4.3.2'></a>Theorem 4.3.2

An 𝑛×𝑛 matrix 𝐴 is diagonalizable if and only if A has 𝑛 linearly independent eigenvectors.

- If 𝐴 is diagonalizable, then the column vectors of the diagonalizing matrix 𝑋 are eigenvectors of 𝐴 and the diagonal elements of 𝐷 are the corresponding eigenvalues of 𝐴.
- The diagonalizing matrix 𝑋 is not unique. Reordering the columns of a given diagonalizing matrix 𝑋 or multiplying them by nonzero scalars will produce a new diagonalizing matrix.
- If 𝐴 is 𝑛×𝑛 and 𝐴 has 𝑛 distinct eigenvalues, then 𝐴 is diagonalizable. If the eigenvalues are not distinct, then 𝐴 may or may not be diagonalizable, depending on whether 𝐴 has 𝑛 linearly independent eigenvectors.
- If 𝐴 is diagonalizable, then 𝐴 can be factored as a product
$$𝐴=𝑋𝐷𝑋^{−1}$$$$𝐴^𝑘=𝑋𝐷^𝑘 𝑋^{−1}$$

##### Shortcut: For a 2×2 matrix
>
>trace = a+d =$\lambda_1+\lambda_2$
>det(A)=$\lambda_1\lambda_2$
>
#### 1.2.4. <a name='SymmertricMatrix'></a>Symmertric Matrix

Let 𝐴 be a symmetric 𝑛×𝑛 matrix: $𝐴^𝑇=𝐴.$

- Property:
  - $(𝐱)^𝑇 (𝐴𝐲)=(𝐴𝐱)^𝑇 (𝐲).$
  - If 𝐱 is an eigenvector of 𝐴 and 𝐲⊥𝐱, then 𝐴𝐲⊥𝐱. ^[ $(Ay)^Tx=(𝐲)^𝑇 (𝐴𝐱)= (𝐲)^𝑇 (\lambda𝐱)=\lambda(𝐲)^𝑇 (𝐱)=0$]
  - If $𝐱_1,𝐱_2$ are eigenvectors of 𝐴 with $\lambda_1≠\lambda_2$, then $𝐱_1⊥𝐱_2$. ^[Proof:
Compare $(𝐱_1 )^𝑇 (𝐴𝐱_2 )$ and $(𝐴𝐱_1 )^𝑇 (𝐱_2 )$:
$(𝐱_1 )^𝑇 (𝐴𝐱_2 )=(𝐴𝐱_1 )^𝑇 (𝐱_2 )$=>$(𝐱_1 )^𝑇 (\lambda_2𝐱_2 )=(\lambda_1𝐱_1 )^𝑇 (𝐱_2 )$, but $\lambda_1≠\lambda_2$. Therefore $(𝐱_1 )^𝑇 (𝐱_2 )=0$ => $𝐱_1⊥𝐱_2$]

#### 1.2.5. <a name='OrthogonallyDiagonalizable'></a>Orthogonally Diagonalizable

A square matrix 𝐴 is ==orthogonally== diagonalizable if $𝑄^𝑇 𝐴𝑄=𝐷$ for some diagonal matrix 𝐷 and some orthogonal matrix 𝑄.

- 𝑛×𝑛 matrix 𝐴 is orthogonally diagonalizable if and only if 𝐴 has 𝑛 orthonormal eigenvectors (columns of 𝑄)
- From the previous slide, if ==a symmetric matrix 𝐴 has 𝑛 distinct eigenvalues==, then 𝐴 has ==𝑛 mutually orthogonal eigenvectors==.
- Surprisingly, symmetric 𝑛×𝑛 matrix 𝐴 ALWAYS has 𝒏 orthonormal eigenvectors, and ALL eigenvalues are real!

#### 1.2.6. <a name='SpectralTheoremforRealSymmetricMatrices6.3.3'></a>Spectral Theorem for Real Symmetric Matrices 6.3.3

If 𝐴 is a real symmetric matrix, then there is an orthogonal matrix 𝑄 that diagonalizes 𝐴; that is, $𝑄^𝑇 𝐴𝑄=𝐷$, where $𝐷$ is diagonal, with real entries.

### 1.3. <a name='TheSingularValueDecomposition'></a>Ⅴ The Singular Value Decomposition

#### 1.3.1. <a name='SquareSymmertricMatrix'></a>Square Symmertric Matrix

Properties

- Eigenvalue: nonnegative , real
- Eigenvector: Orthoganal

---
Suppose a m×n matrix A Then

1. $AA^T$ and $A^TA$ are symmetric. are orthogonally diagonalizable
2. $AA^T$ and $A^TA$ are orthogonally diagonalizable

  > $AA^T$ has m orthonormal eigenvectors
  > $A^TA$ has n orthonormal eigenvectors

3. All eigenvalues of $AA^T$ and $A^TA$ are non-negative.^[ $||Ax||^2 = (Ax)^T Ax =x^TA^TAx$
  = $\lambda||x||^2$ >0]

#### 1.3.2. <a name='TheSingularValueDecomposition-1'></a>The Singular Value Decomposition

Assume that A is an m×n matrix with m ≥ n. $UΣV^T$ is SVD of A
Factorize A into a product $UΣV^T$ , where

- U is an m × m orthogonal matrix $\rightarrow U^TU=I_m$
- V is an n ×n orthogonal matrix  $\rightarrow V^TV=I_n$
- Σ is an m ×n matrix whose off-diagonal entries are all 0’s and whose diagonal elements satisfy: $$\sigma_1>=\sigma_2>=...=\sigma_n>=0$$
$$A = UΣV^T$$
Properties
- The first r columns of V is an orthonormal basis for $R(A^T)$
- The rest of columns of V is an orthonormal basis for $N(A)$
- The first r columns of U is an orthonormal basis for $R(A)$
- The rest of columns of U is an orthonormal basis for $N(A^T)$

#### 1.3.3. <a name='Theorem4.5.1'></a>Theorem 4.5.1

If A is an m × n matrix, then A has a singular value decomposition.

### 1.4. <a name='QuadraticForms'></a>Ⅵ Quadratic Forms

2×2： $$⟨𝐱,𝐴𝐱⟩=𝐱^𝑇 𝐴𝐱 =𝑎𝑥^2+2𝑏𝑥𝑦+𝑐𝑦^2$$
3×3： $$⟨𝐱,𝐴𝐱⟩=𝐱^𝑇 𝐴𝐱 =𝑎𝑥^2+𝑏𝑦^2+𝑐𝑧^2+2𝑑𝑥𝑦+2𝑒𝑥𝑧+2𝑓𝑦𝑧$$

- In $ℝ^𝑛$, for a symmetric 𝑛×𝑛 matrix 𝐴, the function $𝑞:ℝ^𝑛→ℝ$ $$𝑞(𝐱)=𝐱^𝑇 𝐴𝐱=Σ_{𝑖=1}^n Σ_{𝑖=1}^n 𝑎_𝑖𝑗 𝑥_𝑖 𝑥_𝑗$$

---
A real 𝑛×𝑛 symmetric matrix 𝐴 is said to be

- Positive definite 正定 if $𝐱^𝑇 𝐴𝐱>0$ for all nonzero 𝐱 in $ℝ^𝑛$  
- Negative definite 负定 if $𝐱^𝑇 𝐴𝐱<0$ for all nonzero 𝐱 in $ℝ^𝑛$
- Positive semidefinite 半正定 if $𝐱^𝑇 𝐴𝐱≥0$ for all nonzero 𝐱 in $ℝ^𝑛$
- Negative semidefinite 半负定 if $𝐱^𝑇 𝐴𝐱≤0$ for all nonzero 𝐱 in $ℝ^𝑛$
- Indefinite 不定 if $𝐱^𝑇 𝐴𝐱$ takes positive and negative values

#### 1.4.1. <a name='PrincipalAxesTheorem4.6.1'></a>Principal Axes Theorem 4.6.1

If 𝐴 is a real symmetric 𝑛×𝑛 matrix, then there is a change of variables $𝐜=𝑄^𝑇 𝐱$, where 𝑄 is an orthogonal matrix, such that
$$𝐱^𝑇 𝐴𝐱=𝐜^𝑇 𝐷𝐜$$ where 𝐷 is a real diagonal matrix.

#### 1.4.2. <a name='Theorem4.6.2'></a>Theorem 4.6.2

Let 𝐴 be a real symmetric 𝑛×𝑛 matrix. Then 𝐴 is positive definite if and only if all its eigenvalues are positive.
𝐴 is

- Positive definite iff all its eigenvalues are positive
- Negative definite iff all its eigenvalues are negative
- Positive semidefinite iff all its eigenvalues are nonnegative
- Negative semidefinite iff all its eigenvalues are nonpositive
- Indefinite iff all it has both positive and negative eigenvalues

#### 1.4.3. <a name='Theorem4.6.3'></a>Theorem 4.6.3

Let 𝐴 be a real symmetric 𝑛×𝑛 matrix. The following are equivalent:

- 𝐴 is positive definite.
- The leading principal submatrices $𝐴_1,𝐴_2,⋯,𝐴_𝑛$ all have positive determinant.

> Leading principal submatrices:upper-left  1×1, 2×2, 3×3,…
> If some determinants are positive, and others negative: 𝐴 is indefinite.
> If these determinants are all ≥0: positive semidefinite.
