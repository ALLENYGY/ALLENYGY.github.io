---
Create Time: 27th March 2024
Title: "[[Enumeration Subset]]"
status: UNFINISHED
Author:
  - AllenYGY
tags:
  - NOTE
  - Enumernation
  - Algorithm
created: 2024-03-27T08:36
updated: 2024-03-27T09:44
---

# [[Enumeration Subset]]

## 指数型枚举

从1−n这n个整数中随机选取任意多个，每种方案里的数从小到大排列，按字典序输出所有可能的选择方案。

- 每种方案都有选或者不选两种情况

```cpp
#include<iostream>
#incldue<algorithm>

using namespace std;

const int N=20;
bool st[N]; //记录每个元素状态 选或不选
int n;

void dfs(int u){ //u 为当前状态
	if(u>n){ //Base Case
		for(int i=1;i<=n;i++){
			if(st[i]) cout<<i<<" ";
		}
		puts("");
		return ;
	}
	st[u]=true; // 选择当前元素
		dfs(u+1);
	st[u]=false;// 不选择当前元素
		dfs(u+1);
}

int main(){
	cin>>n;
	dfs(1);
	return 0;
}

```

## 排列型枚举

把 1∼n 这 n 个整数排成一行后随机打乱顺序，输出所有可能的次序。

- 每次都需要选一个数
- 通过一个数组记录选数的顺序

```cpp
#include<iostream>

using namespace std;

const int N=20;

bool used[N];
int way[N];

int n;

void dfs(int u){//当前选了几个数
	if(u>n){//输出
		for(int i=1;i<=n;i++){
			cout<<way[i]<<" ";
		}
		puts("");
		return ;
	}
	for(int i=1;i<=n;i++){
		if(used[i]) continue;
		used[i]=true;
		way[u]=i;
		dfs(u+1);
		used[i]=false;
	}
}

int main(){
	cin>>n;
	dfs(1);
	return 0;
}

```

## 组合型枚举

把 1∼n 这 n 个整数中随机选出m个，输出所有的可能的选择方案

```cpp
#include<iostream>  
using namespace std;
const int N=30;
bool used[N];
int way[N];
int n;
int m;

void dfs(int u,int cnt){
	if(cnt==m){
		for(int i=1;i<=m;i++){
			cout<<way[i]<<" ";
		}
		puts("");
		return ;
	}
	for(int i=1;i<=n;i++){
		if(way[u-1]<i && !used[i]){
			used[i]=true;
			way[u]=i;
			dfs(u+1,cnt+1);
			used[i]=false;
		}  		
	}
}

int main(){
	cin>>n>>m;
	dfs(1,0);
	return 0;
}
```
