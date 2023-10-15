# Assignment3

## Question1

a)&emsp;$(\left(r\rightarrow\lnot q\right)\rightarrow t)\wedge(\lnot p\vee\lnot r)\wedge (\lnot t) \rightarrow \neg p$
&emsp;&emsp;$\equiv \neg(r\rightarrow\neg q) \wedge (\neg p \vee\neg r) \rightarrow \neg p$   **Modus tollen**
&emsp;&emsp;$\equiv (r \wedge q) \wedge (\neg p\vee \neg r)\rightarrow \neg p$  **De Morgan’s laws**
&emsp;&emsp;$\equiv ((r \wedge  q \wedge \neg p) \vee ( r \wedge q \wedge \neg r)) \rightarrow \neg p$ **Distributive laws**
&emsp;&emsp;$\equiv (r \wedge q \wedge \neg p) \rightarrow \neg p $ **Identity Laws**
&emsp;&emsp;$\equiv \neg(r \wedge q \wedge \neg p) \vee\neg p$ 
&emsp;&emsp;$\equiv (\neg r \vee \neg q \vee p) \vee \neg p $&emsp;**De Morgan’s laws**
&emsp;&emsp;$\equiv (\neg r \vee \neg q \vee T) \equiv T$ **Domination Laws**
b)&emsp;$(r\rightarrow\lnot t) \wedge (p\rightarrow t)\wedge r \rightarrow \neg p$
&emsp;&emsp;$\equiv (\neg t) \wedge (p \rightarrow t) \rightarrow \neg p$ &emsp;**Modus ponens**
&emsp;&emsp;$\equiv \neg p \rightarrow \neg p \equiv T$ &emsp;**Modus tollen**
c)&emsp;$\exists x\left(P\left(x\right)\rightarrow Q\left(x\right)\right)$
&emsp;&emsp;$\equiv \exists x(\neg P(x) \vee Q(x))$
&emsp;&emsp;$\equiv \exists x (\neg (P(x)\wedge \neg Q(x)))$**De Morgan’s laws**
&emsp;&emsp;$\equiv \neg \forall x  (P(x)\wedge \neg Q(x))$
&emsp;&emsp;$\forall y\left(P\left(y\right)\land R\left(y\right)\right) $
$\forall x\left(P\left(x\right)\right) \rightarrow \forall x\left(Q\left(x\right)\right)$
&emsp;$\therefore \forall y(\neg Q(y) \wedge R(y))$
&emsp;$\therefore \forall u\left(R\left(u\right)\vee Q\left(u\right)\right)$

## Question2

Step2 is wrong: Step 2 should be Existential instantiation using(1)
Step6 is wrong: Step 6 can't be Universal generalization

## Question3

$p\rightarrow q \equiv \neg p \vee q \equiv q\vee \neg p \equiv \neg  q\rightarrow \neg p$

## Question4

&emsp;&emsp;&emsp; P: a is a multiple of 4
&emsp;&emsp;&emsp; Q: 3a+1 is odd
a)Direct proof:
&emsp;&emsp;$proof$:&emsp;$P\Rightarrow Q$
&emsp;&emsp;&emsp;&emsp;&emsp;$\because$ a is a mutiple of 4
&emsp;&emsp;&emsp;&emsp;&emsp;$\therefore$ Suppose: a=4n
&emsp;&emsp;&emsp;&emsp;&emsp;$\therefore$  $3a+1=12n+1$
&emsp;&emsp;&emsp;&emsp;&emsp;$\therefore$ $3a+1$ is an odd
b)Contradiction:
&emsp;&emsp;$proof$:&emsp;$\neg Q \wedge P \Rightarrow False$
&emsp;&emsp;&emsp;&emsp;&emsp; $\because 3a+1$ is even ($\neg Q$)
&emsp;&emsp;&emsp;&emsp;&emsp;$Suppose: 3a+1=2n$
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$a=4n$
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$\therefore 12k+1=2n$
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$\because 12k+1$ is odd ($Q$)
&emsp;&emsp;&emsp;&emsp;&emsp;$\therefore Q \vee \neg Q \Rightarrow False$
c)Contraposition:
&emsp;&emsp;$proof$:&emsp;$\neg Q \Rightarrow \neg P$
&emsp;&emsp;&emsp;&emsp;&emsp; $Suppose: 3a+1=2n$ ($\neg Q$)
&emsp;&emsp;&emsp;&emsp;&emsp; $\therefore a=$${2n-1}\over3$
&emsp;&emsp;&emsp;&emsp;&emsp; It's clear that $ a$ can't be divided by 4 ($\neg P$)
&emsp;&emsp;&emsp;&emsp;$\therefore \neg Q \Rightarrow \neg P$

## Question5

&emsp;&emsp; If $a$ is even then $a^2$ is even then the proof is done.
&emsp;&emsp; If $a$ is odd then  $a^3$ is an odd then $a^3+1$ is an even number

## Question6

&emsp;&emsp;&emsp;&emsp;$a_0=1$
&emsp;&emsp;&emsp;&emsp;$a_1=2$
&emsp;&emsp;&emsp;&emsp;$a_n=a_{n-1}+a_{n-2}$ for n $\geq 2$
$Proof:  a_n\le2^n $
Basis step: P(0):     $a_0 = 1\leq 2^0$
Basis step: P(1):     $a_1=2\leq 2^1$
Induction Hypothesis: Assume P(k-1) is true

$a_{k-1}\leq 2^{k-1}$ &emsp;&emsp;$a_{k-2 }\leq 2^{k-2}$
Inductive Step: $a_{k} = a_{k-2}+a_{k-1}$
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; $\therefore a_{k} = a_{k-2}+a_{k-1}\leq (2^{k-2}+2^{k-1})$
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; $\because 2^{k}=2 \times 2^{k-1} > 2^{k-2}+ 2^{k-1}$
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; $\therefore a_{k} = a_{k-2}+a_{k-1}\leq (2^{k-2}+2^{k-1}) < 2^{k}$

## Question7

&emsp;&emsp;&emsp;&emsp; $a_n=2^n$
$proof:$&emsp;$a_n=a_{n-1}+a_{n-2}+\cdots+a_0+1$
Basis step: P(0):&emsp; $a_0=1$$a_1=2=a_0+1$
Induction Hypothesis:  Assume P(k) is true $a_k=a_{k-1}+a_{k-2}+\cdots+a_0+1$
Inductive Step: &emsp;$a_{k+1}=2^{k+1}=2^k+2^k=2a_k=a_k+a_{k-1}+a_{k-2}+\cdots+a_0+1$
