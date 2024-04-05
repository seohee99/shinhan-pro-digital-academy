package day01;

public class EX07_Class {
    public static void main(String[] args) {
        NoteBook samsung = new NoteBook("삼성");
        NoteBook apple = new NoteBook("애플");

        System.out.println(apple.brand);
    }
}

class NoteBook {
    String brand;

    NoteBook(String brand){
        this.brand = brand;
    }
}
