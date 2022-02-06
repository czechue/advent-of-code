export const getHousesVisitedAtChristmas = (
  input: string,
  withRobot?: boolean
) => {
  let visits = {};

  if (!withRobot) {
    visits = getHousesVisitedBySantaOnly(input);
  } else {
    visits = getHousesVisitedByRoboSanta(input);
  }

  return getUniqHousesNumber(visits);
};

export const getUniqHousesNumber = (houses: Record<string, number>): number => {
  return Object.keys(houses).length;
};

export const getHousesVisitedBySantaOnly = (
  input: string
): Record<string, number> => {
  const inputList = input.split('');

  let currentPosition: [number, number] = [0, 0];

  return inputList.reduce(
    (list, current) => {
      currentPosition = calculateNextPosition(current, currentPosition);
      const currPositionKey = `${currentPosition[0]}:${currentPosition[1]}`;

      if (list[currPositionKey]) {
        list[currPositionKey] += 1;
      } else {
        list[currPositionKey] = 1;
      }

      return list;
    },
    { '0:0': 1 }
  );
};

export const getHousesVisitedByRoboSanta = (
  input: string
): Record<string, number> => {
  const inputList = input.split('');

  let currentPositionSanta: [number, number] = [0, 0];
  let currentPositionRobo: [number, number] = [0, 0];
  let currPositionKey = '';

  return inputList.reduce(
    (list, current, index) => {
      if (index % 2 === 0) {
        currentPositionSanta = calculateNextPosition(
          current,
          currentPositionSanta
        );
        currPositionKey = `${currentPositionSanta[0]}:${currentPositionSanta[1]}`;
      } else {
        currentPositionRobo = calculateNextPosition(
          current,
          currentPositionRobo
        );
        currPositionKey = `${currentPositionRobo[0]}:${currentPositionRobo[1]}`;
      }

      if (list[currPositionKey]) {
        list[currPositionKey] += 1;
      } else {
        list[currPositionKey] = 1;
      }

      return list;
    },
    { '0:0': 2 }
  );
};

const calculateNextPosition = (
  sign: string,
  currentPosition: [number, number]
) => {
  const currentPositionCopy = currentPosition;

  if (sign === '>') {
    currentPositionCopy[0] += 1;
  }
  if (sign === '<') {
    currentPositionCopy[0] -= 1;
  }
  if (sign === '^') {
    currentPositionCopy[1] += 1;
  }
  if (sign === 'v') {
    currentPositionCopy[1] -= 1;
  }

  return currentPositionCopy;
};
