# Sort Algorithm

- Bubble Sort
- Insertion Sort
- Merge Sort
- Quik Sort
- Heap Sort

Default order from smallest to largest
## Bubble Sort

## Insertion Sort

- 遍历第一个元素到数组最后一个元素
- 每遍历一个元素就比较已经排好序的部分，倒序遍历回去知道找到可以插入的位置

Example:

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

```java
public static void insertionSort(int[] A){
  for(int p=1;i<A.length;p++){
    int key=A[p];
    int i=p-1;
    while(i>=0 && A[i]>key){
      A[i+1]=A[i]; //挪位置
      i=i-1;
    }
    A[i+1]=key;
  }
}
```

Time Complexity

- Best-Case: $O(n)$ 已经拍好序的数组，扫一遍
- Worst-Case: $O(n^2)$ 倒序的数组
- Average-Case: $O(n^2)$

## Merge Sort

## Quick Sort

## Heap Sort
