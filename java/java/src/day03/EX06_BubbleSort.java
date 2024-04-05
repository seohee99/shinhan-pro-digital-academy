package day03;

import java.util.Arrays;

public class EX06_BubbleSort {
    public static void main(String[] args) {
        int[] array = {3, 1, 4,7,9,10, 2, 6, 5};
        for(int i=array.length; i>0; i--){ //반복을 돌릴 리스트
            for(int j=0; j<i-1; j++){//비교를 위한 for문
                if(array[j]>array[j+1]){ // 비교 조건 => j랑 j+1비교해서 뒤에꺼가 더 크면 바꾼다.
                    int temp=array[j+1];
                    array[j+1]=array[j];
                    array[j] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(array));
    }
}
