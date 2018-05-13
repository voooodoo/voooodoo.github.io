'use strict'
const form = document.forms.mainForm;
const submit = form.submit;

submit.addEventListener('click', checkForm);

function checkForm() {
    checkError(form);
    checkValid(form);
    checkTextFields(form);
    form.addEventListener('change', checkForm);
}

function checkTextFields(form) {
    var textFields = form.querySelectorAll('[type=text]');
    for (let i = 0; i < textFields.length; i++) {
        textFields[i].setCustomValidity('');
        var textFieldValue = textFields[i].value.toString(); 
        if((textFieldValue.indexOf("'")!=-1)||(textFieldValue.indexOf('"')!=-1)) {
          textFields[i].setCustomValidity('Text fields allow entering all symbols except double and single quotes');
        };
    }   
}
function checkError(form) {
    for (let i = 0; i < 9; i++) {
        if (form[i].validity.valueMissing||!form[i].validity.valid) {
            form[i].classList.add('error');
        }
    }
}

function checkValid(form) {
    for (let i = 0; i < 9; i++) {
        if (form[i].validity.valid) {
            form[i].classList.remove('error');
        }
    }
}