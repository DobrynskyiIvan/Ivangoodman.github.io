$(document).ready(function () {
    $('.slider').slick({

        arrows: false,


        adaptiveHeight: true,

        dots: true,
        vertical: true,
        verticalSwiping: true,

    });
    $('.roolDown').click(function (e) {
        var jump = $(this).attr('href');
        var new_position = $(jump).offset();
        $('html, body').stop().animate({
            scrollTop: new_position.top
        }, 500);
        e.preventDefault();
    });



});