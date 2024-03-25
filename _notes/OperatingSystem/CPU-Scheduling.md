---
Create Time: 19th March 2024
Title: "[[CPU-Scheduling]]"
status: UNFINISHED
tags:
  - OS
  - NOTE
  - Lec5
Author:
  - AllenYGY
created: 2024-03-20
updated: 2024-03-26T01:23
---

# [[CPU-Scheduling]]

## Basic Concept

To maximize CPU utilization
Using Multiprogramming

> [!info]+ CPU-I/O Burst Cycle
> - Process execution consists of a cycle of CPU execution and I/O wait 
> - CPU burst followed by I/O burst
> - ![Burst-Duration](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Burst-duration.png)
>  	- **短CPU突发**：大多数进程都会有大量的短时间CPU突发，这表示进程在执行较短时间的计算后就会等待I/O操作。
>  	- **长CPU突发**：只有少数进程会有较长时间的CPU突发，这些通常是计算密集型的进程，在执行更长时间的计算之后才会进行I/O操作。 

## CPU Scheduler `CPU调度程序`

> [!quote]+ The CPU scheduler selects a process from the processes in ready queue , and allocates the CPU to it  
> - Ready queue `就绪队列` may be ordered in various ways

> [!question]+ When does the CPU Scheduling  happen ？
> 1. switches from running to waiting state (non-preemptive`自愿` )
>     - Example: the process does an I/O system call.
> 1. switches from running to ready state (preemptive `非自愿`)
>     - Example: there is a clock interrupt.
> 3. switches from waiting to ready (preemptive)
>     - Example: there is a hard disk controller interrupt because the I/O is finished.
> 4. terminates (non-preemptive)

> [!abstract]+ Preemptive vs. Nonpreemptive Scheduling
> - When a process is pre-empted, `当进程非自愿离开CPU`
>  	- It is moved from its current processor
>  	- However, it still remains in memory and in ready queue `仍保留在就绪队列`
> - When a process is non-preemptive `当进程自愿离开CPU`
> 	- Process runs until completion or until they yield control of a processor `进程运行直至完成或让出处理器控制权`
> 	- Disadvantage: Unimportant processes can block important ones indefinitely
> 		- `进程易阻塞`

> [!question]+ Why preemptive scheduling is used?
> - Improve response times 
> - Create interactive environments (real-time)


## Scheduling Criteria
> [!info]+ Concept
> - **Throughput**: number of processes that complete their execution per time unit`吞吐量` 
> - **Response Time**: amount of time it takes from when a request was submitted until the first response is produced, not output (for time-sharing environment) `等待时间-进程在就绪队列中等待的总时间`
> - **Turnaround Time**: amount of time to execute a particular process (from start to end of process, including waiting time) `执行特定流程的时间(从流程的开始到结束，包括等待时间)`
> 	- Turnaround Time = Waiting time + time for all CPU bursts  

> [!info]+ Scheduling Criteria
> - *Maximize*
> 	- **CPU Utilization**^[keep the CPU as busy as possible]
> 	- **Throughput**^[Increase throughput as high as possible]
> - *Minimize* 
> 	- **Response time** 
> 	- **Waiting time** 
> 	- **Turnaround time**

## Scheduling Algorithm

> [!abstract]+ Scheduling Algorithm
> 1. First-Come, First-Served `FCFS`
> 
> 2. Shortest-Job-First `SJF`
> 
> 3. Priority Scheduling `PS`
> 
> 4. Round-Robin `RR`
> 
> 5. Multilevel Queue Scheduling `MQS`
> 
> 6. Multilevel Feedback Queue Scheduling `MFQS`

### First-Come, First-Served Scheduling `FCFS`

> [!tip]+ Scheduling
> - Suppose that the processes arrive in the ready queue at time $t = 0$ in the following order: $P_1, P_2, P_3$ 

| Process | Burst Time |
|:-------:|:----------:|
|   P1    |     24     |
|   P2    |     3      |
|   P3    |     3      |

> [!example]+ FCFS Example 
> - The Gantt Chart for the schedule is:
> - ![Gantt Schedule](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/GanttChart.png)
> - Waiting time: $P_1= 0; P_2= 24; P_3= 27$
> - Average waiting time: $\frac{0 + 24 + 27}{3} = 17$
> - Average turnaround time:  $\frac{24+27+30}{3} = 27$

> [!example]+ Change Example
> Suppose the order is changed to this $P_2, P_3, P_1$
> - The Gantt Chart for the schedule is:
> - ![GanttChart-1](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/GanttChart-1.png)
> - Waiting time: $P_1= 6; P_2= 0; P_3= 3$
> - Average waiting time: $\frac{6 + 0 + 3}{3} = 3$
> - Average turnaround time:  $\frac{30+6+3}{3} = 13$

> [!tip]+ Convoy effect`护送效应` - short process behind long process

### Shortest-Job-First Scheduling `SJF`

> [!tip]+ Scheduling
> - SJF is optimal – gives minimum average waiting time for a given set of processes 
> - The difficulty is knowing the length of the next CPU request  Could ask the user

| Process | Burst Time |
|:-------:|:----------:|
|   P1    |     6      |
|   P2    |     8      |
|   P3    |     7      |
|   P4    |     3      |

> [!example]+ SJF Example
> - The Gantt Chart for the schedule is:
> - ![GanttChart-2](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/GanttChart-2.png)
> - Average waiting time = $\frac{3 + 16 + 9 + 0}{4} = 7$ 
> - Average turnaround time = $\frac{3+9+16+24}{4} = 13$

#### Determining Length of Next CPU Burst-duration.png 

> [!info]+ Estimation Method
> Use the length of previous CPU bursts, with exponential averaging
> $\tau_{n+1} = \alpha \times t_n + (1 - \alpha) \times \tau_n$
> - $\tau_{n+1}$ 是对下一个CPU突发的预测时间。 
> - $t_n$ 是第n个CPU突发的实际长度。 
> - $\tau_n$ 是第n个CPU突发的预测时间（基于过去的观测）。 
> - $\alpha$ 是一个介于0和1之间的权重，用来平衡最近的实际CPU突发时间和之前的预测。
$\tau_{n+1} = \alpha t_n + (1 - \alpha)\alpha t_{n-1} + \ldots + (1 - \alpha)^j \alpha t_{n-j} + \ldots + (1 - \alpha)^{n+1} \tau_0$


### Shortest-remaining-time-first `SRTF`

> [!tip]+ Scheduling Algorithm
> The preemptive version of SJF is also called shortest-remaining-time-first 
> - **Preemption**: If a new process arrives in the ready queue while a current process is executing, the remaining time to complete the current process is compared with the total time required by the new process to finish. If the new process requires less time than what the current process has left, the current process is preempted (put back in the ready queue) and the CPU is given to the new process.
> -  **Efficiency**: This algorithm is effective in terms of average waiting time and turnaround time. By giving preference to processes that are closest to completion, it minimizes the amount of time each process has to wait to complete its execution.
> - **Starvation**: A potential downside of SRTF is that longer processes may suffer starvation; if shorter processes keep arriving, the longer processes may be postponed indefinitely.
> - **Dynamic**: Unlike SJF, which is static and decides on a process before it starts executing, SRTF has to make decisions dynamically as new processes arrive and as the remaining execution times of the processes in the ready queue change.

| Process   | Arrival Time | Burst Time |
| :-------: | :----------: | : -------: |
| P1        | 0            | 8          |
| P2        | 1            | 4          |
| P3        | 2            | 9          |
| P4        | 4            | 5          |

> [!example]+ SRTF Example
> - The Gantt Chart for the schedule is:
>- ![GanttChart-3](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Gantt-Chart-3.png)
> - Average waiting time = $\frac{(10-1) + (1-1) + (17-2) + (5-3)}{4} = \frac{26}{4}=6.5$ 
> - Average turnaround time = $\frac{(17-0)+(5-1)+(26-2)+(10-3)}{4} = 13$

### Round-Robin `RR`

> [!info]+ Scheduling Algorithm
> - Each process gets a small unit of CPU time (time quantum `定额`, usually 10-100 milliseconds.
> - After q has elapsed, the process is preempted by a clock interrupt and added to the end of the ready queue.
> - Timer interrupts every quantum q to schedule next process
> - If there are n processes in the ready queue and the time quantum is q. No process waits more than $(n-1)*q$
> - Performance
> 	- q too large $\rightarrow$  FCFS
> 	- q too small  $\rightarrow$ too much time is spent on context switch
> 		- q should be large compared to context switch time
> 		- q usually 10ms to 100ms, context switch < 10 usec (微秒)

| Process | Burst Time |
|:-------:|:----------:|
|   P1    |     24     |
|   P2    |     3      |
|   P3    |     3      |

> [!example]+ SRTF
> ![GanttChart-4](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Gantt-Chart-4.png)
> - Average waiting time: $\frac{6 + 4 + 7}{3} = 5.67$
> - Average turnaround time:  $\frac{30+7+10}{3} = 15.7$

### Priority Scheduling

The CPU is allocated to the process with the highest priority 
(smallest integer $\Leftrightarrow$ highest priority)

> [!info]+ Two policies 
> - Preemptive 
> 	- the current process is pre-empted immediately by high priority process
> - Non-preemptive 
> 	-the current process finishes its burst first, then scheduler chooses the process with highest priority
> 	
> SJF is priority scheduling where priority is the inverse of predicted next CPU burst time

> [!question]+ What is the Problem in Proority Scheduling ?
> - Problem: Starvation: low priority processes may never execute 
> - Solution: Aging: as time progresses increase the priority of the process

| Process | Burst Time | Priority |
|:-------:|:----------:|:----------:|
|   P1    |     10     |     3      |
|   P2    |     1      |     1      |
|   P3    |     2      |     4      |
|   P5    |     5      |     2      |

> [!example]+ Priority Scheduling (not preemptive)
> ![GanttChart-5 ](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Gantt-Chart-5.png)
> Average waiting time = $\frac{6+0+16+18+1}{5} = 8.2$

| Process | Burst Time | Priority |
|:-------:|:----------:|:--------:|
|   P1    |     4      |    3     |
|   P2    |     5      |    2     |
|   P3    |     8      |    2     |
|   P5    |     3      |    3     |

> [!example]+ Priority Scheduling  $Assume q=2$
> ![Gantt-Chart-6](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Gantt-Chart-6.png)
> Average waiting time = $\frac{22+11+12+0+24}{5} = 13.8$

### Multilevel Queue

> [!info]+ Multilevel Queue
> - Ready queue is partitioned into separate queues, e.g.:
>	- Foreground (interactive processes) 
>	- Background (batch processes)
> - Process permanently in a given queue (stay in that queue) Each queue has its own scheduling algorithm:
> 	- Foreground – RR 
> 	- Background – FCFS 
> - Scheduling must be done between the queues:
> 	- Fixed priority scheduling 
> 		- Each queue has a given priority
> 			- High priority queue is served before low priority queue
> 			- Possibility of starvation 
> 	- Time slice 
> 		- Each queue gets a certain amount of CPU time
> - ![MultilevelQueuePriority](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/MultilevelQueuePriority.png)

### Multilevel Feedback Queue `MFQ`

> [!info]+ Multilevel Feedback Queue
> - A process can move between the various queues; 
> 	- aging can be considered in this way (prevent starvation) 
> 	- advantage: prevent 
> - The multilevel feedback queue scheduler 
> 	- the most general CPU scheduling algorithm 
> 	- defined by the following parameters: 
> 		1. number of queues
> 		2. scheduling algorithms for each queue 
> 		3. Policies on moving process between queues 
> 			1. when to upgrade a processes 
> 			2. when to demote `降级` a processes 
> 			3. which queue a process will enter when that process needs service

> [!example]+ Example of Multilevel Feedback Queue
> Three queues: FCFS+RR
> 1. $Q_0$ – RR with time quantum 8 milliseconds
> 2. $Q_1$ – RR with time quantum 16 milliseconds
> 3. $Q_2$ – FCFS
> ![MFQ](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Example-MFQ.png)

> [!tip]+ Scheduling
> - A new job enters queue $Q_0$ which is served FCFS 
> - When it gains CPU, job receives 8 milliseconds 
> - If it does not finish in 8 milliseconds, job is moved to queue $Q_1$  
> - At $Q_1$ job is again served FCFS and receives 16 additional milliseconds 
> -  If it still does not complete, it is preempted and moved to queue $Q_2$ where it runs until completion but with a low priority


## Thread Scheduling 

Distinguish between user-level and kernel-level threads
- When threads are supported by kernel,   threads are scheduled, not processes 
  `当内核支持线程时，内核调度的是线程，而不是进程`
> [!example]+ 
> Many-to-one and many-to-many models,
> - Thread library schedules user-level threads to run on kernel threads (LWP: light-weight process)
> 
> Typically priority is set by programmer `优先级人为设置`

- Kernel threads are scheduled by Kernel onto available CPU `内核线程被可利用的CPU调度`
	- system-contention scope `SCS` 
	- competition is among all kernel-level threads from all processes in the system
- ![ThreadScheduling-1](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/ThreadScheduling-1.png)
- ![ThreadScheduling-2](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/ThreadScheduling-2.png)

## Multi-Process Scheduling 

The term Multiprocessor now applies to the following system architectures:

- Multicore CPUs 
- Multithreaded cores 
-  NUMA systems

### Symmetric multiprocessing (SMP) 

Symmetric multiprocessing (SMP) is where each processor is self scheduling
> [!abstract]+ Two Scheduling Method
> 1. All threads may be in a common ready queue (a) `所有进程共用一个就绪队列`
> 2. Each processor may have its own private queue of threads（b）`每个处理机都有私有的队列`
> ![SMP](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/SMP.png)

### Multicore Processors

When multiple processor cores are on same physical chip ----》 Multicore Processor 
- Multicore Processor ==> Recent trend

> [!success]+ Advantage
>  Faster and consumes less power

> [!failure]+ Disadvantage
> Memory Stall Growing^[An event that occurs when a thread is on CPU and accesses memory content that is not in the CPU’s cache. The thread’s execution stalls while the memory content is retrieved and fetched]

Solution： 每个核都有多个硬件线程
- Each core has more than one hardware threads. If one thread has a memory stall, switch to another thread!

#### Multithreaded Multicore System

*Chip-multithreading*  `CMT` assigns each core multiple hardware threads. 
- (Intel refers to this as hyper-threading.)

On a quad-core system (4核) with 2 hardware threads per core, the operating system sees 8 logical processors.

> [!abstract]- 
> 在一个四核（4核）系统中，如果每个核心支持2个硬件线程，操作系统看到的8个逻辑处理器其实是由这种硬件线程技术（也称为超线程技术）使得每个物理核心能够同时处理两个线程。这种技术允许CPU更高效地利用其资源，特别是在某些核心的一部分资源（如执行单元）在特定时刻未被充分使用时。
> 具体来说，超线程技术通过使每个物理核心在操作系统层面呈现为两个逻辑处理器来工作。这样，操作系统和应用程序可以将这些逻辑处理器视为独立的处理单元，从而在逻辑上扩展了CPU的并行处理能力。
> 因此，在这样一个四核处理器中，由于每个核心可以处理两个线程，总共就有\(4 \times 2 = 8\)个逻辑处理器。这就是操作系统为什么会看到8个逻辑处理器的原因。这种安排使得处理器在处理多任务或多线程应用程序时更为高效，尤其是在等待I/O操作或进行其他非CPU密集型任务时，可以更好地利用CPU资源。


Two levels of scheduling: `可以在两个层次调度` Multithreaded Multicore System
1. The operating system deciding which software thread to run on a logical CPU `OS决定谁进CPU(逻辑上)`
2. Each core decides which hardware thread to run on the physical core `Core 决定谁进入物理核心`

### Multiple-Processor Scheduling - Loading Balancing ----`负载均衡`

> [!info]+ Load balancing
> Load balancing attempts to keep workload evenly distributed 
> - **Push migration** – periodic task checks load on each processor, and pushes tasks from overloaded CPU to other less loaded CPUs 
> - **Pull migration** – idle CPUs pulls waiting tasks from busy CPU

**Push and pull migration need not be mutually exclusive ** `推迁移、拉迁移不必相互互斥`
- They are often implemented in parallel on load-balancing systems.

### Multiple-Processor Scheduling – Processor Affinity `处理器亲和力`

**处理器亲和性指的是线程或进程倾向于在被分配运行的同一个CPU上运行的性质。** 当线程在一个处理器上运行时，它的数据会被存储在该处理器的高速缓存（cache）中。如果这个线程之后继续在同一个处理器上运行，它可以更快地访问之前的数据，因为数据已经在缓存中了。

**Load balancing** may affect **processor affinity**
- A thread may be moved from one processor to another to balance loads
- That thread loses the contents of what it had in the cache of the processor it was moved off

- **Soft affinity**`软亲和性`：操作系统会尽量让线程在同一个处理器上运行，但不保证。系统负载均衡器可能会根据需要将线程迁移到其他处理器。
    
- **Hard affinity**`应亲和性`：进程可以指定它希望运行的处理器集合。如果设置了硬亲和性，即使在负载高的情况下，内核也不会将进程移动到它未指定运行的处理器上。

## NUMA and CPU Scheduling

> [!info]+ NUMA and CPU Scheduling
> 在NUMA架构中，计算机的内存被分割成多个区域，每个CPU都有一块局部内存。这些内存区域之间的访问速度可能不一样： 
> **局部内存（Local memory）**：与某个CPU相邻的内存，这个CPU访问局部内存的速度快（fast access）。 
> **非局部内存（Non-local memory）**：不与该CPU相邻的内存，该CPU访问非局部内存的速度慢（slow access）。
> NUMA-aware操作系统在调度线程到CPU时会考虑内存访问的非一致性。它会尝试将线程分配到可以快速访问所需数据的CPU上。这意味着操作系统会考虑线程正在使用的数据的内存位置，并尽量让线程在靠近这些数据的CPU上运行。
> 这样做的好处是减少了内存访问延迟，提高了处理速度。但是，如果线程被调度到远离其数据的CPU上，它访问内存的速度将会慢下来，这可能会降低性能。
> ![NUMA-CPU-Scheduling](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/NUMA-CPU-Scheduling.png)

## Real-Time CPU Scheduling 

> [!question]+ Why Real-Time CPU Scheduling? 
>   实时CPU调度（Real-Time CPU Scheduling）是一种操作系统的调度机制，它确保能够满足实时任务的时间要求。实时操作系统（RTOS）通常需要这种调度策略，因为它们运行着要求在特定时间内完成或响应的任务。

> [!info]+ Two kinds of RTOS
> - Soft real-time systems `尽可能在截止时间内完成任务`
> 	- Critical real-time tasks have the highest priority, but no guarantee as to when tasks will be scheduled (best try only) 
> - Hard real-time systems `严格在截止时间前完成任务`
> 	- a task must be serviced by its deadline (guarantee)

### Event Latency `事件延迟`

> [!info]+ Event latency 
> -  the amount of time that elapses from when an event occurs to when it is serviced.

> [!abstract]+ Two kinds of Event Latency
> 1. Interrupt latency `中断延迟`– time from arrival of interrupt to start of kernel interrupt service routine (ISR) that services interrupt 
> 	- ![Interrupt Latency](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/InterruptLatency.png)
> 2. Dispatch latency `调度延迟` – time for scheduler to take current process off CPU and switch to another
> 	- ![Dispatch Latency](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/DispatchLatency.png) 

### Priority-based Scheduling 

> [!quote]+ For real-time scheduling, scheduler must support preemptive, priority-based scheduling 
> - But only guarantees soft real-time 
> - For hard real-time, must also provide ability to meet deadlines

> [!info]+ Process need new Characteristic
> **New Characteristic**: periodically require CPU at constant intervals
>  - **Process Time** $t$^[处理时间]: 进程需要CPU的时间
>  - **Deadline** $d$^[截止时间]: 进程必须完成其任务的最后期限
>  - **Period** $p$^[周期时间]: 进程每隔一定时间就需要运行的周期。
>  - **Rate of period task**^[周期任务的频率]: $\frac{1}{p}$
>  - Relation: $0\leq t\leq d\leq p$
>  - ![PriorityBasedScheduling](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/PriorityBasedScheduling.png)
    
    
#### Rate Monotonic Scheduling

**Priority is assigned based on the inverse of its period**

$$Shorter\ periods\ =\ higher\ priority$$
$$Longer\ periods\ = lower\  priority$$

> [!example]+ Example of Rate Monotonic Scheduling
> Asume Priority : $P_1 >P_2$
>  $P_1$ needs to run for 20 ms every 50 ms. 
>  	- $t = 20, d = p = 50$
> $P_2$ needs to run for 35 ms every 100 ms. 
> 	- $t = 35, d = p = 100$
> Assume deadline $d = p$
> 假定每个任务的截止时间`d`等于其周期`p`，即每个任务必须在下一个周期开始之前完成。
> ![RateMonotonicScheduling](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/RateMonotonicScheduling.png)

> [!example]+ Missed Deadlines Case
>  $P_1$ needs to run for 25 ms every 50 ms. 
>  	- $t = 25, d = p = 50$
> $P_2$ needs to run for 35 ms every 80 ms. 
> 	- $t = 35, d = p = 80$
> - ![RateMonotonicScheduling-MissedDeadline](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/RateMontonicScheduling-MissedDeadlinesCase.png) 
> - In this case It can't satisfy the `Hard real-time systems`

#### Earliest Deadline First Scheduling `EDF`

**Priorities are assigned according to deadlines**

$$The\ earlier\ the\ deadline,\ the\ higher\ the\ priority$$
$$The\ later\ the\ deadline,\ the\ lower\ the\ priority$$

> [!example]+ EDF Example 
>  $P_1$ needs to run for 25 ms every 50 ms. 
>  	- $t = 25, d = p = 50$
> $P_2$ needs to run for 35 ms every 80 ms. 
> 	- $t = 35, d = p = 80$
>![EDF](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/EDF.png)

#### Proportional Share Scheduling

**T shares are allocated among all processes in the system**

> [!example]+ Example of Proportional Share Scheduling
>  T = 20, therefore there are 20 shares, where one share represents 5% of the CPU time
>  - An application receives N shares where $N < T$
>  - This ensures each application will receive $\frac{N}{T}$ of the total processor time 
>  - Example: an application receives N = 5 shares the application then has 5 / 20 = 25% of the CPU time.
>  - This percentage of CPU time is available to the application whether the application uses it or not.
>  - **无论应用程序是否使用这些CPU时间，这些份额都被保留给它。**

## Operating System Examples

- Linux Scheduling 
- Windows Scheduling

### Linux Scheduling

> [!info]+  Scheduling classes 
> - 2 scheduling classes are included, others can be added
> 	1. default 
> 	2. real-time 
> - Each process/task has specific priority

- Real-time scheduling according to POSIX.1b 
	- Real-time tasks have static priorities
- Real-time plus normal tasks map into global priority scheme 
	- Nice value of -20 maps to global priority 100 
	- Nice value of +19 maps to priority 139
	- ![LinuxScheduling-Priority](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/LinuxScheduling-Priority.png)

#### Completely Fair Scheduler `CFS`

**Scheduler picks highest priority task in highest scheduling class**

- Quantum is not fixed `时间片不固定`
- Calculated based on nice value from -20 to +19 
	-  Lower value is higher priority

> [!abstract]+ CFS Mechanism
> - CFS maintains per task virtual run time in variable `vruntime` ^[**虚拟运行时间（vruntime）**：CFS使用一个名为`vruntime`的变量来追踪每个进程应该获得的CPU时间。`vruntime`的增加速度取决于进程的优先级：优先级较低的进程（`nice`值较高）的`vruntime`增长得更快。]
> - Associated with decay factor based on priority of task => lower priority is higher decay rate  ^[**衰减因子**：CFS使用衰减因子来根据进程的优先级调整其`vruntime`，优先级越低的进程，其`vruntime`的增长越快，从而减少它们被调度的概率。]
> - Normal default priority (Nice value: 0) yields virtual run time = actual run time 
> - To decide next task to run, scheduler picks task with lowest virtual run time ^[**选择下一个运行的进程**：当需要选择下一个运行的进程时，CFS选择`vruntime`最低的进程，以尝试平等地分配CPU时间给每个进程。]
>   ![LinuxScheduling](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/LinuxScheduling.png)

### Windows Scheduling 

**Windows uses priority-based preemptive scheduling**

- *Highest-priority thread runs next *
	- Thread runs until 
		- 1. blocks,
		- 2. uses time slice,
		- 3. preempted by higher-priority thread
- *Real-time threads can preempt non-real-time*
- *32-level priority scheme* 
	-  Variable class is 1-15, real-time class is 16-31 
	- Priority 0 is memory-management thread 
	- There is a queue for each priority 
	-  If no run-able thread, runs idle thread
- ![Windows Scheduling](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/WindowsScheduling.png)

- Windows操作系统中进程可以属于六种优先级类别，每个类别中各个相对优先级的数值。Windows API定义了实时类（real-time class）和变量类（variable class），每个类别中都有不同的优先级级别。

- **在实时类别中**，有一个时间关键（time-critical）优先级，这是最高的优先级，数值为31。其他优先级依次降低，直到最低的空闲（idle）优先级，数值为16。这些优先级是为需要即时响应的任务设计的，比如那些在特定时间限制内必须完成的任务。

- **在变量类别中**，优先级从高（high）到空闲（idle）不等。每个优先级类别还有相对优先级，如正常（normal）类别的优先级数值范围从15到6不等。这些优先级通常用于普通应用程序和后台任务。

- **“变量”（Variable** 意味着线程的优先级可以改变，即使它们属于同一类别。这允许操作系统根据当前的需求和资源情况动态调整进程的优先级。
- 在调度时，系统会选择优先级数值最高的线程来执行，确保时间敏感的任务能够获得及时的处理。通过这种方式，操作系统可以管理多任务环境中的资源分配，确保关键任务能够及时完成，同时为不太重要的任务提供必要的CPU时间。