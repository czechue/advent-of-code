import { input } from './input';
import { funA, funB } from './04';

describe('4', () => {
  test('A Input', () => {
    expect(funA(input)).toBe(433);
  });
  test('A Example 1 1', () => {
    const example = '3-59,27-60';

    expect(funA(example)).toBe(0);
  });

  test('B input', () => {
    expect(funB(input)).toBe(852);
  });
  test('B1', () => {
    const example = '5-7,7-9';

    expect(funB(example)).toBe(1);
  });
  test('B2', () => {
    const example = '2-8,3-7';

    expect(funB(example)).toBe(1);
  });
  test('B22', () => {
    const example = '9-94,1-9';

    expect(funB(example)).toBe(1);
  });
  test('B3', () => {
    const example = '6-6,4-6';

    expect(funB(example)).toBe(1);
  });
  test('B4', () => {
    const example = '2-6,4-8';

    expect(funB(example)).toBe(1);
  });

  test('B fail1', () => {
    const example = '2-6,7-8';

    expect(funB(example)).toBe(0);
  });

  test('B fail2', () => {
    const example = '6-6,7-7';

    expect(funB(example)).toBe(0);
  });

  test('B fail3', () => {
    const example = '7-7,6-6';

    expect(funB(example)).toBe(0);
  });

  test('B fail4', () => {
    const example = '7-8,2-6';

    expect(funB(example)).toBe(0);
  });

  test('B fail5', () => {
    const example = '2-3,6-7';

    expect(funB(example)).toBe(0);
  });

  test('B fail6', () => {
    const example = '6-7,2-3';

    expect(funB(example)).toBe(0);
  });
});
