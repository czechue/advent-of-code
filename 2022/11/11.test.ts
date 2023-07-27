import { input } from './input';
import { funA, getMonkeys, getStartingHoldings, processedRound } from './11';

const example =
  'Monkey 0:\n  Starting items: 79, 98\n  Operation: new = old * 19\n  Test: divisible by 23\n    If true: throw to monkey 2\n    If false: throw to monkey 3\n\nMonkey 1:\n  Starting items: 54, 65, 75, 74\n  Operation: new = old + 6\n  Test: divisible by 19\n    If true: throw to monkey 2\n    If false: throw to monkey 0\n\nMonkey 2:\n  Starting items: 79, 60, 97\n  Operation: new = old * old\n  Test: divisible by 13\n    If true: throw to monkey 1\n    If false: throw to monkey 3\n\nMonkey 3:\n  Starting items: 74\n  Operation: new = old + 3\n  Test: divisible by 17\n    If true: throw to monkey 0\n    If false: throw to monkey 1';

describe('11', () => {
  test('A example - starting holdings', () => {
    const monkeys = getMonkeys(example);
    const startingHoldings = getStartingHoldings(monkeys);

    expect(startingHoldings).toStrictEqual({
      '0': [79, 98],
      '1': [54, 65, 75, 74],
      '2': [79, 60, 97],
      '3': [74],
    });
  });

  test('A example - process 1st round', () => {
    const monkeys = getMonkeys(example);
    const startingHoldings = getStartingHoldings(monkeys);
    const round = processedRound(startingHoldings, monkeys, []);

    expect(round).toStrictEqual({
      '0': [20, 23, 27, 26],
      '1': [2080, 25, 167, 207, 401, 1046],
      '2': [],
      '3': [],
    });
  });

  test('A example - 20 rounds', () => {
    const result = funA(example);

    expect(result.holdings).toStrictEqual({
      '0': [10, 12, 14, 26, 34],
      '1': [245, 93, 53, 199, 115],
      '2': [],
      '3': [],
    });
  });

  test('A example - 20 rounds - counter', () => {
    const result = funA(example);

    expect(result.counter).toStrictEqual([101, 95, 7, 105]);
  });

  test('A example - 20 rounds - monkey business', () => {
    const result = funA(example);

    expect(result.monkeyBusiness).toBe(10605);
  });

  test('A - input', () => {
    const result = funA(input);
    expect(result.monkeyBusiness).toBe(118674);
  });
});
