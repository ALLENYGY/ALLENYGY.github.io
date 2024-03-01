---
Create Time: 20th February 2024
Title: "[[BasicConcepts]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - Network
  - UIC
---

# [[BasicConcepts]]

- The term **telecommunication** means communication **at a distance**.
-  The word data refers to information presented in whatever form is agreed upon by the parties **creating and using the data**. ^[创造和使用数据的两方]
-  **Data communications** are **the exchange of data between two devices** via some form of transmission medium such as a wire cable.

## **Data Communication Components**

![Data Communication Components](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/protocol.png)

> [!abstract]+ Network protocol
> 1. Communication node is **machine**
> 2. **All communication activity** in the Internet is **controlled by protocols**
> 3. Protocols define formats, order of sending and receiving of messages, and the actions that the reception initiates

## **Data flow**

- Simplex *单向*
    - TV
- Half-duplex *半双工*
    - Interphone
- Full-duplex *全双向*
![DataFlow](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Dataflow.png)

## **Fundamentals of Data and Signals**

### **Analog versus Digital**

- Analog signals are continuous electrical signals that vary in time.
- Digital signals are non-continuous. They consist of **pulses** or **digits** with discrete levels or values. The value of each pulse is constant. Digital signals usually have two **amplitude** levels such as 1 or 0, HIGH or LOW.
![Signal](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Signals.png)

### **Advantages of Digital Signals**

1. Less sensitive to the interferences (e.g., noise, magnetic field)
2. Easier for further processing (e.g., error correction, storage, etc.)
![NoiseSignal](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/NoiseSignal.png)

## **Transmitting digital data with digital signals: Digital Encoding Schemes**

- **Non-return to zero digital encoding scheme**
	- ‘1’ bit is sent as a high value and ‘0’ bit is sent as a low value.
	- The receiver may lose synchronization because the data may contain long runs of consecutive bits with the same value [no changes in voltage].
- **Manchester digital encoding scheme** `Efficiency : 80%`
	- The digital data is represented as: ‘0’ bit by a voltage from low to high; ‘1’ bit by a voltage from high to low.
	- Manchester encoding is a synchronous clock encoding technique to encode the clock and data of a synchronous bit stream.
	- 数字数据表示为:“0”位由电压由低到高; “1”位由电压由高到低。 曼切斯特编码是一种同步时钟编码技术，用于对同步比特流的时钟和数据进行编码。
- **4B/5B digital encoding scheme** `Efficiency : 80%`
	- It produces a signal for a group of bits each time, rather than outputting a signal for each individual bit.
	- Each time, a 4-bit input data (16 different bit patterns) is encoded as a 5-bit data (32 different bit patterns).
	- By carefully choosing the 5-bit patterns which always contain two '1's even if the input data is all '0's, the clock synchronizations can be achieved.
	- 它每次为一组位产生信号，而不是为每个单独的位输出信号。 每次，4位输入数据(16种不同的位模式)被编码为5位数据(32种不同的位模式)。 通过仔细选择总是包含两个'1'的5位模式，即使输入数据都是'0'，也可以实现时钟同步。
- **AM - Amplitude Modulation**
	- On/Off 机械的表达
- **FM - Frequency Modulation**
- **PM - Phase Modulation**

## **Convert Analog Signal to Digital Signal**

## **Capacity of Communication Channel**

- $Nyquist's\ Theorem$
- Assumption: noise free in the channel
- Formula: $$B=2F(log_2M)=\frac{2log_2M}{T}$$
	- B = Bit Rate (bit/sec)
	- F = Channel Bandwidth in Hertz
	- M = Number of levels in a signal (two for binary)
- $Shannon's Theorem$
- In reality, the signal may be corrupted by electrical noise.
- Formula: $$B = F[log_2(1+\frac{S}{N})]$$
	- B = Actual Bit Rate (bit/sec)
	- F = Channel Bandwidth in Hertz
	- S = Signal Power in watts 
	- N = Noise Power in watts
	- $(dB)= 10\ log_{10}{\frac{S}{N}}$