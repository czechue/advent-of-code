const parseStringToArr = (input: string): any[] => {
  return input.split('\n');
};

export const funA = (input: string) => {
  const arr = parseStringToArr(input);

  const result: Array<{
    xDuring: number;
    xAfter: number;
    cycle: number;
  }> = [];
  let x = 1;
  let cycle = 1;

  for (let i = 0; i < arr.length; i++) {
    const inst = arr[i];

    if (inst === 'noop') {
      result.push({
        xDuring: x,
        xAfter: x,
        cycle: cycle,
      });

      cycle++;
    } else {
      const [, addValue] = inst.split(' ');
      const addNumber = Number(addValue);

      result.push({
        xDuring: x,
        xAfter: x,
        cycle: cycle,
      });

      result.push({
        xDuring: x,
        xAfter: x + addNumber,
        cycle: cycle + 1,
      });

      x = x + addNumber;
      cycle = cycle + 2;
    }
  }

  return result;
};

export const getSum = (input: string) => {
  const list = funA(input);

  let sum = 0;

  list.forEach((obj, index) => {
    if (index === 19) {
      sum = obj.xDuring * 20;
    } else {
      if ((index - 19) % 40 === 0) {
        sum = sum + obj.xDuring * (index + 1);
      }
    }
  });

  return sum;
};

// Part 2

const drawCurrentCRTRow = (
  currentCRTRow: string,
  currentSpritePositionStart: number,
  cycle: number
) => {
  if (cycle === 1) {
    if ([-1, 0, 1].includes(currentSpritePositionStart)) {
      return '#';
    } else {
      return '.';
    }
  } else if (currentCRTRow.length % 40 === 0) {
    if ([-1, 0, 1].includes(currentSpritePositionStart)) {
      return '#';
    } else {
      return '.';
    }
  } else {
    const newPixelPosition = currentCRTRow.length + 1;
    if (
      newPixelPosition < currentSpritePositionStart ||
      newPixelPosition > currentSpritePositionStart + 2
    ) {
      return currentCRTRow + '.';
    } else {
      return currentCRTRow + '#';
    }
  }
};

export const funB = (input: string) => {
  const arr = parseStringToArr(input);

  const result: Array<{
    xStart: number;
    xDuring: number;
    xAfter: number;
    cycle: number;
    currentCRTRow: string;
  }> = [];
  let x = 1;
  let cycle = 1;
  let currentCRTRow = '';

  for (let i = 0; i < arr.length; i++) {
    const inst = arr[i];

    if (inst === 'noop') {
      const tempCurrentCRTRow = drawCurrentCRTRow(currentCRTRow, x, cycle);

      result.push({
        xStart: x,
        xDuring: x,
        xAfter: x,
        cycle: cycle,
        currentCRTRow: tempCurrentCRTRow,
      });

      currentCRTRow = tempCurrentCRTRow;
      cycle++;
    } else {
      const [, addValue] = inst.split(' ');
      const addNumber = Number(addValue);

      const tempCRT = drawCurrentCRTRow(currentCRTRow, x, cycle);

      result.push({
        xStart: x,
        xDuring: x,
        xAfter: x,
        cycle: cycle,
        currentCRTRow: tempCRT,
      });

      const tempCRT2 = drawCurrentCRTRow(tempCRT, x, cycle + 1);

      result.push({
        xStart: x,
        xDuring: x,
        xAfter: x + addNumber,
        cycle: cycle + 1,
        currentCRTRow: tempCRT2,
      });

      currentCRTRow = tempCRT2;

      x = x + addNumber;
      cycle = cycle + 2;
    }
  }

  return result;
};

export const renderPixels = (
  pixels: Array<{
    cycle: number;
    currentCRTRow: string;
  }>
) => {
  return pixels
    .filter(({ cycle }) => {
      if (cycle % 40 === 0) return true;
    })
    .map(({ currentCRTRow }) => currentCRTRow);
};
