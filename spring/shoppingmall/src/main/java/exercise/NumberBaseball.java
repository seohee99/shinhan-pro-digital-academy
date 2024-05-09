package exercise;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class NumberBaseball {
    static int[] answers = {4,8,6};
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("숫자 야구 게임을 시작합니다. 0-9까지 숫자를 중복없이 3개 입력하세요!");
        int life = 10;

        while(life > 0){
            System.out.println("기회는 " + life + "번 입니다. ");
            System.out.println("=================================");

            String input = scanner.nextLine();
            String[] inputs = input.split(" ");

            // 숫자만 입력했는 지 체크
            if(!isNumber(inputs)) {
                System.out.println(Arrays.toString(inputs) + "숫자만 입력할 수 있습니다.");
                continue;
            }

            // 중복 체크
            if(checkDuplication(inputs)) {
                System.out.println(Arrays.toString(inputs) + "숫자가 중복되었습니다. 0-9까지 숫자를 중복없이 사용해주세요.");
                life --;
                continue;
            }

            int[] results = {0, 0, 0}; // S, B, O

            for (int i=0; i<3; i++){
                numberCheck(i, Integer.parseInt(inputs[i]), results);
            }

            if(results[0] == 3){
                System.out.println("You Win");
                break;
            }else {
                if(results[0]!=0) System.out.print(results[0] + "S");
                if(results[1]!=0) System.out.print(results[1] + "B");
                if(results[2]!=0) System.out.print(results[2] + "O");
                life --;
                System.out.println("");
                System.out.println("=================================");

            }

        }
    }
    public static boolean isNumber(String[] array){
        boolean flag = true;
        for(int i=0; i<array.length;i++){
            try {
                Integer.parseInt(array[i]);
            }catch (Exception e){
                flag = false;
                break;

            }
        }
        return flag;
    }

    public static boolean checkDuplication(String[] array){

        for(int i=0; i<array.length; i++){
            int count = 0;
            for(int j=i+1; j<array.length; j++){
                if(array[i].equals(array[j])) count ++;
            }
            if (count > 0) return true;
        }
        return false;
    }

    public static void numberCheck(int idx, int num, int[] results){
        if (answers[idx] == num) {
            results[0]++;
        } else if (intArrayContains(answers, num)) {
            results[1]++;
        } else {
            results[2]++;
        }
    }

    public static boolean intArrayContains(int[] array, int key) {
        for (int value : array) {
            if (value == key) {
                return true;
            }
        }
        return false;
    }

}
