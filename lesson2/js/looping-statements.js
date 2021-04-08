'use strict';
// parseFloat();
//  "45.8trt 78"
//  "trt 78"
//  "1 78"
// parseInt: 45 / / 1
// parseFloat: 45.8 / / 1
// "23px"

// while

while (true) {
    let userInput = parseInt(prompt("Введите число"));
    console.log(userInput * 2);
    if (userInput === 0) break;
}

let start = 1;
let end = 14;

// вывести в консоль все четные числа от start до end
while (start <= end){
    if (start % 2 === 0) console.log(start);
    start += 1;
}
// 90 85 80 75 70 ... 0
for (let i = 90; i >= 0; i -=5) {
    console.log(i);
}

// Дано количество тарелок и количество моющего средства
// Моющее средство расходуется из расчета 0.5 на 1 тарелку
// В цикле выводить сколько моющего средства осталось
// после мытья каждой тарелки.
//     В конце вывести сколько тарелок осталось,
//     когда моющее средство закончилось или наоборот.
let plates = 10;
let fairy = 4;

while (plates > 0 && fairy > 0) {
    plates -= 1;
    fairy -= 0.5;
}
console.log(plates, fairy);

// Программа загадывает число в диапазоне [1;9]
// Пользователь вводит число с клавиатуры
// Программа в зависимости от введенного
// числа выводит в консоль следующее:
//     "загаданное число больше"
// "загаданное число меньше"
// "Вы угадали" (программа завершает работу)
// если введен 0, выводит "выход из программы"
// (программа завершает работу)
let num = 4;
while (true) {
    let userNum = parseInt(prompt("Угадайте число"));
    if (userNum === 0) {
        console.log("Игра завершена");
        break;
    }
    if (userNum === num) {
        console.log("Вы угадали!");
        break;
    }
    if (userNum > num) console.log("Загаданное число меньше");
    else console.log("Загаданное число больше");
}

