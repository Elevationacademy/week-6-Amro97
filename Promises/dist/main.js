const wordPromise = $.get('/randomWord')
wordPromise.then(function (word) {

    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${word}`,
        success: function (response) {
            const title = response.items[0].volumeInfo.title
            const author = response.items[0].volumeInfo.authors
            $('body').append(`<h5>${title} by ${author}</h5>`)
        }
    })

    // $.ajax({
    //     method: "GET",
    //     url: `api.giphy.com/v1/stickers/http://api.giphy.com/v1/gifs/random?api_key=${word}`,
    //     success: function (response) {
    //         console.log(response)
    //     }
    // })
})