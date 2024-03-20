---
Title: "[[Week-1]]"
Contest: lanqiao
tags: Contest
theme: 	简单填空题
Create Time: 2024-01-31
Author:
  - AllenYGY
---

# [[Week-1]]


[门牌号](https://www.lanqiao.cn/problems/592/learning/)
```cpp
#include <iostream>
using namespace std;
int main(){
	int count=0;
	for (int i = 0; i < 2021;i++){
		int num = i;
		while(num){
			if(num % 10 == 2) count++;
			num /= 10;
		}
	}
	cout<<count;
	return 0;
}
```
#Experience:
循环取模:
```cpp
int mode=0;
while(num){
	mode = num % 10;
	num /= 10;
}
```

[卡片](https://www.lanqiao.cn/problems/1443/learning/)
```cpp
#include <iostream>
#include <vector>
using namespace std;
int main(){
	vector<int> nums(10, 2021);
	for (int i = 1;; i++){
		int num = i;
		while (num){
			nums[num % 10] -= 1;
			if (nums[num % 10] < 0){	
				cout << i-1;
				return 0;
			}
			num /= 10;
		}
	}
	return 0;
}
```
#Experience 
注意边界：当碰到是用不了卡片的情况时，只能拼出上一张卡片
看到题解：新发现！把1消掉就结束了，感觉还是有点问题
[分数](https://www.lanqiao.cn/problems/610/learning/)
```cpp
#include <iostream>
#include <cmath>
using namespace std;
int main(){
	int a = pow(2,19);
	int b = 2*a-1;
	cout<<b<<"/"<<a;	
	return 0;
}
```
#Experience 
math库 pow(base, power)
以及分数用a/b表示
[日期问题](https://www.lanqiao.cn/problems/611/learning/)
#Experience 
闰年判断：
```cpp
if((x%4==0&&x%100!=0)||x%400==0) return 1;
else return 0;
```
[顺子日期](https://www.lanqiao.cn/problems/2096/learning/)
[修剪灌木](https://www.lanqiao.cn/problems/2107/learning/)
#Hint
假设点i刚被修剪完为0，然后会向右/向左跑一趟，端点会被遍历1次，i与端点间的点会被遍历两次 而重新修剪i的当天早上（因为是傍晚修剪，所以当天也会被算上）达到最大高度，然后置零 也就是说：
`最大长度=中间节点数*2+1（端点）+1（自生）==max(左边/右边节点数)*2` 
左边端点数：i-1 
右边端点数：n-i 
```cpp
#include <iostream>
using namespace std;  
int main() {
	int n; cin>>n; 
    for(int i = 1;i<=n;i++) cout<<max(i-1,n-i)*2<<endl; 
    return 0; 
}
```
[最少砝码](https://www.lanqiao.cn/problems/1461/learning/)
#Hint 
一个砝码最多称到1
两个砝码最多称到4
三个砝码最多称到13
推出公式为：新一级的砝码最大称重=上一级砝码上限 × 3 + 1
```cpp
#include <iostream>
using namespace std;
int main(){
	int N=0;
	cin>>N;
	int sum=0;
	for(int i=1;i>0;i++){
		sum=sum*3+1;
		if(N<=sum){
			cout<<i;
			break;
		}
	}
	return 0;
}
```



