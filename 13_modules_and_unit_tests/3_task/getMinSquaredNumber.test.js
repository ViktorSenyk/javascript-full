import { getMinSquaredNumber } from './getMinSquaredNumber';

it('Should get min-squared number from array', () => {
  expect(getMinSquaredNumber([])).toEqual(null);
  expect(getMinSquaredNumber('some text')).toEqual(null);
  expect(getMinSquaredNumber([-777, 3, -2, 6, 45, -20])).toEqual(4);
});
