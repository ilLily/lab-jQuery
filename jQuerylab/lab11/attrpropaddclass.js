$(function(){
    //attr() removeAttr()
    $('#getAttr').on('click', function(){
        let img_alt = $('#img').attr('alt');
        let img_title =$('#img').attr('title');
        console.log(`alt:${img_alt}, title:${img_title}`)
    })
    $('#setAttr').on('click', function(){
        $('#img').attr({
             src:'',
            title:null
        })
    })
    $('#removeAttr').on('click', function(){
        $('#img').removeAttr('title')
        console.log($('#img').attr("title"))
        console.log($('#img').attr("src"))
        console.log($('#img').attr("a"))
    })

    //prop() =>return boolean or set  //propertyName ex:check/disable
    $('#getProp').on('click', function(){
        let checked = $('#checkbox').prop('checked')
        console.log(checked);
    })
    $('#setProp').on('click', function(){
        $('#checkbox').prop('checked', true);
    })

    //enable a button when checkbox is checked
    $('#checkbox').on('click', function(){
        let checked = $(this).prop("checked");
        // if (checked){
        //     $("#confirm").prop("disabled", false)
        // }else{
        //     $("#confirm").prop("disabled", true)
        // }
        $('#confirm').prop('disabled', !$(this).prop('checked'))
    })
    //addClass() removeClass() toggleClass
    $('#addClass').on('click', function(){
        $('.box').addClass("active")
    })
    $('#removeClass').on('click', function(){
        $('.box').removeClass("active")
    })
    $('#toggleClass').on('click', function(){
        $('.box').toggleClass("active")
    })

})