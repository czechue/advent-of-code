import { inputStock, inputInstruction } from './input';
import { funA, prepareInstruction, funB } from './05';

describe('3', () => {
  test('A', () => {
    expect(funA(inputStock, inputInstruction)).toBe('VJSFHWGFT');
  });

  test('A ex', () => {
    const instr = 'move 5 from 4 to 7\n' + 'move 8 from 5 to 9';
    expect(prepareInstruction(instr)).toStrictEqual([
      [5, 4, 7],
      [8, 5, 9],
    ]);
  });

  test('A ex 2', () => {
    const instr = 'move 1 from 1 to 2';
    expect(funB(inputStock, instr)).toStrictEqual('PWCBHBVGC');
  });

  test('B', () => {
    expect(funB(inputStock, inputInstruction)).toBe('LCTQFBVZV');
  });

  test('B ex 1', () => {
    const instr = 'move 5 from 4 to 7';
    expect(funB(inputStock, instr)).toBe('WFCMHBBGC');
  });
});
