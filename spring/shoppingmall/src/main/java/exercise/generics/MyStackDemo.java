package exercise.generics;

import java.util.ArrayList;

public class MyStackDemo {
    public static void main(String[] args) {
        // arrayList로 stack 구현하기
        // add, remove
        // string도 integer도 받을 수 있어야 함
        MyStack<String> stackStr = new MyStack<>();
        System.out.println("====isEmpty=====");
        System.out.println(stackStr.isEmpty());


        System.out.println("====push=====");
        stackStr.push("a");
        stackStr.push("b");
        stackStr.push("c");

        System.out.println("====pop=====");
        System.out.println(stackStr.pop());

        System.out.println("====peek=====");
        System.out.println(stackStr.peek());

        System.out.println("====isEmpty=====");
        System.out.println(stackStr.isEmpty());

        System.out.println("====printElements=====");
        stackStr.printElements();
    }
}

class MyStack<T>{
    ArrayList<T> arrayList = new ArrayList<>();

    boolean isEmpty(){
        return arrayList.isEmpty();
    }

    void push(T element){
        arrayList.add(element);
    }

    T peek(){
        return arrayList.get(arrayList.size()-1);
    }

    T pop(){
        return arrayList.remove(arrayList.size()-1);
    }

    void printElements(){
        for(int i=0; i<arrayList.size(); i++){
            System.out.println(arrayList.get(i));
        }
    }
}
