// let tasks = [
//   { text: 'Buy milk', done: false, id: '1' },
//   { text: 'Pick up Tom from airport', done: false, id: '2' },
//   { text: 'Visit party', done: false, id: '3' },
//   { text: 'Visit doctor', done: true, id: '4' },
//   { text: 'Buy meat', done: true, id: '5' },
// ];

// const listElem = document.querySelector('.list');
// const inputElem = document.querySelector('.task-input');
// const btnElem = document.querySelector('.create-task-btn');

// const tasksRender = tasks => {
//   tasks.sort((a, b) => a.done - b.done);
//   listElem.innerHTML = tasks
//     .map(({ text, done, id }) => {
//       return `<li
//                 class="list__item${done ? ' list__item_done' : ''}"
//                 data-task-id="${id}">
//                 <input
//                 class="list__item-checkbox"
//                 ${done ? ' checked' : ''}
//                 type="checkbox">${text}</li>`;
//     })
//     .join('');
// };
// tasksRender(tasks);

// btnElem.addEventListener('click', () => {
//   if (!inputElem.value) {
//     return;
//   }
//   tasks.push({ text: inputElem.value, done: false, id: `${Math.random()}` });
//   inputElem.value = '';
//   tasksRender(tasks);
// });

// listElem.addEventListener('click', event => {
//   if (!event.target.classList.contains('list__item-checkbox')) {
//     return;
//   }
//   let clickTask = tasks.find(
//     task => task.id === event.target.closest('.list__item').dataset.taskId,
//   );
//   tasks[tasks.indexOf(clickTask)].done = !tasks[tasks.indexOf(clickTask)].done;
//   tasksRender(tasks);
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const formatter = new Intl.DateTimeFormat('en', {
//   timeZone: 'UTC',
//   hour: '2-digit',
//   minute: '2-digit',
//   hour12: false,
// });
// const getGreenwichTime = date => formatter.format(date);
// console.log(getGreenwichTime(new Date()));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const getDiff = (startDate, endDate) => {
//   const diff = endDate.getTime() - startDate.getTime();
//   const days = Math.trunc(diff / 1000 / 60 / 60 / 24);
//   const hours = Math.trunc((diff - days * 864e5) / 1000 / 60 / 60);
//   const minutes = Math.trunc((diff - days * 864e5 - hours * 36e5) / 1000 / 60);
//   const seconds = Math.trunc((diff - days * 864e5 - hours * 36e5 - minutes * 6e4) / 1000);
//   return `${Math.abs(days)}d ${Math.abs(hours)}h ${Math.abs(minutes)}m ${Math.abs(seconds)}s`;
// };
// console.log(getDiff(new Date(2022, 8, 10, 10, 0, 0), new Date(2021, 8, 10, 12, 5, 5)));

// let testH = new Date(2022, 10, 5, 18, 40).getTime();
// let testN = new Date().getTime();
// console.log(((testN - testH) / 36e5).toFixed(0));
// console.log(new Date(2000, 4, 5, 18, 40).getHours());
// console.log(new Date(2000, 4, 5, 18, 40).getMinutes());
// console.log(new Date(2000, 4, 5, 18, 40).getSeconds());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const studentBirthDays = students => {
//   const monthNames = [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
//   ];
//   const sortStud = {};
//   students.sort((a, b) => Number(a.birthDate.split('/')[1]) - Number(b.birthDate.split('/')[1]));
//   students.map(({ birthDate }) => {
//     sortStud[monthNames[birthDate.split('/')[0] - 1]] = [];
//     students.forEach(({ name, birthDate }) => {
//       let getKey = Object.keys(sortStud).filter(
//         key => key === monthNames[birthDate.split('/')[0] - 1],
//       )[0];
//       if (Object.keys(sortStud).includes(getKey)) {
//         sortStud[getKey].push(name);
//       }
//     });
//   });
//   Object.keys(sortStud).forEach(key => (sortStud[key] = Array.from(new Set(sortStud[key]))));
//   return sortStud;
// };

// let testObj = [
//   { name: 'Tom', birthDate: '01/17/2010' },
//   { name: 'Ben', birthDate: '01/02/2008' },
//   { name: 'Sam', birthDate: '12/15/2010' },
//   { name: 'Den', birthDate: '01/25/2010' },
// ];
// console.log(studentBirthDays(testObj));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const tasks = [
//   { text: 'Buy milk', done: false, id: '1', time: new Date().getTime() },
//   { text: 'Pick up Tom from airport', done: false, id: '2', time: new Date().getTime() },
//   { text: 'Visit party', done: false, id: '3', time: new Date().getTime() },
//   { text: 'Visit doctor', done: true, id: '4', time: new Date().getTime() - 1e6 },
//   { text: 'Buy meat', done: true, id: '5', time: new Date().getTime() - 1e6 },
// ];

// const listElem = document.querySelector('.list');
// const inputElem = document.querySelector('.task-input');
// const btnElem = document.querySelector('.create-task-btn');

// const renderTasks = tasksList => {
//   listElem.innerHTML = '';
//   const tasksElems = tasksList
//     .sort((a, b) => b.time - a.time)
//     .map(({ text, done, id }) => {
//       const listItemElem = document.createElement('li');
//       listItemElem.classList.add('list__item');
//       listItemElem.setAttribute('data-task-id', `${id}`);
//       const checkbox = document.createElement('input');
//       checkbox.setAttribute('type', 'checkbox');
//       checkbox.checked = done;
//       checkbox.classList.add('list__item-checkbox');
//       if (done) {
//         listItemElem.classList.add('list__item_done');
//       }
//       listItemElem.append(checkbox, text);

//       return listItemElem;
//     });
//   listElem.append(...tasksElems);
// };

// renderTasks(tasks);

// btnElem.addEventListener('click', () => {
//   if (!inputElem.value) {
//     return;
//   }
//   tasks.push({
//     text: inputElem.value,
//     done: false,
//     id: `${Math.random()}`,
//     time: new Date().getTime(),
//   });
//   inputElem.value = '';
//   renderTasks(tasks);
// });

// listElem.addEventListener('click', event => {
//   if (!event.target.classList.contains('list__item-checkbox')) {
//     return;
//   }
//   let clickTask = tasks.find(
//     task => task.id === event.target.closest('.list__item').dataset.taskId,
//   );
//   tasks[tasks.indexOf(clickTask)].done = !tasks[tasks.indexOf(clickTask)].done;
//   if (!tasks[tasks.indexOf(clickTask)].done) {
//     tasks[tasks.indexOf(clickTask)].time = new Date().getTime();
//   } else {
//     tasks[tasks.indexOf(clickTask)].time = new Date().getTime() - 1e6;
//   }
//   renderTasks(tasks);
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const studentBirthDays = students => {
//   const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//   const sortStuds = {};
//   students.sort((a, b) => Number(a.birthDate.split('/')[1]) - Number(b.birthDate.split('/')[1]));
//   students.forEach(({ birthDate }) => {
//     let getMonthName = monthNames[birthDate.split('/')[0] - 1];
//     sortStuds[getMonthName] = students.reduce((acc, { name, birthDate }) => {
//       if (monthNames[birthDate.split('/')[0] - 1] === getMonthName) {
//         acc.push(name);
//       }
//       return acc;
//     }, []);
//   });
//   return sortStuds;
// };

// let testObj = [
//   { name: 'Tom', birthDate: '01/17/2010' },
//   { name: 'Ben', birthDate: '01/02/2008' },
//   { name: 'Sam', birthDate: '12/15/2010' },
//   { name: 'Den', birthDate: '01/25/2010' },
//   { name: 'Can', birthDate: '05/25/2010' },
// ];
// console.log(studentBirthDays(testObj));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
