# Exception Handling

## Programming Errors

- Compile-time errors: lexical / syntactic / semantic. ——>语法错误------编译无法通过
在编译时就无法通过

```java
// Example with compile-time error 语法错误再此处不作演示
public static void division(int i, int j) {   因为无法捕捉到ArithmeticException的异常所以直接报错
        int result = -1;
        try {
            result = i / j;
        } catch (Exception e) { // Catches all exceptions!
            System.out.println("Wrong: " + e.getMessage());
        } catch (ArithmeticException e) { // Unreachable code.
            System.out.println("Wrong: " + e.getMessage());
        } finally {
            System.out.println(i + " / " + j + " = " + result);
        }
    }

public static void main(String[] args) {
    division(100, 4);
    division(100, 0); // ArithmeticException: / by zero
    System.out.println("End of main()");
    }
//Unreachable catch block for ArithmeticException. 
//It is already handled by the catch block for Exception.
```

- Runtime errors:------编译通过，运行报错,需要程序员立刻处理否则无法运行
  - Error
    - Usually unrecoverable, very rare.
    - Examples: JVM out of memory, hardware error, etc. ——>越界，内存泄漏
  - Exception：
    - Often recoverable, fairly common.

## Exceptions

1. An exception in Java is any abnormal
   - unexpected event
   - extraordinary condition.
2. example:
   - file not found exception
   - array out of bounds exception
   - unable to get connection exception
3. Java is guaranteed to:
    - Automatically detect that something is wrong.
    - Immediately stop the program.
    - Show you an exception about the problem.
    - Tell you what the exception is about.
    - Tell you exactly where the exception happened in your code.
4. Handling the exception
   - Your Java program may catch the exception object. Your program can then use the object to recover from the problem.
5. Throwing an exception
   - When an exception occurs, the JVM automatically creates an object from the class Exception which contains information about the problem. This object represents the exception itself!

### Exception Classes 异常类

- The predefined class Exception is the root class for all possible exceptions
- Every exception class is a descendent class of the class Exception
- Although the Exception class can be used directly in a class or program, it is most often used to define a subclass
- The class Exception is in the java.lang package

#### Checked and Unchecked Exceptions

##### Unchecked exceptions> 不一定发生-----不一定要改，也能运行

- Unchecked exceptions are the class RuntimeException and any of its subclasses.
  - These exceptions correspond to bugs (divisions by zero, array access out of bounds, etc.) that can happen anywhere in your program.
  - The compiler does not force the programmer to handle these exceptions.
  - In fact, the programmers may not even know that these exceptions could be thrown.
  - Since an unchecked exception corresponds to a bug, it is normal for the program to die (instead of trying to recover from the problem); you must then find the bug in your program and fix it.
  
#### Checked Exceptioon> 一定发生-----一定要改，否则无法运行

- Checked exceptions are subclasses of the Exception class, excluding the class RuntimeException and its subclasses.
  - These exceptions correspond to situation which are unexpected but which are not bugs in the program.
      >(the network is temporarily down, the hard disk is full, etc.)
  - These exception can happen at specific places in your program (when opening a network connection, when saving a file, etc.)
  - The compiler forces the programmer to handle these exceptions in some way (see later). Usually the program can recover from the problem (instead of dying) and keep running.

### try-catch-finally & throw/throws

#### try 把可能发生异常的代码用try{}包裹

The Java code that you think may produce an exception is placed within a try block.

- No exception occurs inside the try block → the finally block is executed, then the rest of the method.
- An exception occurs inside the try block → an exception object is created by Java and thrown, killing all the code after that inside the try block, until a matching catch block is found and executed to handle the exception object → the finally block is executed → the rest of the method is executed.

#### catch 捕获特定异常后执行这部分处理

- An exception object created and thrown during execution of the try block can be caught and handled in a catch block.
- On exit from a catch block, normal execution continues and the finally block is executed, followed by the execution of the rest of the method.

```java
// try-catch example:
import java.util.Scanner;
public class Test2 {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    while(true) {
        System.out.print("Input an integer: ");
        String s = scanner.nextLine();
        try {
          int i = Integer.parseInt(s);
          System.out.println("i is: " + i);
        }catch(NumberFormatException e) {
          System.out.println("Wrong!");
        }
    }
  }
}
```

#### finally 无论是否捕获异常，最后都进入finally{}

- A finally block is always executed.
- Generally a finally block is used for freeing resources, cleaning up, closing files or network connections etc. Otherwise you do not need it.
- If the finally block executes a control transfer statement such as a return or a break statement, then this control statement determines how the execution will proceed regardless of any return or control statement present in the try or catch.

```java
try {
    <code that might throw an exception>
} catch (<exception type1> <parameter1>) {
    <statements handling parameter1>
} catch (<exception type2> <parameter2>) {
    <statements handling parameter2>
}finally { // finally block
    <statements always executed>
}
```

```java
//finally example:
public class Test3 {
    public static void division(int i, int j) {
        int result = -1;
        try {
            result = i / j;
        } catch(ArithmeticException e) {
            System.out.println("Wrong: " + e.getMessage());
        } finally {
            System.out.println(i + " / " + j + " = " + result);
        }
    }
    public static void main(String[] args) {
        division(100, 4);
        division(100, 0); // ArithmeticException: / by zero
        System.out.println("End of main()");
    }
}
```

#### throw & throws 两种方式处理异常

A method can explicitly create an object from the Exception class (or one of its subclasses) using new and then throw the object using the throw statement. Then the method must either:

- Catch the exception object itself using a try-catch statement. **使用try-catch捕获并处理异常**
  - This is not very useful: in general there is little reason for a method to throw an exception just to immediately catch it in the same method...
- use the throws clause to specify as part of the type of the method that the method might throw an exception. **在方法名旁边throws特定的异常**
  - The exception object will then have to be caught somewhere else, in  one of the callers of the method.   **可以用if-else, 挑出异常，用throw抛出异常**

### Exception information

- getMessage()
  - Returns the detailed error message string for this exception object.**抛出的异常中写啥，getMessage就返回啥**
- printStackTrace()
  - Prints this exception and its backtrace: the list of method calls starting from main up to the method that threw the exception object.

```java
//throw
import java.util.Scanner;
public class Test6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.print("Input a positive integer: ");
            String s = scanner.nextLine();
            try {
                int i = Integer.parseInt(s);
                if (i <= 0) {
                    // This is overkill. It is easier to just print the
                    // error message here and then use "continue" to start
                    // the next iteration of the while loop.
                    throw new Exception(i + " <= 0 !");
                }
                System.out.println("i is: " + i);
            } catch (Exception e) { // Catch all exceptions!
                System.out.println("Catch: " + e.getMessage());
            }
        }
    }
}
```

```java
import java.util.Scanner;

public class Test7 {
    public static void readPosInt() throws Exception {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input a positive integer: ");
        String s = scanner.nextLine();
        int i = Integer.parseInt(s);
        if (i <= 0) {
            throw new Exception(i + " <= 0 !");
        }
        System.out.println("i is: " + i);
    }

    public static void main(String[] args) {
        while (true) {
            try {
                readPosInt(); // May throw an exception, which we need to catch.
            } catch (Exception e) { // Catch all exceptions!
                System.out.println("Catch: " + e.getMessage());
            }
        }
    }
}
```

### throws 用于抛出特定的异常，以及自定义异常

- In a method, if you throw an exception object and you don’t want to catch the exception object in the same method then you must use the throws clause.
- The method might throw multiple different kinds of exceptions: you need to list in the throws clause all the exceptions that the method does not catch itself.

```java
public Type methodName(…) throws <Exception1>,…, <ExceptionN> {
        …
}
```

#### Custom new exceptions 新定义一个类继承Exception这个父类

1. Define a subclass of Exception.
2. Create an exception object from the subclass using new.
3. Throw the exception object using throw.
4. Use a try-catch statement to handle the exception object inside the method itself, or use a throws clause and catch the exception object somewhere else.

```java

public class NotPositiveException extends Exception {
    public NotPositiveException(String msg) {
    // msg is the message given to the exception 
    when
    // it is created, which will later be the 
    resultP
    // of calling the getMessage() method.
    super(msg);
    }
}

import java.util.Scanner;
public class Test8 {
    public static void readPosInt() throws NotPositiveException {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input a positive integer: ");
        String s = scanner.nextLine();
        int i = Integer.parseInt(s);
        if (i <= 0) {
            throw new NotPositiveException(i + " <= 0 !");
        }
        System.out.println("i is: " + i);
    }
    public static void main(String[] args) {
        while (true) {
            try {
                readPosInt();
            } catch (NotPositiveException e) { // If i <= 0.
                System.out.println("NotPositive: " + e.getMessage());
            } catch (NumberFormatException e) { // If parseInt() fails.
                System.out.println("NumberFormat: " + e.getMessage());
            }
        }
    }
}
```

>Input a positive integer: -2
>NotPositive: -2 <= 0 !
>Input a positive integer: -2.5
>NumberFormat: For input string: "-2.5"

#### throws and method overidding

- An overriding method in subclass can throw any unchecked exception, regardless of whether the  overridden method in superclass throws exceptions  or not.
- If an overriding method in subclass throws checked exception, then it must be the same exception or child exceptions of the exception(s) declared in the  overridden method.

```java
class A {
    void meth() throws FileNotFoundException {
    }
}

class B extends A {
    @Override
    void meth() {
    } // compiles fine
}

class C extends A {
    @Override
    void meth() throws IOException {
    } // compile error
    /*
     * Exception IOException is not compatible with throws clause
     * in A.meth()
     */
}

class D extends A {
    @Override
    void meth() throws RuntimeException {
    }// compiles fine
}

interface A {
    void meth() throws IOException;
}

class B implements A {
    @Override
    public void meth() throws FileNotFoundException {
    }
    // compiles fine
}

class C implements A {
    @Override
    public void meth() {
    } // compiles fine
}

class D implements A {
    @Override
    public void meth() throws Exception {
    } // compile error
}
```
