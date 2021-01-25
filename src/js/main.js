import refs from './refs';
import cardTpl from '../templates/cardTpl.hbs';
import searchUtils from './apiSevice';
import showNotificationError from './notify';

refs.searchFormRef.addEventListener('submit', formSubmit);
refs.loadMoreBtnnRef.addEventListener('click', () => {
  searchUtils.imgSearching().then(data => {
    MakeMarkup(data);
    timeout();
    visibilityMoreBtn(data);
  });
});

function formSubmit(event) {
  event.preventDefault();

  searchUtils.resetPage();

  refs.loadMoreBtnnRef.classList.add('is-hidden');
  refs.galleryRef.innerHTML = '';
  searchUtils.searchReq = refs.searchInputRef.value;

  searchUtils.imgSearching().then(result => {
    MakeMarkup(result);
    visibilityMoreBtn(result);
  });
}

function MakeMarkup(result) {
  const markup = cardTpl(result.hits);
  refs.galleryRef.insertAdjacentHTML('beforeend', markup);
}

function visibilityMoreBtn(result) {
  console.log(searchUtils.resultLength - 1);
  console.log(result.hits.length);

  console.log(!result.hits.length === 12);
  console.log(result.hits.length === result.totalHits);
  if (
    result.hits.length < searchUtils.resultLength - 1 ||
    result.hits.length === result.totalHits
  ) {
    refs.loadMoreBtnnRef.classList.add('is-hidden');
  } else {
    refs.loadMoreBtnnRef.classList.remove('is-hidden');
  }
}

// function hideMoreBtn(result) {
//   if (result.hits.length < 13) {
//     refs.loadMoreBtnnRef.classList.add('is-hidden');
//   }
// }

// function ShowMoreBtn(result) {
//   if (result.totalHits > 12) {
//     refs.loadMoreBtnnRef.classList.remove('is-hidden');
//   }
// }

function timeout() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, 300);
}
