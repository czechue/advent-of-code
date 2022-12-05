const parseStringToArr = (input: string): any[] => {
  return input
    .split('\n')
    .map((row) => row.split(''))
    .map((row) => row.filter((el, index) => index % 4 === 1)); // [[" ", " ", "C", "B", "H", " ", " ", " ", " "], ["W", " ", "D", "J", "Q", "B", " ", " ", " "], ["P", "F", "Z", "F", "B", "L", " ", " ", " "], ["G", "Z", "N", "P", "J", "S", "V", " ", " "], ["Z", "C", "H", "Z", "G", "T", "Z", " ", "C"], ["V", "B", "M", "M", "C", "Q", "C", "G", "H"], ["S", "V", "L", "D", "F", "F", "G", "L", "F"], ["B", "J", "V", "L", "V", "G", "L", "N", "J"], ["1", "2", "3", "4", "5", "6", "7", "8", "9"]]
};

function transpose(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
}

const prepareCratesStock = (input: string) => {
  const arr = parseStringToArr(input);

  transpose(arr);

  const arrWithRevertedRows = arr
    .map((row) => row.reverse())
    .map((el) => el.filter((cell) => cell !== ' ')); // [["1", "B", "S", "V", "Z", "G", "P", "W"], ["2", "J", "V", "B", "C", "Z", "F"], ["3", "V", "L", "M", "H", "N", "Z", "D", "C"], ["4", "L", "D", "M", "Z", "P", "F", "J", "B"], ["5", "V", "F", "C", "G", "J", "B", "Q", "H"], ["6", "G", "F", "Q", "T", "S", "L", "B"], ["7", "L", "G", "C", "Z", "V"], ["8", "N", "L", "G"], ["9", "J", "F", "H", "C"]]

  const objectFromArr = arrWithRevertedRows.reduce((acc, curr, index) => {
    const key = index + 1;
    acc[key] = curr.slice(1);
    return acc;
  }, {});

  return objectFromArr;
  //{
  // "1": ["B", "S", "V", "Z", "G", "P", "W"],
  // "2": ["J", "V", "B", "C", "Z", "F"],
  // "3": ["V", "L", "M", "H", "N", "Z", "D", "C"],
  // "4": ["L", "D", "M", "Z", "P", "F", "J", "B"],
  // "5": ["V", "F", "C", "G", "J", "B", "Q", "H"],
  // "6": ["G", "F", "Q", "T", "S", "L", "B"],
  // "7": ["L", "G", "C", "Z", "V"],
  // "8": ["N", "L", "G"],
  // "9": ["J", "F", "H", "C"]
  // }
};

export const prepareInstruction = (input: string) => {
  return input.split('\n').map((row) =>
    row
      .split(' ')
      .filter((el, index) => index % 2 === 1)
      .map((el) => Number(el))
  );
};

const getTopStockLetters = (stock: any[]) => {
  // @ts-ignore
  return Object.values(stock)
    .map((el) => (el as []).reverse())
    .map((el) => el[0])
    .slice(0, 9)
    .join('');
};

export const funA = (inputStock: string, inputInstruction: string) => {
  const stock = prepareCratesStock(inputStock);
  const instruction = prepareInstruction(inputInstruction);

  for (const instr of instruction) {
    const [count, from, to] = instr;
    const removed = stock[from]?.slice(0, -count) || [];
    const addTo = stock[from]?.slice().reverse().slice(0, count) || [];
    stock[from] = removed;
    stock[to] = [...stock[to], ...addTo];
  }

  return getTopStockLetters(stock);
};

export const funB = (inputStock: string, inputInstruction: string) => {
  const stock = prepareCratesStock(inputStock);
  const instruction = prepareInstruction(inputInstruction);

  for (const instr of instruction) {
    const [count, from, to] = instr;
    const removed = stock[from]?.slice(0, -count) || [];
    const addTo = stock[from]?.slice().slice(removed.length) || [];
    stock[from] = removed;
    stock[to] = [...stock[to], ...addTo];
  }

  return getTopStockLetters(stock);
};
