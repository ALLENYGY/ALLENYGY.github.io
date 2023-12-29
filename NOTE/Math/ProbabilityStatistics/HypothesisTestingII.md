# Hypothesis Testing (Two Populations)

## Two Sample Tests

- Population Means, Independent Samples
  - Population 1 vs independent Population 2
- Population Means, Related Samples
  - Same population before vs after treatment
- Population Proportions
  - Proportion 1 vs Proportion 2

## Independent Samples

- $\sigma_1$ and $\sigma_2$ are known
- $\sigma_1$ and $\sigma_2$ are unknown, assumed equal
- $\sigma_1$ and $\sigma_2$ are unknown, not assumed equal

Use the difference between 2 sample means

The Point estimate for the difference is

$$
\overline{x_{1}}-\overline{x_{2}}
$$

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/twopopulationmeans.png"/>

### $\sigma_1$ and $\sigma_2$ Known

Test statistic is a z statistic

The standard error of $\overline{x_{1}}-\overline{x_{2}}$ is

$$
\sigma_{\bar{x}_1-\bar{x}_2} = \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}
$$

The test statistic for $\mu_1-\mu_2$:

$$
Z = \frac{(\bar{x}_1 - \bar{x}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}
$$

The confidence interval $\mu_1-\mu_2$ is:

$$
(\bar{x}_1 - \bar{x}_2) \pm \color{red}Z_{\alpha/2}\color{black} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}
$$

### $\sigma_1$ and $\sigma_2$ unknown assumed equal

Test statistic is a t statistic with  (n1 + n2 – 2)  degrees of freedom

The population variances are assumed equal, so use the two sample variances and pool them to estimate the common  $\sigma^2$

$$
S_p^2 = \frac{(n_1 - 1)S_1^2 + (n_2 - 1)S_2^2}{(n_1 - 1) + (n_2 - 1)}
$$

The test statistic for $\mu_1-\mu_2$ is:

$$
t = \frac{(\bar{x}_1 - \bar{x}_2) - (\mu_1 - \mu_2)}{\sqrt{S_p^2 \left(\frac{1}{n_1} + \frac{1}{n_2}\right)}}
$$

The confidence interval $\mu_1-\mu_2$ is:

$$
(\bar{x}_1 - \bar{x}_2) \pm \color{red}t_{n_1+n_2-2, \alpha/2}\color{black} \sqrt{S_p^2 \left(\frac{1}{n_1} + \frac{1}{n_2}\right)}
$$

### $\sigma_1$ and $\sigma_2$ unknown not assumed equal

Samples are randomly and independently drawn

Populations are normally distributed or both sample sizes are at least 30

The population variances are not assumed equal, so include the two sample variances in the computation of the t-test statistic

The test statistic is a t statistic with $\nu$ degrees of freedom

The number of degrees of freedom is the integer portion of:

$$
\nu = \frac{\left(\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}\right)^2}{\frac{\left(\frac{S_1^2}{n_1}\right)^2}{n_1 - 1} + \frac{\left(\frac{S_2^2}{n_2}\right)^2}{n_2 - 1}}
$$

The test statistic for $\mu_1-\mu_2$ is:

$$
t = \frac{(\bar{x}_1 - \bar{x}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}}
$$

The confidence interval $\mu_1-\mu_2$ is:

$$
(\bar{x}_1 - \bar{x}_2) \pm \color{red}\nu\color{black} {\sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}}
$$

## Related Samples

Dependent samples are samples that are paired or related in some fashion.
