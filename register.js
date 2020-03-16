$(function(){
    $("#btnR").click(function(){
        if(!validate('#username') || !validate('#phone') || !validate('#pwd') || !validate('#code')) return;

        $("#jud").html('注册成功！');
    });

    $("#tip").hover(function(){
        $(this).attr("src","http://sc.adminbuy.cn/uploads/allimg/160421/1-1604211629180-L.png")
    },function(){
      $(this).attr("src","http://sc.adminbuy.cn/uploads/allimg/160421/1-1604211629320-L.png")
    });

    $("#username").focusout(function(){
        validate("#username");
    });

    $("#phone").focusout(function(){
      validate("#phone");
    });

    $("#pwd").focusout(function(){
      validate("#pwd");
    });

    $("#code").focusout(function(){
      validate("#code");
    });

    function validate(field) {
        var $data    = $(field),
            $message = $(field + '-validate'),
            label    = $(field).attr('data-label');
    
        if($data.val() === '') {
          $message.html(label + '不能为空！');
          $data.attr("style","border:1px solid red");
          return false;
        }
    
        if(field==="#username" && !/^(?!(\d+)$)[\u4e00-\u9fff\w]+$/.test($data.val())) {
          $message.html(label + '仅支持中英文、数字和下划线，且不能为纯数字');
          $data.attr("style","border:1px solid red");
          return false;
        }
        
        if(field==="#phone" && !/^[1][3,5,7,8][0-9]{9}$/.test($data.val())){
          $message.html(label + '码格式不正确');
          $data.attr("style","border:1px solid red");
          return false;
        }
        
        if(field==="#pwd" && !/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test($data.val())){
          $message.html(label + '格式不正确');
          $data.attr("style","border:1px solid red");
          return false;
        }

        if(field==="#code" && !/^\d{4,6}$/.test($data.val())){
          $message.html(label + '格式不正确');
          $data.attr("style","border:1px solid red");
          return false;
        }

        $data.attr("style","");
        $message.html('');
        return true;
    };

    $("#btn").click(function(){
        var num=60;
        $("#btn").attr("disabled","disabled");
        var t = setInterval(function(){
          $("#btn").html("重发验证（"+num+"）");
          num--;
          if(num==-1){
            $("#btn").html("重发验证");
            $("#btn").attr("disabled",false);
            $("#code-validate").html("请求超时，请稍后再试");
            clearInterval(t);
          }       
         },1000);
    });
});