const arenaElem = document.querySelector('.arena');
const boardElem = document.querySelector('.board__selected-seat');

const numsGenerator = maxCount => {
  let numsArr = [];
  for (let n = 1; n <= maxCount; n++) {
    numsArr.push(n);
  }
  return numsArr;
};

const getSeats = () =>numsGenerator(10).map(num => `
    <div
        class="sector__seat"
        data-seat-number="${num}"
        ></div>
    `).join('');

const getLines = () =>numsGenerator(10).map(num => `
    <div
        class="sector__line"
        data-line-number="${num}"
        >${getSeats()}</div>
    `).join('');

const arenaRender = () =>
  arenaElem.innerHTML = numsGenerator(3).map(num => `
    <div
        class="sector"
        data-sector-number="${num}"
        >${getLines()}</div>
    `).join('');

arenaRender();

arenaElem.addEventListener('click', event => {
  if (!event.target.classList.contains('sector__seat')) {
    return;
  }
  boardElem.textContent = `S ${event.target.closest('.sector').dataset.sectorNumber} - L ${event.target.closest('.sector__line').dataset.lineNumber} - S ${event.target.dataset.seatNumber}`;
});
