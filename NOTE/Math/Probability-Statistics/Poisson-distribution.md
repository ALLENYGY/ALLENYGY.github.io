# Possion-distribution

## From Binomial distribution to Poisson distribution

- Binomial distribution
  - $Bin(p,n) = P(X = k) ={C^n_k\ p^k(1-p)^{n-k}}$
- Poisson distribution
  - $Poi(x,\lambda) = e^{-\lambda}\frac{\lambda^k}{k!}$

Intuitively, the Binomial distribution and the Poisson distribution seem to be unrelated. But a closer look reveals a very interesting relationship. The Poisson distribution is just a special case of the binomial distribution. When n tends to infinity and p approaches zero, the binomial distribution approaches the Poisson distribution.

## Derivation

Let me deduce this briefly

For binomial distribution

- $Bin(p,n) = P(X = k) ={(C^n_k)p^k(1-p)^{n-k}}$
  $E(x): \lambda = np \ \Rightarrow$ $p=\frac{\lambda}{n}$
  - $n$ represents the number of trails
  - $p$ represents the probability that a trial will succeed
  

Put the equation in the expression for the binomial distribution，we can get the following expression

$ C^k_n \ (\frac{\lambda}{n})^k \ (1-(\frac{\lambda}{n}))^{n-k} $

By expanding the combination number

$ \frac{n!}{k!(n-k)!} \ \frac{\lambda^k}{n^k} \ (1-(\frac{\lambda}{n}))^{n-k} $

There is an assumption in the Poisson distribution

For Poisson distribution  $n \rightarrow \infty$

$\therefore lim_{n \to \infty} \ \frac{n!}{k!(n-k)!} \ \frac{\lambda^k}{n^k} \ (1-(\frac{\lambda}{n}))^{n-k} $

We can expand the factorial， then cancel out the (n-k)factorial part 

$\therefore lim_{n \to \infty} \ \frac{n(n-1)(n-2)...(n-k+1)}{k!} \ \frac{\lambda^k}{n^k} \ (1-(\frac{\lambda}{n}))^{n-k} $

After that, we switch the positions of the denominators

$\therefore lim_{n \to \infty} \ \frac{n(n-1)(n-2)...(n-k+1)}{n^k} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n-k} $

We can see that the factorial part has k terms， and we have n k times

$\therefore lim_{n \to \infty} \ \frac{n}{n}\frac{n-1}{n}\frac{n-1}{n}...\frac{n-k+1}{n} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n-k} $

$\therefore lim_{n \to \infty} \ 1(1-\frac{1}{n})(1-\frac{2}{n})...(1-\frac{k-1}{n}) \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n-k} $

$\because  n\rightarrow \infty \ \therefore lim_{n \rightarrow \infty}1(1-\frac{1}{n})(1-\frac{2}{n})...(1-\frac{k-1}{n}) = 1$

$\therefore lim_{n \to \infty} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n-k}$

This part can be divided into two terms

$\therefore lim_{n\rightarrow\infty} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n}(1-(\frac{\lambda}{n}))^{-k}$

$\because n\rightarrow \infty \  \therefore \frac{\lambda}{n} \rightarrow 0$

$\therefore （1-(\frac{\lambda}{n}))^{-k}=1$

$\therefore lim_{n\rightarrow\infty} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n}$

According to the definition of the natural constant e

$\because lim_{x\rightarrow \infty} (1+\frac{1}{x})^x = e$

$\therefore lim_{n \to \infty} \ \frac{\lambda^k}{k!} \ ((1+(\frac{1}{(\frac{n}{-\lambda})})^{(\frac{n}{-\lambda})})^{-\lambda})$

It can be found that the base part is the same as the definition

$\therefore lim_{n \to \infty} \ \frac{\lambda^k}{k!} \ e^{-\lambda}$
