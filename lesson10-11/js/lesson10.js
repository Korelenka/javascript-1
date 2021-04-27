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



