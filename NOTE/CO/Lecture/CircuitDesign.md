# Circuit Design

## Combinacial Circuit Design

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
  - 是否自启动

#### Example

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/JRr3J4.png' alt='JRr3J4'/>

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