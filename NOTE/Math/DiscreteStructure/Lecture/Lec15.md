# Boolean Algebras- Logic Circuits

## Logic Circuits

* Logic gate symbols
* Logic circuits design
* Minimization of logic circuits

### Logic Gates

*![LogicalGate](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/LogicGates.png)
* Buffer
  * It is used for delay
  * Useful for timing purpose
  * Not for the logical purpose
  * ![Buffer](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Buffer.png)

### Logic Circuit

![LogicalGate01](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/LogicCircuit01.png)

![LogicalGate02](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/LogicCircuit02.png)

* Steps in Design of Logical Circuits (Without minimization)

1. Find the inputs and outputs
   * Inputs: number of variables in the Boolean function
   * Outputs: how many functions are required
2. Draw the truth table
   * Truth table: indicate the relationship between outputs and inputs
   * Specify what ‘0’ and ‘1’ (in input and output) in the table represent?
3. Figure out the functions
   * Use sum of products or product of sums
4. Design the logical circuits

#### Logic Circuits – Half Adder

* Add two bits
  * 0 + 0 = 0
  * 0 + 1 = 1
  * 1 + 0 = 1
  * 1 + 1 = 0 and carry 1 to the next place
* ![HalfAdder](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Half-Adder.png)
* S: 本位
* C: 进位
* ![HalfAdder](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/HA.png)

#### Logic Circuit - Full Adder

![Full-Adder](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Full-Adder.png)

### Steps in Design of Logical Circuits(With Minimization)

1. Find the inputs and outputs
   * Inputs: number of variables in the Boolean function
   * Outputs: how many functions are required
2. Draw the truth table
   * Truth table: indicate the relationship between outputs and inputs
   * Specify what ‘0’ and ‘1’ (in input and output) in the table represent?
3. Figure out the functions
   * Use sum of products or product of sums
4. Minimization of the Boolean functions if possible
5. Design the logical circuits

![Karnaugh-Map](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Karnaugh-Map.png)

![KM_1](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/KM1.png)

![KM_2](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/KM2.png)

![KM_3](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/KM3.png)

![KM_4](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/KM4.png)
