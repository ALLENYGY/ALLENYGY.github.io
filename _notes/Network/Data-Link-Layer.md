---
Create Time: 19th March 2024
Title: "[[Data-Link-Layer]]"
status: DONE
tags:
  - NOTE
  - Network
  - Lec3
Author:
  - AllenYGY
created: 2024-03-19
updated: 2024-03-26T10:03
---

# [[Data-Link-Layer]]

> [!info]+ The data link layer combines the following 3 functions to achieve the delivery of data from one node to another. 
> 1. Framing 
> 2. Flow control 
> 3. Error control

## Framing 

The data link layer needs to pack bits into frames, so that each frame is distinguishable from another.
![Framing](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Framing.png)

### Character Count

> [!abstract]+ Character Count 
> Use a field in the header to specify the number of the characters in the frame.
> - ![CharacterCount](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/CharacterCount.png)
易出错

### Flag bytes with byte stuffing

> [!abstract]+ Flag bytes with byte stuffing
> - Each frame starts and ends with special bytes.
> - If the flag byte’s bit pattern occurs in that data, a special escape byte (ESC) will be inserted just before the bit pattern.
![Framing-FBBS](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Framing-FBBS.png)

### Starting and ending flags with bit stuffing 

>[!abstract ]+ Starting and ending flags with bit stuffing 
>- Each frame begins and ends with a special bit pattern, 01111110.
>- If the sender encounters five consecutive 1s in the data, a 0 bit will be inserted just after 1s.
>- ![Framing-FBBS](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Framing-SEFBS.png)

## Error Control

> [!todo]+ Finally Goal
> Check Each data frame is correct?
> - Sender send data{k bits} and check bit{n-k}
> - Receiver receive data and Check bit
> 	- According data calculate check bit compare 2 check bit

### Error Control Overview

![ErrorControl-sender](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/ErrorControl-sender-1.png)
![ErrorControl-Receiver](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/ErrorControl-Receiver.png)

### Parity Check `奇偶校验`

> [!abstract]+ Parity Check
>  Append a parity bit to the end of a block of data (e.g., there are d bits in a block).
>  `分为偶数校验和奇数校验`
>  - Even parity scheme: the sender includes one additional bit and chooses its value such that the total number of 1s in the d+1 bits (the original information plus a parity bit) is even.
> - Odd parity scheme: the parity bit value is chosen such that there is an odd number of 1s.
![Parity Check](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/ParityCheck.png)

### Two-dimensional Parity Check 

> [!info]+ Two-dimensional Parity Check 
> Two-dimensional parity is a generalization of single-bit ParityCheck.png 
> - In this scheme, the data is formed as a rectangular matrix j bits wide and i bits high.
> - A parity value is computed for each row and column. It has following properties:
> 	- A single bit error can be detected.
> 	- If there is a single error, we can use the column and row indices to identify the bit that was corrupted and correct that error.

> [!example]-  2D Parity Check 
> 让我们通过一个具体的例子来说明二维奇偶校验（2D Parity Check）是如何工作的。假设我们有一个由二进制数据组成的3x3矩阵，我们想要通过添加行校验位和列校验位，以及一个额外的校验位来确保数据的完整性。
> 
> ### 初始数据矩阵
> 
> 假设初始数据矩阵如下：
> 
> ```
> 1 0 1
> 0 1 0
> 1 1 0
> ```
> 
> 我们的目标是添加校验位，使得每行和每列的总和都是偶数（这里我们选择偶校验作为例子）。
> 
> ### 计算行校验位
> 
> 首先，对于每一行，我们计算一个校验位，使得包括校验位在内的每一行的总位数（即1的数量）是偶数。
> 
> - 第一行：`1 0 1` 有两个1，已经是偶数，所以校验位是`0`。
> - 第二行：`0 1 0` 有一个1，不是偶数，所以校验位是`1`。
> - 第三行：`1 1 0` 有两个1，已经是偶数，所以校验位是`0`。
> 
> 添加行校验位后的矩阵：
> 
> ```
> 1 0 1 | 0
> 0 1 0 | 1
> 1 1 0 | 0
> ```
> 
> ### 计算列校验位
> 
> 然后，对于每一列（包括新添加的行校验位），我们也计算一个校验位，以确保每列的1的数量是偶数。
> 
> - 第一列：`1 0 1` 有两个1，校验位是`0`。
> - 第二列：`0 1 1` 有两个1，校验位是`0`。
> - 第三列：`1 0 0` 有一个1，校验位是`1`。
> - 行校验列：`0 1 0` 有一个1，校验位是`1`。
> 
> 添加列校验位后的矩阵：
> 
> ```
> 1 0 1 | 0
> 0 1 0 | 1
> 1 1 0 | 0
> ------+---
> 0 0 1 | 1
> ```
> 
> ### 最终矩阵
> 
> 最终，我们得到一个包含行校验位和列校验位的矩阵，还有一个右下角的额外校验位，用于整个矩阵的校验：
> 
> ```
> 1 0 1 | 0
> 0 1 0 | 1
> 1 1 0 | 0
> ------+---
> 0 0 1 | 1
> ```
> 
> 在这个例子中，每行和每列的1的数量都是偶数，包括最后添加的校验位行和校验位列。这样，在数据传输或存储过程中，如果任何单一位发生变化（变成错误），接收方可以通过检查行和列的校验位来发现并确定错误的具体位置。如果只有一位出错，那么错误可以被精确地定位和纠正。然而，如果有多个错误，这种方法可能只能检测到错误存在，而无法精确定位或纠正所有错误。

### Cyclic Redundancy Check (CRC)

> [!info]+ Cyclic Redundancy Check (CRC)
> CRC treats bit streams as representations of polynomials with coefficients of 0 and 1 only.
> - Modulo-2 arithmetic is used for computing CRC.
> -  In modulo-2, there are no carriers for addition or borrows for subtraction.
> - When the polynomial code method is employed, the sender and receiver must agree upon a generator polynomial, G(x) in advance.

> [!abstract]+ CRC Process
>  To **compute** the checksum for some frame with m bits, corresponding to the polynomial $M(x)$ , we have following steps: 	
>  1. Let $r$ be the degree of $G(x)$. 
>  2. Append zero bits to the low-order end of the frame so it now contains bits and corresponds to the polynomial $x^{r}M(x)$
>  3. Divide $G(x)$ into $x^rM(x)$ using modulo-2 division.
>  4. Subtract the remainder from $x^rM(x)$ using modulo-2 subtraction.
>  5.  Append the remainder to the end of $M(x)$ to form the transmitted data frame.
>
> To **detect** the error, the receiver divides the checksummed frame by . If there is a remainder, there has been a transmission error.

> [!example]- CRC Example
>![CRC](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/CRC.png)

> [!note]+ Generator x
> 不能太长：太长准确率高，但是效率低
> 不能太短：太短reminder容易重复
> 需要是质数：这样reminder重复概率进一步减小

### Error Correction

## Flow Control 