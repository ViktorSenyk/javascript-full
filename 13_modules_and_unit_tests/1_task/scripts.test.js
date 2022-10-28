import { getEvenNumbers } from './scripts';

it('17 равно 17', () => {
    expect(17).toEqual(17)
})

it('18 не равно 17', () => {
  expect(18).not.toEqual(17);
});

it('should get array with even numbers from other array', () => {
  let result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7]);
  expect(result).toEqual([2, 4, 6]);
});
