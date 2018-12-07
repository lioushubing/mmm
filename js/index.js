$(function () {
    row()
    function row() {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getindexmenu',
            dataType:'json',
            success:function (info) {
                // console.log(info)
                // var obj={list:info}
                var htmlStrr=template('tmp',info)
                 // console.log(htmlStrr);
                $('.row').html(htmlStrr)
                var more = $('.row li:nth-child(8)')
                // console.log(more);
                var f=true;
                more.on('click',function () {

                    if(f){
                        $('.row li[data-type="1"]').show()
                        f=false
                    }else {
                        $('.row li[data-type="1"]').hide()
                      f=  true
                    }




                    // alert(11)
                })


            }




        })
        
    }
    list()
    function list() {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getmoneyctrl',
            dataType: "json",
            success:function (info) {
                console.log(info);
                var htmlStr=template('tmp2',info)
                $('#more').html(htmlStr)



            }

        })

    }
  

})