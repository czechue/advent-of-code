const parseStringToArr = (input: string): any[] => {
  return input.split('\n\n');
};

export const funA = (input: string) => {
  const arr = parseStringToArr(input);

  return arr;
};
