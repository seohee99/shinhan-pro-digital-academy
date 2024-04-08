package day03;

public class EX06_Interface {
    public static void main(String[] args) {
        Person son = new Person();

        ApplePhone iphone16 = new ApplePhone();
        son.buyPhone(iphone16);

        SamsungPhone galaxy2223 = new SamsungPhone();
        son.buyPhone(galaxy2223);
    }
}

class ApplePhone implements Phone {
    private final int BATTERY_MAX_CAPA = 100; // 배터리 최대 용량
    private int batteryStatus = 70; // 배터리 현재 용량
    private boolean isOn = true;

    public boolean getIsOn() {
        return isOn;
    }

    public void charge() {
        if (batteryStatus == BATTERY_MAX_CAPA) {
            System.out.println("100%입니다.");
            return;
        } else if (batteryStatus == 95) {
            batteryStatus += 5;
        } else {
            batteryStatus += 10;
        }

        System.out.println(batteryStatus
                + "%가 되었습니다.");
    }

    public void operateKakaotalk() {
        if (isOn) {
            batteryStatus -= 5;

            if (batteryStatus == 0)
                turnOff();
        }
    }

    public void checkBatteryStatus() {
        System.out.println(batteryStatus+"%");
    }

    public void turnOff() {
        isOn = false;
    }

    public void turnOn() {
        isOn = true;
    }
}

class SamsungPhone implements Phone {
    private final int BATTERY_MAX_CAPA = 100; // 배터리 최대 용량
    private int batteryStatus = 80; // 배터리 현재 용량
    private boolean isOn = true;

    public boolean getIsOn() {
        return isOn;
    }

    public void charge() {
        if (batteryStatus == BATTERY_MAX_CAPA) {
            System.out.println("100%입니다.");
            return;
        } else if (batteryStatus == 95) {
            batteryStatus += 5;
        } else {
            batteryStatus += 10;
        }

        System.out.println(batteryStatus
                + "%가 되었습니다.");
    }

    public void operateKakaotalk() {
        if (isOn) {
            batteryStatus -= 5;

            if (batteryStatus == 0)
                turnOff();
        }
    }

    public void checkBatteryStatus() {
        System.out.println(batteryStatus+"%");
    }

    public void turnOff() {
        isOn = false;
    }

    public void turnOn() {
        isOn = true;
    }
}

interface Phone {
    // 1. 구현체가 어떤 게 오든 받아줄 수 있게
    //    타입형태로 제시하기 위함
    //    => implements Phone
    //    * 추상 클래스는 extends 공통 기능 상속, 규약 구현
    //    * 인터페이스는 implements 공통 규약, 구현
    // 2. 구현체(객체)를 필요 = 구현체 사용 =
    //    메소드를 호출
    //    메소드 선언(명, 매개변수) 통일
    //    * 인터페이스는 implements 공통 규약, 구현
    //    * 추상 클래스

    public abstract boolean getIsOn();
    void charge();
    void operateKakaotalk();
    void checkBatteryStatus();
    void turnOff();
    void turnOn();
}

class Person {
    Phone phone;

    // buyPhone()
    void buyPhone(Phone phone) {
        this.phone = phone;
    }

    // charge()
    void chargePhone() {
        phone.charge();
    }

    // useKakaotalk()
    void useKakaotalk() {
        if (phone.getIsOn())
            phone.operateKakaotalk();
    }
}