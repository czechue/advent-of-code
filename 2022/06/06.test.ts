import { input } from './input';
import { funA, funB, isArrayItemsUniq } from './06';

describe('3', () => {
  test('isArrayItemsUniq', () => {
    expect(isArrayItemsUniq(['a', 'b', 'c', 'd'])).toBe(true);
    expect(isArrayItemsUniq(['a', 'b', 'b', 'd'])).toBe(false);
  });

  test('A', () => {
    expect(funA(input)).toBe(1850);
  });

  test('B', () => {
    expect(funB(input)).toBe(2823);
  });
});
