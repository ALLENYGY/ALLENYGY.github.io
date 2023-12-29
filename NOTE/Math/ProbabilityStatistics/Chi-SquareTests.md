# Chi-Square Tests

- The Chi-Square Distribution
- Chi-square goodness of fit tests $拟合优度检验$
- A chi-square test for independence $独立性检验$

Chi-Square Tests

- Test of Multinomial Experiment
  - General Test
  - Test for homogeneity
  - Test for normal distribution
- Test for independence

## The Chi-Square Distribution

The chi-square $\chi^2$ distribution depends on the number of degrees of freedom.

- There is a family of chi-square distributions.
- It is skewed to the right.
- It is non-negative.
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/Chi-Square.png"/>

$$
\chi^2 = \sum_{i=1}^{k} \frac{(f_i - E_i)^2}{E_i}
$$

### A Goodness of Fit Test for Multinomial Probabilities

1. H0: multinomial probabilities are p1, p2, … , pk
   Ha: at least one of the probabilities differs from p1, p2,…, pk
2. Choose $\alpha$
3. Multinomial Experiment
  Assumption: The excepted cell frequencies are >5
4. Critical value is $\chi^2_\alpha$, with k-1 degrees of freedom
5. Test statistic:

$$
\chi^2 = \sum_{i=1}^{k} \frac{(f_i - E_i)^2}{E_i}
$$

6. Reject H0 if $\chi^2$ > $\chi^2_\alpha$
