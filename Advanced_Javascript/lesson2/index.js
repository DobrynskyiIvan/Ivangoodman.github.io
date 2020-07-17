/*
При клике на любой элемент li мы в alert() получаем цифру 5
а по логике должны получать номер элемента на который кликнули

Задачи
1. С помощью debugger проанализировать почему так получается 
2. С помощью замыкания сделать так, чтобы при клике на элемент
   li получали его номер (let НЕ ИСПОЛЬЗОВАТЬ)
3. Выполнить задачу 2 но при этом используя объявление
   итерационной переменной через let 
   
*/

const list = document.getElementById("list"),
  els = list.getElementsByTagName("li");

for (var i = 0, len = els.length; i < len; i++) {
  els[i].onclick = function (e) {
    //   alert(i);
    //  console.log(e.target.textContent);
    alert(e.target.textContent);
  };
}

//=======Task 2====
/*
 * Написать функцию sum(a), которая должна вызываться как
 *    sum(a)(b)  и возвращать сумму двух чисел
 *   Например  sum(3)(1) -> 4  , sum(7)(-1) -> 6
 * */
function sum(a) {
  return (b) => a + b;
}

console.log("sum:", sum(2)(4));

///====Task 3===

/* /*
 * Создать функцию filter(arr, fn), которая
 *  - принимает в качестве аргументов массив arr и функцию fn
 *  - возвращает новый массив, который содержит только те элементы arr,  для которых fn возвращает true.
 */

const arr = [11, 66, 33, 44, 22, 55, 2];

function filter(arr, fn) {
  // to do

  return arr.filter((item) => fn(item));
}

// Проверка - вернуть массив с элементами значение которых больше 50
const filteredArr = filter(arr, function (item) {
  if (item > 50) {
    return item;
  }
  // to do
});

console.log(filteredArr); //   [66, 55]]
