$(function () {
       tit()
    function tit() {
        $.ajax({

            url:'http://127.0.0.1:9090/api/getcategorytitle',
            dataType:'json',
            success:function (info) {
                console.log(info);
                var htmlStr=template('tmp1',info)
                $('.category ul').html(htmlStr)
                var f=true

                $('.category').on('click','.category-li>a',function () {
                    // alert(11)
                    var xi=$(this).next()
                    // console.log();
                    if(f){


                        var id=$(this).data('id')
                        console.log(id);
                        $.ajax({
                            url:'http://127.0.0.1:9090/api/getcategory',
                            data:{
                                titleid:id
                            },

                            dataType: 'json',
                            success:function (info) {
                                console.log(info);
                                var htmlStr=template('tmp2',info)
                                xi.html(htmlStr)



                            }
                        })

                        $(this).next().show()
                        f=false
                    }else {
                        $(this).next().hide()
                        f=true
                    }


                })
            }
        })
    }







})