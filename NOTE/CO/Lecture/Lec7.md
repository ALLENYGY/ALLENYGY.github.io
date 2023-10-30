# *Finite State Machine*

## *The Concept of State*

- The output of a sequential circuit is a function of the current input and the previous state *时序电路的输出是当前输入和先前状态的函数*
- The state is stored in the storage element *状态存储在存储元件中*
- The new state is also a function of the previous state and the current input *新状态也是前一个状态和当前输入的函数*

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/20KSlQ.jpg' alt='20KSlQ'/>

## *Finite-State Machine* 有限状态机

- A system is a finite state machine if it has the following five properties:  
  - A finite number of states *有限状态*
  - A finite number of external inputs *有限外部输入*
  - A finite number of external outputs *有限外部输出*
  - An explicit specification of all allowed state transitions *所有合法状态转换的明确规范*
  - An explicit specification of the rules for each external output value *每个外部输出值的规则的明确规范*

### *State Diagram*

- Each state is shown with a circle, labeled with the state value – the contents of the circle are the outputs
- An arc represents a transition to a different state, with the inputs indicated on the label
每个状态都用一个圆圈显示，并标有状态值 - 圆圈的内容是输出
圆弧表示向不同状态的过渡，输入在标签上指示

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/kOuuts.jpg' alt='kOuuts'/>

- *3-bit counter*

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/1sA1to.jpg' alt='1sA1to'/>

- *FSM*

- Three groups of lights to be lit in a sequence：group 1 on, groups 1 & 2 on, all groups on.， all off. - 4 state
- The lights are on only if the main switch is on.

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/DFk7Pb.jpg' alt='DFk7Pb'/>
<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/d6pfq5.jpg' alt='d6pfq5'/>

### *Turing Machine vs FSM*

- A Turing machine is a finite state machine plus a tape memory.
- Each transition may be accompanied by an operation on the tape (move, read, write).
- Its total possible configurations are arbitrarily large, regardless of the size of the program; it expands towards infinity.
- Turing machines have more computational power than FSM.
