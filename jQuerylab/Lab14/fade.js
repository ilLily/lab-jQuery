$(function(){
    //hide()show()
    $('#hide').on('click', function(){
        $('.box').hide();
    })
    $('#show').on('click', function(){
        $('.box').show();
    })
    //fadeIn() fadeOut()
    $('#fadeIn').on('click', function(){
        $('.box').fadeIn();
    })
    $('#fadeOut').on('click', function(){
        $('.box').fadeOut(1000, function(){
            $('#fadeOut').text('its gone');
        });
    })
    $('#fadeToggle').on('click', function(){
        $('.box').fadeToggle();
    })
    //slideUp() slideDown()
    $('#slideUp').on('click', function(){
        $('.box').slideUp();
    })
    $('#slideDown').on('click', function(){
        $('.box').slideDown();
    })

    $('#moveRight').on('click', function(){
        $('.box').animate({
            left:500,
            width: 500,
            height: 500,
            'border-radius':'50%'
        })
    })
    $('#moveLeft').on('click', function(){
        $('.box').animate({
            left:0,
            width: 200,
            height: 200,
            'border-radius':'0'
        })
    })
})