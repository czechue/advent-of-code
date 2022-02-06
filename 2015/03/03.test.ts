import {
  getHousesVisitedBySantaOnly,
  getHousesVisitedAtChristmas,
  getUniqHousesNumber,
  getHousesVisitedByRoboSanta,
} from './03';
import { input03 } from './03.input';

describe('03: getHousesVisitedBySantaOnly', () => {
  it('get correct houses', () => {
    const input = '^>v<';
    expect(getHousesVisitedBySantaOnly(input)).toStrictEqual({
      '0:0': 2,
      '0:1': 1,
      '1:1': 1,
      '1:0': 1,
    });
  });

  it('get correct houses ex2', () => {
    const input = '^v^v^v^v^v';
    expect(getHousesVisitedBySantaOnly(input)).toStrictEqual({
      '0:0': 6,
      '0:1': 5,
    });
  });

  it('get uniq houses', () => {
    expect(
      getUniqHousesNumber({
        '0:0': 6,
        '0:1': 5,
      })
    ).toBe(2);
  });

  it('get uniq houses (input)', () => {
    expect(
      getUniqHousesNumber({
        '0:0': 6,
        '0:1': 5,
      })
    ).toBe(2);
  });

  it('getHousesVisitedAtChristmas example', () => {
    expect(getHousesVisitedAtChristmas(input03)).toBe(2592);
  });

  it('getHousesVisitedAtChristmas (input)', () => {
    const input = '^>v<';
    expect(getHousesVisitedAtChristmas(input)).toBe(4);
  });
});

describe('03: getHousesVisitedByRoboSanta', () => {
  it('get correct houses', () => {
    const input = '^v';
    expect(getHousesVisitedByRoboSanta(input)).toStrictEqual({
      '0:0': 2,
      '0:1': 1,
      '0:-1': 1,
    });
  });

  it('getHousesVisitedAtChristmas ', () => {
    const input = '^v';
    expect(getHousesVisitedAtChristmas(input, true)).toBe(3);
  });

  it('getHousesVisitedAtChristmas ', () => {
    const input = '^v^v^v^v^v';
    expect(getHousesVisitedAtChristmas(input, true)).toBe(11);
  });

  it('getHousesVisitedAtChristmas input', () => {
    expect(getHousesVisitedAtChristmas(input03, true)).toBe(2360);
  });
});
