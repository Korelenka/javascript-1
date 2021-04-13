'use strict';

let a = 3, b = 9;
let result = a + b;
console.log(result);

let n = 12, m = 67;
result = n + m;
console.log(result);

function getSum(first, second){ // параметры
    return first + second;
}

let l = 9, k = -166;
let sum = getSum(l, k);
console.log(sum);

let x = 12, y = 91;
sum = getSum(x, y);
console.log(sum);

console.log(getSum(56, 0));

// написать функцию, которая возвращает минимальное из 2х чисел
function getMin(a, b){
    // return a < b ? a : b;
    if (a < b) return a;
    return b;
}
console.log(getMin(3, 7));
// 2 параметра: возраст и имя
// если возраст вне диапазона [7, 200] - "Укажите другой возраст"
// если возраст меньше 18 - "Вы не сможете осуществлять покупки"
// в остальных случаях - "Весь функционал доступен"
function greetingStr(age, name="Гость"){
    if (!age || age > 200 || age < 7) return `${name}, укажите другой возраст`;
    if (age <= 18) return `${name}, Вы не сможете осуществлять покупки`;
    return `${name}, весь функционал доступен`;

    /* let str;
    if (age > 200 || age < 7) {
        str = `${name}, укажите другой возраст`;
    } else if (age < 18) {
        str = `${name}, Вы не сможете осуществлять покупки`;
    } else {
        str = `${name}, весь функционал доступен`;
    }
    return str; */
}

let str = greetingStr(34, "Алиса");
console.log(str);
str = greetingStr(27);
console.log(str);


