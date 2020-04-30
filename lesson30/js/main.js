/// Task ------->  1
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



document.addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event)

});