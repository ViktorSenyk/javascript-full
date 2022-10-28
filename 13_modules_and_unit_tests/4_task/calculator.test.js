import { calc } from './calculator';

it('Should return string with result "1 + 2 = 3"', () => {
    expect(calc('8 + 2')).toEqual('8 + 2 = 10');
    expect(calc('8 - 2')).toEqual('8 - 2 = 6');
    expect(calc('8 * 2')).toEqual('8 * 2 = 16');
    expect(calc('8 / 2')).toEqual('8 / 2 = 4');
    expect(calc(8 + 2)).toEqual(null);
})