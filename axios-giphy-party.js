const $searchForm = $('#searchForm');
const $searchBar = $('#searchBar');

async function getGif (userSearch) {
    const res = await axios.get( 'http://api.giphy.com/v1/gifs/search', {params : {api_key: "69cGf65rTyIhYpmgk7VlRg9Ftv02C3ZE", q: userSearch }})
    const gif = res.data.data[Math.floor(Math.random() * 10)];
    const gifURL = gif.images.original.url;
    $("#gifDisplay").append(`<img src= "${gifURL}" class="gif">`);
}

$("#searchBttn").on('click', function(event) {
    event.preventDefault();
    
    let userSearch = $searchBar.val();
    getGif(userSearch);
    
    $searchBar.val("");
})

$("#deleteBttn").on('click', function(e) {
    e.preventDefault();
    $("#gifDisplay").empty();
})