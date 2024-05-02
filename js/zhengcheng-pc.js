$(function(){
    var tem = '<a href="https://miaozhen.com/cn/privacy" target="_blank" style="width:30%;height:27px; display:block;margin-left:48%;margin-top:-9%;position: relative;z-index:2"></a>'
    $('.tkBox .tk .imgtk').after(tem)
})

$(function () {
    _jcq.push(["_trackform", "#input_name", "focusin", "ZhengCheng", "input", "name"])      //姓名 
    _jcq.push(["_trackform", "#input_mobile", "focusin", "ZhengCheng", "input", "telephone"])      //电话 
    _jcq.push(["_trackform", "#ddlCarProv", "change", "ZhengCheng", "input", "province"])      //省份
    _jcq.push(["_trackform", "#ddlCarCity", "change", "ZhengCheng", "input", "city"])      //城市
    _jcq.push(["_trackform", "#ddlDealer", "change", "ZhengCheng", "input", "dealer"])      //经销商 
    _jcq.push(["_trackform", ".checkbox", "click", "ZhengCheng", "input", "agree"])      //同意隐私协议
})

var ms, isF = true;
var scTimer;

sensors_view('browse_ZC_home_page', '浏览五菱征程上市-首页', '五菱征程上市页');

var swiperMain = new Swiper('.swiper1', {
    loop: false,
    direction: 'vertical',
    mousewheelControl: true,
    noSwiping: true,
    mousewheelReleaseOnEdges: true,
    observer: true,
    observeParents: true,
    onSlideChangeEnd: function (swiper) {
        var idx = swiper.activeIndex;
        if (idx == 0) {
            $('header').removeClass('hide')
        } else {
            $('header').addClass('hide')
        }

        if (idx == 0) {
            sensors_view('browse_ZC_home_page', '浏览五菱征程上市-首页', '五菱征程上市');
            // console.log('浏览五菱征程上市-首页')
        }
        if (idx == 1) {
            sensors_view('browse_ZC_stay_page', '浏览五菱征程上市-留资页', '五菱征程上市');
            // console.log('浏览五菱征程上市-留资页')
        }
        if (idx == 2) {
            if (swiper2.activeIndex == 0) {
                sensors_view('browse_ZC_big', '浏览五菱征程上市-大空间页', '五菱征程上市');
                // console.log('浏览五菱征程上市-大空间页')
            }
            if (swiper2.activeIndex == 1) {
                sensors_view('browse_ZC_big', '浏览五菱征程上市-全适用页', '五菱征程上市');
                // console.log('浏览五菱征程上市-全适用页')
            }
            if (swiper2.activeIndex == 2) {
                sensors_view('browse_ZC_big', '浏览五菱征程上市-好驾乘页', '五菱征程上市');
                // console.log('浏览五菱征程上市-好驾乘页')
            }
            if (swiper2.activeIndex == 3) {
                sensors_view('browse_ZC_big', '浏览五菱征程上市-放心开页', '五菱征程上市');
                // console.log('浏览五菱征程上市-放心开页')
            }

        }
        if (idx == 3) {
            sensors_view('browse_ZC_parameter_page', '浏览五菱征程上市-参数配置页', '五菱征程上市');
            // console.log('浏览五菱征程上市-参数配置页')

            scTimer = setInterval(function () {
                ms.refresh()
                console.log(1)
            }, 200);
        } else {
            clearInterval(scTimer)
        }

        if (idx == 3 && isF) {
            isF = false
            ms = new IScroll('#scroll1', {
                scrollbars: true,
                // scrollbars: 'custom',
                bounce: false,
                mouseWheel: true,
                preventDefault: false
            });
        }
    },
    onSlidePrevEnd: function (swiper) {
        var idx = swiper.activeIndex;
        if (idx == 0) {
            _jcq.push(['_track', "ZhengCheng_viewslide", { content: "五菱征程上市-留资页划动" }]);
            // console.log(idx + '浏览五菱征程上市-留资页划动')
        }
        if (idx == 1) {
            if (swiper2.activeIndex == 0) {
                _jcq.push(['_track', "ZhengCheng_viewslide", { content: "五菱征程上市-大空间页划动" }]);
                // console.log(idx + '浏览五菱征程上市-大空间页划动')
            }
            if (swiper2.activeIndex == 1) {
                _jcq.push(['_track', "ZhengCheng_viewslide", { content: "五菱征程上市-全适用页划动" }]);
                // console.log(idx + '浏览五菱征程上市-全适用页划动')
            }
            if (swiper2.activeIndex == 2) {
                _jcq.push(['_track', "ZhengCheng_viewslide", { content: "五菱征程上市-好驾乘页划动" }]);
                // console.log(idx + '浏览五菱征程上市-好驾乘页划动')
            }
            if (swiper2.activeIndex == 3) {
                _jcq.push(['_track', "ZhengCheng_viewslide", { content: "五菱征程上市-放心开页划动" }]);
                // console.log(idx + '浏览五菱征程上市-放心开页划动')
            }
        }
        if (idx == 2) {
            _jcq.push(['_track', "ZhengCheng_viewslide", { content: "五菱征程上市-参数配置页划动" }]);
            // console.log(idx + '浏览五菱征程上市-参数配置页划动')
        }
    },
    onSlideNextEnd: function (swiper) {
        var idx = swiper.activeIndex;
        if (idx == 1) {
            _jcq.push(['_track', "ZhengCheng_viewslide", { content: "五菱征程上市-首页划动" }]);
            // console.log(idx + '浏览五菱征程上市-首页划动')
        }
        if (idx == 2) {
            _jcq.push(['_track', "ZhengCheng_viewslide", { content: "五菱征程上市-留资页划动" }]);
            // console.log(idx + '浏览五菱征程上市-留资页划动')
        }
        if (idx == 3) {
            if (swiper2.activeIndex == 0) {
                _jcq.push(['_track', "ZhengCheng_viewslide", { content: "五菱征程上市-大空间页划动" }]);
                // console.log(idx + '浏览五菱征程上市-大空间页划动')
            }
            if (swiper2.activeIndex == 1) {
                _jcq.push(['_track', "ZhengCheng_viewslide", { content: "五菱征程上市-全适用页划动" }]);
                // console.log(idx + '浏览五菱征程上市-全适用页划动')
            }
            if (swiper2.activeIndex == 2) {
                _jcq.push(['_track', "ZhengCheng_viewslide", { content: "五菱征程上市-好驾乘页划动" }]);
                // console.log(idx + '浏览五菱征程上市-好驾乘页划动')
            }
            if (swiper2.activeIndex == 3) {
                _jcq.push(['_track', "ZhengCheng_viewslide", { content: "五菱征程上市-放心开页划动" }]);
                // console.log(idx + '浏览五菱征程上市-放心开页划动')
            }
        }
    }
});

var swiper2 = new Swiper('.swiper2', {
    autoplay: 3000,
    speed: 600,
    // loop: true,
    observer: true,
    observeParents: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    onSlideChangeEnd: function (swiper) {
        if (swiperMain.activeIndex == 2) {
            if (swiper2.activeIndex == 0) {
                sensors_view('browse_ZC_big', '浏览五菱征程上市-大空间页', '五菱征程上市');
                // console.log('浏览五菱征程上市-大空间页')
            }
            if (swiper2.activeIndex == 1) {
                sensors_view('browse_ZC_big', '浏览五菱征程上市-全适用页', '五菱征程上市');
                // console.log('浏览五菱征程上市-全适用页')
            }
            if (swiper2.activeIndex == 2) {
                sensors_view('browse_ZC_big', '浏览五菱征程上市-好驾乘页', '五菱征程上市');
                // console.log('浏览五菱征程上市-好驾乘页')
            }
            if (swiper2.activeIndex == 3) {
                sensors_view('browse_ZC_big', '浏览五菱征程上市-放心开页', '五菱征程上市');
                // console.log('浏览五菱征程上市-放心开页')
            }

        }
    },
});

// swiperMain.slideTo(6)
$('.page-arrow').on('click', function () {
    swiperMain.slideTo(1);
})

$('.law').click(function () {
    $('.tkBox').show();
})

$('.tkBox .close').click(function () {
    $('.tkBox').hide();
})

$('.btn-open').on('click', function () {
    swiper2.stopAutoplay();
    $('.swiper-pagination').hide();
    var type = $(this).data('type');
    $(this).hide()
    $(this).parent().parent('.swiper-slide').addClass('more swiper-no-swiping')
    $(this).parent('.kv').hide()
    swiperMain.disableMousewheelControl();
    swiper2.disableMousewheelControl();
    $('.copy-1').addClass('on')
    if (type == 1) {
        $(this).parent().parent('.swiper-slide').find('span').each(function () {
            carboxArray.push($(this).offset().top)
        })

        sensors_track('click_ZC_space_page_but_understand_more', '五菱征程上市-大空间-了解更多按钮点击', '五菱征程上市-大空间', '了解更多按钮点击')
        _jcq.push(['_track', "ZhengCheng_knowmore", { content: "五菱征程上市-大空间-了解更多" }]);
        stm_clicki('send', 'event', '五菱征程上市车型页-大空间', '了解更多-点击', '五菱征程');
    }
    if (type == 2) {
        $(this).parent().parent('.swiper-slide').find('span').each(function () {
            gzboxArray.push($(this).offset().top)
        })

        sensors_track('click_ZC_apply_page_but_understand_more', '五菱征程上市-全适用-了解更多按钮点击', '五菱征程上市-全适用', '了解更多按钮点击')
        _jcq.push(['_track', "ZhengCheng_knowmore", { content: "五菱征程上市-全适用-了解更多" }]);
        stm_clicki('send', 'event', '五菱征程上市车型页-全适用', '了解更多-点击', '五菱征程');
        // console.log(gzboxArray)
    }
    if (type == 3) {
        $(this).parent().parent('.swiper-slide').find('span').each(function () {
            rqboxArray.push($(this).offset().top)
        })

        sensors_track('click_ZC_drive_page_but_understand_more', '五菱征程上市-好驾乘-了解更多按钮点击', '五菱征程上市-好驾乘', '了解更多按钮点击')
        _jcq.push(['_track', "ZhengCheng_knowmore", { content: "五菱征程上市-好驾乘-了解更多" }]);
        stm_clicki('send', 'event', '五菱征程上市车型页-好驾乘', '了解更多-点击', '五菱征程');
    }
    if (type == 4) {
        $(this).parent().parent('.swiper-slide').find('span').each(function () {
            pkboxArray.push($(this).offset().top)
        })

        sensors_track('click_ZC_relax_page_but_understand_more', '五菱征程上市-放心开-了解更多按钮点击', '五菱征程上市-放心开', '了解更多按钮点击')
        _jcq.push(['_track', "ZhengCheng_knowmore", { content: "五菱征程上市-放心开-了解更多" }]);
        stm_clicki('send', 'event', '五菱征程上市车型页-放心开', '了解更多-点击', '五菱征程');
    }
})
$('.btn-close').on('click', function () {
    var type = $(this).data('type');
    swiper2.startAutoplay();
    $('.swiper-pagination').show();
    $(this).parent().parent().parent('.swiper-slide').scrollTop(0);
    $(this).parent().parent().parent('.swiper-slide').removeClass('more swiper-no-swiping')
    $(this).parent().parent().parent('.swiper-slide').find('.btn-open').show()
    $(this).parent().parent().parent('.swiper-slide').find('.kv').show()
    $(this).parent().parent().parent('.swiper-slide').find('span').removeClass('on')
    swiperMain.enableMousewheelControl();
    carboxArray = [];
    gzboxArray = [];
    rqboxArray = [];
    pkboxArray = [];
    scrollIdx = 0;

    if (type == 1) {
        sensors_track('click_ZC_space_page_but_retract', '五菱征程上市-大空间-收起按钮点击', '五菱征程上市-大空间', '收起按钮点击')
        _jcq.push(['_track', "ZhengCheng_viewoff", { content: "五菱征程上市-大空间-收起" }]);
        stm_clicki('send', 'event', '五菱征程上市车型页-大空间', '收起-点击', '五菱征程');
    }
    if (type == 2) {
        sensors_track('click_ZC_apply_page_but_retract', '五菱征程上市-全适用-收起按钮点击', '五菱征程上市-全适用', '收起按钮点击')
        _jcq.push(['_track', "ZhengCheng_viewoff", { content: "五菱征程上市-全适用-收起" }]);
        stm_clicki('send', 'event', '五菱征程上市车型页-全适用', '收起-点击', '五菱征程');
    }
    if (type == 3) {
        sensors_track('click_ZC_drive_page_but_retract', '五菱征程上市-好驾乘-收起按钮点击', '五菱征程上市-好驾乘', '收起按钮点击')
        _jcq.push(['_track', "ZhengCheng_viewoff", { content: "五菱征程上市-好驾乘-收起" }]);
        stm_clicki('send', 'event', '五菱征程上市车型页-好驾乘', '收起-点击', '五菱征程');

    }
    if (type == 4) {
        sensors_track('click_ZC_relax_page_but_retract', '五菱征程上市-放心开-收起更多按钮点击', '五菱征程上市-放心开', '收起按钮点击')
        _jcq.push(['_track', "ZhengCheng_viewoff", { content: "五菱征程上市-放心开-收起" }]);
        stm_clicki('send', 'event', '五菱征程上市车型页-放心开', '收起-点击', '五菱征程');
    }
})

var carboxArray = [];
var gzboxArray = [];
var rqboxArray = [];
var pkboxArray = [];
var scrollIdx = 0;
$('.carbox').scroll(function () {
    var a = $('.carbox').scrollTop();
    if (a > carboxArray[scrollIdx] - ($(window).height() / 2)) {
        $('.carbox .copy-' + (scrollIdx + 1)).addClass('on')
        scrollIdx++;
    }
})
$('.gaizhuang').scroll(function () {
    var a = $('.gaizhuang').scrollTop();
    if (a > gzboxArray[scrollIdx] - ($(window).height() / 2)) {
        $('.gaizhuang .copy-' + (scrollIdx + 1)).addClass('on')
        scrollIdx++;
    }
})

$('.renqi').scroll(function () {
    var a = $('.renqi').scrollTop();
    if (a > rqboxArray[scrollIdx] - ($(window).height() / 2)) {
        $('.renqi .copy-' + (scrollIdx + 1)).addClass('on')
        scrollIdx++;
    }
})

$('.pinkong').scroll(function () {
    var a = $('.pinkong').scrollTop();
    // console.log(a)
    if (a > pkboxArray[scrollIdx] - ($(window).height() / 2)) {
        $('.pinkong .copy-' + (scrollIdx + 1)).addClass('on')
        scrollIdx++;
        console.log(scrollIdx)
    }
})

$('.slidePeizhi-wrap').on('click', '.img-wrap img', function () {
    if ($(this).hasClass('on')) {
        $(this).removeClass('on').attr('src', $(this).attr('off-src'));
        setTimeout(function () {
            // ms.refresh();
        }, 250)

    } else {
        $(this).addClass('on').attr('src', $(this).attr('on-src'));
        setTimeout(function () {
            // ms.refresh();
        }, 250)
    }
})



$('.top').on('click', function () {
    swiperMain.slideTo(0, 0);
})

$('.btn-popcode').on('mousemove',function () {
    $('.popcode').fadeIn();
})
$('.popcode .close').on('click',function () {
    $('.popcode').fadeOut();
})