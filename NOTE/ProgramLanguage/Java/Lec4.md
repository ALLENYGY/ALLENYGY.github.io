# Inheritance

- Class inheritance is the process by which a new class is created from another class superclass-subclass, parent-child class
  - Allows code to be reused **允许复用**
  - Subclass automatically has all the non-private instance variables and methods of the superclass **子类自动拥有父类非私有实例变量和方法**
  - Java does not allow multiple inheritance **Java不允许多重继承**
  - Static methods cannot be overridden **静态方法不可重写**
  - Have the same method name and parameters and compatible return type
  - New method cannot narrow the accessibility, but can widen it **只能扩展权限**

## Overloading vs Overriding

### overloading>重载

- 方法重载（Overloading）：在同一个类中定义多个同名但参数列表不同的方法，根据方法调用时传递的参数类型和个数来确定调用哪个方法。这种方式也称为编译时多态或静态多态。
- 方法名相同
- 参数列表不同
- 方法调用更加方便

### overriding>重写

- 方法重写（Overriding）：在子类中重写父类的方法，通过子类对象引用调用该方法时，实际执行的是子类中的方法。这种方式也称为运行时多态或动态多态。
- 在继承中，改写父类的方法
- 方法名不学相同
- 返回参数要兼容
- 可访问区间只增大

- Every class inherits the methods from Object and the methods need to be overridden with more appropriate definitions

## super keyword 从本类开始回溯直到找到该的方法

- Calling parent methods using super
- super() with correct number of arguments to call the parent constructor  ----super 使用父类构造器方法
- this() with correct number of arguments to call current class constructor  ----this 使用本类已经实现的构造器方法
- Java implicitly adds a call to super() if the constructor dose not explicitly call super(…) as its first statement

## final modifier

- Placed before definition of a variable, the value of this variable cannot be changed; **该变量不可改变**
- Placed before definition of a method, then that method cannot be redefined (overridden) in a subclass. **该方法不可重写**
- If the modifier final is placed before definition of a class, then that class cannot have subclasses. **该类不继承**

## Object class

- Every class is a descendent of the class Object.**所有类的祖先类都是object**
- toString and equals 方法 所有类都自带该方法

### toString and equals methods

#### toString method

- The java toString() method is used when we need a string representation of an object.
- This method can be overridden to customize the string representation of a specific class.

#### equals method

- The equals method compares the object given as argument to the method with the object on which the method is called: object1.equals(object2) compares object1 and object2 using the equals method of object1.
- The result may or may not be the same as: object2.equals(object1) because the two objects might be from different classes with different equals methods.
- This method can be overridden to customize the comparison of objects for specific classes.
- The equals method should always have a parameter of type Object so that we can compare the current object with any other object from any other class:

#### "=="方法

- 对于基础数据类型：
  - 直接比较--值
- 对于引用数据类型：
  - 比较是不是同一个对象

```java
public boolean equals(Object otherObject) {
        ...
}
```

### Dynamic binding 动态绑定

- Connecting a method call to a method body is called binding.
- Automatically selecting the appropriate method at runtime is called dynamic binding or late binding.
When binding is performed before the program is run (by the compiler, if there is one), it’s called early binding.
- All method binding in Java uses late binding unless the method is static or final (private methods are implicitly final).
- When the program runs and uses dynamic binding to call a method, then the virtual machine must call the version of the method that is appropriate for the actual type of the object.
  - If the actual type class defines the matched method, then the method is called.
  - Otherwise, the superclass of the actual type class is searched, and so on.
  - Finally, the Object class is searched.
- Multiple implementations of the same method occur in different classes along the same hierarchy.
- A child class overrides the implementation of a method
provided by its parent class.
- Dynamic binding then uses the first method with the right signature when searching bottom-up in the class hierarchy.
- 在Java中使用父类或接口为参数的方法/其子类或实现了接口的方法 都可被传参

## Subtyping polymorphism 子类多态

- An object from a subclass can be used as if it were an object from a superclass Subtyping polymorphism: an object from a subclass can be used as if it were an object from a superclass.
- Also called the Liskov substitution principle.
- Student inherits all the non-private methods of Person.
- So a Student object has all the methods necessary to act as a Person object!
- So Java allows us to use a Student object in any place where a Person object would work too.

## Type Casting

- Object typecasting is when the type used for an object is changed, usually by assigning the object to a variable of a different type.
- The cast does not change the object itself, it only changes the type through which the object is used.
- There are two types of casts:
  - Upcast: the type of the object is changed to the type of a superclass.
  - Downcast: the type of the object is changed to the type of a subclass. **本来是父类则无法向下转型**

### instanceof

- 用于检验是不是该类及该类所属的子类
- Since the type used for an object can be changed, how do we know what kind of object it really is?
  - The instanceof operator can be used to test if an object is from a class which is a descendent of the tested class//子类 instanceof 父类---true 父类 instanceof 子类---false
  - object instanceof class
    - For compile, class could be parent class/children class, otherwise “incompatible conditional operand types”
    - For run time, return true if the class is the parent class of the object type; otherwise return false ----运行时才报错
