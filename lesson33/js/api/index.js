let url = null;
let _name = null;
let _type = null;

function setUrl(name, type) {
    url = `http://www.omdbapi.com/?apikey=b386ffd7&s=${name}&type=${type}`;
    _name = name;
    _type = type;
}

function setPage(number) {
    url = `http://www.omdbapi.com/?apikey=b386ffd7&s=${_name}&type=${_type}&page=${number}`

}


function ajaxCall(callback) {
    $.ajax({
        url,
        dataType: 'json',
        success: function (data) {
            if (callback) {
                callback(data);
            }
        },
        error: handleError
    });
}


function handleError() {
    console.error('Something wrong!');
}