const parseStringToArr = (input: string): any[] => {
  return input.split('\n');
};

const getElfAreaByPair = (pair: any) => {
  const [elf1, elf2] = pair.split(',');
  const [elf1Start, elf1End] = elf1.split('-');
  const [elf2Start, elf2End] = elf2.split('-');
  return {
    elf1Start: Number(elf1Start),
    elf1End: Number(elf1End),
    elf2Start: Number(elf2Start),
    elf2End: Number(elf2End),
  };
};

const overlappedFullyFully = (pair: any): boolean => {
  const { elf1Start, elf1End, elf2Start, elf2End } = getElfAreaByPair(pair);

  if (elf1Start === elf2Start) {
    return true;
  }

  // overlap np. 2-8,5-8
  else if (elf1End === elf2End) {
    return true;
  }

  // overlap inside np.  3-4,2-5
  else if (elf1Start > elf2Start && elf1End < elf2End) {
    return true;
  }

  // overlap inside np.  2-5,3-4
  else if (elf1Start < elf2Start && elf1End > elf2End) {
    return true;
  }
};

export const funA = (input: string) => {
  const arr = parseStringToArr(input);

  const overlap = [];

  for (const pair of arr) {
    if (overlappedFullyFully(pair)) {
      overlap.push(pair);
    }
  }

  return overlap.length;
};

export const funB = (input: string) => {
  const arr = parseStringToArr(input);

  const overlap = [];

  for (const pair of arr) {
    if (overlappedFullyFully(pair)) {
      overlap.push(pair);
    } else {
      const { elf1Start, elf1End, elf2Start, elf2End } = getElfAreaByPair(pair);

      if (elf1Start < elf2Start && elf1End >= elf2Start) {
        overlap.push(pair);
      } else if (elf2Start < elf1Start && elf2End >= elf1Start) {
        overlap.push(pair);
      }
    }
  }

  return overlap.length;
};
