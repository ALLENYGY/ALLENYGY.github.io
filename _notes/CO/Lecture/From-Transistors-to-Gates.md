---
Title: "[[From-Transistors-to-Gates]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - CO
  - Lec4
created: 2023-11-03T00:59
updated: 2024-03-21T18:50
---
# [[From-Transistors-to-Gates]]

<div align=center><img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-ClaudeShannon.png" width="  "></div>

- Claude Shannon
  - His master's thesis in 1937, A Symbolic Analysis of Relay and Switching Circuits, is considered as "possibly the most important, and also the most famous, master's thesis of the century.”
  - He came up with the idea that electrical switches can be used to do Boolean logic
  <div align=center><img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-SwitchtoBooleanExpression.png" alt="SwitchtoBooleanExpression" /></div>

- Relay *继电器*
- <img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-Relay.png"/>
- Vacuum Tube *真空管*
- <div align=center><img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-VacuumTube.png" width="60%"/></div>
- Transitor *晶体管*
- <img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-Transistor.png" />
  
## *Transistor*

A transistor is a discrete electronic component that can behave like a switch *可视为开关*

- Tiny, cheap, flexible and reliable
  - onducts when VGS is high (N Type transistor) (close)
  - Blocks when VGS is 0 (open)

## *CMOS Transistors*

Complementary Metal-Oxide Semiconductor *互补金属氧化物半导体*

- Two types: P-type (positive) and N-type (negative)
  - P-type
    - Open (insulating) if gate is “on” = 1 *激活时(1)阻断*
    - Closed (conducting) if gate is “off” = 0 *休眠时(0)导通*
  - N-type
    - Open if gate is “off” = 0 *激活时(1)导通*
    - Closed if gate is “on” = 1 *休眠时(0)阻断*

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-COMS.png"/>

## *Logical Gates*

Boolean functions are implemented in digital computer circuits called logic gates.

- A gate is an electronic device that produces a result based on two or more input values.
- In reality, gates consist of one to six transistors, but digital designers think of them as a single unit.
- Integrated circuits contain collections of gates suited to a particular purpose.

### *Inverter Gate* *(NOT)* *非*

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-InverterGate.png"/>

- In = 0v -> P conduct N insulate -> Out is 1 (2.9 v)
- In = 1v -> P insulate N conduct -> Out is 0 (0 v)

### *AND/NAND Gate* *与*

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-AND/NAND.png"/>

AND consists of NAND and NOT gates.

### *NOR Gate* *异或*

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-NorGate.png"/>

### *OR Gate* *或*

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-ORGate.png"/>

OR Gate consists of NOR and NOT gates.

## *Universal Logical Gate*

A universal gate is a gate which can implement any Boolean function without need to use any other gate type.

- The NAND and NOR gates are universal gates.
- Demorgans'Law
  - $\overline{X*Y}=\overline{X}+\overline{Y}$
  - $\overline{X+Y}=\overline{X}*\overline{Y}$

### Prove NAND is a universal gate $\overline{XY}$

- $NOT: \overline{X}=\overline{XX}$
- $OR: X+Y=\overline{\overline{X}}+\overline{\overline{Y}}=\overline{\overline{X}*\overline{Y}}$
- $AND: XY=\overline{\overline{XY}}$

### Prove NOR is a universal gate $\overline{X+Y}$

- $NOT: \overline{X}=\overline{X+X}$
- $OR: X+Y=\overline{\overline{X+Y}}$
- $AND: XY=\overline{\overline{X}}*\overline{\overline{Y}}=\overline{\overline{X}+\overline{Y}}$

Demorgans'Law 记忆技巧

- $* -> +$ 帽子不变,一分一和
  - $\overline{X*Y}=\overline{X}+\overline{Y}$
  - $\overline{X+Y}=\overline{X}*\overline{Y}$
