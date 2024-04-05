package day03;

public class EX01_Overriding {
    public static void main(String[] args){
        // cow, chicken : cry()
        // Farm : getSound()
        // Animal

        Cow cow = new Cow();
        Chicken chicken = new Chicken();
        Farm farm = new Farm(cow, chicken);
        farm.getSound();
    }
}

class Farm{

    Cow cow;
    Chicken chicken;

    Farm(Cow cow, Chicken chicken){
        this.cow = cow;
        this.chicken = chicken;
    }
    public void getSound(){
        cow.cry();
        chicken.cry();
    }
}

class Animal{
    public void cry(){

    }
}

class Cow extends Animal{
    @Override
    public void cry() {
        super.cry();
        System.out.println("음메");
    }
}

class Chicken extends Animal{
    @Override
    public void cry() {
        super.cry();
        System.out.println("꼬끼오");
    }
}
