package day03;

public class EX04_Abstract {
    public static void main(String[] args) {
        // 레시피 - 슈퍼 :  getInfo : ~의 레시피 입니다
        // 파스타 레시피 - 자식 : makeSource
        // 스테이크 레시피 - 자식 : grill
        

    }
}


class Recipe {
    String name;

    public Recipe(String name){
        this.name = name;
    }
    void getInfo(){
        System.out.println("이 레시피는 " + name+ "셰프님의 레시피입니다.");
    };
}

class Pasta extends Recipe{


    public Pasta(String name) {
        super(name);
    }

    public void makeSource(){
        System.out.println("makeSource");
    }
}

class Steak extends Recipe{

    public Steak(String name) {
        super(name);
    }

    @Override
    void getInfo() {
        System.out.println("스테이크 레시피입니다");
    }

    public void grill(){
        System.out.println("grill");
    }
}

