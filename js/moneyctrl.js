$(function () {
  var page=1
    var pages
    render()
    // alert(11)
    // alert(11)
    function render() {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getmoneyctrl',
            dataType:'json',
            data:{
                pageid:page
            },
            success:function (info) {
                console.log(info);
                // alert(11)
            $('.discount ul').html(template('tmp',info))
            //    渲染分页  当前页 和 总页数


             pages=Math.ceil(info.totalCount/info.pagesize)
                // console.log(pages);
                var htmlStr=template('tmp2',{
                    page:page,
                    pages:pages
                })
               $('#select').html(htmlStr)

            }



        })
    }
    // alert(11)
    var $left=$('#left')
    var $right=$('#right')
    // console.log($left);
    $left.on('click',function () {
        // alert(111)

        if (page<=1){

            return
        }
        page--
        render()
    })
    $right.on('click',function () {
        // alert(122)


        if(page>=pages){

            return
        }
        page++
        render()
    })




//    渲染分页
    $('#select').change(function () {
        page=$('#select').val()
        render()

    })





})