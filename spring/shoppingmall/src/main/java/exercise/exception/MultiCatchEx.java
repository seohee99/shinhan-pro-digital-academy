package exercise.exception;

import java.util.Scanner;

public class MultiCatchEx {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] cards = {7, 5, 3, 2, 8, 1, 6, 9};
        System.out.println("몇번째 카드를 뽑으실래요?");
        int cardIdx = scanner.nextInt();

        System.out.println("뽑은 카드 번호는 : " + cardIdx);
        System.out.println("뽑힌 카드에 적힌 숫자는 : " + cards[cardIdx]);
    }
}
