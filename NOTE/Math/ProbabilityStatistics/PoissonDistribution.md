# Poisson-distribution

## Poisson Distribution

- Consider the number of times an event occurs over an interval of time or space, and assume that: (考虑事件在一段时间和空间内发生的次数)
  - 1. The probability of occurrence is the same for any intervals of equal length
  - 2. The occurrence in any interval is independent of an occurrence in any non-overlapping interval

- The probability distribution of X is characterized by
$$P(X = k) = \frac{\lambda^{k} e^{-\lambda}}{k!}$$

- For Poisson distribution, the following is true:
$$E(X)=Var(X)=\lambda$$
λ is called the Poisson parameter. λ is the average number of items considered in the Poisson process during the observed time period.

## From Binomial distribution to Poisson distribution

- Binomial distribution
  - $Bin(p,n) = P(X = k) ={C^k_n\ p^k(1-p)^{n-k}}$
- Poisson distribution
  - $Poi(x,\lambda) = e^{-\lambda}\frac{\lambda^k}{k!}$

Intuitively, the Binomial distribution and the Poisson distribution seem to be unrelated. But a closer look reveals a very interesting relationship. The Poisson distribution is just a special case of the binomial distribution. When n tends to infinity and p approaches zero, the binomial distribution approaches the Poisson distribution.

```txt
As you can see on the slide,  intuitively the 2 distributions seem to be unrelated. However, by searching on the internet. We found an interesting relationship between the Binomial distribution and the Poisson distribution. That is when the trail n tends to infinity.  The Poisson distribution is just a special case of the binomial distribution.
```

## Derivation

Let me give you a simple derivation

For binomial distribution

- $Bin(p,n) = P(X = k) ={(C^k_n)p^k(1-p)^{n-k}}$
  $E(x): \lambda = np \ \Rightarrow$ $p=\frac{\lambda}{n}$
  - $n$ represents the number of trails
  - $p$ represents the probability that a trial will succeed
  
```txt
As you can see the binomial distribution on the slide, the expected value of the binomial distribution is equal to the variable n times the probability p. So we can get p by lambda divided by n.
```

Put the equation in the expression for the binomial distribution， we can get the following expression

$ C^k_n \ (\frac{\lambda}{n})^k \ (1-(\frac{\lambda}{n}))^{n-k} $

```txt
And we put this equation to the binomial distribution, we can get the following expression 
```

By expanding the combination number

$\frac{n!}{k!(n-k)!} \ \frac{\lambda^k}{n^k} \ (1-(\frac{\lambda}{n}))^{n-k}$

There is an assumption in the Poisson distribution

For Poisson distribution  $n \rightarrow \infty$

$\therefore lim_{n \to \infty} \ \frac{n!}{k!(n-k)!} \ \frac{\lambda^k}{n^k} \ (1-(\frac{\lambda}{n}))^{n-k}$

```txt
For the Poisson distribution, the variable n tends to the infinity
So we just need to simplify this limit expression
```

We can expand the factorial， then cancel out the (n-k)factorial part

$\therefore lim_{n \to \infty} \ \frac{n(n-1)(n-2)...(n-k+1)}{k!} \ \frac{\lambda^k}{n^k} \ (1-(\frac{\lambda}{n}))^{n-k}$

After that, we switch the positions of the denominators

$\therefore lim_{n \to \infty} \ \frac{n(n-1)(n-2)...(n-k+1)}{n^k} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n-k}$

We can see that the factorial part has k terms， and we have n k times

$\therefore lim_{n \to \infty} \ \frac{n}{n}\frac{n-1}{n}\frac{n-1}{n}...\frac{n-k+1}{n} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n-k}$

$\therefore lim_{n \to \infty} \ 1(1-\frac{1}{n})(1-\frac{2}{n})...(1-\frac{k-1}{n}) \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n-k}$

$\because  n\rightarrow \infty \ \therefore lim_{n \rightarrow \infty}1(1-\frac{1}{n})(1-\frac{2}{n})...(1-\frac{k-1}{n}) = 1$

$\therefore lim_{n \to \infty} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n-k}$

This part can be divided into two terms

$\therefore lim_{n\rightarrow\infty} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n}(1-(\frac{\lambda}{n}))^{-k}$

$\because n\rightarrow \infty \  \therefore \frac{\lambda}{n} \rightarrow 0$

$\therefore (1-(\frac{\lambda}{n}))^{-k}=1$

$\therefore lim_{n\rightarrow\infty} \ \frac{\lambda^k}{k!} \ (1-(\frac{\lambda}{n}))^{n}$

According to the definition of the natural constant e

$\because lim_{x\rightarrow \infty} (1+\frac{1}{x})^x = e$

$\therefore lim_{n \to \infty} \ \frac{\lambda^k}{k!} \ ((1+(\frac{1}{(\frac{n}{-\lambda})})^{(\frac{n}{-\lambda})})^{-\lambda})$

It can be found that the base part is the same as the definition

$\therefore lim_{n \to \infty} \ \frac{\lambda^k}{k!} \ e^{-\lambda}$
