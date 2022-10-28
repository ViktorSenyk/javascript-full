export let getMinSquaredNumber = (numbers) =>
  !Array.isArray(numbers) || numbers.length === 0
    ? null
    : numbers.map((number) => Math.abs(number)).sort((a, b) => a - b)[0] ** 2;
