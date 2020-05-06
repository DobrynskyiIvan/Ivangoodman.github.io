// let currentDroppable = null;
let container = document.getElementById("container");
mover.onmousedown = function (event) {

    let shiftX = event.clientX - mover.getBoundingClientRect().left;
    let shiftY = event.clientY - mover.getBoundingClientRect().top;
    console.log(`shiftX: ${shiftX},shiftY: ${shiftY}`)
    console.log(`event.clientX:  ${event.clientX},event.clientY:   ${event.clientY}  `)
    console.log(`ball.getBoundingClientRect().left:  ${mover.getBoundingClientRect().left}, ball.getBoundingClientRect().top:   ${ mover.getBoundingClientRect().top}  `)
    console.log(`event.pageX:  ${event.pageX},event.pageY:   ${event.pageY}  `)

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        mover.style.left = pageX - shiftX + 'px';
        mover.style.top = pageY - shiftY + 'px';
        container.style.width = pageX - shiftX - 10 + 'px';
        container.style.height = pageY - shiftY - 10 + 'px';

    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

    }

    document.addEventListener('mousemove', onMouseMove);

    mover.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        mover.onmouseup = null;
    };

};

mover.ondragstart = function () {
    return false;
};
let elem = document.getElementById("container");

function createMessageUnder(elem, html) {
    // создаём элемент, который будет содержать сообщение
    let message = document.createElement('div');
    // для стилей лучше было бы использовать css-класс здесь
    message.style.cssText = "position:fixed; color: blue";

    // устанавливаем координаты элементу, не забываем про "px"!
    let coords = elem.getBoundingClientRect();

    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + +"px";

    message.innerHTML = html;

    return message;
}

// Использование:
// добавим сообщение на страницу на 1 секундУ
let message = createMessageUnder(elem, 'You start move!');
mover.addEventListener("click", function () {
    container.append(message);
    setTimeout(() => message.remove(), 1000);
});