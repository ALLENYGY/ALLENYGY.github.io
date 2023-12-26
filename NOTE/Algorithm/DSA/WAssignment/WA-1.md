# Written Assignment-1

## Problem 1

What is the total number of basic operations that the following code piece consume? Make your answer precise and list your steps of calculation.

```c
int afunc(int n){
    int res = 0;   // 1
    for(int i=0;i<n;i++){   // 3n+2
        for(int j=0;j<n;j++){ // (6n+2)n
            res+=i*j;
        }
    }
    return res; // 1
}
```

The total number of basic operations that the code piece consumes is

$1+(3n+2)+(6n+2)n+1$
$=6n^2+5n+4$

## Problem 2

For each pair of $f(n)$ and $g(n)$ below, decide if $f(n) = O(g(n))$, $f(n) =  \Omega(g(n))$, or $f(n) = \theta(g(n))$. Justify your answer using the definition of these asymptotic notation. Note that more than one of these relations may hold for a given pair; list all correct ones.

1. $f(n)= \sqrt{n}$ and $g(n)= \sqrt{n} + log_2n$.

   (1) prove $f(n)=O(g(n))$

    $\because \sqrt{n} \leq \sqrt{n} + log_2n$  when $n\geq0$

    $\therefore \sqrt{n} = O(log_2n)$

    $\therefore f(n)=O(log_2n)$

   (2) prove $f(n)=\Omega(g(n))$

    $Suppose \ c=\frac{1}{2}$
    Now prove $ \sqrt{n} \geq \frac{1}{2}(\sqrt{n} + log_2n)$

    $\therefore$  prove $\sqrt{n} \geq log_2n$

    $lim_{n\rightarrow\infty}\frac{\sqrt{n}}{\log_2n}$

    $=\frac{\frac{1}{2}n^{\frac{-1}{2}}}{\frac{1}{nln2}}=\frac{1}{2}n^{\frac{-1}{2}}nln2=\frac{1}{2}ln2n^{\frac{1}{2}}
    \rightarrow \infty$

    $\therefore \sqrt{n} \geq (log_2n)$

    $\therefore f(n)=\Omega(log_2n)$

    $\therefore f(n)=O(log_2n)=\Omega(log_2n)$

- $f(n)=2^n$ and $g(n)=3^n$.

Suppose $f(n)=\ 2^n ,\ g(n)=c_2\ 3^n$, then

$lim_{n\rightarrow\infty}\frac{f(n)}{{g(n)}}=(\frac{ 2}{3})^n\rightarrow 0$

$\therefore f(n)=O(g(n))$

## Problem 3

Let f(n) be an asymptotically positive function. Prove or disprove each of the following conjectures.
Hint: You can prove a conjecture using its definition or disprove a conjecture by giving negative examples.

(a) $f(n) = \theta (f(n) + 1)$

$lim_{n\rightarrow\infty}\frac{f(n)}{c(f((n)+1))}$

$= \frac{f^{'}(n)}{c(f^{'}(n))}=\frac{1}{c}$

$\because \frac{1}{c}$ is a constant

$\therefore f(n)=\theta(f(n)+1)$

(b) $f(n)=\theta (f(n+1))$

$lim_{n\rightarrow\infty}\frac{f(n)}{c(f(n+1))}$

$\because n\rightarrow\infty$

$lim_{n\rightarrow\infty}\frac{f(\infty)}{c(f(\infty))}=\frac{1}{c}$

$\therefore f(n)=\theta (f(n+1))$

## Problem 4

Solve the following recurrence relation and represent T(n) using a formula of n.

$T(n) = 2T(\frac{n}{2}) + 1$

$ T(n)=\left\{
\begin{matrix}
   2T(\frac{n}{2}) + 1, \ n>1\\
  1, \ n=1
\end{matrix}
\right.
$

$T(n)=T(\frac{n}{2})+O(1)$

$ =T(\frac{n}{2})+1$
$ =T(\frac{n}{2^2})+2$
$ =T(\frac{n}{2^3})+3$
$ =T(\frac{n}{2^4})+4$
$...$
$ =T(\frac{n}{2^i})+i$

let $\frac{n}{2^i}=1$
$n=2^i ,\ \ \  i=log_2n \\
\therefore T(n)=log_2n=O(logn)$

## Problem 5

In the merge sort algorithm, we divide an array into two halves, recursively sort the subarrays, and then merge them into a sorted array. Now Ming proposes a “merge sort pro” algorithm. In “merge sort pro”, an array is divided evenly into four subarrays instead of two, and the rest of the steps are similar to those of merge sort. What do you think is the time cost of “merge sort pro” if the input size is n? Prove your answer.

$T(n) = n logn \\
T(n)=4T(\frac{n}{4})+n \\
T(\frac{n}{4})=4T(\frac{n}{16})+\frac{n}{4} \\
T(\frac{n}{16})=4T(\frac{n}{64})+\frac{n}{16} \\
\ \ \therefore T(n)=4^mT(\frac{n}{4^m})+mn\\
Let \ \ \frac{n}{4^m}=1, \ \ m=log_4n \\
\ \ \therefore T(n)= 4^{log_4n}T(1)+nlog4n\\
\ \ \because T(1)=0\\
\ \ \therefore T(n)=nlog_4n=O(nlog_n)
$

## Problem 6

We are given an array of n items and for any two items A and B: • We can check if A and B are equal. • We cannot check which one is greater and which one is smaller, so we cannot sort them. For example, the array may be {♥,♥,☆,○,△,♥,♥,♥,♥,♫,☆,■,♥}. Our task is to find the majority of the array, if it has one. The majority of an array is defined as the item that appears strictly more than n/2 times. For example, in the sample array above, the array size is 13 and item ♥ appears 7 times, so ♥ is the majority. Use a divide-and-conquer algorithm to solve the problem in O(n*log.n). Describe your algorithm in pseudo-code.

```Pseudo-Code
MERGECOUNT(A, left, right)
1.     IF left >= right
2.          RETURN
3.     center = (left + right) / 2
4.     MERGECOUNT(A, left, center)
5.     MERGECOUNT(A, center + 1, right)
6.     MERGE_WITH_COUNT(A, left, center, right)

MERGE_WITH_COUNT(A, left, center, right)
1.     Create an empty map/dictionary charCount
2.     FOR i = left to right
3.         IF A[i] exists in charCount
4.             Increment count of A[i] in charCount
5.         ELSE
6.             Set count of A[i] in charCount to 1
7.     maxChar = character with maximum count in charCount
8.     maxCount = count of maxChar in charCount
```
