$(function () {
    //===text()===
    let content = $('#source').text();
    $("#getText").on('click', function () {
        console.log(content);
    });

    $("#setText").on('click', function () {
        $("#target").text(content);
        // $("#target").append(content)
    });
    //===html()====
    $("p").on('click', function () {
        console.log($('p').html());
        let htmlContent = $('p').html();
        $(this).text(htmlContent);
    })
    //===val()===
    $("#calc").on('click', function () {
        let anum = parseInt($("#anum").val())
        let bnum = parseInt($("#bnum").val())
        let todo = $("#todo").val()
        let calcResult = 0;
        switch (todo) {
            case "+":
                calcResult = anum + bnum;
                break;
            case "-":
                calcResult = anum - bnum;
                break;
            case "*":
                calcResult = anum * bnum;
                break;
            case "/":
                calcResult = anum / bnum;
                break;
        }
        // if (todo === "+") {
        //     calcResult = anum + bnum
        // } else if (todo === "-") {
        //     calcResult = anum - bnum
        // } else if (todo === "*") {
        //     calcResult = anum * bnum
        // } else if (todo === '/') {
        //     calcResult = anum / bnum
        // }
        $("#result").val(calcResult);

    })
})
