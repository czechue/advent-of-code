import { input } from './input';
import { funA } from './09';

describe('09', () => {
  test('A', () => {
    const example = 'U 3\nR 3';
    expect(funA(example)).toBe(1);
  });

  test('B', () => {
    expect(funA(input)).toBe(6494);
  });
});
