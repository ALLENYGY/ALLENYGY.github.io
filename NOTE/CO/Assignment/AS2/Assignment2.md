# Assignment-2

## $I$

For the following transistor-level circuit, fill in the truth table. What is the logical expression of Z in terms of A and B? (12 points)

$Z=\overline{\overline A \ \overline B}=AB$

| $A \ B$|$C \ D \ Z$|
|--------|--------------|
|$ 0 \ 1$|$ \ 1 \ 0 \ 0$|
|$ 0 \ 0$|$ \ 1 \ 1 \ 0$|
|$ 1 \ 1$|$ \ 0 \ 0 \ 1$|
|$ 1 \ 0$|$ \ 0 \ 1 \ 0$|

## $II$

Fibonacci numbers are the sequence of numbers Fn defined by the linear recurrence equation $F_{n} = F_{n-1} + F_{n-2}$ where $F_{1} = F_{2} = 1$. It is conventional to define $F_0 = 0$. Given a word size of four bits, design a circuit to detect if a given input binary number $I_3I_2I_1I_0$ is a Fibonacci number or not. Show the following steps: (20 points)

1. Truth Table

|$I_3$|$I_2$|$I_1$|$I_0$|$isF$|
|-----|-----|----|-----|-----|
|0|0|0|0|1|
|0|0|0|1|1|
|0|0|1|0|1|
|0|0|1|1|1|
|0|1|0|0|0|
|0|1|0|1|1|
|0|1|1|0|0|
|0|1|1|1|0|
|1|0|0|0|1|
|1|0|0|1|0|
|1|0|1|0|0|
|1|0|1|1|0|
|1|1|0|0|0|
|1|1|0|1|1|
|1|1|1|0|0¡¡|
|1|1|1|1|0|

2. Sum of Product

$$(\overline{I_3} \ \overline{I_2} \ \overline{I_1} \ \overline{I_0}) +(\overline{I_3} \ \overline{I_2} \ \overline{I_1} \ {I_0})
+(\overline{I_3} \ \overline{I_2} \ {I_1} \ \overline{I_0})
+(\overline{I_3} \ \overline{I_2} \ {I_1} \ {I_0})
+(\overline{I_3} \ {I_2} \ \overline{I_1} \ {I_0})
+({I_3} \ \overline{I_2} \ \overline{I_1} \ \overline{I_0})
+({I_3} \ {I_2} \ \overline{I_1} \ {I_0})
$$

3. Simplify the logical expression using logical  identities

$(\overline{I_3} \ \overline{I_2} \ \overline{I_1} \ \overline{I_0}) +(\overline{I_3} \ \overline{I_2} \ \overline{I_1} \ {I_0})
+(\overline{I_3} \ \overline{I_2} \ {I_1} \ \overline{I_0})
+(\overline{I_3} \ \overline{I_2} \ {I_1} \ {I_0})
+(\overline{I_3} \ {I_2} \ \overline{I_1} \ {I_0})
+({I_3} \ \overline{I_2} \ \overline{I_1} \ \overline{I_0})
+({I_3} \ {I_2} \ \overline{I_1} \ {I_0})$

$=(\overline{I_3} \ \overline{I_2} \ \overline{I_1})+(\overline{I_3} \ \overline{I_2} \ {I_1}) +({I_2} \ \overline{I_1} \ {I_0})+(\overline{I_2} \ \overline{I_1} \ \overline{I_0})$

$=(\overline{I_3} \ \overline{I_2})+(\ \overline{I_2} \ \overline{I_1} \ \overline{I_0})+({I_2}\ \overline{I_1}\ {I_0})$

4. Simplify the logical expression using K-MAP.

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/K-MAP.png"/>

$=(\overline{I_3} \ \overline{I_2})+(\ \overline{I_2} \ \overline{I_1} \ \overline{I_0})+({I_2}\ \overline{I_1}\ {I_0})$

5. Draw the logical circuit and verify it.

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/Fibonacci.png"/>

## $III$

Draw a combinational logic circuit of an eight-input multiplexor where the inputs (D7, D6, D5, D4, D3, D2, D1, D0) are each one-bit variables. Label the values of inputs and outputs of each gate of the circuit, assuming the eight inputs have the values (1, 0, 0, 1, 1, 1, 0, 0) respectively, and assuming D1 is selected. [Note: Assume you have an 3-8 decoder to use as a black box and do not draw the decoder circuit which is part of the multiplexor.] (8 points)

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/502y6j.png' alt='502y6j'/>

## $IV$

Investigate the operation of the following circuit. Assume the initial state is 0000. Trace the outputs (the Qs) as the clock ticks and determine the purpose of the circuit. You must show your trace to complete your answer. (10 points)
<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/JRr3J4.png' alt='JRr3J4'/>

- Equation
  - Clock equation
    - $CP_{0}=CP_{1}=CP_{2}=CP_{3}$

  - Dirve equation
    - $J_{0}=\overline {Q_{3}^{n}},K_{0}=Q_{3}^{n}$
    - $J_{1}=Q_{0}^{n},K_{1}=\overline {Q_{0}^{n}}$
    - $J_{2}=Q_{1}^{n},K_{2}=\overline {Q_{1}^{n}}$
    - $J_{3}=Q_{2}^{n},K_{3}=\overline {Q_{2}^{n}}$
  - State equation
    - Feature equation: $Q^{n+1}=J\overline{Q^{n}}+\overline{K}{Q^{n}}$
    - $Q_{0}^{n+1}=\overline {Q_{3}^{n}} \ \overline{Q_{0}^{n}}+\overline{Q_{3}^{n}}{Q_{0}^{n}}=\overline{Q_{3}^{n}}$
    - $Q_{1}^{n+1}={Q_{0}^{n}} \ \overline{Q_{1}^{n}}+{Q_{0}^{n}}{Q_{1}^{n}}=Q_0^{n}$
    - $Q_{2}^{n+1}={Q_{1}^{n}} \ \overline{Q_{2}^{n}}+{Q_{1}^{n}}{Q_{2}^{n}}=Q_1^{n}$
    - $Q_{3}^{n+1}={Q_{2}^{n}} \ \overline{Q_{3}^{n}}+{Q_{2}^{n}}{Q_{3}^{n}}=Q_2^{n}$
- State

|$Q_{3}^{n}$|$Q_{2}^{n}$|$Q_{1}^{n}$|$Q_{0}^{n}$|$Q_{3}^{n+1}$|$Q_{2}^{n+1}$|$Q_{1}^{n+1}$|$Q_{0}^{n+1}$|
|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
|$0$|$0$|$0$|$0$|$0$|$0$|$0$|$1$|
|$0$|$0$|$0$|$1$|$0$|$0$|$1$|$1$|
|$0$|$0$|$1$|$0$|$0$|$1$|$0$|$1$|
|$0$|$0$|$1$|$1$|$0$|$1$|$1$|$1$|
|$0$|$1$|$0$|$0$|$1$|$0$|$0$|$1$|
|$0$|$1$|$0$|$1$|$1$|$0$|$1$|$1$|
|$0$|$1$|$1$|$0$|$1$|$1$|$0$|$1$|
|$0$|$1$|$1$|$1$|$1$|$1$|$1$|$1$|
|$1$|$0$|$0$|$0$|$0$|$0$|$0$|$0$|
|$1$|$0$|$0$|$1$|$0$|$0$|$1$|$0$|
|$1$|$0$|$1$|$0$|$0$|$1$|$0$|$0$|
|$1$|$0$|$1$|$1$|$0$|$1$|$1$|$0$|
|$1$|$1$|$0$|$0$|$1$|$0$|$0$|$0$|
|$1$|$1$|$0$|$1$|$1$|$0$|$1$|$0$|
|$1$|$1$|$1$|$0$|$1$|$1$|$0$|$0$|
|$1$|$1$|$1$|$1$|$1$|$1$|$1$|$0$|

$State$ $Diagram$
$0000>0001>0011>0111>1111>1110>1100>1000>0000$
<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/StateDiagram.png' alt='StateDiagram'/>
This state diagram describes the function of a four-bit binary right-cycling shifter.

## $V$

Complete the truth table for the following sequential circuit: (8 points)

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/4f6xhs.png' alt='4f6xhs'/>

|$A$|$B$|$X$|$A^{'}$|$B^{'}$|
|-----|-----|----|-----|-----|
|0|0|0|1|0|
|0|0|1|0|0|
|0|1|0|1|0|
|0|1|1|0|0|
|1|0|0|1|1|
|1|0|1|1|1|
|1|1|0|1|0|
|1|1|1|1|0|

## $VI$

Design a finite state machine (FSM) for a counter that counts through the 3-bit prime numbers downwards and loop: $\{7>5>3>2>7>5>3>2\}$. Assume the counter starts with initial prime set to 111 as its first 3 bit prime number. (12 points)

1. You need to provide the state transition diagram. Assume that the state is stored in three D Flip Flops. Hint: The set of all 3-bit prime numbers includes 2, 3, 5 and 7. (4 points)

- State Diagram

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO/StateDiagram-2.png"/>

2. Design the sequential circuit for the counter. The circuit is driven by the clock. The output is a 7 segment LED display. The various digits from 0 through 9 can be displayed using a 7-segment display as shown in the following figure.

|$Q_{2}^{n}$|$Q_{1}^{n}$|$Q_{0}^{n}$|$Q_{2}^{n+1}$|$Q_{1}^{n+1}$|$Q_{0}^{n+1}$|$a$|$b$|$c$|$d$|$e$|$f$|$g$|$LED$|
|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
|$1$|$1$|$1$|$1$|$0$|$1$|$1$|$1$|$1$|$0$|$0$|$0$|$0$|$7$|
|$1$|$0$|$1$|$0$|$1$|$1$|$1$|$0$|$1$|$1$|$0$|$1$|$1$|$5$|
|$0$|$1$|$1$|$0$|$1$|$0$|$1$|$1$|$1$|$1$|$0$|$0$|$1$|$3$|
|$0$|$1$|$0$|$1$|$1$|$1$|$1$|$1$|$0$|$1$|$1$|$0$|$1$|$2$|

$a=1$
$b=\overline{Q_{2}^{n}}+Q_{1}^{n}+\overline{Q_{0}^{n}}$
$c=Q_{2}^{n}+\overline{Q_{1}^{n}}+Q_{0}^{n}$
$d=\overline{Q_{2}^{n}}+\overline{Q_{1}^{n}}+\overline{Q_{0}^{n}}$
$e=\overline{Q_{2}^{n}}Q_{1}^{n}\overline{Q_{0}^{n}}$
$f={Q_{2}^{n}}\overline{Q_{1}^{n}}Q_{0}^{n}$
$g=\overline{Q_{2}^{n}}+\overline{Q_{1}^{n}}+\overline{Q_{0}^{n}}$
$D_0=Q_0^{n+1}=Q_2^n+\overline{Q_1^n}+\overline{Q_0^n}$
$D_1=Q_1^{n+1}=\overline {Q_2^n}+\overline{Q_1^n}+\overline{Q_0^n}$
$D_2=Q_2^{n+1}=Q_2Q_1Q_0+\overline {Q_2^n} Q_1^n\overline {Q_0^n}$

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/zGv0xW.jpg' alt='zGv0xW'/>
