const formElem = document.querySelector('.login-form');
const submitElem = document.querySelector('.submit-button');
const inputElems = document.querySelectorAll('.form-input');

formElem.addEventListener('input', () => (submitElem.disabled = !formElem.reportValidity()));

formElem.addEventListener('submit', event => {
  event.preventDefault();
  return fetch('https://6384c3013fa7acb14fffc5eb.mockapi.io/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(new FormData(formElem))),
  })
    .then(response => response.json())
    .then(data => {
      formElem.reset();
      alert(JSON.stringify(data));
    });
});
