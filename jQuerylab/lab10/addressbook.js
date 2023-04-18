$(function () {

    $("#add").on('click', function () {
        console.log("hi")
        let name = $("#name").val()
        let phone = $("#phone").val()
        let address = $("#address").val()
        // console.log(`${name}${phone}${address}`);
        $("tbody").append(`<tr>
        <td>${name}</td>
        <td>${phone}</td>
        <td>${address}</td>
        <td>
            <button class="del">Delete</button>
        </td>
        </tr>`)
        $("#name").val("")
        $("#phone").val("")
        $("#address").val("")
    })
    $("tbody").on('click', ".del", function () {
        console.log("clicked")
        $(this).closest('tr').remove();
    })
})