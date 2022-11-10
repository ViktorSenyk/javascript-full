let tasks = [
  { text: 'Buy milk', done: false, id: '1' },
  { text: 'Pick up Tom from airport', done: false, id: '2' },
  { text: 'Visit party', done: false, id: '3' },
  { text: 'Visit doctor', done: true, id: '4' },
  { text: 'Buy meat', done: true, id: '5' },
];

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const btnElem = document.querySelector('.create-task-btn');

const tasksRender = tasks => {
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
    })
    .join('');
};
tasksRender(tasks);

btnElem.addEventListener('click', () => {
  if (!inputElem.value) {
    return;
  }
  tasks.push({ text: inputElem.value, done: false, id: `${Math.random()}` });
  inputElem.value = '';
  tasksRender(tasks);
});

listElem.addEventListener('click', event => {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  let clickTask = tasks.find(
    task => task.id === event.target.closest('.list__item').dataset.taskId,
  );
  tasks[tasks.indexOf(clickTask)].done = !tasks[tasks.indexOf(clickTask)].done;
  tasksRender(tasks);
});
