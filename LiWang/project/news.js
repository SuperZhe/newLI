$(function () {
    $(".con").eq(0).show();
    $(".tittle-1").click(function () {
        var num = $(this).attr('data-hide');
        $(".con").hide();
        $(".con").eq(num).show().siblings().find('.con').hide();
    })
    // if (_aboutHt <= 768) {
    //     $('.about-container').css({
    //         marginBottom: '1rem',
    //         padding: '0 20px'
    //     });
    // }
});

function add0(m) {
    return m < 10 ? '0' + m : m
}

function format(timestamp) {
    //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
    var time = new Date(timestamp);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    return year + '-' + add0(month) + '-' + add0(date);
};

//获取地址栏参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

var LiWangNews = {
    //页面初始化的时候显示数据
    updatePanel: function (pages, category, chind) {
        var _me = this;
        layer.load(
            1, {time: 3 * 1000}
        )
        $.get(`http://test.tron-m.com/lynwon-api/news/list.do?page=${pages ? pages : 1}&rows=13&category=${category ? category : 'xinwen'}${category == 'zixun' ? `&chdCategory=${chind ? chind : 'ymtl'}` : ''}`, function (res) {
            if (res) {
                layer.closeAll()
            }
            ;
            _me.createHtml(res.result);
            $('.newsList>li').click(function () {
                var _id = $(this).find('a').attr('data-id');
                var _name = $(this).find('a').attr('data-name');
                _me.updatePanel2(_id);
                _me.updatePanel3(_id, _name);
                $(".con").eq(2).show().siblings().find('.con').hide();
                $(".con").eq(0).hide();
                $(".con").eq(1).hide();
            });
            _me.EventListening(res.result, pages, category);
        })
    },
    updatePanel2: function (id) {
        var _me = this;
        layer.load(
            1, {time: 3 * 1000}
        )
        $.get(`http://test.tron-m.com/lynwon-api/news/get.do?id=${id}`, function (res) {
            if (res) {
                layer.closeAll()
            }
            ;
            _me.detailsHtml(res.result)
        })
    },
    updatePanel3: function (id, name) {
        var _me = this;
        layer.load(
            1, {time: 3 * 1000}
        )
        $.get(`http://test.tron-m.com/lynwon-api//news/navigation.do?id=${id}&category=${name}&chdCategoryName=ymtl`, function (res) {
            if (res) {
                layer.closeAll()
            }
            ;
            _me.next(res.result)
            $('.newsNav>a').click(function () {
                $('body,html').animate({scrollTop: 0}, 5);
                var _id = $(this).attr('data-id');
                var _name = $(this).find('a').attr('data-name');
                _me.updatePanel2(_id);
                _me.updatePanel3(_id, _name)
            })
        })
    },
    next: function (v) {
        var _next = '';

        if (v.next) {
            _next = `<a href="javascript:;"data-id=${v.next.id} data-name=${v.next.categoryName}>上一篇：${v.next.title}</a>`
        }
        _next += ` <a href="javascript:;" data-id=${v.prev.id} data-name=${v.prev.categoryName}>下一篇：${v.prev.title}</a>`
        $('.newsNav').html(_next);
    },
    detailsHtml: function (v) {
        var _html = `<div class='col-md-8 col-md-offset-1 about-container-right'>
                    <div class="tittle">
                        <p class="left">${v.categoryName == 'xinwen' ? '丽王新闻' : '行业资讯'} <img src="images/1F6133389107D7F690B8AEB7E95C3731.png"
                                                  style="height: 20px;width: 20px"/></p>
                        <p class="right">您的位置:主页>${v.categoryName == 'xinwen' ? '丽王新闻' : '行业资讯'}</p>
                    </div>
                    <div class="VideoCenter">
                        <div>
                            <b class="VideoCenterTitle">&nbsp;&nbsp;${v.title}</b>
                            <span class="browse">浏览:${v.showCount}</span>
                            <p class="Release" >发布时间: ${format(v.insertTime)}</p>
                        </div>
                        <div class="newContent">
                            ${v.context}
                            <!--<img src="" alt="图片的加载失败">-->
                            <div class="newsNav">
                               
                            </div>
                        </div>
                    </div>
                </div>`
        $('.RightBox').html(_html)
    },
    createHtml: function (v) {
        var _html = '', me = this;
        v.content.map(function (v, i) {
            _html += `<li>
                                <a href="javaScript:;" data-id=${v.id} data-name=${v.categoryName}>
                                    <span>${v.title}</span>
                                    <span>${format(v.insertTime)}</span>
                                </a>
                            </li>`;
        });
        $('.newsList').html(_html);

    },
    EventListening: function (v, i, ty) {
        var _me = this;
        $("#pagination3").pagination({
            currentPage: i ? i : 1,
            totalPage: v.totalPages,
            isShow: true,
            count: 4,
            homePageText: "首页",
            endPageText: "尾页",
            prevPageText: "上一页",
            nextPageText: "下一页",
            callback: function (current) {
                _me.updatePanel(current)
                $('body,html').animate({scrollTop: 0}, 5);
            }
        });
        $("#pagination1").pagination({
            currentPage: i ? i : 1,
            totalPage: v.totalPages,
            isShow: true,
            count: 5,
            homePageText: "首页",
            endPageText: "尾页",
            prevPageText: "上一页",
            nextPageText: "下一页",
            callback: function (current) {
                _me.updatePanel(current, ty);
                $('body,html').animate({scrollTop: 0}, 5);
            }
        });
    },
    selectNews: function () {
        var _me = this
        $('.tittle').click(function () {
            var _ty = $(this).attr('data-type');
            var _pages = $(this).attr('data-page');
            _me.updatePanel('', _ty);
            LiWangNews.EventListening('', '', _ty);
            if (_ty == 'zixun') {
                $('.Industry').removeClass('infomationSelect')
            } else {
                $('.Industry').addClass('infomationSelect')
            }
        });

        $('.aboutNav').click(function () {
            var _name = $(this).find('a').attr('data-name');
            _me.updatePanel('', 'zixun', _name);
            LiWangNews.EventListening('', '', 'zixun');
            $(".con").eq(1).show().siblings().find('.con').hide();
            $(".con").eq(0).hide();
            $(".con").eq(2).hide();
        })
    },
    // 初始化的时候
    useFunction: function () {
        LiWangNews.updatePanel();
        // LiWangNews.EventListening(4);
        LiWangNews.selectNews();
    }
};
//文档加载完需要执行
//由网址跳转看详情
var _herfNewsDel = {
    updatePanel: function () {
        var _id = GetQueryString('id');
        var _me = this;
        layer.load(
            1, {time: 3 * 1000}
        )
        $.get(`http://test.tron-m.com/lynwon-api/news/get.do?id=${_id}`, function (res) {
            if (res) {
                layer.closeAll()
            }
            ;
            _me.detailsHtml(res.result)
            $(".con").eq(2).show().siblings().find('.con').hide();
            $(".con").eq(0).hide();
            $(".con").eq(1).hide();
        })
    },
    detailsHtml: function (v) {
        console.log(v.categoryName);
        var _html = `<div class='col-md-8 col-md-offset-1 about-container-right'>
                    <div class="tittle">
                        <p class="left">${v.categoryName == 'xinwen' ? '丽王新闻' : '行业资讯'}<img src="images/1F6133389107D7F690B8AEB7E95C3731.png"
                                                  style="height: 20px;width: 20px"/></p>
                        <p class="right">您的位置:主页>${v.categoryName == 'xinwen' ? '丽王新闻' : '行业资讯'}</p>
                    </div>
                    <div class="VideoCenter">
                        <div>
                            <b class="VideoCenterTitle">&nbsp;&nbsp;${v.title}</b>
                            <span class="browse">浏览:${v.showCount}</span>
                            <p class="Release" >发布时间: ${format(v.insertTime)}</p>
                        </div>
                        <div class="newContent">
                            ${v.context}
                            <!--<img src="" alt="图片的加载失败">-->
                            <div class="newsNav">
                               
                            </div>
                        </div>
                    </div>
                </div>`
        $('.RightBox').html(_html)
    }
};
//地址栏选择是进入丽王新闻还是行业资讯
var _hrefSelect = {
    updatePanel: function () {
        var _about = GetQueryString('about');
        var _type = GetQueryString('type');
        switch (parseInt(_about)) {
            case 0:
                $(".con").eq(0).show().siblings().find('.con').hide();
                $(".con").eq(1).hide();
                $(".con").eq(2).hide();
                break;
            case 1:
                LiWangNews.updatePanel('', 'zixun', _type);
                $('.Industry').removeClass('infomationSelect')
                $(".con").eq(1).show().siblings().find('.con').hide();
                $(".con").eq(0).hide();
                $(".con").eq(2).hide();
                break;
        }
    }
}
$(function () {
    //地址栏进入查看详情
    var _id = GetQueryString('id');
    if (_id) {
        _herfNewsDel.updatePanel()
    }
    //当点击新闻的时候
    //页面初始化的时候
    LiWangNews.useFunction()
    _hrefSelect.updatePanel()
});