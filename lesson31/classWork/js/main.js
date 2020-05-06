$(document).ready(function () {
    $(".btn").click(function () {

        // $(this).addClass("active");
        $(this).toggleClass('active');
        console.log($(this).width())
        console.log($(this).height())
        console.log($(this).innerWidth())
    })
    // $(".btn").click(AddDiv);
    // $(".td").click(addToList);

    // function addToList() {
    //     let content = $(this).html();
    //     $("ul").append(`<li>${content}</li>`);
    //     $(this).prev().html(content).css({
    //         backgroundColor: "red"
    //     });
    //     $(this).next();



    // }
    // $(".td").hover(function () {
    //     // over
    //     $(this).css({
    //         backgroundColor: "yellow"
    //     })

    // }, function () {
    //     $(this).css({
    //         backgroundColor: "grey"
    //     })
    //     // out
    // });
    // $(".td").hover(function () {
    //     $(this).animate({
    //         width: '20px',
    //         height: '30px',
    //         opacity: '0.1'
    //     }, "slow")
    //     // over

    // }, function () {
    //     $(this).animate({
    //         width: '30px',
    //         height: '20px',
    //         opacity: '0.1'
    //     }, "slow")
    //     // out
    // });

    function AddDiv() {
        $(".div").html("<p>Hello</p>");
        $(this).hide(1000).delay(2000).show(1000);
        console.log("HTML", $(".div").html());
        $(".div").html(function () {
            return this.toString();
        });
        $(".div").text(" Hello ");


    }
    $(".td").slideDown();

})