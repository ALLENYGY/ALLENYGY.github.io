---
Create Time: 28th February 2024
Title: "[[Union-Find]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - DataStructure
  - UnionFind
---

# [[Union-Find]]^[并查集]
  
- 用于解决元素分组问题

- 联通问题

- 操作

- 合并 (Union)

- 查询 (Find)

  

## 初始化

  

- 初始化时每个元素各成一个集合

- fa[i] 即指向 ---〉i 所在集合的代表元素

  

```cpp
int fa[MAXN];
void init(int n){
	for (int i = 1; i <= n; ++i)
		fa[i] = i;
}
```

  

## 查询

- 每个集合只能有一个代表元素
- 故查询时回溯至找到代表元素是停止
- find(x) 应定义为x元素的所在集合的代表元素

```cpp
int find(int x){
	if(fa[x] == x)
		return x;
	else
		return find(fa[x]);
}
```

  

## 合并

- 合并的基本逻辑是另一个集合的代表元素变成另一个集合的代表元素
- 分解操作
	- `find(i)` i元素所在集合的代表元素
	- `fa[i]` 即指向 ---〉集合的代表元素
	- `find(j)` j元素所在集合代表元素
  
> 找到i元素所在集合的代表元素 使该元素的代表元素指向 j元素的代表元素

```cpp
void merge(int i, int j){
	fa[find(i)] = find(j);
}
```

  

## 优化 -- 路经压缩

- 令所有节点都指向同一个父节点

```cpp
int find(int x){
	if(x == fa[x])
		return x;
	else{
		fa[x] = find(fa[x]); //父节点设为根节点
		return fa[x]; //返回父节点
	}
}

int find(int x){
	return x == fa[x] ? x : (fa[x] = find(fa[x]));
}
```

  

## 优化 -- 按秩合并

- 初始化

```cpp
void init(int n){
	for (int i = 1; i <= n; ++i){
		fa[i] = i;
		rank[i] = 1;
	}
}
```

- 合并

```cpp
void merge(int i, int j){
	int x = find(i), y = find(j); // * 先找到两个根节点
	if (rank[x] <= rank[y])
		fa[x] = y;
	else
		fa[y] = x;
	if (rank[x] == rank[y] && x != y)
		rank[y]++; // * 如果深度相同且根节点不同，则新的根节点的深度+1
	}
```

  

## Union-Find

  
```cpp
class Ufds {

private:
	vector<int> parents;
	vector<int> ranks;
public:
	Ufds(int n) {
		parents.resize(n);
		ranks.resize(n);
		for (int i = 0; i < n; i++) {
			parents[i] = i;
			ranks[i] = i;
		}
	}
	int findSet(int a) {
		if (parents[a] != a) {
			parents[a] = findSet(parents[a]);
		}
		return parents[a];
	}
	void unionSets(int a, int b) {
		a = findSet(a);
		b = findSet(b);
		if (a == b) return;
		if (ranks[a] < ranks[b]) {
			int temp = a;
			a = b;
			b = temp;	
		}
		parents[b] = a;
		ranks[a]++;	
	}
	};
```

  

## 亲戚问题

  

### 题目背景

  

若某个家族人员过于庞大，要判断两个是否是亲戚，确实还很不容易，现在给出某个亲戚关系图，求任意给出的两个人是否具有亲戚关系。

  

### 题目描述

  

规定：$x$ 和 $y$ 是亲戚，$y$ 和 $z$ 是亲戚，那么 $x$ 和 $z$ 也是亲戚。如果 $x$，$y$ 是亲戚，那么 $x$ 的亲戚都是 $y$ 的亲戚，$y$ 的亲戚也都是 $x$ 的亲戚。

  

### 输入格式

  

第一行：三个整数 $n,m,p$，（$n,m,p \le 5000$），分别表示有 $n$ 个人，$m$ 个亲戚关系，询问 $p$ 对亲戚关系。

  

以下 $m$ 行：每行两个数 $M_i$，$M_j$，$1 \le M_i,~M_j\le N$，表示 $M_i$ 和 $M_j$ 具有亲戚关系。

  

接下来 $p$ 行：每行两个数 $P_i,P_j$，询问 $P_i$ 和 $P_j$ 是否具有亲戚关系。

  

### 输出格式

  

$p$ 行，每行一个 `Yes` 或 `No`。表示第 $i$ 个询问的答案为“具有”或“不具有”亲戚关系。

  

### 样例 #1

  

#### 样例输入 #1

  

```txt

6 5 3

1 2

1 5

3 4

5 2

1 3

1 4

2 3

5 6

```

  

#### 样例输出 #1

  

```txt

Yes

Yes

No

```

  

## CODE

  

```cpp

#include <cstdio>

#define MAXN 5005

int fa[MAXN], rank[MAXN];

inline void init(int n)

{

for (int i = 1; i <= n; ++i)

{

fa[i] = i;

rank[i] = 1;

}

}

int find(int x)

{

return x == fa[x] ? x : (fa[x] = find(fa[x]));

}

inline void merge(int i, int j)

{

int x = find(i), y = find(j);

if (rank[x] <= rank[y])

fa[x] = y;

else

fa[y] = x;

if (rank[x] == rank[y] && x != y)

rank[y]++;

}

int main()

{

int n, m, p, x, y;

scanf("%d%d%d", &n, &m, &p);

init(n);

for (int i = 0; i < m; ++i)

{

scanf("%d%d", &x, &y);

merge(x, y);

}

for (int i = 0; i < p; ++i)

{

scanf("%d%d", &x, &y);

printf("%s\n", find(x) == find(y) ? "Yes" : "No");

}

return 0;

}

  

## 婴儿的名字

  

```

每年，政府都会公布一万个最常见的婴儿名字和它们出现的频率，也就是同名婴儿的数量。有些名字有多种拼法，例如，John 和 Jon 本质上是相同的名字，但被当成了两个名字公布出来。给定两个列表，一个是名字及对应的频率，另一个是本质相同的名字对。设计一个算法打印出每个真实名字的实际频率。注意，如果 John 和 Jon 是相同的，并且 Jon 和 Johnny 相同，则 John 与 Johnny 也相同，即它们有传递和对称性。

  

在结果列表中，选择 **字典序最小** 的名字作为真实名字。

  

**示例：**

  

```IO

输入：names = ["John(15)","Jon(12)","Chris(13)","Kris(4)","Christopher(19)"], synonyms = ["(Jon,John)","(John,Johnny)","(Chris,Kris)","(Chris,Christopher)"]

输出：["John(27)","Chris(36)"]

```

  

**提示：**

  

- $names.length <= 100000$

  

```cpp

class Solution {

private:

unordered_map<string, string> parent;

unordered_map<string, int> frequency;

  

string find(string x) {

if (parent.find(x) == parent.end())

return x;

if (parent[x] != x)

parent[x] = find(parent[x]);

return parent[x];

}

  

void merge(string i, string j) {

string x = find(i);

string y = find(j);

if (x==y) return;

if (x < y) {

parent[y] = x;

frequency[x] += frequency[y];

frequency[y] = 0;

}

else{

parent[x]=y;

frequency[y]+=frequency[x];

frequency[x]=0;

}

}

  

public:

vector<string> trulyMostPopular(vector<string>& names, vector<string>& synonyms) {

// Parse and initialize frequencies

for (const string& name : names) {

int pos = name.find('(');

string nameStr = name.substr(0, pos);

int freq = stoi(name.substr(pos + 1, name.size() - pos - 2));

parent[nameStr] = nameStr;

frequency[nameStr] = freq;

}

  

// Process synonyms

for (const string& synonym : synonyms) {

int pos = synonym.find(',');

string name1 = synonym.substr(1, pos - 1);

string name2 = synonym.substr(pos + 1, synonym.size() - pos - 2);

merge(name1, name2);

}

  

// Build the result

vector<string> result;

for (auto& entry : frequency) {

string name = entry.first;

int freq = entry.second;

if (name == find(name)) {

string nameFreq = name + "(" + to_string(freq) + ")";

result.push_back(nameFreq);

}

}

  

return result;

}

};

```