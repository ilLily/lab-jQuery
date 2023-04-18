$(function () {
    //多個事件綁同一個函數
    // $("#btn").on('click mouseenter contextmenu', function(){
    //     console.log('123')
    // })
    //多個事件綁多個函數
    // $("#btn").on({
    //     click:function(){
    //         console.log("click");
    //     }, dblclick: function(){
    //         console.log('dblClick');
    //     }, contextmenu: function(){
    //         console.log('right click')
    //     }
    // })
    let sayHello = function () {
        console.log("hello")
    }
    $("#on").on('click', function () {
        //當我點on btn時, hello btn 綁定sayhello函式
        $("#hello").on("click", sayHello)
    })
    $("#off").on("click", function () {
        //當我點off btn時, hello btn 移除綁定sayhello函式
        $("#hello").off("click", sayHello)
    })
    $("#one").one('click', function () {
        console.log("one")
    })
    // $("li").on("click", function () {
    //     console.log('123')
    // })
    let num = 3
    $("#add").on('click', function () {
        $("ul").append(`<li>item ${num}</item>`);
        num += 1;
    })
    $('ul').on('click', "li", function () {
        console.log('123');
    })
})