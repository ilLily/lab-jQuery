$(function () {
    $("#checkedBtn").on("click", function () {
        console.log('123')
        console.log($(":checked"))
    })
    $("#selectBtn").on("click", function () {
        console.log($(':selected').css("background", "pink"))
    })
    $("#disableBtn").on("click", function () {
        console.log($(':disabled'))
    })
})


