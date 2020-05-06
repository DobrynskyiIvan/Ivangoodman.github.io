$(document).ready(function () {
    $(".page").click(function () {
        $(".page").removeClass('pageActive');
        $(this).addClass('pageActive');
        $(".context").removeClass("active");
        $(this).parent().siblings().eq($(this).index()).addClass('active')

    });

    $(".fa ").click(function () {

        $(this).toggleClass('check');
    });


});