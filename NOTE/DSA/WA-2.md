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
