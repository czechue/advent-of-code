export function getPositionThatCausesEnterBasement(
  instruction: string
): number {
  const instructionArray = getList(instruction);

  const resultObject = instructionArray.reduce(
    (prevValue, currValue, index) => {
      if (prevValue['sum'] < 0) {
        return prevValue;
      }

      prevValue['position'] = index + 1;

      if (currValue === '(') {
        prevValue['sum'] += 1;
      }

      if (currValue === ')') {
        prevValue['sum'] -= 1;
      }

      return prevValue;
    },
    {
      sum: 0,
      position: 0,
    }
  );

  return resultObject.position;
}

export function getFloors(instruction: string) {
  const instructionArray = getList(instruction);
  const numberOfParenthesis = getNumberOfParenthesis(instructionArray);

  return getDifferenceBetweenParenthesis(numberOfParenthesis);
}

const getList = (string: string) => {
  return string.split('');
};

type NumberOfParenthesis = {
  '(': number;
  ')': number;
};

const getNumberOfParenthesis = (value: string[]): NumberOfParenthesis => {
  return value.reduce(
    (prevValue, currValue) => {
      prevValue[currValue] += 1;

      return prevValue;
    },
    { '(': 0, ')': 0 }
  );
};

const getDifferenceBetweenParenthesis = (
  numberOfParenthesis: NumberOfParenthesis
): number => {
  return numberOfParenthesis['('] - numberOfParenthesis[')'];
};
