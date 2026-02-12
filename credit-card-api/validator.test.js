const { validateNumber } = require('./validator');

describe('Luhn Algorithm Validation', () => {
    
    test('should return true for a valid card number', () => {
        expect(validateNumber('49927398716')).toBe(true);
    });

    test('should return false for an invalid card number', () => {
        expect(validateNumber('49927398717')).toBe(false);
    });

    test('should return false for a completely random wrong number', () => {
        expect(validateNumber('123456')).toBe(false);
    });

    test('should return false for an empty string', () => {
        expect(validateNumber('')).toBe(false);
    });
});