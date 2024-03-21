---
Create Time: 19th March 2024
Title: "[[Physical-Layer]]"
status: DONE
tags:
  - NOTE
  - Network
  - Lec2
  - UIC
Author:
  - AllenYGY
---

# [[Physical-Layer]]


## Fourier Analysis

The French mathematician J.B. Fourier proved that any reasonably behaved period function, g(t) with period T can be constructed as the sum of a number of sines and cosines:

$$g(t) = \frac{1}{2}c + \sum_{n=1}^{\infty} a_n \sin(2\pi n f t) + \sum_{n=1}^{\infty} b_n \cos(2\pi n f t)
$$
Where $f = \frac{1}{T}$ is the fundamental frequency, $a_n$ and $b_n$ are the sine and cosine amplitudes of the $n_{th}$ harmonics, and c is a constant.

## Transmission Medium and Physical Layer
![Transmission Medium and Physical Layer](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/TMPH.png)

## Classes of Transmission Media

> [!info]+ Transmission media 
> - Guide `wired`
> 	- Twisted-pair cable
> 	- Coaxial cable 
> 	- Fiber-optic
> - Unguided `wireless`
> 	- Free space

![Classes of Transmission Media](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/TypeofTransmissionMedia.png)

### Guided Transmission media 

- Guided media, which are those that provide a conduit from one device to another.
- Include twisted-pair cable, coaxial cable, and fiberoptic cable.

#### Twisted-pair `双绞线`

> [!info]+ Twisted Pair
> - A twisted pair consists of two insulated copper wires, typically about 1 mm think.
> - ![Twisted-pair](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Twisted-Pair.png)
> - UTP and STP cables `Shield or not`
> - ![UTP&STP](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/UTP_STP.png)
> -  Connector
>	- ![UTP-connector](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/UTP-connector.png)

![UTP Performance](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/UTP-Performance.png)

$\uparrow frequency \Rightarrow Attenuation \downarrow$

#### Coaxial Cable `同轴电缆`

> [!info]+ Coaxial Cable
> - A coaxial cable consists of a stiff copper wire as the core, surrounded by an insulating material.
> - The insulator is encased by a cylindrical conductor.
> - The outer conductor is covered in a protective plastic sheath.
> - ![CoaxialCable](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/CoaxialCable.png)
> - ![Cable-Connectors](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Cable-Connectors.png)

#### Optical fiber `光导纤维`

> [!info]+ Optical fiber
> The core of fiber optic cable is surrounded by a glass cladding with a lower index of refraction than the core
> ![Optical Fiber](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/OpticalFiber.png)

##### Propagation modes

> [!info]+ Propagation modes
> - Mode 
> 	- Multimode
>		- Step index 
>		- Graded index
> 	- Single mode
> ![Propagation modes](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/OpticalOpticalMode.png)
> ![Optical Fiber Connector](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/OpticalFiber-Connector.png)

## Wireless Transmission 

- Unguided media transport electromagnetic waves without using a physical conductor.
- This type of communication is often referred to as wireless communication.
- Tow common signal encoding methods:
	- Frequency hopping spread spectrum (e.g., Bluetooth) 
	- Direct sequence spread spectrum (e.g., CDMA mobile network)
- ![WirelessTransmission-Spectrum](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/WirelessTransmission-Spectrum.png)
- ![Electromagnetic Spectrum ](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/ElectromagneticSpectrum.png)

### Propagation Methods 

![PropagationMethods](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/PropagationMethods.png)

#### Omnidirectional Antenna

Receiving signals from or transmitting in all directions
- ![Omnidirectional](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Antenna.png)

#### Unidirectional Antennas

![Unidirectional ](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/UnidirectionalAntennas.png)

## Types of Wireless Transmission

- Radio Transmission 
- Microwave Transmission: widely used for long-distance telephone communication, television distribution 
- Infrared: widely used for short-range communication (e.g., TV remote controller)
- Lightwave Transmission: use lightwave (e.g., laser beam) to communicate.
![TypeOfWirelessTransmission](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/TypeOfWirelessTransmission.png)

> [!info]+ Communication Satellites
> - Satellite likes a microwave repeater in the sky
> - It listens and amplifies the incoming signal from somewhere on the earth, then rebroadcasts it at another frequency to another part on Earth