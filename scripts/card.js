import { imgPopup, titlePopupImg, openPopupImg } from "./index.js";
export default  class Card {
    constructor(data, templateSelector){
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }
    //Получение темплейта
    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.cards__container')
        .cloneNode(true)
        
        return cardElement;
    }
    
    //Лайк
    _likeCard() {
        this._likeButton.classList.toggle('cards__like-button_active');
    }

    //Удаление карточки
    _deleteCard() {
        this._deleteButton.closest('.cards__container').remove();
    }
    
    

    //Слушатели
    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._likeCard();
        });
        this._deleteButton.addEventListener('click', () => {
            this._deleteCard();
        });
        this._cardImg.addEventListener('click', () => {
            imgPopup.src = this._link;
            imgPopup.alt = this._name;
            titlePopupImg.textContent = this._name;
            openPopupImg()
        });
    }

    //Создание карточки
    generateCard() {
        this._element = this._getTemplate();
        this._cardImg = this._element.querySelector('.cards__img');
        this._cardName = this._element.querySelector('.cards__name');
        this._deleteButton = this._element.querySelector('.cards__del-button');
        this._likeButton = this._element.querySelector('.cards__like-button');
        this._setEventListeners();
        
        
        
        this._cardName.textContent = this._name;
        this._cardImg.src = this._link;
        this._cardImg.alt = this._name;
        
        return this._element
    }
    
}