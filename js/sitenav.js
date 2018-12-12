$(function () {
   render()

// alert(11)
function render() {
    $.ajax({
        url:'http://127.0.0.1:9090/api/getsitenav',
        dataType:'json',
        success:function (info) {
            // console.log(info);
            var htmlStr=template('tmp',info)
            $('.content ul').html(htmlStr)

        }


    })




}





})