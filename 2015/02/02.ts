export const getLengthOfRibbon = (input: string): number => {
  const areas = parseInputToAreas(input);

  const sum = areas.reduce(
    (prevVal, currValue) => prevVal + calculateRibbonLength(currValue),
    0
  );

  return sum;
};

export const getAreaOfBox = (input: string): number => {
  const areas = parseInputToAreas(input);

  const sum = areas.reduce(
    (prevVal, currValue) => prevVal + calculateArea(currValue),
    0
  );

  return sum;
};

const calculateRibbonLength = ([l, w, h]: [number, number, number]): number => {
  const min = Math.min(l + w, w + h, h + l);

  return 2 * min + l * w * h;
};

const calculateArea = ([l, w, h]: [number, number, number]): number => {
  const area = 2 * l * w + 2 * w * h + 2 * h * l;
  const slack = Math.min(l * w, w * h, h * l);
  return area + slack;
};

export const parseToSquareDimensions = (
  rectString: string
): [number, number, number] => {
  const [l, w, h] = rectString.split('x').map((v) => Number(v));

  return [l, w, h];
};

export const parseInputToAreas = (
  rawString: string
): [number, number, number][] => {
  const areas = rawString.split('\n').map((area) => {
    return parseToSquareDimensions(area);
  });

  return areas;
};
