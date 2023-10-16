import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {
    public static void main(String[] args) {
        // Create the array
        List<Integer> originalArray = new ArrayList<>();
        originalArray.add(1);
        originalArray.add(2);
        originalArray.add(3);
        originalArray.add(4);
        originalArray.add(5);
        originalArray.add(6);
        originalArray.add(7);

        // Shuffle the array
        Collections.shuffle(originalArray);

        // Print the shuffled array
        for (Integer value : originalArray) {
            System.out.print(value + " ");
        }
    }
}
