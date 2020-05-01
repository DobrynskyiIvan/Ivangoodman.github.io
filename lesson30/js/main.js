/// ===============================       Task ------->  1 =============================================
let page = document.getElementById("task1");
let textfield = document.getElementById("textfield");


document.addEventListener('keydown', function (event) {
    if (event.key == '+' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        textfield.style.display = "none";
        page.style.display = "block";
        page.textContent = `${textfield.value}`;
    }

    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        textfield.style.display = "block";
        page.style.display = "none";
        event.preventDefault();
        textfield.value = `${page.textContent}`;

    }
});
//=============== END OF TASK 1 =======================


// ===========         Task ------>  2         =============
// clas of object User
class User {
    constructor(name, age, country) {
        this.name = name;
        this.country = country;
        this.age = age;
    }
};
// list of users
let usersList = [
    new User("Maria Anders", 31, "Germany"),
    new User("Francisco Chang", 23, "Mexico"),
    new User("Roland Mendel", 26, "Austria"),
    new User("Helen Bennett ", 30, "UK"),
    new User("Yoshi Tannamuri", 28, "Canada"),
    new User("Giovanni Rovelli", 25, "Italy")
]
// placeHolder for list 
let table = document.body.children[1].children[1];

//class for list description  and sort
class UserTable {
    constructor(arrUsr, plaseHolder) {
        this.userArray = arrUsr;
        this.plaseHolder = plaseHolder;

    }
    getHtml() {
        this.plaseHolder.innerHTML = "";
        for (let i of this.userArray) {
            this.plaseHolder.innerHTML += `   <tr  >
            <td> ${i.name}</td>
            <td>${i.age}</td>
            <td> ${i.country}</td>
        </tr>`;
        }

    }
    sortInArray(itemName) {
        this.userArray.sort(function (a, b) {
            if (a[itemName] > b[itemName]) {
                return 1;
            }
            if (a[itemName] < b[itemName]) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });

        this.userArray.forEach(element => {
            console.log(element)
        });
    }


};

// new table that contains users in table
let Agroup = new UserTable(usersList, table);
Agroup.getHtml();
//event listener for sort table
let tableList = document.body.children[1];
tableList.addEventListener('click', function (event) {
    if (event.target.id == "userAge") {
        Agroup.sortInArray("age");
    }
    if (event.target.id == "userName") {
        Agroup.sortInArray("name");
    }
    if (event.target.id == "userCountry") {
        Agroup.sortInArray("country");
    }
    Agroup.getHtml();

});



//=======================  END OF TASK 2    =========================


//========================  TASK ----> 3 ================

function makeResizableDiv(div) {
    const element = document.querySelector(div);
    const resizers = document.querySelector('.resizer')


    resizers.addEventListener('mousedown', function (e) {
        e.preventDefault()
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
    })

    function resize(e) {
        if (resizers.classList.contains('resizer')) {
            element.style.width = e.pageX - element.getBoundingClientRect().left - 40 + 'px'
            element.style.height = e.pageY - element.getBoundingClientRect().top - 40 + 'px'
        }
    }

    function stopResize() {
        window.removeEventListener('mousemove', resize)
    }

}

makeResizableDiv('.resizable')