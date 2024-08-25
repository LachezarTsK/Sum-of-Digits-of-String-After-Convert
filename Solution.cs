
using System;

public class Solution
{
    public int GetLucky(string input, int numberOfTransformations)
    {
        int sumDigits = ExtractNumberFromLettersAndCalculateSumDigits(input);
        --numberOfTransformations;

        while (numberOfTransformations > 0)
        {
            sumDigits = CalculateSumDigits(sumDigits);
            --numberOfTransformations;
        }

        return sumDigits;
    }

    private int ExtractNumberFromLettersAndCalculateSumDigits(String input)
    {
        int sumDigits = 0;
        for (int i = 0; i < input.Length; ++i)
        {
            int positionInAlphabet = input[i] - 'a' + 1;
            sumDigits += CalculateSumDigits(positionInAlphabet);
        }
        return sumDigits;
    }

    private int CalculateSumDigits(int input)
    {
        int sumDigits = 0;
        while (input > 0)
        {
            sumDigits += input % 10;
            input /= 10;
        }
        return sumDigits;
    }
}
