# Assignment7

## Question1

* Determine whether the following relation R is reflexive, symmetric, antisymmetric, or transitive if (remember to prove your answer)

  * a)$R=\emptyset\times\emptyset$;

    The following relation R is reflexive, symmetric, anti-symmetric, and transitive
    R is reflexive: False, since there are no ordered pairs in R.
    R is symmetric: True, vacuously. There are no ordered pairs in R to violate symmetry.
    R is antisymmetric: True, vacuously. There are no ordered pairs in R to violate antisymmetry.
    R is transitive: True, vacuously. There are no ordered pairs in R to violate transitivity.
   $\therefore R= (\emptyset, \emptyset)$ $\therefore R$ is reflexive, symmetric, antisymmetric, and transitive.

  * b)$R={(x,y)|x+y\geq0}$ is on $ \mathbb{Z}$;
  
    The following relation R is symmetric.

    $Suppose$ $(x,x)\in R$ x may not larger than -x
    $\therefore$ $R$ is not reflexive.
    $Suppose$ $(x,y)\in R$ if $x$ larger than $-y$    then y must larger than -x
    $\therefore$ $R$ is symmetric.
    $\therefore$ $R$ is not antisymmetric.
    $Suppose$ $(x,y),(y,z)\in R$   $\therefore x\geq -y$  $z\geq-y$
      $\therefore $ $x$ may not larger than $z$  
      $\therefore $ $(x,z)$ may not in R
      $\therefore $ $R$ is not transitive.
  
  * c)$R={(x,y)|\left\lfloor x\right\rfloor=\left\lfloor y\right\rfloor}$ is on  $ \mathbb{Q}$;

    The following relation R is reflexive, symmetric and transitive

    $Suppose$ $n,n+1\in \mathbb{Q}$
    then $n\leq x \leq n+1$ and  $n\leq y \leq n+1$
    $Suppose$ $(x,x)\in R$ then there must have $\left\lfloor x\right\rfloor=\left\lfloor x\right\rfloor$
    $\therefore$ R is reflexive.
    $Suppose$ $(x,y)\in R$ then there must have $\left\lfloor y\right\rfloor=\left\lfloor x\right\rfloor$
    $\therefore$ R is Symmetric. $\therefore$ R can't be  antisymmetric.
    $Suppose$ $(x,y),(y,z)\in R$ then there must have $\left\lfloor x\right\rfloor=\left\lfloor y\right\rfloor =\left\lfloor z\right\rfloor$
    $\therefore$ R is transitive.
  
  * d)$R=\{((x,y),(w,z))|(x+y)^2=(w+z)^2\}$ is on $R \times R$

     The following relation R is reflexive, symmetric and transitive

     $Suppose$ x=w and y=z then $(x+y)^2=(w+z)^2$
     $\therefore$ R is reflexive
     And $\because$ $(x+y)^2=(w+z)^2=(x+y)^2$
         $\therefore$ R is symmetric and transitive but not antisymmetric.

  * e)$R=\{(A,B)|A\cap B\ne\emptyset\}$

    The following relation R is reflexive and symmetric

    $\because A\cap A =A$  $\therefore$ A is reflexive
    $\because A\cap B =B\cap A=\emptyset$ $\therefore$ A is symmetric  but not antisymmetric.
    $Suppose $   $ A\cap B \ne \emptyset$ $B\cap C \ne \emptyset$
    $But$ $ A\cap C $ may  equal to $\emptyset$    $\therefore$ A is not transitive.

## Question2

* Let $R_1, R_2$ be two arbitrary relations on an arbitrary set A. Prove or disprove

  a) if $R_1$ and $R_2$ are reflexive, then $R_1\cap R_2$ is reflexive.
      $\because$ $R_1,R_2$ are reflexive.  
           A relation 𝑅 on a set 𝐴 is called reflexive if (𝑎, 𝑎) ∈ 𝑅 for every element 𝑎 ∈ 𝐴.
   $\therefore$  $R_1$  contains $(\alpha,\alpha)$ for every element $\alpha \in A$
          $R_2$  contains $(\alpha,\alpha)$ for every element $\alpha \in A$  
       $\therefore$ $R_1\cap R_2$ at least contains $(\alpha,\alpha)$ for every element $\alpha \in A$  
        $\therefore R_1\cap R_2$ is reflexive.

   b) if $R_1$ and $R_2$ are symmetric, then $R_1\cap R_2$ is symmetric.
       $\because$ $R_1,R_2$ are symmetric.  
           A relation 𝑅 on a set 𝐴 is called symmetric if (𝑏, 𝑎) ∈ 𝑅 whenever (𝑎, 𝑏) ∈ 𝑅.
        $\therefore$ Suppose $R_1\cap R_2$ = $(\alpha,\beta)$  $\alpha,\beta\in A$  then there must also has $(\beta,\alpha)$ .
           Otherwise, $R_1$ or $R_2$ only has $(\alpha,\beta)$ it can't be symmetric respectively.
       $\therefore R_1\cap R_2$ is symmetric.

  c) if $R_1$ and $R_2$ are antisymmetric, then $R_1\cap R_2$ is antisymmetric.
       $\because$ $R_1,R_2$ are antisymmetric.
          A relation 𝑅 on a set 𝐴 is called anti-symmetric if whenever (𝑎, 𝑏) ∈ 𝑅 and (𝑏, 𝑎) ∈ 𝑅, then 𝑎 = 𝑏
     $\therefore$ Suppose $R_1\cap R_2$ = $(\alpha,\beta)$  $\alpha,\beta\in A$  then there can not has $(\beta,\alpha)$ .
         Otherwise, $R_1$ and  $R_2$  both  have $(\alpha,\beta)$ and $(\beta,\alpha)$it can't be antisymmetric respectively.
     $\therefore R_1\cap R_2$ is antisymmetric.

 d) if $R_1$ and $R_2$ are transitive, then $R_1\cap R_2$ is transitive
   $\because$ $R_1,R_2$ are transitive.
       A relation 𝑅 on a set 𝐴 is called transitive if whenever  (𝑎, 𝑏) ∈ 𝑅 and (𝑏, 𝑐) ∈ 𝑅, then (𝑎, 𝑐) ∈ 𝑅.
   $Suppose$ : $R_1=(a,b),(b,c),(a,c),(c,a),(a,a)$
              $R_2=(a,b),(b,e),(a,e),(e,a),(a,a)$  $a,b,c,d,e\in A$
 $\therefore$ $R_1\cap R_2$ = $(a,b),(a,a)$ Obviously, it can't be transitive.
 $\therefore R_1\cap R_2$ is not transitive.

## Question3

* Determine whether the following relations are equivalence relation. You need to prove your answer. If yes, list all distinct equivalent classes (each subset of the partition defined by the equivalence relation).
  * a)$R=\left\{\left(x,y\right)\middle| x\ mod\ 5=y\right\}$ on $\mathbb{Z}$;
  
  if   (x mod 5=x） $\therefore$ R is reflexive
  if   (x mod 5=y)  y mod 5 may not be x
  $\therefore R$ is not symmetric $\therefore R$ is not equivalence relation
  
  * b)$R=${(x,y)| x and y are two UIC students and from the same faculty/school.} on the set of all UIC students;

   For reflexive, the same student must be in the same faculty/school as himself/herself, so R satisfies reflexivity

   For symmetric, if student a and student b are from the same faculty/school, then student b and student a are from the same faculty/school, then (a, b) ∈ R, (b, a) ∈ R, so R satisfies symmetric.

   For transitive, if (a, b) ∈ R, (b, c) ∈ R, then will have (a, c) ∈ R, so R satisfies transitive.  

   ∴ this relation is equivalence relation.

  * c)$R=${$(A,B)$| there is a bijection $f:A\rightarrow B$} on $P(\mathbb{N}). (P(\mathbb{N})$ is the powerset of $\mathbb{N}$. So, A and B are subsets of $\mathbb{N})$.

   For reflexive, let A = B, that will have a bijection $f$: A → B, so R satisfies reflexivity
   For symmetric, if $f$: A → B is a bijection, then $f$: B → A is a bijection, it means that if
   (A, B) ∈ R, that will also have (B, A) ∈ R, so R satisfies symmetric
   For transitive, if $f$: A → B is a bijection, $g$: B → C is a bijection, then it will always have
   ℎ: A → C is a bijection, so R satisfies transitive.
   ∴ this relation is equivalence relation. equivalent classes are all $A \in P(ℕ)$ that can have bijection relation to every $B \in P(ℕ)$
