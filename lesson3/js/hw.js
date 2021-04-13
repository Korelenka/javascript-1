// Увеличить значение каждого элемента массива на 10

let arr = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++){
        arr[i][j] += 10;
    }
}

// Отрицательные элементы массива скопировать в новый массив.
let nums = [34, 89, -12, 90, -1, 0, -823, 56];
let newNums = [];
for (let i = nums.length - 1; i >= 0; i -= 1){
    // if (nums[i] < 0) newNums.push(nums.splice(i, 1)[0]);
    if (nums[i] < 0) newNums.push(nums[i]);
}

nums = [34, 78, 10, -90, 1, 0, -5];
let min = Number.MAX_VALUE; // -90
let max = Number.MIN_VALUE;

for (let i = 0; i < nums.length; i+= 1){
    if (nums[i] < min) min = nums[i];
}




