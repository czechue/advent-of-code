// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MD5 from 'crypto-js/md5';

console.log(MD5('Message').toString());
export const getHash = (input: string) => {
  return MD5(input).toString();
};

export const getNumber = (input: string, zeros: number) => {
  const zerosString = Array.from(Array(zeros))
    .fill('0')
    .join()
    .replaceAll(',', '');

  for (let i = 0; i < 100000000; i++) {
    const inputWithNumber = input + i;
    const calculateHash = getHash(inputWithNumber);

    if (calculateHash.slice(0, zeros) === zerosString) {
      return i;
    }
  }
};
