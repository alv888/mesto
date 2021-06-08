//Template тег:
const itemTemplate = document.querySelector('.card__template').content;
//Секция карточек
const cardsZone = document.querySelector('.cards');
//Поля в профиле
const fieldProfileUsername = document.querySelector('.profile__username');
const fieldProfileProfession = document.querySelector('.profile__profession');

//Попап редактирования:
const popupEdit = document.querySelector('.popup_edit');
//Кнопка редактирования профиля:
const ButtonEditProfile = document.querySelector('.profile__edit-button');
//Кнопка закрытия попапа редактирования:
const buttonClosePopupEdit = document.querySelector('.popup__close-button_edit');
//Поля в попапе редактирования
const fieldEditPopupUsername = document.querySelector('#username');
const fieldEditPopupProfession = document.querySelector('#user-job')
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
const imgPopup = document.querySelector('.popup__full-img');
//Заголовок изображения
const titlePopupImg = document.querySelector('.popup__img-title');


//Открытие попапов
function openPopup(item) {
  item.classList.add('popup_opened');
};
//Закрытие попапов
function closePopup(item) {
    item.classList.remove('popup_opened');
};


//Открытие попапа редактирования
function openPopupEdit() {
  fieldEditPopupUsername.value = fieldProfileUsername.textContent;
  fieldEditPopupProfession.value = fieldProfileProfession.textContent;
openPopup(popupEdit);
};
//Закрытие попапа редактирования
function closePopupEdit() {
  closePopup(popupEdit);
};


//Открытие попапа добавления карточки:
function openPopupAdd() {
  openPopup(popupAddCard);
};
//Закрытие попапа добавления карточки
function closePopupAdd() {
  closePopup(popupAddCard);
};


//Открытие попапа изображения:
function openPopupImg() {
  openPopup(popupImage);
};
//Закрытие попапа изображения
function closePopupImg() {
  closePopup(popupImage)
};


//Добавление карточек
function createCards(name, link){
  const htmlElement = itemTemplate.cloneNode(true);
  const nameNewCard = htmlElement.querySelector('.cards__name');
  const linkNewCard = htmlElement.querySelector('.cards__img');
  nameNewCard.textContent = name;
  linkNewCard.src = link;
  linkNewCard.alt = name;
  
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
    imgPopup.src = link;
    titlePopupImg.textContent = name;
    openPopupImg()
  })
  
  return htmlElement;
};

//Добавление карточек в разметку
function addCards(item) {
  cardsZone.prepend(item);
};


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
  const newCard = createCards(fieldNameProfilePopup.value, fieldLinkProfilePopup.value);
  addCards(newCard)
  closePopupAdd();
};


//Обработчик для формы редактирования
formEditProfile.addEventListener('submit', submitFormProfile);
//Обработчик для формы добавления
formAddCard.addEventListener('submit', submitFormAddCards); 


//Слушатель открытия попапа редактирования профиля
ButtonEditProfile.addEventListener('click', openPopupEdit);
//Слушатель закрытия попапа редактирования профиля
buttonClosePopupEdit.addEventListener('click', closePopupEdit);
//Слушатель открытия попапа добавления карточки
buttonOpenPopAdd.addEventListener('click', openPopupAdd);
//Слушатель закрытия попапа добавления карточек
buttonClosePopAdd.addEventListener('click', closePopupAdd);
//Слушатель закрытия попапа изображения
buttonClosePopupImg.addEventListener('click', closePopupImg);


//Добавление элементов в разметку при загрузке страницы
initialCards.forEach((item) => {
  const cards = createCards(item.name, item.link);
  
  addCards(cards);
});