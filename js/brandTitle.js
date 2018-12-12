$(function () {
    render()
    function render() {
          $.ajax({
              url:'http://127.0.0.1:9090/api/getbrandtitle',
              dataType:'json',
              success:function (info) {
                  // console.log(info);
                  var htmlStr=template('tmp',info)
               $('.category_title').html(htmlStr)
              }

          })

        
    }
    
    
    
})