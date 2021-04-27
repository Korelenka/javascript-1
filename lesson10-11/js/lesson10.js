'use strict';

let titles = document.querySelectorAll(".article p:first-child");
// перебор html коллекции
for (let title of titles) {
    console.log(title);
    // добавление обработчика события
    title.addEventListener("click", openDescription);
}

function openDescription() {
    console.log(this);
    this.nextElementSibling.classList.toggle("open");
}

// data-*
// data-prise="dog"
// получение значения data атрибута:
// елемент.dataset.prise // dog

let getPresent = () => {
    return {
        dog: "Собака",
        book: "Книга",
        car: "Машина"
    }
}

let presentContainer = document.getElementById("present_container");

presentContainer.addEventListener("click", showPresent);
// showPresent(объект-события)

function showPresent(event){
    console.log(event);
    // элемент, на котором произошло событие event.target
    let clickElem = event.target;
    console.log(clickElem);
    let presentValue = clickElem.dataset.prise;
    console.log(presentValue);
    if (presentValue !== undefined){
        let prises = getPresent();
        // console.log(prises[presentValue]);
        clickElem.innerText = prises[presentValue];
        clickElem.classList.add("present");
        // удаление обработчика события
        // presentContainer.addEventListener("click", showPresent);
        this.removeEventListener("click", showPresent);
        // presentContainer.removeEventListener("click", showPresent);
    }
}









