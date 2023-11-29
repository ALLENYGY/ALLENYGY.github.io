# Lab

## $I$

0011000000000000
1001001001111111
0001010001100001
0001010000000010

$ST$ $R_0$ X$0$
$NOT$ $R_1$ $R_1$
$ADD$ $R2$ $R1$ $\#1$
$ADD$ $R2$ $R0$ $R2$

## $II$

LEA R1, x2FFE
ADD R2, R1, #14
AND R2, R2, #0
ADD R2, R2, #5
STR R2, R1, #14
LDI R3, x2FFD

Firstly, it load x2FFE to R1
then ADD 14 to R1's content and store it into R2
then AND 0 with R2 and store its result to R2
then ADD 5 to R2 and store its result to R2
then Store R2's content to the address that is R1's content plus 14
finally x2FFD plus PC's content then find the address's content,using this content to find the address and load the content to R3
