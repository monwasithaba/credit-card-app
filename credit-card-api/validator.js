const separateAndAdd = (digit) => {
    if (digit > 9) {
        let textVersion = digit.toString();

        let firstDigit = parseInt(textVersion[0]);
        let secondDigit = parseInt(textVersion[1]);

        return firstDigit + secondDigit;
    }
    return digit;
};

const validateNumber = (number) => {
    if (!number) {
        return false;
    }

    let sum = 0;
    let doubleDigit = false;

    
    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number[i]);

        if (doubleDigit) {
            digit = digit * 2;
            digit = separateAndAdd(digit);
        }

        sum = sum + digit;
        doubleDigit = !doubleDigit; 
    }
    return sum % 10 === 0;
};

module.exports = { validateNumber };