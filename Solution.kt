
class Solution {

    fun getLucky(input: String, numberOfTransformations: Int): Int {
        var numberOfTransformations = numberOfTransformations
        var sumDigits = extractNumberFromLettersAndCalculateSumDigits(input)
        --numberOfTransformations

        while (numberOfTransformations > 0) {
            sumDigits = calculateSumDigits(sumDigits)
            --numberOfTransformations
        }

        return sumDigits
    }

    private fun extractNumberFromLettersAndCalculateSumDigits(input: String): Int {
        var sumDigits = 0
        for (i in input.indices) {
            val positionInAlphabet = input[i] - 'a' + 1
            sumDigits += calculateSumDigits(positionInAlphabet)
        }
        return sumDigits
    }

    private fun calculateSumDigits(input: Int): Int {
        var input = input
        var sumDigits = 0
        while (input > 0) {
            sumDigits += input % 10
            input /= 10
        }
        return sumDigits
    }
}
