$(document).ready(function () {

    $.getScript('js/api/index.js', function () {

        ajaxCall(setSliderItems);
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