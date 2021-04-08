'use strict';
// if, switch

let state = 0;

// if (state === 0) console.log("Загрузка завершена");
// else console.log("Ошибка статуса загрузки");

if (state === 0) {
    console.log("Загрузка завершена");
} else if (state === 1) {
    console.log("Загрузка...");
} else {
    console.log("Ошибка статуса загрузки");
}

// даны переменные age и exp
// если значение переменной age больше 100,
// вывести в консоль 'Мы Вам перезвоним'
// в противном случае перейти к проверке exp
   // если exp меньше 5, вывести 'Вы подходите на должность стажера'
   // в противном случае вывести 'Вы подходите на должность разработчика'

let age = 78, exp = 90;

if (age <= 18 || age < exp || exp < 0) {
    console.log("Ошибка ввода данных");
} else if (age > 100) {
    console.log("Мы Вам перезвоним");
} else if (exp < 5) {
    console.log("Вы подходите на должность стажера");
} else {
    console.log("Вы подходите на должность разработчика");
}

let month = "январь";
switch (month) {
    case "декабрь":
    case "январь":
    case "февраль":
        document.body.style.background = "blue";
        break;
    case "март":
    case "апрель":
    case "май":
        document.body.style.background = "yellow";
        break;
    case "июнь":
    case "июль":
    case "август":
        document.body.style.background = "green";
        break;
    case "сентябрь":
    case "октябрь":
    case "ноябрь":
        document.body.style.background = "orange";
        break;
    default:
        console.log("Ошибка ввода");
        document.body.style.background = "black";
        break;
}

/*
* Даны переменные
* sum (12000) - сумма покупки и
* code (9075) - номер купона
* code: 4653 - скидка 30%
* code: 2942, 9075 - скидка 20%
* code: 7899, 1188, 9045 - скидка 10%
* в остальных случаях скидка не предусмотрена
* вывести сумму с учетом скидки
* */

let sum = 12000, code = 9075;
switch (code) { // ===
    case 4653:
        sum = sum * 0.7;
        break;
    case 2942:
    case 9075:
        sum = sum * 0.8;
}

console.log(sum);
