// src/add.test.ts
import { describe, it, expect } from 'vitest';
import { add } from './add';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
