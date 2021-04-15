'use strict';
/*
function sqrt(x){
    return x * x;
}
*/
// анонимные функции
let sqrt = function (x) {
    return x * x;
};

let res = sqrt(4);
console.log(res);

// стрелочные функции
sqrt = x => x * x;
res = sqrt(4);
console.log(res);
let doubled = x => x * 2;
let printTitle = (elem, text) => {
    if (text.length < 3) return;
    elem.innerText = text.toUpperCase();
};
printTitle(document.body, "Функции");

// любая функция может быть передана в качестве аргумента в другую функцию
function changeNum(num, func) {
    return func(num);
}

res = changeNum(12, sqrt);
res = changeNum(12, x => x + 10);
res = changeNum(10, x => x - 10);

function getNewArr(arr, func) {
    let newArr = [];
    for (let elem of arr) { // for (let i = 0; i < arr.len
        newArr.push(func(elem));
    }
    return newArr;
}

let arr = [4, 9, 1, 0, -5];
let newArr = getNewArr(arr, sqrt); // [16, 81, 1, 0, 25]
newArr = getNewArr(arr, x => x + 100); // [104, 109, 101, 100, 95]
newArr = getNewArr(arr, doubled); // [104, 109, 101, 100, 95]

// методы массивов
// сортировка массивов
let colors = ["red", "blue", "orange", "gold"];
colors.sort();
console.log(colors); // ["blue","gold","orange","red"]

function compare(a, b) {
    /*if (a < b) return -1;
    if (b < a) return 1;
    return 0;*/
    // -1 (отрициательное число), если a меньше b
    // 1 (положительное число), если a больше b
    // 0, если a равно b
    return a - b; // b - a;
}

let ints = [45, 78, 12, -90, 3335, 78, 7770, 0];
ints.sort(compare);
ints.sort((a, b) => b - a);
console.log(ints);

ints = [45, -78, 12, -90, -3335, 78, 7770, 0];
// filter();
let lessZero = num => num < 0;
let resArr = ints.filter(lessZero); // ints.filter(num => num < 0);
console.log(resArr);
resArr = ints.filter(num => num % 2 === 0);
console.log(resArr);

// map();
resArr = ints.map(n => n * 100);
console.log(resArr);

ints = [45, -78, 12, -90, -3335, 78, 7770, 0];
// every();
res = ints.every(n => n > 0);
console.log(res);
// some();
res = ints.some(n => n > 0);
console.log(res);

ints = [45, -78, 12, -90, -3335, 78, 7770, 0];

let func = (elem, index, arr) => {
   console.log(`Элемент массива = ${elem}`);
   console.log(`Индекс элемента массива = ${index}`);
   console.log(`Массив = ${arr}`);

   arr[index] *= 10;
};
ints.forEach(func);

for (let i = 0; i < ints.length; i+= 1) {
    func(ints[i], i, ints);
}

let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];

// проверить, если в массиве число 111
res = numsArr.some(elem => elem.some(num => num === 111));

let first = ["Апрель", "Май", "Октябрь", "Февраль", "Июнь"],
    second = ["Январь", "Декабрь", "Октябрь", "Июль", "Май"];
// indexOf(elem)
function getArr(arr1, arr2){
    // return arr1.filter( elem => arr2.indexOf(elem) >= 0);
    return arr1.filter( elem => arr2.includes(elem));
}
console.log(getArr(first, second)); // ["Май", "Октябрь"]

// замыкание
function sub(x){
    let n = x;
    return function (m){
        return n * m;
    }
}

let subSix = sub(6);
res = subSix(10);
console.log(res);
res = subSix(5);
console.log(res);

















