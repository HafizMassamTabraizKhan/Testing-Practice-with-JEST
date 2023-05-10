const Calculator = require('./calculator');

describe('Calculator', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    describe('add', () => {
      it('returns the sum of two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(0, 0)).toBe(0);
        expect(calculator.add(-1, 1)).toBe(0);
      });
    });
  
    describe('subtract', () => {
      it('returns the difference between two numbers', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
        expect(calculator.subtract(0, 0)).toBe(0);
        expect(calculator.subtract(1, -1)).toBe(2);
      });
    });
  
    describe('divide', () => {
      it('returns the quotient of two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
        expect(calculator.divide(0, 5)).toBe(0);
        expect(calculator.divide(-10, 2)).toBe(-5);
      });
  
      it('throws an error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
      });
    });
  
    describe('multiply', () => {
      it('returns the product of two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(0, 5)).toBe(0);
        expect(calculator.multiply(-2, -3)).toBe(6);
      });
    });
});