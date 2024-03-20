# Lab9

```assemble
.ORIG x3000
	LD R1, HELLO
	STI R1, TRAP_26
	TRAP x26
	HALT

HELLO .FILL x3006
TRAP_26 .FILL X0026
	
	ST R7, ADDRESS
	LEA R0 SHELLO
	PUTS
	LD R7, ADDRESS
	RET

ADDRESS .FILL x046A
SHELLO .STRINGZ "Hello, world!"
	.END 

```

- At first, loading the program that print hello's address to R1.
- Then using STI to load this address to x0026.
- Finally I can use trapx26 to print "Hello,world".
