package Java.Interfaces;

public class Printer implements USB {
    public void install() {
        System.out.println("Install Printer driver");
    }

    public void work() {
        System.out.println("Printing files");
    }
}