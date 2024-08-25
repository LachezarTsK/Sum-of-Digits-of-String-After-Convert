
/**
 * @param {string} input
 * @param {number} numberOfTransformations
 * @return {number}
 */
var getLucky = function (input, numberOfTransformations) {
    let sumDigits = extractNumberFromLettersAndCalculateSumDigits(input);
    --numberOfTransformations;

    while (numberOfTransformations > 0) {
        sumDigits = calculateSumDigits(sumDigits);
        --numberOfTransformations;
    }

    return sumDigits;
};

/**
 * @param {string} input
 * @return {number}
 */
function extractNumberFromLettersAndCalculateSumDigits(input) {
    const ASCII_SMALL_CASE_A = 97;
    let sumDigits = 0;
    for (let i = 0; i < input.length; ++i) {
        const positionInAlphabet = input.codePointAt(i) - ASCII_SMALL_CASE_A + 1;
        sumDigits += calculateSumDigits(positionInAlphabet);
    }
    return sumDigits;
}

/**
 * @param {number} input
 * @return {number}
 */
function calculateSumDigits(input) {
    let sumDigits = 0;
    while (input > 0) {
        sumDigits += input % 10;
        input = Math.floor(input / 10);
    }
    return sumDigits;
}
