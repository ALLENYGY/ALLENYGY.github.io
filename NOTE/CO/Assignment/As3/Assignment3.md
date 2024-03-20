# Assignment-3

## $I$
Suppose a 32-bit instruction takes the following format: (10 points)

If there are 225 opcodes and 120 general purpose registers

1. What is the minimum number of bits required to represent the OPCODE? Explain why. (2 points)

minimun number of bits to represent the opcode: 8 bits
There are 225 opcodes  $\ 2^8>225>2^7$
so we need at least 8 bits to represent the opcode

2. What is the minimum number of bits required to represent the Destination Register (DR)? Explain why. (2 points)

minimun number of bits to represent the : 7 bits
There are 120 General purpose registers $\ 2^7 \gt 120 \gt 2^6$
so we need at least 7 bits to represent the opcode

3. What is maximum number of UNUSED bits in the instruction encoding? Explain why. (2 points)

opcode: 8 bits
DR: 7 bits
SR1: 7 bits
SR2: 7 bits

Unused bits: 32-8-21= 3 bits

4. Suppose the address space contains $2^{16}$ memory locations and the addressability is 32 bits. How many bytes can the memory store in total?

There are $2^{18}$ bytes the memory can store in total.
$2^{18}=\frac{2^{16} \times 2^5}{2^3}$

5. How many address lines are necessary? How many data lines are necessary?

32 address lines are necessary
32 data lines are necessary

## $II$

The LC-3 does not have an opcode for the logical function OR. That is, there is no instruction in the LC-3 ISA that performs the OR operation. However, we can write a sequence of instructions to implement the OR operation. The four instruction sequence below performs the OR of the contents of register 1 and register 2 and puts the result in register 3. Fill in the two missing instructions so that the four instruction sequence will do the job.

(1): 1001 100 001 111111
(2): 1001 101 010 111111   $\ \ NOT\ R_5\ R_2\ 111111$
(3): 0101 110 100 000 101
(4): 1001 111 110 111111   $\ \ NOT\ R_7\ R_6\ 111111$

## $III$

Address X3010:  1110 0110 0011 1111
Address X3011:  0110 1000 1100 0000
Address X3012:  0110 1101 0000 0000

1. Explain what each instruction does. (6 points)

In the first instruction: $\ LEA\ R_3\ 000111111$
It firstly extend the 9 bits offset $000111111$ into 16 bits then add PC
x3F+x3011=x3050
$R_3$ <- x3050

In the second instruction: $\ LDR\ R_4\ R_3\ 000000$
It firstly extend the 6 bits offset $000000$ into 16 bits, then add the content store in register $R_3$, finally according the result of add operation find the address in memory then the content to the register $R_4$.

In the third instruction: $\ \ LDR\ R_6\ R_4\ 000000$
It firstly extend the 6 bits offset $000000$ into 16 bits, then add the content store in register $R_4$, finally according the result of add operation find the address in memory then the content to the register $R_6$.

2. What is that value to be loaded into R6? (2 points)

$LEA R_3 x3F$
$LDR R_4 R_3 x0$
$LDR R_6 R_4 x0$
$R_3 =$ X$3050$
$R_4 =$ X$70A4$
$R_6 =$ X$123B$

3. We could replace the three-instruction sequence with a single instruction. What is it?  Write the instruction in binary. (2 points)

$LDI\ R_6\ 001001001$
$1010 \ 1100\ 0100\ 1001$

## $IV$

Suppose the following LC-3 program is loaded into memory starting at location x30FF: (12 points)

1. Explain what each instruction does. (10 points)

x30FF 1110 001 00000001
$\ LEA\ R_1 000000001$
x3100 0110 010 001 000010
$\ LDR\ R_2 R_1 000010$
x3101 1111 0000 00100101
$\ TRAP\ 0000\ 00100101$
x3102 0001 010 001 000001
$\ ADD R_2 R_1 000 R_1$
x3103 0001 010 010 000010
$\ ADD R_2 R_2 000 R_2$

X30FF: Load x3100 to $R1$
X3100: M[R1+2]->R2 Load the value of M[R1+2]\(x1441) to R2
X3101: TRAP x25
X3102: R1+R1->R2 R2=x6200
X3103: R2+R2->R2 R2=xC400

2. If the program is executed, what is the value in R2 at the end of execution? (2 points)

$R2$=$C400$

## $V$

1. Construct the symbol table for the following LC-3 assembly language program. (10 points)

AGAIN x3002
ASCII x3009
NEG x300A
DSR x300B
DDR x300C

2. Assemble it into binary machine code line by line by hand. (30 points)

.ORIG 0011 0000 0000 0000
x3000 0010 0000 0000 1000
x3001 0010 0010 0000 1000
x3002 1010 0100 0000 1000
x3003 0000 0111 1111 1110
x3004 1011 0000 0000 0111
x3005 0001 0000 0010 0001
x3006 0001 0100 0000 0001
x3007 0000 1011 1111 1010
x3008 1111 0000 0010 0101
x3009 0000 0000 0100 0001
x300A 1111 1111 1011 0110
x300B 1111 1110 0000 0100
x300C 1111 1110 0000 0110

3. What does the program do? (10 points)

It print “ABCDEFGHI” on the console.
