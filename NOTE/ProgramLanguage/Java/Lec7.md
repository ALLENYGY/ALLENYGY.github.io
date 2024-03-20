# Array and Generics

## Array **引用数据类型**

- An array is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created. After creation, its length is fixed.

>array 一经创建长度不可变

- Arrays of primitive types.
  - Declare an array variable by specifying the array type—which is the element type followed by []—and the array variable name.
  - Initialize the array variable with an actual array. Use new operator to create the array.
  - The number of elements in the array is stored in a public instance variable of the array object called length.

```java
Declare an array a of integers: 
    int[] a; int b[];
Create an array object that can hold 100 integers:
    a = new int[100];
Array literal:
    int [] array = {1,2,3,4,5}
Length 
    a.length;
```

- Arrays of objects.
  - After creating the array object itself, you must also create each element object of the array one by one using the newoperator (inside a loop).

>创建后需要使用 new 方法 初始化对象

```java
    Student[] a; // Variable.
    a = new Student[3]; // Array object.
    System.out.println("length: " + a.length);
// Creating all the array elements one by one:
    for(int i = 0; i < a.length; i++) {
      a[i] = new Student("Student " + i); //* neeed to new an object
    }
    for(int i = 0; i < a.length; i++) {
// a[i] is of type Student.
      System.out.println("name: " + a[i].getName());
    }
```

## Enhanced for loops

```java
for (elementType varName : arrayName){ 
    …statement…
}
```

- Internally the Java compiler automatically transformssuch a loop into a normal for loop.
- varName is then a synonym (another name) for arrayName[i].
- ElementType can be a primitive type or a class type, both work the same way.
- Possible to modify the element object

```java
for(Student s: a) {
    System.out.println("name: " + s.getName());
}
for(int i = 0; i < a.length; i++) {
    Student s = a[i];
    System.out.println("name: " + s.getName());
}
```

### Advantages

- It is easier to write
- It is easier to read
- Less opportunities for indexing errors

### Disadvantages

- Does not modify the content of the array object!

>Because varName is only a synonym for arrayName[i], and is not arrayName[i] itself, modifying varName does not modify the array object!
>It is not possible to use an enhanced for loop to modify the array object.
>It is possible to use an enhanced for loop to modify the element objects!
>element object 可以修改， array 本身不可变

- The array elements are always all accessed one by one in order of increasing index (from 0 to length - 1) and there is no way to change that.

- **Do not confuse the array object with its element objects!**

## ArrayList

1. By default the type of the elements of an arraylist is Object.
   - This allows an arraylist to contain any kind of object.
   - A downcast is then usually required when reading an element from an arraylist.
2. ArrayList *vs* Array
   - Like an array: an arraylist is an object that can contain other objects. You can access elements of the arraylist using an index that starts at 0.
   - Like a list, you can **grow or shrink the size** of the arraylist dynamically by adding or removing elements.
3. Methods must be used to read / write array elements:
   - the usual array notation does not work.
4. Arraylists are mostly used to store objects.
5. Arraylists can also be used with primitive values:
   - Java then automatically converts the primitive value into an equivalent object: int becomes Integer, double becomes Double, boolean becomes Boolean, etc.
   - These classes are provided by Java.
   - This automatic conversion is called boxing.
   - The object equivalent to the primitive value is then stored in the arraylist.
   - Later when taking the object out of the arraylist (and doing a downcast), Java can automatically unbox the object back into the original primitive value.

```java
ArrayList a; // Variable.
a = new ArrayList(); // ArrayList object.
// Loop up to 3 because a.size() is 0 initially.
for(int i = 0; i < 3; i++) {
    a.add(new Student("Student " + i)); // Upcast.
}
for(int i = 0; i < a.size(); i++) {
    Student s = (Student)a.get(i); // Downcast.
    System.out.println("name: " + s.getName());
}
```

## Generics--(Parametric Polymorphism)

1. Generics are a way to parameterize a class over a type.
   - A method can take a value as argument.
   - A generic class can take a type as argument.
2. We don’t need downcasts anymore when reading elements from an object such as an arraylist.
   - All type errors can be found at compile time.
3. Generics are also useful when we have two classes that have exactly the same code but with different types.
4. Advantages:
   - There is no need for downcasts anymore, Java knows exactly what kind of value is stored in which box, based on the type of the box itself.
   - All types can be checked at compile time.
   - So errors in your code are detected before you ship your software to your customers!
   - The code runs faster too.
   - And there is no code duplication.

```java
public class Generics<T>{

    Random random=new Random();
    private T product;
    public ArrayList<T> products=new ArrayList<>();
    public Generics(){

    }
    public void addproduct(T product){
        products.add(product);
    }
    public T getproduct(){
        product=products.get(random.nextInt(products.size()));
        return product;
    }
    public static void main(String[] args) { 
        Generics<String> sGenerics=new Generics<>();
        String [] sProducts={"Iphone","Iwatch","Mac","airpods"};
        for (int i = 0; i < sProducts.length; i++) {
            sGenerics.addproduct(sProducts[i]);            
        }
        System.out.println("You get "+sGenerics.getproduct());    
    }
}
```

- Generic application
  - Arraylist is a generic class too
  - Many of Java’s classes are generic too
    - lists, queues, trees, hash maps, etc.
