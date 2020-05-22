$(document).ready(function () {

    //start searching
    $(".submit").click(function (e) {
        e.preventDefault();
        $('.display').empty();
        let name = $(".inputValue").val();
        let type = document.getElementById('type').value;

        $.getScript('js/api/index.js', function () {
            setUrl(name, type);
            ajaxCall(setFilmItems, pagesSelect);
        });

    });


    function setFilmItems(data) {
        if (data.Response == "True") {

            let list = data.Search;

            let obj = list.map(item => {
                return `<div  class="item"><span class="icon-heart" value="${item.imdbID}"></span> <img id="${item.imdbID}"  alt="${item.Title}"  src="${item.Poster}"> </div>   `;
            });
            $('.display').append(obj.join(''));

        } else {
            $('.display').append(`<p ">Try to change Your search information !!!</p>`);
            console.log(data.Error);
        }
        $('.filmDetails').empty();
    }

    //show pages when select 
    $(".countOfPages").change(function (e) {
        e.preventDefault();
        $('.display').empty();
        console.log(e.target.value);
        let page = e.target.value;
        $.getScript('js/api/index.js', function () {
            setPage(page);
            ajaxCall(setFilmItems);
        });
    });

    function pagesSelect(data) {
        let pagesCount = Math.round(data.totalResults / 10);
        $('.countOfPages').empty();
        for (let i = 1; i <= pagesCount; i++) {
            $('.countOfPages').append(` <option value="${i}">${i}</option>`);
        }
    }
    /// ========== show direct film
    function filmSelect(item) {
        let info = `  
        <div class="short">
        <a target="_blank" class="fancybox"
            href=" ${item.Poster}">
            <img src=" ${item.Poster}"
                itemprop="image" class="poster poster-tooltip">
        </a>
    </div>
    <div class="full">
        <div class="top-date">Released: ${item.Released} </div>
        <div class="name-block">
            <h2 class="name" itemprop="name"><a class="btn-tooltip">Title: ${item.Title}  </a></h2>
            <div class="origin-name">Runtime: ${item.Runtime} </div>
        </div>
        <div class="itemSel category"><span>Genre:</span>  ${item.Genre} </div>
        <div class="itemSel year"> <span>Year:</span> ${item.Year}
        </div>
        <div class="itemSel rating"><span> imdbRating:</span> ${item.imdbRating}
        </div> 
        <div class="itemSel translate"><span> Language</span>: ${item.Language} </div>
        <div class="itemSel actors"><span> Director:</span> ${item.Director}</div>
        <div class="itemSel actors"><span>Actors:</span>  ${item.Actors}
        </div>
        <p itemprop="description">Plot: ${item.Plot} </p>

    </div>`;
        $('.filmDetails').empty();
        $('.filmDetails').append(info);
    }



    let session = {
        'screens': [],
    };



    // =========    showing current film information 
    $('.display').click(function (e) {
        console.log(e.target.id);
        e.preventDefault();

        if ($(e.target).hasClass("icon-heart")) {
            let id = $(e.target).attr("value");
            if ($(e.target).hasClass("active")) {

                const index = session.screens.indexOf(id);
                if (index > -1) {
                    session.screens.splice(index, 1);
                }

            } else {

                if (!session.screens.includes(id)) {
                    session.screens.push(id);
                }

            }
            $(e.target).toggleClass("active");
            localStorage.setItem('session', JSON.stringify(session));
        } else if (!$(e.target).hasClass("icon-heart")) {
            $.getScript('js/api/index.js', function () {
                setFilm(e.target.id);
                ajaxCall(filmSelect);
            });
            $('html, body').animate({
                scrollTop: $('.filmDetails').offset().top
            }, 2000);

        }
    });



    ////========= Show Favorite movies===

    function showFavorite(item) {
        let info = `<div  class="item"><span class="icon-heart active" value="${item.imdbID}"> <img id="${item.imdbID}"  alt="${item.Title}"  src="${item.Poster}"> </div>   `;
        $('.display').append(info);

    }

    $(".favorite").click(function (e) {
        $('.filmDetails').empty();
        $('.display').empty();
        e.preventDefault();
        var restoredSession = JSON.parse(localStorage.getItem('session'));
        console.log(restoredSession);

        $.getScript('js/api/index.js', function () {
            for (let i of restoredSession.screens) {
                console.log(i);
                setFilm(i);
                ajaxCall(showFavorite);
            }
        });
    });



});