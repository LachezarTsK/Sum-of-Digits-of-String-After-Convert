
package main

import "fmt"

func getLucky(input string, numberOfTransformations int) int {
    sumDigits := extractNumberFromLettersAndCalculateSumDigits(input)
    numberOfTransformations--

    for numberOfTransformations > 0 {
        sumDigits = calculateSumDigits(sumDigits)
        numberOfTransformations--
    }

    return sumDigits
}

func extractNumberFromLettersAndCalculateSumDigits(input string) int {
    sumDigits := 0
    for i := range input {
        positionInAlphabet := int(input[i] - 'a' + 1)
        sumDigits += calculateSumDigits(positionInAlphabet)
    }
    return sumDigits
}

func calculateSumDigits(input int) int {
    sumDigits := 0
    for input > 0 {
        sumDigits += input % 10
        input /= 10
    }
    return sumDigits
}
