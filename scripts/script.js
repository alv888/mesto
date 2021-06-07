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
//Попап добавления места:
const popupAdd = document.querySelector('.popup_add-img');
//Кнопка добавления:
const openPopupButtonAddImg = document.querySelector('.profile__add-button');
//Кнопка закрытия:
const closePopupButtonAdd = document.querySelector('.popup__close-button_add-img');
//Форма добавления:
const formAddCard = document.querySelector('.popup__form-add');
//Поля формы попапа добавления карточки
const namePlace = document.querySelector('.popup__input_add-name');
const linkImg = document.querySelector('.popup__input_add-link');
//Попап редактирования:
const popup = document.querySelector('.popup');
//Кнопка редактирования:
const openPopupButton = document.querySelector('.profile__edit-button');
//Кнопка закрытия:
const closePopupButton = document.querySelector('.popup__close-button');
//Форма:
const form = document.querySelector('.popup__form');
//Поля в профиле
const username = document.querySelector('.profile__username');
const profession = document.querySelector('.profile__profession');
//Поля в попапе редактирования
const usernamePopup = document.querySelector('#username');
const professionPopup = document.querySelector('#user-job')
//Крупное изображение
const popupImage = document.querySelector('.popup_img');
const popupImg = document.querySelector('.popup__full-img');
const popupImgTitle = document.querySelector('.popup__img-title');
const closePopupButtonImg = document.querySelector('.popup__close-img')


//Открытие попапа изображения:
function openPopupImg() {
  popupImage.classList.add('popup_opened');
};


//Закрытие попапа редактирования
function closePopupImg() {
  popupImage.classList.remove('popup_opened');
};
closePopupButtonImg.addEventListener('click', closePopupImg);


//Добавление карточек
function addCard(name, link){
  const htmlElement = itemTemplate.cloneNode(true);
  const nameNewCard = htmlElement.querySelector('.cards__name');
  const linkNewCard = htmlElement.querySelector('.cards__img');
  nameNewCard.textContent = name;
  linkNewCard.src = link;
  
  //Лайк
  htmlElement.querySelector('.cards__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('cards__like-button_active');
  });

  //Удаление
  htmlElement.querySelector('.cards__del-button').addEventListener('click', function(evt) {
    evt.target.closest('.cards__container').remove();
  });

  //Открытие попапа изображения
  linkNewCard.addEventListener('click', function(evt) {
    popupImg.src = link;
    popupImgTitle.textContent = name;
    openPopupImg()
  })
  
  cardZone.prepend(htmlElement);
};


//Добавление элементов в разметку при загрузке страницы
initialCards.forEach((item) => {
  const cards = addCard(item.name, item.link);
  function firstCards(){
    cardZone.append();
  }
  firstCards(cards);
});


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


//Отправка значения формы добавления
function formSubmitHandlerAdd (evt) {
  evt.preventDefault(); 
  addCard(namePlace.value, linkImg.value);
  closePopupAdd();
};
//Обработчик для формы добавления
formAddCard.addEventListener('submit', formSubmitHandlerAdd); 


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
//Обработчик для формы редактирования
form.addEventListener('submit', formSubmitHandler); 