$(function () {
    $("td").on('click', function () {
        // //所有td
        // $(this).css("background", "blue");
        // //td第一層children有box的
        // $(this).children('.box').css("background", "lightgreen");
        // //td下的所有子孫有box2的
        // $(this).find(".box2").css("background", 'gray');
        // $(this).nextAll().css("background", "orange")
        // $(this).nextUntil(".stop").css("background", "lightblue")
    })
    $("td").on('click', function () {
        //  $(this).parent().css('box-shadow', "3px 3px 3px gray")
        // })
        // $(".box").on("click", function () {
        //     //上去到table之前
        //     $(this).parentsUntil("table").css("font-weight", "bold")
        // })
        // $(".box2").on("click", function () {
        //     $(this).closest("tr").css("color", "red")
        // })
        //======waiting!!!!!!!!!!!==========
        // $(".box2").on("click", function () {
        //     $(this).cloest("tr").css("color", "red")
        // $(this).prev().css("font-weight", "bold");
        // $(this).prevAll().css("font-weight", "bold");
        // $(this).prevUntil(".stop").css("font-weight", "bold");

        //串連式寫法, end可以中止選擇器的位置
        // $(this).css('background', "white")
        //     .next().css('background', 'lightgreen')
        //     .prev().prev().css("background", 'yellow')

        // $(this).css('background', "white")
        //     .next().css('background', 'lightgreen')
        //     .end().prev().css("background", 'yellow')
        //siblings()
        // $(this).css("background", 'white').siblings().css('background', "pink")

    })
})