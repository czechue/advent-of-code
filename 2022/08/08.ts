export const parseStringToArr = (input: string): any[] => {
  return input.split('\n');
};

export const mapToToTuples = (
  arr: string[],
  value: boolean | number
): [number, boolean | number][][] => {
  return arr.map((rowOfTrees) => {
    return rowOfTrees
      .split('')
      .map((treeHeight) => [parseInt(treeHeight), value]);
  });
};

export const setOuterTreesToValue = (
  allTrees: [number, boolean | number][][],
  value: boolean | number
) => {
  for (const [index, rowOfTrees] of allTrees.entries()) {
    // map first and last tree to true
    rowOfTrees[0][1] = value;
    rowOfTrees[rowOfTrees.length - 1][1] = value;

    // map first and last row to value
    if (index === 0 || index === allTrees.length - 1) {
      for (const tree of rowOfTrees) {
        tree[1] = value;
      }
    }
  }

  return allTrees;
};

export const setInnerTreesToValue = (
  trees: [number, boolean | number][][],
  value: boolean | number
) => {
  for (const [index, rowOfTrees] of trees.entries()) {
    if (index === 0 || index === trees.length - 1) {
      continue;
    }

    for (const [index, tree] of rowOfTrees.entries()) {
      if (index === 0 || index === rowOfTrees.length - 1) {
        continue;
      }

      // if all trees on the left of tree has lower number, set to true
      const treesOnLeft = rowOfTrees.slice(0, index);
      const allTreesOnLeftAreLower = treesOnLeft.every(
        ([height]) => height < tree[0]
      );
      if (allTreesOnLeftAreLower) {
        tree[1] = value;
      }

      // if all trees on the right of tree has lower number, set to true
      const treesOnRight = rowOfTrees.slice(index + 1);
      const allTreesOnRightAreLower = treesOnRight.every(
        ([height]) => height < tree[0]
      );
      if (allTreesOnRightAreLower) {
        tree[1] = value;
      }
    }
  }

  return trees;
};

function transposedMatrix(matrix: [number, boolean | number][][]) {
  const transposed = matrix;

  for (let i = 0; i < transposed.length; i++) {
    for (let j = 0; j < i; j++) {
      const temp = transposed[i][j];
      transposed[i][j] = transposed[j][i];
      transposed[j][i] = temp;
    }
  }

  return transposed;
}

export const countVisibleTrees = (input: string) => {
  const arr = parseStringToArr(input);
  const allTrees = mapToToTuples(arr, false);
  const outerTreesToVisible = setOuterTreesToValue(allTrees, true);
  const innerTreesToVisible = setInnerTreesToValue(outerTreesToVisible, true);

  const transposedTrees = transposedMatrix(innerTreesToVisible);

  const visibleTrees = setInnerTreesToValue(transposedTrees, true);

  let count = 0;

  for (const rowOfTrees of visibleTrees) {
    for (const tree of rowOfTrees) {
      if (tree[1]) {
        count++;
      }
    }
  }

  return count;
};

export const setInnerTreesToMultiplier = (
  trees: [number, number | boolean][][]
) => {
  for (const [index, rowOfTrees] of trees.entries()) {
    if (index === 0 || index === trees.length - 1) {
      continue;
    }

    for (const [index, tree] of rowOfTrees.entries()) {
      if (index === 0 || index === rowOfTrees.length - 1) {
        continue;
      }
      const [height, oldScore] = tree;
      // note
      const treesOnLeft = rowOfTrees.slice(0, index);
      const treesOnRight = rowOfTrees.slice(index + 1);

      const reversedTreesOnLeft = treesOnLeft.reverse();
      const firstHigherOrSameHeightTreeOnLeft =
        reversedTreesOnLeft.findIndex((t) => t[0] >= height) + 1;
      const scoreLeft = firstHigherOrSameHeightTreeOnLeft || treesOnLeft.length;
      const firstHigherOrSameHeightTreeOnRight =
        treesOnRight.findIndex((t) => t[0] >= height) + 1;
      const scoreRight =
        firstHigherOrSameHeightTreeOnRight || treesOnRight.length;

      // console.log('L', scoreLeft);
      // console.log('P', scoreRight);
      const score = scoreLeft * scoreRight;

      // console.dir([height, score]);
      // @ts-ignore
      tree[1] = oldScore * score;
    }
  }

  return trees;
};

export const calculateTreeDistance = (
  arr: [number, number][]
): [number, number][] => {
  return arr.map(([height, oldScore], index) => {
    const treesOnLeft = arr.slice(0, index);
    const treesOnRight = arr.slice(index + 1);

    const reversedTreesOnLeft = treesOnLeft.reverse();
    const firstHigherOrSameHeightTreeOnLeft =
      reversedTreesOnLeft.findIndex((t) => t[0] >= height) + 1;
    const scoreLeft = firstHigherOrSameHeightTreeOnLeft || treesOnLeft.length;
    const firstHigherOrSameHeightTreeOnRight =
      treesOnRight.findIndex((t) => t[0] >= height) + 1;
    const scoreRight =
      firstHigherOrSameHeightTreeOnRight || treesOnRight.length;

    console.log('L', scoreLeft);
    console.log('P', scoreRight);
    const score = scoreLeft * scoreRight;

    console.dir([height, score]);
    return [height, score];
  });
};

export const countTreesMultiplier = (input: string) => {
  const arr = parseStringToArr(input);
  const allTrees = mapToToTuples(arr, 1);
  const outerTreesToVisible = setOuterTreesToValue(allTrees, 0);
  const innerTreesMulipliersCalculations =
    setInnerTreesToMultiplier(outerTreesToVisible);

  const transposed = transposedMatrix(innerTreesMulipliersCalculations);

  const result = setInnerTreesToMultiplier(transposed);

  // find the highest score
  let highestScore: number | boolean = 0;
  for (const rowOfTrees of result) {
    for (const tree of rowOfTrees) {
      if (tree[1] > highestScore) {
        highestScore = tree[1];
      }
    }
  }

  return highestScore;
};
