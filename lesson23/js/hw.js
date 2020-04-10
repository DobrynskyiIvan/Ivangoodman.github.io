
var number_1 = Number(prompt("Подсчитать сумму всех чисел в заданном пользователем диапазоне.  From:"));
var number_2 = Number(prompt("Till:"));

let counter = 0;
for (var i = number_1; i < number_2; i++) {
    console.log(` суммa всех чисел в заданном пользователем диапазоне.${counter += i}`);
};
//2 Запросить 2 числа и найти только наибольший общий делитель.
var number_2_1 = Number(prompt("//2 Запросить 2 числа и найти только наибольший общий делитель.' First:"));
var number_2_2 = Number(prompt("Second:"));

while (number_2_1 != number_2_2)
    if (number_2_1 > number_2_2)
        number_2_1 = number_2_1 - number_2_2
    else
        number_2_2 = number_2_2 - number_2_1;
console.log("наибольший общий делитель:", number_2_1);

//3 Запросить у пользователя число и вывести все делители этого числа.
var number_3 = Number(prompt("/3 Запросить у пользователя число и вывести все делители этого числа.  Number:"));
for (var i = 1; i < number_3; i++) {
    if (number_3 % i == 0)
        console.log("делители этого числа: ", i);
};

//4 Определить количество цифр в введенном числе.
var number_241 = prompt("'//4 Определить количество цифр в введенном числе.' Number:");
let Arr_to = Array.from(number_241);

var reversed = Arr_to.length;
console.log(' количество цифр:', reversed);

//5 
var fruits = [];

for (var i = 0; i < 10; i++) {
    fruits.push(Number(prompt("//5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей  Element:")))

};
let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;
let counter_4 = 0;
let counter_5 = 0;
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i] > 0) {
        counter_1++;
    }
    else if (fruits[i] < 0) {
        counter_2++;
    }
    else if (fruits[i] == 0) {
        counter_3++;
    }
    if (fruits[i] % 2 == 0) {
        counter_4++;
    }
    else if (fruits[i] % 2 == 1) {
        counter_5++;
    }
};
console.log('положительных', counter_1);
console.log('отрицательных', counter_2);
console.log('нулей', counter_3);
console.log('четных ', counter_4);
console.log('нечетных', counter_5);

//6 
do {
    var number_6_1 = Number(prompt("//6  Number one:"));
    var number_6_2 = Number(prompt("Number two:"));
    var operator_6_3 = prompt("Operator:");
    if (operator_6_3 == '+') {
        console.log(number_6_1 + number_6_2);
    }
    else if (operator_6_3 == '-') {
        console.log(number_6_1 - number_6_2);
    }
    else if (operator_6_3 == '*') {
        console.log(number_6_1 * number_6_2);
    }
    else if (operator_6_3 == '/') {
        console.log(number_6_1 / number_6_2);
    }


    var condition = prompt("Continue? type [1] if  'Yes' or [2] if 'No");
    // let condition= Boolean(false);
    // var condition= Number(prompt("Continue? type 1 or 2:"));
} while (condition == 1);
//7 

var number = prompt("Number for moving:");
let move = Number(prompt("counts of move:"));
// console.log(Array.from(number));
var fruits = Array.from(number);
for (var i = 0; i < move; i++) {
    var first = fruits[0];
    // console.log(first);
    var w_first = fruits.shift();
    // console.log('this is array:', w_first);
    // console.log('this is array:', fruits);
    fruits.push(w_first);
    // console.log('this is array after push:', fruits);

}

var reversed = fruits.join("");
console.log('the result:', reversed);


//8 
var way = prompt("You want to start type: [ok]");
var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

for (var i = 0; i < dayName.length && way == "ok"; i++) {
    console.log(dayName[i]);
    var way = prompt("Continue type ok");

}

//9  Вывести таблицу умножения для всех чисел от 2 до 9

for (var i = 2; i <= 9; i++) {
    console.log("special for :", i)
    for (let j = 1; j < 11; j++) {
        console.log(`${i}*${j}=${i * j}`);
    }


}


//10 
var Z = 0;
var N = 50;
var K = 100;
console.log('whish number between 0 and 100');
do {
    var result = prompt(" You number is bigger, less, or equal:", N);
    if (result == ">") {
        Z = N;
        N += Math.floor((K - N) / 2);
        console.log("is bigger:", N);
        var condition = false;
    }
    else if (result == "<") {
        K = N;
        N = Z + Math.floor((N - Z) / 2);
        console.log("is less:", N);
        var condition = false;
    }
    else if (result == "=") {
        console.log(N);
        var condition = true;
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


