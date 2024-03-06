import { describe, it, expect, test } from 'vitest';
const { max, fizzBuzz } = require('../src/intro.js');

describe('max', () => {
    it('should return the first argument if the first argument is greater than the second', () => {
        expect(max(2, 1)).toBe(2);
    });
    it('should return the second argument if the second argument is greater than the first', () => {
        expect(max(1, 2)).toBe(2);
    });
    it('should return the first argument if the first argument is equal tp the second', () => {
        expect(max(1, 1)).toBe(1);
    });
})

describe('fizzBuzz', () => {
    it("should return FizzBuzz if the argument is divisible by 3 or 5", () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    it("should return Fizz if the argument is only divisible by 3", () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    })
    it("should return Buzz if the argument is only divisible by 5", () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    })
    it("should return the given input as string if the argument is not divisible by 3 or 5", () => {
        expect(fizzBuzz(1)).toBe('1');
    })
})

