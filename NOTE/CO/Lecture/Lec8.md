# Von-Neumann-Architecture

- Memory
- CPU
  - Register
  - ALU
  - CU
- I/O

Take Lc-3 for example
## Memory

- Address space $2^{16}$
  - means: there are $2^{16}$ block
- Addressability $16$
- Each block store 16-bit instruction
  - Each block represent by a Hexadecimal code
    - x0000
    - x0001
    - ....
  - Address 逐行递增
- Memory is store element
- Basic Operations
  - LOAD
    - read a value from a memory location
  - STORE
    - write a value to a memory location
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/Memory.png"/>

1. MAR: Memory Address Register (D flip-flops)
2. MDR: Memory Data Register (D flip-flops)
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/MAR-MDR.png"/>

## CPU

- The brain of the computer
- It is the part that actually executes the machine instructions
- Inside the CPU
  - Data path
    - Registers
  - Control Path
    - IR (instruction register), PC (program counter), FSM (finite state machine)

### Register *Register File*

- Register is store element
  - Achieved by D filp-flop
- 8 Register
  - Each register represent by 3 bit to record its address
    - 000 $R_0$
    - 001 $R_1$
    - 010 $R_2$
    - ...
    - 110 $R_6$
    - 111 $R_7$
- Source Register 1 $SR_1$
- Source Register 2 $SR_2$
- Destination Register $DR$

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/Register.png' alt='Register'/>

- Why register?
Closer to processing unit, allow quicker access to intermediate results instead of going to memory

### ALU *Arithmetic Logic Unit*

Perform arithmetic and logic operations (AND, NOT, ADD) on values stored in registers

- ADD  {0 0}
- AND  {0 1}
- NOT A {1 0}
- PASS A {1 1}

### CU

Control Unit: a finite state machine coordinates execution of the program
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/CU.png"/>
IR Get the Instruction from Memory through PC's address

- PC *Program Counter*
  - It stores the next instruction address
  - In each clock, PC+=1
  - In x86 architecture also called IP *Instruction Pointer*
- IR *Instruction Register*
  - Current Instruction
- Control Unit as a Finite State Machine
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/CU-FSM.png"/>

## I/O

- Devices for getting data into and out of memory
- Each device has its own interface, usually a set of registers like the memory’s MAR and MDR
  - keyboard: data register (KBDR) and status register (KBSR)
  - console: data register (DDR) and status register (DSR)

## Lc-3

- Finite state machine

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/FSM.png"/>

## Instruction

- The instruction is the most basic unit of computer processing.
- One instruction specifies two things:
  - opcode: operation to be performed
  - operands: data/locations to be used for operation
- An instruction is encoded as a sequence of bits (just like data!)
- Control unit interprets instruction
- A computer’s instructions and their formats is known as its Instruction Set Architecture (ISA).

### Lc-3's ADD Instruction

- opcode: 0001
- steering bit IR[5]

If IR[5]=0

```ISA
ADD DST SR1 000 SR2
0001 xxx xxx 000 xxx
```

- operands: Src1,Src2,Dst
  - Src1+Src2->Dst

If IR[5]=1

```ISA
ADD DST SR1 1 xxxxx
0001 xxx xxx 1 xxxxx
```

- operands: Src1,Dst,xxxxx
  - Src1+xxxxx->Dst

### LC-3's LDR Instruction

- opcode: 0110
- operands: Src,Dst

- Load the value in memory location Src into register Dst
- Move [Base + Offset] to Dst
- Load memory content at address (R3 + 6) to R2

```ISA
LDR DST SRC offset
0110 xxx xxx xxxxxx
```


