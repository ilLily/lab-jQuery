//氣象局授權碼
//Pw: weather1234
//CWB-F048E042-7FB2-405C-96C2-C8371052BC84

$(function(){
    let url="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F048E042-7FB2-405C-96C2-C8371052BC84&format=JSON";
    $('#btn').click(function(){
        $.ajax({
            url: url, //ajax 請求路徑
            DataType: 'json',
            success: function(response){
                console.log(response);
                // console.log(response.records.location);
                $.each(response.records.location, function(index,ele){
                    // console.log(ele.locationName)
                    // console.log(ele.weatherElement[0].time[0].startTime)
                    // console.log(ele.weatherElement[0].time[0].parameter.parameterName)
                    $('#data').append(`
                        <li>${ele.locationName}</li>
                        <li>${ele.weatherElement[0].time[0].startTime}</li>
                        <li>${ele.weatherElement[0].time[0].parameter.parameterName}</li>
                 `
                    )
                })
            }
        })
    })
})