'use strict';
// арифметические операторы

let a = 3, b = 5, c = '8', d = 'семь';
let res = a + b;
console.log(res); // 8

res = a + c; // '3' + '8'
console.log(res); // '38'

res = a + " " + d; // `${a} ${b}`
console.log(res); // '3 семь'

res = +c;
console.log(res); // 8

res = +d;
console.log(res); // Nan

res = a * d;
console.log(res); // Nan

res = a * c;
console.log(res); // 24

a = 7;
b = 3;
res = a / b;
console.log(res); // 2.3333333333333335

res = a / 0;
console.log(res); // Infinity

res = -a / 0;
console.log(res); // -Infinity

a = 7;
b = 2;
res = a % b;
console.log(res); // 1

console.log(9 % 8); // 1
console.log(9 % 7); // 2
console.log(9 % 6); // 3

a = 8;
b = 2;
res = a % b;
console.log(res); // 0

// операторы присваивания
let num = 10;
num = num + 10; // num += 10;
num *= 10; // num = num * 10;
num /= 10; // num = num / 10;
num -= 10; // num = num - 10;
console.log(num); // 10

// операторы сравнения
a = 5;
b = 8;
c = '5';

res = a > b;
console.log(res);
console.log(a >= b); // false
console.log(b <= 8); // true
console.log(b < 8); // false

console.log(a == c); // true
console.log(a === c); // false 5 === '5'
console.log(a === +c); // true 5 === 5

// тернарный оператор ?
a = 8;
b = 2;
    // условие/логическое выражение ?
res = a % b === 0 ? a / b : a * b;
console.log(res); // 4

res = a % b === 0 ? "Ч" : "Н";
console.log(res);

res = a % b === 0 // ? true : false;
console.log(res);

// логические операторы
// && и
// || или
a = 8;
b = 2;
res = (a % b === 0) && (b > 100) ? 'true' : 'false';
console.log(res); // 'false'

res = (a % b === 0) || (b > 100) ? 'true' : 'false';
console.log(res); // 'true'

// ! НЕ
let selected = true;
res = !selected;
console.log(res); // false

// 0, null, undefined, Nan, ''
selected = 45;
res = selected ? 'true' : 'false';
console.log(res); // 'true'




