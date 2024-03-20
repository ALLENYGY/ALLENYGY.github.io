package Java.TEST;

public class TestDemo {
    public static void main(String arg[]) {
        Computer c =new Computer();
        c.plugin(new Phone());
        c.plugin(new Printer());
    }
}
