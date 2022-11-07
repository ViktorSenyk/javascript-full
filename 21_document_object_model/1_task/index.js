'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

// const renderTasks = (tasksList) => {
//   let listElement = document.querySelector('.list');
//     tasksList.forEach(({ text, done }) => {
//     listElement.append(
//       document
//         .createElement('li')
//         .classList.add('list__item')
//         .textContent = text
//     );
//   });
// };
const renderTasks = (tasksList) => {
  let list = document.querySelector('.list');
  tasksList.forEach(({ text, done }) => {
    let item = document.createElement('li');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkBox';
    checkBox.classList.add('list__item-checkbox');
    item.classList.add('list__item');
    if (done) {
      checkBox.checked = true;
      item.classList.add('list__item', 'list__item_done');
    } else {
      item.classList.add('list__item');
      checkBox.checked = false;
    }
    item.append(checkBox, text);
    list.append(item);
  });
};

renderTasks(tasks);

// console.log(tasks.map(({ text, done }) => text));

// let bool = false;
// document.querySelector('.list').classList.add(bool ? 'nn' : 'ff', 'dd')
