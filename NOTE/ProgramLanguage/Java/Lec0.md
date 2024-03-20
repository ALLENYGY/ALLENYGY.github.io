# Java Introduction

## Computer languages and Java

- Machine languages:            **机器语言**
  - 10011110111100001111111 [Binary style]
- Low-level languages:          **汇编语言**
  - Assembly language:
  - add ax, bx [Intel x86 style]
- High-level: human-friendly languages:  **高级语言**
  - Structured programming languages [Fortran, C, Pascal];
  - C++ , a combination of structured programming & object-oriented;
  - Java, pure object-oriented language;
  - C#, similar to Java.

## History of Java

- Developed by Sun Microsystems.
- Sun was bought by Oracle in 2010.
  - 1996: Java version 1.0;
  - … Java 1.1, 1.2, 1.3, 1.4;
  - 2004: Java version 1.5, name changed to Java 5;
  - … Java 6, 7, 8.
One new release every 6 months now:
  - September 2017: Java 9;
  - March 2018: Java 10;
  - September 2018: Java 11 (long term support);
  - March 2019: Java 12
  - ...

## Java Architecture

### Feature of Java

- Simple
- Object-oriented                     **面向对象**
- Platform neutral                    **跨平台**
- Robust, secure, scalable.           **稳健 安全 可扩展**
E.g.: programmers don’t need to care about memory allocation and release.

### Compiler

- Compiler: a program that translates a high-level language program into an equivalent low-level language program.
- This translation process is called compiling.

### Java Compilation Model

![Java Compilation Model](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/JavaCompilationModel.png)
![JCM](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/JCM.png)

- Java compiler translates Java programs into byte-code, a language for the Java Virtual Machine.
- Once compiled to byte-code, a Java program can be used on any computer that has a JVM, making it very portable.

## Java Virtual Machine (JVM)

- Reads “byte code” and executes it.

## Garbage collection

- Manages memory automatically;
- Included in the JVM.

## Java Development environment

### Java Eviroment

- JRE
  - Java Runtime Environment = JVM + Java libraries.
  - For users to run byte-code programs on their computer.
- JDK **开发者使用**
  - Java Development Kit = JRE + Java compiler + other development tools.
  - For developers to write Java software, create byte-code, and test it.

### Java Edition

- Java Micro Edition (JavaME)
  - Very small Java edition for smart cards, pages, phones, and set-top boxes.
  - Subset of the standard Java libraries aimed at limited size and processing power.
- Java Standard Edition (JavaSE)
  - The basic platform, which this course will cover.
- Java Enterprise Edition (JavaEE)
  - For business applications, web services, mission-critical systems.
  - JSP, Servlets, JDBC, EJB3.0, Struts   - Spring   - Hibernate.
