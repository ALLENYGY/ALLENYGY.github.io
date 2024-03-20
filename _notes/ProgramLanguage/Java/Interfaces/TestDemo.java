package Java.Interfaces;

public class TestDemo {
    public static void main(String args[]) {
        Computer c = new Computer();
        c.plugin(new Phone());
        c.plugin(new Printer());
    }
}