
public class Solution {

    public int getLucky(String input, int numberOfTransformations) {
        int sumDigits = extractNumberFromLettersAndCalculateSumDigits(input);
        --numberOfTransformations;

        while (numberOfTransformations > 0) {
            sumDigits = calculateSumDigits(sumDigits);
            --numberOfTransformations;
        }

        return sumDigits;
    }

    private int extractNumberFromLettersAndCalculateSumDigits(String input) {
        int sumDigits = 0;
        for (int i = 0; i < input.length(); ++i) {
            int positionInAlphabet = input.charAt(i) - 'a' + 1;
            sumDigits += calculateSumDigits(positionInAlphabet);
        }
        return sumDigits;
    }

    private int calculateSumDigits(int input) {
        int sumDigits = 0;
        while (input > 0) {
            sumDigits += input % 10;
            input /= 10;
        }
        return sumDigits;
    }
}
