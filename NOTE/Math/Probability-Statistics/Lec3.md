# Sampling distribution

A sampling distribution is a distribution of all of the possible values of a statistic for a given size sample selected from a population

## Sampling Distribution of the sample Mean *样本均值的样本分布*

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/aFjG5B.png' alt='aFjG5B'/>

Sampling Distribution Properties

- the larger the sample size n, the closer the sampling distribution of the sample means is to being normal.
- sample mean is always an unbiased estimate of $\mu$.

### General Conclusion

- If the population of individual items is normal, then the population of all sample means is also normal.
- Even if the population of individual items is not normal, there are circumstances that the population of all sample means is approximately normal

- Even if the population of individual items is not normal, there are circumstances that the population of all sample means is approximately normal $\mu$ and standard deviation $\sigma$ then sampling distribution of the sample mean $\overline x$ is also normal with mean $\mu_{\overline{x}}=\mu$ and standard deviation $\sigma_{\overline{x}}=\frac{\sigma}{\sqrt{n}}$

Further, the larger the sample size n, the closer the sampling distribution of the sample means is to being normal.

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/4e5MNK.png' alt='4e5MNK'/>

$If \ X$ ~ $N(\mu,\sigma^2)$

$Then \ \ \overline {X}$ ~ $N(\mu,\frac{\sigma^2}{n})$

$E(\overline{X})= \mu_{\overline{x}}=\mu$
$Var(\overline {X}) = \sigma_{\overline{x}}^2=\frac{\sigma^2}{n}$

the larger the sample size n, the more accurate the estimate, because when n increases, $\sigma_{\overline{X}}$ decreases, $\overline {X}$ is more clustered to the population mean

If the sample size n is at least 30, then for most sampled populations, the sampling distribution of sample means $\overline{X}$  is approximately normal

- 在极限状态下，n取样本本身则方差无意义，无法计算

## *Unbiased Estimates* 无偏估计

A sample statistic is an unbiased point estimate of a population parameter if the mean of all possible values of the sample statistic equals the population parameter

$\overline{X}$ is an unbiased estimate of $\mu$ because $\mu =\overline\mu$
In general, the sample mean is always an unbiased estimate of $\mu$.

The sample variance \(s^2\) is an unbiased estimate of \(\sigma^2\) if the sampled population is infinite

- 只有当分母为n-1时满足 所以标准差公式分母为n-1而不是n

\[ s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1} \]

其中，\( x_i \) 是样本观测值，\( \bar{x} \) 是样本均值。

样本方差的无偏性意味着在所有可能的样本中，样本方差的期望值等于总体方差。当样本数量趋向无穷大时，这一性质得以实现。

证明无偏性的一种方式是通过对样本方差公式的期望进行计算。在这个过程中，需要使用数学统计学的一些性质，例如计算期望时需要考虑到每个样本的期望和样本均值的期望等。经过这样的推导，可以得出当样本数量趋向无穷大时，样本方差的期望等于总体方差，即证明了其无偏性。

需要注意的是，对于有限的样本数量，样本方差的无偏性并不成立，因为在计算样本方差时使用了 \(n-1\) 作为除数而不是 \(n\)，这是为了对总体方差进行无偏估计。

However, $s$ is not an unbiased estimate of $\sigma$
但是没有简单的方法计算$\sigma$ 所以仍用$s$ 计算

## Sampling Distribution of the Proportion *样本比例的样本分布*

Proportion  The fraction, ratio, or percent indicating the part of the population or sample having a particular trait of interest.  

$\hat{p}=\frac{X}{n}=\frac{number \ of \ items \ in \ the \ sample \ hanving \ the \ characteristic \ of \ interests}{sample \ size}$

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/S5rSXN.png' alt='S5rSXN'/>

- For a population of units, we select samples of size n, and calculate its proportion $\hat{p}$ for the units of the sample to be fall into a particular category.
- $\hat{p}$ is a random variable and has its probability distribution.
- The probability distribution of all possible sample proportions is called the *sampling distribution of the sample proportion*

The sampling distribution of $\hat{p}$ is

1. approximately normal, if n is large meet the conditions that $np \geq 5$ and $n(1-p) \geq 5$
2. $\mu_{\hat{p}}=p$
3. $\sigma_{\hat{p}}=\sqrt{\frac{p(1-p)}{n}}$

$\hat{p}$ ~ $N(p,\sqrt{\frac{p(1-p)}{n}})$
