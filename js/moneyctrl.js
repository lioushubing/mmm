$(function () {
  var page=1
    render()
    alert(11)
    function render() {
        $.ajax({
            url:'http://mmb.ittun.com/api/getmoneyctrl',
            dataType:'json',
            data:{
                pageid:page
            },
            success:function (info) {
                console.log(info);

            }



        })
    }




})