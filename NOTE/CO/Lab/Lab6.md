# Lab

## $I$

What does the following code? (There are 3 instructions.)

0011000000000000
1001001001111111
0001010001100001
0001010000000010

$NOT$ $R_1$ $R_1$
$ADD$ $R2$ $R1$ $\#1$
$ADD$ $R2$ $R0$ $R2$

## $II$

Input the following code and try to understand what it does by executing it step by step. (There are 6 instructions.)

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

## $III$

Write a LC3 machine code program to print out “Hello World!”. Hint: consider to use Trap instruction PUTS.

1110 0000 0000 0010
1111 0000 0010 0010
1111 0000 0010 0101
0000 0000 0100 1000
