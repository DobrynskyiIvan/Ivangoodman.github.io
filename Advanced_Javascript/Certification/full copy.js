//===============================================without first
// function SubString(someString) {
//     let arraYStrings=someString.split(' ');
//     return arraYStrings.map(el=>el.substring(1)).join(' ')    
// }
// let substr="Adg rfefoiern Wfkdf I ggegf IJFjjjf"
// console.log(SubString(substr));


// function upperCaseString(someString) {
//     let arraYStrings=someString.split(' ');
//     return arraYStrings.filter(el=>el===el.toUpperCase()).join(' ');
// }
// let substr="ADG rfefoiern Wfkdf IFF ggegf IJFjjjf"
// console.log(upperCaseString(substr));


//=====================1. Дано текст, який може містити коми, крапки і пробіли, крім слів. Вивести список унікальних слів.
 
// function uniceString(someString) {
//     let arraYStrings=someString.split(' ');
//     return [...new Set(arraYStrings)].join(' ');
// }
//   let substr="Дано текст, який може містити коми, який може містити коми крапки і пробіли, крім слів. Вивести список унікальних слів Вивести список"
//   console.log(uniceString(substr));


//=========================2.  Дано текст, який може містити коми, крапки і пробіли, крім слів. Вивести найдовше слово.
// const re = /\s*(?:;|$)\s*/;
// function longestString(someString) {
//     let arraYStrings=someString.split(' ');
//     return  arraYStrings.sort((a,b)=>b.length-a.length)[0];
// }
//   let substr="Дано текст, який може містити коми, який може містити коми крапки і пробіли, крім слів. Вивести список унікальних слів Вивести список"
//   console.log(longestString(substr));


// //=========================2.   math pow x y.
// const re = /\s*(?:;|$)\s*/;
// function mathpow(x,y) {
    
//     return   Math.pow(x,y);
// }
 
//   console.log(mathpow(3,4));
//==========================================Calculate string
// function calculateString(someString) {
//     let arraYStrings=someString.split('+');
//     return  arraYStrings.reduce((a,b)=>+a+(+b));
// }
//   let substr="3+4+5+6";
//   console.log(calculateString(substr));

//========================================= count the same
// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Tiff', 'Bruce', 'Alice'];
// function keyValue(someString) {
//   return  someString.reduce((acc,item)=>{
//         if(item in acc){
//             acc[item]++;
//         }
//         else
//         acc[item]=1;
//         return acc;
//     },{})
  
// }
// console.log(keyValue(names));

//===================4. Дано список емейлів. Порахувати, скильки повторюються більше, ніж 2 рази.
// const array = [
//     'artytt@gmail.com',
//     'artytt@gmail.com',
//     'second@gmail.com',
//     'second@gmail.com',
//     'third@gmail.com',
//     'third@gmail.com',
//     'third@gmail.com'
//   ];
//   function find_duplicate_in_array(arra1) {
//     var object = {};
//     var result = [];

//     arra1.forEach(item=>{ 
//         object[item] =(object[item]|| 0)+1   }
//        )

//     for (var prop in object) {
//        if(object[prop] >= 2) {
//            result.push(prop);
//        }
//     }

//     return result;

// }
// console.log(find_duplicate_in_array(array));

//===================================================is Reverse
// function IsReverse(arr,arr2) {
   
//   console.log( arr.every((val, index) => val === arr2.reverse()[index]));
// }
// let str='Arr Bra Kra';
// let str1='Kra Bra Arr';
//  IsReverse(str.split(' '),str1.split(' '))

 //====2. Дане число 13345, зробити з нього 1, 3, 3, 4, 5

//  var n =  123456789;
//  var digits = (""+n).split('').map(Number);
//  console.log(digits);
let arr=[1,2,3,4,5];
let arr2=[6,7,7,7,7];
 arr.splice(2,0,...arr2) ;
 console.log(arr);

 //Write a function absoluteSum that takes an array of integers (positive or negative or both) and returns the sum of the absolute value of each element. 
function absoluteSum(arr){
    return arr.map(el=>Math.abs(el)).reduce((a,b)=>a+b);
}


//====Imagine you have a function primitiveMultiply that returns multiplication of two numbers only in 50% cases, in other cases throws an error. Write a wrapper function reliableMultiply(primitiveMultiply, number1, number2) that accepts primitiveMultiply function and two numbers and runs it until it returns correct answer.
function reliableMultiply(primitiveMultiply, number1, number2){
    // if(number1*number2==primitiveMultiply(number1, number2)){
        return number1*number2;
   // }
}

	
const person = { name: 'Arnold' };
function fn(salut, lastName)  {
    console.log(salut, this.name, lastName);
}
const bindName = bind(fn, person, 'Mr');

bindName('Helgov')
///Mr Arnold Helgov
//=======Implement your variant of ‘bind’ function which accepts the next arguments: a function, a context and arguments that will be passed into the function with new context.
function bind(funct,context ){
  
  var bindArgs = [].slice.call(arguments, 2);
  return function() {
     
    var fnArgs = [].slice.call(arguments);
     
    return fn.apply(context, bindArgs.concat(fnArgs));
  };
}
