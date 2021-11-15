export default class FormValidator {
    constructor(validationElement, formElement) {
        this._formSelector = validationElement.formSelector;
        this._inputSelector = validationElement.inputSelector;
        this._submitButtonSelector = validationElement.submitButtonSelector;
        this._inactiveButtonClass = validationElement.inactiveButtonClass;
        this._inputErrorClass = validationElement.inputErrorClass;
        this._errorClass = validationElement.errorClass;
        this._formElement = formElement;
        this._input = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElements = this._formElement.querySelector( this._submitButtonSelector);
    }
    // Отображения ошибки
    _showInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
        inputElement.classList.add(this._inputErrorClass);
    }
    //Скрытие ошибки
    _hideInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = "";
        inputElement.classList.remove(this._inputErrorClass);
    }
    //Валидация
    _isValidInput (inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
          } else {
            this._hideInputError(inputElement);
          };
        }
    
    //Состояние полей
    _hasInvalidInput () {
        return this._input.some((inputElement) => {
        return !inputElement.validity.valid;
        });

    }
    //Блокировка кнопки
    _toggleButtonState () {
        if (this._hasInvalidInput(this._input)) {
            this._buttonElements.classList.add(this._inactiveButtonClass);
            this._buttonElements.setAttribute('disabled', true);
          } else {
            this._buttonElements.removeAttribute('disabled');
            this._buttonElements.classList.remove(this._inactiveButtonClass);
          }
    }
    //Слушатели
    _setEventListeners () {
        this._toggleButtonState();

        this._input.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValidInput(inputElement);
                this._toggleButtonState();
            });
          });
    }
    //Сброс валидации
    resetValidation () {
        this._input.forEach((inputElement) => {
            this._hideInputError(inputElement);
            });
    }
    //Включение валидации
    enableValidation() {
        this._setEventListeners ();
    }
}
