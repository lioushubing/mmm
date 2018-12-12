$(function () {
             tit()
    function tit() {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getgsshop',
            dataType:'json',
            success:function (info) {
                console.log(info);
                var htmlStr=template('tmp',info)
                $('.jindo').html(htmlStr)
            }




        })


    }
             list()
    function list() {
        $.ajax({
            url:"http://127.0.0.1:9090/api/getgsshoparea",
            dataType: "json",
            success:function (info) {
                console.log(info);
                var htmlStr=template('tmp2',info)
                console.log(htmlStr);
                $('.hua').html(htmlStr)

            }
        })
    }
     // 点击那个那个显示其他隐藏
    var shopid=0
    var areaid=0
  render(shopid,areaid)
    function render(shopid,areaid) {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{
                shopid:shopid,
                areaid:areaid
            },
            dataType:'json',
            success:function (info) {
                console.log(info);
                var htmlStr=template('tmp3',info)
                $('.product_list ul').html(htmlStr)
            }



        })
    }









    var  lis= $('.list>ul>li')
    var a=true
    var b=true
    var c=true
    var e=true
    var u=true
      $('.list').on('click',".on:nth-child(1)",function () {
          // alert(11)
      //    展示自己 隐藏他人
          if(e){
              $(this).find(' ul li i').eq(0).addClass('active')
          }

          if (a){
              console.log(this);
              $(this).siblings().find('ul').removeClass('show')
              $(this).find('ul').addClass('show')
               b=true
              c=true
              a=false
          }else {
            $(this).find('ul').removeClass('show')
              a=true
          }



      })

    $('.list').on('click',".on:nth-child(2)",function () {
        console.log(u);
        if(u){
            $(this).find(' ul li i').eq(0).addClass('active')
        }


        // alert(11)
        //    展示自己 隐藏他人

        if (b){
            console.log(this);
            $(this).siblings().find('ul').removeClass('show')
            $(this).find('ul').addClass('show')
            c=true
            a=true
            b=false
        }else {
            $(this).find('ul').removeClass('show')
            b=true
        }



    })

    $('.list').on('click',".on:nth-child(3)",function () {
        // alert(11)
        //    展示自己 隐藏他人
        if (c){
            console.log(this);
            $(this).siblings().find('ul').removeClass('show')
            $(this).find('ul').addClass('show')
            b=true
            a=true
            c=false
        }else {
            $(this).find('ul').removeClass('show')
            c=true
        }



    })
//   添加√

    $('.list').on('click','.on:nth-child(1) ul li',function () {

    e=false
        // alert(11)
        $(this).siblings().find('i').removeClass('active')
        shopid=$(this).data('id')
        render(shopid,areaid)
        $(this).find('i').addClass('active')
       $('.on:nth-child(1)>a').text($(this).find('a').text())

    })

    $('.list').on('click','.on:nth-child(2) ul li',function () {
        u=false
        // alert(11)
        $(this).siblings().find('i').removeClass('active')
        areaid=$(this).data('id')
        render(shopid,areaid)
        $(this).find('i').addClass('active')
        // console.log(;?
      $('.on:nth-child(2)>a').text($(this).find('a').text().slice(0,2))
    })



    // 渲染列表


})