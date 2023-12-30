$('#subBttn').on('click', function() {
    let title = $('#titleInput').val();
    let rating = $('#ratingInput').val();
    
    if(title.length < 2 || !(0 <= rating && rating <= 10 )){
        alert('Title must be at least two characters in length and rating must be between 0-10')
    }
    else {
        let $movie = $(`<li>Title: ${title} <br> Rating: ${rating}</li>`)
        let $delBttn = $(`<br><button id="delBttn">Delete</button>`)

        $($movie).append($delBttn);
        $('#movieList').append($movie);
    }
    $('#movieList').on('click', '#delBttn', function() {
        console.log(this)
        $(this).parent().remove();
        })
})



