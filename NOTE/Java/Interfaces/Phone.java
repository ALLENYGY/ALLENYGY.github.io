package Java.Interfaces;

public class Phone implements USB {
    private int memory=10;
    public Phone(int memory){
        this.memory=memory;
    }
    public Phone(){

    }
    public void install() {
        System.out.println("Install Phone driver"+" Memory: "+memory);

    }

    public void work() {
        System.out.println("Phone works");
    }
}
