// Классы для валидации
const validationElement = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

  //

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

  //Проверка состояния полей для кнопки
  function hasInvalidInput(inputs) {
    return inputs.some((inputElement) => {
    return !inputElement.validity.valid;
    });
  }

  //Блокировка кнопки 
  function toggleButtonState(inputs, buttonElements, validationSelectors) {
    if (hasInvalidInput(inputs)) {
      buttonElements.classList.add(validationSelectors.inactiveButtonClass);
      buttonElements.setAttribute('disabled', true);
    } else {
      buttonElements.removeAttribute('disabled');
      buttonElements.classList.remove(validationSelectors.inactiveButtonClass);
    }
  };
  
  //Установка слушателей на инпут
  function setEventListeners(formElement, validationSelectors) {
    const inputs = Array.from(formElement.querySelectorAll(validationSelectors.inputSelector));
    const buttonElements = formElement.querySelector(validationSelectors.submitButtonSelector);
    toggleButtonState(inputs, buttonElements, validationSelectors);
    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', function(){
        isValidInput(formElement, inputElement, validationSelectors);
        toggleButtonState(inputs, buttonElements, validationSelectors);
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
 