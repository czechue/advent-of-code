import { getNumber } from './04';

describe('04', () => {
  it('example 1', () => {
    expect(getNumber('abcdef', 5)).toBe(609043);
  });

  it('example 2', () => {
    expect(getNumber('pqrstuv', 5)).toBe(1048970);
  });

  it('input 1 star', () => {
    expect(getNumber('ckczppom', 5)).toBe(117946);
  });

  it('input 2 star', () => {
    expect(getNumber('ckczppom', 6)).toBe(3938038);
  });
});
