'use strict';

let title = "JavaScript"; // h2
let duration = 2.5; // p Продолжительность:
let price = 2000; // p Стоимость  $
let background = "yellow";

let html =
    `<div style="background: ${background}">
        <h2>${title.toUpperCase()}</h2>
        <p>Продолжительность: ${duration}</p>
        <p>Стоимость: ${price}$</p>
    </div>`;
console.log(html);
document.body.innerHTML = html;

// Поезд ['П', 'о', 'е', 'з', 'д']

let train = "Поезд";
console.log(train.length); // 5
console.log(train[2]); // e

// методы строк
// 1. приведение к верхнему и нижнему регистру
let newStr = train.toUpperCase();
console.log(newStr);

newStr = train.toLowerCase();
console.log(newStr);

// 2. trim урать пробелы с начала и конца строки
train = "    Поезд   ";
newStr = train.trim();
console.log(newStr); // "Поезд"

// 3. includes, startsWith, endWith чувствительны к регистру
train = "Длинный, Поезд";
console.log(train.includes("ез"));
console.log(train.startsWith("По"));
console.log(train.endsWith("д"));

// 4. массив из строки
let arrFromStr = train.split(", ");
console.log(arrFromStr);

// join из массива в строку
let textFrom = arrFromStr.join(": ");
console.log(textFrom); // "Длинный: Поезд"

// сравнение строк
train = "Яблоко";
let train2 = "A";

console.log(train === train2); // false
console.log(train.toLowerCase() === train2.toLowerCase()); // false
// П 1055
// п 1087
let compareRes = train.localeCompare(train2, undefined,
    {sensitivity: 'accent'}); // сравнение без учета регистра
compareRes = train.toLowerCase().localeCompare(train2.toLowerCase());
// 0, если строки равны
// отрицательное число, если train меньше train2
// положительное число, если train больше train2
console.log(compareRes);
train = "Яблоко";
console.log(train.substring(1, 4)); // "бло";
console.log(train.substring(1)); // "блоко";

// Заменить все буквы в слове на строчные, а первую на заглавную
let someStr = "bvbyt5yYHRvtCTER";
//         "Bvbyt5yyhrvtcter"
someStr = someStr[0].toUpperCase() + someStr.substring(1).toLowerCase();
console.log(someStr);

let getStr = str => str.substring(0, 2).toUpperCase() +
    str.substring(2).toLowerCase();

getStr = str => str[0].toUpperCase() + str.substring(1).toLowerCase();
console.log(getStr("rwotnVTEvrge"));
console.log(getStr("RRRRgvgvgRRRR"));

// методы строк: indexOf / lastIndexOf / slice




