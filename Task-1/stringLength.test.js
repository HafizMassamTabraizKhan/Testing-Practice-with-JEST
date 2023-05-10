const stringLength = require('./stringLength');

test('returns the correct character count for valid strings', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('a')).toBe(1);
    expect(stringLength('1234567890')).toBe(10);
});

it('throws an error for strings that are empty', () => {
    expect(() => stringLength('')).toThrow('String must be at least 1 character long');
});

it('throws an error for strings that are too long', () => {
    expect(() => stringLength('12345678901')).toThrow('String must not be longer than 10 characters');
});