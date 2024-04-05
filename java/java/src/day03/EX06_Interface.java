package day03;

public class EX06_Interface {
    public static void main(String[] args) {


        // Person => ApplePhone 모든 기능
        // 30분까지
        // ApplePhone => SamsungPhone 기기변경
    }
}

class ApplePhone {
    private final int BATTERY_MAX_CAPA = 100; // 배터리 최대 용량
    private int batteryStatus = 70; // 배터리 현재 용량
    private boolean isOn = true;

    boolean getIsOn() {
        return isOn;
    }

    void charge() {
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

    void operateKakaotalk() {
        if (isOn) {
            batteryStatus -= 5;

            if (batteryStatus == 0)
                turnOff();
        }
    }

    void checkBatteryStatus() {
        System.out.println(batteryStatus+"%");
    }

    // useYoutube() -10
    // turnOn
    // turnOff
}

class Person {
    ApplePhone phone;

    // buyPhone()
    void buyPhone(ApplePhone phone) {
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