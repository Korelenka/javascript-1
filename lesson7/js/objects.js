'use strict';

let arr = new Array(); // []
let fn = new Function(); // function ...
let obj = new Object(); // {}

// объекты используются для хранения данных в паре: ключ - значение
// объекты используются в ООП

let userData = {};
console.log(userData); // {}

// установили значение свойства name объекта userData
userData.name = 'Anna';
console.log(userData.name); // 'Anna'

userData.age = 27;
console.log(userData.age);
console.log(userData['age']);

userData.favouriteColors = ['red', 'orange', 'yellow'];

console.log(userData.favouriteColors[1]); // 'orange'

// чтение несуществующего свойства: undefined
console.log(userData.img); // undefined

// наличие свойства в объекте можно проверить с помощью:
if (userData.img === undefined) userData.img = 'default.png';
if (!('githubLink' in userData)) userData.githubLink = null;

userData.login = null;

let jsBook = {
    title: 'About JS',
    author: 'JS Junior',
    pageCount: 102,
};
let cssBook = {
    title: 'About CSS',
    author: 'CSS Junior',
    pageCount: 1700,
};

userData.books = [jsBook, cssBook];

console.log(userData.books[1].pageCount)  // 1700
console.log(userData.books[1]['pageCount'])  // 1700

// вывести в консоль название книг из userData,
// количество страниц которых больше 500

for (let book of userData.books) {
    if (book.pageCount > 500) console.log(book.title);
}

for (let i = 0; i < userData.books.length; i += 1){
    console.log(userData.books[i]);
    if (userData.books[i].pageCount > 500) {
        console.log(userData.books[i].title);
    }
}

let messages = [
    {
        text: "Срочное",
        priority: "high",
        code: 99
    },
    {
        text: "Просто сообщение",
        priority: "low",
        code: 8
    },
    {
        text: "Срочное сообщение",
        priority: "high",
        code: 88
    }
];
// запросить у пользователя код(code) и добавить в отдельный массив
// тексты сообщений, код которых выше указанного пользователем
let userCode = parseInt(prompt("Введите код"));
let texts = [];

for (let message of messages){
    if (message.code > userCode) texts.push(message.text);
}

console.log(texts);