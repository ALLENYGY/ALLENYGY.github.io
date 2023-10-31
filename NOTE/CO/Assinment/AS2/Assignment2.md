# Assignment-2

## $I$

$Z=\overline{\overline A \ \overline B}=AB$

| $A \ B$|$C \ D \ Z$|
|--------|--------------|
|$ 0 \ 1$|$ \ 1 \ 0 \ 0$|
|$ 0 \ 0$|$ \ 1 \ 1 \ 0$|
|$ 1 \ 1$|$ \ 0 \ 0 \ 1$|
|$ 1 \ 0$|$ \ 0 \ 1 \ 0$|

## $II$

Fibonacci n_umbers are the sequence of numbers Fn defined by the linear recurrence equation $F_{n} = F_{n-1} + F_{n-2}$ where $F_{1} = F_{2} = 1$. It is conventional to define $F_0 = 0$. Given a word size of four bits, design a circuit to detect if a given input binary number $I_3I_2I_1I_0$ is a Fibonacci number or not. Show the following steps: (20 points)

1. Truth Table

|$I_3$|$I_2$|$I1$|$I_0$|$isF$|
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
|1|1|1|0|0|
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

$=(\overline{I_3} \ \overline{I_2} \ \overline{I_1})+(\overline{I_3} \ \overline{I_2} \ {I_1}) +({I_2} \ \overline{I_1} \ {I_0})+(\overline{I_2} \ \overline{I_1} \ \overline{I_0})+(\overline{I_3}\ \overline{I_1}\ {I_0})$

$=(\overline{I_3} \ \overline{I_2})+(\ \overline{I_2} \ \overline{I_1} \ \overline{I_0})+({I_2}\ \overline{I_1}\ {I_0})+(\overline{I_3}\ \overline{I_1}\ {I_0})$

4. Simplify the logical expression using K-MAP.

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/K-MAP.png' alt='K-MAP'/>

$=(\overline{I_3} \ \overline{I_2})+(\ \overline{I_2} \ \overline{I_1} \ \overline{I_0})+({I_2}\ \overline{I_1}\ {I_0})+(\overline{I_3}\ \overline{I_1}\ {I_0})$

5. Draw the logical circuit and verify it.

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/CO-As2.png' alt='CO-As2'/>

## $III$

Draw a combinational logic circuit of an eight-input multiplexor where the inputs (D7, D6, D5, D4, D3, D2, D1, D0) are each one-bit variables. Label the values of inputs and outputs of each gate of the circuit, assuming the eight inputs have the values (1, 0, 0, 1, 1, 1, 0, 0) respectively, and assuming D1 is selected. [Note: Assume you have an 3-8 decoder to use as a black box and do not draw the decoder circuit which is part of the multiplexor.] (8 points)

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/502y6j.png' alt='502y6j'/>

## $IV$

## $V$

Complete the truth table for the following sequential circuit: (8 points)

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/4f6xhs.png' alt='4f6xhs'/>

|$A$|$B$|$X$|$A^{'}$|$B^{'}$|
|-----|-----|----|-----|-----|
|0|0|0|1|0|
|0|0|1|0|0|
|0|1|0|1|0|
|0|1|1|0|0|
|1|0|0|0|1|
|1|0|1|0|1|
|1|1|0|0|0|
|1|1|1|0|0|

## $VI$
