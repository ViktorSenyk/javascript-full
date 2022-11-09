const formElem = document.querySelector('.login-form');
const emailInputElem = document.querySelector('#email');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordInputElem = document.querySelector('#password');
const passwordErrorElem = document.querySelector('.error-text_password');
const submitElem = document.querySelector('.submit-button');

const isRequired = value => (value ? '' : 'Required');
const isEmail = value => (value.includes('@') ? '' : 'Should be an email');

let isCorrectEmail = false;
let isCorrectPasswod = false;

emailInputElem.addEventListener('input', event => {
  emailErrorElem.textContent =
    isRequired(event.target.value) +
    (isRequired(event.target.value) ? ', ' : '') +
    isEmail(event.target.value);
  emailErrorElem.textContent ? (isCorrectEmail = false) : (isCorrectEmail = true);
});

passwordInputElem.addEventListener('input', event => {
  passwordErrorElem.textContent = isRequired(event.target.value);
  passwordErrorElem.textContent ? (isCorrectPasswod = false) : (isCorrectPasswod = true);
});

submitElem.addEventListener('click', event => {
  event.preventDefault();
  if (isCorrectEmail && isCorrectPasswod) {
    alert(Object.fromEntries(new FormData(formElem)));
  }
});
