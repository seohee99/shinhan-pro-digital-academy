package exercise.exception;

import com.example.shoppingmall.utill.Validator;

import java.util.Scanner;

public class InputMismatchEx {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("INPUT :");
        String input = scanner.next();

        while(true){

            if(input.equals("q")){
                System.out.println("q를 입력하여 종료합니다");
                break;
            }

            int score = Integer.parseInt(input);
            try {
                if(score >= 60 ) System.out.println("합격");
                else System.out.println("불합격");
                break;

            }catch (Exception e){
                System.out.println("다시 입력하세요");
                input = scanner.next();
            }
        }
        scanner.close();
    }
}
