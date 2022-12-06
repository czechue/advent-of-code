const parseStringToArr = (input: string): any[] => {
  return input.split('');
};

export const isArrayItemsUniq = (arr: string[]) => {
  const obj = {};
  for (const item of arr) {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  }
  return Object.keys(obj).length === arr.length;
};

export const funA = (input: string) => {
  const arr = parseStringToArr(input);

  for (let i = 4; i < arr.length; i++) {
    const lastFourChars = arr.slice(i - 4, i);
    if (isArrayItemsUniq(lastFourChars)) {
      return i;
    }
  }
};

export const funB = (input: string) => {
  const arr = parseStringToArr(input);

  for (let i = 14; i < arr.length; i++) {
    const lastFourChars = arr.slice(i - 14, i);
    if (isArrayItemsUniq(lastFourChars)) {
      return i;
    }
  }
};
