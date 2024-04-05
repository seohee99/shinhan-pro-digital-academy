package day03;

public class EX02_Annotation {
    public static void main(String[] args) {
        // 부모 객체
        Parent parent1 = new Parent();
        parent1.method();


        // 자식 객체
        Child child = new Child();
        child.method();

        // 자식 객체를 부모 객체에 담아서
        Parent parent2 = new Child();
        parent2.method();

        Child child2 = (Child) parent2;
        child2.metod();

    }

}

class Parent{
    void method(){
        System.out.println("부모 메소드");
    }
}

class Child extends Parent{
    @Override
    void method() {
        super.method();
        System.out.println("자식 메소드");
    }

    void metod(){
        System.out.println("자식에게만 있는 메소드");
    }
}
