## Binary Enumeration *二进制枚举*

枚举 $1 - (2^n-1)$

自右向左取
```cpp
for(int i = 1; i < (1 << n) ; ++i){
	for(int j = 0 ; j < n ; ++j){
		if( i & (1 << j )){ 
		}
	}
}
```
自左向右取

```cpp
for(int i = 1; i < (1 << n); ++i){
	for(int j = 0 ; j < n ; ++j){
		if( (i >> n ) & 1){
		}
	}
}
```

##  例题

[射箭比赛中的最大得分](https://leetcode.cn/problems/maximum-points-in-an-archery-competition/)

