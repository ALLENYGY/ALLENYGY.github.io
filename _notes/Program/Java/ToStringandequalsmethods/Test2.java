package Java.ToStringandequalsmethods;

public class Test2 {
    public static void main(String arg[]) {
        Person p = new Person("Alice", 22);
        System.out.println(p); // Same as:
        System.out.println(p.toString());
    }
}
