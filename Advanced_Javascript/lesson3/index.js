
///======Task 1====
/*  Начальные 3 цифры в каждом номере - это код оператора
 Сделать вывод  в консоль таким
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/
let st = `063-111-1234
(333) 456-8768
4446575547`;

function replace(str){
  let  regexp=/\(?(?<first>[0-9]{3})\)?([ .-]?)(?<second>[0-9]{3})([ .-]?)(?<third>[0-9]{4})/g
    // let regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
 console.log(str.replace(regexp, '($<first>) $<second> $<third >'))  
   
}
replace(st);


/// ===== Task 2====
let button=document.getElementById("btn");
 button.addEventListener('click',task2);


function task2() {
    const el = document.getElementById("out");
    let string=el.outerHTML;
  
   el.innerHTML=string.replace(/javascript\b/g, "JAVASCRIPT");
 
 
};
 

//////====== task 3 =======
/* 
Код работает, но не защищен - клментский код может удалить элементы массива  из-вне
Исправить этот недостаток -----DONE!!
*/

function getUsers() {
    const users = ["Bill"];
    return {
      addUser: function(name) {
        users.push(name);
        return users;
      },
      getUsers: function() {
        return users.slice() ;
      }
    };
  }
  
  const u = getUsers();
  u.addUser("Paul")  ;
  u.addUser("Paul");
  console.log(u.getUsers()); // выведется [ 'Bill', 'Jim', 'Paul' ]
  
  u.getUsers().pop(); // удаляем 2-й элемент массива
  console.log(u.getUsers()); //  ['Bill', 'Jim']



  //////======== Task 4====
  /*
Реализовать функцию bind которая должна работать так как показано в usage
Не использоапть ES 6
Подсказка - нужно использовать arguments, apply, closure (замыкания)
*/

const user = {
    firstName: "Bill"
  };
 
  function add(a, b, c) {
    return `${this.firstName} adds ${a + b + c}`;
  };


  function bind(fn, args) {

    let outerArgs = [].slice.call(arguments, 2);
  
    return function() {
  
      const innerArgs = [].slice.call(arguments);
  
      const allArgs = outerArgs.concat(innerArgs);
  
      return console.log(fn.apply(args, allArgs));
  
    };
  
  }

 
  
  
  // usage
  console.log("[1]:",bind(add, user)(1, 2, 3)); // Bill adds 6
  console.log("[2]:",bind(add, user, 1)(2, 3)); // Bill adds 6
  console.log("[3]:",bind(add, user, 1, 2, 3)()); // Bill adds 6
  console.log("[4]:",bind(add, user, 1, 2, 3)(4, 5, 6)); // Bill adds 6




