export let reverseArray = (arr) =>
  !Array.isArray(arr) ? null : arr.slice().reverse();

export let withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] < amount
    ? -1
    : balances[clients.indexOf(client)] - amount;

export let getAdults = (obj) => {
  let getKeyByValue = (value, obj) =>
    Object.keys(obj).find((key) => obj[key] === value);
  let adultsPersons = {};
  Object.values(obj)
    .filter((age) => age >= 18)
    .forEach((age) => (adultsPersons[getKeyByValue(age, obj)] = age));
  return adultsPersons;
};
