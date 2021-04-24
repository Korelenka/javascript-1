'use strict';

function getGoods() {
    return {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25,
            img: "https://picsum.photos/id/345/300"
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40,
            img: "https://picsum.photos/id/988/300"
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12,
            img: "https://picsum.photos/id/123/300"
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50,
            img: "https://picsum.photos/id/162/300"
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5,
            img: "https://picsum.photos/id/163/300"
        }
    };
}


/*<div class="card">
    <h2></h2>
    <img src="">
    <p></p>
    <p></p>
</div>*/
function generateCards(where, object) {
    for (let propertyName in object) {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card"); // "card", "text-center"

        let title = document.createElement("h2");
        title.innerText = object[propertyName].title;

        let img = document.createElement("img");
        img.setAttribute("src", object[propertyName].img);

        let price = document.createElement("p");
        price.innerText = `Цена ${object[propertyName].price}`;

        let count = document.createElement("p");
        count.innerText = `Количество ${object[propertyName].count}`;

        cardDiv.append(title, img, price, count);
        where.append(cardDiv);
    }
}

generateCards(document.querySelector(".items"), getGoods());

// userData {name: "Глеб", img: "user.png"}
function addComment(commentText, userData, element){
    // текущие дату и время
    let item = document.createElement('div');
    item.classList.add('items');
    item.innerHTML = `
        <div class="photo"><!--Фото-->
            <img src="${userData.img}" alt="Фото пользователя">
        </div>
        <div><!--Имя, дата, текст комментария-->
            <p><!--Имя, дата-->
                <span class="strong-uppercase"><!--Имя-->
                    ${userData.name}
                </span>
                |
                <span><!--Дата-->
                    ${getDate()}
                </span>
            </p>
            <p><!--Комментарий-->
                ${commentText}
            </p>
        </div>
    `;
    element.append(item);
}

function getDate() {
    let currentDate = new Date();

    return `
        ${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}
    `;
}

addComment(
    'Hey there!',
    {name: "Глеб", img: "user.png"},
    document.querySelector('#comments')
    );
console.log(getDate());
let userData = {name: "Глеб", img: "user.png"};

// написать функцию, которая принимает на вход день недели:
// 0 - воскресенье, 6 - суббота
// возвращает день недель строкой

function getDay(dayNum){
    /*if (dayNum === 0) return "воскресенье";
    if (dayNum === 1) return "понедельник";
    if (dayNum === 2) return "вторник";
    if (dayNum === 3) return "среда";
    if (dayNum === 4) return "четверг";*/

   let days = ["воскресенье", "понедельник", "вторник", "среда",
    "четверг", "пятница", "суббота"];
    return days[dayNum];
}
let current = new Date();
console.log(getDay(current.getDay())); // суббота















