function ShowDiv(data){
    var html="";
    if(data.s.length){
        for( var i=0;i<data.s.length;i++){
            html+="<li><a href='http://www.baidu.com/s?wd="+data.s[i]+"'>"+data.s[i]+"</a></li>"
        }
        $(".info").show().html(html);
        $(".info>li").click(function(){
            var keyword=$(this).text();
            location.href="http://www.baidu.com/s?wd="+keyword+""
        })
        //$(document).delegate("li","click",function(){
        //    var keyword = $(this.text);
        //    location.href="http://www.baidu.com/s?wd="+keyword+""
        //})
        $(".info li").hover(function(){
            $(this).addClass('curr').siblings().removeClass("curr")
        })

    }else{
        $(".info").hide()
    }
}


$(document).ready(function(){


$(".inpt>input").bind({ "keyup":function(event){
    var jqinput = $(this);
    var txt = jqinput.val();
    var qsData = { 'wd': txt, 'cb':"ShowDiv"};
    $("#btn1").attr("href","http://www.baidu.com/s?wd="+txt+"");


//if(txt != ""){
//    var oscript = $("<script></script>").attr("src","http://suggestion.baidu.com/su?wd="+txt+"&cb=ShowDiv");
//    $("body").append(oscript);
//
//}else{
//    $(".info").hide()
//}
    if(event.keyCode == 40){

        if($(".info li").hasClass("curr")){
            moveNext();
        }else{
            $(".info li").removeClass("curr").eq(0).addClass('curr');
        }


    }else if(event.keyCode == 38){
          movePrev()
    }else if(event.keyCode == 13){

           dojob()
    }
    else {

        $.ajax({
            async: false,
            url: "http://suggestion.baidu.com/su",
            type: "GET",
            dataType: 'jsonp',
            jsonp: 'callback',
            data: qsData,
            timeout: 5000,
            success: function (json) {
            },
            error: function (xOptions, textStatus) {
                console.log(textStatus);
            }
        });


    }


},"click":function(event){
    event.stopPropagation();
    return false;
}
});

$(document).click(function(){
    $(".info").hide()
});


    var moveNext = function(){
        var index = $(".curr").prevAll().length;

        if(index == $(".info li").length-1){
            $(".info li").removeClass('curr').eq(0).addClass('curr');
        }else{
            $(".info li").removeClass('curr').eq(index+1).addClass('curr');
        }

    }


     var movePrev = function(){
         var index = $(".curr").prevAll().length;

         if(index== 0 ){
             $(".info li").removeClass('curr').eq($(".info li").length-1).addClass('curr');
         }else{
             $(".info li").removeClass('curr').eq(index-1).addClass('curr');
         }
     }
    var dojob = function(){
        var txt = $(".inpt>input").val()
        location.href="http://www.baidu.com/s?wd="+txt+""
    }



})

