---
Create Time: 15th March 2024
Title: "[[OS-Processes]]"
status: DONE
tags:
  - OS
  - NOTE
  - Lec3
  - UIC
archived: true
Author:
  - AllenYGY
---

# [[OS-Processes]]
## Process Concept
> [!tip]+ Process
> - a program in execution in memory
> - execution must progress in sequential fashion

There can be several process for one program
![process](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Process/process-1.png)

### ELF Object File Format

ELF`Executable and Linkable Format`
![ELF](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Process/ELF-1.png)
![ELF-Format.png ](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Process/ELF-Format.png)

> [!note]+ A process includes multiple parts
> - the program code (also called text section) 
> - stack containing temporary data  
>    - E.g., function parameters, return addresses, local variables
> - data section containing global variables and static variables
> - heap containing memory dynamically allocated during run time
> - program counter, processor registers (include all current )

## Process State

- New: The process is being created  `创建状态`
- Running: Instructions are being executed by CPU `运行状态`
- Waiting: The process is waiting for some event to occur `阻塞状态`
- Ready: The process is waiting to be assigned to a processor `就绪状态`
- Terminated: The process has finished execution `终止状态`

### Transform between process State

![ProcessState](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/ProcessState.png)
- Ready $\Rightarrow$ Running 
- Running  $\Rightarrow$  Ready 
- Running $\Rightarrow$  Waiting 
- Waiting $\Rightarrow$ Ready 

## Process Control Block *PCB*
> [!tip]+ PCB
> 1. PCB: Information associated with each process, can be stored in a struct type `also called task control block`
> 2.  A PCB is a kernel data structure  `PCB 是内核的数据结构`
> 3. Each process has a corresponding unique PCB in the kernel `PCB 是进程的唯一标志`

> [!info]+ PCB Include
> - Process state – running, waiting, etc. `State`
> - Program counter – location of instruction to next execute `PC`
> - CPU registers – contents of all process-centric registers `Register`
> - CPU scheduling **information**- priorities, scheduling queue pointers 
> - Memory-management **information** – memory allocated to the process 
> - Accounting **information** – CPU used, clock time elapsed since start, time limits 
> - I/O status **information** – I/O devices allocated to process, list of open files

> [!abstract]+  A PCB is a kernel data structure
> - stored in the memory reserved for the kernel
> - invisible to the process itself 
> - changed only by the kernel.

> [!abstract]+ Each process has a corresponding unique PCB in the kernel. 
> - When a new process is created, the kernel creates a new PCB for it.
> - When a process dies, the kernel deletes the process’s PCB.

All the PCBs together is how the kernel keeps track of which processes exist in memory, where they are in memory, what they are currently doing (Maybe `State` )
![ReadyQueue](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/StateQueue.png)

> [!tip]+ Threads
> If process has a single thread of execution 
> - One program counter 
> 
> If a process has multiple threads of execution 
> - Kernel will keep the control information for each thread 
> - Multiple program counters

## Process Scheduling

### BackGround 

- Several processes want to use one CPU (or CPU core) 
- Process scheduler `调度` (algorithm inside the kernel, software) selects among available processes（i.e. in ready state） for next execution on CPU core 
	- Maintains scheduling queues of processes
		- Ready queue – set of all processes residing in main memory, ready and waiting to execute
	- Wait queues – set of processes waiting for an event (i.e. I/O) 
- Processes migrate among the various queues
- Scheduling purpose: maximize CPU use, quickly switch processes

### CPU Switch From Process to Process

A context switch occurs when the CPU switches from one process to another.
![CPU Switch From Process to Process](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/CPUSwitch.png)

### Context Switch

- When CPU switches to another process, the system must `保护现场`
	- save the state of the old process (the one is running on CPU)
	- load the saved state (CPU registers, program counter in PCB) for the new process (the one will run on CPU) via a context switch (i.e., switch PCB)

> [!note]+ Context-switch time is
>  `overhead`
>   - the system does no useful work while switching 
>
>   `dependent on the complexity of OS`
>   - The more complex the OS and the PCB， the longer time the context switch 
>  
>  `dependent on hardware support`
>  - some hardware provides multiple sets of registers per CPU  multiple contexts loaded at once, (no need to switch  context when load another process to run)

## Operations on Process

> [!note]+ OS must provide mechanisms for: 
> Process Creation 
> Process Termination

### Process Creation

Parent process 
- Create children processes 
- In turn create other processes,
- Finally forming a tree of processes 
Generally, process is identified and managed via a process identifier (pid)

Parent and children 

- Resource sharing options
	- 1. Parent and children share all resources  `全共享`
	- 2. Children share subset of parent’s resources `子进程共享父进程的资源`
	- 3. Parent and child share no resources `不共享`
   
- Execution options 
	- 1. Parent and children execute concurrently `同时执行
	- 2. Parent waits until children terminate `父进程等待子进程销毁后执行`

### Process Termination

- Child process asks OS to terminate itself
	- using the exit() system call.
		- Returns status data from child to parent (via wait()) 
		-  Process’ resources are deallocated by operating system
- Parent may terminate the execution of children processes 
	- using abort() system call for some reasons:
		1. Child has exceeded allocated resources
		2. Task assigned to child is no longer required
		3. Parent terminated (some OS do not allow children to be alive)

> [!info]+ Cascading `倾泻式的` termination 
> - Some operating systems do not allow child to exist if its parent has terminated.
> - When parent is terminated, all children, grandchildren, etc. are terminated. 
> - The termination is initiated by the operating system.

wait()system call 
- The parent process may wait for termination of a child process 
-  The call returns status information and the pid of the terminated process

### Zombie and Orphan

> [!info]+ Zombie Process `僵尸`
> A **zombie** process is  living corpse, **half alive and half dead**
>  terminated, but still consumes system resources
> 	-  still has an entry in the process table
> 	- where the entry is still needed to allow the parent process to read its child's exit status.
>	 - once the exit status is read by parent via the wait system call, the zombie's entry is removed from the process table ("reaped“).

> [!example]+ Zombie Program 
>```c
>#include <stdio.h> 
>#include <stdlib.h> 
>#include <unistd.h> 
>#include <sys/types.h> 
>int main(){
>	pid_t pid = fork(); 
>	if (pid == 0) { /* Child */
>		printf("Running Child, PID = %d\n", getpid());	
>		exit(0); 
>	} 	
>	else {	
>		printf("Terminating Parent, PID = %d\n", getpid());
>		while (1) ; /* Infinite loop */
>	} 
>      return 0;
>}
>```
`子程序结束却并未通过wait()回收`

> [!abstract]+ Reaping `回收` 
> Performed by parent on terminated child 
> Parent is given exit status information (by OS) 
> Kernel discards process

> [!question]+  What if parent doesn’t reap?
>  If any parent terminates without reaping a child, then child will be reaped by init or system process
>  So, only explicitly reaping is needed when parent is a long- running processes. e.g., shells and servers

> [!info]+ orphan  process `孤儿`
> An **orphan**  process is child process that is still running  but **parent** process has finished or **terminated**.

> [!example]+ Orphan Program
> ```c
> #include <stdio.h>
> #include <stdlib.h>
> #include <unistd.h> 
> #include <sys/types.h> 
> int main(){
>	pid_t pid = fork(); 
>	if (pid == 0) { /* Child */
>		printf("Running Child, PID = %d\n", getpid());
>		while (1) ; /* Infinite loop */
> 	} else {	
>		printf("Terminating Parent, PID = %d\n", getpid());
>		exit(0); 
>	} 
>	return 0; 
>}
>```
>`父进程结束了却没有回收子进程`

## Inter-process Communication `IPC` 

### BackGround

> [!info]+ Processes within a system may be independent or cooperating  	
> - Independent process cannot affect or be affected by another process  	
> - Cooperating process can affect or be affected by other processes, because they share data

> [!tip]+  Advantages/Reasons of process cooperation
> 1. Information sharing
> 2. Computation speed-up 
> 3. Modularity 
> 4. Convenience 

>[!tip] Disadvantages
> 1. Added complexity 
> 2. Deadlocks (死锁) possible 
> 3. Starvation (饥饿) possible

### Communications Models 

Cooperating processes need interprocess communication (IPC) 
> [!tip]+  Two models of IPC 
> - Shared memory //user processes control 
> - Message passing //kernel control 
> - Pipe Communication 
![Communication Model](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/CommunicationModel.png)

#### Shared Memory `User Control`

**Processes communicate through a shared memory**

##### Producer-Consumer Problem

> [!quote]+ Producer process produces information that is consumed by a consumer process
- `Unbounded-buffer`: no practical limit on the size of the buffer 
	- Producer never has to wait because there is always extra space available for new information;
	- Only consumer might have to wait if no information is available to read
- `Bounded-buffer`: buffer size is fixed `Achieved by 循环队列`
	- Producer might have to wait if there is no space available to store new information;
	- Consumer might have to wait if no information is available to read

#### Message Passing `Kernel Control`

Two operations `message size is either fixed or variable`
- send(message)
- receive(message)
A communication link between processes must be created before communication.

> [!info]+  Implementation of communication link 
> - Physical level: 
> 	- Shared memory 
> 	- Hardware bus 
> 	- Network
> - Logical level: 
> 	- Direct (process to process) or indirect (mail box)
> 	- Synchronous (blocking) or asynchronous (non-blocking) 
> 	- Automatic or explicit buffering

##### Direct Communication

In Direct Communication, Processes must name each other explicitly.
- Send() and receive() primitives `原语` are defined as 
	- send (P, message) – send a message to process `P` 
	- receive(Q, message) – receive a message from process `Q`

> [!abstract]+ Properties of communication link 
> Links are established automatically 
> A link is associated with exactly one pair of communicating processes
> Between each pair there exists exactly one link 
> The link may be unidirectional, but is usually bi-directional

##### Indirect Communication

> [!tip]+ MailBox
> Messages are directed and received from **mailboxes** (also referred to as ports `端口`)
> - Each **mailbox** has a unique id 
> 	- Processes can communicate only if they share a mailbox
> 	- Processes can communicate only if they share a mailbox
> - The send() and receive() primitives are defined as 
>	- send(A, message) – send a message to mailbox A 
>	- receive(A, message) – receive a message from mailbox A

> [!success]+  MailBox  Operations 
> 1. Create a new mailbox (port) 
> 2. Send and receive messages through mailbox 
> 3. Destroy a mailbox

> [!abstract]+ Properties of communication link
> - Link established only if processes share a common mailbox 
> - A link may be associated with many processes 
> - Each pair of processes may share several communication links 
> - Link may be unidirectional or bi-directional

##### Synchronization `同步`

**Message passing may be either blocking or non-blocking**

> [!info]+ Blocking is considered synchronous `同步`
> - Blocking send 
> 	- the sender is blocked until the message is received by the receiving process or by the mailbox 
> - Blocking receive 
> 	- the receiver is blocked until a message is available

> [!info]+  Non-blocking is considered asynchronous `异步` 
> - Non-blocking send 
> 	- the sender sends the message and continues without waiting for the message to be received 
> - Non-blocking receive 
> 	- the receiver receives:  A valid message, or Null message

Different combinations possible 
If both send and receive are blocking, this case is called **rendezvous** `会合`

Queue of messages attached to the link, in kernel memory 
Implemented in one of three ways

1. Zero capacity – no messages are queued on a link.
   - Sender must wait for receiver (rendezvous)
2. Bounded capacity – finite length of n messages 
   -  Sender must wait if link full
3. Unbounded capacity – infinite length 
   - Sender never waits

#### Pipe

Acts as a conduit `管道` allowing two processes to communicate on the same computer

Anonymous `Ordinary ` Pipes 
- cannot be accessed from outside the process that created it.  `匿名进程不能通过外部进程访问`
- Typically, a parent process creates a pipe and uses it to communicate with a child process that it created.

Named Pipes 
- can be accessed without a parent-child relationship.

##### Anonymous (Ordinary) Pipes

- **Ordinary Pipes** allow communication in standard producer-consumer style 
- Producer writes to one end (the write-end of the pipe) 
- Consumer reads from the other end (the read-end of the pipe)
- Ordinary pipes are therefore unidirectional (单向) 
	- create two separate pipes if bidirectional communication is necessary
- Require parent-child relationship between communicating processes
![Ordinary  Pipe](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Pipe.png)

##### Named Pipes 

- **Named Pipes** are more powerful than ordinary pipes 
- Communication is bidirectional
- No parent-child relationship is necessary between the communicating processes 
- Several (>=2) processes can use the named pipe for communication
- Provided on both UNIX and Windows systems

## Communication in Client-Server Systems
### Sockets

> [!info]+ Socket  `套接字`
> Endpoint for communication `通讯的终结点`
> A number included at start of message packet to differentiate network services on a host

- Concatenation of IP address and port
	- E.g., 161.25.19.8:1625
- port 1625 on host 161.25.19.8
- All ports below 1024 are well known, used for standard services 
- Special IP address 127.0.0.1 (loopback) to refer to system on which process is running Communication happens between a pair of sockets, one on the local host and one on the remote host

> [!info]+ Sock
> A data structure inside the kernel that represents the local end of a network connection 
> IP and Port 

### Remote Procedure Call `RPC`

- Remote procedure call (RPC) abstracts procedure calls between processes on networked systems 
	- Looks like a normal function call but done through the network 
	- Uses ports for service differentiation
- OS typically provides a **matchmaker** service to connect client and server
![RPC](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/RPCExecution.png)

> [!abstract]+ RPC Communication Steps
> 1. The client-side stub (server proxy) 
> 	- Locates the server 
> 	- Marshals the parameters 
> 	- Sends parameters to server-side stub in a network message
>2. The server-side stub (client proxy) 
> 	- Receives this message 
> 	- Unpacks the marshaled parameter
> 	- Performs the procedure call on the server, marshals the result of the call
> 	- Sends it back to the client-side stub in another message
> 3. The client-side stub 
> 	- Receives this second message 
> 	- Unpacks the marshaled result 
> 	- Gives it back to the client that did the RPC

> [!info]+ Stubs
> - Manages the network connection between client and server
> - Extra code on the client side and server side 
> - Typically, a separate stub exists for each separate remote procedure 
> - On Windows, stub code compile from specification written in Microsoft Interface Definition Language (MIDL)

> [!info]+ Marshel
> Use External Data Representation (XDR) format to account for different CPU architectures
> Data Representation can be different in different CPU
> 	- ![DataRepresentation](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/MarshelDataRepresentation.png)
> - On the client side, parameter marshaling involves converting the machine-dependent data into XDR before they are sent to server. 
> - On the server side, the XDR data are un-marshaled and converted to the machine-dependent representation for the server.