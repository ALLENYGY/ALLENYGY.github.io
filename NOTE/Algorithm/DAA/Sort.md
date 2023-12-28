# Sort Algorithm

- Bubble Sort
- Insertion Sort
- Merge Sort
- Quik Sort
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

Time Complexity

- Best-Case: $O(n)$ 已经拍好序的数组，扫一遍
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

Time Complexity
$T(n) = \begin{cases}
2T(\frac{n}{2}) + O(n), & \text{if } n \geq 1 \\
O(1), & \text{if } n = 1
\end{cases} \\
T(n)=2^iT(\frac{n}{2^i})+i*n\\
let\ 2^i=n\\
T(n)=nT(\frac{n}{n})+n*log(n)=O(nlog(n))
$

## Quick Sort

## Heap Sort
