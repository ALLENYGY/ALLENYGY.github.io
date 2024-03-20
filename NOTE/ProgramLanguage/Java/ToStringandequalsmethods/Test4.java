package Java.ToStringandequalsmethods;

public class Test4 {
    public static void main(String arg[]) {
        Student s = new Student("Alice", 22, "UIC");
        Person p = s; // Using s as a Person object.
        System.out.println("Person's name: " + p.getName());
        System.out.println("Person's age: " + p.getAge());
        // Student's getInfo method is used, not Person's!
        System.out.println("Person's info: " + p.getInfo());
    }
}