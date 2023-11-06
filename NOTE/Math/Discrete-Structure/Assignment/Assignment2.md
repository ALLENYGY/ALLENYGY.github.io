# Assignment 2

## Question 1

a)
|p|q|$\left(p\vee\neg q\right)$|$(q\vee\neg p)$|$\left(p\vee\neg q\right)\rightarrow(q\vee\neg p)$|
| ---------- | ---------- | ---------- | ---------- | ---------- |
|T|T|T|T|T|
|T|F|T|F|F|
|F|T|F|T|T|
|F|F|T|T|T|

$\left(p\vee\neg q\right)\rightarrow (q\vee\neg p)$
$\equiv \neg\left(p\vee\lnot q\right)\vee(q\vee\lnot p)$
$\equiv (\neg p \wedge q) \vee (q\vee\lnot p)$
$\equiv ((\neg p \wedge q) \vee q) \vee ((\neg p \wedge q) \neg p)$
$\equiv q \vee \neg p$
it's clear that $ q \vee \neg p$ is a contingency.

b)
| p | q  |  $p\leftrightarrow q$  | $p\rightarrow q$ | $(p\leftrightarrow q) \rightarrow(p\rightarrow q)$ |
| :--------: | :--------: | :--------: | :--------: | :--------: |
|T|T|T|T|T|
|T|F|F|F|T|
|F|T|F|T|T|
|F|F|T|T|T|

$(p\leftrightarrow q) \rightarrow(p\rightarrow q)$
$\equiv((p\wedge q)\vee (\neg p \wedge \neg q)) \rightarrow (\neg p \vee q)$
$\equiv \neg((p\wedge q)\vee (\neg p \wedge \neg q)) \vee (\neg p \vee q)$
$\equiv (\neg p\vee \neg q) \wedge (p \vee q) \vee (\neg p \vee q)$
$\equiv T \vee (\neg p \vee q) \equiv T$

c)
| p | q |$\lnot p\land q$|$q\rightarrow p$| $\left(\lnot p\land q\right)\land(q\rightarrow p)$|
| ---------- | ---------- | ---------- | ---------- | ---------- |
|T|T|F|T|F|
|T|F|F|T|F|
|F|T|T|F|F|
|F|F|F|T|F|

$\left(\lnot p\land q\right)\land(q\rightarrow p)$
$\equiv \left(\lnot p\land q\right)\land(\neg q \vee p)$
$\equiv ((\neg p \wedge q) \wedge \neg q) \vee((\neg p \wedge q)\wedge p)$
$\equiv F \vee F \equiv F$

## Question 2

a) $ \forall x (P(x) \rightarrow Q(x))$
b) $ \exists x ( \neg P(x) \wedge Q(x))$
c) $ \forall x U(x) (P(x) \rightarrow Q(x))$    $\forall x (U(x)\wedge P(x)\rightarrow Q(x))$
   $ \exists x U(x) ( \neg P(x) \wedge Q(x))$

## Question 3

a) False
Reason:  $\forall x,\forall y,\ P(x,y)$  any x less than any y
if $y in (x<y)$ then the predicates must be wrong
b) False
Reason: $\exists x,\ \forall y,\ P(x,y)$ exits x less than any y
however if $y = x-1$
y must be less than x, so the predicates must be wrong
c) True
Reason:$\forall x,\ \exists y,\ P(x,y)$ for any x ,there exits y larger than x.
d) True
Reason:$\exists x,\ \exists y,\ P(x,y)$ exits x,y for x<y
if y=x+1 y must larger than x
**e)** True  False
Reason:$\exists x,\ \forall y,\ P(y,x)$ exits x for any y less than x
if x=y+1 x must larger than x
**f)** True  False
Reason: $\forall x,\ \exists y,\ P(y,x)$ for any x  exits y so that y less than x
if y=x-1 y must be less than x

## Question 4

$ \exists x (P(x_1)\wedge P(x_2))(x_1 \ne x_2)$

$\exists x_1 \exists x_2 P(x_1)\wedge P(x_2)$

## Question 5

Prove: $\lnot\forall x\exists y\left(P\left(x\right)\rightarrow Q\left(y\right)\right)\equiv\exists x\forall y\left(P\left(x\right)\land\lnot Q\left(y\right)\right)$
$\lnot\forall x\exists y\left(P\left(x\right)\rightarrow Q\left(y\right)\right)$
$ \equiv \exists x \forall y \neg(P(x)\rightarrow Q(y))$
$\equiv \exists x \forall y \neg(\neg P(x) \vee Q(y))$
$\equiv \exists x \forall y (P(x) \wedge \neg Q(y))$
