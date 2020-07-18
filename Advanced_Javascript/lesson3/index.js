
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




