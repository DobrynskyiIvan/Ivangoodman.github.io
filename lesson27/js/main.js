//#region  1 Task 1

//constructor to create a product object
function Product(name, price, alreadyByed) {
    this.name = name;
    this.price = price;
    this.alreadyByed = alreadyByed;
};

// few examples for start
let apple = new Product("Apple", 120, true);
let banan = new Product("Banan", 340, true);
let jam = new Product("Cherry", 240, false);
let fruits = [];
fruits.push(banan);
fruits.push(apple);
fruits.push(jam);

// function that show You list of items 
function showList() {
    for (i = 0; i < fruits.length; i++) {
        if (fruits[i].alreadyByed == true) {
            console.log(` You byed already: ${fruits[i].name} for: ${fruits[i].price} uah `)
        } else {
            console.log(`You haven't byed yet:${fruits[i].name} for: ${fruits[i].price} uah`)
        }
    }
}
//function that match items as already byed
function matchAsByed(params) {
    for (i = 0; i < fruits.length; i++) {
        if (fruits[i].name == params) {
            fruits[i].alreadyByed = true;
            console.log(`You match:${fruits[i].name} for:${fruits[i].price} as  already Byed`)

        }
    }
}
// adds item to the list if exist or create new one if not
function addToByList(obj) {
    let result = false;
    for (i = 0; i < fruits.length; i++) {
        if (fruits[i].name == obj.name) {
            fruits[i].alreadyByed = true;
            fruits[i].price += obj.price;
            console.log(`You add:${fruits[i].name} to already exists  for y:${fruits[i].price} uah  as  Byed`);
            result = true;
        }
    }
    if (result == false) {
        fruits.push(obj);
        showList();
    }
};

//start the all operations of the task
let continueWorkWithList;
do {
    let listOperations = prompt("Enter digit to add new item:[1], show all list: [2],  match As Byed: [3]");
    switch (listOperations) {
        case "1":
            let Name = prompt("enter the name of product");
            let Price = +prompt("enter the price of product");
            let AlreadyByed = (prompt("enter if the product alreay byed[1] or not[0]")) == true ? true : false;
            addToByList(new Product(Name, Price, AlreadyByed));
            break;
        case "2":
            showList();
            break;
        case "3":
            let name = prompt("enter the name of product You already byed:");
            matchAsByed(name);
            break;
        default:
            console.log("not one of this")
            break;
    };
    continueWorkWithList = (prompt("Would You like to continue Yes:[1] if Not:[0]")) == true ? true : false;

} while (continueWorkWithList == true);
//#endregion


//#region Task 2
let product = [{
        name: "Banan",
        elements: 3,
        price: 340
    },
    {
        name: "Apple",
        elements: 2,
        price: 140
    },
    {
        name: "Kiwi",
        elements: 5,
        price: 220
    }

];

//Total price counter;
let priceCounter = 0;
//Total element counter
let elementCounter = 0;
let maxPrice = product[0].elements * product[0].price;
//loop for program
for (let i = 0; i < product.length; i++) {

    if (maxPrice < (product[i].elements * product[i].price)) {
        maxPrice = (product[i]);
    }
    priceCounter += (product[i].elements * product[i].price);
    elementCounter += product[i].elements;
}



let text = "Enter digit to Распечатка чека на экран:[1], Подсчет общей суммы покупки;: [2],  Получение самой дорогой покупки в чеке: [3]  Подсчет средней стоимости одного товара в чеке: [4]";

let continueWorkWithCheck;
do {
    let listOperations = prompt(text);
    switch (listOperations) {
        case "1":
            for (let i in product)
                console.log(product[i]);
            break;
        case "2":
            console.log(`The all prise in check is:${priceCounter}`);
            break;
        case "3":
            console.log(`The max prise is: ${maxPrice.name} have elements:
            ${maxPrice.elements} with price per one:${maxPrice.price}
            in total: ${maxPrice.price*maxPrice.elements} $`);
            break;
        case "4":
            console.log(`middle ckeck prise is: ${priceCounter/elementCounter} $`);
            break;
        default:
            console.log("not one of this")
            break;
    };
    continueWorkWithCheck = (prompt("Would You like to continue Yes:[1] if Not:[0]")) == true ? true : false;

} while (continueWorkWithCheck == true);

//#endregion