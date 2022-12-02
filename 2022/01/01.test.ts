import { input } from './input';
import { findMostCalories, findTopThreeElves } from './01';

describe('1', () => {
  test('11', () => {
    expect(findMostCalories(input)).toBe(71471);
  });

  test('22', () => {
    expect(findTopThreeElves(input)).toBe(211189);
  });
});
