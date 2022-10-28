import { reverseArray, withdraw, getAdults } from './index';

it('Should return reverse array', () => {
  expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  expect(reverseArray(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
  expect(reverseArray('some')).toEqual(null);
});

it('Should take money from chosen person balance & return his balance if he has enough money', () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)).toEqual(
    -1
  );
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)).toEqual(
    37
  );
  expect(
    withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1000)
  ).toEqual(400);
});

it('Should return object with persons 18+ years old', () => {
  expect(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })).toEqual({
    'John Doe': 19,
    Bob: 18,
  });
  expect(getAdults({ Ann: 56, Andrey: 7 })).toEqual({ Ann: 56 });
  expect(getAdults({})).toEqual({});
});
