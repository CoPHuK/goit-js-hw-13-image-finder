import refs from './refs'
import cardTpl from '../templates/cardTpl.hbs'
import searchUtils from './apiSevice'
import showNotificationError from './notify'


refs.searchFormRef.addEventListener('submit', formSubmit)
refs.loadMoreBtnnRef.addEventListener('click', () => {
    searchUtils.imgSearching().then(data => { 
       MakeMarkup(data)
        setTimeout(() => {
         console.log(1);
    window.scrollTo({top: document.documentElement.scrollHeight, behavior: "smooth"});
  }, 300);
    })
})
    
function formSubmit(event) { 
    console.dir(document.documentElement);
    event.preventDefault();
    searchUtils.resetPage()
    refs.galleryRef.innerHTML = '';
   searchUtils.searchReq = refs.searchInputRef.value 
    searchUtils.imgSearching().then(MakeMarkup)
          

}

function MakeMarkup (result) {
  const markup = cardTpl(result.hits);
    refs.galleryRef.insertAdjacentHTML('beforeend', markup);
};



