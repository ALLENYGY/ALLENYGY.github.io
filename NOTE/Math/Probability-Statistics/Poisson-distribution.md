# Possion-distribution

## From Binomial distribution to Poisson distribution

- Binomial distribution
  - $Bin(p,n) = P(X = k) ={C^n_k\ p^k(1-p)^{n-k}}$
- Poisson distribution
  - $Poi(x,\lambda) = e^{-\lambda}\frac{\lambda^k}{k!}$

Intuitively, the Binomial distribution and the Poisson distribution seem to be unrelated. But a closer look reveals a very interesting relationship. The Poisson distribution is just a special case of the binomial distribution. When n tends to infinity and p approaches zero, the binomial distribution approaches the Poisson distribution.

## Derivation

For binomial distribution

- $Bin(p,n) = P(X = k) ={(C^n_k)p^k(1-p)^{n-k}}$
  $E(x): \lambda = np \ \Rightarrow$ $p=\frac{\lambda}{n}$

$ C^k_n \ (\frac{\lambda}{n})^k \ (1-(\frac{\lambda}{n}))^{n-k} $

$ \frac{n!}{k!(n-k)!} \ \frac{\lambda^k}{n^k} \ (1-(\frac{\lambda}{n}))^{n-k} $

For Poisson distribution  $n \rightarrow \infty$

$\therefore lim_{n \to \infty} \ \frac{n!}{k!(n-k)!} \ \frac{\lambda^k}{n^k} \ (1-(\frac{\lambda}{n}))^{n-k} $

$\therefore lim_{n \to \infty} \ \frac{n(n-1)(n-2)...(n-k+1)}{k!} \ \frac{\lambda^k}{n^k} \ (1-(\frac{\lambda}{n}))^{n-k} $

$\therefore lim_{n \to \infty} \ \frac{n(n-1)(n-2)...(n-k+1)}{n^k} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n-k} $

$\therefore lim_{n \to \infty} \ \frac{n}{n}\frac{n-1}{n}\frac{n-1}{n}...\frac{n-k+1}{n} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n-k} $

$\therefore lim_{n \to \infty} \ 1(1-\frac{1}{n})(1-\frac{2}{n})...(1-\frac{k-1}{n}) \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n-k} $

$\because  n\rightarrow \infty \ \therefore 1(1-\frac{1}{n})(1-\frac{2}{n})...(1-\frac{k-1}{n}) = 1$

$\therefore lim_{n \to \infty} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n-k}$

$\therefore lim_{n\rightarrow\infty} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n}(1-(\frac{\lambda}{n}))^{-k}$

$\because n\rightarrow \infty \  \therefore \frac{\lambda}{n} \rightarrow 0$

$\therefore 1-(\frac{\lambda}{n}))^{-k}=1$

$\therefore lim_{n\rightarrow\infty} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n}$

$\because lim_{x\rightarrow \infty} (1+\frac{1}{x})^x = e$

$\therefore lim_{n \to \infty} \ \frac{\lambda^k}{k!} \ ((1+(\frac{1}{(\frac{n}{-\lambda})})^{(\frac{n}{-\lambda})})^{-\lambda})$

$\therefore lim_{n \to \infty} \ \frac{\lambda^k}{k!} \ e^{-\lambda}$
