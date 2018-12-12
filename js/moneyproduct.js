$(function () {
    var id=location.search
    console.log(id);

    id=id.split('=')
    id=id[1]
    console.log(id);
    $.ajax({
        url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data:{
            productid:id
        },
        dataType:'json',
        success:function (info) {
            console.log(info);
            var htmlStr=template('tmp',info)
            $('.content').html(htmlStr)

        }





    })



    //
    //     productid






})