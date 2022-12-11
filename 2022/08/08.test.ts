import { input } from './input';
import {
  setOuterTreesToValue,
  mapToToTuples,
  parseStringToArr,
  setInnerTreesToValue,
  countVisibleTrees,
  countTreesMultiplier,
  calculateTreeDistance,
} from './08';

describe('08', () => {
  test('mappedToTuples', () => {
    // prettier-ignore
    const example =
      '30373\n' +
      '25512\n' +
      '65332\n' +
      '33549\n' +
      '35390';

    const arr = parseStringToArr(example);
    const tuples = mapToToTuples(arr, false);

    expect(tuples).toStrictEqual([
      [
        [3, false],
        [0, false],
        [3, false],
        [7, false],
        [3, false],
      ],
      [
        [2, false],
        [5, false],
        [5, false],
        [1, false],
        [2, false],
      ],
      [
        [6, false],
        [5, false],
        [3, false],
        [3, false],
        [2, false],
      ],
      [
        [3, false],
        [3, false],
        [5, false],
        [4, false],
        [9, false],
      ],
      [
        [3, false],
        [5, false],
        [3, false],
        [9, false],
        [0, false],
      ],
    ]);
  });

  test('map First And Last Row To True', () => {
    // prettier-ignore
    const example =
      '30373\n' +
      '25512\n' +
      '65332\n' +
      '33549\n' +
      '35390';
    const arr = parseStringToArr(example);
    const allTrees = mapToToTuples(arr, false);
    const trees = setOuterTreesToValue(allTrees, true);

    expect(trees[0]).toStrictEqual([
      [3, true],
      [0, true],
      [3, true],
      [7, true],
      [3, true],
    ]);
    expect(trees[1]).toStrictEqual([
      [2, true],
      [5, false],
      [5, false],
      [1, false],
      [2, true],
    ]);
    expect(trees[trees.length - 1]).toStrictEqual([
      [3, true],
      [5, true],
      [3, true],
      [9, true],
      [0, true],
    ]);
  });

  test('map higher inner trees to True', () => {
    // prettier-ignore
    const example =
      '30373\n' +
      '25512\n' +
      '65332\n' +
      '33549\n' +
      '35390';
    const arr = parseStringToArr(example);
    const allTrees = mapToToTuples(arr, false);
    const outerTrees = setOuterTreesToValue(allTrees, true);
    const trees = setInnerTreesToValue(outerTrees, true);

    expect(trees[1]).toStrictEqual([
      [2, true],
      [5, true],
      [5, true],
      [1, false],
      [2, true],
    ]);
    expect(trees[2]).toStrictEqual([
      [6, true],
      [5, true],
      [3, false],
      [3, true],
      [2, true],
    ]);
    expect(trees[3]).toStrictEqual([
      [3, true],
      [3, false],
      [5, true],
      [4, false],
      [9, true],
    ]);
  });

  test('countVisibleTrees', () => {
    expect(countVisibleTrees(input)).toBe(1684);
  });

  test('calculate distance to last visible trees', () => {
    // prettier-ignore
    const arr: [number, number][] = [[2, 0], [5, 0], [5, 0], [1, 0], [2, 0]]
    // prettier-ignore
    const expected = [[2, 0], [5, 1*1], [5, 1*2], [1, 1*1], [2, 0]]

    expect(calculateTreeDistance(arr)).toStrictEqual(expected);
  });

  test('countTreesMultiplier', () => {
    // prettier-ignore
    const example =
      '30373\n' +
      '25512\n' +
      '65332\n' +
      '33549\n' +
      '35390';
    expect(countTreesMultiplier(example)).toBe(8);
  });

  test('part 2 - real input calculate the higher score', () => {
    // prettier-ignore

    expect(countTreesMultiplier(input)).toBe(486540);
  });
});
