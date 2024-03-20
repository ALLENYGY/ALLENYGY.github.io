# Problem
Select any ISA instruction you have learned in the class, and analyze the process of the fetch-decode-execution cycle step by step. It should contain change of the state and change of the registers values, and PC, IR, MAR and MDR.

## ADD

1. Fetch:
Load the address stored in the Program Counter (PC) into the Memory Address Register (MAR).
Send a "read" signal from MAR to memory to fetch the instruction.
Store the fetched instruction into the Instruction Register (IR).
Increment the Program Counter (PC) to point to the next instruction.
2. Decode:
Extract the opcode from the Instruction Register (IR).
Decode the opcode to recognize the instruction as an ADD operation.
3. Execute:
Fetch the source operands (Src1 and Src2) from the registers specified by the instruction's fields.
The Arithmetic Logic Unit (ALU) receives Src1 and Src2 values from the registers.
ALU performs the addition operation: ALU_result = Src1 + Src2.
Store the result (ALU_result) in the designated destination register (Dst).
