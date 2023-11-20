# Von-Neumann-Architecture

- Take Lc-3 for example

## Memory

- Address space $2^16$
  - means: there are $2^16$ block
- Addressability $2^16$
- Each block store 16-bit instruction
  - Each block represent by a Hexadecimal code
    - x0000
    - x0001
    - ....
  - Address 逐行递增
- Memory is store element

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Lc-3/Memory.png"/>

## ALU *Arithmetic Logic Unit*

- Funtion
  - ADD  {0 0}
  - AND  {0 1}
  - NOT A {1 0}
  - PASS A {1 1}

## Register *Register File*

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

## CU

IR Get the Instruction from Memory through PC's address

- PC *Program Counter*
  - It stores the next instruction address
  - In each clock, PC+=1
  - In x86 architecture also called IP *Instruction Pointer*
- IR *Instruction Register*
  - Current Instruction

## I/O
