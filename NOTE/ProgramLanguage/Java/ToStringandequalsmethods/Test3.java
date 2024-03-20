package Java.ToStringandequalsmethods;

public class Test3 {
    public static void main(String arg[]) {
        String s1 = new String("test1");
        String s2 = new String("test1");
        System.out.println(s1 == s2); // * Same object?  false
        System.out.println(s1.equals(s2)); // * Same values?  true
        Person p1 = new Person("Alice", 22);
        Person p2 = new Person("Alice", 22);
        Person p3 = new Person("Bob", 20);
        System.out.println(p1 == p2); // * Same object?  false
        System.out.println(p1.equals(p2)); // * Same values?  true
        System.out.println(p1.equals(s1)); // * Same values?  false
        System.out.println(p1.equals(p3)); // * Same values?  false
    }
}