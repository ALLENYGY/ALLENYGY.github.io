---
CreateTime: 20th February 2024
Title: "[[Basic-Concepts]]"
status: DONE
Author:
  - AllenYGY
tags:
  - NOTE
  - Network
  - Lec1
  - UIC
created: 2024-02-20T11:32
updated: 2024-03-21T11:34
---

# [[Basic-Concepts]]

- The term **telecommunication** means communication **at a distance**.
-  The word data refers to information presented in whatever form is agreed upon by the parties **creating and using the data**. 
-  **Data communications** are **the exchange of data between two devices** via some form of transmission medium such as a wire cable.

## **Data Communication Components**

![Data Communication Components](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/protocol.png)
- Five components of data communication
	- Sender
	- Medium
	- Receiver
	- Protocol
	- Message

> [!abstract]+ Network Protocol
> 1. Communication node is **machine**
> 2. **All communication activity** in the Internet is **controlled by protocols**
> 3. Protocols define formats, order of sending and receiving of messages, and the actions that the reception initiates

## **Data Flow**

- Simplex *单向* 单向同时只有一路信号
    - TV
- Half-duplex *半双工* 双向同时只有一路信号
    - Interphone
- Full-duplex *全双向* 双向同时有两路信号
![DataFlow](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Dataflow.png)

## **Fundamentals of Data and Signals**

### **Analog Versus Digital**

- **Analog** signals are **continuous** electrical signals that vary in time. *模拟信号*
- **Digital** signals are **non-continuous**. *数字信号*
	- They consist of **pulses** or **digits** with discrete levels or values. 
	- The value of each pulse is constant. 
	- Digital signals usually have two **amplitude** levels such as 1 or 0, HIGH or LOW.
![Signal](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Signals.png)

### **Advantages of Digital Signals**

1. Less **sensitive** to the **interferences** (e.g., noise, magnetic field) *对扰动不敏感*
2. Easier for further **processing** (e.g., error correction, storage, etc.) *方便后续处理*
![NoiseSignal](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/NoiseSignal.png)

## **Digital Encoding Schemes**

### **Transmitting digital data with digital signals** *数字信号->数字信号*

- **Non-return to zero digital encoding scheme** *不归零数字编码方案*
	- ‘1’ bit is sent as a high value and ‘0’ bit is sent as a low value.
	- The receiver may **lose synchronization** because the data may contain long runs of consecutive bits with the same value **[no changes in voltage]**.
- **Manchester digital encoding scheme**  *曼彻斯特数字编码方案*
	- The digital data is represented as: ‘0’ bit by a voltage from low to high; ‘1’ bit by a voltage from high to low.
	- Manchester encoding is a synchronous clock encoding technique to encode the clock and data of a synchronous bit stream.
	- 数字数据表示为:“0”位由电压由低到高; “1”位由电压由高到低。 曼切斯特编码是一种同步时钟编码技术，用于对同步比特流的时钟和数据进行编码。
	- ![Manchester](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/EncodingScheme/Manchester.png)
	- `Efficiency : 50%`
- **4B/5B digital encoding scheme** 
	- It produces a signal for a group of bits each time, rather than outputting a signal for each individual bit.
	- Each time, a 4-bit input data (16 different bit patterns) is encoded as a 5-bit data (32 different bit patterns).
	- By carefully choosing the 5-bit patterns which always contain two '1's even if the input data is all '0's, the clock synchronizations can be achieved.
	- 它每次为一组位产生信号，而不是为每个单独的位输出信号。 每次，4位输入数据(16种不同的位模式)被编码为5位数据(32种不同的位模式)。 通过仔细选择总是包含两个'1'的5位模式，即使输入数据都是'0'，也可以实现时钟同步。
	- `Efficiency : 80%`

### **Transmitting digital data with analog signals** *数字信号->模拟信号*

- **AM - Amplitude Modulation**  *调幅*
	- Carrier**载波**
	- On/Off 机械的表达
		- Presence of the carrier:1
		- Absence (or no carrier) :0
	- ![AM](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/AM.png)
- **FM - Frequency Modulation** *调频*
	- A 0 is represented by the original **carrier frequency**
	- A 1 by a much **higher frequency** (the cycles are spaced closer together).
	- ![FM](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/FM.png)
	- Frequency Modulation modifies the frequency of the carrier to represent the 1s or 0s. *操纵频率表示0/1*
- **PM - Phase Modulation** *调相*
	- 载波相位在每次出现1位时切换，但在0位时不受影响。 
	- 这些位被定时以符合特定的载波周期数。
	- ![PM](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/PM.png)

### **Convert Analog Signal to Digital Signal**  *模拟信号->数字信号*

- **Pulse Coding Modulation** 脉冲编码调制
	1. Sampling 采样
		- 是模拟-数字转换过程中的第一步，涉及按照特定的时间间隔（采样率）测量连续模拟信号的瞬时值。采样率必须至少是信号中最高频率的两倍，这是根据奈奎斯特定理来决定的，以确保信号可以被无失真地重建。
	2. Quantitation  量化
		- 采样后的步骤是量化，这个过程涉及将每个采样点的模拟值映射到最接近的数字级别。量化步骤确定了信号的数字表示可以取的不同值的数量。在图像中，量化被表示为一系列的水平线，每一条线对应一个量化级别。每个采样值被"量化"到最接近的这些水平线上。在量化过程中，采样值是用比特数表示的，而这个比特数（8位到24位）决定了可能的量化级别的数量，也就是量化精度。
- ![Convert Signal](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/ConvertSignals.png)
- PCM samples the signal from 8 to 192 thousand times per second; each sample is represented by 8 to 24 bits.

## **Capacity of Communication Channel**

- $Nyquist's\ Theorem$
- Assumption: noise free in the channel
- Formula: $$B=2F(log_2M)=\frac{2log_2M}{T}=\frac{2}{T}(When\ M=2)$$ 
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
- $Signal-to-Noise\ Radio$
  $$SNR_{dB}= 10\ log_{10}{\frac{S}{N}}$$
  $$ SNR=10^{\frac{SNR_{db}}{10}}$$


## **Computer Networks**

- **A network is a set of devices(often referred to as nodes) connected by communication links.**
- A node can be a **computer, printer, or any other device** capable of sending and/or receiving data generated by other nodes on the network.

## **Network Hardware**

- The computer networks can classified as the following *4 categories*
	- **Local loop**
	- **LANs**
	- **MANs**
	- **WANs**

### **Local Loop** *本地回路*

- It refers to the “last mile” of analog phone line that goes from the Exchange Centre to your house. *指从交换中心到您家的 "最后一英里 "模拟电话线。*
	- Voice lines *话频线路*
	- Modem (56 kbps) *调制解调器*
	- ISDN (Integrated Services Digital Network): 2 x 64 kbps digital lines 
	- ADSL (Asymmetrical Digital Subscriber Line): up to 8 Mbps
	- Cable Modems (up to 30 Mbps)  *电缆调制解调器*
	- Network cable

### **Local Area Networks (LANs)** *局域网*

- LANs are privately-owned networks within *a single building or campus* of up to a few kilometers in size.
- LANs run at speeds of **10Mbps to 10Gbps**, have low delay, and **make very few errors**.
-  The **topologies** *拓扑 *of LANs are various: Bus, Ring, Star, etc.

### **MANs (Metropolitan Area Network)** *城域网*

- MANs are networks that connect LANs together within a city. 
	- Example: Cable television network 

### **WANs (Wide Area Networks)** *广域网*

- WANs connect LANs together between cities.
- A WAN spans a large geographical area, often a country or continent.

### **Internetworks** *互联网*

- Many networks exists in the world with different hardware and software;  
- To communicate, it is better to connect different networks together.
- A collection of interconnected networks is called an internetwork or internet (which is used in a generic sense, in contrast to the worldwide Internet).

## **Network Software** 

### **Protocol Hierarchies**

Networks are recognized as a stack of **layers** or **levels**, each one built upon the one below it.

- Each layer offers **certain service**s to the higher layers, *shielding those layers from the details of how the offered services are implemented.*
- Between each pair of adjacent layers is an interface. The interface defines which primitives operations and services the lower layer makes available to the upper one.*每一对相邻层之间都有一个接口。接口定义了下层向上层提供哪些基本操作和服务。*

#### **Why Layering?**

Management of complex systems:
- Modularization simplifies 
	- Design 
	- Maintenance
	- Updating of a system
-  Explicit structure allows
	-  Identification of the individual parts
	- Relations among them
- Clear structure: layering
	- Layered reference model
	- Goal: different implementation of one layer fit with all implementations of other layers

#### **Design Issues for the Layers**

- **Addressing**: Every layer needs a mechanism for identifying senders and receivers.
- **Rules of data transfer**: simplex or duplex, no. of channels
- **Error control**: Both sender and receiver must agree on some sort of error-detecting and error-correcting codes.
- **Sequence**: The protocol must provide solution for receiver to reassemble the messages properly.
- **Flow control**: The protocol should provide a mechanism for sender and receiver to regulate the transmission rate.
- **Routing**: A mechanism must be provided to choose a route when there are multiple paths between source and destination.

### **Connection-Oriented and Connectionless Services**

#### **Connection-oriented Services**

- **To establish a connection**, the *sender*, *receiver* and *the subnet* conduct a **negotiation** about parameters to be used, such as *maximum message size*, *quality of service required*, etc.
	- The **Quality of Service** can be characterized in terms of Data Loss Rate, Delay Jitter, Data Rate, etc.
	-  Application Example: File transfer

#### **Connectionless Service**

- Each message carries the *full destination address*, and each one is **routed through the system independent of all the others**. 
- **No negotiation** is needed between *sender* and *receiver*.

### **Service Primitives** *原始服务*

A service is formally specified by a set of primitives (operations) available to a user process to access the service. These primitives tell the service to perform some action or report on an action taken by a peer entity.

| Primitives  | Meaning                                  |
|-------------|------------------------------------------|
| LISTEN      | Block waiting for an incoming connection |
| CONNECT     | Establish a connection with a waiting peer |
| RECEIVE     | Block waiting for an incoming message    |
| SEND        | Send a message to the peer               |
| DISCONNECT  | Terminate a connection                   |

## **Network Topologies and Categories**

- Network Topology refers to the layout of a network.
- Different configurations of network cable, computers and devices form different topologies.
![Topology](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Topology.png)

### **Bus Topology**

- Bus topology: All devices are connected to a common backbone.
- ![Bus](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Topology/Bus.png)
- **Advantages** 
	- Easy to connect a computer or peripheral to a linear bus. *方便连接*
	- Requires less cable length than a star topology. *耗材少*
- **Disadvantages**
	- Entire network shuts down if there is a break in the main cable. *不可靠*
	- Terminators are required at both ends of the backbone cable.
	- Difficult to identify the problem if the entire network shuts down. o Not meant to be used as a stand-alone solution in a large building.

### **Ring Topology**

- Ring topology
	- In a ring network, every device has exactly two neighbors for communication purposes *管理复杂*
- All messages travel through a ring in the same direction (either "clockwise" or "counterclockwise")
- ![Ring](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Topology/Ring.png)

### **Star Topology**

- Star topology
	- A star topology is designed with each node (file server, workstations, and peripherals) connected directly to a central network hub or concentrator.
	- Data on a star network passes through the hub or concentrator before continuing to its destination.
	- The hub or concentrator manages and controls all functions of the network.
	- It also acts as a repeater for the data flow.
-  **Advantages** *Current-connections*
	- Easy to install and wire.
	- No disruptions to the network then connecting or removing devices.
	-  Easy to detect faults and to remove parts.
- **Disadvantages**
	- Requires more cable length than a linear topology.
	- If the hub or concentrator fails, nodes attached are disabled.
	- More expensive than linear bus topologies because of the cost of the concentrators.
- ![Star](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Topology/Star.png)

### **Tree Topology**

- A tree topology **combines** characteristics of *star* and linear *bus* topologies.
- Tree topologies **allow for the expansion of an existing network**. 
	- For example, enabling schools to configure a network for labs.
-  Advantages
	- Point-to-point wiring for individual segments.
	- Supported by several hardware and software venders. 
- Disadvantages
	- Overall length of each segment is limited by the type of cabling used.
	- If the backbone line breaks, the entire segment goes down.
	- More difficult to configure and wire than other topologies. 
- ![Tree](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Topology/Tree.png)

### **Mesh Topology**

- A Mesh topology consists of a network where every device on the network is physically connected to every other device on the network.
- Advantages
	- It provides a great deal of performance and reliability. 
- Disadvantages
	- However the complexity and difficulty of creating one increases geometrically as the number of nodes on the network increases.
- ![Mesh](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Topology/Mesh.png)

## **Open System Interconnection (OSI) Model**

- Open System Interconnection (OSI) Model has seven layers.
	- *Physical Layer*
	- *Data Link Layer*
	- *Network Layer*
	- *Transport Layer*
	- *Session Layer*
	- *Presentation Layer*
	- *Application Layer*
- ![OSI](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/OSI.png)
- ![OSI](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/OSI_Exchange.png)
