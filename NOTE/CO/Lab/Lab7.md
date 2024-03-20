# Lab7

Assembling the following assembly program first by hand and then verify your result using the assembler. Write a report describe the assembling process. Your report file should include the symbol table and the machine code in binary for the assembly code and other related information to describe the assembling process.

```assembly
.ORIG x3050
LD R1,SIX
LD R2,NUMBER
AND R3,R3,#0
AGAIN ADD R3,R3,R2
      ADD R1,R1,#-1
      BRp AGAIN
HALT
NUMBER .FILL #1
SIX .FILL x0006
.END
```

x3050  x2207 LD R1, SIX
x3051  x2405 LD R2, NUMBER
x3052  x56E0 AND R3, R3, #0
x3053 AGAIN x16C2 ADD R3, R3, R2
x3054  x127F  ADD R1, R1, \#-1
x3055  x03FD  BRp AGAIN
x3056  xF025  HALT
x3057 NUMBER  x0001
x3058 SIX x0006

- Symbol table

|Symbol Name|Page Address|
|---|---|
|AGAIN |x3053|
|NUMBER|x3057|
|SIX   |x3058|

- Machine code
0011 0000 0000 0000
x3050 0010 0010 0000 0111
x3051 0010 0100 0000 0101
x3052 0101 0110 1110 0000
x3053 0001 0110 1101 0010
x3054 0001 0010 0111 1111
x3055 0000 0011 1111 1101
x3056 1111 0000 0010 0101
x3057 0000 0000 0000 0001
x3058 0000 0000 0000 0110

- Process add R2 6 times, and store the result in R3
- R3 = 6
