let name = "Black";
let page = 2;

const url = `http://www.omdbapi.com/?apikey=b386ffd7&s=${name}&page=${page}`;


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