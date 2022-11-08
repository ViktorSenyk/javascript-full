const listElem = document.querySelector('.events-list');
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const resetBtn = document.querySelector('.clear-btn');
const offBtn = document.querySelector('.remove-handlers-btn');
const onBtn = document.querySelector('.attach-handlers-btn');

const clickFunc = (color, text) =>
  (listElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`);

const inClickFuncDiv = clickFunc.bind(null, 'grey', 'div');
const inClickFuncP = clickFunc.bind(null, 'grey', 'p');
const inClickFuncSpan = clickFunc.bind(null, 'grey', 'span');

const outClickFuncDiv = clickFunc.bind(null, 'green', 'div');
const outClickFuncP = clickFunc.bind(null, 'green', 'p');
const outClickFuncSpan = clickFunc.bind(null, 'green', 'span');

divElem.addEventListener('click', inClickFuncDiv, true);
divElem.addEventListener('click', outClickFuncDiv);

pElem.addEventListener('click', inClickFuncP, true);
pElem.addEventListener('click', outClickFuncP);

spanElem.addEventListener('click', inClickFuncSpan, true);
spanElem.addEventListener('click', outClickFuncSpan);

resetBtn.addEventListener('click', () => (listElem.innerHTML = ''));
offBtn.addEventListener('click', () => {
  divElem.removeEventListener('click', inClickFuncDiv, true);
  divElem.removeEventListener('click', outClickFuncDiv);
  pElem.removeEventListener('click', inClickFuncP, true);
  pElem.removeEventListener('click', outClickFuncP);
  spanElem.removeEventListener('click', inClickFuncSpan, true);
  spanElem.removeEventListener('click', outClickFuncSpan);
});
onBtn.addEventListener('click', () => {
  divElem.addEventListener('click', inClickFuncDiv, true);
  divElem.addEventListener('click', outClickFuncDiv);
  pElem.addEventListener('click', inClickFuncP, true);
  pElem.addEventListener('click', outClickFuncP);
  spanElem.addEventListener('click', inClickFuncSpan, true);
  spanElem.addEventListener('click', outClickFuncSpan);
});
