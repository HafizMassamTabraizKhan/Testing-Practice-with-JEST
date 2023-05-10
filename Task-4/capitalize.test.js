const capitalize = require('./capitalize');

describe('capitalize', () => {
    it('capitalizes the first letter of a string', () => {
      expect(capitalize('hello world')).toBe('Hello world');
      expect(capitalize('foo bar BAZ')).toBe('Foo bar BAZ');
      expect(capitalize('123')).toBe('123');
      expect(capitalize('')).toBe('');
    });
});