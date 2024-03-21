---
Title: "[[ISA]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - CO
  - Lec9
created: 2023-11-20T21:25
updated: 2024-03-21T18:55
---


# [[ISA]]

- ISA specifies what hardware does, but not how
  - ISA defines the instruction code
- Microarchitecture specifies how it does it
  - Microarchitecture determine how it work it
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/ISA_overview.png"/>

The ISA specifies all the information about the computer that the software has to know.

- Memory
  - Address space (how many locations?)
  - Addressability (word or byte, word size)
- Registers
  - Number (how many?)
  - Type
- Instructions
  - Operations
  - Data types
  - Addressing modes

## Lc-3

- Lc-3 is a finite state machine
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/FSM.png"/>

## Lc-3 Memory Organization

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

## Registers

- features:
Special storaqge devices that are inside the GPU.
Fast to access 1 clock cycle
General Purpose Register *GPR*: accessible instructions

- Register is store element
  - Achieved by D filp-flop

- Register File
  - 8 GPRs
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

- Other special purpose registers:
  - MAR,MDR
  - PC,IR
  - Condition codes: P,Z,N
  - KBDR,KBSR,DDR,DSR

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/Register.png' alt='Register'/>

## Instruction

- Opcode *What the instruction does*
- Operands *What the operation acts on*

In Lc-3

- 4 bits opcode (15)
- 2 Sources and 1 destination
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/instruction.png"/>

### Opcodes & Operations

#### Opcodes

##### Operate instructions *Manipulate data directly*

- 'Immediate' addressing mode

- ADD 0001
- AND 0101

```ISA
---- --- --- --- ---
ADD  DST SR1 000 SR2
0001 xxx xxx 000 xxx

---- --- --- --- ---
AND  DST SR1 000 SR2
0001 xxx xxx 000 xxx
```

When string bit is 0 the addressing mode is "register mode"
Otherwise is "immediate mode"

```ISA
---- --- --- - -----
ADD  DST SR1 1 Imm5
0001 xxx xxx 1 Imm5

---- --- --- - -----
AND  DST SR1 1 Imm5
0001 xxx xxx 1 Imm5
```

Imm5 is a const integer and imm5 will be extend to 16 bits when it be calcuted.

- subtract
  - 2's complement
- OR
  - $\overline{\overline{A}\ \overline{B}}$
- Set Zero
  - AND 0000 0000 0000 0000

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/AND-ADD_imm5.png"/>

- NOT 1001 *Register Addressing mode*

```ISA
---- --- --- -------
NOT  DST SRC 111111
1001 Reg Reg 111111
```

##### Data Movement instructions *Move data between memory and registers(CPU)*

- Load *read data from memory to register*
  - LD 0010 *direct mode*
  - LDI 1010 *base+offset mode*
  - LDR 0110 *indirect mode*
- Store *write data from register to memory*
  - ST 0011 *direct mode*
  - STI 1011 *base+offset mode*
  - STR 0111 *indirect mode*

- Load effectively address *compute address*
  - LEA 1110 *immediate mode* - does not access memory

```ISA
---- ---   ----------
LEA  DR/SR addr.gen.bits
1110 DR/SR addr.gen.bits
```
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/LEA_address_mode.png"/>

##### Control instructions *Change the sequence of instruction execution*
  
- BR 0000
- JMP/RET 1100
- JSR/JSSR 0100
- RTI 0111
- TRAP 1111

#### Data Types

- 2's complement integers

#### Condition Codes

- 3 single bit registers (set to 1 or cleared to 0)
  - N: when value written was negative
  - Z: when value written was zero
  - P: when value written was positive
- Affected each time any register is written
- Condition codes are read by conditional branch instructions

## Addressing Modes

5 addressing modes

- Explicitly in the instruction itself *立即寻址*
- In register *寄存器寻址*
- In memory *内存寻址*
  - Pc-relative mode: $addr.=PC+offset$
  - Base+offset mode: $addr.=\ base\ register\{R_0\dots R_7\} + offset$
  - Indirect mode: the address of a location that contains the address of the operand (indirect)

### PC-Relative Mode *Direct mode* *直接寻址*

- LD
  - opcode 0010
  - effective address=(PC)+SEXT(IR[8:0])

```ISA
---- ---  ---------
LD   Dst  
0010 Reg  
```
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/lc-3/LD_address_mode.png"/>

- ST
  - Opcode 0011
  - effective address=(PC)+SEXT(IR[8:0])

```ISA
---- ---  ----------
ST   Dst  
0011 Reg  
```

- offset 9 bits

operand must be within 256 locations of the instruction

### Base+Offset Mode

- LDR
  - opcode 0110
  - effective address = (BaseRegister)+offset

```ISA
---- ---  ---   ------
LDR  Dst  BaseR offset
0110 Reg  Reg
```

- offset 6 bits

Base+offset can address any location in memory
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/LDR_address_mode.png"/>

- STR
  - opcode 0111
  - effective address = (BaseRegister)+offset

```ISA
---- ---  ---   ------
STR  Dst  BaseR offset
0111 Reg  Reg
```

### Indirect Addressing Mode

- An address is first formed exactly the same way as with LD and ST
- This address contains the address of the operand.
- Just like base+offset, indirect mode can also address any location in the memory.
- Memory has to be accessed twice in order to get the address of the operand

- LDI
  - opcode 1010
  - pointer address = (PC) + SEXT(IR[8:0])
  - effective address = Mem[(PC)+SEXT(IR[8:0])]

```ISA
---- ---  ---------
LDI  Dst  Addr.Gen.bits
1010 Reg  Addr.Gen.bits
```
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/LDI_address_mode.png"/>

- STI
  - opcode 1011
  - pointer address = (PC) + SEXT(IR[8:0])
  - effective address = Mem[(PC)+SEXT(IR[8:0])]

## Control Instructions

- Lc-3 has 3 conditional code registers
  - N negative
  - Z zero
  - P positive
- set by any instruction that stores a value to a register
  - ADD,AND,NOT,LD,LDR,LDI,LEA

- BR
  - opcode 0000

```ISA
---- --- ---------
BR   NZP offset
0000 NZP offset
```

when condition is satisfied PC=PC+offset
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/BR_DataPath.png"/>

- JMP *jump* OR *goto*
  - opcode 1100

```ISA
---- --- ---   ------
JMP  000 BaseR 000000
1100 000 Reg   000000
```

unconditional jump
PC jump to Reg

- TRAP *Invoke a system routine*
  - opcode 1111

```ISA
---- ---- --------
TRAP 0000 trapvec
1111 0000
```

PC is set to the instruction TRAP
