---
Create Time: 8th March 2024
Title: "[[OS-Operating-System-Structure]]"
status: DONE
tags:
  - NOTE
  - OS
  - Lec2
archived: true
Author:
  - AllenYGY
---

# [[OS-Operating-System-Structure]]

## **Operating System Services**

![OS-Service](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/OS-Services.png)

- Two categories of services
	- Services to the user:
		- `UI`,`File tree`,....
	- Services for the efficient operations
		- Management of memory
		- CPU scheduling
		- ...

###  **Services to the User**

- **User Interface** `UI`
	- Command-Line Interface `CLI`
	- Graphics User Interface `GUI`
	- Touch-screen
	- Batch processing `批处理`
- **Program Execution**
	- Load a program into memory
	- Run a program, and then end execution
- **I/O Operations**
- **File-System Manipulation**
	- Read-Write
- **Communications**
	- Process exchange information
- **Error detection**
	- Handle possible errors

### **Services to the efficient operations**

- **Resource allocation**
- When multiple users or multiple jobs are using computer concurrently, resources must be allocated to each of them
	- Many types of resources
		- CPU, main memory, file storage, I/O devices.
- **Logging**
	- keep track of which programs use how much and what kinds of computer resources
- **Protection and Security **
	- Protection
		 - Ensure that all access to system resources is controlled
	- Security
		- Avoid attack from outside the system

## **User and Operating System Interface**

### **Command Line Interface** `CLI`

`CLI` or `command interpreter` allows direct command entry.

- Commands are sometimes implemented in kernel
	- commands built-in `内建指令`
- Commands are sometimes by systems program
	- names of programs `程序名`
	- Advantage: adding new features doesn’t require modification of interpreter

### **Graphical User Interface**  `GUI`

- User-friendly
	- desktop metaphor (象征) interface
	- Icons represent files, programs, actions, etc.
- Invented at Xerox PARC (1970s)
- Many systems now include both CLI and GUI interfaces
	- Microsoft Windows is GUI with CLI “cmd” shell 
	- Apple Mac OS X is “Aqua” GUI interface with UNIX kernel underneath and shells available 
	- Unix and Linux have CLI with optional GUI interfaces

## **System Calls,  API, C Libraries** 

### **System Calls**

System calls provide an programming interface for programs to use services of operating systems.

### **API**

- Typically, application developers design programs according to an API rather than directly system calls.
-  The API `Application Programming Interface` specifies a set of functions that are available to an application programmer.
	- **Common API**
		- Win32 API for Windows
		- POSIX API for POSIX-based systems (including virtually all versions of UNIX, Linux, and Mac OS X)
		- POSIX `Portable Operating System Interface` is – a family of standards specified by the IEEE Computer Society for maintaining compatibility between operating systems.
		- Java API for the Java virtual machine (JVM)

#### **System Calls and API**

- The caller just needs to `obey API` know **nothing** about how the system call is implemented Most details of OS interface hidden from programmer by API

- The system call interface invokes the intended system call in OS kernel and returns status of the system call and any return values

- Each system call has a number (as index)

- System-call interface maintains a table: indexed according to these numbers

#### **System Call Parameter Passing**

- Three general methods
	- **Simplest/Fastest**: pass the parameters in *registers* 
		- 缺点：寄存器不够大，限制传参数量
	- Parameters *stored in a block/table, in memory*, and address of block passed as a parameter in a register.
	- Parameters are pushed onto the stack by the program and off the stack by the operating system

#### **Type of System Call**

- Process Control
- File Management
- Device Management
- Information maintenance
- Communications
- Protection

![System Calls](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/SystemCalls.png)

### **Standard C Library vs System Call**

- `Standard C Library`
	- Contains functions which make system calls or do not make system calls makes programmers’ work much easier
- `Advantages of using Standard C Library`
	- It is **simpler** to call a function in a standard C library rather than to make a system call
	- **Portability**
		- Source code executed in one OS can be run in another OS

- `Advantages of using system Calls`
	- System calls are usually more powerful than functions from the Standard C Library
		- Can create processes, share memory between processes, etc. These advanced features are not available in the Standard C Library.
	- It’s a little bit **faster** than using a library function (since internally the library function uses a system call anyway).

### **Standard C Library vs C POSIX Library**

**Subset $\subset$ Superset**

The C POSIX library was developed at the same time as the ANSI C standard. includes additional functions to those introduced in standard C

## **System Programs**

System programs provide a convenient environment for program development and execution. They can be divided into:

- File manipulation 
- Status information sometimes stored in a file 
- Programming language support 
- Program loading and execution 
- Communications 
- Background services (e.g., launch OS, disk checking, daemons(守护进程)) 
- Application programs

Most User's view of the operation system is 
- defined by system programs, not the actual system calls (for system or application programmers)

### **Why Applications are Operating System Specific**

- Apps compiled on one system usually are not executable on other operating systems
	- Each operating system provides its own unique system calls
- How can apps be used in multi-operating systems 
	- Written in an interpreted language like Python, Ruby, and interpreter available on multiple operating systems`解释性语言` 
	- Written in a language that includes a VM containing the running app (like Java) `包括虚拟机的语言`
	- Written in a standard language (like C), compiled separately on each operating system to run on each OS `标准语言`

- Application Binary Interface (ABI) is 
	- about how different components of binary code can interface for a given operating system on a given architecture 
	-  in low-level details
`定义了不同的二进制代码组件如何在特定操作系统和特定础础架构上进行交互的低级别细节。`

## **Operating System Implementation History**

- Early `OSes` in assembly language
- Then system programming languages like Algol, PL/1 
- Now high level language C, C++
	- High-level language is easier to port to other hardware
	- But slower 

Actually usually a mix of languages
- Lowest levels in assembly language
- Main body in C
- Systems programs in C, C++, scripting languages like PERL, Python, shell scripts
- Emulation can allow an OS to run on non-native hardware

## **Operating System Structures**

- Various ways to structure ones 
	- Simple structure – MS-DOS 
	- More complex -- UNIX 
	- Layered 
	- Microkernel -Mach

### **Monolithic– Traditional UNIX**
- limited structuring (due to early hardware) `有限结构化`
- The UNIX OS consists of two separable parts
	- Systems programs
	- The kernel
		- Consists of everything below the system-call interface and above the physical hardware
		- Provides the file system, CPU scheduling, memory management, and other operating-system functions;
		- Consists of a large number of functions in one level

### **Monolithic Plus Modular - Linux System Structure**

- Advantages for monolithic design
	- High speed
	- High efficiency
- Advantages for modular design
	- changes in one component affect only that component, and no others
	- Modules can be modified easily.

### **Layered Approach**

- The operating system is divided into a number of layers (levels)
	- The bottom layer (layer 0), is the hardware. 
	- The highest (layer N) is the user interface. 
	- Each layer is built on top of lower layers 
		- With modularity, each layer uses functions (operations) and services of only lower-level layers
- Advantage: Simplicity of construction and debugging.
- Disadvantages: 
	- Hard to define each layer. 
	- Poor performance.
%% ![](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/LayeredApproach.png)![](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Layer.png) %%

### **Microkernels** `微内核`
Moves as much components from the kernel into user space
- Mach
	Mac OS X kernel (Darwin) partly based on Mach

Communication takes place between user modules using message passing
- Microkernels provide minimal process and memory management, in addition to a communication facility.
- Communication between user modules through message passing.
  ![](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/OS/Microkernels.png)
  
Advantage
- Easier to
	- extend to a microkernel
	- port the operating system to new architectures 
- More reliable (less code is running in kernel mode)
- More secure
  
Disadvantages
- Overhead of communication between user space and kernel space

### **Modules**

Many modern operating systems implement loadable kernel modules (best practice)
- Uses object-oriented approach
- Each core component is separate, is loadable as needed within the kernel, talks to the others over known interfaces

Overall, similar to layers but with more flexible 
E.g., Linux, Solaris, macOS, Windows, etc

### **Hybrid Systems**

Most modern operating systems: not one pure model (structure) 
- Hybrid combines multiple approaches to address performance, security, usability needs. 

Example
- Linux and Solaris kernels: monolithic (in kernel memory), plus modular (for dynamic loading of functionality)
- Windows mostly monolithic, plus microkernel for different subsystem personalities, also provide support for dynamically loadable kernel modules.
- Apple Mac OS X, Microkernel plus layered, Aqua (GUI) plus Cocoa (API) programming environment

## **Operating System Boot**
- When power is initialized on system, execution starts at a fixed memory location
- Operating system must be made available to hardware so hardware can start it
	- One step process 
		- Small piece of code – bootstrap loader`引导程序`, BIOS`基本输入输出系统` stored in ROM or EEPROM locates the kernel, loads it into memory, and starts it
	- Two step process 
		- ROM code loads boot block (with bootstrap loader) in hard disk
		- Bootstrap loader loads kernel

- Bootstrap loader `引导程序`  -----simple code to initialize the system 
	- Load Kernel 
	- Starts system daemons `守护进程` (services provided outside of the kernel)