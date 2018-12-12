$(function () {
 var str=location.search
    console.log(str);
     str= str.split('=')[1]
    console.log(str);
    render()
    function render() {
        $.ajax({
             url:'http://127.0.0.1:9090/api/getbrand',
            data:{
                brandtitleid:str
            },
            dataType:'json',
            success:function (info) {
                // console.log(info);
                var htmlStr=template('tmp',info)
                $('.sign ul').html(htmlStr)
                // console.log();
                $('span.info').text(info.result[0].brandName.slice(2))


            }



        })


    }
     list()
    function list() {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getbrandproductlist',
            data:{
                brandtitleid:str,
                pagesize:4
            },
            dataType:'json',
            success:function (info) {
                console.log(info);
                var htmlStr=template('tmp2',info)
                $('.content ul').html(htmlStr)




            }
        })

    }
    comm()
    function comm() {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getproductcom',
            dataType:'json',
            data:{
                productid:str
            },
            success:function (info) {
                if(info.result.Array!==0){
                console.log(info);
                var htmlStr=template('tmp3',info)
                $('.comment_list ul').html(htmlStr)}

            }



        })
    }

    list2()
    function list2() {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getbrandproductlist',
            data:{
                brandtitleid:str,
                pagesize:4
            },
            dataType:'json',
            success:function (info) {
                console.log(info);

          if(info.result.length==0){
              $('.comment_list').html('')
              return
          }
             var htmlStr=template('tmp4',info.result[0])
                console.log(htmlStr);
             $('.comment_list .top').html(htmlStr)


            }
        })

    }




})