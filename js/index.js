$(function(){

    // 搜索框
    $(".search-box>input").click(function(){
        $(".searchC-type").css("display","block")
        $(".search-box>input").animate({
            width:290,
            paddingLeft:0
        },500)
        $(".search-icon").attr("src","images/icon/enter.png")
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
        $(".search-icon").attr("src","images/icon/sea.png")
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
            $("#close").css("display","block");
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

    // 首屏轮播图上一张下一张及定时器
    var imgindex = 0;
    var img = ['images/banner/banner-1.png',
               'images/banner/banner-2.png',
               'images/banner/banner-3.png'];
    $(".btn-back").click(function(){
        if(imgindex<0){
            imgindex=img.length-1;
        }
        $(".lunbotu img").attr("src",img[imgindex--])
    })
    $(".btn-next").click(function(){
        if(imgindex>img.length-1){
            imgindex=0;
        }
        $(".lunbotu img").attr("src",img[imgindex++])
    })
    setInterval(function(){

        if(imgindex>img.length-1){
            imgindex=0;
        }
        $(".lunbotu img").attr("src",img[imgindex++])

    }, 5000);

    // 首屏轮播图鼠标划入出现上一张下一张按钮
    $(".lunbotu").mouseover(function(){
        $(".btn-back").show()
        $(".btn-next").show()
    })
    $(".lunbotu").mouseout(function(){
        $(".btn-back").hide()
        $(".btn-next").hide()
    })

    // 首屏轮播图下方横向滑动的列表的 上3个和下3个及定时器
    var haudong = 0;
    var lunboimg = ['0px',
               '-825px',
               '-1650px'];
    $(".huadong-back").click(function(){
        if(haudong<0){
            haudong=lunboimg.length-1;
        }
        $(".BodyC-huadong").animate({
            left:lunboimg[haudong--]
        },1000)
    })
    $(".huadong-next").click(function(){
        if(haudong>lunboimg.length-1){
            haudong=0;
        }
        // $(".BodyC-huadong").css("left",lunboimg[haudong++])
        $(".BodyC-huadong").animate({
            left:lunboimg[haudong++]
        },1000)
    })
    setInterval(function(){
        if(haudong>lunboimg.length-1){
            haudong=0;
        }
        $(".BodyC-huadong").animate({
            left:lunboimg[haudong++]
        },1000)

    }, 10000);

    $(".BodyC-huadong-box").mouseover(function(){
        $(".huadong-back").show()
        $(".huadong-next").show()
    })
    $(".BodyC-huadong-box").mouseout(function(){
        $(".huadong-back").hide()
        $(".huadong-next").hide()
    })

    // 向下 内容 标题左侧6个按钮
    var Titleicon = ['images/icon/Title11.png',
               'images/icon/Title21.png',
               'images/icon/Title31.png',
               'images/icon/Title41.png',
               'images/icon/Title51.png',
               'images/icon/Title61.png'];
    var Titleicon2 = ['images/icon/Title10.png',
               'images/icon/Title20.png',
               'images/icon/Title30.png',
               'images/icon/Title40.png',
               'images/icon/Title50.png',
               'images/icon/Title60.png'];
    $(".downC-title-L li").mouseover(function(){
        var $TitleiconN = $(this).index();
        $(".titleimg").eq($(this).index()).attr("src",Titleicon[$TitleiconN])
        $(".titleimg").eq($(this).index()).next().css("color","#ff5252")
    })
    $(".downC-title-L li").mouseout(function(){
        var $TitleiconN2 = $(this).index();
        $(".titleimg").eq($(this).index()).attr("src",Titleicon2[$TitleiconN2])
        $(".titleimg").eq($(this).index()).next().css("color","#7a7a7a")
    })

        // 向下 内容 标题右侧公告
        var trbN = 0;
        var trb = ['0px',
               '-30px',
               '-60px',
               '-90px',
               '-120px'];
        $(".trb1").click(function(){
            if(trbN<0){
                trbN=trb.length-1;
            }
            $(".title-R-Notice-box").animate({
                top:trb[trbN--]
            },500)
        })

        $(".trb2").click(function(){
            if(trbN>trb.length-1){
                trbN=0;
            }
            $(".title-R-Notice-box").animate({
                top:trb[++trbN]
            },500)
        })
        setInterval(function(){
            if(trbN>trb.length-1){
                trbN=0;
            }
            $(".title-R-Notice-box").animate({
                top:trb[++trbN]
            },500)
        }, 5000);

        // 点击更多后 展开
        $("#BCC-More").css("display","none")
        $("#BCC-More").animate({
            opacity:0,
            height:0
        },500)
        $(".loadMore").click(function(){
            $("#BCC-More").css("display","block")            
            $("#BCC-More").animate({
                opacity:1,
                height:1500
            },500)
            $(".loadMore").animate({
                top:1600
            },500)
            $(".BodyC-FirstScreen").animate({
                height:3950
            },500)
        })

        // 背景层和弹出层
        // 点击弹出
        $('.btn-blur').on('click',function(){
            $('.Background-Layer').addClass('blur');
            $('.Popup-Layer').removeClass('close');
            $('.login-panel').animate({
                opacity:1,
                top:100,
                height:600,
                width:1000
            },500)
            event.stopPropagation();
            $('body').css('overflow','hidden')
        });

        // 点击关闭
        $(".closeBtn").on('click',function(){
            $('.Background-Layer').removeClass('blur');
            $('.Popup-Layer').addClass('close');
            $('.login-panel').animate({
                opacity:0,
                top:0,
                height:550,
                width:900
            },10)
            $('body').css('overflow','')
        })

        // 邮箱验证
        function youxiang(){
            $(".Signin-mail").blur(function(){
                $mail = $(this).val();
                if($mail.length==0){
                    $(".sinemail").text("邮箱不能为空").css("color","#fbc02d");
                    $(".Signin-mail").css("backgroundColor","#ffff8d");
                }else{
                    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
                    if(!reg.test($mail)){
                        $(".sinemail").text("邮箱格式不正确：xxx@xx.xx").css("color","#fbc02d");
                        $(".Signin-mail").css("backgroundColor","#ffff8d");
                    }else{
                        $(".sinemail").text("正确").css("color","#43a047")
                        $(".Signin-mail").css("backgroundColor","#b9f6ca")
                    }
                }
            })
        }

        // 登录password显示隐藏
        var eye = 0;
        $(".shuxue-eye").click(function(){
            if(eye==0){
                $(".Signin-password").attr("type","show-password");
                $(".shuxue-eye").attr("src","images/icon/a1.png");
                $(".Sinptt").text("您已明文显示密码，请注意隐私安全").css("color","red")
                eye = 1;
            }else{
                $(".Signin-password").attr("type","password");
                $(".shuxue-eye").attr("src","images/icon/a0.png");
                $(".Sinptt").text("已为您隐藏密码，点击眼睛可以显示").css("color","#aaaaaa")
                eye = 0;
            }
        })

        // 密码验证
        function mima(){
            $(".Signin-password").blur(function(){
                $mail = $(this).val();
                if($mail.length==0){
                    $(".Sinptt").text("密码不能为空").css("color","#fbc02d");
                    $(".Signin-password").css("backgroundColor","#ffff8d");
                }else{
                    var pss = /^[0-9a-zA-Z_]{6,15}$/;
                    if(!pss.test($mail)){
                        $(".Sinptt").text("密码格式不正确：9到15位的数字或字母").css("color","#fbc02d");
                        $(".Signin-password").css("backgroundColor","#ffff8d");
                    }else{
                        $(".Sinptt").text("正确").css("color","#43a047");
                        $(".Signin-password").css("backgroundColor","#b9f6ca");
                    }
                }
            })
        }

        // 获取随机数更新验证码
        shuxue()
        var num3s;
        function shuxue(){
            var num1 = parseInt(Math.random()*100);
            var num2 = parseInt(Math.random()*100);
            var num3 = num1 + num2;
            $(".shuxue").text(num1+" + "+num2+" = "+ num3);
            num3s = num3;
        }
        // 点击刷新icon时刷新验证码
        $(".shuxue-f5").click(function(){
            shuxue()
        })

        function yanzhengma(){
            $(".shuxue-input").blur(function(){
                var $shuxueval = $(this).val();
                if($shuxueval==num3s){
                    $(".shuxue-input").css("backgroundColor","#b9f6ca")
                    $(".sinma").text("正确").css("color","#43a047")
                }else{
                    $(".shuxue-input").css("backgroundColor","#ffff8d")
                    $(".sinma").text("这都不会？再试一下吧").css("color","#fbc02d")
                }
            })
        }
        yanzhengma();
        youxiang();
        mima();

        var $Sincp = $(".Sincp");
        var $Sincheckbox = $(".Sincheckbox");
        // $(".SinSub").click(function(){
        //     if(!$Sincheckbox.is(":checked")){
        //         $(".SinSub").attr("disabled",false);
        //         $("#submit").css("backgroundColor","#f4f4f4")
        //         // 邮箱
        //         $(".sinemail").text("邮箱不能为空").css("color","#fbc02d");
        //         $(".Signin-mail").css("backgroundColor","#ffff8d");
        //         // 密码
        //         $(".Sinptt").text("密码不能为空").css("color","#fbc02d");
        //         $(".Signin-password").css("backgroundColor","#ffff8d");
        //         // 验证码
        //         $(".shuxue-input").css("backgroundColor","#ffff8d")
        //         $(".sinma").text("这都不会？再试一下吧").css("color","#fbc02d")
        //         // 我同意
        //         $Sincp.css("backgroundColor","#ffff8d");
        //     }else{
        //         $Sincp.css("backgroundColor","#b9f6ca");
        //     }
        // })


        $Sincheckbox.click(function(){
            if($Sincheckbox.is(":checked")){
                $Sincp.css("backgroundColor","#b9f6ca");
                $("#submit").css("backgroundColor","#4caf50")
                .css("cursor","pointer")
            }else{
                $Sincp.css("backgroundColor","#ffff8d");
                $("#submit").css("backgroundColor","#f4f4f4")
                .css("cursor","")
            }
        })

        $("#rebg").animate({
            left:250
        },2000)
        ssa=1;

        $("#rebg").click(function(){
            $(this).animate({
                top:200,
                width:200
            })
            $(this).animate({
                top:300,
                width:350
            })
        })


        


        
            

})