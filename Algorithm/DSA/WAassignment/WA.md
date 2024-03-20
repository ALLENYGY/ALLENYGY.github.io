# Written Assignment

## Problem I

```pseudo
GETminmun(A):
  SORT(A)
  if(A[0]-A[A.length-1]<0): return A[0]-A[A.length-1];
  else:
    min=INT_MAX;
    for i from 1 to A.length-1:
      if(A[i]-A[i-1]<min) min=A[i]-A[i-1];
  return min;
```

## Problem II

1. ![Tree](Algorithm/DSA/WAassignment/Draw/BST.png)
2. ![Tree](Algorithm/DSA/WAassignment/Draw/BST-1.png)
3. |14|25|40|52|58|85|

## Problem III

### 3.1

a.
Initial State
```tree
              52|2              
        ┌───────┴───────┐       
      15|1            85|0      
    ┌───┴───┐                   
   8|0    31|0
```
Insert 82:
```tree
              52|2              
        ┌───────┴───────┐       
      15|1            85|1      
    ┌───┴───┐       ┌───┘       
   8|0    31|0    82|0
```
Insert 6:
```tree
                              52|3                              
                ┌───────────────┴───────────────┐               
              15|2                            85|1              
        ┌───────┴───────┐               ┌───────┘               
       8|1            31|0            82|0                      
    ┌───┘                                                       
   6|0                     
```
Insert 65:
```tree
                              52|3                              
                ┌───────────────┴───────────────┐               
              15|2                            82|1              
        ┌───────┴───────┐               ┌───────┴───────┐       
       8|1            31|0            65|0            85|0      
    ┌───┘                                                       
   6|0                        
```
b.

1
```tree
                              52|3                              
                ┌───────────────┴───────────────┐               
               8|1                            82|2              
        ┌───────┴───────┐               ┌───────┴───────┐       
       6|0            15|0            65|1            85|1      
                                        └───┐           └───┐   
                                          72|0            95|0
```

2
```tree
                              65|3                              
                ┌───────────────┴───────────────┐               
              15|2                            82|2              
        ┌───────┴───────┐               ┌───────┴───────┐       
       8|1            31|0            72|0            85|1      
    ┌───┘                                               └───┐   
   6|0                                                    95|0
```
3
```tree
                              52|3                              
                ┌───────────────┴───────────────┐               
              15|2                            85|2              
        ┌───────┴───────┐               ┌───────┴───────┐       
       8|1            31|0            65|1            95|0      
    ┌───┘                               └───┐                   
   6|0                                    72|0  
```

### 3.2

1. **Insertion Time**: To insert an element into an [[../AVL|AVL]] tree, we perform a binary search to find the correct position for the new element and then possibly perform some rotations to maintain the [[../AVL|AVL]] property. The time complexity of both these operations is \( O(log n) \) because the tree is balanced.

2. **Building the Tree**: If we insert \( n \) distinct integers into an [[../AVL|AVL]] tree, each insert operation takes \( O(log n) \) time. Since there are \( n \) elements, the total time to build the tree is \( O(n log n) \).

3. **In-order Traversal**: Once the [[../AVL|AVL]] tree is built, we can perform an in-order traversal to retrieve the elements in sorted order. An in-order traversal of a binary search tree visits the nodes in ascending order, which is what we want for sorting. The time complexity for in-order traversal is \( O(n) \), as each node is visited exactly once.

4. **Total Time Complexity**: The total time complexity of sorting an array using an [[../AVL|AVL]] tree is the time to build the tree (\( O(n log n) \)) plus the time for the in-order traversal (\( O(n) \)). Hence, the overall time complexity is \( O(n log n) \).

Therefore, we have shown that using an [[../AVL|AVL]] tree to sort an array of distinct integers has a time complexity of \( O(n log n) \).

## Problem IV

a.

$( L = \left\lfloor \frac{\text{Size of one block}}{\text{Size of each employee record}} \right\rfloor = \left\lfloor \frac{2048}{128} \right\rfloor = 16 )$

$( M = \left\lfloor \frac{\text{Size of one block}}{\text{Size of a primary key + Size of a pointer}} \right\rfloor + 1 )$

$( M = \left\lfloor \frac{2048}{8 + 4} \right\rfloor + 1 = \left\lfloor \frac{2048}{12} \right\rfloor + 1 = 170 + 1 = 171 )$

- \( L = 16 \): Each leaf node can hold up to 16 records.
- \( M = 171 \): Each internal node can have up to 171 children (170 keys + 1 extra pointer).

b.

1. ![Tree](Algorithm/DSA/WAassignment/Draw/insert-1.png)
2. ![Tree](delete-1.png)
