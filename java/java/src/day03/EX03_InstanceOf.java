package day03;

public class EX03_InstanceOf {
    public static void main(String[] args) {
        Garden garden = new Garden();
        Dog dog = new Dog();
        Cat cat = new Cat();


        garden.getSound(dog);
        garden.getSound(cat);

    }
}

class Garden{
    Pet pet = new Pet();
    public void getSound(Pet pet){
        if (pet instanceof Dog) {
            System.out.println("멍멍멍멍");
        }else{
            System.out.println("냥냥냥냥");
        }
        pet.cry();
    }
}
class Pet{
    public void cry(){};
}
class Dog extends Pet{
    @Override
    public void cry() {
        System.out.println("멍멍멍멍");
    }
}
class Cat extends Pet{
    @Override
    public void cry() {
        System.out.println("냥냥냥냥");
    }
}