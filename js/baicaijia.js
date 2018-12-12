$(function () {

  tit()
   function tit() {
     $.ajax({
         url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
          dataType:'json',
         success:function (info) {
             console.log(info);
             var w=0
             var i=0
             var htmlStr=template('tmp',info)
             $('#lista').html(htmlStr)
             $('#lista li a').eq(0).addClass('active')
             red()
             function red(){
                 $.ajax({
                     url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
                     data:{
                         titleid:i
                     },
                     dataType: "json",
                     success:function (info) {
                         console.log(info);
                         var htmlStr=template('tmp2',info)
                        $('.content ul').html(htmlStr)
                     }


                 })
             }
             $('#lista li a').on('click',function () {
                 $(this).addClass('active').parent().siblings().children('a').removeClass('active')
             //    发送ajax渲染

                  i=$(this).data('id')
                 console.log(i);
                 red()

             })

             $('#lista li').each(function (i,e) {
                w+= $(this).width()

             })
             $('#lista').width(w+1)
             new IScroll('#listb', {
                 scrollX: true,
                 scrollY: false
             });

         }

     })




   }





})