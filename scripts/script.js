//Поиск содержимого:
//Попап:
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

//Открытие попапа
function openPopup() {
    popup.classList.add('popup_opened');
    usernamePopup.value = username.textContent;
    professionPopup.value = profession.textContent;
};
openPopupButton.addEventListener('click', openPopup);

//Закрытие попапа
function closePopup() {
    popup.classList.remove('popup_opened');
};
closePopupButton.addEventListener('click', closePopup);


//Отправка значения формы
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    username.textContent = usernamePopup.value;
    profession.textContent = professionPopup.value;
    closePopup();
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
form.addEventListener('submit', formSubmitHandler); 