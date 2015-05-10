$.getJSON('https://erebus-regner.c9.io/questions/random/', function(data){
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var html = template(data);

    $('#game-container').append(html);

    $('.choice').click(function(){
        var selected_answer = $(this).attr('value');
        var correct_answer = String(data['answer']);

        if(selected_answer == correct_answer){
            $(this).css('background-color', 'green');
            location.reload();
        }
        else{
            $(this).css('background-color', 'red').delay(400).fadeOut(400);
        };
    });
});
