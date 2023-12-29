# Hypothesis Testing

1. State the null hypothesis, $H_0$ and the alternative hypothesis, $H_1$
2. Choose the level of significance, $\alpha$, and the sample size, n
3. Determine the appropriate test statistic and sampling distribution
4. Determine the critical values that divide the rejection and nonrejection regions
5. Collect data and compute the value of the test statistic
6. Make the statistical decision and state the managerial conclusion.  
   - If the test statistic falls into the nonrejection region, do not reject the null hypothesis $H_0$.
   - If the test statistic falls into the rejection region, reject the null hypothesis.
   - Express the managerial conclusion in the context of the problem

## p-Value Approach to Testing

p-value: Probability of obtaining a test statistic more extreme ($\geq$ or$\leq$ ) than the observed sample value given $H_0$ is true

- Also called observed level of significance
- Smallest value of $\alpha$ for which $H_0$ can be rejected

就是把求出的值代回z/t table求概率

If   p-value $< \alpha$  ,  reject $H_0$
If   p-value $\geq \alpha$,  do not reject $H_0$

If $p < 0.10$, then there is some evidence to reject $H_0$
If $p < 0.05$, then there is strong evidence to reject $H_0$
If $p < 0.01$, then there is very strong evidence to reject $H_0$
If $p < 0.001$, then there is extremely strong evidence to reject $H_0$

## Errors in Making Decisions

### Type I Error

Reject a true null hypothesis *原假设是对的却拒绝*
The probability of Type I Error is $\alpha$

### Type II Error

Fail to reject a false null hypothesis *原假设是错的却接受*
Fail to reject a false null hypothesis $\beta$

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/Error.png"/>

Type I and Type II errors cannot happen at the same time

- Type I error can only occur if $H_0$ is true
- Type II error can only occur if $H_0$ is false

If Type I error probability $\alpha \uparrow$ then Type II error probability $\beta \downarrow$
If Type I error probability $\alpha \downarrow$ then Type II error probability $\beta \uparrow$
