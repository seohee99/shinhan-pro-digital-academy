package day03;

public class EX05_Abstract {
    public static void main(String[] args) {
        // OTT : Netflix Tiving
        // printOpeningLogo() : "넷플", "티빙"
        // netflix.play() => pringOpening
        // netflix.finish() : "다봤다"


        Netflix netflix = new Netflix();
        Tving tving = new Tving();

        netflix.play();
        netflix.finish();
        System.out.println("=============================");
        tving.play();
        tving.finish();
    }
}

abstract class OTT{
    void play(){
        System.out.println("영상 시작");
        printOpeningLogo();
    }

    abstract void printOpeningLogo();

    void finish(){
        System.out.println("다 봤다");
    }
}

class Netflix extends OTT{
    @Override
    void printOpeningLogo() {
        System.out.println("넷플릭스");
    }
}

class Tving extends OTT{
    @Override
    void printOpeningLogo() {
        System.out.println("티빙");
    }
}

