import { inputStock, inputInstruction } from './input';
import { funA, prepareInstruction } from './05';

describe('3', () => {
  test('A', () => {
    expect(funA(inputStock, inputInstruction)).toBe(1);
  });

  test('A ex', () => {
    const instr = 'move 5 from 4 to 7\n' + 'move 8 from 5 to 9';
    expect(prepareInstruction(instr)).toStrictEqual([
      [5, 4, 7],
      [8, 5, 9],
    ]);
  });

  test('A ex 2', () => {
    const instr = 'move 5 from 4 to 7';
    expect(funA(inputStock, instr)).toStrictEqual({});
  });

  test('B', () => {
    expect(funA(inputStock, inputInstruction)).toBe(1);
  });
});
