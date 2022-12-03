const parseStringToArr = (input: string): string[] => {
  return input.split('\n');
};

const getCode = (letter: string) => {
  let code = letter.charCodeAt(0); //ascii

  if (code >= 65 && code <= 90) {
    // Uppercase letters
    code -= 38;
  } else if (code >= 97) {
    // lowerCase letters
    code -= 96;
  }
  return code;
};

export const funA = (input: string): number => {
  const arr = parseStringToArr(input);

  const commonItemsFoundASCIINumbers = [];

  for (const backpack of arr) {
    const allItems = backpack.split('');
    const count = allItems.length;
    const itemsPerCompartment = count / 2;
    const left = allItems.slice(0, itemsPerCompartment);
    const right = allItems.slice(itemsPerCompartment);
    const commonItem = left.find((value) => right.includes(value))[0];
    const code = getCode(commonItem);

    commonItemsFoundASCIINumbers.push(code);
  }

  return commonItemsFoundASCIINumbers.reduce((a, b) => a + b, 0);
};

export const funB = (input: string): number => {
  const arr = parseStringToArr(input);

  const groupedList = [];

  arr.forEach((backpack, index) => {
    if (index % 3 === 0) {
      const group = [arr[index], arr[index + 1], arr[index + 2]];
      groupedList.push(group);
    }
  });

  const commonBadgesOfGroupsOfThree = [];
  for (let group of groupedList) {
    group = group.map((i) => i.split(''));
    // find common item in array of three
    const commonBadge = group.reduce((p, c) =>
      p.filter((e) => c.includes(e))
    )[0];
    commonBadgesOfGroupsOfThree.push(commonBadge);
  }

  const commonBadgesNumbers = [];
  for (const letter of commonBadgesOfGroupsOfThree) {
    const code = getCode(letter);
    commonBadgesNumbers.push(code);
  }

  return commonBadgesNumbers.reduce((a, b) => a + b, 0);
};
