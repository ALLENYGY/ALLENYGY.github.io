# *From Gates to Circuits I: Combinational Circuits*

## *Basic Building Blocks* *基本构造模块*

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Basic-Building-Blocks.png"/>

- AND/NAND
- OR/NOR/XOR
- NOT

3 representations logically equivalent to one another

1. Truth table
2. Logic expression
3. Logic circuit

## *Integrated Circuits (IC)*

The integration of large numbers of tiny transistors into a small chip

- Two Types of Circuits
  - Combinational logic circuits *组合逻辑电路*
  - Sequential logic circuits *时序逻辑电路*
  
## *Combinational Circuit*

- Circuit with no memory *无内存*
- Multiple inputs, multiple outputs, one Boolean function for each output
- Abstracted as a package or a black box *可抽象成黑箱*
- Implementation described by one of
  - n-input-, m-output-column truth table
  - boolean function for each output variable
  - logic diagram (possibly using other packages)

## *Half Adder* ***半加器***

Only add two single bits together (a, b), s is the sum and c is the carry bit
*仅实现两个单bit二进制加法*
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Half-Adder.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Half-Adder-Circuit.png"/>

**Half Adder**:
半加器用于对两个单比特（二进制位）进行加法运算，产生两个输出结果：和（Sum）和进位（Carry）。
    - 输入：两个待相加的二进制位 $A,B$
    - 输出：
        - 和（Sum）: $A \bigotimes B$即A和B的异或结果，表示当前位相加的结果。
        - 进位（Carry）：$A ∧ B$，即A和B的与运算结果，表示当前位相加是否产生进位。

## *Full Adder* ***全加器***

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Full-Adder-Circuit.png"/>
<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Full-Adder.png"/>

**Full Adder**:
全加器用于对三个单比特（二进制位）进行加法运算，包括两个输入位（A和B）和上一位的进位（Cin），产生两个输出结果：和（Sum）和新的进位（Carry）。
    - 输入：三个待相加的二进制位（A、B和Cin）。
    - 输出：
        - 和（Sum）：(A ⊕ B) ⊕ Cin，即当前位相加的结果，考虑了上一位的进位。
        - 进位（Carry）：(A ∧ B) ∨ ((A ⊕ B) ∧ Cin)，表示下一位相加是否产生进位，综合考虑了当前位和上一位的进位。

- 半加器处理两个输入位的加法运算，产生Sum和Carry
- 全加器处理三个输入位的加法运算，产生 和（Sum）和新的进位（Carry），能够考虑前一位的进位情况

## *4-bit Adder*

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/4-bit-adder.png"/>