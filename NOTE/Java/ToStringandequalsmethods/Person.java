package Java.ToStringandequalsmethods;

public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) // test whether they are same object
            return true;
        if (obj == null) // input object is null
            return false;
        if (obj instanceof Person) // input object is of type Person
        {
            Person p = (Person) obj; // type cassting
            // compare all the instance variables
            if (this.name.equals(p.getName()) && this.age == p.getAge())
                return true;
        }
        return false;
    }

    @Override
    public String toString() {
        return "I am " + name + " and I am " + age;
    }

    public String getInfo() {
        return "Person " + name + " is " + age;
    }
}
