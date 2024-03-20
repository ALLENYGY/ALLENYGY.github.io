package Java.ToStringandequalsmethods;

public class Student extends Person {
    private String school;
    public Student(String name, int age, String school) {
    super(name, age);
    this.school = school;
    }
    public Student(String name, int age) {
    this(name, age, "UIC");
    }
    public String getSchool() {
    return school;
    }
    @Override
    public String getInfo() {
    return "Student "+ getName() + " is " + getAge() +
    " and at " + school;
    }
    public String getParentInfo() {
    return super.getInfo();
    }
    }