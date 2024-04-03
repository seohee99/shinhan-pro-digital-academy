public class EX03_Switch {
    public static void main(String[] args) {

        int age = 19;

        switch (age / 10){
            case 3:
                System.out.println("30대입니다");
                break;
            case 2:
                System.out.println("20대입니다");
                break;
            case 1:
                System.out.println("10대입니다");
                break;
            default:
                System.out.println("어린이입니다");
        }
    }
}
