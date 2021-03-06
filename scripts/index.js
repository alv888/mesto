import {initialCards} from './initial-cards.js';
import {validationElement} from "./initial-cards.js";
import Card from './Card.js';
import FormValidator from './FormValidator.js';


//Секция карточек
const cardsZone = document.querySelector('.cards');
//Поля в профиле
const fieldProfileUsername = document.querySelector('.profile__username');
const fieldProfileProfession = document.querySelector('.profile__profession');

//Попап редактирования:
const popupEdit = document.querySelector('.popup_edit');
//Кнопка редактирования профиля:
const buttonEditProfile = document.querySelector('.profile__edit-button');
//Кнопка закрытия попапа редактирования:
const buttonClosePopupEdit = document.querySelector('.popup__close-button_edit');
//Поля в попапе редактирования
const fieldEditPopupUsername = document.querySelector('#username');
const fieldEditPopupProfession = document.querySelector('#userJob')
//Форма попапа редактирования профиля:
const formEditProfile = document.querySelector('.popup__form_edit');


//Попап добавления карточки:
const popupAddCard = document.querySelector('.popup_add-img');
//Кнопка добавления карточки:
const buttonOpenPopAdd = document.querySelector('.profile__add-button');
//Кнопка закрытия в попапе добавления карточки:
const buttonClosePopAdd = document.querySelector('.popup__close-button_add-img');
//Поля формы попапа добавления карточки
const fieldNameProfilePopup = document.querySelector('.popup__input_add-name');
const fieldLinkProfilePopup = document.querySelector('.popup__input_add-link');
//Форма добавления карточки:
const formAddCard = document.querySelector('.popup__form-add');


//Попап изображения
const popupImage = document.querySelector('.popup_img');


//Кнопка закрытия попапа изображения
const buttonClosePopupImg = document.querySelector('.popup__close-img');
//Изображение
export const imgPopup = document.querySelector('.popup__full-img');
//Заголовок изображения
export const titlePopupImg = document.querySelector('.popup__img-title');


//Включение валидации
const enableEditValidation = new FormValidator(validationElement, formEditProfile);
const enableAddValidation = new FormValidator(validationElement, formAddCard);
enableEditValidation.enableValidation();
enableAddValidation.enableValidation();


//Открытие попапов
function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keyup', closeEscPopup);
};
//Закрытие попапов
function closePopup(item) {
    item.classList.remove('popup_opened');
    document.removeEventListener('keyup', closeEscPopup);
};


//Открытие попапа редактирования
function openPopupEdit() {
  fieldEditPopupUsername.value = fieldProfileUsername.textContent;
  fieldEditPopupProfession.value = fieldProfileProfession.textContent;
  enableEditValidation.resetValidation();
  openPopup(popupEdit);
};
//Закрытие попапа редактирования
function closePopupEdit() {
  closePopup(popupEdit);
};


//Открытие попапа добавления карточки:
function openPopupAdd() {
  openPopup(popupAddCard);
  formAddCard.reset();
  enableAddValidation.resetValidation();
};
//Закрытие попапа добавления карточки
function closePopupAdd() {
  closePopup(popupAddCard);
};


//Открытие попапа изображения:
export function openPopupImg() {
  openPopup(popupImage);
};
//Закрытие попапа изображения
function closePopupImg() {
  closePopup(popupImage)
};

//Закрытие модалок по мисклику
function missclickClosePopup (evt){
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
}

//Закрытие модалок на кнопку esc
function closeEscPopup (evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened')
    closePopup(popup);
  }
}


function createCards(data) {
  const card = new Card (data, '.card__template');
  const cardElement = card.generateCard();
  cardsZone.prepend(cardElement);
}


//Отправка значения формы редактирования
function submitFormProfile (evt) {
  evt.preventDefault(); 
  fieldProfileUsername.textContent = fieldEditPopupUsername.value;
  fieldProfileProfession.textContent = fieldEditPopupProfession.value;
  closePopupEdit();
};
//Отправка значения формы добавления
function submitFormAddCards (evt) {
  evt.preventDefault(); 
  createCards({name: fieldNameProfilePopup.value, link: fieldLinkProfilePopup.value});
  closePopupAdd();
};


//Обработчик для формы редактирования
formEditProfile.addEventListener('submit', submitFormProfile);
//Обработчик для формы добавления
formAddCard.addEventListener('submit', submitFormAddCards); 


//Слушатель открытия попапа редактирования профиля
buttonEditProfile.addEventListener('click', openPopupEdit);
//Слушатель закрытия попапа редактирования профиля
buttonClosePopupEdit.addEventListener('click', closePopupEdit);
//Слушатель открытия попапа добавления карточки
buttonOpenPopAdd.addEventListener('click', openPopupAdd);
//Слушатель закрытия попапа добавления карточек
buttonClosePopAdd.addEventListener('click', closePopupAdd);
//Слушатель закрытия попапа изображения
buttonClosePopupImg.addEventListener('click', closePopupImg);
//Слушатель мисклика в модалке редактирования
popupEdit.addEventListener('mouseup', missclickClosePopup);
//Слушатель мисклика в модалке карточки
popupAddCard.addEventListener('mouseup', missclickClosePopup);
//Слушатель мисклика в модалке изображения
popupImage.addEventListener('mouseup', missclickClosePopup);


//Добавление элементов в разметку при загрузке страницы
initialCards.forEach((item) => {
  const card = createCards(item);
});

