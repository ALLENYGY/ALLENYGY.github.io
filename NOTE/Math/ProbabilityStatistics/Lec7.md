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

### Test of Multinomial Experiment

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

#### General Test Example

**Marital status**
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/General-test.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/General-test-1.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/General-test-2.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/General-test-3.png"/>

#### Test for homogeneity Example

**Support calls**
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/homogeneity-1.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/homogeneity-2.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/homogeneity-3.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/homogeneity-4.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/homogeneity-6.png"/>

## Chi-Square Test for Independence

Chi-square test of independence is used to determine if there is a significant relationship between two qualitative (categorical) variables.

A contingency table is used to investigate whether two traits or characteristics are related.

1. H0: X and Y are independent
   Ha: X and Y are dependent

2. Assumption: The excepted cell frequencies are > 5
3. Set the level of significance

$$
\hat{E}_{ij} = \frac{r_i c_j}{n}
$$

4. Critical value is $\chi^2_\alpha$, with degrees of freedom (r-1)(c-1)
5. Test statistic:

$$
\chi^2 = \sum_{i=1}^{r} \sum_{j=1}^{c} \frac{(f_{ij} - E_{ij})^2}{E_{ij}}
$$

where:
$f_{ij}$ = observed frequency in cell $(i, j)$
$E_{ij}$ = expected frequency in cell $(i, j)$
$r$ = number of rows
$c$ = number of columns
6. Reject H0 if $\chi^2 > \chi^2_\alpha$

### Chi-Square Test for Independence Example

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/contingency-1.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/contingency-2.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/contingency-3.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/contingency-4.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/contingency-5.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/PB/chi/contingency-6.png"/>

## Summary

Chi-squared test of goodness of fit:

$$
\chi^2 = \sum_{i=1}^{k} \frac{(f_i - E_i)^2}{E_i}
$$

d.f. = k - 1

Chi-squared test of independence in a contingency table:

$$
\chi^2 = \sum_{i=1}^{r} \sum_{j=1}^{c} \frac{(f_{ij} - E_{ij})^2}{E_{ij}}
$$

d.f. = (r - 1)(c - 1)

These formulas and degrees of freedom calculations are fundamental to performing chi-squared tests in statistics.
