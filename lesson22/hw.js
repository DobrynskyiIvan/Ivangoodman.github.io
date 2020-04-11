//1 Запросить у пользователя его возраст и определить, кем он , подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
const howOldYou = Number(prompt("//1 How Old are You:"));
switch (true) {
    case 0 <= howOldYou && howOldYou <= 12:
        console.log("является: ребенком (0–12)");
        break;
    case 12 < howOldYou && howOldYou <= 18:
        console.log("является:подростком (12–18)");
        break;
    case 18 < howOldYou && howOldYou <= 60:
        console.log("является:взрослым (18_60)");
        break;
    case 60 < howOldYou:
        console.log("является:пенсионером");
        break;
    default:
        console.log("Sorry, we are out of " + howOldYou + ".");
}

//2
const convertNumber_fn = Number(prompt("//2  число от 0 до 9 :"));
switch (convertNumber_fn) {
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
        break;
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("&");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
        break;
    case 0:
        console.log(")");
        break;


    default:
        console.log("Sorry, we are out of " + convertNumber_fn + ".");
}

//3 Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
let number_same = prompt(" //3 triple Nnmber 'ex:000' :");


let fruits = Array.from(number_same);

for (var i = 0; i < fruits.length - 1; i++) {
    if (fruits[i] == fruits[i + 1])
        console.log(`Number:${fruits[i]} the same`)
    else
        console.log(`For number:${fruits[i]} its in origin value`)

}
//4
let specialYear = Number(prompt(" //4 Check special Year:"));

if (specialYear % 100 == 0) {
    console.log("Високосный год is not:", specialYear);
} else if (specialYear % 4 == 0 || specialYear % 400 == 0)
    console.log("Високосный год:", specialYear);
else
    console.log("Sorry, we are out of " + specialYear + ".");


//5
let numberPolindrom = prompt(" //5 Type here  number for reverse");
// console.log(Array.from(numberPolindrom));
let numberPolindrom_rvrs = Array.from(numberPolindrom);

let reversed = numberPolindrom_rvrs.reverse().join("");
if (numberPolindrom == reversed) {
    console.log('Reversed number:' + reversed + " is polindrom");
} else

    console.log('Reversed number:', reversed + " is not polindrom");


//6 Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
const euro = 0.92;
const uah = 27.30;
const azn = 1.7;
const dollars = prompt(" //6 Type here how much dollars you have");
console.log(`You have ${dollars}`)

const convertCurrency = Number(prompt("в какую валюту хочет перевести EUR [1], UAN [2] или AZN [3]:"));
switch (convertCurrency) {
    case 1:

        console.log(`You will get :${euro * dollars} Euro`);
        break;
    case 2:
        console.log(`You will get :${uah * dollars} Ukrainian Hryvni `);
        break;
    case 3:
        console.log(`You will get :${azn * dollars} Azerbaijan Manats`);
        break;


    default:
        console.log("Sorry, we are out of " + dollars + ".");
};


//7 
const paymentBill = Number(prompt("//7 Запросить  сумму покупки :"));

if (paymentBill >= 500) {
    console.log(` Запросить сумму к оплате со скидкой: :${paymentBill * 0.93} `);
} else if (500 > paymentBill && paymentBill >= 300) {
    console.log(`Запросить сумму к оплате со скидкой: :${paymentBill * 0.95} `);
} else if (300 > paymentBill && paymentBill >= 200) {
    console.log(`Запросить сумму к оплате со скидкой: :${paymentBill * 0.97} `);
} else


    console.log(` Запросить сумму к оплате :${paymentBill} `);

//8 
const squrePerimeter = Number(prompt(" периметр квадрата :"));
const circleLengthl = Number(prompt("длинa окружности :"));
// circleLengthl =Math.PI * radius_small * 2
let radius_small = circleLengthl / (Math.PI * 2);
let radius_big = squrePerimeter / 8;
// squrePerimeter=2*radius_big * 4
console.log((radius_small < radius_big) ? " окружность поместиться в указанный квадрат" : " окружность  HE поместиться в указанный квадрат");

//9
console.log('//9 here start ')
const firstQuestion = Number(prompt("5+4='?'   for:'5' press[1], for:'7' press[2] или for:'9' press[3]:"));
const secondQuestion = Number(prompt("5*4='?'   for:'20' press[1], for:'9' press[2] или for:'54' press[3]:"));
const thirdQuestion = Number(prompt("5-4='?' for:'5' press[1], for:'12' press[2] или for:'1' press[3]:"));
let questionResult = 0;
switch (firstQuestion) {
    case 1:

        break;
    case 2:

        break;
    case 3:
        // console.log("questionResult:", (questionResult + 2));
        questionResult += 2;
        break;

    default:
        console.log("Sorry, we are out of " + firstQuestion + ".");
}
switch (secondQuestion) {
    case 1:
        (questionResult += 2)
        break;
    case 2:

        break;
    case 3:

        break;

    default:
        console.log("Sorry, we are out of " + secondQuestion + ".");
}
switch (thirdQuestion) {
    case 1:

        break;
    case 2:

        break;
    case 3:
        // console.log("questionResult for 3:", (questionResult + 2));
        questionResult += 2;
        break;

    default:
        console.log("Sorry, we are out of " + thirdQuestion + ".");
}
console.log("questionResult:", (questionResult));

//10
const setYear = Number(prompt("//10  Set the Year:"));
const setMounth = Number(prompt("Set the Mounth from 1 to 12:"));
const SetDay = Number(prompt("Set the day in your mounth:"));
var d = new Date();
d.setFullYear(setYear, (setMounth - 1), SetDay);
console.log(d);