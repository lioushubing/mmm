$(function () {
    var str=location.search
    console.log(str);
   str=str.split('=')[1]
    console.log(str);
            reder()
   function reder() {
       $.ajax({
           url:'http://127.0.0.1:9090/api/getcouponproduct',
           dataType:'json',
           data:{
               couponid:str
           },
           success:function (info) {
               console.log(info);
               //获得不同的img图片
               var imgs=[]
               for(var i = 0; i < info.result.length; i++) {
                    imgs[i]=info.result[i].couponProductImg
               }
               console.log(imgs);


               $('#content').html(template('tmp',info))

               $('#content').on('click','img',function () {
                   var i=0
                   // alert(11)
                       $('#mo .pic').html(imgs[i])
                   $('#mo').show()
                   $('#mo').on('click',function () {
                       $('#mo').hide()
                   })
                   $('#mo .fa').on('click',function (event) {



                       event.stopPropagation()
               })


                   $('#mo .arrow_left').on('click',function () {
                       if(i<0){
                           return
                       }

                       i--
                       $('#mo .pic').html(imgs[i])
                   })

                   $('#mo .arrow_right').on('click',function () {
                       if(i>imgs.length-1){
                           return
                       }

                       i++
                       $('#mo .pic').html(imgs[i])
                   })




               })





           }





       })
   }





})