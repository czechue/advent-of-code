import { input } from './input';
import { funA, funB } from './09';

describe('09', () => {
  test('A', () => {
    const example = 'U 3\nR 3';
    expect(funA(example)).toBe(1);
  });

  test('A input', () => {
    expect(funA(input)).toBe(6494);
  });

  test('B exampmle', () => {
    const example = 'U 3\nR 3';
    expect(funB(example)).toBe(6494);
  });

  test('B input', () => {
    expect(funB(input)).toBe(6494);
  });
});
