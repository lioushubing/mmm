$(function () {
   var str= location.search;
    console.log(str);
    str= str.split('=')
   var num=str[1]
   var  id=str[0].slice(1)
    // console.log(str)
    //渲染标题
    byId()
    function byId() {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getcategorybyid',
            data:{
                categoryid:num
            },
            dataType:'json',
            success:function (info) {
                // console.log(info.result[0])

                $('.prompt').text(info.result[0].category).attr('href','productlist.html?categoryid='+info.result[0].categoryId)
            }




        })



    }

//    渲染分页
   var  pageid=1//当前页
    render()
    function render() {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getproductlist',
            data: {
                categoryid:num,
                pageid:pageid
            },
            dataType: 'json',
            success:function (info) {
                console.log(info)
                var htmlStr=template('tmp',info)
                $('.discount ul').html(htmlStr)
            //   制作分页
                //总页
                 pages=  Math.ceil(info.totalCount/info.pagesize)
               var str=template('tmp2',{
                   pageid:pageid,
                   pages:pages
               })
                console.log(str);
                $('#select').html(str)


            }
        })




    }



//    点击上下页
    var $left=$('#left')
    var $right=$('#right')
    // console.log($left);
    $left.on('click',function () {
        // alert(111)

      if (pageid<=1){

          return
      }
      pageid--
        render()
    })
    $right.on('click',function () {
        // alert(122)


        if(pageid>=pages){

            return
        }
        pageid++
        render()
    })




//    渲染分页
    $('#select').change(function () {
       pageid=$('#select').val()
        render()

    })



})