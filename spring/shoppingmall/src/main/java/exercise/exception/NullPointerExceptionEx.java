package exercise.exception;

public class NullPointerExceptionEx {
    public static void main(String[] args) {
        String str = null;
        String[] strings = null;

//        if(str != null)
//            System.out.println(str.charAt(0));
//
//        if(strings != null)
//            System.out.println(strings[0]);
        try {
            System.out.println(str.charAt(0));
        }catch (NullPointerException e){
            System.out.println("예외요~");
            System.out.println(e.getMessage());
            System.out.println(e.toString());
        }
    }
}
