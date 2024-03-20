# *Computer*

- Definition:
  - electronic, digital, general purpose computing machine that automatically follows a step-by-step list of instructions for solving a problem.
  - This step-by-step list of instructions that a computer follows is also called a computer program.

- Computer Part:  case, motherboard, CPU, RAM, power supply, hard drive, graphic cards.

## *Turing Machine*

- In 1936, British mathematician Alan Turing developed a hypothetical device, the Turing machine, which is the abstract model of all computers
- A Turing machine consists of
  
  - a tape divided into cells
  - a moving read/write head
  - a state register storing the state of the Turing machine
  - a finite table of instruction specifying what the machine does when reading the content of the current cell:
    - move right/left; erase/write a symbol; change the state

- All things that can be computed can be computed by a Turing machine

### *Universal Turing Machine*

- Turing described a Turing machine that could simulate all other Turing machines.
  - inputs: data + a description of computation (Turing machine)
- A computer is a Universal Turing Machine!

## *Historical Development*

- Generation Zero: Mechanical Calculating Machines (1642-1945)  *机械计算机*
- The First Generation: Vacuum Tube Computers (1945-1953)  *真空管计算机*
- The Second Generation: Transistor Computers (1954-1965)  *晶体管计算机*
- The Third Generation: Integrated Circuit (IC) Computers (1965-1980)  *集成电路计算机*
- The Fourth Generation: VLSI Computers (1980-) *(very large scale integration computer)*

## *The von Neumann Architecture*

- stored-program architecture
- Both data and program are stored in the memory

- A Central Processing Unit (CPU)
  - Control unit *控制单元*
  - Arithmetic Logic Unit (ALU) *计算逻辑单元*
  - Registers
  - IR: Current Instruction
  - PC: store the address of next instruction
- Main memory
- I/O- system

- a single path between the main memory and CPU, called the von Neumann bottleneck
![The von Neumann Architecture](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-vonNeumannArchitecture.png)

### *Von Neumann Execution Cycle*

- *Fetch-decode-execute cycle*
  1. the control unit fetch the next instruction from the memory *控制单元取指令*
  2. the instruction is decoded into a language that the ALU understands *解码*
  3. data operands are fetched from the memory into the registers inside CPU *从内存获取数据操作数到寄存器*
  4. the ALU executes the instruction and places the result into the registers or memory *计算逻辑单元执行指令并把结果放到内存或寄存器*

### *The von Neumann Bottleneck*

- CPU and memory are separate
- All data and code are in the memory
- CPU is usually faster than memory
- CPU is forced to wait for needed data to be transferred to or from memory

### *The system bus model of the von Neumann Architecture*

![System-bus-model](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-System-bus-model.png)

## *Levels of Abstraction*

- *User level*: applications such as qq.exe  *app*
- *High level language*: C, Java, C++ *program language*
- *Assembly language*
- *Operating system*
- *Machine Language*: Instruction Set A
- *Control level*: micro-code or hardwired
- *Digital logic*: circuits, gates

### *Levels of Transformations*

![Levels-of-Transformations](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-Levels-of-Transformations-1.png)
![Levels-of-Transformations](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-Levels-of-Transformations-2.png)

- Problem -> Algorithm -> Program -> Instr Set Architecture -> Microarch -> Circuits -> Device

### *The Machine Levels*

- Instruction Set Architecture (ISA): instructions that a CPU can execute
- Microarchitecture: implementation of ISA
- Circuits: Details of electrical circuits
- Devices (transistors): Circuits are built by interconnecting transistors
- Bits: Transistors operate on bits (“0” or “1”) that represent data and information

### *Hardware VS Software*

![Layers-of-Transformations](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-Layers-of-Transformations.png)
![Hardware&Software](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/CO-Hardware&Software.png)

- Whatever can be done by hardware can also be done by software, and vice versa
- Hardware implementations are faster but fixed
- Software implementations are more flexible but slower
