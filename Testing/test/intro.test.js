import { describe, it, expect, test } from 'vitest';
const {max} = require('../src/intro.js');

describe('max', () => {
    it('should return the first argument if the first argument is greater than the second', () => {
        expect(max(2, 1)).toBe(2);
    });
    it('should return the second argument if the first argument is greater than the first', () => {
        expect(max(1,2)).toBe(2);
    });
    it('should return the first argument if the first argument is equal tp the second', () => {
        expect(max(1, 1)).toBe(1);
    });
})

