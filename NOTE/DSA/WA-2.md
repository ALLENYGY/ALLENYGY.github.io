# Written Assignment-2

## Problem I

```pseudo
GETSUM(A, left, right)
  IF left > right
    return 0
  center = left + (right - left) / 2
  if(A[center] == 0 AND center + 1 < A.size AND A[center + 1] == 1)
    return A.size - center - 1
  else if(A[center] == 1)
    return GETSUM(A, left, center - 1)
  else
    return GETSUM(A, center + 1, right)
```

$T(n) = \begin{cases}
2T(\frac{n}{2}) + O(1), & \text{if } n \geq 1 \\
O(1), & \text{if } n = 1
\end{cases}
$

$T(n)=2T(\frac{n}{2}) + O(1)$
$T(n)=4T(\frac{n}{4}) + O(1)+ 2O(1)$
$T(n)=2^iT(\frac{n}{2^i})+i\ O(1)$

When $2^i=n$
$i=log_2n$
$T(n)=nT(\frac{n}{n})+i =O(logn)$
