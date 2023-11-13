# Abstract Methods and Classes Interfaces

## Abstract Methods

- Some methods should not have code.
- So make the methods abstract: do not need to implement the methods at all. The methods have no code, only a ";".
  
1. Non-private abstract methods are inherited by subclasses, just like other methods. ----->非私有抽象类将其被子类继承。
2. Abstract methods will later be overridden in subclasses using non-abstract methods, just like other methods. ----->抽象化方法将在子类被重写。
    - Example: the Circle class overrides the abstract area method inherited from the Shape class, to compute the area of a circle using Math.PI.
3. It is possible to override an inherited abstract method with another abstract method, but it is useless since it just replaces one abstract method with another. ----->可以用新的抽象方法重写，但也意味着子类仍是抽象类。
4. A class with one or more abstract methods must itself be declared abstract. ----->存在抽象方法的类是抽象类
    - A class can even be declared as abstract even though ithas no abstract methods. ----->即使没有抽象方法也可被定义成抽象类
5. Abstract classes cannot be instantiated. ----->抽象方法不可被实例化 ==>不可创建新的类对象

- Note that you can still create object variables of an abstract class, but such a variable must refer to an object of a non abstract subclass.

```java
public class Test {
    public static void main(String[] args) {
    // Cannot instantiate the type shape
    Shape s = new Shape(); // Forbidden
    Circle c = new Circle(); // Okay
    Shape sc = new Circle(); // Okay
    ...
    }
}
```

## Interfaces

- An interface is a specification of what some classes can do (which public methods they have) without saying how the classes do it (which code the methods have) **一些共用的抽象的方法的集合**
  - In the Java programming language, an interface is not a class but a set of requirements for classes that want to conform to the interface.
- All methods listed in an interface are always public. **方法必须是公开的，否则没有意义**
  
An interface is specified using the interface keyword.
> public interface xxx {..}

- An interface is not a class . Interfaces never have instance fields, and the methods are never implemented in the interface.

>**It is not possible to create an object from an interface** 因为接口是抽象方法的集合，所以可以类比抽象类，所以无法创建对象
>接口不是类

A class specifies that it implements an interface using the implements keyword.
> public class xxx implements xxx {…}

- The class must then provide code for all the methods listed in that interface (except if the class is abstract, in which case some of the methods listed in the interface can be abstract in the class).
- An interface can also contain constants (static final data) but this is more rare.

```java
public interface Movable {
    public double getSpeed();

    public void setSpeed(double newSpeed);

    public static final int MY_CONSTANT = 100;
    //在上面的示例中，MY_CONSTANT是一个常量，它被声明为public static final，这意味着它是一个公共的、静态的和不可变值。
}

public class Car extends Vehicle implements Movable {
    ...
    @Override
    public double getSpeed() { ... }

    @Override
    public void setSpeed(double newSpeed) { ... }
}

public abstract class Car extends Vehicle implements Movable {
    ...
    /*
     * Does not implement setSpeed method, leave it to a
     * subclass to implement the missing method
     */
@Override
public double getSpeed() { ... }
}

public class SmallCar extends Car {
    @Override
    public void setSpeed(double newSpeed) {
        // Implement the missing method
    }
}

```

***

- Multiple unrelated classes can implement the same interface. **接口可以实现多重继承**
  - Example: a Car class and a Rabbit class both might have getSpeed and setSpeed methods to implement the Movable interface, even though the two classes are unrelated (their only common ancestor is the Object class).
- The same class can implement multiple unrelated interfaces.
  - Example: a Rabbit class might implement both the Movable interface and the Edible interface.
- If a class implements an interface, then any subclass implicitly implements the same interface too, because the subclass inherits from its parent class all the methods necessary to implement the interface.

```java
public interface Movable {
    public double getSpeed();

    public void setSpeed(double newSpeed);
}

public interface Edible {
    public void cook();
}

public class Car extends Vehicle implements Movable {
    ...
    @Override
    public double getSpeed() { ... }

    @Override
    public void setSpeed(double newSpeed) { ... }
}

public class Rabbit extends Animal implements Movable, Edible {
    @Override
    public double getSpeed() { ... }

    @Override
    public void setSpeed(double newSpeed) { ... }

    @Override
    public void cook() { ... }
}
```

***

- **Just like a class, an interface can also be used as a type.**
  - Example: the Rabbit class implements the Edible interface, therefore a rabbit object can be assigned to a variable of type Edible:

```java
Edible e = new Rabbit(); //类比子类继承父类
e.cook(); // Cooking the rabbit.
```

- This is the same subtyping polymorphism we have seen when studying class inheritance (a rabbit object can be used as an animal object if the Rabbit class is a subclass of the Animal class) but with interfaces.

### Application

- Using interfaces, you can write code that processes data without knowing what kind of data it really is.
- Example:

```java
public class Test {
    ...
    public void stopMovable(Movable m) {
        m.setSpeed(0.0); // m’s speed is now zero.
    }
}
```

- The stopMovable method stops a movable object, but it does not know whether the movable object is a car or a rabbit. It only knows that the object is movable (which is really the only thing it needs to know).

- An interface splits your software into two parts:
  - The classes that implement the interface (provide code for all the methods listed in the interface).
  - The rest of the code that uses the interface (call the methods listed in the interface).
- The classes that implement the interface do not need to know anything about how the rest of the code uses the interface. **实现时不需考虑如何使用**
- The rest of the code that uses the interface does not need to know anything about how the classes implementing the interface work internally. **使用时不需考虑如何实现**

***

- The interface creates a contract between the two sides:
  - The implementation side promises to provide code for all the methods listed in the interface.
  - The use side promises to use only the methods listed in the interface.

## Interfaces vs. Abstract Classes

- Compare:
  - Both contain no code for abstract methods.
  - Both cannot be used to create objects.
  - Both provide subtyping polymorphism.
- Contrast:
  - The interface splits your code into two parts and works as an API between the two parts. The classes implementing the interface are unrelated to each other (Car and Rabbit), they just happen to be able to do some of the same things.
  - The abstract class is used for code inheritance (even if all the methods are abstract and no code is actually inherited). The subclasses are closely related to each other (Student and Teacher) since they are special cases of the same parent class (Person).
  ![Interfaces vs. Abstract Classes](/assets/Interfaces%20vs.%20Abstract%20Classes.png)
