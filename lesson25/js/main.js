//#region Task 1
console.log("Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.")

function task1(a, b) {
    if (a < b) {
        return -1;
    } else if (a == b) {
        return 0;
    } else(a > b)
    return 1;


}
console.log(task1(prompt("Number one:"), prompt("Number two:")));
//#endregion 

//#region  Task 2
//2 
console.log("Написать функцию, которая вычисляет факториал переданного ей числа.");

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else
        return (n * factorial(n - 1));

};
// console.log(factorial(4));
console.log(` The result wiil be:  ${factorial(prompt('Enter number for factirial'))}`);
//#endregion

//#region Task 3 Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
console.log("Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.");

function task3() {
    let a = prompt("Enter a first digit:  ", 0);
    let b = prompt("Enter a second digit:  ", 0);
    let c = prompt("Enter a third digit:  ", 0);

    function concat(a, b, c) {
        console.log(a.concat(b, c));
    }
    concat(a, b, c);
}
task3();
//#endregion

//#region  Task 4 
console.log("Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.");

function task4() {
    let a = +prompt("Enter a first digit:  ", 0);
    let b = +prompt("Enter a second digit:  ", 0);
    (Boolean(a) == false) ? (a = 0) : (a = a);
    (Boolean(b) == false) ? (b = 0) : (b = b);

    function squre(a, b) {
        if (a && b) {
            console.log(`First atempt:${a * b}`);
        } else if ((a === 0) & (b !== 0)) {
            console.log(`Second atempt:${(b ** 2)}`);

        } else if ((b === 0) & (a !== 0))
            console.log(`Third atempt:${(a**2)}`);
        else
            console.log("Both 0 or wrong!!")
    }
    squre(a, b);
}
task4();
//#endregion task4

//#region  Task 5Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
console.log("Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.");

function task5() {
    let a = prompt("Enter a first digit:  ", 0);

    function task5_1(a) {
        let result = 0;
        for (let i = 1; i < a; i++) {
            if (a % i == 0) {
                // console.log("делители этого числа: ", i);
                result += i;
            }

        };
        if (result == a) {
            console.log(`Is univerlsal digit:${a}`);
        } else
            console.log("This digit is usual")
    }
    task5_1(a);
}
task5();
//#endregion task 5

//#region  task 6
console.log("Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. ");

function task6() {

    let number_1 = Number(prompt("Подсчитать сумму всех чисел в заданном пользователем диапазоне.  From:"));
    let number_2 = Number(prompt("Till:"));

    function task6_1(a) {
        let result = 0;
        for (let i = 1; i < a; i++) {
            if (a % i == 0) {
                result += i;
            }
        };
        if (result == a) {
            console.log(`Is univerlsal digit:${a}`);
        }

    }
    for (var i = number_1; i <= number_2; i++) {
        task6_1(i);
    };


}
task6();
//#endregion task 6

//#region  task 7
console.log("Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.");

function task7() {
    let setHours = Number(prompt("часы:"));
    let setMinutes = Number(prompt("минуты:"));
    let setSeconds = Number(prompt("секунды:"));

    setHours = (!!setHours) ? setHours : "00";
    setMinutes = (!!setMinutes) ? setMinutes : "00";
    setSeconds = (!!setSeconds) ? setSeconds : "00";

    function concat(a, b, c) {
        console.log(`${a}:${b}:${c}`);
    }
    concat(setHours, setMinutes, setSeconds);

}
task7();
//#endregion task 7

//#region  task 8
console.log("Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.");

function task8() {
    let setHours = Number(prompt("часы:"));
    let setMinutes = Number(prompt("минуты:"));
    let setSeconds = Number(prompt("секунды:"));

    setHours = (!!setHours) ? setHours : 0;
    setMinutes = (!!setMinutes) ? setMinutes : 0;
    setSeconds = (!!setSeconds) ? setSeconds : 0;

    function concat(a, b, c) {
        console.log(`секунд: ${(((a*60)+(b))*60)+(c)}`);
        return ((((a * 60) + (b)) * 60) + (c));
    }
    return concat(setHours, setMinutes, setSeconds);

};
console.log(task8());
//#endregion task 8


//#region  Task 9



console.log("Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».");



let setSeconds = Number(prompt("секунды:"));

setSeconds = (!!setSeconds) ? setSeconds : 0;

function concat(sum) {
    let ex = sum % 3600;
    let hours = (sum - ex) / 3600;
    let min = (ex - (ex % 60)) / 60;
    let sec = (ex % 60);

    console.log(`время: ${hours.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')} `);
}
concat(setSeconds);
//#endregion


//#region  task 10
//10  
console.log("Написать функцию, которая считает разницу между датами.");

function task10() {
    let a = task8();
    let b = task8();
    let c = (a > b) ? (a - b) : (b - a);
    concat(c);

}
task10();
//#endregion