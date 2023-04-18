$(function () {
    //因手機, 少用,雙擊
    $('#btn').dblclick(function () {
        console.log("double clicked")
    })
    //因手機, 少用, 右鍵
    $('#btn').contextmenu(function () {
        console.log("right clicked")
    })
    //按下瞬間觸發
    $("#btn").mousedown(function () {
        console.log('mouse down')
    })
    //
    $("#btn").mouseup(function () {
        console.log('mouse up ')
    })


    let count_overout = 0;
    $("div.overout").mouseover(function () {
        count_overout += 1;
        $(this).find('span').text('mouse over:' + count_overout)
    })

    let count_enterleave = 0;
    $("div.enterleave").mouseenter(function () {
        count_enterleave += 1;
        $(this).find('span').text('mouse enter;' + count_enterleave)
    })
})