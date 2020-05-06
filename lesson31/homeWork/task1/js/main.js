$(document).ready(function () {
    $(".page").click(function () {
        $(".page").removeClass('pageActive');
        $(this).addClass('pageActive');


    });

    $(".fa ").click(function () {

        $(this).toggleClass('check');
    });


});