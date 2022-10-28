import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('Should get array with squared numbers', () => {
  expect(getSquaredArray([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
});

it('Should get array with odd numbers', () => {
  expect(getOddNumbers([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
});

it('Should get sum of numbers', () => {
  expect(getSum(2, 5)).toEqual(7);
});