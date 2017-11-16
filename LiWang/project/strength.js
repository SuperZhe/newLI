//获取地址栏参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
$(function () {
    var _num = GetQueryString('about');
    switch (parseInt(_num)) {
        case 0:
            $('.aboutNav-1>a').addClass('activeA').parent().siblings().find('a').removeClass('activeA')
            break;
        case 1:
            $('.aboutNav-2>a').addClass('activeA').parent().siblings().find('a').removeClass('activeA')
            break;
        case 2:
            $('.aboutNav-3>a').addClass('activeA').parent().siblings().find('a').removeClass('activeA')
            break;
        case 3:
        $('.aboutNav-4>a').addClass('activeA').parent().siblings().find('a').removeClass('activeA')
        break;
        case 4:
            $('.aboutNav-5>a').addClass('activeA').parent().siblings().find('a').removeClass('activeA')
            break;
    }
    if (_num) {
        $(".con").hide();
        $(".con").eq(_num).show().siblings().find('.con').hide();
    } else {
        $(".con").eq(0).show();
    }
    $(".aboutNav").click(function () {
        var num = $(this).find('a').attr('data-type');
        $(".con").hide();
        $(".con").eq(num).show().siblings().find('.con').hide();
    })
    if(_aboutHt<=768){
        $('.about-container').css({
            marginBottom: '1rem',
            padding:'0 20px'
        });
        $('.left').css({fontSize:16})
        $('.right').css({fontSize:12})
    }
});