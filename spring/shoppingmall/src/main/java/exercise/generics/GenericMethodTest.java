package exercise.generics;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

// 제네릭 클래스 선언
class GenericList<T> {
    private List<T> list = new ArrayList<>();

    public void add(T element) {
        list.add(element);
    }

    public void printList() {
        for (T element : list) {
            System.out.println(element);
        }
    }
}

public class GenericMethodTest {
    public static void main(String[] args) {
//        GenericList<Integer> intList = new GenericList<>();
//        intList.add(1);
//        intList.add(2);
//
//        GenericList<String> stringList = new GenericList<>();
//        stringList.add("안녕하세요");

        // array
        int[] numbers = {1, 2, 3, 4, 5};
        Object[] anyArray = {"hi", 0};

        // list
        List<Object> list = new ArrayList<>();

        list.add(1);
        list.add("아침");
        list.add(true);

        System.out.println(list);
    }
}