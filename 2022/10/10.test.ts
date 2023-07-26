import { funA, funB, getSum, renderPixels } from './10';
import { inputPuzzle } from './input';

const input =
  'addx 15\naddx -11\naddx 6\naddx -3\naddx 5\naddx -1\naddx -8\naddx 13\naddx 4\nnoop\naddx -1\naddx 5\naddx -1\naddx 5\naddx -1\naddx 5\naddx -1\naddx 5\naddx -1\naddx -35\naddx 1\naddx 24\naddx -19\naddx 1\naddx 16\naddx -11\nnoop\nnoop\naddx 21\naddx -15\nnoop\nnoop\naddx -3\naddx 9\naddx 1\naddx -3\naddx 8\naddx 1\naddx 5\nnoop\nnoop\nnoop\nnoop\nnoop\naddx -36\nnoop\naddx 1\naddx 7\nnoop\nnoop\nnoop\naddx 2\naddx 6\nnoop\nnoop\nnoop\nnoop\nnoop\naddx 1\nnoop\nnoop\naddx 7\naddx 1\nnoop\naddx -13\naddx 13\naddx 7\nnoop\naddx 1\naddx -33\nnoop\nnoop\nnoop\naddx 2\nnoop\nnoop\nnoop\naddx 8\nnoop\naddx -1\naddx 2\naddx 1\nnoop\naddx 17\naddx -9\naddx 1\naddx 1\naddx -3\naddx 11\nnoop\nnoop\naddx 1\nnoop\naddx 1\nnoop\nnoop\naddx -13\naddx -19\naddx 1\naddx 3\naddx 26\naddx -30\naddx 12\naddx -1\naddx 3\naddx 1\nnoop\nnoop\nnoop\naddx -9\naddx 18\naddx 1\naddx 2\nnoop\nnoop\naddx 9\nnoop\nnoop\nnoop\naddx -1\naddx 2\naddx -37\naddx 1\naddx 3\nnoop\naddx 15\naddx -21\naddx 22\naddx -6\naddx 1\nnoop\naddx 2\naddx 1\nnoop\naddx -10\nnoop\nnoop\naddx 20\naddx 1\naddx 2\naddx 2\naddx -6\naddx -11\nnoop\nnoop\nnoop';

const inputShort = 'addx 15\naddx -11\naddx 6';

describe('10', () => {
  test('A', () => {
    const resultA = funA(input);
    expect(resultA[0]).toStrictEqual({
      cycle: 1,
      xAfter: 1,
      xDuring: 1,
    });
    expect(resultA[19]).toStrictEqual({
      cycle: 20,
      xAfter: 21,
      xDuring: 21,
    });
    expect(resultA[59]).toStrictEqual({
      cycle: 60,
      xAfter: 19,
      xDuring: 19,
    });
  });

  test('A getSum', () => {
    const sum = getSum(input);
    expect(sum).toBe(13140);
  });

  test('A input puzzle', () => {
    const sum = getSum(inputPuzzle);
    expect(sum).toBe(13220);
  });

  test('B short', () => {
    const inputShort2 = 'addx 15\naddx -11\naddx 6';
    expect(funB(inputShort2)).toStrictEqual([
      { currentCRTRow: '#', cycle: 1, xAfter: 1, xDuring: 1, xStart: 1 },
      { currentCRTRow: '##', cycle: 2, xAfter: 16, xDuring: 1, xStart: 1 },
      { currentCRTRow: '##.', cycle: 3, xAfter: 16, xDuring: 16, xStart: 16 },
      { currentCRTRow: '##..', cycle: 4, xAfter: 5, xDuring: 16, xStart: 16 },
      { currentCRTRow: '##..#', cycle: 5, xAfter: 5, xDuring: 5, xStart: 5 },
      { currentCRTRow: '##..##', cycle: 6, xAfter: 11, xDuring: 5, xStart: 5 },
    ]);
  });

  test('B input', () => {
    const result = [
      '##..##..##..##..##..##..##..##..##..##..',
      '###...###...###...###...###...###...###.',
      '####....####....####....####....####....',
      '#####.....#####.....#####.....#####.....',
      '######......######......######......####',
      '#######.......#######.......#######.....',
    ];
    const pixels = funB(input);
    const render = renderPixels(pixels);
    expect(render).toStrictEqual(result);
  });

  test('B inputPuzzle', () => {
    const pixels = funB(inputPuzzle);
    const render = renderPixels(pixels);
    expect(render).toStrictEqual([
      '###..#..#..##..#..#.#..#.###..####.#..#.',
      '#..#.#..#.#..#.#.#..#..#.#..#.#....#.#..',
      '#..#.#..#.#..#.##...####.###..###..##...',
      '###..#..#.####.#.#..#..#.#..#.#....#.#..',
      '#.#..#..#.#..#.#.#..#..#.#..#.#....#.#..',
      '#..#..##..#..#.#..#.#..#.###..####.#..#.',
    ]);
    // RUAKHBEK
  });
});
