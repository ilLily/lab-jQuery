$(function () {
    // console.log($('*'));
    // console.log($('h1'));
    // console.log($(".list"));
    // console.log($("#li1"));

    //Filter

    // $("li:eq(1)").css("color", "red");
    // $("li:even").css("background", "pink");
    // $("li:odd").css("background", "yellow");
    // // ===lt(n) < index n的要變 lower than (index from 0)===
    // $("li:lt(3)").css("font-size", "1.5rem");
    // // ===gt(n) < index n的要變 greater than (index from 0)===
    // $("li:gt(6)").css("color", "gray");
    // $("li:first").css("font-weight", "bold");
    // $("li:last").css("font-weight", "bold");
    // $("li:not(.not)").css("background-color", "lightblue");

    // === select from different list
    $('li:first-child').css("background", "pink").on("mouseover", function () {
        $(this).css("font-size", "2rem");
    }).on("mouseleave", function () {
        $(this).css("font-size", "1rem")
    });
    $('li:nth-child(3)').css("background", "yellow");
    $('li:only-child').css("background", 'green');

    $('.list li:nth-child(2)').css("background", "gray");
    // $('.list li:not(.not)').css('background', 'blue');
    $('ul:not(.list) li:not(.not)').css('background', "red");
    // $('ul.list li:not(.not)').css('background', "red");
    // ==wrong example==
    // $(".list>li:eq(2)").css("background-color", "orange");
    // $(".list").($(this).eq(3)).css("background-color", "pink");

    //content Filter ()

    $('p:parent').css("background", 'lightblue');
    //含文字
    $('p:contains("Hello")').css('background', 'lightgreen');
    //含標籤
    $('p:has(span)').css('background', 'pink');
    //含內文的
    // $('p:parent').css("background", 'lightblue')
    //沒有內容的
    $('p:empty').text('empty text').css("background", "yellow");

    //filtering
    $("td:eq(2)").css('background', 'pink');
    $("td").eq(4).css('background', 'yellow');
    $('td').first().css("background", "lightblue");
    $("td").last().css("background", "green");
    $("td").not(".not").css("font-size", "1.5rem")
    // ==not done==
    // $("td").even("box-shadow", "3px 3px 5px gray")
})