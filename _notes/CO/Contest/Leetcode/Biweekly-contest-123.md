---
Title: "[[Biweekly-contest-123]]"
Contest: leetcode
tags:
  - Contest
Rank: 1169
Total: 2209
Credits: 3
T1: Accepted
T2: Uncommitted
T3: New Complement
T4: Uncommitted
Create Time: 2024-02-04
Author:
  - AllenYGY
---

# [[Biweekly-contest-123]](https://leetcode.cn/contest/biweekly-contest-123/)

## #T1

1. 排序
2. 判断三角形是否存在
3. 判断是什么三角形

#灵神题解[T1](https://leetcode.cn/problems/type-of-triangle-ii/solution/an-ti-yi-mo-ni-pythonjavacgo-by-endlessc-zq6e/)

## #T2

- 同T4
#灵神题解[T2](https://leetcode.cn/problems/find-the-number-of-ways-to-place-people-ii/solution/on2-you-ya-mei-ju-by-endlesscheng-z86d/)

## #T3

(theme:: 前缀和)
```python
s[0]=0
s[1]=nums[0]
s[2]=nums[0]+nums[1]
...
s[i]=nums[0]+...+nums[i-1]
s[i+1]=nums[0]+...+nums[i]
nums[i]+...+nums[j]
=nums[0]+...+nums[j]-(nums[0]+...+nums[i-1])
=s[j+1]-s[i]
```
$| nums[i] - nums[k] | ==k$
计算$s[j+1]-s[i]$的最大值
枚举 $j$，问题变成计算$s[i]$的最小值
$nums[i] = nums[j] - k$ 或者 $nums[j]+k$
(theme:: 哈希表)
```cpp
class Solution {
public:
	long long maximumSubarraySum(vector<int>& nums, int k) {
		unordered_map<int,long long > min_s;
		long long ans=LLONG_MIN;
		long long s=0;
		for(int x:nums){
			auto it =min_s.find(x+k);
			if(it != min_s.end()){
				ans=max(ans,s+x-it->second);
			}
			it =min_s.find(x-k);
			if(it !=min_s.end()){
				ans=max(ans,s+x-it->second);
			}
			it =min_s.find(x);
			if(it==min_s.end()||s<it->second){
				min_s[x]=s;
			}
			s+=x;
		}
		return ans==LLONG_MIN?0:ans;
}

};
```
#灵神题解[T3](https://leetcode.cn/problems/find-the-number-of-ways-to-place-people-i/solution/on2-you-ya-mei-ju-pythonjavacgo-by-endle-ii0q/)

```python
class Solution: 
	def maximumSubarraySum(self, nums: List[int], k: int) -> int: 			ans = -inf 
		min_s = defaultdict(lambda: inf) 
		s = 0 
		for x in nums: 
			min_s[x] = min(min_s[x], s)
			s += x 
			ans = max(ans, s-min(min_s[x - k], min_s[x + k]))
		return ans if ans > -inf else 0 
```

## #T4

```cpp
class Solution {
public:
	int numberOfPairs(vector<vector<int>> &points) {
		ranges::sort(points, [](const auto &p, const auto &q) {
			return p[0] != q[0] ? p[0] < q[0] : p[1] > q[1];	
		});
		int ans = 0, n = points.size();
		for (int i = 0; i < n; i++) {
			int y0 = points[i][1];
			int max_y = INT_MIN;
			for (int j = i + 1; j < n; j++) {
				int y = points[j][1];
				if (y <= y0 && y > max_y) {
					max_y = y;
					ans++;
				}
			}
		}
		return ans;
	}
};
```

#灵神题解[T4](https://leetcode.cn/problems/find-the-number-of-ways-to-place-people-ii/solution/on2-you-ya-mei-ju-by-endlesscheng-z86d/)



