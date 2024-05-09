package exercise.exception;

import java.util.ArrayList;

public class ArrayIndexOutOfBoundEx {
    public static void main(String[] args) {
        // 예외 발생 상황
        // try catch
        // 어떤 예외 클래스로 예외 받아줄건지

        int[] numbers = {1,2,3,4};
        try{
            System.out.println(numbers[4]);
        }catch(ArrayIndexOutOfBoundsException e){
            System.out.println(e.toString());
        }
    }

}
