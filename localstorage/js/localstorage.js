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

