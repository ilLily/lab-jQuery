$(function(){
    $(".checkbox").on('click', function(){
        // $(this).parent().parent().toggleClass('active')
        let checked= $(this).prop('checked')
        if(checked){
            $(this).closest('tr').addClass('active')
        }else{
             $(this).closest('tr').removeClass('active')
             $("#checkAll").closest('tr').removeClass('active')
        }

        // if all content checked, th auto check
        let contentLength = $('tr.active').length;
        if(contentLength == 3){
            console.log('== 3')
            $("#checkAll").prop('checked', true);
            $("#checkAll").closest('tr').addClass('active')
        }else{
            console.log('less than 3')
            $("#checkAll").prop('checked', false);
            $("#checkAll").closest('tr').removeClass('active')
        } 
    })

    
    

    $("#checkAll").on('click', function(){
        let checked= $(this).prop('checked');
        if(checked){
             $(".checkbox").prop('checked',true);
             $('.content').addClass('active')
            //  $("#checkAll").closest('tr').addClass('active')
        }else{
            $(".checkbox").prop('checked',false);
            $('.content').removeClass('active')
            // $("#checkAll").closest('tr').removeClass('active')
        }
    })
})
