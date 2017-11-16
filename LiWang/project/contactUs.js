/*
*  获取地址栏的参数
* */
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
//匹配手机号
function Isphone(v) {
    if (!isEmpty(v)) {
        return /^((\+86)|(86))?(13|15|17|18)\d{9}$/.test(v);
    }
    return false;
}
//弹出框
function showMessage(msg, domObj) {
    layer.tips("<span style='color:#fff;height: 30px;width: 120px;text-align: center;line-height: 30px;display: inline-block;letter-spacing:1px;'>" + msg + "</span>", domObj, {tips: [3, '#4E5052']});//弹出框加回调函数
};
//判断是否为空
function  isEmpty (value, allowEmptyString) {
    return ((value === null) || (value === undefined) || (!allowEmptyString ? value === '' : false) || (isArray(value) && value.length === 0));
}
//判断是否为数组
function isArray(value) {
    return (typeof value === '[object Array]');
}
//进行手机号等校验
function subcontact() {
    var msg = '';
    if (!$('.name-1').val()) {
        showMessage('请输入姓名', $('.name-1'))
        return false;
    } else {
        msg += `姓名：${$('.name').val()}`
    }
    var _tel = $('input[type=tel]').val()
    if (!Isphone(_tel)) {
        if (isEmpty(_tel)) {
            showMessage('请输入您的电话', 'input[type=tel]');
        } else if(!Isphone(_tel)) {
            showMessage('请输入正确的电话', 'input[type=tel]')
        }
        return;
    }else{
        msg += `电话：${$('input[type=tel]').val()}`;
    }
    if (!$('input[type=email]').val()) {
        showMessage('请输入邮箱邮箱', $('input[type=email]'));
        return false;
    } else {
        msg += `邮箱：${$('input[type=email]').val()}`;
    }
    msg += `QQ：${$('input[type=number]').val()}`,
        msg += `公司名称 ${$('.firm').val()}`,
        msg += `联系地址：${$('.site').val()}`,
        msg += `留言：${$('.leaveWordsContentDel').html()}`;
    $.ajax({
        async: true,
        crossDomain: true,
        url: "http://api.tron-m.com/message/email.do",
        method: "POST",
        contentType: "application/json",
        processData: false,
        beforeSend: function (xhr) {
            layer.load(
                1, {time: 3*1000}
            )   // 数据加载成功之前，使用loading
        },
        data: JSON.stringify({subject: '客户留言', toUser: '18860322551@163.com', content: msg}),
        success: function (res) {
            layer.closeAll()
            layer.alert('恭喜您发布成功', {
                skin: 'layui-layer-molv' //样式类名 自定义样式
                , closeBtn: 1  // 是否显示关闭按钮
                , anim: 1 //动画类型
                , btn: ['确定'] //按钮
                , icon: 6  // icon
                , yes: function () {
                    location.reload();
                }
                //发布成功刷新页面；
                // location.reload();
            })
        }
    })
}
//页面加载完之后进行加载
$(function () {
    $('.about-container-left ul li a').click(function () {
        $(this).addClass('activeA').parent().siblings().find('a').removeClass('activeA')
    })
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
            break;;
    }
    if(_num){
        $(".con").hide();
        $(".con").eq(_num).show().siblings().find('.con').hide();
    }else{
        $(".con").eq(0).show();
    }
    $(".aboutNav").click(function(){
        var num =$(this).find('a').attr('data-type');
        $(".con").hide();
        $(".con").eq(num).show().siblings().find('.con').hide();
    })
    // if(_aboutHt<=768){
    //     $('.about-container').css({
    //         padding:'0 20px'
    //     });
    // }
});
