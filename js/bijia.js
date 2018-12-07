$(function () {
//    获取id
    var str=location.search
    console.log(str);
    str=str.split('&')
    console.log(str);
    var str1=str[0].split('=')
    var categoryid=str1[1]
    str=str[str.length-1].split('=')
    console.log(str);
    var productid=str[1]
    console.log(productid);
    console.log(categoryid);

    byid()
     function byid() {
         $.ajax({
             url:'http://127.0.0.1:9090/api/getproduct',
             dataType:'json',
             data:{
                 productid:productid,
                 categoryId:categoryid

             },
             success:function (info) {
                 console.log(info);
                 var str=info.result[0].productName
                 console.log(str);
                 str=str.split(' ')
                 console.log(str);

                 var htmlStr=template('tmp',info)
                 $('.product').html(htmlStr)
                 $('#href').html(str[0])
             //    京东商城
               console.log(info.result[0].bjShop);
                 $('.price').html(info.result[0].bjShop)
                 console.log(info);

             }

         })

}
    comment()
     function comment() {
        $.ajax({
            url:"http://127.0.0.1:9090/api/getproductcom",
            data:{
                productid:productid
            },
            dataType: "json",
            success:function (info) {
                console.log(info);
                var htmlStr=template('tmp2',info)
                $('.comment').html(htmlStr)

            }


        })


     }

    com()
    function com() {
        $.ajax({
            url:'http://127.0.0.1:9090/api/getcategorybyid',
            data:{
                categoryid:categoryid
            },
            dataType: "json",
            success:function (info) {
                console.log(info);

                var str1=info.result[0].categoryId
               var  name =info.result[0].category
                var str='productlist.html?categoryid='+str1
              $('#din2').text(name+">").attr('href',str)
                console.log(name+">");
                console.log(str1);
            }


        })


    }




})