'use strict';
// document.forms - все формы в документе
// lesson - значение атрибута name нужной формы
let form = document.forms.lesson;
console.log(form);

// доступ к элементам формы по значению атрибута name
// form.elements - все элементы формы
// login - значение атрибута name нужного элемента формы
let loginInput = form.elements.login;
console.log(loginInput);
console.log(loginInput.value);
loginInput.value = "qwerty";

let passwordInput = form.elements.pwd;
console.log(passwordInput);

//
let colorRadios = form.elements.color;
for (let radio of colorRadios) {
    radio.addEventListener("focus", changeColor);
}

function changeColor(){
    form.elements.checkbox_fieldset.style.background = this.value;
}

// name="lang[]"
let langCheckBoxes = form.elements["lang[]"];
for (let checkBox of langCheckBoxes) {
    if (checkBox.checked) console.log(checkBox.value);
}

let select = form.elements.countries;
for (let option of select) {
    if (option.selected) console.log(option.value);
}

// событие - отправка формы
form.addEventListener("submit", submitForm);

function submitForm(event) {
    // отмена события по умолчанию
    event.preventDefault();

    console.log(loginInput.value);
    console.log(passwordInput.value);
}
