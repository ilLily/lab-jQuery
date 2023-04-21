$(function(){
    //each()
    let arr = ['Gary', 'ispan', '204', 'MFEE36']
    $.each(arr, function(index,ele){
        console.log(ele);
    })
    let sum = 0;
    $('td').each(function(){
        sum+= Number($(this).text())
    })
    console.log(sum);
    //data()
    $('.btn').on('click', function(){
        let age = $(this).data('age'), team= $(this).data('team'), name =  $(this).data('name')
        
        console.log(`${name} is ${age} and team is ${team}`)
    })
})