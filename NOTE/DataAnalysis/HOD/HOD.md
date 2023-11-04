# *Hands on Data Analytics for Everyone*

- 此文基本包括了uic hands on data 这门课quiz和期末考的知识点， 高亮标注都是考点
- 期末project 需要学习KNIME软件来建模  

## Preparation

### Data Analytics

- Autonomous Driving Car
- Industrial Production
- Investment in Financial Markets
- Scientific Research
- ......

### Data Sicience Skills

- Data Engineer: Database, Coding Skills (Computer Programming)
- Machine Learning Researcher: Math, Statistics, Machine Learning Knowledge (Math/Stat)
- Filed Knowledge: biology, business...

***

## Chapter 1 Data Analytics Foundations

### Data Science: Extract knowledge and insights from structured and unstructured data

### Data project life cycle
>
>Data->Data Preparation->Model Training->Model Optimization->Model Testing
>
### Structured Data & Unstructured Data

- Structured data ==can be processed by machine directly==, while unstructured data cannot.
- For example the data on student grades collected bythe Academic Registry are ==structured data== while the content of student emails is unstructured.
- Structured data ==are stored in well designed database== such as sales data of a company of thecustomer relationship management system of a company, while unstructured data ==could be collected and stored== but not in ==specifically designed== database such as phone calls and blogposting on weibo.
- Structured Data:  Excel
- Unstructured Data: E-mail,Wechat(Social-media)

#### Common Structured Data Types

- CSV (Comma-separated values)
- XML (Extensible Markup Language)
- JSON (JavaScript Object Notation)
- XLS (Microsoft Excel)

#### 5Comma-Separated Values

1. Each line of the file is a data record.
2. Each record consists of one or more attributes. The attributes are separated by commas.

#### In ".csv” format, new records are separated by ==new line==

>第一条记录，可以是字段名:     Year,Make,Model,Description,Price
>每条记录占一行 以逗号为分隔符 e.g.(1997,Ford,E350,=="ac, abs, moon"==,3000.00)
>逗号前后的空格会被忽略
>字段中包含有逗号，换行符，空格，该字段必须用双引号括起来
>字段中的双引号用两个双引号表示
>字段中如果有双引号，该字段必须用双引号括起来 ==aa,"bb,""cc"== ctrl
>
#### Data Type

- Categorical: noun
- Numeric: number
- Ordinal: High-Normal-Low

### Relation between computer science, statistics and data analytics

If viewed as a ==pipeline==, data analytics is the bridge that connects statistics and computer science.

### Difference between computer science, statistics and data analytics

It focuses on using statistical methods to discover insights from data, ==Statistics== is more traditional and theoretical, ==Computer science== focuses on solving all problem in a computable way, including topics in computability, algorithms, system design, networks, artificial intelligence, software engineering,etc.
***

## Chapter 2 Data Processing

### Data Summary

#### Basic Descriptive Statistics

Statistical measures can be used to describe a dataset

- Range: $Range=Max value- Min value$
- Min/Max value
- Mean: $$µ =1/n\sum_{i=0}^{n}x_i$$
- Variance: $$\sigma^2=1/(n-1)\sum_{i=1}^{n}(x_i-µ)^2$$
- Standard deviation:  $$\sigma=\sqrt{1/(n-1)\sum_{i=1}^{n}(x_i-µ)^2}$$
- Median: The middle number^[Found by ordering all data points and picking out the one in the middle - or if there are two middle numbers, taking the mean of those two numbers]
- Mode: Most frequently occurring value

##### Percentiles (Quartiles)

- q%-quantile (0 < q < 100): The value for which q% of the values are smaller and 100-q% are larger. The median is the 50%-quantile
- Quartiles: 25%-quantile (1st quartile), median (2nd quartile), 75%-quantile (3rd quartile)
- Interquartile range(IQR): $3rd quartile – 1st quartile$

###### How to find quartile?

1. Count the number of observations in the dataset(n).
2. Sort the observations from smallest to largest.
3. Find the first/second/third quartile
Calculate n*(1/4)
If n*(1/4) is an integer,then the first quartile is the mean of the numbers at this position n*(1/4) and n*(1/4)+1
If n*(1/4) is not an integer , then round it up. The number at this position is the first quartile

### Data Visualization

#### Chart

##### Dimension 1

###### Bar chart

- A bar chart is a simple way to depict the frequencies of the values of a categorical attribute.

###### Histogram

- A histogram shows the frequency distribution for a numerical attribute.
Difference:

>Bar chart is ==discrete==.
>Histogram is ==continuous==.
>Bar chart is suitable for categorical data while histogram is for numeric data
>
###### Choice of Number of Bins

- Choosing a low number of bins
>
>The two peaks of the original distribution are ==no longer visible==, and one ==gets the wrong impression== that the distribution is unimodal.
>
- Choosing a high number of bins
>
>Usually leads to a very scattered histogram in which it is difficult to ==distinguish true peaks from random peaks==.
>
- Best Choise

$$k=[\log_2n+1]$$

- Boxplot ^[The middle line of the box, which is the median of the data, represents the average of the sample data. The upper and lower limits of the box are the upper and lower quartiles of the data, respectively. This means that the box contains 50% of the data. The height of the box partly reflects how fluctuating the data is. Above and below the box, there is a line. Represents the maximum and minimum values, sometimes some points "pop out", which can be understood as "outliers"]

- Boxplots are a very compact way to visualize and summarize the main characteristics of a numeric attribute, through the median, the IQR, and possible outliers.

##### Dimension 2

###### Scatter Plot

- In scatter plots two attributes are plotted against each other
- Can be enriched with additional features (color, shape, size)
- Suitable for small number of points; not suitable for large datasets
- Points can hide each other

##### Dimension 3

###### 3D plot

###### Scatter Matrixes

- A matrix of scatter plots m×m where m is the number of attributes (data dimensionality)
- For m attributes there are m(m − 1)/2 possible scatter plots

###### Parallel Coordinates Plot "cuba data"

###### Radar Plot "spider plots"

- Similar idea of the Parallel Coordinates plot
- Axes are drawn in a star-like fashion intersecting in one point
- Suitable for small datasets

###### Sunburst Chart

### Dimensionality Reduction Techniques

#### Measure based

Requires min-max-normalization of numeric columns

- Ratio of missing values: If missing value > threshold, then remove the column.
- Low variance: If variance < threshold, then remove column. ^[Only works for numeric columns]
- High Correlation: If(corr(var1,var2) > threshold), then remove var1.

### Data Cleaning

#### Missing Values

##### Missing Value Type

- Missing Completely At Random (MCAR): *the probability that a value for X is missing does neither depend on the value of X nor on other variables.* (Most serious)
- Missing At Random (MAR): *the probability that Y is missing depends only on the value of X.*
- Not Missing At Random (NMAR): *the probability that Y is missing depends on the unobserved value of Y itself*

##### Missing Values Imputation

- Ignore or delete the record
- Fill in (impute) missing value as “unknown”,mean/median/mode ^[A predicted value based on the other attributes (inference-based such as
Bayesian, Decision Tree]

#### Outliers

- An outlier is a value or data object that is far away or very different from all or most of the other data.
- Errors in measurements or exceptional conditions that don't describe the common functioning of the underlying system.

##### Outlier Detection Techniques

###### Knowledge-based

- We know that a 200 year old person must be a mistake
- We know that “A” in a number corpus is an outlier

###### Statistics-based

- Distance from the median
- Position in the distribution tails

###### Statistical Methods

- Quantile-based: Box plot
- Distribution-based: Z-Score

##### Data Normalization

- min–max normalization $x\in[0,1]$ $x = (x-min)/(max-min)$
- z-score standardization
- robust z-score standardization
- decimal scaling

#### Feature Engineering

##### Scale Conversion

- Categorical → Numerical: map categorical and ordinal values to a set of binary values
- Numerical → Categorical: Discretization (equal-width, equal-depth, V-optimal)

#### Data Integration

##### Vertical Data Integration

Concatenation: (column do not change)

- Unify database structures
- Remove duplicates

##### Horizontal Data Integration

Join: (column change)

- Overrepresentation of items
- Data explosion

***

## Chapter 3 Machine Learning

### Supervised Learning && Unsupervised Learning

#### Supervised Learning

The learner is provided with a set of data inputs together with the corresponding desired outputs

- Data act as a “teacher”
- Classification & Regression
Example:
- teach kids to recognize different animals
- grade examinations with correct answer provided

#### Unsupervised Learning

Training examples as input patterns, with no associated output

- no “teacher”
- Clustering
- similarity measure exists to detect groupings/ clusterings
Main differences: unsupervised learning has no “teacher”, supervised learning uses labeled input and
output data, while an unsupervised learning does not

#### Classification and Regression (Supervised Learning)

##### Regression Problem

The target variable that we’re trying to predict is continuous.  eg.(living areas and prices)

##### Classification problem

The target variable can take on only a small number of discrete values.  eg.(insurance)

### Linear Regression

Given a training set, to learn a function (hypothesis/model) f: X ⟼ Y, so that f(x) is a “good” predictor for the corresponding value of y.
$$f(x)=\theta_0+\theta_1x$$

- The model is in linear in terms of parameters $\theta_0$ and $\theta_1$.
- Linear regression with one variable (univariate linear regression).

#### Linear Regression Evaluation

- Mean absolute error (MAE) $$1/n\sum_{i=0}^{n}|y_i-f(x_i)|$$
- Mean squared error (MSE) $$1/n\sum_{i=0}^{n}(y_i-f(x_i))^2$$
- Root mean squared error (RMSE) $$\sqrt{1/n\sum_{i=0}^{n}(y_i-f(x_i))^2}$$
- R-squared ^[Proportion of the variance for a dependent variable that’s explained by the regression model.Normally ranges from 0 to 1, the closer to 1 the better performance.]
$$1-(\sum_{i=0}^{n}(y_i-f(x_i))^2)/(\sum_{i=0}^{n}(y_i-\bar{y})^2)$$

##### Error

- Training error/Empirical error: the error of the learner/model on the training data
- Generalization error: the error on the new data

### Classification

#### Classification accuracy

The percentage of test set tuples that are correctly classified by the classifier

##### Confusion matrix

###### Consider a two-class problem and the confusion matrix below

| Class | C1(predicted) | C2(predicted)| Total| Accuracy|
| ---- | ---- | ---- | ---- | ---- |
| C1 | true positives (TP) | false negatives (FN) | positives(P) | TP/P |
| C2 | false positives (FP) |true negatives (TN) | negatives(N) | TN/N |
| Total | predicted positives(Pp) | predicted negatives(Pn) | All | (TP+TN)/All |

#### Decision Tree

- Each internal nodedenotes a test on an attribute
- Each branch represents an outcome of the test
- Each leaf node holds a class label

### Clustering (Unsupervised Learning)

Discover hidden structures in unlabeled data
Clustering identifies a finite set of groups (clusters) $C_1,C_2,...,C_k$ in the dataset such that:

- Objects within the same cluster $C_i$ shall be as similar as possible
- Objects of different clusters $C_i,C_j$ ($i!=j$) shall be as dissimilar as possible
Example:
- Customer segmentation
- Molecule search ^[Find molecules with similar structure to already working ones]
- Anomaly detection ^[Find unusual patterns in data from sensors monitoring mechanical engines]
- Structuring large sets of text documents ^[hierarchical clustering of the text documents]
- Generating thematic maps from satellite images ^[clustering sets of raster images of the same area (feature vectors)]

#### Types of Clustering Approach

- Linkage Based
e.g. Hierarchical Clustering
- Clustering by Partitioning
e.g. k-Means

#### (Dis-)similarity Functions for Numeric Attributes

- Minkowski-Distance ($L_p-Metric$)
- Euclidean Distance ($L_2 − p = 2$)
- Manhattan-Distance ($L_1 − p = 1$)
