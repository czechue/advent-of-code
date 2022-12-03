import { input } from './input';
import { funA, funB } from './03';

describe('3', () => {
  it('A 1', () => {
    const e = 'vJrwpWtwJgWrhcsFMMfFFhFp';
    expect(funA(e)).toBe(16);
  });

  it('A 2', () => {
    const example =
      'vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw';

    const r = funA(example);
    console.log(r);
    expect(r).toEqual(157);
  });

  it('A input', () => {
    expect(funA(input)).toBe(8105);
  });
});

describe('3', () => {
  it('B1', () => {
    const e = 'vJrwpWtwJgWrhcsFMMfFFhFp';
    expect(funB(e)).toBe(16);
  });

  it('B2', () => {
    const example =
      'vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw';

    const r = funB(example);

    expect(r).toEqual(157);
  });

  it('B input', () => {
    expect(funB(input)).toBe(8105);
  });
});
