$(function(){
    //1.設定畫框樣式
    //2.放圖
    //3.設定分頁
    //4.移動圖片
    let index = 0
    let movepx = 0
    $('.pages li').eq(0).css('background-color', 'white');
    $('.pages li').on("mouseenter", function(){
        index = $(this).index();
        moveSlide();
    })

    $('#slideNext').on("click", function(){
        autoImg();
    })

    $('#slidePrev').on("click", function(){
        index --;
        console.log(index);
        if(index<0){
            index=4;
        }
        moveSlide();
    })

    setInterval(autoImg,3000);

    function autoImg(){
        index ++;
        if(index>=5){
            index=0;
        }
        moveSlide();
    }
    
    function moveSlide (){
        movepx = index * (-800);
        $('#slideImgs').css('left', movepx);
        $('.pages li').eq(index).css('background-color', 'white').siblings().css('background-color', 'transparent')
    }
})