$(function () {
    $("#gt").on("click", function () {
        $('#div1>p').css("background", "pink")
    })
    $("#space").on("click", function () {
        $('#div1 p').css("background", "yellow")
    })
    $("#plus").on("click", function () {
        $('#div1+p').css("background", "yellow")
    })
    $("#wave").on("click", function () {
        $('#div1~p').css("background", "lightgreen")
    })
})