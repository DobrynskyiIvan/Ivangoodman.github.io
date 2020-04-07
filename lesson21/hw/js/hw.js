
//1
let firstName = prompt("Hi! Let's try:) What is Your name?");

console.log(`Hi ${firstName} :)`);
//2
const Year = 2020;
let birthdate = prompt(`${firstName} ,What's a birthday year?`);
console.log(` ${firstName}, you are ${Year - birthdate} years`);
//3
let length = prompt(" //3 Type here side square !");

console.log(`The perimeter of a square whose four sides have length ${length}  is: ${length * 4} `);
//4
let radius = prompt("  //4  Type here  the radius of a circle !");
console.log(`The  area of a circle with  radius ${radius} is : ${Math.PI * Math.pow(radius, 2)} `);

//5
let distance = prompt(" //5 Type here  the distance !");
let time = prompt(" Type here  time in hours that you have for this road !");
console.log(`The speed you should move is ${distance / time} km/hour `);
//6
const euro = 1.12;
let dollars = prompt(" //6 Type here how much dollars you have");
console.log(`It will be  ${dollars / euro}  euro `);
//7
let gb_size = prompt(" //7 Type here  size in GB");
console.log(`It will be  ${Math.floor(gb_size * 1024 / 820)}  files `);

//8  

let money = prompt(" //8 Type here  how much money you have for chocolate");
let price_one = prompt(" Type here  how much cost one pice of chocolate");
console.log(`You can by   ${Math.floor(money / price_one)} chocolates and you will leave in your pocet  ${money % price_one}  `);

//9

let number = prompt(" //9 Type here  number for reverse");
console.log(Array.from(number));
let Arr_to = Array.from(number);

var reversed = Arr_to.reverse().join("");

console.log('Reversed number:', reversed);
//10  с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

let deposit = prompt(" //10   Type here  deposit duration for two mounth");
console.log(` The money You will earn in future is  ${deposit * (0.05 / 6)}`);











