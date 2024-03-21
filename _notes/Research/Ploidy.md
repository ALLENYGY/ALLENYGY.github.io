---
created: 2024-01-19T11:25
updated: 2024-03-21T12:36
---
# Ploidy

## [nQuire: a statistical framework for ploidy estimation using next generation sequencing](https://doi.org/10.1186/s12859-018-2128-z)

### **Ploidy**

- Ploidy traditionally has been investigated by measuring DNA content using **flow cytometry**
- It can also be inferred from next generation sequencing (**NGS**) data either by examining k-mer distributions, or by assessing the distribution of allele frequencies at biallelic single nucleotide polymorphisms (**SNPs**)

---
### **NGS**

- Disadvantage:
  - does not provide **summary statistics** that permit quantifying how well the data fit the expected distributions
  - this approach is that it is preceded by the identification of variable sites (“SNP calling”), which is carried out using methodologies that benefit from a previously **known ploidy level**
- This method was primarily developed for resequencing studies

---
### **nQuire**

It models base frequencies as a **Gaussian Mixture Model (GMM)**, and uses **maximum likelihood** to assess empirical data under the assumptions of diploidy, triploidy and tetraploidy.

使用高斯混合模型对可变位点的基频分布进行建模并使用最大似然法来选择最合理的倍性模型

$$
\log L = \sum_{i=1}^{n} \log \sum_{j=1}^{3} \alpha_j \mathcal{N}(x_i \, | \, \mu_j, \sigma_j)
$$

$\sum_{j=1}^{3} \alpha_j = 1.$

---
#### **Expectation-Maximization (EM) algorithm**

$$
P(Z_i = j|x_i) = \frac{\alpha_j \mathcal{N}(x_i | \mu_j, \sigma_j)}{\sum_{j=1}^{3} \alpha_j \mathcal{N}(x_i | \mu_j, \sigma_j)} = \gamma_{Z_i}(j)
$$
latent variables  $Z_i$.

##### M-step

$$S_j = \sum_{i=1}^{n} \gamma_{Z_i}(j)$$

$$\hat{\mu}_j = \frac{1}{S_j} \sum_{i=1}^{n} \gamma_{Z_i}(j)x_i$$

$$\hat{\sigma}_j^2 = \frac{1}{S_j} \sum_{i=1}^{n} \gamma_{Z_i}(j) (x_i - \mu_j)^2$$

$$\hat{\alpha}_j = \frac{S_j}{n}$$

The log-likelihood is calculated after the M-step, and the next E-step is initiated unless the log-likelihood has changed by less then $\epsilon = 0.01$ from the previous M-step.

##### E-step

$$\log L_{diploid} = \sum_{i=1}^{n} \log \mathcal{N}(x_i; 0.5, \sigma)$$

$$\log L_{triploid} = \sum_{i=1}^{n} \log \sum_{j=1}^{2} 0.5 \cdot \mathcal{N}(x_i; \mu_j, \sigma_j), \quad \mu_j \in \{0.33, 0.67\}$$

$$\log L_{tetraploid} = \sum_{i=1}^{n} \log \sum_{j=1}^{3} 0.33 \cdot \mathcal{N}(x_i; \mu_j, \sigma_j), \quad \mu_j \in \{0.25, 0.5, 0.75\}$$

$$\Delta \log L_{diploid} = \log L_{free} - \log L_{diploid}$$

$$\Delta \log L_{triploid} = \log L_{free} - \log L_{triploid}$$

$$\Delta \log L_{tetraploid} = \log L_{free} - \log L_{tetraploid}$$
<!-- 
## [GenomeScope 2.0 and Smudgeplot for referencefree profiling of polyploid genomes](https://doi.org/10.1038/s41467-020-14998-3)

## [AbsCN-seq: a statistical method to estimate tumor purity, ploidy and absolute copy numbers from next-generation sequencing data](https://doi.org/10.1093/bioinformatics/btt759)

## [ConPADE: Genome Assembly Ploidy Estimation from Next-Generation Sequencing Data](https://doi.org/10.1371/journal.pcbi.1004229)
 -->
