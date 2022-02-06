export const parseStringToArray = (input: string) => {
  return input.split('\n');
};

export const getNiceStringsNumber = (
  input: string,
  isNiceStringFun: (string) => boolean
): number => {
  const arrayOfStrings = parseStringToArray(input);

  return arrayOfStrings.reduce((acc, curr) => {
    if (isNiceStringFun(curr)) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

export const isNiceString = (string: string) => {
  return (
    hasMinNumberOfVowels(string, 3) &&
    hasLetterThatAppearsTwiceInARow(string) &&
    !hasForbiddenStrings(string, ['ab', 'cd', 'pq', 'xy'])
  );
};

export const isNiceString2 = (string: string) => {
  return (
    hasPairOfTwoLettersThatApearsTwice(string) &&
    hasTwoSameLettersDividedByLetter(string)
  );
};

export const hasMinNumberOfVowels = (
  word: string,
  minNumberOfVowels: number
) => {
  const vowels = 'aeiou';

  const allVowelsInWord = word
    .split('')
    .filter((letter) => vowels.includes(letter));

  return allVowelsInWord.length >= minNumberOfVowels;
};

export const hasLetterThatAppearsTwiceInARow = (word: string) => {
  const arr = word.split('');
  return (
    arr
      .map((letter, index) => {
        if (index > 0 && letter === arr[index - 1]) {
          return letter;
        }
        return null;
      })
      .filter(Boolean).length > 0
  );
};

export const hasForbiddenStrings = (
  word: string,
  forbiddenStrings: string[]
) => {
  const arr = word.split('');
  return (
    arr
      .map((letter, index) => {
        if (index > 0) {
          const string = arr[index - 1] + letter;
          return forbiddenStrings.some(
            (forbiddenString) => forbiddenString === string
          );
        }
        return null;
      })
      .filter(Boolean).length > 0
  );
};

function allCharactersSame(s) {
  const n = s.length;
  for (let i = 1; i < n; i++) if (s[i] != s[0]) return false;

  return true;
}

export const hasPairOfTwoLettersThatApearsTwice = (word: string) => {
  const arr = word.split('');

  const obj = arr.reduce((acc, letter, index) => {
    if (index > 0) {
      const string = arr[index - 1] + letter;
      if (acc[string]) {
        // overlaping aaaa -> true
        if (allCharactersSame(arr[index - 3] + arr[index - 2] + string)) {
          acc[string] += 1;
        }
        // overlaping aaa -> false
        if (allCharactersSame(arr[index - 2] + string)) {
          return acc;
        }
        acc[string] += 1;
      } else {
        acc[string] = 1;
      }
    }
    return acc;
  }, {});

  return Object.values(obj).some((value) => value > 1);
};

export const hasTwoSameLettersDividedByLetter = (word: string): boolean => {
  const arr = word.split('');

  return arr
    .map((letter, index) => {
      return index > 1 && letter === arr[index - 2];
    })
    .some((value) => value === true);
};
