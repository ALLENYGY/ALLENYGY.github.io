---
Create Time: 28th February 2024
Title: "[[Sort]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - Sort
  - Algorithm
created: 2023-12-31
updated: 2024-03-22
---

 # Sort Algorithm

- Bubble Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort

稳定排序：排序前后两个相等的数相对位置不变，则算法稳定
Bubble sort, Insertion sort, Merge sort
非稳定排序：排序前后两个相等的数相对位置发生了变化，则算法不稳定
Quick sort, Heap sort

Default order from smallest to largest
## Bubble Sort

- Final不考先不写

```java
  public static void sort(int nums[]){
    Bubble(nums, nums.length-1);
  }

  //* 优化 每次循环的最后一次交换后   该下标往右都不会再发生交换 */
  public static void Bubble(int nums[],int j){    
    if(j==0) return ;
    int x=0;
    for(int i=0;i<j;i++){
      if(nums[i]>nums[i+1]) {
        int temp=nums[i];
        nums[i]=nums[i+1];
        nums[i+1]=temp;
        x=i;
      }
    }
    Bubble(nums, x);
  }
```

## Insertion Sort

- 遍历第一个元素到数组最后一个元素
- 每遍历一个元素就比较已经排好序的部分，倒序遍历回去知道找到可以插入的位置

- Example:
  1. 654321
  2. 564321
  3. 456321
  4. 345621
  5. 234561
  6. 123456

```pseudo
INSERTION-SORT(A)
FOR p = 1 TO n-1
  key = A[p]
  i = p – 1
  WHILE i >= 0 AND A[i] > key
    A[i+1] = A[i]
    i = i – 1
  A[i+1] = key
```

- Non-Recursion

```java
public static void insertionSort(int A[]){
  for(int p=1;i<A.length;p++){
    int key=A[p]; int i=p-1;
    while(i>=0 && A[i]>key){
      A[i+1]=A[i]; //挪位置
      i=i-1;
    }
    A[i+1]=key;
  }
}
```

- Recursion

不断缩小排序范围

```java
public static void insertionSort(int A[]){
    Insertion(A, 1);
  }
public static void insertionSort(int A[],int p){
  if(p==A.length) return;
  int key=A[p]; int i=p-1;
  while(i>=0 && key<A[i]){
    A[i+1]=A[i];
    i--;
  }
  A[i+1]=key;
  Insertion(A, p+1);
}
```

### Time Complexity for Insertion Sort

- Best-Case: $O(n)$ 已经排好序的数组，扫一遍
- Worst-Case: $O(n^2)$ 倒序的数组
- Average-Case: $O(n^2)$

## Merge Sort

- 重点讲下merge的过程
  - 对于两个有序数组第一个元素下标分别为$i_1，i_2$

```pseudo
MERGESORT(A, left, right)
1.     IF left>=right
2.          RETURN
3.    center = (left+right) / 2
4.    MERGESORT(A, left, center)
5.    MERGESORT(A, center+1, right)
6.    MERGE(A, left, center, right)

MERGE(A, left, center, right)
1.  i1 = left, i2 = center+1, i=0
2.  WHILE i1<=center AND i2<=right
3.    IF A[i1]<A[i2]
4.      B[i++] = A[i1++]
5.    ELSE
6.      B[i++] = A[i2++]
7.    WHILE i1 <= center
8.    B[i++] = A[i1++]
9.    WHILE i2 <= right
10.   B[i++] = A[i2++]
11. Copy B to A[left..right]
```

### Time Complexity for Merge Sort
$$T(n) = \begin{cases}
$2T(\frac{n}{2}) + O(n), & \text{if } n \geq 1 \\
O(1), & \text{if } n = 1
\end{cases} \\
$$
$T(n)=2^iT(\frac{n}{2^i})+i*n$
$let\ 2^i=n$
$T(n)=nT(\frac{n}{n})+n*log(n)=O(nlog(n))$

## Quick Sort

```pseudo
QUICKSORT(A, left, right)
1.     IF left >= right
2.          return
3.     q = PARTITION(A, left, right)
4.     //q is the position of the pivot
5.     QUICKSORT(A, left, q-1)           
6.     QUICKSORT(A, q+1, right)

PARTITION(A, left, right)
1.     p = PIVOT(A, left, right)
2.    //p is the position of the pivot
3.    swap A[p] and A[right]
4.    i = left, j = right-1, pivot = A[right]
5.    WHILE true           
6.        WHILE i<right AND A[i]<pivot
7.            i++
8.        WHILE j>=left AND A[j]>pivot
9.            j--
10.       IF i<j
11.           swap A[i] and A[j]
12.           i++, j--
13.       ELSE
14.           BREAK
15.   swap A[i] and A[right]
```

### Strategy for pick pivot

#### Strategy I

Use the first element as a pivot

1. if the input is random, ok
2. if the input is presorted (or in reverse order)
   - all the elements go into S2 (or S1)
   - this happens consistently throughout the recursive calls
  Results in $O(n^2)$ behavior

#### Strategy II

Choose the pivot randomly

1. generally safe
2. random number generation can be expensive

#### Strategy III

Use the median of the array *中位数*
The median is the middle element if the array is sorted.

1. Partitioning always cuts the array into roughly half
2. An optimal quicksort: O(N log N)
3. However, it is expensive to find the exact median
e.g., sort an array to pick the value in the middle

#### Strategy IV

We will use the median of three
Compare just three elements: the left-most, right-most, and center

Swap these elements if necessary so that

- A[left] =  Smallest
- A[right]   =  Largest
- A[center]  = Median of three
- Pick A[center] as the pivot
- Swap A[center] and A[right – 1] so that the pivot is at second-last position

### Time Complexity for Quick Sort

- Assumptions
Pivot Selection: Median of 3
Base Case: Array size <= 10
- Running time $T(n)$
  - Divide
    1. Pivot selection: O(1)
    2. Partitioning: O(n)
    3. Recursive calls: T(i) + T(n-i-1)
  - Conquer and Combine: O(1)

$$T(n)=T(i)+T(n-i-1)+O(n)$$

- Worst-Case
  - The pivot is the smallest element, all the time
  - Partition is always unbalanced

$$
T(N) = T(N - 1) + cN \\
T(N - 1) = T(N - 2) + c(N - 1) \\
T(N - 2) = T(N - 3) + c(N - 2) \\
...\\
T(2) = T(1) + c(2) \\
T(N) = T(1) + c\sum_{i=2}^{N} i = O(N^2) \\
$$

- Best-Case
  - Partition is perfectly balanced
  - Pivot is always in the middle (median of the array)

$T(n) = 2T\left(\frac{n}{2}\right) + n$

$\quad = 2\left[2T\left(\frac{n}{2^2}\right) + \frac{n}{2}\right] + n$

$\quad = 2^2T\left(\frac{n}{2^2}\right) + 2n$

$\quad = 2^3T\left(\frac{n}{2^3}\right) + 3n$

$\quad = 2^iT\left(\frac{n}{2^i}\right) + in$

$Let\ i = \log(n)$

$\quad = nT\left(\frac{n}{n}\right) + n \cdot \log(n)$

$\quad = O(n \log(n))$

- Average-Case
- $O(nlog(n))$

### Why is quicksort faster than mergesort?

- The inner loop consists of an increment/decrement (by 1, which is fast), a test, and , a jump.
- There is no extra juggling as in mergesort.

## Heap Sort

### Priority Queue

The priority queue is a data structure that allows at least two operations

- insert
- delete in/deleteMax
  - finds, returns, and removes the minimum elements in the priority queue

### Binary Heap

Heaps are “almost perfect binary trees”

- All levels are full except possibly the lowest level
- If the lowest level is not full, then nodes must be packed to the left

### Property

Given a binary heap of node number n and height h

- n is within $[2^h, 2^{h+1}-1]$
- The height $h=O(log(n))$
The structure is so regular, it can be represented in an array and no links are necessary !!!

Insert in $O(log N)$ time
Locate the current minimum in $O(1)$ time
Delete the current minimum in $O(log N)$ time

```pseudo
insert(x)
1.     IF ISFULL(A)
2.          return False
3.     // percolate up
4.     hole = size ++
5.     WHILE hole>0 AND x<A[(hole-1)/2]
6.         A[hole] = A[(hole-1)/2]
7.         hole = (hole-1)/2
8.     A[hole] = x
9.     return True
```

Note:
节点A：$x$
父节点：$\lfloor \frac{x-1}{2} \rfloor$

```pseudo
deleteMin()
1.     IF ISEMPTY(A)
2.          return -1
3.     min = A[0], hole = 0, x=A[--size]
4.     // percolate down
4.     WHILE A[hole] has children
5.         sid = index of A[hole]’s smaller child
6.         IF x<=A[sid]
7.           BREAK
8.         A[hole] = A[sid]
9.         hole = sid
10.   A[hole] = x
11.   return min
```

```pseudo
HEAPSORT(A)
1.     heap = new MaxHeap(A) 
2.     FOR Each x in A
3.         heap.insert(x)
4.     FOR i=size-1 TO 0
5.         A[i] = heap.deleteMax()
```
