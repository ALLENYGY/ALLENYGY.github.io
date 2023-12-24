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

## Problem II

0. initial state:
     - |1|3|6|5|4|7|
1. insert(1)
    - |1|3|6|5|4|7|
2. insert(3)
    - |3|1|6|5|4|7|
3. insert(6)
    - |6|1|3|5|4|7|
4. insert(5)
    - |6|5|3|1|4|7|
5. insert(4)
    - |6|5|3|1|4|7|
6. insert(7)
    - |7|5|6|1|4|3|
7. deleteMax()
    - |6|5|3|1|4|7|
8. deleteMax()
    - |5|4|3|1|6|7|
9. deleteMax()
    - |4|1|3|5|7|7|
10. deleteMax()
    - |3|1|4|5|6|7|
11. deleteMax()
    - |1|3|4|5|6|7|

## Problem III

```pseudo
isBST(node, lower, upper)
  IF node IS NULL
    RETURN TRUE
  IF node.key <= lower OR node.key >= upper
    RETURN FALSE
  RETURN isBST(node.left, lower, node.key) AND isBST(node.right, node.key, upper)

isBST(root, INT_MIN, INT_MAX)
```

## Problem IV

initial state:
```tree
                              25|3                              
                ┌───────────────┴───────────────┐               
              13|1                            80|2              
        ┌───────┴───────┐               ┌───────┴───────┐       
       6|0            15|0            58|1            82|0      
                                        └───┐                   
                                          65|0       
```
insert:29
```tree
                              25|3                              
                ┌───────────────┴───────────────┐               
              13|1                            80|2              
        ┌───────┴───────┐               ┌───────┴───────┐       
       6|0            15|0            58|1            82|0      
                                    ┌───┴───┐                   
                                  29|0    65|0          
```
insert:70
```tree
                              25|3                              
                ┌───────────────┴───────────────┐               
              13|1                            65|2              
        ┌───────┴───────┐               ┌───────┴───────┐       
       6|0            15|0            58|1            80|1      
                                    ┌───┘           ┌───┴───┐   
                                  29|0            70|0    82|0  
```
insert:68
```tree
                              65|3                              
                ┌───────────────┴───────────────┐               
              25|2                            80|2              
        ┌───────┴───────┐               ┌───────┴───────┐       
      13|1            58|1            70|1            82|0      
    ┌───┴───┐       ┌───┘           ┌───┘                       
   6|0    15|0    29|0            68|0    
```

## Problem V

a)

$8(M-1)+4M=2048$
$M=172$
$256L=2048$
$L=8$
$\therefore M=171, L=8$

b)

1. ![Insert](NOTE/DSA/insert.png)
2. ![Delete](NOTE/DSA/delete.png)
