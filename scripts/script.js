//Загрузка карточек:
//Массив для загрузки карточек
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

//Поиск template:
const itemTemplate = document.querySelector('.card__template').content;
const cardZone = document.querySelector('.cards');

//Добавление элементов в разметку
initialCards.forEach((item) => {
    const htmlElement = itemTemplate.cloneNode(true);
    htmlElement.querySelector('.cards__name').textContent = item.name;
    htmlElement.querySelector('.cards__img').src = item.link;
    cardZone.append(htmlElement);
});


//Попап добавления места:
let popupAdd = document.querySelector('.popup_add-img');
//Кнопка добавления:
let openPopupButtonAddImg = document.querySelector('.profile__add-button');
//Кнопка закрытия:
let closePopupButtonAdd = document.querySelector('.popup__close-button_add-img');
//Открытие попапа добавления:
function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
};
openPopupButtonAddImg.addEventListener('click', openPopupAdd);
//Закрытие попапа редактирования
function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
};
closePopupButtonAdd.addEventListener('click', closePopupAdd);

//Форма добавления:
let formAddCard = document.querySelector('.popup_form-add');
//Поля формы попапа добавления карточки
let namePlace = document.querySelector('.popup__input_add-name');
let linkImg = document.querySelector('.popup__input_add-link');
//Добавление карточки из попапа
function addCard(name, link){
  const htmlElement = itemTemplate.cloneNode(true);
  const nameNewCard = htmlElement.querySelector('.cards__name');
  const linkNewCard = htmlElement.querySelector('.cards__img');
  nameNewCard.textContent = name;
  linkNewCard.src = link;
  cardZone.prepend(htmlElement);
};
//Отправка значения формы добавления
function formSubmitHandlerAdd (evt) {
  evt.preventDefault(); 
  addCard(namePlace.value, linkImg.value);
  closePopupAdd();
};
//Обработчик для формы добавления
formAddCard.addEventListener('submit', formSubmitHandlerAdd); 



//Попап редактирования:
let popup = document.querySelector('.popup');
//Кнопка редактирования:
let openPopupButton = document.querySelector('.profile__edit-button');
//Кнопка закрытия:
let closePopupButton = document.querySelector('.popup__close-button');
//Форма:
let form = document.querySelector('.popup__form');
//Поля в профиле
let username = document.querySelector('.profile__username');
let profession = document.querySelector('.profile__profession');
//Поля в попапе
let usernamePopup = document.querySelector('#username');
let professionPopup = document.querySelector('#user-job')


//Открытие попапа редактирования
function openPopup() {
    popup.classList.add('popup_opened');
    usernamePopup.value = username.textContent;
    professionPopup.value = profession.textContent;
};
openPopupButton.addEventListener('click', openPopup);
//Закрытие попапа редактирования
function closePopup() {
    popup.classList.remove('popup_opened');
};
closePopupButton.addEventListener('click', closePopup);


//Отправка значения формы редактирования
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    username.textContent = usernamePopup.value;
    profession.textContent = professionPopup.value;
    closePopup();
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
form.addEventListener('submit', formSubmitHandler); 