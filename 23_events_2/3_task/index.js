`use strict`;
let tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const btnElem = document.querySelector('.create-task-btn');

const idGenerator = () => tasks.forEach(task => (task.id = (Math.random() * 1e6).toFixed(0)));

const tasksRender = () => {
  idGenerator();
  tasks.sort((a, b) => a.done - b.done);
  listElem.innerHTML = tasks
    .map(({ text, done, id }) => {
        return `<li 
                class="list__item${done ? ' list__item_done' : ''}" 
                data-task-id="${id}">
                <input
                class="list__item-checkbox"
                ${done ? ' checked' : ''} 
                type="checkbox">${text}</li>`;
    }).join('');
};
tasksRender();

btnElem.addEventListener('click', () => {
  if (!inputElem.value) {
    return;
  }
  tasks.push({ text: inputElem.value, done: false });
  inputElem.value = '';
  tasksRender();
});

listElem.addEventListener('click', event => {
    if (!event.target.classList.contains('list__item-checkbox')) {
        return;
     }
    let clickTask = tasks.find(task => task.id === event.target.closest('.list__item').dataset.taskId);
    tasks[tasks.indexOf(clickTask)].done = !tasks[tasks.indexOf(clickTask)].done;
    tasksRender();
});
