export function getItemsList() {
  let elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
export function getItemsArray() {
  let elementsArray = document.querySelectorAll('.tool');
  console.dir(Array.from(elementsArray));
  return Array.from(elementsArray);
}
