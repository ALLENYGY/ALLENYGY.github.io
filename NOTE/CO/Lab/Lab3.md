# Lab3

1. From the specifications of the circuit, determine the required number of inputs and outputs, and assign a letter symbol to each.

- Input: 3 $(X,Y,Z)$
- Output: 1 $(F)$

2. Derive the truth table that defines the required relationship between inputs and outputs.

|$X,Y,Z$|$F$|
|---|---|
|$0 \ 0\ 0$|$0$|
|$0 \ 0\ 1$|$0$|
|$0 \ 1\ 0$|$0$|
|$0 \ 1\ 1$|$1$|
|$1 \ 0\ 0$|$0$|
|$1 \ 0\ 1$|$1$|
|$1 \ 1\ 0$|$1$|
|$1 \ 1\ 1$|$0$|

3. Obtain the SOP and simplified Boolean functions of each outputs as function of the input variables. (You can also use the K-Map to obtain the simplest Boolean function.)

- $F = {X}\overline{Y}{Z}+{X}{Y}\overline{Z}+\overline{X}{Y}{Z}$

4. Draw the logic diagram.

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/Lab3.png' alt='Lab3'/>
<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/BL5eKv.png' alt='BL5eKv'/>

5. Verify the correctness of the design.
