$(function(){

    // 搜索框
    $(".search-box>input").click(function(){
        $(".searchC-type").css("display","block")
        $(".search-box>input").animate({
            width:290,
            paddingLeft:0
        },500)
        $(".search-icon").attr("src","../images/icon/enter.png")
        $(".search-icon").animate({
            left:150
        },500)
        $(".user-in").animate({
            opacity:0
        },500)
        $(".searchC>hr:first").animate({
            width:290,
            opacity:1
        },500)
        $(".searchC").animate({
            height:500
        },500)
        $(".searchC-type,.searchC-h4,.searchC-hot,.searchC-tip").animate({opacity:1},500)
    })
    $(".topNav-top-box,.cic,.bodyC-box").click(function(){
        $(".searchC-type").css("display","none")
        $(".search-box>input").animate({
            width:200,
            paddingLeft:30
        },500)
        $(".search-icon").attr("src","../images/icon/sea.png")
        $(".search-icon").animate({
            left:0
        },500)
        $(".user-in").animate({
            opacity:1
        },500)
        $(".searchC>hr:first").animate({
            width:0,
            opacity:0
        },500)
        $(".searchC").animate({
            height:0
        },500)
        $(".searchC-type,.searchC-h4,.searchC-hot,.searchC-tip").animate({opacity:0},500)
    })

    // 展开和关闭顶部导航栏的更多按钮
    var index=0;
    $("#more").click(function(){
        if(index==0){
            $(".moreC-box").animate({height:400},1000);
            $(".moreC-box").css("display","block");
            $("#close").animate({
                bottom:-40
            },1000)
            $(".moreC").animate({opacity:1},1000)
            index = 1;
        }else{
            $(".moreC-box").animate({height:0});
            $(".moreC").animate({opacity:0},1000)
            $("#close").animate({
                bottom:-300
            },1000)
            index = 0;
            setTimeout(function(){
                $(".moreC-box").css("display","none")
            },400)
        }
    });
    $("#close").click(function(){
        $(".moreC-box").animate({height:0});
        $(".moreC").animate({opacity:0},1000)
        $("#close").animate({
            bottom:-300
        },1000)
        index = 0;
        setTimeout(function(){
            $(".moreC-box").css("display","none")
        },400)
    });

    // 顶部更多导航展开后的分类
    $(".moreC-type>a").click(function(){
        $(this).attr("class","current").siblings().attr("class","");
        $(".moreC-content>div").eq($(this).index()).show().siblings().hide();
    })
        
})