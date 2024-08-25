
function getLucky(input: string, numberOfTransformations: number): number {
    let sumDigits = extractNumberFromLettersAndCalculateSumDigits(input);
    --numberOfTransformations;

    while (numberOfTransformations > 0) {
        sumDigits = calculateSumDigits(sumDigits);
        --numberOfTransformations;
    }

    return sumDigits;
};

function extractNumberFromLettersAndCalculateSumDigits(input: string): number {
    const ASCII_SMALL_CASE_A = 97;
    let sumDigits = 0;
    for (let i = 0; i < input.length; ++i) {
        const positionInAlphabet = input.codePointAt(i) - ASCII_SMALL_CASE_A + 1;
        sumDigits += calculateSumDigits(positionInAlphabet);
    }
    return sumDigits;
}

function calculateSumDigits(input: number): number {
    let sumDigits = 0;
    while (input > 0) {
        sumDigits += input % 10;
        input = Math.floor(input / 10);
    }
    return sumDigits;
}
