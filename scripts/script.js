let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close-button')

openPopup.addEventListener('click', toggleClass);

closePopup.addEventListener('click', toggleClass);

function toggleClass() {
    popup.classList.toggle("popup_opened");
}