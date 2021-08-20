// Классы для валидации
const validationElement = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

  

  // Функция отображения ошибки
  function showInputError(formElement, inputElement, errorMessage, validationSelectors) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationSelectors.errorClass);
    inputElement.classList.add(validationSelectors.inputErrorClass);
  }

  
  //Функция скрытия ошибки
  function hideInputError(formElement, inputElement, validationSelectors) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove(validationSelectors.errorClass);
    errorElement.textContent = "";
    inputElement.classList.remove(validationSelectors.inputErrorClass);
    
  }

  //Функция валидации
  function isValidInput(formElement, inputElement, validationSelectors) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationSelectors);
    } else {
      hideInputError(formElement, inputElement, validationSelectors);
    };
    }
  
  //Установка слушателей на инпут
  function setEventListeners(formElement, validationSelectors) {
    const inputs = Array.from(formElement.querySelectorAll(validationSelectors.inputSelector));
    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', function(){
        isValidInput(formElement, inputElement, validationSelectors);
      });
    });
  };

  //Функция включения валидации
  function enableValidation(validationSelectors) {
    const forms = Array.from(document.querySelectorAll(validationSelectors.formSelector));
    forms.forEach((formElement) => {
      setEventListeners(formElement, validationSelectors);
    })
  }
  
  enableValidation(validationElement);

 