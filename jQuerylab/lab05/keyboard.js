$(function(){
    // $("#input").keyup(function(){
    //     $("#target").text($(this).val());
        
    //     // console.log(event.which)
    // })

    // $("#input").keydown(function(){
    //     $("#target").text($(this).val());
    // if (event.ctrlKey && event.altKey){
    //     console.log('ctrl+alt')
    // }
    // })

     $("#input").keypress(function(){
        $("#target").text($(this).val());
    })
})