const parseStringToArr = (input: string): any[] => {
  return input.split('\n');
};

const reduceToSingleMoveArr = (input) => {
  const arr = parseStringToArr(input);

  return arr.reduce((acc, curr) => {
    const [direction, steps] = curr.split(' ');
    const distance = Number(steps);

    if (distance > 1) {
      for (let i = 0; i < distance; i++) {
        acc.push(`${direction} 1`);
      }
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
};

export const funA = (input: string) => {
  const arr = reduceToSingleMoveArr(input);

  const head = [0, 0];
  const tail = [0, 0];
  const headHistory = [[0, 0]];
  const tailHistory = [];

  for (const move of arr) {
    const [direction, steps] = move.split(' ');
    const distance = Number(steps);

    if (direction === 'U') {
      head[1] += distance;
    } else if (direction === 'D') {
      head[1] -= distance;
    } else if (direction === 'R') {
      head[0] += distance;
    } else if (direction === 'L') {
      head[0] -= distance;
    }
    const tempHead = [...head];
    const tempTail = [...tail];
    const [headX, headY] = tempHead;
    const [tailX, tailY] = tempTail;

    // if head is 2 tail on the right or left - move tail 1 step
    if (Math.abs(headX - tailX) === 2 && headY === tailY) {
      if (headX > tailX) {
        tail[0] += 1;
      } else {
        tail[0] -= 1;
      }
    }

    // if head is 2 tail on the up or down - move tail 1 step
    if (Math.abs(headY - tailY) === 2 && headX === tailX) {
      if (headY > tailY) {
        tail[1] += 1;
      } else {
        tail[1] -= 1;
      }
    }

    // if the head is diagonal to the tail and there is space between them on X - move tail 1 step
    if (Math.abs(headX - tailX) === 2 && Math.abs(headY - tailY) === 1) {
      if (headX > tailX) {
        tail[0] += 1;
      } else {
        tail[0] -= 1;
      }
      tail[1] = headY;
    }

    // if the head is diagonal to the tail and there is space between them on Y - move tail 1 step
    if (Math.abs(headX - tailX) === 1 && Math.abs(headY - tailY) === 2) {
      if (headY > tailY) {
        tail[1] += 1;
      } else {
        tail[1] -= 1;
      }
      tail[0] = headX;
    }

    const calcTail = tail.slice();

    headHistory.push(tempHead);
    tailHistory.push(calcTail);
  }

  // count tiles where tail was at least once
  const tailHistorySet = new Set(tailHistory.map((tile) => tile.join(',')));
  return tailHistorySet.size;
};
