# Boolean Algebras- Logic Circuits

## Logic Circuits

* Logic gate symbols
* Logic circuits design
* Minimization of logic circuits

### Logic Gates

* <img src="D:\Note\Image\Math\DiscreteStructure\Lecture15\LogicGates.png" alt="Logic Gate" style="zoom: 67%;" />
* Buffer
  * It is used for delay
  * Useful for timing purpose
  * Not for the logical purpose

### Logic Circuit

<img src="D:\Note\Image\Math\DiscreteStructure\Lecture15\LogicCircuit01.png" alt="Logic Circuit_1" style="zoom: 67%;" />
<img src="D:\Note\Image\Math\DiscreteStructure\Lecture15\LogicCircuit02.png" alt="Logic Circuit_2" style="zoom: 80%;" />

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
* <img src="D:\Note\Image\Math\DiscreteStructure\Lecture15\Half-Adder.png" alt="Half-Adder" style="zoom:80%;" />
* S: 本位
* C: 进位
* ![HA](D:\Note\Image\Math\DiscreteStructure\Lecture15\HA.png)

#### Logic Circuit - Full Adder

<img src="D:\Note\Image\Math\DiscreteStructure\Lecture15\Full-Adder.png" alt="Full—Adder" style="zoom:80%;" />

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

<img src="D:\Note\Image\Math\DiscreteStructure\Lecture15\Karnaugh-Map.png" alt="KM_0" style="zoom:80%;" />

<img src="D:\Note\Image\Math\DiscreteStructure\Lecture15\KM1.png" alt="KM_1" style="zoom:80%;" />

<img src="D:\Note\Image\Math\DiscreteStructure\Lecture15\KM2.png" alt="KM_2" style="zoom:80%;" />

<img src="D:\Note\Image\Math\DiscreteStructure\Lecture15\KM3.png" alt="KM_3" style="zoom:80%;" />

<img src="D:\Note\Image\Math\DiscreteStructure\Lecture15\KM4.png" alt="KM_4" style="zoom:80%;" />
1
