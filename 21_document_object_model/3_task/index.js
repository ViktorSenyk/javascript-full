export function getItemsList() {
  let elementsList = document.querySelectorAll('.tecnology');
  console.dir(elementsList);
  return elementsList;
}
export function getItemsArray() {
  let elementsArray = document.querySelectorAll('.tool');
  console.dir(Array.from(elementsArray));
  return elementsArray;
}
