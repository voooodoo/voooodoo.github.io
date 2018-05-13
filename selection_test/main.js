'use strict'
const form = document.forms.mainForm;
const submit = form.submit;

submit.addEventListener('click', checkForm);

function checkForm() {
    checkError(form);
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
    for (let i = 0; i < form.length; i++) {
        var elem = form[i];
        if (!elem.validity.valid) {
            elem.parentElement.classList.add('error');
        } else {
            elem.parentElement.classList.remove('error')
            elem.parentElement.classList.add('succes');
        }
    }
}
