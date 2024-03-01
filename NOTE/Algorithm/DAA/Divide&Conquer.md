---
Create Time: 28th February 2024
Title: "[[Divide&Conquer]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - DC
---

# [[Divide&Conquer]] 

```puseudo
Algorithm DC(P):
	if sizeof(p) is small then:
		return sol(p)
	else:
		split p into p1, p2, p3, ...
	for i = 1 to n
		s1=DC(Pi)
	return combine(s1, s2, ...)  
```

$\frac{a_1(1-q^n)}{1-q}$

$Time\ Complex$ Example By 2
$$
T(n)=\begin{cases}  
2 & n\leq1\\
2\ T(\frac{n}{2})+2 \ &n>1  
\end{cases}
$$


$T(n) = 2\ T(\frac{n}{2})+2    \ n\leq1$
$T(n) = 2^2\ T(\frac{n}{4}+2)+2$
$T(n) = 2^i\ T(\frac{n}{2^i})+2^i+...+2$
$T(n) = 2^i\ T(\frac{n}{2^i})+ \frac{2(1-2^i)}{1-2}$
$T(n) = 2^i\ T(\frac{n}{2^i})+2^{i+1}-2$
$Let\ i =log_2n\ then:$
$T(n) = 2^{log_2n}T(\frac{n}{2^{log_2n}})+2^{1+log_2n}-2$
$T(n) = nT(1) + 2n-2$
$T(n) = 2n+ 2n -2$
$T(n) = 4n -2 = \theta(n) = O(n)$
---

$Time\ Complex$ Example By 2 and Solve it With n
$$
T(n)=\begin{cases}  
2 & n\leq1\\
2\ T(\frac{n}{2})+1+n \ &n>1  
\end{cases}
$$
$T(n) = 2\ T(\frac{n}{2})+1+n$
$T(n) = 2^2(T(\frac{n}{4})+\frac{n}{4}+1)+2$
$T(n) = 2^i T(\frac{n}{2^i})+in$
$Let\ i =log_2n \ \ then:$
$T(n) = 2^{log_2n}T(\frac{n}{2^{log_2n}})+(2^{1+log_2n}-2)n$
$T(n) = nT(1) + nlog_2n + n-1$
$T(n) = nlog_2n+3n-1$
$T(n) = \theta(nlogn) = O(nlogn)$
---

## **Maximum Contiguous Subarray Problem**

- Input: R = [1 ... n] is an array of n integers 
- Output: R = R [i...j] is a subarray of R, s.t.
	- A pair of two integer $1\leq i\leq j\leq n$ 
	- sum (R)=Sum(R[i...j]) is maximized
	- $\forall\ i', j',sum(R[i...j])\leq sum(R[i'...j'])$
- Respect to
	- sum(R[i...j])= $\sum_{s=i}^j R[s]$
- Maximum
	- $\forall R^{"} sum(R') \geq sum(R^{"})$
- Subarray of R

### **Algorithm ReuseDataMCS ( R )**
- Input: An array R of n integers
- Output: The value of MCS 
```python
VMAX = R[1],mi=0,mj=0
for i = 1 to N do 
	V = 0 
	for j = i to N do 
		// calculate V ( i, j )
		V = V + R [ j ] 
		if V > VMAX then 
			VMAX = V
			mi=i
			mj=j 
		end if
	end for
end for 
return VMAX
```

###  **MCS(R, i, j)**
- Input: `R[i...j]`
- Output: MCS of `R[i...j]`

```python
if i=j then:
	return R[i]
else:
	s1 = MCS(R,i,(i+j)/2)#下取整
	s2 = MCS(R,(i+j)/2+1,j)
	A = MaxSuffix(R,i,(i+j)/2) + MaxPreffix(R,(i+j)/2+1,j)
	return MAX(S1,S2,A)
end if
```

Cpp 解法

```cpp
class Solution {
public:
	int maxPreffix(vector<int>&nums,int i ,int j){
		int ans=nums[i];
		int tmp=0;
		for(;i<=j;i++){
			tmp+=nums[i];
			if(tmp>ans){
				ans=tmp;
			}
		}
		return ans;
	}
	int maxSuffix(vector<int>&nums,int i ,int j){
		int ans=nums[j];
		int tmp=0;
		for(;i<=j;j--){
			tmp+=nums[j];
			if(tmp>ans){
			ans=tmp;
			}
		}
		return ans;
	}
	int MSA(vector<int>&nums,int i ,int j){
		if(i==j){
			return nums[i];
		}
		else{
			int S1=MSA(nums,i,(i+j)/2);
			int S2=MSA(nums,(i+j)/2+1,j);
			int A = maxSuffix(nums,i,(i+j)/2)+maxPreffix(nums,(i+j)/2+1,j);
			return max({S1,S2,A});
		}
	}
	int maxSubArray(vector<int>& nums) {
		return MSA(nums,0,nums.size()-1);
	}
};
```