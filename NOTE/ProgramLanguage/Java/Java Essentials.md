# *Java Programming Essentials*

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [*Java Programming Essentials*](#java-programming-essentials)
  - [*Identifiers and Naming*](#identifiers-and-naming)
  - [*Keywords*](#keywords)
  - [*Variable Declarations and Assignments*](#variable-declarations-and-assignments)
    - [*Naming Conventions*](#naming-conventions)
    - [*Three kinds of variables*](#three-kinds-of-variables)
  - [*Standard input and output (I/O)*](#standard-input-and-output-io)
  - [*Data Types*](#data-types)
    - [*primitive type*](#primitive-type)
    - [*Reference data type*](#reference-data-type)
  - [*Variable Initialization*](#variable-initialization)
  - [*Type Casting*](#type-casting)
  - [*Arithmetic Expressions and Operators*](#arithmetic-expressions-and-operators)
  - [*Java Packages*](#java-packages)
  - [*Flow Control*](#flow-control)
    - [Condition statement](#condition-statement)
    - [Loop statement](#loop-statement)
    - [The break and continue Statements](#the-break-and-continue-statements)

<!-- /code_chunk_output -->

## *Identifiers and Naming*

- A Java identifier must NOT start with a digit, and all the characters must be letters, digits, “$”or“_”
- Java is a case-sensitive language
  - W_12, HelloWorld, _983, $bS5_c7 *Correct*
  - 4W2, class, Data#, 98.3, Hell world *Not Ok*

## *Keywords*

- new/const
- ![Keywords](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/NDukbV.png)

## *Variable Declarations and Assignments*

```java
 int numberOfBeans;
 double myBalance, totalWeight;
```

==Every variable in a Java program must be declared before it is used==

### *Naming Conventions*

- Camel Case
  - Variable and Method names should begin with a lowercase letter. Indicate "word" boundaries with an uppercase letter and restrict the remaining characters to digits and lowercase letters:
    - topSpeed bankRate1 timeOfArrival
  - Class names should begin with an uppercase letter and, otherwise, adhere to the rules above:
    - FirstProgram MyClass String

### *Three kinds of variables*

- Local variables

>Local variables are declared (visible) in methods, constructors or blocks. No default value for local variables, therefore should be assigned an initial value before the first use.

**局部变量（local variable）是在方法或代码块内部定义的变量，只能在该方法或代码块内部访问。它们的生命周期仅限于该方法或代码块的执行期间。局部变量必须先声明，然后才能使用。在声明时，可以指定变量的类型和初始值。例如：**

```java
public void exampleMethod() {
    int x = 5; // x是一个局部变量，类型为int，初始值为5
    System.out.println(x); // 输出5
}
```

- Instance variables

>Instance variables are declared in a class, but outside a method, constructor or any block. Instance variables have default values, e.g., numbers – 0, Boolean – false,etc.

**实例变量相当于该类的属性，需要 "new对象 "才能被调用。而且该变量不常驻内存，当这个类不再被使用时会java回收机制所释放。例如：**

```java
public class ExampleClass {
    int x; // x是一个实例变量，初始值为0
    String str = "hello"; // str是一个实例变量，初始值为"hello"
}
```

- 实例变量存在默认值：
  - 数值类型（byte，short，int，long，float，double）：0
  - char类型：'\u0000'（空字符）
  - boolean类型：false
  - 引用类型（例如String）：null

- Class/static variables

>Class/Static variables are declared with the static keyword in a class, but outside a method, constructor or blocks.
>There would only be one copy of each class variable per class, regardless of how many objects are created from it. Default values are same with instance variables.

**静态变量用 static字符修饰，随着类的加载而加载，静态变量存放在方法池中的静态区，可以直接通过"类名.变量名直接"调用，也可以通过类的对象调用。**

```java
public class ExampleClass {
    static int x; // x是一个静态变量，初始值为0
    static String str = "hello"; // str是一个静态变量，初始值为"hello"
}
int a = ExampleClass.x; // 通过类名访问静态变量x
String s = ExampleClass.str; // 通过类名访问静态变量str
```

## *Standard input and output (I/O)*

- Standard output

```java
System.out.println(); //Print a line to the standard output (screen)
System.out.print(); //Print something to the standard output (screen)
```

- Standard input

```java
import java.util.Scanner;
Scanner input = new Scanner(System.in);
int a=input.nextInt();
String b=input.nextline();
Double c=input.nextDouble();
```

## *Data Types*

![DataType](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/yXXfTn.png)

### *primitive type*

- numerical data type:  
  - integer: byte, short,int,long **long num=8888888(l);**
  - floating point： float，double **float num=8888888(f);**
- character data type: char
- boolean data type: bool
  - 小数默认是 **double**
- data range: ![Data-Range](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/ZeCwja.png)

### *Reference data type*

- class
- interface
- array

## *Variable Initialization*

## *Type Casting*

- $$byte→short→int(char)→long→float→double$$
- ![TypeCasting](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/I2H3Fd.png)

## *Arithmetic Expressions and Operators*

- & (“and”), | (“or”), ^ (“xor”), ~ (“not”)
- n<<k n左移k位
- n>>k n右移k位
- ![BinaryOperator](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/Oo2z0n.png)
- ![Precedence](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/d2IP1M.png)

## *Java Packages*

- Code libraries in Java are called packages.

>A package is a collection of classes that is stored in a manner that makes it easily accessible to any program.
>In order to use a class that belongs to a package, the class must be brought into a program using an import statement

## *Flow Control*

- if-else, if, and switch statements.
- while, do-while, and for statements.
- A Boolean expression evaluates to either true or false -- used to control the flow

### Condition statement

```java
if(){}
else{}
```

```java
switch() {case"": break;}
```

### Loop statement

```java
while(Boolean_Expression) {
    Statement_1
    Statement_2
    Statement_Last
}
```

```java
do {
    Statement_1
    Statement_2
    Statement_Last
} while(Boolean_Expression); 
```

```java
  for(initialization;Boolean_Expression;Update){

  }
```

### The break and continue Statements

- The break statement: break;
  - When executed, the break statement ends the nearest enclosing switch or loop statement.
- The continue statement: continue;
  - When executed, the continue statement ends the current loop body iteration of the nearest enclosing loop statement.
  - Note that in a for loop, the continue statement transfers control to the update expression.
