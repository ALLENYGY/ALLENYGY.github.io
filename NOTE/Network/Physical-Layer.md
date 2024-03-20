---
Create Time: 19th March 2024
Title: "[[Physical-Layer]]"
status: UNFINISHED
tags:
  - NOTE
  - Network
  - Lec2
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

#### Twisted-pair 

- A twisted pair consists of two insulated copper wires, typically about 1 mm think.
- ![Twisted-pair](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Network/Twisted-Pair.png)