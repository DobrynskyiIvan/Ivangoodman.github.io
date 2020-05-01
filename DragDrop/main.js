// let currentDroppable = null;
let container = document.getElementById("container");
ball.onmousedown = function (event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;


    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
        container.style.width = pageX - shiftX - 10 + 'px';
        container.style.height = pageY - shiftY - 10 + 'px';

    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

    }

    document.addEventListener('mousemove', onMouseMove);

    ball.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    };

};

ball.ondragstart = function () {
    return false;
};