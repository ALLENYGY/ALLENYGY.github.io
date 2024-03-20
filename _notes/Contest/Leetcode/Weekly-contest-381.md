---
Title: "[[Weekly-contest-381]]"
Contest: leetcode
tags: Contest
Rank: 1224
Total: 3737
Credits: 12
T1: Accepted
T2: Accepted
T3: Accepted
T4: Uncommitted
Create Time: 2024-02-06
Author: 
- AllenYGY
---

# [[Weekly-contest-381]](https://leetcode.cn/contest/weekly-contest-381/)

## #T1

```cpp
class Solution { 
public: 
	int minimumPushes(string word) {
		unordered_map<char,int>map; 
		for(int i=0;i<word.size();i++){ 
			map[word[i]]++; 
		} 
		if(map.size()<=8){ 
			return word.size(); 
		} 
		vector<int> v(map.size(),0);
		int i=0; 
		for (const auto& pair : map) { 
			v[i++]= pair.second; 
		} 
		sort(v.begin(), v.end(), greater<int>()); 
		for(int i=0;i<v.size();i++){ 
			cout<<" "<<v[i]; 
		} 
		int count=1; int bit=1; int res=0;
		for(int i=0;i<v.size();i++){ 
			if(count<=8){ 
				res+=v[i]*bit; count++; 
			} else{ count=1; i--; bit+=1; 
			} 
		} 
		return res; 
	} 
};
```

## #T2

```cpp
class Solution { 
public: 
	vector<int> countOfPairs(int n, int x, int y) { 
		vector<int> result(n, 0); 
		for (int house1 = 1; house1 <= n-1; house1++) { 
			for (int house2 = house1+1; house2 <= n; house2++) { 
				int distance = min(abs(house2 - house1), 
								min(abs(house1-x)+1+abs(house2-y), 
								abs(house1-y)+1+abs(house2-x)));
				 result[distance - 1]++; 
			} 
		} 
		for(int i=0;i<n;i++) result[i]*=2; 
			return result; 
	} 
};
```
## #T3

```cpp
class Solution { 
public: 
	int minimumPushes(string word) { 
		unordered_map<char,int>map; 
		for(int i=0;i<word.size();i++){ 
			map[word[i]]++; 
		} 
		if(map.size()<=8){ 
			return word.size(); 
		} 
		vector<int> v(map.size(),0); 
		int i=0; 
		for (const auto& pair : map) { 
			v[i++]= pair.second; 
		} sort(v.begin(), v.end(), greater<int>()); 
		for(int i=0;i<v.size();i++){ 
			cout<<" "<<v[i]; 
		} 
		int count=1; int bit=1; int res=0; 
		for(int i=0;i<v.size();i++){ 
			if(count<=8){ 
				res+=v[i]*bit; count++; 
			} else{ 
				count=1; i--; bit+=1; 
			} 
		} 
		return res; 
	} 
};
```

## #T4




