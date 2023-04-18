$(function () {
    let i = 1;
    $("#append").on('click', function () {
        let content = `<tr><td>${i}</td><td></td><td></td></tr>`
        $()
        i++;
        $("tbody").append(content);
    })

    $("#prepend").on('click', function () {
        let content = `<tr><td>${i}</td><td></td><td></td></tr>`
        i++;
        $("tbody").prepend(content);
    })
    $("#appendTo").on('click', function () {
        $('#move').appendTo("tbody");
    })
    $("#prependTo").on('click', function () {
        $('#move').prependTo("tbody");
    })
    $("#after").on('click', function () {
        $("#move").after(`<tr><td>${i}</td><td></td><td></td></tr>`)
        i++;
    })
    $("#before").on('click', function () {
        $("#move").before(`<tr><td>${i}</td><td></td><td></td></tr>`)
        i++;
    })
    $("#insertAfter").on('click', function () {
        $(`<tr><td>${i}</td><td></td><td></td></tr>`).insertAfter('#move')
        i++;
    })
    $("#insertBefore").on('click', function () {
        $(`<tr><td>${i}</td><td></td><td></td></tr>`).insertBefore('#move')
        i++;
    })
    //empty()清空tbody裡的內容
    $("#empty").on("click", function () {
        $('tbody').empty();
    })
    //remove()連Tbody都刪掉
    $("#remove").on("click", function () {
        $('tbody').remove();
    })

})