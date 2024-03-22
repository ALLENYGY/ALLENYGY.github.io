---
Create Time: 19th March 2024
Title: "[[Threads]]"
status: UNFINISHED
tags:
  - OS
  - NOTE
  - Lec4
Author:
  - AllenYGY
created: 2024-03-20T17:14
updated: 2024-03-22
---

# [[Threads]]

## Process vs. Thread

### Thread

> [!question]+ What is Threads?
>  A thread is a single sequence stream within a process.

> [!info]+ Threads Property
> The threads of a process share resources at any given time.
> Resources including
> - executable code 
> - the values of its variables `code section, data section, OS resources`

> [!question]+ What thread can do?
> Most modern applications are multi-threaded 
> - Kernels are generally multi-threaded
>
> Multiple tasks in an application can be implemented by separate threads
> - Example: The following tasks can do in an application:
>	 - Update display
> 	- Fetch data
> 	- Spell checking 
> 	- Answer a network request 

> [!success]+ Advantage of Threads
> 1. Economy 
> 	- Process creation: heavy-weight
> 	- Thread creation: light-weight	
> 2. Resource Sharing
> 3. Efficiency 
> 	- Can simplify code
> 4.Responsiveness
> 	- May allow continued execution if part of process is blocked 
> 	- 即使进程的部分被阻塞，仍可以继续运行
> 5. Scalability
> 	- Process can take advantage of multicore architectures, with one or two threads per core

> [!failure]+ Disadvantage of Threads
> More difficult to program with threads
> New categories of bug are possible

> [!abstract]+ Similarities
> Threads vs. Processes
> - Threads share CPU and only one thread active (running) at a time. `在一个进程中`
> - Threads within a processes execute sequentially. 
> - Thread can create children. 
> - If one thread is blocked, another thread can run.

> [!abstract]+ Difference
> - A thread is a component of a process 
> - Multiple threads can exist within one process.
> - Multiple threads execute concurrently and share resources such as memory, while different processes do not share these resources.

|                          Processes                          |              Threads              |
|:-----------------------------------------------------------:|:---------------------------------:|
|                    Typically independent                    |       Subsets of a process        |
|                   More state information                    | Share process state and resources |
|                   Separate address spaces                   |        Same address space         |
| Interact throughIPC models: (shared memory/message passing) |             Variables             |
|                  Slower  context switching                  |     Faster context switching      |
|            Might or might not assist one another            |  Designed to assist one another   |


## Multicore Programming

Multi-core or multi-processor systems putting pressure on programmers 

Challenges include:
- Dividing activities 
- Load Balance Data splitting 
- Data dependency 
- Testing and debugging

### Concurrency vs. Parallelism

> [!question]+ What is Concurrency ? `并发`
> - More than one task are progressing
> - Single processor / core, CPU scheduler providing concurrency by doing context switches
> - 两个事件或多个事件在同一时间间隔内发生。事件在宏观上同时发生，但微观上是交替发生的
![Concurrency ](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Concurrency.png)

> [!question]+ What is Parallelism ? `并行`
> - More than one task are progressing
> - Single processor / core, CPU scheduler providing concurrency by doing context switches 
> - 指两个或者多个事件在同一时刻同时发生
![Parallelism](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Parallelism.png)

> [!info]+ Type of Parallelism
> 1. **Data parallelism** – distributes subsets of the same data across multiple cores, same operation on each
> 	- Example: when doing image processing, two cores can each process half of the image
> 	- ![Data Parallelism](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Data-Parallelism.png)
> 1. **Task parallelism** – distributing threads across cores, each thread performing unique operation
> 	- Example: when doing sound processing, the sound data can move through each core in sequence, with each core doing a different kind of sound processing (filtering, echo, etc.)
> 	- ![Task Parallelism](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Task-Parallelism.png)

> [!todo]+ Parallelism implies concurrency, but concurrency does not imply parallelism.

### Amdahl’s Law

> [!info]+ Amdahl's Law
> Identifies performance gains from adding additional cores to an application that has both serial and parallel components
> 它是用来估计在给定部分程序能够并行化的前提下，多处理器系统相比于单处理器系统在执行该程序时能达到的最大加速比。
> $$Speedup = \frac{1}{S + \frac{(1-S)}{N}}$$ 
> - $Speedup$ 是系统性能的提升倍数。
> - S is serial portion `串行部分`
> - $N$ processing cores是处理器的数量。

> [!tip]+ Proof:
> - `S` is serial portion, `P` is parallel portion of program.
>   So `S + P = = 1` 
> - Assume that running time on one core: $R_1 = S + P = 1$
> - Then running time on `N` cores:  $R_N \geq S + \frac{P}{N} = S + \frac{1-S}{N}$
> (≥, not =, because of extra communication required between threads.)
> - Therefore,   $Speedup = \frac{R_1}{R_N} \leq  \frac{1} {S + \frac{1 - S}{N}}$

### Gustafson’s Law

> [!info]+ Gustafson's Law
> Gustafson's law addresses the shortcomings of Amdahl’s law
> It is based on the assumption of a fixed problem size
> $$Speedup = S + P \times N = S+ (1-S) \times N = N+(1-N)*S$$
> $Speedup$: theoretical scaled speedup of the program with parallelism.
>  N,S,P: meanings are same as in Amdahl algorithm.

> [!summary]+
>  Gustafson's Law强调了随着问题规模的增加，可以实现更高的并行度
>  Amdahl's Law则强调了并行计算的理论上限。两者都在并行计算领域提供了重要的视角。

## User Threads and Kernel Threads

### User Threads

> [!info]+ User Threads
> Management^[thread creation, thread scheduling, etc.] done by user-level threads library.

> [!success]+ Advantages
> No need for OS support 
> Works even on very old or very simple OS that does not have system calls for thread management.
> No system call required 
> Fast: only need a library function call.

> [!failure]+ Disadvantages
> - A process with only one thread gets as much CPU time as a process with many threads. `分配不合理`
> - All the thread scheduling inside a process must be done at user level (not done by kernel)
> 	- Each thread must be nice and cooperate with the other threads in the process and regularly give CPU time to the other threads.
> 	- Program more complicated to write.

### Kernel Threads

> [!info]+ Kernel Threads
> Management^[thread creation, thread scheduling, etc.] supported by the kernel

> [!success]+ Advantages
> Kernel knows how many threads each process contains so it can give more CPU time to the processes with many threads. `Kernel更好分配任务`
> - No need for threads to cooperate for scheduling
> 	- Thread scheduling done automatically by kernel
> 	- User program simpler to write.

> [!failure]+ Disadvantages
> Every thread management operation requires a system call 
> Slower compared to user-level threads.
>  Kernel’s PCB data structures more complex
>  	- The kernel needs to keep track of both processes and threads inside processes.

## Multithreading Models 

- Many-to-One
- One-to-One
- Many-to-Many


## Thread Libraries
## Implicit Threading
## Threading Issues
