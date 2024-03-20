---
Title: "[[Biweekly-contest-122]]"
Contest: leetcode
tags: Contest
Rank: 1205
Total: 2547
Credits: 7
T1: Accepted
T2: Accepted
T3: New Complement
T4: Uncommitted
Create Time: 2024-01-29
Author:
  - AllenYGY
---

# [Biweekly-contest-122](https://leetcode.cn/contest/biweekly-contest-122)

## #T1 [3010. 将数组分成最小总代价的子数组 I](https://leetcode.cn/problems/divide-an-array-into-subarrays-with-minimum-cost-i/)

1. 开始的时候总想暴力，取第一个数然后两个for循环就过了
2. 后来看到HMZ，选第一个数然后直接sort取前两位
    - 说实话，我有点懵
    - 后来， #woc，我是傻逼

#灵神题解[T1](https://leetcode.cn/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solution/cong-onlogn-dao-onpythonjavacgo-by-endle-gmna)

## #T2 [3011. 判断一个数组是否可以变为有序](https://leetcode.cn/problems/find-if-array-can-be-sorted/)

1.	刚开始想找规律来着，什么二进制数一的个数相同两者有无规律
2.	后来，直接模拟就好了把能排序的从小到大拍一遍，最后看整个数组能不能有序就完了

#分组循环 应用场景：找一段符合条件的连续的片段
- 外层循环
    - 记录每次循环开始时数组下标
- 内层循环
    - 判断是否符合条件
```python
while i<n:
	start=i
	while i<n and [condition]:
		i+=1
	# 循环结束，从start到i-1是一个子数组
```

#灵神题解[T2](https://leetcode.cn/problems/find-if-array-can-be-sorted/solution/jiao-ni-yi-ci-xing-ba-dai-ma-xie-dui-on-j3nik)

## #T3 [3012. 通过操作使数组长度最小](https://leetcode.cn/problems/minimize-length-of-array-using-operations/)

#还没开始 可能还没开始看题
看完题解
$$x\ mod\ y=x\  (\forall\ x < y\ , x,y \in \mathbb Z)$$
也就是说，拿到最小的数之后可以用这个数吧其他不是它的倍数的数消掉

- 假设最小的数只有一个，那么最后只剩它自己
- 如果最小的数不止一个
    - 假设x不是m的倍数
        - $0<x\ mod\ m<m$
    - 假设x都是m的倍数
        - 可以先消掉不是m的数
        - 剩余的数都相同两两配对

#灵神题解[T3](https://leetcode.cn/problems/minimize-length-of-array-using-operations/solution/on-nao-jin-ji-zhuan-wan-pythonjavacgo-by-2lea)

## #T4 [3013. 将数组分成最小总代价的子数组 II](https://leetcode.cn/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/)

#还没开始 可能还没开始看题
#灵神题解[T4](https://leetcode.cn/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solution/liang-ge-you-xu-ji-he-wei-hu-qian-k-1-xi-zdzx/)

