if($.isReady) {
    console.log(".isReady says the DOM is ready! To party!")
} else {
    console.log('.isNotReady :(')}
document.addEventListener('DOMContentLoaded', function() {
    console.log("Let's get ready to party with vanilla JS!")
})
$(console.log("The DOM is ready. Let's get ready to party with jQuery!"))

$('article').attr('class', 'image-center');
// $('article').addClass('image-center');

$('p').eq('5').remove();
// $('article p:lastChild').remove();

$('#title').css('font-size', Math.random()*100);

$('ol').append('<li>Whatever you want</li>');

$('aside').html("").append('<p>This is a long and lengthy and wordy and, perhaps even, verbose paragraph prepared as an apology for the former, and now removed, list of thoughts, which once resided in this position.</p>');

$('input.form-control').on("change click keyup", function() {
    let $red = $('input.form-control').eq(0).val();
    let $green = $('input.form-control').eq(1).val();
    let $blue = $('input.form-control').eq(2).val();

    $('body').css('background-color', `rgb(${$red}, ${$green}, ${$blue})`)
})

$('img').on('click', function(){
    $(this).remove()
});