const form = document.getElementById('creditcard');
const load = document.querySelector('.load');
const message = document.querySelector('.succes');

form.cardnumber.addEventListener('input', checkCardNumber);
form.cardnumber.addEventListener('blur', () => {
  if (validateCardNumber(event.target.value)) {
    form.cardnumber.style.border = '2px solid hsla(0, 0%, 100%, 0.2)';
  } else {
    form.cardnumber.style.border = '2px solid red';
  }
});

form.expdate.addEventListener('input', () => {
  let cardNumber = event.target.value;
  if (cardNumber.length == 2) {
    event.target.value = `${cardNumber}/`;
  }
  const number = cardNumber.slice(-1);
  if (!isNumeric(number)) {
    event.target.value = cardNumber.slice(0, cardNumber.length - 1);
  }
});

form.expdate.addEventListener('blur', event => {
  let expDate = event.target.value;
  if (expDate.length !== 5) {
    return setExpDateError();
  }
  let month = expDate.slice(0, 2);
  if (month > 12) {
    return setExpDateError();
  }
  let year = expDate.slice(3, 5);
  const curYear = new Date()
    .getFullYear()
    .toString()
    .substr(-2);

  if (year < curYear) {
    return setExpDateError();
  }
  form.expdate.style.border = '2px solid hsla(0, 0%, 100%, 0.2)';
});

form.cvv.addEventListener('input', event => {
  let cvv = event.target.value;
  const number = cvv.slice(-1);
  if (!isNumeric(number)) {
    event.target.value = cvv.slice(0, cvv.length - 1);
  }
});

form.cvv.addEventListener('blur', event => {
  let cvv = event.target.value;
  if (cvv.length !== 3) {
    return setCvvError();
  } else {
    form.cvv.style.border = '2px solid hsla(0, 0%, 100%, 0.2)';
  }
});

form.showmail.addEventListener('input', event => {
  const value = event.target.checked;
  if (value) {
    form.email.style.display = 'block';
    form.email.required = true;
  } else {
    form.email.style.display = 'none';
    form.email.required = false;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  form.style.display = 'none';
  load.style.display = 'block';
  setTimeout(() => {
    load.style.display = 'none';
    message.style.display = 'block';
  }, 2000);
});

function setExpDateError() {
  form.expdate.style.border = '2px solid red';
}

function setCvvError() {
  form.cvv.style.border = '2px solid red';
}

function checkCardNumber(event) {
  let cardNumber = event.target.value;
  const number = cardNumber.slice(-1);
  if (!isNumeric(number)) {
    event.target.value = cardNumber.slice(0, cardNumber.length - 1);
  }
}

function validateCardNumber(ccNum) {
  var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  var amexpRegEx = /^(?:3[47][0-9]{13})$/;
  var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  var isValid = false;

  if (visaRegEx.test(ccNum)) {
    isValid = true;
  } else if (mastercardRegEx.test(ccNum)) {
    isValid = true;
  } else if (amexpRegEx.test(ccNum)) {
    isValid = true;
  } else if (discovRegEx.test(ccNum)) {
    isValid = true;
  }
  return isValid;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
