package exercise.generics;

import java.util.ArrayList;

public class GenericsDemo {
    public static void main(String[] args) {
        // 3종류의 차가 순서대로 경적을 울린다
        Taxi taxi = new Taxi();
        Bus bus = new Bus();
        ElecCar elecCar = new ElecCar();
        taxi.clarksion();
        bus.clarksion();
        elecCar.clarksion();

        // for문 사용(1) - array
        // 배열은 크기가 고정되어있기 때문에 car을 하나 더 추가할 수 없다
        Car[] cars = new Car[3];
        cars[0] = new Taxi();
        cars[1] = new Bus();
        cars[2] = new ElecCar();
        for(int i=0; i< cars.length; i++){
            System.out.println(cars[i]);
        }

        // for문 사용(2)
        ArrayList<Car> carArrayList = new ArrayList<>();
        carArrayList.add(new Taxi());
        carArrayList.add(new Bus());
        carArrayList.add(new ElecCar());

        for(int i=0; i< carArrayList.size(); i++){
            carArrayList.get(i).clarksion();
        }


        /////////////////////////////////////////////
        System.out.println("==========================");
        // CarList
        CarList<Car> carList = new CarList<>();
        carList.add(new Taxi());
        carList.add(new Bus());
        carList.add(new ElecCar());

        for(int i=0; i< carList.size(); i++){
            carList.get(i).clarksion();
        }
    }
}

class CarList<T> {
    ArrayList<T> arrayList = new ArrayList<>();

    void add(T element){
        // arrayList에 car 객체를 하나씩 추가
        arrayList.add(element);
    }
    // 어떤 객체가 들어올 지 모르기 때문에 하위 객체의 메소드를 호출해서 print를 할 수 없다
//    void print(){
//        for(T car:arrayList){
//            System.out.println(car.clarksion());
//        }
//    }

    int size(){
        return arrayList.size();
    }

    T get(int idx){
        return arrayList.get(idx);
    }
}

class Car {
    void clarksion(){
        System.out.println("경적 소리");
    }
}

class Taxi extends Car{
    @Override
    void clarksion() {
        System.out.println("택시 경적 소리");
    }
}

class Bus extends Car{
    @Override
    void clarksion() {
        System.out.println("버스 경적 소리");
    }
}

class ElecCar extends Car{
    @Override
    void clarksion() {
        System.out.println("전기차 경적 소리");
    }
}
