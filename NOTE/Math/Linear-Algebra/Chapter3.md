<!-- vscode-markdown-toc -->
* 1. [Chapter 3 Orthogonality](#Chapter3Orthogonality)
	* 1.1. [Ⅰ The Scalar Product in $ℝ^𝑛$](#TheScalarProductin)
		* 1.1.1. [Scalar Product](#ScalarProduct)
		* 1.1.2. [Length](#Length)
		* 1.1.3. [Angle](#Angle)
		* 1.1.4. [Projection](#Projection)
	* 1.2. [Ⅱ Orthogonal Subspaces](#OrthogonalSubspaces)
		* 1.2.1. [Orthogonal Subspaces](#OrthogonalSubspaces-1)
		* 1.2.2. [Orthogonal Complement](#OrthogonalComplement)
		* 1.2.3. [Theorem 3.2.1](#Theorem3.2.1)
		* 1.2.4. [Theorem 3.2.2](#Theorem3.2.2)
		* 1.2.5. [Fundamental subspaces](#Fundamentalsubspaces)
		* 1.2.6. [Theorem 3.2.3](#Theorem3.2.3)
		* 1.2.7. [Theorem 3.2.4](#Theorem3.2.4)
		* 1.2.8. [Direct Sum](#DirectSum)
		* 1.2.9. [Direct Sum Theorem 3.2.5](#DirectSumTheorem3.2.5)
		* 1.2.10. [Theorem 3.2.6](#Theorem3.2.6)
	* 1.3. [Ⅲ Least Squares Problems](#LeastSquaresProblems)
		* 1.3.1. [Line of best fit](#Lineofbestfit)
		* 1.3.2. [Least Square Solutions](#LeastSquareSolutions)
		* 1.3.3. [Theorem 3.3.1](#Theorem3.3.1)
		* 1.3.4. [Projection formula](#Projectionformula)
	* 1.4. [Ⅴ Orthonormal Sets](#OrthonormalSets)
		* 1.4.1. [Note on Inner Product Spaces](#NoteonInnerProductSpaces)
		* 1.4.2. [Orthogonal Set](#OrthogonalSet)
		* 1.4.3. [Orthonormal Set](#OrthonormalSet)
		* 1.4.4. [Theorem [Nonzero orthogonal set is linearly independent] 3.5.1](#TheoremNonzeroorthogonalsetislinearlyindependent3.5.1)
		* 1.4.5. [Orthonormal Basis](#OrthonormalBasis)
		* 1.4.6. [Orthogonal matrix](#Orthogonalmatrix)
		* 1.4.7. [Theorem 3.5.5](#Theorem3.5.5)
	* 1.5. [Summary](#Summary)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc --># Linear Algebra
##  1. <a name='Chapter3Orthogonality'></a>Chapter 3 Orthogonality
###  1.1. <a name='TheScalarProductin'></a>Ⅰ The Scalar Product in $ℝ^𝑛$
####  1.1.1. <a name='ScalarProduct'></a>Scalar Product
* Definition: 
For vectors 𝐱 and 𝐲 in $ℝ^𝑛$, the 1×1 matrix $𝐱^𝑇 𝐲$ (also treated as a scalar) is called the scalar product of 𝑥 and 𝑦, and is given by
$$𝐱^𝑇 𝐲=𝑥_1 𝑦_1+𝑥_2 𝑦_2+…+𝑥_𝑛 𝑦_𝑛$$
* Other names: inner product ⟨𝐱,𝐲⟩, dot product 𝐱⋅𝐲
####  1.1.2. <a name='Length'></a>Length 
* Definition:
For a vector 𝐱 in $ℝ^𝑛$, the ==Euclidean length== (norm, magnitude) 
‖𝐱‖ of 𝐱  is defined to be
$$‖𝐱‖=\sqrt{𝐱^𝑇 𝐱}=\sqrt{𝑥_1^2+𝑥_2^2+…+𝑥_𝑛^2}$$
* A vector 𝐮 in ℝ^𝑛 is a unit vector if and only if ‖𝐮‖=1. 
* If 𝐱 is a nonzero vector, then $𝐱/‖𝐱‖$  is a unit vector in the direction of 𝐱. 
* The distance between two vectors 𝐱 and 𝐲 is $$‖𝐱−𝐲‖=\sqrt{(𝑥_1−𝑦_1 )^𝟐+(𝑥_2−𝑦_2 )^2+…+(𝑥_𝑛−𝑦_𝑛 )^2}$$
####  1.1.3. <a name='Angle'></a>Angle
* Definition:
Let the angle between the two vectors be 𝜃 (0≤𝜃≤𝜋), then $𝐱^𝑇 𝐲$=‖𝐱‖‖𝐲‖  cos⁡𝜃, i.e. if 𝐮=𝐱/‖𝐱‖ ,𝐯=𝐲/‖𝐲‖ 
* $$cos⁡\theta=(𝐱^𝑇 𝐲)/‖𝐱‖‖𝐲‖ =𝐮^𝑇 𝐯$$
##### orthogonal
* Definition:
If $𝐱^𝑇 𝐲$=0, then we say that 𝐱 and 𝐲 are orthogonal, and denote 𝐱⊥𝐲. 
####  1.1.4. <a name='Projection'></a>Projection
##### Projecting vector onto a line
* scalar projection: 𝛼=$(𝐱^𝑇 𝐲)/$‖𝐲‖.
* vector projection: 𝐩=𝛼 𝐲/‖𝐲‖ =$((𝐱^𝑇 𝐲)/(𝐲^𝑇 𝐲)) 𝐲$.
If 𝐮 is a unit vector, then 
* The scalar projection of 𝐱 onto 𝐮 is 
$$\alpha=𝐱^𝐓 𝐮.$$ 
* The vector projection of 𝐱 onto 𝐮 is 
$$𝐩=\alpha𝐮=(𝐱^𝐓 𝐮)  𝐮.$$
##### Projection Matrix: $$P=A(A^TA)^-A^T$$
###  1.2. <a name='OrthogonalSubspaces'></a>Ⅱ Orthogonal Subspaces
####  1.2.1. <a name='OrthogonalSubspaces-1'></a>Orthogonal Subspaces 
* Definition:
Two subspaces 𝑋 and 𝑌 of $ℝ^𝑛$ are said to be orthogonal if $𝐱^𝑇 𝐲=0$ for every 𝐱∈𝑋 and every 𝐲∈𝑌.
If 𝑋 and 𝑌 are orthogonal, we write 𝑋⊥𝑌.
Note: 𝑋 and 𝑌 are subspaces of the same vector space $ℝ^𝑛$.
* In $ℝ^2, 𝑆𝑝𝑎𝑛(𝒆_1 )⊥𝑆𝑝𝑎𝑛(𝒆_2 )$.
* In $ℝ^3$, $$𝑆𝑝𝑎𝑛(𝒆_1 )⊥𝑆𝑝𝑎𝑛(𝒆_2 )$$ $$𝑆𝑝𝑎𝑛(𝒆_1,𝒆_2 )⊥𝑆𝑝𝑎𝑛(𝒆_3 )$$
####  1.2.2. <a name='OrthogonalComplement'></a>Orthogonal Complement
* Definition:
For a subspace 𝑌 of ℝ^𝑛, the set of vectors in $ℝ^𝑛$ that are orthogonal to every vector in 𝑌 will be denoted $𝑌^⊥$. Thus, $𝑌^⊥$={$𝐱∈ℝ^𝑛 |𝐱^𝑇 𝐲=0$  for every  $ 𝐲∈𝑌$} 
* The set $𝑌^⊥$ is called the orthogonal complement of 𝑌
* $𝑌^⊥$ is the “biggest” subspace orthogonal to 𝑌.
####  1.2.3. <a name='Theorem3.2.1'></a>Theorem 3.2.1
If 𝑋 and 𝑌 are orthogonal subspaces of $ℝ^𝑛$, then 𝑋∩𝑌={𝟎}
####  1.2.4. <a name='Theorem3.2.2'></a>Theorem 3.2.2
If 𝑌 is a subspace of $ℝ^𝑛$, then $𝑌^⊥$ is also a subspace of $ℝ^𝑛$.
####  1.2.5. <a name='Fundamentalsubspaces'></a>Fundamental subspaces
* Let 𝐴 be an 𝑚×𝑛 matrix. 
  * As a linear transformation, $𝐴: ℝ^𝑛→ℝ^𝑚$. ==(m*n)==
  𝑁(𝐴) is a subspace of $ℝ^𝑛$ (where $𝐴𝐱=𝟎$).
  The range of 𝐴 = the column space of 𝐴 (subspace of $ℝ^𝑚$):
  𝑅(𝐴)={$𝐛∈ℝ^𝑚$ |𝐛 = 𝐴𝐱 for some  $𝐱∈ℝ^𝑛$ } $$R(A)\in R^m$$
  ***
  * As a linear transformation, $𝐴^𝑇:ℝ^𝑚→ℝ^𝑛$. ==(n*m)==
  𝑁($𝐴^𝑇$) is a subspace of $ℝ^𝑚$ (where $𝐴^𝑇 𝐱=𝟎$).
  The column space of $𝐴^𝑇$, $𝑅(𝐴^𝑇)$ is a subspace of ==$ℝ^𝑛$== 
   $𝑅(𝐴^𝑇)$={$𝐲∈ℝ^𝑛 $|$𝐲 =𝐴^𝑇 𝐱$ for some  $𝐱∈ℝ^𝑚$ } $𝑅(𝐴^𝑇)\in R^n$
  ***
The column space of $𝐴^𝑇$ is basically the row space of 𝐴, except row vectors “stands up” and become column vectors in $ℝ^𝑛$. 
Thus, $𝐲∈𝑅(𝐴^𝑇 )$  if and only if $𝐲^𝑇$ is in the row space of 𝐴.
* $ℝ^𝑚: 𝑁(𝐴^⊥), 𝑅(𝐴)$
* $ℝ^𝑛: 𝑁(𝐴), 𝑅(𝐴^𝑇)$ 
***
####  1.2.6. <a name='Theorem3.2.3'></a>Theorem 3.2.3
If 𝐴 is an 𝑚×𝑛 matrix, then 
* $𝑁(𝐴)=𝑅(𝐴^𝑇)^⊥$
* $𝑁(𝐴^𝑇)=𝑅(𝐴)^⊥$
$𝑎_1 𝑥_1+𝑎_2 𝑥_2+…=0⇔
  \left[
  \begin{matrix}
   a_1 \\
   a_2 \\
   \vdots
  \end{matrix}
  \right]
⊥
\left[
  \begin{matrix}
   x_1 \\
   x_2 \\
   \vdots
  \end{matrix}
  \right]$  ^[ $A^T⊥X^T$ ]
####  1.2.7. <a name='Theorem3.2.4'></a>Theorem 3.2.4
If 𝑆 is a subspace of $ℝ^𝑛$, then dim $𝑆$+ dim $𝑆^⊥$=𝑛. 
Furthermore, if {$𝐱_1,𝐱_2,…,𝐱_𝑟$} is a basis for 𝑆 and {$𝐱_{𝑟+1}, …,𝐱_𝑛$} is a basis for $𝑆^⊥$, then {$𝐱_1,𝐱_2,…,𝐱_𝑟,𝐱_{𝑟+1}, …,𝐱_𝑛$} is a basis for $ℝ^𝑛$.
####  1.2.8. <a name='DirectSum'></a>Direct Sum
* Definition:
If 𝑈 and 𝑉 are subspaces of a vector space 𝑊 and each 𝐰∈𝑊 can be written uniquely as a sum 𝐮 + 𝐯, where 𝐮∈𝑈 and 𝐯∈𝑉, then we say that 𝑊 is a direct sum of 𝑈 and 𝑉, and we write $$𝑊=𝑈⊕𝑉$$
####  1.2.9. <a name='DirectSumTheorem3.2.5'></a>Direct Sum Theorem 3.2.5
If 𝑆 is a subspace of $ℝ^𝑛$, then $ℝ^𝑛=𝑆⊕ 𝑆^⊥$.
####  1.2.10. <a name='Theorem3.2.6'></a>Theorem 3.2.6
If 𝑆 is a subspace of $ℝ^𝑛$, then $(𝑆^⊥)^⊥=𝑆$.
***
For a subspace 𝑆 in $ℝ^𝑛$:
* $$𝑆∩𝑆^⊥={𝟎}$$
* $$dim(⁡𝑆)+dim⁡(𝑆^⊥)=𝑛$$
* $$ℝ^𝑛=𝑆⊕𝑆^⊥$$
* $$(𝑆^⊥)^⊥=𝑆$$
For a 𝑚×𝑛 matrix 𝐴:
* Subspaces of $ℝ^𝑛: 𝑁(𝐴), 𝑅(𝐴^𝑇)$. ^[ $$A^T→𝑅(𝐴^𝑇)$$$$X^T→N(A)$$ ] 
* $$𝑁(𝐴)=𝑅(𝐴^𝑇)^⊥$$$$ ℝ^𝑛=𝑁(𝐴)⊕𝑅(𝐴^𝑇)$$
* Subspaces of $ℝ^𝑚: 𝑅(𝐴), 𝑁(𝐴^𝑇)$. ^[ $$A→𝑅(𝐴)$$$$X→N(A^T)$$ ]
* $$𝑁(𝐴^𝑇 )=𝑅(𝐴)^⊥$$$$ ℝ^𝑚=𝑅(𝐴)⊕𝑁(𝐴^𝑇)$$
###  1.3. <a name='LeastSquaresProblems'></a>Ⅲ Least Squares Problems
####  1.3.1. <a name='Lineofbestfit'></a>Line of best fit
* $𝑦=𝑐_0+𝑐_1 𝑥$
$$\left[ \begin{matrix}
   1 & x \\ 1 & y \\ 1 & z
  \end{matrix}\right] 
  \left[\begin{matrix}
   c_0 \\ c_1 \\
  \end{matrix}\right]
=\left[\begin{matrix}
   b_0 \\ b_1 \\ b_2 
  \end{matrix}\right]$$ 
***
####  1.3.2. <a name='LeastSquareSolutions'></a>Least Square Solutions
* For an 𝑚×𝑛 matrix 𝐴, if the linear system 𝐴𝐱=𝐛 does not have a solution $𝐱∈ℝ^𝑛$, we still want a vector $\hat{𝐱} \in ℝ^𝑛 $  such that $𝐴\hat𝐱$ is closest to b.
* If 𝑟(𝐱)=𝐛−𝐴𝐱, we seek to minimize ‖𝑟(𝐱)‖,  which is the same as minimizing ‖𝑟(𝐱)‖$^2$
* A vector $𝐱 \in ℝ^𝑛$ that minimizes ‖𝑟(𝐱)‖$^2$=‖𝐛−𝐴𝐱‖$^2$ is called a least squares solution of $𝐴𝐱=𝐛$. 
* $𝐩=𝐴\hat𝐱$ is the vector in 𝑆=𝑅(𝐴), the column space of 𝐴, that is closest to 𝐛.
***
* $𝐛−𝐩=𝐛−𝐴\hat𝐱 =𝐫(\hat𝐱) ∈𝑅(𝐴)^⊥$
$$𝑅(𝐴)^⊥=𝑁(𝐴^𝑇)$$
* Therefore, $𝐛−𝐴\hat𝐱 ∈𝑁(𝐴^𝑇)$
$⇒𝐴^𝑇 (𝐛−𝐴\hat{x})=𝐴^𝑇 𝐛−𝐴^𝑇 𝐴\hat{x}=𝟎$
***
Summary
* To solve the least squares problem $$𝐴𝐱=𝐛$$
* We need to solve $$𝐴^𝑇 𝐴𝐱=𝐴^𝑇 𝐛$$
* Least squares solution 𝐱 minimizes ‖𝑟(𝐱)‖$^2$=‖𝐛−𝐴𝐱‖$^2$ and 𝐛−𝐴𝐱 is orthogonal to 𝑅(𝐴).
***
####  1.3.3. <a name='Theorem3.3.1'></a>Theorem 3.3.1
If 𝐴 is an 𝑚×𝑛 matrix of rank 𝑛, the normal equation $$𝐴^𝑇 𝐴𝐱=𝐴^𝑇 𝐛$$
have a unique solution $$\hat𝐱=(𝐴^𝑇 𝐴)^{−1} 𝐴^𝑇 𝐛$$
$\hat𝐱$ is the unique least squares solution of $𝐴𝐱=𝐛$.
####  1.3.4. <a name='Projectionformula'></a>Projection formula
If 𝐴 is an 𝑚×𝑛 matrix of rank 𝑛 (i.e. columns are independent),
* The unique least squares solution of 𝐴𝐱=𝐛 is $$\hat𝐱 =(𝐴^𝑇 𝐴)^{−1} 𝐴^𝑇 𝐛$$ 
* The projection of 𝐛 onto 𝑅(𝐴) is $$𝐩=𝐴\hat𝐱 =𝐴(𝐴^𝑇 𝐴)^{−1}  𝐴^𝑇 𝐛$$
* Projection is a linear operator, with projection matrix $$𝑃=𝐴(𝐴^𝑇 𝐴)^{−1} 𝐴^𝑇$$
###  1.4. <a name='OrthonormalSets'></a>Ⅴ Orthonormal Sets
####  1.4.1. <a name='NoteonInnerProductSpaces'></a>Note on Inner Product Spaces
For ANY vector space 𝑉, there is an abstract definition of inner product ⟨𝐱,𝐲⟩: it must satisfy
  * ⟨𝐱,𝐱⟩≥0, with equality if and only if 𝐱=𝟎
  * ⟨𝐱,𝐲⟩=⟨𝐲,𝐱⟩
  * ⟨𝛼𝐱+𝛽𝐲,𝐳⟩=𝛼⟨𝐱,𝐳⟩+𝛽⟨𝐲,𝐳⟩
***
* ⟨𝐱,𝐲⟩ in $ℝ^𝑛$, it means the scalar product $𝐱^𝑇 𝐲$.
####  1.4.2. <a name='OrthogonalSet'></a>Orthogonal Set
* Definition:
A set {$𝐯_1,𝐯_2, …,𝐯_𝑘$} of nonzero vectors is said to be an orthogonal set if ⟨$𝐯_𝑖,𝐯_𝑗$⟩=0 whenever 𝑖≠𝑗.
####  1.4.3. <a name='OrthonormalSet'></a>Orthonormal Set
* Definition:
An orthonormal set of vectors is an orthogonal set of unit vectors.
You can turn an orthogonal set into an orthonormal set by scaling each vector to have unit length: $𝐮_𝑖=𝐯_𝑖/(‖𝐯_𝑖 ‖)$
####  1.4.4. <a name='TheoremNonzeroorthogonalsetislinearlyindependent3.5.1'></a>Theorem [Nonzero orthogonal set is linearly independent] 3.5.1
If {$𝐯_1,𝐯_2, …,𝐯_𝑘$} is an orthogonal set of nonzero vectors, then $𝐯_1,𝐯_2, …,𝐯_𝑘$ is linearly independent. ^[If $𝑎_1 𝐯_1+𝑎_2 𝐯_2+…+𝑎_𝑘 𝐯_𝑘$=𝟎, need to show $𝑎_1=𝑎_2=…=0$.
Taking the inner product of 𝐯_1 on both sides:
$⟨𝐯_1,𝑎_1 𝐯_1+𝑎_2 𝐯_2+…+𝑎_𝑘 𝐯_𝑘 ⟩=𝑎_1 ⟨𝐯_1, 𝐯_1 ⟩+𝑎_2 ⟨𝐯_1, 𝐯_2 ⟩+…+𝑎_𝑘 ⟨𝐯_1, 𝐯_𝑘 ⟩
=𝑎_1 ⟨𝐯_1, 𝐯_1 ⟩=0$
but since $𝐯_1≠𝟎$, ⟨$𝐯_1, 𝐯_1$⟩=‖$𝐯_1$‖$^2$>0, so $𝑎_1=0$.] 
####  1.4.5. <a name='OrthonormalBasis'></a>Orthonormal Basis
If 𝐵={$𝐮_1,𝐮_2, …,𝐮_𝑘$} is an orthonormal set, then by the theorem above, 𝐵 is a basis for the subspace 𝑆=Span($𝐮_1,𝐮_2, …,𝐮_𝑘$)=𝑅(𝑈).
We say that 𝐵 is an orthonormal basis for 𝑆.
##### Orthonormal Basis and Coordinates
###### Theorem 3.5.2
Let {$𝐮_1,𝐮_2, …,𝐮_𝑛$} be an orthonormal basis for 𝑉. If $𝐱=𝑐_1 𝐮_1+…+𝑐_𝑛 𝐮_𝑛$, then $𝑐_𝑖= ⟨𝐱,𝐮_𝑖⟩$.
In other words, for any 𝐱∈𝑉 $$𝐱=⟨𝐱,𝐮_1 ⟩ 𝐮_1+…+⟨𝐱,𝐮_𝑛 ⟩ 𝐮_𝑛$$
$$𝐱= 𝑎_1 𝐮_1+𝑎_2 𝐮_2+…+𝑎_𝑛 𝐮_𝑛$$$$𝐲= 𝑏_1 𝐮_1+𝑏_2 𝐮_2+…+𝑏_𝑛 𝐮_𝑛$$ 
then 
^[Proof: $⟨𝐱,𝐮_𝑖 ⟩ =𝑎_𝑖 ⇒⟨𝐱,𝐲⟩=⟨𝐱,Σ𝑏_𝑖 𝐮_𝑖 ⟩=Σ𝑏_𝑖 ⟨𝐱,𝐮_𝑖 ⟩=Σ𝑎_𝑖 𝑏_𝑖.$]
              $$⟨𝐱,𝐲⟩=Σ_{i=1}^𝑛 𝑎_𝑖 𝑏_𝑖.$$  
In other word, $⟨𝐱,𝐲⟩=[𝐱]_𝐵^𝑇 [𝐲]_𝐵$
* Parseval’s formula
If $𝐱= 𝑎_1 𝐮_1+𝑎_2 𝐮_2+…+𝑎_𝑛 𝐮_𝑛$, then ‖𝐱‖$^2=Σ_{𝑖=1}^𝑛 𝑎_𝑖^2.$
in other word, ‖​𝐱‖$^2=[𝐱]_𝐵^𝑇 [𝐱]_𝐵$
##### Orthonormal Sets and Projection
* The unique least squares solution of 𝐴𝐱=𝐛 is $$\hat𝐱 =(𝐴^𝑇 𝐴)^{−1} 𝐴^𝑇 𝐛$$ 
* The projection of 𝐛 onto 𝑅(𝐴) is $$𝐩=𝐴\hat𝐱 =𝐴(𝐴^𝑇 𝐴)^{−1}  𝐴^𝑇 𝐛$$
* Projection is a linear operator, with projection matrix $$𝑃=𝐴(𝐴^𝑇 𝐴)^{−1} 𝐴^𝑇$$
###### Theorem 3.5.3
If the column vectors of 𝑚×𝑛 matrix 𝐴 form an orthonormal set of vectors in $ℝ^𝑚$, then the projection of $𝐛∈ℝ^𝑚$ onto 𝑆=𝑅(𝐴) is $$𝐩=𝐴\hat𝐱 =𝐴𝐴^𝑇𝐛$$
projection matrix: $$𝑃=𝑈𝑈^𝑇$$
###### Theorem [Projection formula] 3.5.4
If {$𝐮_1,𝐮_2, …,𝐮_𝑘$} is an orthonormal basis for a nonzero subspace 𝑆 of $ℝ^𝑚$, then the projection of $𝐛∈ℝ^𝑚$ onto 𝑆 is         
$$𝐩=(𝐛^𝑇 𝐮_1 ) 𝐮_1+…+(𝐛^𝑇 𝐮_𝑘 ) 𝐮_𝑘$$

***
####  1.4.6. <a name='Orthogonalmatrix'></a>Orthogonal matrix
* Definition:
An 𝑛×𝑛 matrix 𝑄 is called an orthogonal matrix if the columns of 𝑄 form an orthonormal basis in $ℝ^𝑛$.
####  1.4.7. <a name='Theorem3.5.5'></a>Theorem 3.5.5
An 𝑛×𝑛 matrix 𝑄 is an orthogonal matrix if and only if
$$𝑄^𝑇 𝑄=𝐼_𝑛$$
* Properties
Let 𝑄 be an 𝑛×𝑛 matrix. The following are equivalent: 
  * 𝑄 is an orthogonal matrix.
  * The columns of 𝑄 form an orthonormal basis for $ℝ^𝑛$.
  * ==$𝑄^𝑇 𝑄=𝐼$, that is, $𝑄^𝑇=𝑄^{−1}$==.
  * $(𝑄𝐱)^𝑇 (𝑄𝐲)=𝐱^𝑇 𝑄^𝑇 𝑄𝐲=𝐱^𝑇 𝐲$ for all $𝐱,𝐲∈ℝ^𝑛$.
  * ‖𝑄𝐱‖=‖𝐱‖ for all $𝐱∈ℝ^𝑛$.
##### Orthonormal Sets and Least Squares
* Least Square
  $$𝐴^𝑇 𝐴\hat𝐱 =𝐴^𝑇 𝐛⇒\hat𝐱 =(𝐴^𝑇 𝐴)^{−1} 𝐴^𝑇 𝐛$$
###### Theorem 3.5.4
If the column vectors of 𝑚×𝑛 matrix 𝐴 form an orthonormal set of vectors in $ℝ^𝑚$, then $𝐴^𝑇 𝐴=𝐼_𝑛$ and the solution to the least squares problem 𝐴𝐱=𝐛 is $$\hat𝐱 =𝐴^𝑇 𝐛$$
###  1.5. <a name='Summary'></a>Summary
* Orthogonal set: $⟨𝐯_𝑖,𝐯_𝑗 ⟩=0$ when 𝑖≠𝑗
* Vectors in an orthogonal set are linearly independent
* Orthonormal set/basis: $⟨𝐮_𝑖,𝐮_𝑗 ⟩$=𝛿$_{𝑖𝑗}$
* Orthogonal matrix: $𝑈^𝑇 𝑈=𝐼, 𝑈^(−1)=𝑈^𝑇$
* If {$𝐮_1,𝐮_2, …,𝐮_𝑛$} is an orthonormal basis for 𝑉: 
  * $𝐱=⟨𝐱,𝐮_1 ⟩ 𝐮_1+…+⟨𝐱,𝐮_𝑛 ⟩ 𝐮_𝑛 $
  * $⟨𝐱,𝐲⟩=Σ_𝑖 𝑎_𝑖 𝑏_𝑖$, ‖𝐱‖$^2=Σ_𝑖 𝑎_𝑖^2$
* If {$𝐮_1,𝐮_2, …,𝐮_𝑘$} is an orthonormal basis for a subspace 𝑆=𝑅(𝑈):
* Least squares solution to 𝑈𝐱=𝐛 is $\hat𝐱 =𝑈^𝑇 𝐛$
* Projection of 𝐛 onto 𝑆 is $𝐩=𝑈𝑈^𝑇 𝐛=Σ_𝑖 (𝐛^𝑇 𝐮_𝑖 ) 𝐮_𝑖$
