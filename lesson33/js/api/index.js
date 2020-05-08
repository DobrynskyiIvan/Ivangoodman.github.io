let url = null;

function setUrl(name, number) {
    url = `http://www.omdbapi.com/?apikey=b386ffd7&s=${name}&page=${number}`;

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