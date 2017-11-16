(function () {
    document.write(`<link rel="stylesheet" href="./css/header.css">`)
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
                        <a href="javascript:;" class="navbar-brand-img navbar-toggle">简</a>
                        <a href="javascript:;" class="navbar-brand-img navbar-toggle MobileSearch"><img
                                src="./images/icon_research.png"
                                alt="图片加载失败"></a>
                    </div>
                    <div class="search"><input type="text" placeholder="Enter product model"><img
                            src="./images/icon-fangdajing-01.svg" alt="图片加载失败"><i>简</i></div>
                    <div class="collapse navbar-collapse" id="example-navbar-collapse">
                        <ul class="nav navbar-nav navClick">
                            <li><a href="./home.html"  class="homeTop"><span>Home</span></a></li>
                            <li data-type="1" class="dropdown"><a href="./product.html" ><span>Products</span></a>
                                <div class="dropdown-menu proDetails">
                                        <div class="classify">
                                            <h3>Organic Pigments<img src="./images/logo-icon.png" alt="图片加载失败"></h3>
                                            <ul>
                                            <li><span></span><a href="./product.html?about=0">Ink organic pigments</a></li>
                                                <li><span></span><a href="./product.html?about=1">Organic pigments for plastics</a></li>
                                                <li><span></span><a href="./product.html?about=2">Organic pigments for paints</a></li>
                                            </ul>
                                        </div>
                                        <div class="proDetailsLine"></div>
                                        <div class="classify col">
                                            <h3>Fluorescent Pigments<img src="./images/logo-icon.png" alt="图片加载失败"></h3>
                                            <ul>
                                                <li><span></span>Aqueous fluorescent pigment</li>
                                                <li><span></span>Plastic fluorescent pigment</li>
                                            </ul>
                                        </div>
                                    <div class="proDetailsLine"></div>
                                        <div class="classify">
                                            <h3 class="threeFy">Sejiang <img src="./images/logo-icon.png" alt="图片加载失败"></h3>
                                            <ul>
                                                <li><span></span>8 series of water-based paste</li>
                                                <li><span></span>B series of water-based paste</li>
                                                <li><span></span>F series of water-based paste</li>
                                                <li><span></span>Q series of water-based paste</li>
                                            </ul>
                                        </div>
                                    </div>
                            </li>
                            <li data-type="2"  class="dropdown dropdown-1">
                                <a href="./about.html" >
                                    <span>About</span>
                                </a>
                                     <ul class="dropdown-menu dropdown-menu-1">
                                    <li><a href="./about.html?about=0">company profile</a></li>
                                    <li><a href="./about.html?about=1">Honors</a></li>
                                    <li><a href="./about.html?about=2">Green Li Wang</a></li>
                                    <li><a href="./about.html?about=3">Message from the Chairman</a></li>
                                </ul>
                            </li>
                            <li data-type="3" class="dropdown dropdown-1"><a href="./strength.html"><span>Lynwon</span> </a>
                             <ul class="dropdown-menu dropdown-menu-1 strengthNav proDetails">
                                    <li><a href="./strength.html?about=0">Comprehensive testing center</a></li>
                                    <li><a href="./strength.html?about=1">Tidy production area</a></li>
                                    <li><a href="./strength.html?about=2">Elegant corporate environment</a></li>
                                    <li><a href="./strength.html?about=3">Leading sewage treatment</a></li>
                                    <li><a href="./strength.html?about=4">Advanced detection equipment</a></li>
                                </ul>
                            </li>
                            <li data-type="4"  class="dropdown dropdown-1"><a href="./news.html"><span>News</span></a>
                            <ul class="dropdown-menu dropdown-menu-1">
                                    <li><a href="./news.html?about=0">Li Wang News</a></li>
                                    <li><a href="./news.html?about=1">Industry News</a></li>
                                </ul> 
                            </li>
                            <li data-type="5" class="dropdown dropdown-1"><a href="./contactUs.html"><span>Contact us</span></a>
                         
                             <ul class="dropdown-menu dropdown-menu-1">
                                    <li><a href="./contactUs.html?about=0">Contact us</a></li>
                                    <li><a href="./contactUs.html?about=1">Online message</a></li>
                                    <li><a href="./contactUs.html?about=2">recruitment</a></li>
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
            <div class="startSearch"><img src="./images/icon_research.png" alt="图片加载失败"><input type="text"placeholder="Enter product model">
                <p>Click to search</p>
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
        <li><a href="./home.html">Home</a></li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-2">Products <i>+</i></a>
            <ul class="collapse secondLevel" id="content-2">
                <li><a href="javascript:;" data-toggle="collapse" data-target="#content-4">Organic Pigments</a>
                    <ul class="collapse secondLevel" id="content-4">
                         <li><a href="./product.html?about=0">Ink organic pigments</a></li>
                        <li><a href="./product.html?about=1">Organic pigments for plastics</a></li>
                        <li><a href="./product.html?about=2">Organic pigments for paints</a></li>
                    </ul>
                </li>
                <li><a href="javascript:;"  data-toggle="collapse" data-target="#content-5">Fluorescent Pigments</a>
                    <ul class="collapse secondLevel" id="content-5">
                         <li><a href="./about.html?about=0">Aqueous fluorescent pigment</a></li>
                        <li><a href="./about.html?about=1">Plastic fluorescent pigment</a></li>
                    </ul>
                </li>
                <li><a href="javascript:;" data-toggle="collapse" data-target="#content-5">Sejiang</a>
                    <ul class="collapse secondLevel" id="content-6">
                        <li><a href="./about.html?about=0">8 series of water-based paste</a></li>
                        <li><a href="./about.html?about=1">B series of water-based paste</a></li>
                        <li><a href="./about.html?about=1">F series of water-based paste</a></li>
                        <li><a href="./about.html?about=1">Q series of water-based paste</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-3">About<i>+</i></a>
            <ul class="collapse secondLevel" id="content-3">
                <li><a href="./about.html?about=0">company profile</a></li>
                <li><a href="./about.html?about=1">Honors</a></li>
                <li><a href="./about.html?about=2">Green Li Wang</a></li>
                <li><a href="./about.html?about=3">Video Center</a></li>
            </ul>
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-two">Lynwon<i>+</i></a>
              <ul class="collapse secondLevel" id="content-two">
                                   <li><a href="./strength.html?about=0">Comprehensive testing center</a></li>
                                    <li><a href="./strength.html?about=1">Tidy production area</a></li>
                                    <li><a href="./strength.html?about=2">Elegant corporate environment</a></li>
                                    <li><a href="./strength.html?about=3">Leading sewage treatment</a></li>
                                    <li><a href="./strength.html?about=4">Advanced detection equipment</a></li>
                                </ul>
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-one">News<i>+</i></a>
             <ul class="collapse secondLevel" id="content-one">
                                    <li><a href="./news.html?about=0">Li Wang News</a></li>
                                    <li><a href="javaScript:;" data-toggle="collapse" data-target="#content-Q">Industry News</a>
                                     <ul class="collapse secondLevel" id="content-Q">
                                        <li><a href="./news.html?about=1&type=ymtl">Ink coating</a></li>
                                        <li><a href="./news.html?about=1&type=sjyr">Plastic printing materia</a></li>
                                        </ul>
                                    </li>
             </ul> 
        </li>
        <li><a href="javascript:;" data-toggle="collapse" data-target="#content-1">Contact us<i>+</i></a>
            <ul class="collapse secondLevel" id="content-1">
              <li><a href="./contactUs.html?about=0">Contact us</a></li>
                <li><a href="./contactUs.html?about=1">Online message</a></li>
                <li><a href="./contactUs.html?about=2">recruitment</a></li>
            </ul></li>
    </ul>
     <div class="pull-down">
            <div class="close-search"><span></span><span></span></div>
            <div class="startSearch"><img src="./images/icon_research.png" alt="图片加载失败"><input type="text"placeholder="Enter product model">
                <p>Click to search</p>
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
        $('.one').css({display: 'none'})
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

    })
});

//搜索导航
$(function () {
    $('.search img').click(function () {
        var _val = $('.search input').val();
        window.location.href = './product.html?val=' + _val
    })
    $('.startSearch>img').click(function () {
        var _val = $('.startSearch input').val()
        window.location.href = './product.html?MobileVal=' + _val
    })
});