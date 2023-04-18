$(function () {
    $(window).resize(resize_img);
    // resize_img();
    function resize_img() {
        let winWidth = $(window).width();
        let winHeight = $(window).height();
        let divWidth = $(".resize").width();
        let divHeight = $(".resize").height();
        let left = (winWidth - divWidth) / 2;
        let top = (winHeight - divHeight) / 2;
        $('.resize').css({
            left: left,
            top: top
        })
    }
    console.log($("#p"))
    let p = $("#p")

    $("#p").text(`innerWidth:${p.innerWidth()},outerWidth:${p.outerWidth()},outerWidth(true): ${p.outerWidth(true)
        }`)
})