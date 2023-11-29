# From Machine Language to Assembly Language

Assembler is a program that turns symbols into binary machine instructions.

## $Lc-_3$ Assembly language Synatex

- Each line of a program is one of the following:
  - an instruction
  - an assembler directive (or pseudo-op)
  - a comment
- Whitespace (between symbols) and case are ignored.
- Comments (beginning with “;”) are also ign

## $Lc-_3$ Assembly Language Instruction

LABEL OPCODE OPERANDS COMMENTS

- optional: Label, Comments
- mandatory: Opcode, Operands

## Opcode and Operands

- Opcodes:
  - reserved symbols that correspond to LC-3 instructions
  - example: ADD, AND, LD, LDR
- Operands：
  - Registers:$R_n$
  - Numbers: #(DEC) or x(HEX)
  - Label: symbolic name oof memory location

## Labels

placed  at the beginning of the line
assigns a symbolic name to the address corresponding to line

```assmbely
Loop ADD R1,R1,#-1
     Brp LOOP
```

## Comments

- Anything after a semincolon is comments
- Ignored by assembler
- Used by humans to document/ understand programs
- Tips for useful comments:
  - avoid restating the obvious, as “decrement R1”
  - provide additional insight, as in “accumulate product in R6”
  - use comments to separate pieces of program

## Assembler Directives

Pseudo-operations

- Do not refer to operations executed by program
- used by assembler
- look like instruction, but "opcode" starts whith dots

｜Opcode｜Operand｜Meaning｜
｜--｜--｜--｜
|.ORIG|address|starting address of program|
|.END||end of program|
|.BLKW|n|allocate n words of storage|
|.FILL|n|allocate one word,initializa with value n|
|.STRINGZ|n-character string|allocate n+1 locations, initialize w/characters and null terminator|
