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


```pseudo
\begin{algorithm}
\caption{Algorithm Divide and Conquer}
\begin{algorithmic}
    \If{$\text{sizeof}(P)$ is small}
        \State \Return $\text{sol}(P)$
    \Else
        \State Split $P$ into $P_1, P_2, P_3, \ldots$
        \For{$i \gets 1$ to $n$}
            \State $s_i \gets \text{DC}(P_i)$
        \EndFor
        \State \Return $\text{combine}(s_1, s_2, \ldots)$
    \EndIf
\end{algorithmic}
\end{algorithm}
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

```pseudo
\begin{algorithm}
	\caption{Maximum Contiguous Subarray Problem \{Brute Force Reuse Data\}}
	\begin{algorithmic}
		\STATE $VMAX = R[1]$
		\STATE $m_i = 0$
		\STATE $m_j = 0$
		\FOR{$i = 1$ \TO $N$}
		    \STATE $V = 0$
		    \FOR{$j = i$ \TO $N$}
		        \STATE \COMMENT{calculate $V(i, j)$}
		        \STATE $V = V + R[j]$
		        \IF{$V > VMAX$}
		            \STATE $VMAX = V$
		            \STATE $m_i = i$
		            \STATE $m_j = j$
		        \ENDIF
    		\ENDFOR		
		\ENDFOR
		\RETURN $VMAX$
	\end{algorithmic}
\end{algorithm}
```

###  **MCS(R, i, j)**
- Input: `R[i...j]`
- Output: MCS of `R[i...j]`

```pseudo
\begin{algorithm}
	\caption{Maximum Contiguous Subarray Problem}
	\begin{algorithmic}
	
	\If{$i = j$}
	    \State \Return $R[i]$
	\Else
	    \State $s1 \gets \text{MCS}(R, i, \lfloor(i+j)/2\rfloor)$ \Comment{Using floor function for lower rounding}
	    \State $s2 \gets \text{MCS}(R, \lfloor(i+j)/2\rfloor + 1, j)$
	    \State $A \gets \text{MaxSuffix}(R, i, \lfloor(i+j)/2\rfloor) + \text{MaxPrefix}(R, \lfloor(i+j)/2\rfloor + 1, j)$
	    \State \Return $\text{MAX}(s1, s2, A)$
	\EndIf
	
	\end{algorithmic}
\end{algorithm}
```

- Cpp 解法

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

## **Polynomial Multiplication**

Definition: A x B
$C=C_0+c_1x+...+C_{n+m}x^{n+m}$ is the multiplication of A x B s.t
$$C_k=\sum_{0\leq i,j\leq k} a_i b_i\$$$
$$(i+j=k)$$
$$0\leq k\leq n+m$$

- Brute Force $O(n^2)$

### **Divide and Conquer**

 ```pseudo
	\usepackage{amsmath}
    \begin{algorithm}
		\caption{Polynomial Multi1($A(x),B(x)$)}
	    \begin{algorithmic}
			\IF{$n=0$}
			    \RETURN $a_0 \times b_0$
			\ELSE
	    		\STATE $A_0(x) = a_0 + a_1x + \dots + a_{\lfloor \frac{n}{2} \rfloor - 1}x^{\lfloor \frac{n}{2} \rfloor -1}$
		    	\STATE $A_1(x) = a_{\lfloor \frac{n}{2} \rfloor} + a_{\lfloor \frac{n}{2} \rfloor +1}x + \dots + a_nx^{n-\lfloor \frac{n}{2} \rfloor}$
		    	\STATE $B_0(x) = b_0 + b_1x + \dots + b_{\lfloor \frac{n}{2} \rfloor - 1}x^{\lfloor \frac{n}{2} \rfloor -1}$
		    	\STATE $B_1(x) = b_{\lfloor \frac{n}{2} \rfloor} + b_{\lfloor \frac{n}{2} \rfloor +1}x + \dots + b_nx^{n-\lfloor \frac{n}{2} \rfloor}$
		    	\STATE $U(x) = \text{PolyMult1}(A_0(x), B_0(x))$
		    	\STATE $V(x) = \text{PolyMult1}(A_0(x), B_1(x))$
		    	\STATE $W(x) = \text{PolyMult1}(A_1(x), B_0(x))$
		    	\STATE $Z(x) = \text{PolyMult1}(A_1(x), B_1(x))$
		    	\RETURN $U(x) + (V(x) + W(x))x^{\lfloor \frac{n}{2} \rfloor} + Z(x)x^{2\lfloor \frac{n}{2} \rfloor}$
			\ENDIF
		\end{algorithmic}	
    \end{algorithm}
```

- Time Complexity
$Time\ Complex$ Example By 2
$$
T(n)=\begin{cases}  
2 & n=0\\
5\ +4T(\frac{n}{2})+3cn \ &n>0  
\end{cases}
$$