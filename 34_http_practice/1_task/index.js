const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const btnElem = document.querySelector('.create-task-btn');

const renderTasks = () => {
  fetch('https://6384c3013fa7acb14fffc5eb.mockapi.io/tasks')
    .then(response => response.json())
    .then(tasks => {
      tasks.sort((a, b) => b.time - a.time);
      listElem.innerHTML = tasks
        .map(({ text, done, id }) => {
          return `<li 
                class="list__item${done ? ' list__item_done' : ''}" 
                data-task-id="${id}" data-task-done="${done}">
                <input
                class="list__item-checkbox"
                ${done ? ' checked' : ''} 
                type="checkbox">${text}<button class="list__item-deleteButton">Delete</button></li>`;
        })
        .join('');
    });
};
window.addEventListener('load', renderTasks);

btnElem.addEventListener('click', () => {
  if (!inputElem.value) {
    return;
  }
  fetch('https://6384c3013fa7acb14fffc5eb.mockapi.io/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: inputElem.value,
      done: false,
      time: new Date().getTime(),
    }),
  }).then(_ => renderTasks());
  inputElem.value = '';
});

listElem.addEventListener('click', event => {
  if (event.target.classList.contains('list__item-checkbox')) {
    fetch(
      `https://6384c3013fa7acb14fffc5eb.mockapi.io/tasks/${event.target.closest('.list__item').dataset.taskId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          done: event.target.closest('.list__item').dataset.taskDone === 'false' ? true : false,
          time:
            event.target.closest('.list__item').dataset.taskDone === 'false'
              ? new Date().getTime() - 1e6
              : new Date().getTime(),
        }),
      },
    ).then(_ => renderTasks());
  }
  if (event.target.classList.contains('list__item-deleteButton')) {
    fetch(`https://6384c3013fa7acb14fffc5eb.mockapi.io/tasks/${event.target.closest('.list__item').dataset.taskId}`, { method: 'DELETE' })
      .then(_ => renderTasks());
  }
});
