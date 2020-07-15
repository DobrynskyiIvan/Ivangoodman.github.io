// Написать функцию map, которая будет принимать в качестве
// аргумента массив arr и функцию, которая в свою очередь будет
// осуществлять преобразование массива arr  в вид
// [ "<li class="list-group-item">Tom</li>", ....]
// и выводить элементы массива в ul с id="list"
// Вывод должен осуществляться в отсортированном по алфавиту виде

let arr = ["Tom", "Steve", "Bill", "Rita", "Pete", "Ashley"];
const list = document.getElementById("list");

// Сигнатура map
function map(list, fn) {
  let str = "";
  fn(arr).forEach((element) => {
    str += element;
  });
  list.innerHTML = str;
}
function sort(array) {
  return array.sort().map((item) => `<li class="list-group-item">${item}</li>`);
}
map(list, sort);

///======== Task 2=====
/*
1.  В элемент select вывести сгруппированный возраст
    пользователей
То есть у нас 9 пользователей и их возраст 20, 30, 40
Элемент select должен получится таким

<select>
    <option value="-1">Choose age</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
</select>


2. При выборе соответствующего option осуществить вывод
    пользователей соответствующих выбранному возрасту
    в элемент <div id="res"></div>
То есть при выборе например 20 должны вывестись  John, Ashley, Willy
*/

const usersSelect = document.getElementById("users-select");
const res = document.getElementById("res");

let users = [
  { id: 1, name: "John", age: "20" },
  { id: 2, name: "Sasha", age: "30" },
  { id: 3, name: "Bill", age: "40" },
  { id: 4, name: "Ashley", age: "20" },
  { id: 5, name: "Rachel", age: "40" },
  { id: 6, name: "Tom", age: "30" },
  { id: 7, name: "Steve", age: "30" },
  { id: 8, name: "Jim", age: "40" },
  { id: 9, name: "Willy", age: "20" },
];
 

function selectOptions(arr, output) {
  let newArr = [];
  arr.map((item) => {
    if (!newArr.includes(item.age)) newArr.push(item.age);
  });
 
  let newOption = document.createElement("option");
  newOption.value = -1;
  newOption.innerHTML = `Choose age`;
  output.appendChild(newOption);
  newArr.forEach((item) => {
    let newOption = document.createElement("option");
    newOption.value = item;
    newOption.innerHTML = `${item}`;
    output.appendChild(newOption);
  });
}
selectOptions(users, usersSelect);

usersSelect.addEventListener("change", filterbySelect);
//default output
displayResult(users, -1);

function filterbySelect(e) {
  displayResult(users, e.target.value);
}

function displayResult(arr, value) {
  let str = "";
  arr.map((item) => {
    if (value == item.age) {
      str += `<p >${item.name}</p>`;
    } else if (value == -1) {
      str += `<p >${item.name}</p>`;
    }
  });

  res.innerHTML = str;
}
