package exercise.etc;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class IteratorDemo {
    public static void main(String[] args) {
        ArrayList<String> sportStars = new ArrayList<>();
        sportStars.add("김연아");
        sportStars.add("손흥민");
        sportStars.add("전정국");
        sportStars.add("김태형");

        for(int i=0; i<sportStars.size();i++){
            System.out.println(sportStars.get(i));
        }

        Iterator<String> sportStarIterator = sportStars.iterator();
        while (sportStarIterator.hasNext()){
            System.out.println(sportStarIterator.next());
        }
        // Iterator + for : for each
        for(String sportStar : sportStars){
            System.out.println(sportStar);
        }

        Map<Integer, String> fruits = new HashMap<>();
        fruits.put(1, "apple");
        fruits.put(2, "banana");
        fruits.put(3, "pineapple");
        fruits.put(4, "blueberry");
        fruits.put(5, "melon");

        // for-each
        for(String fruit : fruits.values()){
            System.out.println(fruit);
        }
    }
}
