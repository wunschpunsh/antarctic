const personalInputs = document.querySelectorAll('input[type="checkbox"]');
const nameInputs = document.querySelectorAll('input[type="text"]');
const phoneInputs = document.querySelectorAll('input[type="tel"]');
const emailInputs = document.querySelectorAll('input[type="email"]');
const formButtons = document.querySelectorAll('button[type="submit"]');


const MASK_PHONE_FORMAT = '89';
let formattedInputValue;

const showValidateTitle = (evt, title) => {
  const input = evt.target;
  const isValid = input.checkValidity();
  if (!isValid) {
    input.title = (title);
  }
};

const onNameValidateInput = (evt) => {
  const inputValueArray = Array.from(evt.target.value);
  const arr = [];

  inputValueArray.forEach((item) => {
    if (item === '-') {
      arr.push(item);
    }
  });

  formButtons.forEach((button) => {
    if (arr.length > 1) {
      button.disabled = true;
      evt.target.title = ('Только одно тире');
    } else {
      button.disabled = false;
    }
  });

  showValidateTitle(evt, 'Только буквы русского или латинского алфавита');
};


const onFormButtonChange = (evt) => {
  const checkbox = evt.target;

  formButtons.forEach((button) => {
    if (button.dataset.idCheckbox === checkbox.id) {
      if (checkbox.checked) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    }
  });
};

const onPhoneNumberChange = (evt) => {
  showValidateTitle(evt, 'Введите номер в формате 8XXXXXXXXXX');
};

const getPhoneInputNumber = (evt) => {
  return evt.target.value.replace(/\D/g, '');
};

const onPhoneMaskInput = (evt) => {
  const inputNumberValue = getPhoneInputNumber(evt);
  formattedInputValue = MASK_PHONE_FORMAT;

  if (inputNumberValue.length > 1) {
    formattedInputValue += inputNumberValue.substring(2, 11);
  }
  evt.target.value = formattedInputValue;
};

const onPhoneInputClearKeydow = (evt) => {
  let inputValue = evt.target.value.replace(/\D/g, '');
  if (evt.key === 'Backspace' && inputValue.length === 2) {
    evt.target.value = '';
  }
};

const onEmailValidateInput = (evt) => {
  showValidateTitle(evt, 'Введите почту в формате user-name@domen-name.ru');
};


const validateForm = () => {
  nameInputs.forEach((input) => {
    input.addEventListener('input', onNameValidateInput);
  });

  phoneInputs.forEach((input) => {
    input.addEventListener('input', onPhoneMaskInput);
    input.addEventListener('input', onPhoneNumberChange);
    input.addEventListener('keydown', onPhoneInputClearKeydow);
  });

  personalInputs.forEach((checkbox) => {
    checkbox.checked = true;
    checkbox.addEventListener('change', onFormButtonChange);
  });

  emailInputs.forEach((input) => {
    input.addEventListener('input', onEmailValidateInput);
  });
};


export {validateForm};
