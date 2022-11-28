const buttonElem = document.querySelector('.name-form__btn');
const avatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const inputElem = document.querySelector('.name-form__input');
const repoListElem = document.querySelector('.repo-list');
const spinnerElem = document.querySelector('.spinner');

buttonElem.addEventListener('click', () => {
  spinnerElem.classList.remove('spinner_hidden');
  repoListElem.innerHTML = '';

  fetch(`https://api.github.com/users/${inputElem.value}`)
    .then(response =>
      response.json().then(data => {
        const { avatar_url, name, location, repos_url } = data;
        avatarElem.src = avatar_url;
        userNameElem.textContent = name;
        userLocationElem.textContent = location ? `from ${location}` : '';
        fetch(repos_url)
          .then(response =>
            response.json().then(repos => {
              repos.map(
                ({ name }) =>
                  (repoListElem.innerHTML += `<li class="repo-list__item">${name}</li>`),
              );
              spinnerElem.classList.add('spinner_hidden');
              inputElem.value = '';
            }),
          )
          .catch(err => {
            spinnerElem.classList.add('spinner_hidden');
            alert(`Failed to load data`);
            console.log(err);
          });
      }),
    )
    .catch(err => {
      spinnerElem.classList.add('spinner_hidden');
      alert(`Failed to load data`);
      console.log(err);
    });
});
