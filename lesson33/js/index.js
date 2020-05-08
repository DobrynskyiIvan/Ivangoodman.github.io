$(document).ready(function () {

    $(".submit").click(function (e) {
        e.preventDefault();
        let someText = $(".inputValue").val();
        console.log(someText)

        let name = someText;
        let page = 2;

        $.getScript('js/api/index.js', function () {
            setUrl(name, page)
            ajaxCall(setSliderItems);
        });

    });



    function setSliderItems(data) {
        // let List = data.map(item => {
        //     return `<div class=" item"> "${item.Awards}"  </div>`;
        // });

        // $('contentr').append(List.join(''));
        console.log(data)
        console.log(data.totalResults / 10)

    }
});