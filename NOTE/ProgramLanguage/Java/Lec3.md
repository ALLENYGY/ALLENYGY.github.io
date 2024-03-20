# Creating Java Classes

## Class and object

- A class is a programmer-defined type.
- A value of a class type is called an object or an instance of the class: an object exhibits the properties and behaviors defined by the object’s class.

- Objects have data and behavior.
  - Data in an object is called instance fields.
  - Behaviors that operate on the data are called methods.

### Class

- A class definition specifies the data items and methods that all of it subjects will have:
  - Data items and methods are sometimes called members of the object.
  - Data items are usually called instance fields/instance variables/attributes/properties.

## UML and class diagram

- UML : pictures of an Object-Oriented system
  - Programming languages are not abstract enough for OO design.
  - Open standard to model the OO system.
- The most popular diagrammatic notation used for Object-Oriented Development.
- Consists of:
  - Class diagrams;
  - Sequence diagrams;
  - Use case diagrams;
  - Activity diagrams;

### Diagram of one class

- Class name in the top of box
- Attributes (optional)
  - Include all instance fields of the object
  - visibility name : type
- Operations / methods (optional)
  - visibility name (parameters) : return_type
  - May omit trivial methods (get/set)
- Visibility:
  - \+ public
  - \# protected
  - \- private
  - \~ package (default)
- Underline static instance variables and static methods
![ClassDiagram](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/ClassDiagram.png)

<!--## Instance variable and methods
## Key word: this -->

## Constructor  **构造器**

> In java we use constructors to construct new instances.

- Constructors always have the same name as the class name.
- A constructoris a special kind of method that is designed to initialize the instance variables for a new object:

>public ClassName(Parameters){ code }

- A constructor must have the same name as the class.
- A constructor has no type returned, not even void.
- Constructors are often overloaded. ^[(there is more than one constructor in the same class)]

### The *new* Operator

> The new operator is used in combination with constructor to create an object from a particular class.

```java
> ClassName classVar= new ClassName();
```

- The object variable refers to the newly constructed object.

>In Java, the value of any object variable is a reference ^[(basically an address of a memory location)] to an object that is stored elsewhere.

#### Initialize

- Initialize the object variable with a newly constructed object **创建一个新的对象**
- Set the variable to refer to an existing object **对存在的对象进行引用**

```java
Person person1 = new Person();
Person person2 = person1;
Person person3 = null;       //refers to no object
```

![MemoryAnalysis](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/MemoryAnalysis.png)

## Instance Variables

- Define:
[\<modifiers>] type <fields_name> [= defaultValue] **定义在类里，方法外的变量**
- In order to refer to a particular instance variable, preface it with its object name as follows:

```java  
person1.name // "." is the period operator
person2.age
```

> 1. instance variables store the data of the object.
> 2. Each object has its own copy of the variables.
> 3. Every object has a state that is determined by the values stored in the instance variables of the object.

![DefaultValue](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/DefaultValue.png)
## Local variable

> A variable declared within a method definition is called a local variable. **定义在方法里的变量**

- If two methods each have a local variable of the same name, they are still two entirely different variables.
- A local variable is only valid for calculation insideits method definition.
- Local variables aredestroyed automatically when the method call ends

## Methods

- Define:
  [\<modifiers>] <return_type>\<name>([parameter_list]) {}

## *this* Keyword

>It(this) works as a reference to the current Object, whose method or constructor is being invoked.

### *this* Keyword with a field

- this must be used if a parameter or a local variable with the same name is used in a method.

### *this* Keyword with Constructor

- this keyword can be used inside the constructor to call another overloaded constructor in the same class.
- By this way, we can call the constructor explicitly.
- Note: thiskeyword can only be the first statement in Constructor

```java
public class Person{
    private intage;
    private String name;
    public Person(){
        this("Bob",0);
        System.out.println("Inside Constructor without parameter");
    }
    public Person(String name, intage){
        this.name = name;
        this.age= age;
        System.out.println("Inside Constructor with two parameters");
    }
}
```

### *this* Keyword as a method parameter

```Java
public class Person {
    private intage;
    private String name;
    public Person(String name, intage) 
    {
        this.name = name;
        this.age= age;
    }
    public void method1(Person pp) 
    {
        System.out.println("Inside Method1");
        System.out.println("Age:"+pp.age);
    }
    public void method2() 
    {
        this.method1(this);
        System.out.println("Inside Method2");
    }
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Person p = new Person("Bob",23);
        p.method2();
    }
}
```

![MemoryAnalysis2](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/MemoryAnalysis.png)

## Overloading **重载**

- Java Method Overloading
  - Overloading occurs if several methods have the same name but different parameters.
  - Overloaded methods:
  - appear in the same class;
  - have the same name; but
  - have different parameter lists; and
  - can have different return types

## Java access modifiers

![AccessModifiers](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/AccessModifiers.png)

- Only public and default can be used in the class declaration **只有public和default可以用于类名的申明**
- A public class can be accessed from any place.
- A no modifier class can only be accessed from within the same package.
- protected instance variables or methods can be accessed by:
  - the code of the class itself;
  - subclasses;
  - other code in the same package.
- private instance variables or methods can be accessed by:
  - the code of the class itself;
