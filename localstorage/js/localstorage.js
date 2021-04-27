'use strict';
// локальное хранилище localstorage
let storage = localStorage;
// {"ключ1" : "значение",
//  "ключ2" : "значение",
//  "ключ3" : "значение"}
// [object Object]
// сохранение данных в локальное хранилище
// color - ключ, red - значение
storage.setItem("color", "red");
storage.setItem("background", "yellow");
storage.setItem("background", "green");

// получение данных из локального хранилища
console.log(storage.getItem("color")); // red
console.log(storage.getItem("background")); // green

let arrData = [
    {
        background: "red",
        color: "green"
    },
    {
        background: "yellow",
        color: "black"
    },
    {
        background: "pink",
        color: "purple"
    }
];

let arrToJson = JSON.stringify(arrData);
// тип данных arrToJson - String
console.log(arrToJson);

storage.setItem("array", arrToJson);

// тип данных fromStorage - String
// let fromStorage = storage.getItem("array");

// тип данных fromStorage - Array
let arrFromStorage = JSON.parse(storage.getItem("array"));
console.log(arrFromStorage);

arrFromStorage.push({background: "white", color: "blue"});

storage.setItem("array", JSON.stringify(arrFromStorage));


