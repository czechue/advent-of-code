type Monkey = {
  monkey: string;
  startingItems: number[];
  operation: any[];
  testDivisibleBy: number;
  ifTrueThrowToMonkey: string;
  ifFalseThrowToMonkey: string;
};

type Holdings = Record<string, Array<number>>;

export const getMonkeys = (input: string): Monkey[] => {
  return input
    .split('\n\n')
    .map((item) => item.split('\n'))
    .map((itemArray) => ({
      monkey: itemArray[0].split(' ')[1].slice(0, -1),
      startingItems: itemArray[1]
        .split('items: ')[1]
        .split(', ')
        .map((s) => Number(s)),
      operation: itemArray[2].split('new = ')[1].split(' '),
      testDivisibleBy: Number(itemArray[3].split('divisible by ')[1]),
      ifTrueThrowToMonkey: itemArray[4].split('to monkey ')[1],
      ifFalseThrowToMonkey: itemArray[5].split('to monkey ')[1],
    }));
};

export const getStartingHoldings = (monkeys: Monkey[]) => {
  const holdingItems: Holdings = {};

  for (const monkey of monkeys) {
    holdingItems[monkey.monkey] = monkey.startingItems;
  }

  return holdingItems;
};

export const processedRound = (
  startingHoldings: Holdings,
  monkeys: Monkey[],
  counter: number[]
) => {
  const holdingsAfterRound: Holdings = startingHoldings;

  for (const holdingId in holdingsAfterRound) {
    const monkeyId = holdingId;
    const monkeyAttr = monkeys.find((m) => m.monkey === monkeyId);
    const monkeyHoldings = holdingsAfterRound[monkeyId];

    monkeyHoldings.forEach((holding) => {
      counter[Number(monkeyId)] = counter[Number(monkeyId)] + 1;
      const [, sign, symbol] = monkeyAttr.operation;
      console.log('operations', { sign, symbol });

      let holdingAfterOperation: number | undefined = undefined;
      if (symbol === 'old') {
        if (sign === '*') {
          holdingAfterOperation = holding * holding;
        }
        if (sign === '+') {
          holdingAfterOperation = holding + holding;
        }
      } else {
        if (sign === '*') {
          holdingAfterOperation = holding * Number(symbol);
        }

        if (sign === '+') {
          holdingAfterOperation = holding + Number(symbol);
        }
      }

      if (holdingAfterOperation === undefined) {
        throw Error('holdingAfterOperation shouldnt be undefined');
      }

      const afterDivideBy3 = Math.floor(holdingAfterOperation / 3);

      const currentWorryLvlIsDivisibleByGivenNumber =
        afterDivideBy3 % monkeyAttr.testDivisibleBy === 0;

      if (currentWorryLvlIsDivisibleByGivenNumber) {
        const currentHoldings =
          holdingsAfterRound[monkeyAttr.ifTrueThrowToMonkey];

        holdingsAfterRound[monkeyAttr.ifTrueThrowToMonkey] = [
          ...currentHoldings,
          afterDivideBy3,
        ];
      } else {
        const currentHoldings =
          holdingsAfterRound[monkeyAttr.ifFalseThrowToMonkey];

        holdingsAfterRound[monkeyAttr.ifFalseThrowToMonkey] = [
          ...currentHoldings,
          afterDivideBy3,
        ];
      }
    });

    holdingsAfterRound[monkeyId] = [];
  }

  return holdingsAfterRound;
};

export const funA = (input: string) => {
  const monkeys = getMonkeys(input);

  let holdings = getStartingHoldings(monkeys);

  const counter = Array<number>(monkeys.length).fill(0);

  for (let i = 0; i < 20; i++) {
    holdings = processedRound(holdings, monkeys, counter);
  }

  const sortedCounter = counter.slice().sort((a, b) => b - a);

  return {
    holdings,
    counter,
    monkeyBusiness: sortedCounter[0] * sortedCounter[1],
  };
};
