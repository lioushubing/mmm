$(function () {

             render()
    function render() {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getinlanddiscount',
            dataType:'json',
            success:function (info) {
                var arr=info.result
                 info.obj=arr.splice(0,4)
                 $('#lista').html(template('tmp',info))
                //边滚动便计算滚动剧院

                $(window).on('scroll',function () {
                    var liH=$('.list ').height()
                    // console.log(liH);
                    var wh= $(window).height()
                    var oh=$(window).scrollTop()
                    // console.log(oh);
                  var height=$('.tit').offset().top+liH-wh-oh;
                    console.log(height);
                    if(height<100){
                   info.obj=arr.splice(0,2)
                        console.log('jhj');
                        $('#lista').append(template('tmp',info))
                    }

                })



            }
        })
    }
})