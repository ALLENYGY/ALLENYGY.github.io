---
Create Time: 4th March 2024
Title: "[[Assignment-0]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - DAA
  - Assignment
---

# [[Assignment-0]]

## Question-1

For Euclidean Algorithm to find GCD
1. Define the problem solved by the algorithm (6pt)
	- Input: 2 positive integer A,B
	- Output: A positive integer that is Greatest Common Divisor of A and B
2. Give a high-level presentation of the algorithm (6pt)
	- Divide the larger number by the smaller number, then remove the divisor by the remainder that occurs (the first remainder), then remove the first remainder by the remainder that occurs (the second remainder), and so on until the final remainder is zero. If you are finding the greatest common divisor of two numbers, then the final divisor is the greatest common divisor of those two numbers.
3. Write the pseudo code (8pt)

```pseudo
\begin{algorithm}
	\caption{Euclidean Algorithm}
	\begin{algorithmic}
		\WHILE{$B \neq 0$}
	    	\STATE $temp \gets B$
	    	\STATE $B \gets a \bmod b$
	    	\STATE $A \gets temp$
		\ENDWHILE
		\RETURN $A$
	\end{algorithmic}
\end{algorithm}
```

## Question-2

- Input: A task t
- Output: "Yes" or "No"

```pseudo
\begin{algorithm}
\caption{Task Work Procedure}
\begin{algorithmic}
    \If{\Call{atomic}{$t$}}
        \State \Return \Call{accomplishable}{$t$}
    \EndIf
    \State $subtasks \gets$ \Call{destruct}{$t$}
    \For{each $subtask$ in $subtasks$}
        \If{\Call{work}{$subtask$} == ``No''}
            \State \Return ``No''
        \EndIf
    \EndFor
    \State \Return ``Yes''
\end{algorithmic}
\end{algorithm}
```

## Question-3

$T(n)=\begin{cases} 1 & n\leq1\\ T(\frac{n}{2})+1 \ &n>1  \end{cases}$

$T(n)=T(\frac{n}{2})+1 =T(\frac{n}{4})+2 =T(\frac{n}{8})+3$
$T(n)=T(\frac{n}{2^i})+i$
$Let\ 2^i=n$
$\therefore T(n)=T(1)+log_2n$
$\therefore T(n)=log_{2n}=\theta(logn)$

- Verification: 
- The array A is known to be in ascending order and the length of the array is n.  When we search for the target number x, we compare it with the middle element of the array. 
	- If $x == A[\lfloor \frac{n}{2} \rfloor]$, the target number is found;
	- if $x < A[\lfloor \frac{n}{2} \rfloor]$, the search needs to be narrowed down, the search needs to be done in the array containing elements from $A[0]$ to $A[\lfloor \frac{n}{2} \rfloor-1]$; 
	- if $x > A[\lfloor \frac{n}{2} \rfloor]$, the search needs to be done in the array containing elements from $A[\lfloor \frac{n}{2} \rfloor+1]$to $A[n - 1]$.

## Question-4

$f(0)=11, f(1)=23$
$f(2)=f(0)+f(1)=34, f(3)=f(1)+f(2)=57$
...
$f(12)=f(10)+f(11)=4291$
$f(13)=f(11)+f(12)=6943$

$When\ x= 13$
$f(13)=6943<2^{13}=8192$
$Suppose\ f(x)<2^x$ 
$Then\ we\ just\ need\ to\ prove\ f(x+1)<2^{x+1}$

$\because f(x+1)=f(x)+f(x-1)$
$\because f(x+1)<f(x)<2^x$
$\therefore f(x+1)=f(x)+f(x-1)<2^x+2^x=2^{x+1}$

## Question-5

The main goal of algorithm analysis is to understand the rate at which an algorithm's running time or space requirement grows with input size. Although multiplication has a slower running time than addition, it does not affect the overall time complexity in general.