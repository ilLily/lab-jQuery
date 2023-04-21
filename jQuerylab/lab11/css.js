$(function(){
    $('.circle').on('click',function(){
        let color = $(this).css("background-color");
        console.log(color);
        $('.target').css('background-color', color);
    })
    // keys
    // up:38
    // down:40
    // left : 37
    // right: 39

    //設定多個屬性
   
    document.onkeydown = function move(){
        switch(event.keyCode){
            case 39: //right
                $('.target').css({
                    left:"+=20",
                    background: "lightgreen" 
                })
                break;
            case 40: //down
                $('.target').css({
                    top:"+="+20,
                    background: "lightgreen" 
                })
                break;
            case 37: //left
                $('.target').css({
                    left:'-=20',
                    background: "lightgreen" 
                })
                break;
            case 38: //up
                $('.target').css({
                    top:"-="+20,
                    background: "lightgreen" 
                })
                break;
        }
    }
})