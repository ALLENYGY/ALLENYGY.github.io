---
Create Time: 3rd February 2024
Title: "[[SlidingWindow]]"
Author:
  - AllenYGY
tags:
  - SlidingWindow
  - NOTE
  - Algorithm
created: 2024-02-03
updated: 2024-03-22
---

# **SlidingWindow**
#Experience 
- 枚举右端点，挪动左端点
- 挪动左端点的判断条件一定枚举右端点出发的
- 判断条件是难点
```cpp
int left=0;
for(int right=0;right<n;i++){
	# 常常伴有哈系
	while(condition){
		left+=1;
	}
	# 更新ans
}
return ans;
```

## [无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

```cpp
class Solution {
public:
	int lengthOfLongestSubstring(string s) {
		int ans=0,left=0,n=s.size();
		unordered_map<char,int>m;
		for(int right=0;right<n;right++){
			m[s[right]]++;
			while(m[s[right]]>1){
				m[s[left]]--;
				left++;
			}ans=max(ans,right-left+1);
		}	
		return ans;
	}
};
```

