# Assignment-4

## $I$

Answer:

1. R1 is not to be set to zero. R1 will not be detected at assembly or run time.
2. 'SUM' is not a valid numeric literal, and it is also not in the symbol table either. This error will be detected in assembly

## $II$

Answer:

In this program, if the numbers that start in Memory[x4000] end with numbers 0, smaller than x8000(32768)， then it will be multiplied by two. Otherwise, it will not be changed.

## $III$

Ans:
```assemble
      .ORIG x3000 
      AND R2,R2,#0
      LD R1,DIVIDND
      NOT R1,R1
      ADD R1,R1,#1
      LD R3,DIVISOR
LOOP  ADD R3,R3,R1
      BRn DONE
      ADD R2,R2,#1
      BRnzp LOOP
DONE  LD R4,DIVIDND
      ADD R3,R4,R3
      LEA R0, Info
      PUTS
      HALT
DIVISOR .FILL #30
DIVIDND .FILL #100
Info .STRINGZ "Example: R1 = 30, R6 = 100. Therefore 100/30, R2 = 3 and R3 = 10."
    .END
```

## $IV$

Answer:

- **Interrupts:** Using interrupts for handling I/O provides the advantage of allowing the processor to perform other tasks while waiting for I/O operations to complete. When an I/O device has finished its operation, it triggers an interrupt, allowing the CPU to immediately handle the data transfer or task associated with the I/O device. This approach is more efficient as it doesn't waste CPU cycles continuously checking the status of the I/O device.

- **Polling:** Polling involves the CPU constantly checking the status of an I/O device to determine if it needs attention or has completed its task. It's simpler to implement but can be less efficient than using interrupts because it ties up the CPU in a loop, consuming processing power even when the I/O device doesn't need immediate attention. Polling might be used in scenarios where the hardware doesn't support interrupts or when the overhead of handling interrupts is too high compared to the frequency of I/O operations.

## $V$

Answer:

The last instruction in the interrupt service program is usually "RTI" (opcode 1000). It returns from the Interrupt Pops PSR and PC of the Supervisor stack, recovering the conditional code from the PSR. If necessary (i.e., if the current permission mode is User), revert from Saved.USP to a user stack pointer to R6.
