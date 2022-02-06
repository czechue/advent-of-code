import {
  getNiceStringsNumber,
  hasForbiddenStrings,
  hasLetterThatAppearsTwiceInARow,
  hasMinNumberOfVowels,
  hasPairOfTwoLettersThatApearsTwice,
  hasTwoSameLettersDividedByLetter,
  isNiceString,
  isNiceString2,
  parseStringToArray,
} from './05';
import { input } from './input';

describe('05', () => {
  it('should parse string correctly', () => {
    const string = 'rthkunfaakmwmush\nqxlnvjguikqcyfzt\nsleaoasjspnjctqt';
    expect(parseStringToArray(string)).toStrictEqual([
      'rthkunfaakmwmush',
      'qxlnvjguikqcyfzt',
      'sleaoasjspnjctqt',
    ]);
  });

  it('hasMinNumberOfVowels', () => {
    expect(hasMinNumberOfVowels('aaa', 3)).toBe(true);
    expect(hasMinNumberOfVowels('aa', 3)).toBe(false);
    expect(hasMinNumberOfVowels('aezi', 3)).toBe(true);
    expect(hasMinNumberOfVowels('eouzesa', 3)).toBe(true);
  });

  it('hasLetterThatAppearsTwiceInARow', () => {
    expect(hasLetterThatAppearsTwiceInARow('aabcde')).toBe(true);
    expect(hasLetterThatAppearsTwiceInARow('BVCDE')).toBe(false);
    expect(hasLetterThatAppearsTwiceInARow('aaa')).toBe(true);
    expect(hasLetterThatAppearsTwiceInARow('abcxxzer')).toBe(true);
  });

  it('hasForbiddenStrings', () => {
    const forbiddenStrings = ['ab', 'cd', 'pq', 'xy'];

    expect(hasForbiddenStrings('abcdert', forbiddenStrings)).toBe(true);
    expect(hasForbiddenStrings('ytrewepqrfs', forbiddenStrings)).toBe(true);
    expect(hasForbiddenStrings('ljhrtab', forbiddenStrings)).toBe(true);

    expect(hasForbiddenStrings('axcxert', forbiddenStrings)).toBe(false);
  });

  it('isNiceString', () => {
    expect(isNiceString('ugknbfddgicrmopn')).toBe(true);
    expect(isNiceString('aaa')).toBe(true);
    expect(isNiceString('jchzalrnumimnmhp')).toBe(false);
    expect(isNiceString('haegwjzuvuyypxyu')).toBe(false);
    expect(isNiceString('dvszwmarrgswjxmb')).toBe(false);
  });

  it('getNiceStringsNumber', () => {
    expect(getNiceStringsNumber(input, isNiceString)).toBe(258);
  });

  // 2nd task
  it('hasPairOfTwoLettersThatApearsTwice returns true', () => {
    expect(hasPairOfTwoLettersThatApearsTwice('aaxcbfdsaa')).toBe(true);
    expect(hasPairOfTwoLettersThatApearsTwice('zaaxcbfdsaa')).toBe(true);
    expect(hasPairOfTwoLettersThatApearsTwice('aaaa')).toBe(true);
    expect(hasPairOfTwoLettersThatApearsTwice('aazaa')).toBe(true);
    expect(hasPairOfTwoLettersThatApearsTwice('aazzaa')).toBe(true);
    expect(hasPairOfTwoLettersThatApearsTwice('vzzvzzb')).toBe(true);
    expect(hasPairOfTwoLettersThatApearsTwice('qjhvhtzxzqqjkmpb')).toBe(true);
  });

  it('hasPairOfTwoLettersThatApearsTwice returns false', () => {
    expect(hasPairOfTwoLettersThatApearsTwice('aaxcbfdsa')).toBe(false);
    expect(hasPairOfTwoLettersThatApearsTwice('abcdefghjksa')).toBe(false);
    expect(hasPairOfTwoLettersThatApearsTwice('aaa')).toBe(false);
  });

  it('hasTwoSameLettersDividedByLetter', () => {
    expect(hasTwoSameLettersDividedByLetter('xyx')).toBe(true);
    expect(hasTwoSameLettersDividedByLetter('lkhgaaa')).toBe(true);
    expect(hasTwoSameLettersDividedByLetter('xzbxc')).toBe(false);
  });

  it('isNiceString examples', () => {
    expect(isNiceString2('qjhvhtzxzqqjkmpb')).toBe(true);
    expect(isNiceString2('xxyxx')).toBe(true);
    expect(isNiceString2('uurcxstgmygtbstg')).toBe(false);
    expect(isNiceString2('ieodomkazucvgmuy')).toBe(false);
  });

  it('isNiceString2', () => {
    expect(getNiceStringsNumber(input, isNiceString2)).toBe(53);
  });
});
