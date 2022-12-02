import { getTournamentResultA, getTournamentResultB } from './02';
import { input } from './input';

describe('2-A', () => {
  test('A example 1', () => {
    const example = 'A Y';
    expect(getTournamentResultA(example)).toBe(8);
  });
  test('A example 2', () => {
    const example = 'B X';
    expect(getTournamentResultA(example)).toBe(1);
  });
  test('A example 3', () => {
    const example = 'C Z';
    expect(getTournamentResultA(example)).toBe(6);
  });
  test('A example sum', () => {
    const example = 'A Y\nB X\nC Z';
    expect(getTournamentResultA(example)).toBe(15);
  });

  test('A', () => {
    expect(getTournamentResultA(input)).toBe(11666);
  });
});

describe('2-B', () => {
  test('B example 1', () => {
    const example = 'A Y';
    expect(getTournamentResultB(example)).toBe(4);
  });
  test('B example 2', () => {
    const example = 'B X';
    expect(getTournamentResultB(example)).toBe(1);
  });
  test('B example 3', () => {
    const example = 'C Z';
    expect(getTournamentResultB(example)).toBe(7);
  });
  test('B example sum', () => {
    const example = 'A Y\nB X\nC Z';
    expect(getTournamentResultB(example)).toBe(12);
  });

  test('B', () => {
    expect(getTournamentResultB(input)).toBe(12767);
  });
});
