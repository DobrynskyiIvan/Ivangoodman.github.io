// =============clas of object Dish
class Dish {
  constructor(name, price, img, category) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.category = category;
  }
}
// =============list of dishes
let dishesList = [
  new Dish("Овсяная каша с фруктами", 25, "i/im1.jpg", 1),
  new Dish("Яичница глазунья с овощами на сковородке", 25, "i/im2.jpg", 1),
  new Dish("Сет азербайджанский завтрак", 30, "i/im3.jpg", 1),
  new Dish(" Яичница с помидорами по-бакински", 45, "i/im4.jpg", 3),
  new Dish(" Сырники со сметаной", 45, "i/im5.jpg", 1),
  new Dish(" Шпинатный крем-суп", 50, "i/im6.jpg", 2),
  new Dish("Суп Пити", 85, "i/im7.jpg", 2),
  new Dish("Борщ украинский", 95, "i/im8.jpg", 2),
  new Dish("Суп Кюфта Бозбаш", 100, "i/im9.jpg", 2),
  new Dish("Картофель фри", 125, "i/im10.jpg", 3),
  new Dish("Картофель по-домашнему", 135, "i/im11.jpg", 3),
  new Dish("Рис с овощами", 150, "i/im12.jpg", 3),
];

// placeHolder for list

let table = document.querySelector(".grid-box");

//======= shows output HTML

function getHtml(arrDishes) {
  table.innerHTML = "";
  for (let i of arrDishes) {
    table.innerHTML += `<div class="product-box__item">
   <h3 class="product-box__title"> ${i.name}</h3>
   <div class="product-box__img">
     <img class="img-fluid" src=${i.img} />
   </div>
   <div id=${i.category} class="product-box__meta">
     <p>${i.price} грн.</p>
     <div class="qty">
       <input class="qty__item" type="number" /> Кол
     </div>
     <button class="product-box__btn">Добавить</button>
   </div>
 </div>`;
  }
  buttonEventListener();
  inputListener();
}

//// ============function that shows how the list must be filtered
function filterbySelect() {
  let foodCategory = document.querySelector(".filter-box").children[0]
    .children[1].value;
  let foodPrice = document.querySelector(".filter-box").children[1].children[1]
    .value;
  let newArr = dishesList;
  let displayFilter = newArr.filter((item) => {
    if ((foodCategory == 0) & (foodPrice == 0)) {
      return item;
    } else if (foodCategory == 0) {
      return item.price < foodPrice;
    } else if (foodPrice == 0) {
      return item.category == foodCategory;
    }
    return (item.category == foodCategory) & (item.price < foodPrice);
  });

  getHtml(displayFilter);
}
getHtml(dishesList);


// ======== start filtration after select
let filterSelect = document.querySelectorAll(".select-control");
filterSelect.forEach((select) => {
  select.addEventListener("change", function (e) {
    filterbySelect();
  });
});

//======= Function for result output

function displayResults(count, total) {
  let displayForResults = document.querySelector(".top-cart-info__item");
  displayForResults.children[0].innerHTML = count;
  displayForResults.children[1].innerHTML = total;
}

 
function buttonEventListener(){
  let buttonConfirm = document.querySelectorAll(".product-box__btn");
  buttonConfirm.forEach((select) => {
    select.addEventListener("click", function (e) {
      e.preventDefault();
      let count = Number(e.target.previousElementSibling.children[0].value);
      let name = e.target.parentElement.parentElement.children[0].textContent;
      let price = Number(
        e.target.parentElement.children[0].textContent
          .slice(0, 3)
          .replace(/\s+/g, "")
      );
      if (count == 0) {
        count = 1;
      } 
  
      AddToCart(new ShoppingItem(name, price, count));
     
    });
  });
}

let shoppingCart = [];

class ShoppingItem {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

function AddToCart(obj) {
  let findExist = false;
  shoppingCart.map((item) => {
    if (item.name == obj.name) {
      item.count += obj.count;
      findExist = true;
      return;
    }
  });
  {
    !findExist && shoppingCart.push(obj);
  }
  showResultinBsket();
}

function showResultinBsket() {
  //Total price counter;
  let priceCounter = 0;
  //Total element counter
  let elementCounter = 0;

  //loop for program
  for (let i = 0; i < shoppingCart.length; i++) {
    priceCounter += (shoppingCart[i].count * shoppingCart[i].price);
    elementCounter += shoppingCart[i].count;
  }

  displayResults(elementCounter, priceCounter);
}

 

function chekInputValue(e) {
  let input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
}


function inputListener() {
  document.querySelectorAll(".qty__item").forEach((input) => {
    input.addEventListener("change", chekInputValue);
  });
}

let checkoutButton = document.querySelector(".btn-check");
checkoutButton.addEventListener("click",(e)=>{
   if(!document.querySelector(".modal")){
    showCkeckOutWindow()
   }
 
});


function showCkeckOutWindow() {
  let mainContainer = document.querySelector(".app-container");
 
  let newBox = document.createElement("div");
  newBox.className= "modalWindow";
  newBox.innerHTML = `<div id="modal" class="modal "> 
  <form class="user_form" name="sendForm" onsubmit="return  formValidation()" action="" method="get">
  <input   placeholder="Your name..."  type="text" name="nameInput" ></input>
    <input   placeholder=" email" type="email" name="emailInput"  ></input>
    <button type="submit" class="btn-check">Отправить </button> 
    </form>
</div>`;
  mainContainer.appendChild(newBox);
 
  setStyle(textStyle);
 
}

function formValidation() {
  let x = document.forms["sendForm"]["nameInput"].value;
  let email = document.forms["sendForm"]["emailInput"].value;
  if (x == "" || email == "") {
    alert("Form must be filled out");
    return false;
  } else alert("Thank You for chosing us!");
  displayResults("XXX", "XXX");
}


//Array of styles
let textStyle = [ 
   
{
  name: " position",
  value: "absolute"
},
{
  name: " top",
  value: "30%"
},
{
  name: " left",
  value: "30%"
},
{
  name: " right",
  value: "30%"
},{
  name: " bottom",
  value: "30%"
},
{
  name: " z-index",
  value: "1000"
},
{
  name: " text-align",
  value: "center"
},
{
  name: " border-radius",
  value: "10px"
},
{
  name: " align-items",
  value: "center"
},
{
  name: "display",
  value: "flex"
},
{
  name: "flex-direction",
  value: "column"
},
{
  name: "justify-content",
  value: "center"
},
 
{
  name: "background",
  value: "rgba(0,0,0,0.7)"
}
 
 
];
///================set current style for modal window
function setStyle(stylesArray){
  let newString = "";
  for (let i of stylesArray) {
      newString += `${i.name}:${i.value};`;
  };
  modal.style.cssText = newString;
 
};
//========close modal window
let workWindow=document.querySelector(".wrap");
workWindow.addEventListener('click',(e)=>{
  if(document.querySelector(".modal")){
    document.querySelector(".modalWindow").remove()
  }
  
})

 



