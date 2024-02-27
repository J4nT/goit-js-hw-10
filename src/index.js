import { fetchCatByBreed, fetchBreeds } from "./cat-api";
import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';

const catIdElement = document.querySelector(".breed-select");
const catNameElement = document.getElementsByClassName('cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const cats = [];

fetchBreeds()
  .then(breedsCats => {
    renderbreedsCats(breedsCats);
    loader.classList.add('hidden');
  })
  .catch(error => {
    Notiflix.Notify.failure(`Error: ${error}`);
    handleFetchError();
  });

function handleFetchError() {
  errorElement.classList.remove('hidden');
  loader.classList.add('hidden');
}

function renderbreedsCats(breedsOfCats) {
    breedsOfCats.map(({ id, name }) => {
        cats.push({ text: name, value: id });
    });
    new SlimSelect({
        select: '.breed-select',
        settings: {
            placeholderText: 'Cat Breed Name',
        },
        data: breeds,
    });
    loader.classList.remove('hidden');
    errorElement.classList.add('hidden');
    console.log(breedsOfCats);
};

catIdElement.addEventListener('change', event => {
  loader.classList.remove('hidden');

  fetchCatByBreed(event.target.value)
    .then(data => renderCatData(data[0]), errorElement.classList.add('hidden'))
    .catch(error => {
      Notiflix.Notify.failure(`Error: ${error}`, handleFetchError());
      catNameElement.innerHTML = '';
    });
});
function renderCatData(catData) {
  const { url } = catData;
  const { name, description, temperament } = catData.breeds[0];
  catNameElement.innerHTML = '';
  catNameElement.insertAdjacentHTML(
    'beforeend',
    `<div class="cat-data"><h2>${name}</h2><div class="card"><div class="content"><div class="front"><img class="cat-photo" src="${url}"/></div><div class="back"><div class="back-paragraphs"><p>${description}</p><p><strong>Temperament: </strong>${temperament}</p></div></div></div></div></div>`
  );
  loader.classList.add('hidden');
};