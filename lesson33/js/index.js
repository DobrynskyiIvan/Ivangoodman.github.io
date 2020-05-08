$(document).ready(function () {

    $(".submit").click(function (e) {
        e.preventDefault();
        let name = $(".inputValue").val();
        let type = document.getElementById('type').value;

        $.getScript('js/api/index.js', function () {
            setUrl(name, type)
            ajaxCall(setSliderItems);
        });

    });


    // $(".next").click(function (e) {
    //     e.preventDefault();
    //     $.getScript('js/api/index.js', function () {
    //         setUrl(name, page)
    //         ajaxCall(setSliderItems);
    //     });

    // });

    function setSliderItems(data) {
        let list = data.Search
        let obj = list.map(item => {
            return `<div class="item"> <img  src="${item.Poster}"> </div>   `;
        });
        // ${item.Title} 

        $('.dispay').append(obj.join(''));
        // console.log(data)
        // console.log(obj)
        // console.log(data.Search)
        let pagesCount = Math.round(data.totalResults / 10);
        for (let i = 0; i < pagesCount; i++) {
            $('.countOfPages').append(` <option value="${i}">${i}</option>`);
        }
    }


    $(".countOfPages").change(function (e) {
        e.preventDefault();
        console.log(e.target.value)
        page = e.target.value;
        $.getScript('js/api/index.js', function () {
            setPage(page)
            ajaxCall(setSliderItems);
        })


    });
});