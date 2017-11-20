(function () {
    document.write(`<link rel="stylesheet" href="./style/header.css">`)
})();
var _header = `<nav class="navbar navbar-default navbar-fixed-top PCheader" role="navigation">
        <section class="container">
            <div class="row">
                <!--导航-->
                <div class="container-fluid col-sm-12">
                    <div class="navbar-header">
                        <a type="button" class="navbar-toggle NavBtn" data-toggle="collapse"
                           data-target="#example-navbar-collapse">
                            <!--<span class="sr-only">切换导航</span>-->
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </a>
                        <a class="navbar-brand" href="#"><img src="./images/logo.png" class="Login-nav"
                                                              alt="图片加载失败"></a>
                        <a href="javascript:;" class="navbar-brand-img navbar-toggle">En</a>
                        <a href="javascript:;" class="navbar-brand-img navbar-toggle MobileSearch"><img
                                src="./images/icon_research.png"
                                alt="图片加载失败"></a>
                    </div>
                    <div class="search"><input type="text" placeholder="请输入产品型号"><img
                            src="./images/icon-fangdajing-01.svg" alt="图片加载失败"><i>En</i></div>
                    <div class="collapse navbar-collapse" id="example-navbar-collapse">
                        <ul class="nav navbar-nav navClick">
                            <li><a href="./home.html"  class="homeTop"><span>首页</span></a></li>
                            <li data-type="1" class="dropdown"><a href="./product.html" ><span>产品中心</span></a>
                                <div class="dropdown-menu proDetails">
                                        <div class="classify">
                                            <h3><a href="./product.html?proD=0">有机颜料</a> <img src="./images/logo-icon.png" alt="图片加载失败"></h3>
                                            <ul>
                                                <li><span></span><a href="./product.html?about=0">油墨用有机颜料</a></li>
                                                <li><span></span><a href="./product.html?about=1">涂料用有机颜料</a></li>
                                                <li><span></span><a href="./product.html?about=2">塑胶用有机颜料</a></li>
                                            </ul>
                                        </div>
                                        <div class="proDetailsLine"></div>
                                        <div class="classify col">
                                            <h3><a href="./product.html?proD=1">荧光颜料</a><img src="./images/logo-icon.png" alt="图片加载失败"></h3>
                                            <ul>
                                                <li><span></span><a href="./product.html?proD=1#light0">LFB系列有机颜料</a></li>
                                                <li><span></span><a href="./product.html?proD=1#light11">LD系列有机颜料</a></li>
                                                <li><span></span><a href="./product.html?proD=1#light25">LFL系列有机颜料</a></li>
                                                <li><span></span><a href="./product.html?proD=1#light36">LPA系列有机颜料</a></li>
                                            </ul>
                                        </div>
                                    <div class="proDetailsLine"></div>
                                        <div class="classify">
                                            <h3><a href="./product.html?proD=2">水性色浆</a> <img src="./images/logo-icon.png" alt="图片加载失败"></h3>
                                            <ul>
                                                <li><span></span><a href="./product.html?proD=2#base0">8系列水性色浆</a></li>
                                                <li><span></span><a href="./product.html?proD=2#base30">B系列水性色浆</a></li>
                                                <li><span></span><a href="./product.html?proD=2">F系列水性色浆</a></li>
                                                <li><span></span><a href="./product.html?proD=2">Q系列水性色浆</a></li>
                                            </ul>
                                        </div>
                                    </div>
                            </li>
                            <li data-type="2"  class="dropdown dropdown-1">
                                <a href="./about.html" >
                                    <span>关于丽王</span>
                                </a>
                                     <ul class="dropdown-menu dropdown-menu-1">
                                    <li><a href="./about.html?about=0">企业简介</a></li>
                                    <li><a href="./about.html?about=1">企业荣誉</a></li>
                                    <li><a href="./about.html?about=2">绿色丽王</a></li>
                                    <li><a href="./about.html?about=3">视频中心</a></li>
                                </ul>
                            </li>
                            <li data-type="3" class="dropdown dropdown-1"><a href="./strength.html"><span>丽王实力</span> </a>
                             <ul class="dropdown-menu dropdown-menu-1 strengthNav proDetails">
                                    <li><a href="./strength.html?about=1">全面的检测中心</a></li>
                                    <li><a href="./strength.html?about=2">整洁的生产车间</a></li>
                                    <li><a href="./strength.html?about=3">优雅的企业环境</a></li>
                                    <li><a href="./strength.html?about=4">领先的污水处理</a></li>
                                    <li><a href="./strength.html?about=5">先进的检测设备</a></li>
                                </ul>
                            </li>
                            <li data-type="4"  class="dropdown dropdown-1"><a href="./news.html"><span>企业动态</span></a>
                            <ul class="dropdown-menu dropdown-menu-1">
                                    <li><a href="./news.html?about=0">丽王新闻</a></li>
                                    <li><a href="./news.html?about=1">行业资讯</a></li>
                                </ul> 
                            </li>
                            <li data-type="5" class="dropdown dropdown-1"><a href="./contactUs.html"><span>联系我们</span></a>
                         
                             <ul class="dropdown-menu dropdown-menu-1">
                                    <li><a href="./contactUs.html?about=0">联系我们</a></li>
                                    <li><a href="./contactUs.html?about=1">在线留言</a></li>
                                    <li><a href="./contactUs.html?about=2">人才招聘</a></li>
                                </ul>               
                            </li>
                            <li><a href="javascript:;" class="homeTop"><span></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div class="one dropdown-menu-2"></div>
        <div class="two dropdown-menu-2"></div>
        <div class="pull-down">
            <div class="close-search"><span></span><span></span></div>
            <div class="startSearch"><img src="./images/icon_research.png" alt="图片加载失败"><input type="text"placeholder="输入产品型号">
                <p>点击进行搜索</p>
            </div>
        </div>
    </nav>`;
var _mobileHeader = `<div class="mobileHeader">
    <div class="navHeader">
        <a href="javascript:;" class="logo"><img src="./images/logo.png" alt=""></a>
        <div class="navLeft">
            <span>En</span>
            <span><img src="images/icon_research.png" alt="" class="MobileSearch"></span>
            <div class="couser">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
    </div>
    <ul class="ulNav">
        <li><a href="./home.html">首页</a></li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-2">产品中心 <i>+</i></a>
            <ul class="collapse secondLevel" id="content-2">
                <li><a href="javascript:;" data-toggle="collapse" data-target="#content-4">有机颜料</a>
                    <ul class="collapse secondLevel" id="content-4">
                        <li><a href="./product.html?about=0">油墨用有机颜料</a></li>
                        <li><a href="./product.html?about=1">涂料用有机颜料</a></li>
                        <li><a href="./product.html?about=2">塑胶用有机颜料</a></li>
                    </ul>
                </li>
                <li><a href="javascript:;"  data-toggle="collapse" data-target="#content-5">荧光颜料</a>
                    <ul class="collapse secondLevel" id="content-5">
                        <li><a href="./product.html?proD=1&type=1">LFB系列有机颜料</a></li>
                        <li><a href="./product.html?proD=1&type=2">LD系列有机颜料</a></li>
                        <li><a href="./product.html?proD=1&type=3">LFL系列有机颜料</a></li>
                        <li><a href="./product.html?proD=1&type=4">LPA系列有机颜料</a></li>
                    </ul>
                </li>
                <li><a href="javascript:;" data-toggle="collapse" data-target="#content-6">水性色浆</a>
                    <ul class="collapse secondLevel" id="content-6">
                       <li><a href="./product.html?proD=2&type=1">8系列水性色浆</a></li>
                       <li><a href="./product.html?proD=2&type=2">B系列水性色浆</a></li>
                       <li><a href="./product.html?proD=2">F系列水性色浆</a></li>
                       <li><a href="./product.html?proD=2">Q系列水性色浆</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-3">关于丽王<i>+</i></a>
            <ul class="collapse secondLevel" id="content-3">
                <li><a href="./about.html?about=0">企业简介</a></li>
                <li><a href="./about.html?about=1">企业荣誉</a></li>
                <li><a href="./about.html?about=2">绿色丽王</a></li>
                <li><a href="./about.html?about=3">视频中心</a></li>
            </ul>
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-two">丽王实力<i>+</i></a>
              <ul class="collapse secondLevel" id="content-two">
                                    <li><a href="./strength.html?about=1">全面的检测中心</a></li>
                                    <li><a href="./strength.html?about=2">整洁的生产车间</a></li>
                                    <li><a href="./strength.html?about=3">优雅的企业环境</a></li>
                                    <li><a href="./strength.html?about=4">领先的污水处理</a></li>
                                    <li><a href="./strength.html?about=5">先进的检测设备</a></li>
                                </ul>
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-one">企业动态<i>+</i></a>
             <ul class="collapse secondLevel" id="content-one">
                                    <li><a href="./news.html?about=0">丽王新闻</a></li>
                                    <li><a href="javaScript:;" data-toggle="collapse" data-target="#content-Q">行业资讯</a>
                                     <ul class="collapse secondLevel" id="content-Q">
                                        <li><a href="./news.html?about=1&type=ymtl">油墨涂料</a></li>
                                        <li><a href="./news.html?about=1&type=sjyr">塑胶印料</a></li>
                                        </ul>
                                    </li>
             </ul> 
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-1">联系我们<i>+</i></a>
            <ul class="collapse secondLevel" id="content-1">
                <li><a href="./contactUs.html?about=0">联系我们</a></li>
                <li><a href="./contactUs.html?about=1">在线留言</a></li>
                <li><a href="./contactUs.html?about=2">人才招聘</a></li>
            </ul></li>
    </ul>
     <div class="pull-down">
            <div class="close-search"><span></span><span></span></div>
            <div class="startSearch"><img src="./images/icon_research.png" alt="图片加载失败"><input type="text"placeholder="输入产品型号">
                <p>点击进行搜索</p>
            </div>
        </div>
</div>`
//头部发生的事件
$(function () {
    $('body').prepend(_mobileHeader);
    $('body').prepend(_header);

        var _c = true
        $('.ulNav > li >a').click(function () {
            _c = !_c;
            if (_c) {
                $(this).find('i').html('+')
            } else {
                $(this).find('i').html('-')

            }
        })
        //让top为0
        // $('.about-container').css({marginTop: 20})
        $('.MobileSearch').click(function () {
            $('.pull-down').addClass('navClickAn');
        });
        $('.close-search').click(function () {
            $('.pull-down').removeClass('navClickAn');
        });
        // $('.about-container-left').addClass('unShow');
    // }
// 头部点击事件
    $('.navClick>li').click(function () {
        var _type = $(this).attr('data-type');
        sessionStorage.setItem("dataType", _type);
        $(this).addClass('activeH').siblings().removeClass('activeH');
    });
    var _value = sessionStorage.getItem("dataType");
    if (_value) {
        $('.navClick>li[data-type=' + _value + ']').addClass('activeH')
    }
    $('.navbar .nav>.dropdown-1').hover(function () {
        $(this).find('.dropdown-menu-1').css({display: 'block'});
        $('.one').css({'display': 'block'});
        $(this).addClass('shade');
        var me = $(this);
        $('.one').hover(function () {
            $('.shade').find('.dropdown-menu-1').css({display: 'block'})
        }, function () {
            $(this).css({'display': 'none'});
            $('.shade').find('.dropdown-menu-1').css({display: 'none'})
            me.removeClass('shade')
        });
    }, function () {
        // $('.one').css({'display':'none'})
        if ($('.shade').length > 1) {
            $(this).removeClass('shade')
        }
        $(this).find('.dropdown-menu-1').css({display: 'none'});
    });
    $('.navbar .nav>li:nth-child(2).dropdown').hover(function () {
        $('.two').css({'display': 'flex'})
    }, function () {
        $('.two').css({'display': 'none'})
    });
    $('.two').hover(function () {
        $('.one').css({display: 'none'});
    });
    $('.navbar .nav').hover(function () {

    }, function () {
        if (!$('.shade')) {
            $('.one').css({display: 'none'})
        }
    })
    $('.homeTop').hover(function () {
        $('.one').css({display:'none'})
    })
    //导航头部图片显示
    $('.classify h3').hover(function () {
        $(this).find('img').css({'display': 'block'})
    }, function () {
        $(this).find('img').css({'display': 'none'})
    })
    //手机端导航按钮
    var a = false
    $('.couser').click(function () {
        a = !a;
        if (a) {
            $('.couser>.bar:nth-child(2)').css({opacity: 0});
            $('.couser>.bar:nth-child(1)').addClass('deg');
            $('.couser>.bar:nth-child(3)').addClass('deg1');
            $('.ulNav').addClass('dianji')
        } else {
            $('.couser>.bar:nth-child(2)').css({opacity: 1});
            $('.couser>.bar:nth-child(1)').removeClass('deg');
            $('.couser>.bar:nth-child(3)').removeClass('deg1');
            $('.ulNav').removeClass('dianji')
        }

    });
});

//搜索导航
$(function () {
    $('.search img').click(function () {
        var _val = $('.search input').val();
        window.location.href = './product.html?val=' + _val;
    });

    //手机端输入搜索
    $('.startSearch>img').click(function () {
        //进行正则匹配，确定搜索的是有机，荧光还是水性

        var _val = $('.startSearch>input')[1].value;
        var _length = _val.split('-').length;
        switch (parseInt(_length)){
            case 1:
                console.log("水性颜料");
                window.location.href = './product.html?MobileVal=' + _val+'&proD='+2;
                break;
            case 2:
                console.log("荧光颜料");
                window.location.href = './product.html?MobileVal=' + _val+'&proD='+1;
                break;
            case 3:
                console.log("有机颜料");
                window.location.href = './product.html?MobileVal=' + _val;
                break;
        }

    });
});