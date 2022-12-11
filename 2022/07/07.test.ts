import { input } from './input';
import { findTheSmallestDirectory, funA, getSumOfAtMost100000 } from './07';

describe('07', () => {
  test('check root children (1st level)', () => {
    const result = funA(input);
    expect(result.root.children).toHaveLength(8);
    expect(result.root.children[0].data.name).toBe('fts');
    expect(result.root.children[6].data.name).toBe('zbdp.gqb');
    expect(result.root.children[6].data.size).toBe(195891);
  });

  test('check "fts" folder children (2st level)', () => {
    const ftsFolder = funA(input).root.children[0];
    expect(ftsFolder.data.name).toBe('fts');
    expect(ftsFolder.children).toHaveLength(3);
    expect(ftsFolder.children[0].data.name).toBe('dlqtffw');
    expect(ftsFolder.children[2].data.name).toBe('wvwhrb.dhh');
    expect(ftsFolder.children[2].data.size).toBe(254713);
  });

  test('check "/fts/dlqtffw" folder children (3st level)', () => {
    const dlqtffwFolder = funA(input).root.children[0].children[0];
    expect(dlqtffwFolder.data.name).toBe('dlqtffw');
    expect(dlqtffwFolder.children).toHaveLength(1);
    expect(dlqtffwFolder.children[0].data.name).toBe('nqbvg.fgd');
    expect(dlqtffwFolder.children[0].data.size).toBe(73533);
  });

  test('check if cd.. works by reading "/fts/rbfmmjvd" folder children (3st level)', () => {
    const dlqtffwFolder = funA(input).root.children[0].children[1];
    expect(dlqtffwFolder.data.name).toBe('rbfmmjvd');
    expect(dlqtffwFolder.children).toHaveLength(1);
    expect(dlqtffwFolder.children[0].data.name).toBe('zcgrgff.fnf');
    expect(dlqtffwFolder.children[0].data.size).toBe(290697);
  });

  test('check if cd.. cd.. works by reading "/jnwr/" folder children (2st level)', () => {
    const dlqtffwFolder = funA(input).root.children[1];
    expect(dlqtffwFolder.data.name).toBe('jnwr');
    expect(dlqtffwFolder.children).toHaveLength(4);
    expect(dlqtffwFolder.children[0].data.name).toBe('ghmtnzr');
    expect(dlqtffwFolder.children[0].data.size).toBe(323577);
    expect(dlqtffwFolder.children[3].data.name).toBe('zzbvdcf');
  });

  test('all childrens sizes of "zddrb" are correctly summed up', () => {
    const zddrbFolder = funA(input).root.children[7];
    const childrenSum = zddrbFolder.children.reduce(
      (acc, curr) => acc + curr.data.size,
      0
    );
    expect(zddrbFolder.data.size).toBe(childrenSum);
  });

  test('getSumOfAtMost100000', () => {
    const tree = funA(input);
    expect(getSumOfAtMost100000(tree)).toBe(1642503);
  });

  test('findTheSmallestDirectory', () => {
    const tree = funA(input);
    expect(findTheSmallestDirectory(tree)).toBe(6999588);
  });
});
