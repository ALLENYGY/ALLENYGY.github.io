# Circuit Design

## Combinacial Circuit Design

1. Find Input and Output
2. Truth Table
3. K-Map Simplify
4. Circuit  

## Sequencial Circuit Design

### Sequencial Circuit Analysis

- Write Equations
  - Clock equation *时钟方程*
  - Ouput equation *输出方程*
  - Drive equation *驱动方程*
  - State equation *状态方程*
- List State
  - 状态表
  - 状态图
  - 时序图
- Function
  - 功能
  - 是否自启动 存在无效状态则不能自启动

#### Example-1

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/J96m7Y.png' alt='J96m7Y'/>

- Equation
  - Clock equation
    - $CP_{0}=CP_{1}=CP_{2}=CP_{3}$
  - Ouput equation

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/JRr3J4.png' alt='JRr3J4'/>

- Equation
  - Clock equation
    - $CP_{0}=CP_{1}=CP_{2}=CP_{3}$
  - Ouput equation
    - None
  - Dirve equation
    - $J_{0}=\overline {Q_{3}^{n}},K_{0}=Q_{3}^{n}$
    - $J_{1}=Q_{0}^{n},K_{1}=\overline {Q_{0}^{n}}$
    - $J_{2}=Q_{1}^{n},K_{2}=\overline {Q_{1}^{n}}$
    - $J_{3}=Q_{2}^{n},K_{3}=\overline {Q_{2}^{n}}$
  - State equation
    - Feature equation: $Q^{n+1}=J\overline{Q^{n}}+\overline{K}{Q^{n}}$
    - $Q_{0}^{n+1}=\overline {Q_{3}^{n}} \ \overline{Q_{0}^{n}}+\overline{Q_{3}^{n}}{Q_{0}^{n}}=\overline{Q_{3}^{n}}$
    - $Q_{1}^{n+1}={Q_{0}^{n}} \ \overline{Q_{1}^{n}}+{Q_{0}^{n}}{Q_{1}^{n}}=Q_0^{n}$
    - $Q_{2}^{n+1}={Q_{1}^{n}} \ \overline{Q_{2}^{n}}+{Q_{1}^{n}}{Q_{2}^{n}}=Q_1^{n}$
    - $Q_{3}^{n+1}={Q_{2}^{n}} \ \overline{Q_{3}^{n}}+{Q_{2}^{n}}{Q_{3}^{n}}=Q_2^{n}$
- State

|$Q_{0}^{n}$|$Q_{1}^{n}$|$Q_{2}^{n}$|$Q_{3}^{n}$|$Q_{0}^{n+1}$|$Q_{1}^{n+1}$|$Q_{2}^{n+1}$|$Q_{3}^{n+1}$|
|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
|$0$|$0$|$0$|$0$|$1$|$0$|$0$|$0$|
|$0$|$0$|$0$|$1$|$0$|$0$|$0$|$0$|
|$0$|$0$|$1$|$0$|$1$|$0$|$0$|$1$|
|$0$|$0$|$1$|$1$|$0$|$0$|$0$|$1$|
|$0$|$1$|$0$|$0$|$1$|$0$|$1$|$0$|
|$0$|$1$|$0$|$1$|$0$|$0$|$1$|$0$|
|$0$|$1$|$1$|$0$|$1$|$0$|$1$|$1$|
|$0$|$1$|$1$|$1$|$0$|$0$|$1$|$1$|
|$1$|$0$|$0$|$0$|$1$|$1$|$0$|$0$|
|$1$|$0$|$0$|$1$|$0$|$1$|$0$|$0$|
|$1$|$0$|$1$|$0$|$1$|$1$|$0$|$1$|
|$1$|$0$|$1$|$1$|$0$|$1$|$0$|$1$|
|$1$|$1$|$0$|$0$|$1$|$1$|$1$|$0$|
|$1$|$1$|$0$|$1$|$0$|$1$|$1$|$0$|
|$1$|$1$|$1$|$0$|$1$|$1$|$1$|$1$|
|$1$|$1$|$1$|$1$|$0$|$1$|$1$|$1$|

Valid status
$0000 >1000>1100>1110>1111>0111>0011>0001>0000$
Invalid status
$0010>1001>0100>1010>1101>0110>1011>0101>0010$

### Design Sequencial Circuit

1. State Diagram
2. State Equation
3. Output Equation
4. Flip-Flop
5. Circuit

#### Example-2

Design a finite state machine (FSM) for a counter that counts through the 3-bit prime numbers downwards and loop: $\{7>5>3>2>7>5>3>2\}$. Assume the counter starts with initial prime set to 111 as its first 3 bit prime number. (12 points)

1. You need to provide the state transition diagram. Assume that the state is stored in three D Flip Flops. Hint: The set of all 3-bit prime numbers includes 2, 3, 5 and 7. (4 points)

- State Diagram

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/StateDiagram-2.png' alt='StateDiagram-2'/>

2. Design the sequential circuit for the counter. The circuit is driven by the clock. The output is a 7 segment LED display. The various digits from 0 through 9 can be displayed using a 7-segment display as shown in the following figure.

|$Q_{2}^{n}$|$Q_{1}^{n}$|$Q_{0}^{n}$|$Q_{2}^{n+1}$|$Q_{1}^{n+1}$|$Q_{0}^{n+1}$|$a$|$b$|$c$|$d$|$e$|$f$|$g$|$LED$|
|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
|$1$|$1$|$1$|$1$|$0$|$1$|$1$|$1$|$1$|$0$|$0$|$0$|$0$|$7$|
|$1$|$0$|$1$|$0$|$1$|$1$|$1$|$0$|$1$|$1$|$0$|$1$|$1$|$5$|
|$0$|$1$|$1$|$0$|$1$|$0$|$1$|$1$|$1$|$1$|$0$|$0$|$1$|$3$|
|$0$|$1$|$0$|$1$|$1$|$1$|$1$|$1$|$0$|$1$|$1$|$0$|$1$|$2$|

$a=1$
$b=\overline{Q_{2}^{n}}+Q_{1}^{n}+\overline{Q_{0}^{n}}$
$c=Q_{2}^{n}+\overline{Q_{1}^{n}}+Q_{0}^{n}$
$d=\overline{Q_{2}^{n}}+\overline{Q_{1}^{n}}+\overline{Q_{0}^{n}}$
$e=\overline{Q_{2}^{n}}Q_{1}^{n}\overline{Q_{0}^{n}}$
$f={Q_{2}^{n}}\overline{Q_{1}^{n}}Q_{0}^{n}$
$g=\overline{Q_{2}^{n}}+\overline{Q_{1}^{n}}+\overline{Q_{0}^{n}}$

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/LED-1.png' alt='LED-1'/>
