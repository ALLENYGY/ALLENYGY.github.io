---
Create Time: 4th March 2024
Title: "[[Tutorial-1]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - DAA
  - Tutorial
---

# [[Tutorial-1]]

## Question1

Given the problem: “For the given positive integer, justify if it is a prime.”

1. Formally define the problem

2. Give some instances and corresponding outputs

3. Construct an algorithm and describe it with/without using pseudo code

- Input: a positive integer n
- Output: Yes, if n is a prime; No, Otherwise
```pseudo
begin
	for a =2 to |n^0.5| do
		\if {$n%a=0} then
			return No
		end if
	end for
	return Yes
end
```



```pseudo
    \begin{algorithm}
    \caption{Quicksort}
    \begin{algorithmic}
      \PROCEDURE{Quicksort}{$A, p, r$}
        \IF{$p < r$}
          \STATE $q = $ \CALL{Partition}{$A, p, r$}
          \STATE \CALL{Quicksort}{$A, p, q - 1$}
          \STATE \CALL{Quicksort}{$A, q + 1, r$}
        \ENDIF
      \ENDPROCEDURE
      \PROCEDURE{Partition}{$A, p, r$}
        \STATE $x = A[r]$
        \STATE $i = p - 1$
        \FOR{$j = p$ \TO $r - 1$}
          \IF{$A[j] < x$}
            \STATE $i = i + 1$
            \STATE exchange
            $A[i]$ with $A[j]$
          \ENDIF
        \STATE exchange $A[i]$ with $A[r]$
        \ENDFOR
      \ENDPROCEDURE
      \end{algorithmic}
    \end{algorithm}
```
