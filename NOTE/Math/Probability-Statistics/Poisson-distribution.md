# Possion-distribution

## Introduction

- 从二项分布到泊松分布
- Binomial distribution
  - $Bin(p,n) = P(X = k) ={(^n_k)p^k(1-p)^{n-k}}$
- Poisson distribution
  - $Poi(x,\lambda) = e^{-\lambda}\frac{\lambda^k}{k!}$

Intuitively, the Binomial distribution and the Poisson distribution seem to be unrelated. But a closer look reveals a very interesting relationship. The Poisson distribution is just a special case of the binomial distribution—that is, the number of trials is large enough that the given probability of success p is small. When n tends to infinity and p approaches zero, the binomial distribution approaches the Poisson distribution.

## 推导

- For binomial distribution
- $Bin(p,n) = P(X = k) ={(^n_k)p^k(1-p)^{n-k}}$
  $E(x): \lambda = np$
$\Rightarrow$ $p=\frac{\lambda}{n}$   $（When： n \rightarrow \infty）$
