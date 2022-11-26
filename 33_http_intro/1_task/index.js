const buttonElem = document.querySelector('.name-form__btn');
const avatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const inputElem = document.querySelector('.name-form__input');

buttonElem.addEventListener('click', () =>
  fetch(`https://api.github.com/users/${inputElem.value}`).then(response =>
    response.json().then(data => {
      const { avatar_url, name, location } = data;
      avatarElem.src = avatar_url;
      userNameElem.textContent = name;
        userLocationElem.textContent = location
            ? `from ${location}`
            : '';
    }),
  ),
);
