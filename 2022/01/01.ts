const parseStringToArr = (input: string): number[] => {
  return input
    .split('\n\n')
    .map((singleBackpack) =>
      singleBackpack.split('\n').reduce((a, b) => Number(a) + Number(b), 0)
    );
};

export const findMostCalories = (input: string) => {
  const arr = parseStringToArr(input);

  return Math.max(...arr);
};

export const findTopThreeElves = (input: string) => {
  const arr = parseStringToArr(input);

  return arr
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);
};
