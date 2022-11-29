const buttonElem = document.querySelector('.name-form__btn');
const avatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const inputElem = document.querySelector('.name-form__input');
const repoListElem = document.querySelector('.repo-list');
const spinnerElem = document.querySelector('.spinner');

avatarElem.src = 'https://avatars3.githubusercontent.com/u10001';

buttonElem.addEventListener('click', async () => {
  spinnerElem.classList.remove('spinner_hidden');
  repoListElem.innerHTML = '';
  try {
    const userResponse = await fetch(`https://api.github.com/users/${inputElem.value}`);
    if (!userResponse.ok) {
      return null;
    }
    const userData = await userResponse.json();
    const { avatar_url, name, location, repos_url } = userData;
    avatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocationElem.textContent = location ? `from ${location}` : '';
    try {
      const reposResponse = await fetch(repos_url);
      if (!reposResponse.ok) {
        return null;
      }
      const reposData = await reposResponse.json();
      reposData.map(
        ({ name }) => (repoListElem.innerHTML += `<li class="repo-list__item">${name}</li>`),
      );
    } catch (e) {
      alert(`Failed to load data`);
      console.log(e);
    }
  } catch (e) {
    alert(`Failed to load data`);
    console.log(e);
  } finally {
    spinnerElem.classList.add('spinner_hidden');
  }
});
