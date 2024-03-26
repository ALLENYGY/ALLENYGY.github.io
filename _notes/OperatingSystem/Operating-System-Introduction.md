---
Create Time: 22nd February 2024
Title: "[[Operating-System-Introduction]]"
Author:
  - AllenYGY
tags:
  - OS
  - NOTE
  - Introduction
  - Lec1
created: 2024-01-20T17:14
updated: 2024-03-26T19:14
---

# [[Operating-System-Introduction]]

## **Computer System Architecture**

**主要由`Memory`,`CPU`,`I/O Devices`构成**

- Memory
- CPU
- I/O Devices
  - disks
  - mouse
  - keyboard
  - printer
  - monitor
  - ...

![ComputerSystemArchitecture](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/ComputerSystemArchitecture.png)

---

### **I/O Device In Computer**

![ComputerSystemArchitecture](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/ComputerSystemArchitecture.png)

> [!tip]- I/O devices and the CPU can work concurrently
> **I/O设备与CPU并发工作**
> - 这意味着CPU可以处理指令，同时I/O设备可以进行数据传输，它们不必等待彼此完成任务才开始工作。

> [!tip]- Controller
> - 每个I/O设备都通过一个控制器与系统总线连接。控制器负责管理与特定I/O设备的数据传输。
> - 例如，磁盘驱动器通过磁盘控制器连接，鼠标和键盘可能通过USB控制器连接。
> - 设备控制器负责管理特定设备的操作，并且每个控制器都有其自己的本地缓冲区。
> - 控制器确保数据正确无误地在设备和计算机的内存之间传输。

> [!tip]- Each device controller is in charge of a particular device type
> - 每个设备控制器被一个特定的设备控制

> [!tip]- Each device controller has a local buffer
> - 每个设备控制器都有一个本地缓存

> [!tip]- Local Buffer  **本地缓冲区**
> - 每个设备控制器都有一个本地缓冲区（或本地内存），用于临时存储从设备传输的数据或要传输到设备的数据。
> - 缓冲区可以平衡CPU和设备之间的速度差异，因为CPU通常比I/O设备快得多。

> [!tip]- System Bus
> **系统总线**
> - 系统总线是连接CPU、内存和所有I/O设备控制器的通道。
> - 它允许数据在CPU、内存和I/O设备之间传输。

> [!tip]- I/O is between the device and local buffer of controller
> - IO 发生在设备与控制器的缓冲区之间

> [!tip]- Memory
> **内存**
> - 在图中，内存单独显示，表示它与CPU和所有I/O设备通过系统总线相连。
> - 内存用于存储CPU当前正在处理的数据和指令，以及等待被I/O设备处理的数据。

---

### **CPU and Memory in Computer**

**CPU与Memory间的关系** 可以分成三种模型

> [!tip]- Single Processor & Multiple Processor  **单处理器** 和 **多处理器**
> - **单处理器**
> - 这是最基本的配置，有一个CPU负责处理所有计算任务。
> 	- 这个CPU有自己的*寄存器*和*缓存*来处理指令和数据。
> - **多处理器**
> - 在这种配置中，有两个或更多的独立CPU或处理器 
> 	- 与单处理器相同每个CPU都有自己的*寄存器*和*缓存*。
> 	- 这些处理器**共享主内存**，允许它们处理更多的任务和并行计算。

> [!tip]- Dual Core **双核处理器**
> - 双核处理器实际上是一个包含两个*独立核心*的单个CPU。
> 	- 每个核心都有自己的*Regisiter*和 *L1 cache*。
> 	- 它们共享一个二级缓存*L2 cache*和 *Main Memory*。
> 	- 这允许一个处理器在同一时间内处理更多的任务。

> [!tip]- NUMA  **非统一内存访问系统**
> - NUMA是一种内存设计，其中多个处理器被分配专用的**内存块**。
> - 每个CPU可以访问自己的内存`memory0, memory1,....`，以及其他CPU的内存，但访问其他CPU的内存会有更高的延迟。
> - 这种设计可以提高处理器访问内存的速度和效率，特别是在处理大量数据或高性能计算任务时。

![CPU](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/CPU.png)

---
## **Operating Systems**

> [!abstract]+ 
> - 操作系统作为用户和计算机硬件的中介
> - 它主要包括kernel,以及系统程序，应用程序，中间件(软件框架，如数据库，多媒体，...)
> - 操作系统是中断驱动的
> 	- 内核中的设备驱动器管理支配设备
> 	- 设备控制器通过中断告知CPU，设备已经完成操作
> 	- 内核的代码只有当中断发生时才执行	

> [!tip]- Operating System: Intermediary between a User and the Computer Hardware ----用户与操作系统的中介
> - An operating system provides interface to a user, runs a program for a user
> - Application Program: Compilers, web browsers....
> - Computer Hardware: CPU, Memory, I/O devices...
> ![Intermediary](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Intermediary.png)

> [!info]+ General goals of operation systems
> - Execute user programs and make solving user problems easier *更简单的执行 User Programs* 
> - Make the computer system convenient to use *更方便的使用Computer System*
> - Use the computer hardware in an efficient manner *更高效的使用Computer Hardware*

%% > [!quote] A definition: “Everything a vendor ships when you order an operating system” %%

> [!Question]+ What is Operating System ?
> OS Include:
> - **Kernel** Part of a operating system, resides in memory at all times on the computer
>    ![KernelInMemory](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/KernelInMemory.png)
> - **Others**
> 	- **System programs** -all programs associated with the operating system, but not in kernel 
> 	- **Application programs** - all programs not associated with the operating system 
> 	- **Middleware**`中间件`– a set of software frameworks that provide additional services to application developers such as:  databases, multimedia, graphics

> [!abstract]+ Operating System Is **Interrupt-Driven**
> - Device driver inside the kernel knows how to talk and manage the device 
>   *在kernel中的设备驱动知道如何管理设备以及和设备交流*
> - Device driver provides **uniform interface** between **controller** and **kernel** 
>   *设备驱动器为控制器和内核提供统一接口*
> - Each device controller **informs CPU** that it has **finished** its **operation by causing an interrupt** 
> *每个设备控制器通过中断告知CPU，它已经完成了它的操作*
> The code of the kernel is in memory all the time but the code of the kernel is only executed when there is an interrupt, on demand!
>**内核的代码一直在内存中，但内核的代码只有在出现中断时才会按需执行！**
![Device Driver In Kernel](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/DeviceDriverInKernel.png)


### Interrupts 中断

> [!abstract]+ 
> - 当软硬件发生需要OS立刻处理的事件时中断发生
> 	- 在软件层面：由`Error`或者`System call`引起中断
> 	- 在硬件层面：由`Device` 引发
> - 由ISR决定对于不同中断应该采取什么行动
> 	

> [!info]+ Interrupt
> An **interrupt** is a signal emitted by **hardware** or **software** when a process or an event needs immediate attention
> - Software: A trap or exception is a software-generated interrupt caused either by an error or a user request *(system call)*
> - Hardware: Device
> [!abstract] Interrupt Service Routines (ISR)
> ISR inside the kernel determine what action should be taken for each type of interrupt

#### **Interrupt Handling Steps**

> [!success]+ When there is an interrupt, the operating system
> **Preserves the state of the CPU** by storing registers and the program counter(PC) for the software that was just interrupted (so that the same software can be restarted later).
> **Determine type of interrupt**
> - check Interrupt vector to get the address of corresponding ISR for this interrupt (used on all modern computers)
> **Runs ISR in kernel** to handle interrupt

---

#### **DMA**

>[!abstract]+ Direct Memory Access (DMA)
> <span/>
> ![DMA](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/DMA.png)
>
> 1. Device controller transfers blocks of data from buffer **directly to main memory without CPU intervention**, In the meantime the CPU can work on something else.
>
> - DMA允许设备控制器直接将数据块从缓冲区传输到主内存，而不需要CPU干预。
> - 这样做的好处是CPU可以同时进行其他计算任务，而不需要管理这些数据传输。
>
> 2. **Only one interrupt** is generated per block
> 3. **High transfer speed**: not byte by byte, but block by block

---

#### **Interrupt-Driven I/O Cycle: Timeline View**

> [!success]+ Timeline View
> **CPU**
>
> - CPU有两种状态，一种是执行用户程序，另一种是处理I/O中断。
>
> **I/O Device**
>
> - I/O设备的状态可以是空闲的或正在传输数据。
>
> **I/O Request**
>
> - 当I/O设备准备好数据交换时，它会发出I/O请求。这通常发生在读取或写入操作开始时。
>
> **Interrupt**
>
> - 当I/O设备完成数据传输时，它会发出中断信号给CPU。在图表中，这些中断用垂直的绿线表示。
>
> ![Timeline](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Interrupt-Driven-Timeline.png)
>
> **Interrupt Dealing**
>
> - CPU在执行用户程序的过程中会接收到中断信号，然后切换到处理I/O中断的状态。这个过程中，CPU会停止当前的用户程序执行，保存必要的状态，并开始执行与中断处理相关的指令。
>
> **Transfer Done**
>
> - 一旦中断处理完成，I/O设备会标记为传输完成，并准备接收下一个I/O请求。
>
> **User Program Done**
>
> - 在I/O设备忙于传输数据（绿线下降部分）和CPU处理中断之间的时间，CPU会继续执行用户程序。
>
> **Red Circle**
>
> - 图表中的红色圆圈可能代表一个特定事件或异常，例如一个处理延迟或一个需要特殊注意的中断。
> [!abstract]+
> 总的来说，这个时间线展示了中断驱动I/O如何使CPU在等待I/O操作完成时可以继续其他任务，从而提高了系统的效率。
> 当设备完成数据传输时，它通过中断通知CPU，CPU随后会处理该中断，并在处理完毕后恢复用户程序的执行。这种机制减少了CPU等待I/O操作的空闲时间。
> ![WorkflowView](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Interrupt-Driven-WorkflowView.png)

---

#### **Interrupt-Driven I/O Cycle: Two Methods**

![TwoIOMethods](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/TwoIOMethods.png)
这张图展示了中断驱动I/O周期的两种方法。
在两种情况下，I/O操作都是由中断控制的，但是用户程序对I/O完成的处理方式不同。

1. **Synchronous Method**
   - 在这种方法中，用户程序启动I/O操作后，会一直等待直到I/O操作完成后才继续执行。这是一个同步I/O操作，因为用户程序在请求的I/O操作完成之前不会进行任何其他工作。
   - 用户程序进入等待状态，操作系统的设备驱动程序启动硬件操作，数据传输开始。
   - 一旦数据传输完成，中断处理程序（interrupt handler）会处理相应的中断，并控制权返回到用户程序，用户程序继续执行。
   - > [!example]-
     > 想象你去银行取号等待办理业务。这个过程可以类比为一个计算机中的同步I/O操作。
    > 1. **取号（启动I/O操作）**:
    >    - 你走进银行，取一个号码，并等待你的号码被叫到。取号就像是一个程序请求I/O操作，比如从磁盘读取数据。
    > 2. **等待（等待I/O完成）**:
    >    - 取完号码后，你坐在等候区，不能离开，也不能做其他事情。你必须等待，直到银行工作人员叫到你的号码。在这个例子中，等待就像是程序在等待I/O操作完成。程序在这个等待期间不能执行其他任务，它被阻塞了。
    > 3. **办理业务（处理I/O结果）**:
    >    - 当你的号码被叫到，你前往柜台，开始与银行职员交谈，完成你的业务。这一部分对应于中断处理程序在I/O操作完成后运行，处理数据。
    > 4. **返回（控制权返回用户程序）**:
    >    - 业务办理完成后，你离开银行，可能回家或者去做其他事情。这就像是控制权从I/O操作返回到用户程序，用户程序继续执行其它任务。
    > 在这个同步I/O操作的例子中，你（用户程序）在整个等待过程中无法进行其他活动。你必须等待直到被叫号（I/O操作完成），这样可能导致效率低下，因为你的时间被完全占据在等待过程中，无法同时进行多个任务。这就是同步I/O可能引发的性能问题，尤其是在处理长时间的I/O操作时。

2. **Asynchronous Method**
   - 在这种方法中，用户程序在启动I/O操作后不会等待I/O完成，而是立即继续执行其他工作。这是一个异步I/O操作，用户程序可以在I/O操作正在进行时做其他事情。
   - 用户程序发起I/O请求后，控制权立即返回，无需等待硬件操作完成。
   - 数据传输和中断处理会在后台进行，而用户程序在这个过程中可以继续执行其他任务。
   - > [!example]-
     > 想象一下你在做饭，同时你想听音乐。你有一张CD和一个CD播放器（这里的CD播放器就像一个需要读取数据的I/O设备）。
    > 1. **启动播放器（请求I/O操作）**:
    >    - 你把CD放入播放器并按下播放按钮。这一动作启动了播放器的内部机械装置去读取CD上的数据。
    > 2. **继续做饭（用户程序继续执行）**:
    >    - 一旦音乐开始播放，你不需要站在播放器旁边等待每首歌曲加载。相反，你可以继续做饭。这个阶段就像是服务器处理其他客户端请求或者进行其他工作。
    > 3. **歌曲播放完毕（I/O操作完成）**:
    >    - 当一首歌曲播放完毕，CD播放器会自动读取下一首歌曲。如果我们把这比喻成一个中断，那么每当一首歌播放完毕，播放器就“中断”当前状态，转而开始播放下一首歌。
    > 4. **不需要干预**:
    >    - 在整个过程中，你无需干预播放器的操作。你可以专注于做饭，而播放器在后台自行处理CD的播放。
    > 这就是一个日常生活中的异步I/O示例：你启动了一个需要时间完成的任务（CD播放），但在它完成之前，你可以去做别的事情（做饭），而不是等待它完成。当播放器需要你注意（比如CD播放完毕）时，它会以音乐停止的方式提醒你，这就好比是一个中断信号。

这两种方法的选择取决于程序设计的需求。

- **同步I/O操作简单但可能效率较低**，因为它会阻塞程序执行；
- **异步I/O操作更复杂**，但允许多任务同时进行，提高了效率。在多线程环境中，异步I/O特别有用，因为它允许程序在等待I/O完成的同时，继续在其他线程上工作。

---

## **Operating System Activities**

- Operating system does a lot of management work
  - Caching
  - Process management
  - Memory management
  - File management
  - Secondary storage management
  - I/O
  - Protection and security

---

### **Caching**

![Cache](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Cache.png)

- Caching: Copy information from slower into faster storage system
![TransferDirection](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/TransferDirection.png)

- Data access procedure: faster storage (cache) checked first
  - Data exist, information is used directly from the cache (fast)
  - Data not exist , data are copied from slower device to the faster.
- Cache design consideration
  - size
  - content replacement policy
- Cache coherency
  - The coordination of the contents of caches such that an update to a value stored in one cache is immediately reflected in all other caches that hold that value

![CharacteristicsofVariousTypesofStorage](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/CharacteristicsofVariousTypesofStorage.png)

---

### **Process Management**

> [!abstract]+ **Program vs Process**
> A process is a program in execution
>
> - Program is a passive entity, on storage
> - Process is an active entity, in memory

> [!abstract]+ **Process**
>
> - Creation, execution needs resources
>   - CPU, memory, I/O, files
>   - Initialization data
> - Termination requires reclaim of any reusable resources

- Process can be single-threaded, or multi-threaded
- Each process has a program counter to specify location of next instruction to execute

---

**Multiprogramming VS Multitasking**

- **Multiprogramming** : A subset of total jobs are kept in memory at the same time
  - Job scheduling: choose which jobs to load into memory.
    - When job has to wait (for I/O for example), OS switches to another job

- **Multitasking**: The CPU switches jobs so frequently to increase interactions with users
  - CPU scheduling: choose which job will run next If several jobs are ready to run at the same time
- ![Scheduling](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Multiprogramming.png)

---

 **Dual Mode**

![Dual Mode](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Dual-Mode.png)

- User Mode
- Kernel Mode

Dual-mode operation allows OS to protect itself and other system components

> [!abstract]- Dual-Mode
>
> 1. **用户模式（User mode）**:
>    - 当进程运行在用户模式下时，它被限制只能执行非特权指令。用户模式下的进程不能直接执行可能会影响系统整体操作的操作，比如访问硬件设备或者修改关键系统数据。
>
> 2. **内核模式（Kernel mode）**:
>    - 当进程运行在内核模式下时，它可以执行任何CPU指令。这通常包括访问硬件设备和内存管理操作。只有操作系统核心部分的代码才能在内核模式下运行。
>
> 3. **系统调用（System call）**:
>    - 当用户进程需要操作系统服务时（比如读取文件、创建进程等），它会执行一个系统调用。这通常通过执行一个特殊的指令（如`trap`）来实现，这会导致CPU从用户模式切换到内核模式。
>
> 4. **模式位（Mode bit）**:
>    - CPU使用一个模式位来指示当前是在用户模式还是内核模式下执行。用户模式的模式位为1，内核模式的模式位为0。
>
> 5. **执行系统调用**:
>    - 一旦进入内核模式，操作系统的内核会接管控制权，执行系统调用所请求的服务。
>
> 6. **返回用户模式**:
>    - 系统服务完成后，操作系统会将控制权返回给用户进程，并且将模式位设置回1，进程继续在用户模式下运行。
>
> 双模式操作的关键好处是提供了一个安全层，确保用户进程不能直接执行可能会破坏系统稳定性或安全性的操作。这种机制允许操作系统保护自己和其他系统组件不受恶意或错误编程的用户进程的影响。

---

> [!tip]+ Process management activities include:
>
> - Creating and deleting both user and system processes
> - Suspending and resuming processes
> - Process synchronization
> - Process communication
> - Deadlock handling

---

### **Memory Management**

- To execute a program
  - All (or part) of the **instructions** of the **program** must be *in memory*
  - All (or part) of the **data** needed by the **program** must be *in memory*

> [!tip]+ Memory management activities include
>
> 1. *Keeping track* of which parts of memory are currently being used and by whom
>
> 2. Deciding which processes and data (or part of them) to move into and out of memory
>
> 3. Allocating and de-allocating memory space as needed

---

### **File System Management**

- Abstracts physical properties to logical storage unit - file
- Files are usually organized into directories
- Access control determines who can access what

> [!tip]+ File system activities include
>
> 1. Creating and deleting files and directories
>
> 2. Mapping files onto secondary storage

---

### **Secondary Storage Management**

> [!tip]+ Secondary storage management activities
>
> 1. Mounting and unmounting
> 2. Free-space management
> 3. Storage allocation
> 4. Disk scheduling
> 5. Partitioning
> 6. Protection

Disks usually are used to store data that do not fit in main memory or data that must be kept for a “long” period of time

- Proper management is of central importance
- Entire speed of computer operation hinges on disk subsystem and its algorithms

---

### **I/O Subsystem**

> [!tip]+ I/O subsystem responsible for
>
> - Memory management of I/O including buffering (storing data temporarily while it is being transferred), caching (storing parts of data in faster storage for performance), spooling (the overlapping of output of one job with input of other jobs)
> - General device-driver interface
> - Drivers for specific hardware devices

One purpose of OS is to hide peculiarities of hardware devices from the user

---

### **Protection and Security**

**Protection**

- Any mechanism for controlling access of processes or users to resources defined by the OS
**Security**
- defense of the system against internal and external attacks 4
  - Huge range, including denial-of-service, worms, viruses, identity theft, theft of service
- Systems generally first distinguish among users, to determine who can do what
  - User identities (user IDs, security IDs) include name and associated number, one per user
  - Group identifier (group ID) allows set of users to be defined

---
