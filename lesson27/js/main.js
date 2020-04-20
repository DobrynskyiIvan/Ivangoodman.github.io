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