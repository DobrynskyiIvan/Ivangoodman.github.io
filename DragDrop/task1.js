function resizer(div) {
    let elem = document.getElementById(div);
    let res = document.getElementById("mover");


    res.addEventListener('mousedown', function (e) {

        e.preventDefault();
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize)

    })

    function resize(e) {
        if (e.target.classList.contains('resize_right')) {
            elem.style.width = e.pageX - elem.getBoundingClientRect().left + 'px';
            elem.style.height = e.pageY - elem.getBoundingClientRect().top + 'px';
        }
        if (e.target.classList.contains('resize_top')) {
            elem.style.width = e.pageX - elem.getBoundingClientRect().left + 'px';
            elem.style.height = e.pageY - elem.getBoundingClientRect().bottom + 'px';
        }

    }

    function stopResize() {
        window.removeEventListener('mousemove', resize)
    }

}
resizer("container");