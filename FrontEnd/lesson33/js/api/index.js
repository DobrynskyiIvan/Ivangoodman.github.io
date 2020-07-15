let url = null;
let _name = null;
let _type = null;

function setUrl(name, type) {
    url = `http://www.omdbapi.com/?apikey=b386ffd7&s=${name}&type=${type}`;
    _name = name;
    _type = type;
}

function setPage(number) {
    url = `https://www.omdbapi.com/?apikey=b386ffd7&s=${_name}&type=${_type}&page=${number}`

}

function setFilm(id) {
    url = `https://www.omdbapi.com/?apikey=b386ffd7&i=${id}`

}


function ajaxCall(callback, pageItems) {
    $.ajax({
        url,
        dataType: 'json',
        success: function (data) {
            if (callback) {
                callback(data);
                if (pageItems) {
                    pageItems(data);
                }

            }
        },
        error: handleError
    });
}


function handleError() {
    console.error('Something wrong!');
}