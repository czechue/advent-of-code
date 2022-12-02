// R > S > P > R
// Elf win: AZ, BX, CY
const ResultPoints = {
  W: 6,
  D: 3,
  L: 0,
};

const S = {
  A: { s: 'R', p: 1 },
  B: { s: 'P', p: 2 },
  C: { s: 'S', p: 3 },
  X: { s: 'R', p: 1 },
  Y: { s: 'P', p: 2 },
  Z: { s: 'S', p: 3 },
};

const parseInput = (input: string) => {
  return input
    .split('\n') //as  Array<`${'A' | 'B' | 'C'} ${'X' | 'Y' | 'Z'}`>
    .map((f) => f.replace(' ', ''));
};

export const getTournamentResultA = (input: string) => {
  const parsed = parseInput(input);
  let pointsMe = 0;

  for (const fight of parsed) {
    const me = fight.charAt(1);

    pointsMe += S[me].p;

    // Draw
    if (['AX', 'XA', 'BY', 'YB', 'CZ', 'ZC'].includes(fight)) {
      pointsMe += ResultPoints['D'];
    }

    // Me win
    else if (!['AZ', 'BX', 'CY'].includes(fight)) {
      pointsMe += ResultPoints['W'];
    }
  }

  return pointsMe;
};

const ToWinWith = {
  A: { s: 'P', p: 2 },
  B: { s: 'S', p: 3 },
  C: { s: 'R', p: 1 },
};
const ToLoseWith = {
  A: { s: 'S', p: 3 },
  B: { s: 'R', p: 1 },
  C: { s: 'P', p: 2 },
};
const ToDrawWith = {
  A: { s: 'R', p: 1 },
  B: { s: 'P', p: 2 },
  C: { s: 'S', p: 3 },
};

export const getTournamentResultB = (input: string) => {
  const parsed = parseInput(input);

  let pointsMe = 0;

  for (const fight of parsed) {
    const elf = fight.charAt(0);
    const me = fight.charAt(1);

    // Me need to lose
    if (me === 'X') {
      pointsMe += ToLoseWith[elf].p;
    }

    // Draw
    else if (me === 'Y') {
      pointsMe += ResultPoints['D'];
      pointsMe += ToDrawWith[elf].p;
    }

    // Me need to win
    else if (me === 'Z') {
      pointsMe += ResultPoints['W'];
      pointsMe += ToWinWith[elf].p;
    }
  }

  return pointsMe;
};
