'use strict';

let ints = []; // создание пустого массива
console.log(ints);

let colors = ["blue", "red", "yellow", "pink"];
console.log(colors);

// разряженный массив
let nums = [2, 78, , 90, , , -12];
console.log(nums);

// свойство length
console.log(colors.length); // 4
console.log(nums.length); // 7

// доступ к элементам массива
colors = ["blue", "red", "yellow"];
colors[1] = "orange";
console.log(colors);

let elem = colors[0];
console.log(elem);

console.log(colors[30]); // undefined
colors[47] = "black";
console.log(colors); // 48
colors.length = 900;
console.log(colors.length);

// многомерный массив
nums = [
          [55, -991, 34, 0], // 0
          [9, 23, 81], // 1
          [99, 4] // 2
       ];

let firstArr = nums[1];
console.log(firstArr); // [9, 23, 81]

console.log(firstArr[2]); // 81
console.log(nums[2][1], nums[1][1]); // 4 23
nums[1][1] = 22;
console.log(nums);

// перебор массивов
ints = [67, 99, 12, 65, 6];

let str = "Значения элементов массива ints: ";                               // i++
for (let i = 0; i < ints.length; i += 1){
    // console.log(ints[i]);
    str += ints[i] + " ";
    ints[i] *= ints[i];
}
console.log(str);
console.log(ints);

// цикл for of
ints = [67, 99, 12, 65, 6];
for (let arrElem of ints) {
    console.log(arrElem);
}

let pics = ["one.jpg", "two.jpg", "three.jpg", "four.jpg"];







