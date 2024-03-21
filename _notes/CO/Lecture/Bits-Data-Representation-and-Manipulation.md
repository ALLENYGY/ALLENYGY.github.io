---
Title: "[[Bits-Data-Representation-and-Manipulation]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - CO
  - Lec2
created: 2023-11-03T00:59
updated: 2024-03-21T18:46
---


# [[Bits: Data Representation and Manipulation]]

## *Binary Numbers: Bits*

- 1 BIT = Binary digITs; 1 bit: 0 or 1
- 1 Byte = 8 bits
- A word is a fixed-sized piece of data handled as a unit

## *Data Representation*

- Numeric Data Representation
  - Unsigned integers
  - Signed integers
    - Sign-magnitude
    - 1’s complement
    - 2’s complement
  - Real number representation
  - Floating-point numbers
- Non-numeric Data Representation

$n$ bits represent $2^{n}$ things.

## Numeric Data Representation

### *Unsigned Integers Representations*

![Binary-Decimal](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-Binary-Decimal.png)

### *Signed Integer Representations*

- The left most bit (the most significant bit) is used as the sign bit. *最左位数表示正负*
  - $0$ represents \+
  - $1$ represents \-

#### *Sign-magnitude*

- the remaining bits indicate the magnitude *剩余数字表示数字*
- Problem: there will be 2 zero: 0000/1000

#### *1’s complement*

- the complement of its positive counterpart *除了第一位数剩余数字作反码操作*

#### *2’s complement*

- one greater than the 1’s complement of the positive value

### *Property*

1. For positive number： Signed-magnitude, 1's complement, 2's complement forms are the same.正数原码反码补码一样
2. After two backcode complements, the original number can be obtained 经过两次反码，补码操作可得到原数
3. For binary odd number, the most right bit must be one.
4. For Hexadecimal number each bit represents 4bits binary number

### *Floating-point numbers*

- Scientific notation: $1500 = 1.5\times10^3 = 0.15\times10^4 = 15\times10^2$

### *Half Precision Floating Numbers*

Represented by 16 bits

- 16 bits: 1 for sign; 5 for exponent; 10 for Mantissa
- Exponent bias (offset): 24 -1 =15; range: [-14, 15]
  - 01111 represents 0 in exponent

![Half-Precision](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-HalfPrecisionFloating.png)
![Half-Precision](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-Half-Precision-Floating-example.png)

### *Single point Precision Floating Numbers*

- 32 bits: 1 for sign; 8 for exponent; 23 for Mantissa
![Single-point-floating-number](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-Single-point-floating-number.png)

## *Non-numeric Data Representation*

- Textual information
- Audio information
- Colors & Images
- Video information

### *ASCII code*

- The American Standard Code for Information Interchange
- 7 bits to represent 128 characters
  - 0~31: control characters
  - 32~127: symbols, digits and letters

- 48 represents '0'
- 65 represents 'A'
- 97 represents 'a'
![ASCII-code](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ASCII-Code.png)

### *Universal Character Set*

- 16 bits
- Support unlimited characters
- To permit backward compatibility, ASCII is a subset of Unicode.

### *Digital Audio*

- A microphone converts sound to an analog electrical signal
- An analog-to-digital converter (ADC) converts the analog signal to a digital signal through sampling
- CD audio, for example, has a sampling rate of 44.1 kHz (44,100 samples per second)
- An digital-to-analog converter performs the reverse process, from a digital to an analog signal
- An analog signal can be amplified and send to a speaker to produce sound

### *Image & Video*

- A video consists of a stream of frames, or images, displayed at n>16 frames per second
- An Image consist of a collection of pixels
- Pixels are tiny dots of color
- A pixel’s color is represented by a binary number, its RGB value
- Thus a video can be seen as a huge binary number

## Operations on Bits

- Binary Arithmetic Operations
  - Addition and subtraction
  - Sign Extension
  - Overflow
- Boolean Logic Operations
  - AND
  - OR
  - NOT
  - XOR
