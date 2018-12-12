$(function () {
  var str=location.search
    console.log(str);
     str=str.split('=')[1]
    console.log(str);
     rerder()
     function rerder() {
         $.ajax({
             url:'http://127.0.0.1:9090/api/getdiscountproduct',
             dataType:'json',
             data:{
                 productid:str
             },

             success:function (info) {
                 console.log(info);
                 var htmlStr=template('tmp',info)
                 $('#content').html(htmlStr)

             }

         })

     }



})