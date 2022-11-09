const formElem = document.querySelector('.login-form');
const emailInputElem = document.querySelector('#email');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordInputElem = document.querySelector('#password');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => (value ? '' : 'Required');
const isEmail = value => (value.includes('@') ? '' : 'Should be an email');

emailInputElem.addEventListener(
  'input',
  event =>
    (emailErrorElem.textContent =
      isRequired(event.target.value) +
      (isRequired(event.target.value) ? ', ' : '') +
      isEmail(event.target.value)),
);

passwordInputElem.addEventListener(
  'input',
  event => (passwordErrorElem.textContent = isRequired(event.target.value)),
);

formElem.addEventListener('submit', event => {
  event.preventDefault();
  alert(JSON.stringify(Object.fromEntries(new FormData(formElem))));
});
