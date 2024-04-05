package day01;

public class EX06_Person {
    public static void main(String[] args) {
        Person seohee = new Person("서희");
        System.out.println(seohee.name);
    }
}

class Person{

    String name;
    Person(String name){
        this.name = name;

    };
}
