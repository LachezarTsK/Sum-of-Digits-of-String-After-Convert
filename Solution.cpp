
#include <string>
#include <string_view>
using namespace std;

class Solution {

public:
    int getLucky(const string& input, int numberOfTransformations) const {
        int sumDigits = extractNumberFromLettersAndCalculateSumDigits(input);
        --numberOfTransformations;

        while (numberOfTransformations > 0) {
            sumDigits = calculateSumDigits(sumDigits);
            --numberOfTransformations;
        }

        return sumDigits;
    }

private:
    int extractNumberFromLettersAndCalculateSumDigits(string_view input) const {
        int sumDigits = 0;
        for (int i = 0; i < input.length(); ++i) {
            int positionInAlphabet = input[i] - 'a' + 1;
            sumDigits += calculateSumDigits(positionInAlphabet);
        }
        return sumDigits;
    }

    int calculateSumDigits(int input) const {
        int sumDigits = 0;
        while (input > 0) {
            sumDigits += input % 10;
            input /= 10;
        }
        return sumDigits;
    }
};
