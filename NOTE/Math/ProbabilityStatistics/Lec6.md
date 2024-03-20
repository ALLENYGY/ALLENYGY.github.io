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
(\bar{x}_1 - \bar{x}_2) \pm \color{red}Z_{\alpha/2}\color{white} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}
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
(\bar{x}_1 - \bar{x}_2) \pm \color{red}t_{n_1+n_2-2, \alpha/2}\color{white} \sqrt{S_p^2 \left(\frac{1}{n_1} + \frac{1}{n_2}\right)}
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
(\bar{x}_1 - \bar{x}_2) \pm \color{red}\nu\color{white} {\sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}}
$$

## Related Samples

Dependent samples are samples that are paired or related in some fashion.

### Paired T-test

$$
D_i = X_{1i} - X_{2i}
$$

$$
\bar{d} = \frac{\sum d_i}{n}
$$

$$
S_d = \sqrt{\frac{\sum (d_i - \bar{d})^2}{n - 1}}
$$

Paired (matched)-Sample T Test, the test statistic for $μ_D$  is a t-statistic

$$
t = \frac{\bar{D} - \mu_D}{\frac{S_D}{\sqrt{n}}}
$$

The confidence interval for $μ_D$ is

$$
\bar{d} \pm t_{\alpha/2, n-1} \left(\frac{S_D}{\sqrt{n}}\right)
$$

## Two Population Proportions

The point estimate for the difference is
$$
\hat{p}_1 - \hat{p}_2
$$

Mean:

$$
\mu_{\hat{p}_1 - \hat{p}_2} = p_1 - p_2
$$

Standard deviation:

<!-- $$
\sigma_{\hat{p}_1 - \hat{p}_2} = \sqrt{\frac{p_1(1 - p_1)}{n_1} + \frac{p_2(1 - p_2)}{n_2}}
$$ -->

if $p_1=p_2$:

$$
\sigma_{\hat{p}_1 - \hat{p}_2} = \sqrt{\hat{p}(1 - \hat{p})\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}
$$

if $p_1!=p_2$:

$$
\sigma_{\hat{p}_1 - \hat{p}_2} = \sqrt{\frac{\hat{p}_1(1 - \hat{p}_1)}{n_1} + \frac{\hat{p}_2(1 - \hat{p}_2)}{n_2}}
$$

The test statistic for $p_1 – p_2$ is a  Z statistic:

$$
z = \frac{(\hat{p}_1 - \hat{p}_2) - (p_1 - p_2)}{\sigma_{\hat{p}_1 - \hat{p}_2}}
$$

The confidence interval for $p_1-p_2$ is:

$$
(\hat{p}_1 - \hat{p}_2) \pm z_{\alpha/2} \sqrt{\frac{\hat{p}_1(1 - \hat{p}_1)}{n_1} + \frac{\hat{p}_2(1 - \hat{p}_2)}{n_2}}
$$

## Summary

Compared two independent samples

- Performed Z  test for the difference in two means
- Performed pooled variance t-test for the difference in two means
- Performed separate-variance t-test for difference in two means
- Formed confidence intervals for the difference between two means

Compared two related samples (paired samples)

- Performed paired t-tests for the mean difference
- Formed confidence intervals for the mean difference

Compared two population proportions

- Formed confidence intervals for the difference between two population proportions
- Performed Z-test for two population proportions
