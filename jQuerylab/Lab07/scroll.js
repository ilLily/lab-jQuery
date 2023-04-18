$(function(){
    $(".con").scroll(function(){
        console.log(`scrollTop:${$(this).scrollTop()},scrollleft:${$(this).scrollLeft()} `)
    })
    let bodyHeight= $("body").height();
    let winHeight=$(window).height();
    $(window).scroll(
        function(){
            let nowscrollTop = $(this).scrollTop();
            let scrollPercent = Math.round(nowscrollTop/(bodyHeight - winHeight)*100)+"%";
            $('.progress-percent').css("width", scrollPercent);
        })
    $("#btn").on('click',function(){
        //$(window).scrollTop(0);
        $("html,body").animate({
            scrollTop: 0
        }, 2900)
    })
})