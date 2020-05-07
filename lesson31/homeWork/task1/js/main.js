$(document).ready(function () {
    $('.page:first-child').addClass('pageActive');
    $('.context:first').addClass("active");

    $(".page").click(function () {
        ////========   option with index =========
        // $(".page").removeClass('pageActive');
        // $(this).addClass('pageActive');
        // $(".context").removeClass("active");
        // $(this).parent().siblings().eq($(this).index()).addClass('active');



        //////============   option with id and class ======    


        $('.page').removeClass('pageActive');
        $(this).addClass('pageActive');
        const activeTab = $(this).attr('href');

        $('.context').removeClass('active')
        $(activeTab).addClass('active');



    });



    $(".fa ").click(function () {

        $(this).toggleClass('check');
    });


});