const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');
counterElem.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('counter__button');
    if (!isButton) {
        return
    }
    const action = event.target.dataset.action;
    const oldValue = Number(counterValueElem.textContent);
    const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;
    localStorage.setItem('counterValue', newValue);
    counterValueElem.textContent = newValue;
});
window.addEventListener('storage', event => {
    counterValueElem.textContent = event.newValue;
})
document.addEventListener('DOMContentLoaded', () => {
    counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
})