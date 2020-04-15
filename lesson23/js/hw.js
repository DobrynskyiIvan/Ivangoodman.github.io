let number_1 = Number(prompt("Подсчитать сумму всех чисел в заданном пользователем диапазоне.  From:"));
let number_2 = Number(prompt("Till:"));

let counter = 0;
for (let i = number_1; i < number_2; i++) {
    console.log(` суммa всех чисел в заданном пользователем диапазоне.${counter += i}`);
};
//2 Запросить 2 числа и найти только наибольший общий делитель.

let number_2_1 = Number(prompt("//2 Запросить 2 числа и найти только наибольший общий делитель.' First:"));
let number_2_2 = Number(prompt("Second:"));

while (number_2_1 != number_2_2)
    if (number_2_1 > number_2_2)
        number_2_1 = number_2_1 - number_2_2
else
    number_2_2 = number_2_2 - number_2_1;
console.log("наибольший общий делитель:", number_2_1);

//3 Запросить у пользователя число и вывести все делители этого числа.

let number_3 = Number(prompt("/3 Запросить у пользователя число и вывести все делители этого числа.  Number:"));
for (let i = 1; i < number_3; i++) {
    if (number_3 % i == 0)
        console.log("делители этого числа: ", i);
};

//4 Определить количество цифр в введенном числе.

let number_4 = prompt("'//4 Определить количество цифр в введенном числе.' Number:");
let toArray = Array.from(number_4);

let countDigits = toArray.length;
console.log(' количество цифр:', countDigits);

//5 

let fruits = [];

for (let i = 0; i < 10; i++) {
    fruits.push(Number(prompt("//5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей  Element:")));
};

let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;
let counter_4 = 0;
let counter_5 = 0;
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] > 0) {
        counter_1++;
    } else if (fruits[i] < 0) {
        counter_2++;
    } else if (fruits[i] == 0) {
        counter_3++;
    }
    if (fruits[i] % 2 == 0) {
        counter_4++;
    } else if (fruits[i] % 2 == 1) {
        counter_5++;
    }
};
console.log('положительных', counter_1);
console.log('отрицательных', counter_2);
console.log('нулей', counter_3);
console.log('четных ', counter_4);
console.log('нечетных', counter_5);

//6  

let condition_6;
do {
    let number_6_1 = Number(prompt("//6  Number one:"));
    let number_6_2 = Number(prompt("Number two:"));
    let operator_6_3 = prompt("Operator:");
    if (operator_6_3 == '+') {
        console.log(number_6_1 + number_6_2);
    } else if (operator_6_3 == '-') {
        console.log(number_6_1 - number_6_2);
    } else if (operator_6_3 == '*') {
        console.log(number_6_1 * number_6_2);
    } else(operator_6_3 == '/')
    console.log(number_6_1 / number_6_2);

    condition_6 = prompt("Continue? type [1] if  'Yes' or [2] if 'No");

} while (condition_6 == 1);
//7 

let number = prompt("Number for moving:");
let move = Number(prompt("counts of move:"));
let fruits = Array.from(number);

for (let i = 0; i < move; i++) {
    let w_first = fruits.shift();
    fruits.push(w_first);
};
let reversed = fruits.join("");
console.log('the result:', reversed);


//8 

let way = prompt("You want to start type: [ok]");
let dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

for (let i = 0; i < dayName.length && way == "ok"; i++) {
    console.log(dayName[i]);
    way = prompt("Continue type ok");
};

//9  Вывести таблицу умножения для всех чисел от 2 до 9

for (let i = 2; i <= 9; i++) {
    console.log("special for :", i)
    for (let j = 1; j < 11; j++) {
        console.log(`${i}*${j}=${i * j}`);
    }
};


//10 
let Z = 0;
let N = 50;
let K = 100;
let condition;
console.log('whish number between 0 and 100');
do {
    let result = prompt(" You number is bigger, less, or equal:", N);
    if (result == ">") {
        Z = N;
        N = N + Math.floor((K - N) / 2);
        console.log("is bigger:", N);
        condition = false;
    } else if (result == "<") {
        K = N;
        N = Z + Math.floor((N - Z) / 2);
        console.log("is less:", N);
        condition = false;
    } else if (result == "=") {
        console.log(N);
        condition = true;
    }
} while (condition == false);


// //11 
let matrix = [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1]
];
matrix.reverse();
console.log(matrix);