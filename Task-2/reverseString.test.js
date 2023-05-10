const reverseString = require('./reverseString');

it('Reverse the given string', () => {
    expect(reverseString('hello')).toBe('olleh');
})