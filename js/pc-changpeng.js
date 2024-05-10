$(function () {
    var tem = '<a href="https://miaozhen.com/cn/privacy" target="_blank" style="width:30%;height:27px; display:block;margin-left:48%;margin-top:-9%;position: relative;z-index:2"></a>'
    $('.tkBox .tk .imgtk').after(tem)
})
var ms, isF = true;
let swiperMain = new Swiper('.pc-swiper-mainBody', {
    loop: false,
    direction: 'vertical',
    mousewheelControl: true,
    noSwiping: true,
    mousewheelReleaseOnEdges: true,
    onSlideChangeEnd: function (swiper) {
        let idx = swiper.activeIndex;
        // console.log(idx)
        if (idx == 0) {
            $('header').removeClass('hide');
        } else {
            $('header').addClass('hide');
        }

        if (idx == 0) {
            $('.nav').removeClass('ot');
            $('.nav-01').addClass('active').siblings().removeClass('active')
        }
        if (idx == 1) {
            $('.nav').addClass('ot');
            $('.nav-02').addClass('active').siblings().removeClass('active')
        }
        if (idx == 2) {
            $('.nav').addClass('ot');
            $('.nav-03').addClass('active').siblings().removeClass('active')
        }
        if (idx == 3) {
            $('.nav').removeClass('ot');
            $('.nav-04').addClass('active').siblings().removeClass('active')
        }
    }
});

// swiperMain.slideTo(2)
// swiperMain.disableMousewheelControl();

var nm1 = new Swiper('.nm1', {
    slidesPerView: 5,
    loop: true
});

var nm2 = new Swiper('.nm2', {
    slidesPerView: 5,
    loop: true
});


var gbmid1 = new Swiper('.cpics', {
    slidesPerView: 1.8,
    centeredSlides: true,
    // autoplay: 2000,
    // loopedSlides: 6,
    loopAdditionalSlides: 2,
    loop: true,
    spaceBetween: 70,
    speed: 1000,
    observer: true,
    observeParents: true,
    nextButton: '.cpics .next',
    prevButton: '.cpics .prev',
    onSlideChangeStart: function (swiper) {
        console.log(swiper.realIndex)

        setTimeout(function () {
            // $(".pics-bom span[data-num=" + swiper.realIndex + "]").addClass('on').siblings().removeClass('on');
            $(".pics-bom span").eq(swiper.realIndex).addClass('on').siblings().removeClass('on');
            $('.part1').css('left', swiper.realIndex * (-43) + 'px')
        }, 100)
    }
});

$(".pics-bom span").click(function () {
    var index = $(this).data("index");
    gbmid1.slideTo(index + 3)
})

$('.cpics .swiper-slide img').click(function () {
    var index = $(this).data('index')
    // console.log(index)
    $('.big-pic').show().css('backgroundImage', 'url(images-pc-carstyle/changpeng/pic-' + index + '-big.jpg)');
    $('#wapper .nav').hide();
    stm_clicki('send', 'event', '五菱宏光MINIEV敞篷版车型页-美图展示', '小图-点击', '五菱宏光MINIEV敞篷版车型页')
})

$('.big-pic .back').click(function () {
    $('#wapper .nav').show();
    $('.big-pic').hide().css('backgroundImage', 'none');
    stm_clicki('send', 'event', '五菱宏光MINIEV敞篷版车型页-美图展示', '返回-点击', '五菱宏光MINIEV敞篷版车型页')
})
$('.lastPage .back').click(function () {
    $('.lastPage').hide();
    stm_clicki('send', 'event', '五菱宏光MINIEV敞篷版车型页-早鸟优惠', '返回-点击', '五菱宏光MINIEV敞篷版车型页')
})

$('.slideTap').click(function () {
    $('.lastPage').show()
    stm_clicki('send', 'event', '五菱宏光MINIEV敞篷版车型页', '早鸟优惠-点击', '五菱宏光MINIEV敞篷版车型页')
})

$('.btn-play-def').click(function () {
    $('.video-wrap').show();
    $('#video').attr('src', 'images-pc-carstyle/changpeng/video.mp4')
    setTimeout(function () {
        $('#video')[0].play();
    }, 200)
    stm_clicki('send', 'event', '五菱宏光MINIEV敞篷版车型页-精彩视频', '视频播放-点击', '五菱宏光MINIEV敞篷版车型页')
})

$('.btn-play-new').click(function () {
    $('.video-wrap').show();
    $('#video').attr('src', 'images-pc-carstyle/changpeng/new.mp4')
    setTimeout(function () {
        $('#video')[0].play();
    }, 200)
    stm_clicki('send', 'event', '五菱宏光MINIEV敞篷版车型页-家族上新', '家族上新-点击', '五菱宏光MINIEV敞篷版车型页')
})

$('.video-wrap .close').click(function () {
    $('.video-wrap').hide().attr('src', '');
    $('#video')[0].pause();
})

$('.home-arrow').on('click', function () {
    swiperMain.slideTo(1);
})

$('.nav li').on('click', function () {
    let idx = $(this).index();
    swiperMain.slideTo(idx, 0);

    if (idx == 0) {
        stm_clicki('send', 'event', '五菱宏光MINIEV敞篷版车型页-右侧导航栏', '车型首页-点击', '五菱宏光MINIEV敞篷版车型页')
    }
    if (idx == 1) {
        stm_clicki('send', 'event', '五菱宏光MINIEV敞篷版车型页-右侧导航栏', '精彩视频-点击', '五菱宏光MINIEV敞篷版车型页')
    }
    if (idx == 2) {
        stm_clicki('send', 'event', '五菱宏光MINIEV敞篷版车型页-右侧导航栏', '美图展示-点击', '五菱宏光MINIEV敞篷版车型页')
    }
})

$(".checkbox").on('click', function () {
    var that = $(this).parent();
    if (that.hasClass("active")) {
        that.removeClass("active");
    } else {
        that.addClass("active");
    }
});

var winHeight = $(window).height(), winWidth = $(window).width();

// var ms2
$('.rule_btn').on('click', function () {
    $('.popUp-wrap').fadeIn()
})
$('.popUp-wrap .close').on('click', function () {
    $('.popUp-wrap').fadeOut()
})

// ------------------
$('header .logo').click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick('autoTrack', {
        class_code: 'web_pc_page_browse',
        class_name: 'Web 页面浏览',
        event_code: 'click_home_page_wuling_logo',
        event_name: '五菱logo点击',
        event_page: '五菱官网' + pageTitle,
        event_position: '五菱logo',
        event_type: '',
        event_link_url: window.location.href.split("?")[0],
        sub_module: 'wuling_new_pc'
    });
    stm_clicki('send', 'event', pageTitle + '-顶部导航栏', '五菱logo-点击');
})

$('header .link.link1').click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick('autoTrack', {
        class_code: 'web_pc_page_browse',
        class_name: 'Web 页面浏览',
        event_code: 'click_home_page_menu_vsn',
        event_name: '菜单栏-车型点击',
        event_page: '五菱官网' + pageTitle,
        event_position: '菜单栏-车型点击',
        event_type: '',
        event_link_url: window.location.href.split("?")[0],
        sub_module: 'wuling_new_pc'
    });
    stm_clicki('send', 'event', pageTitle + '-顶部导航栏', '车型-点击');
})

$('header .link.link2').click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick('autoTrack', {
        class_code: 'web_pc_page_browse',
        class_name: 'Web 页面浏览',
        event_code: 'click_home_page_menu_guide',
        event_name: '菜单栏-购车指南点击',
        event_page: '五菱官网' + pageTitle,
        event_position: '菜单栏-购车指南点击',
        event_type: '',
        event_link_url: window.location.href.split("?")[0],
        sub_module: 'wuling_new_pc'
    });
    stm_clicki('send', 'event', pageTitle + '-顶部导航栏', '购车指南-点击');
})

$('header .link.link3').click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick('autoTrack', {
        class_code: 'web_pc_page_browse',
        class_name: 'Web 页面浏览',
        event_code: 'click_home_page_menu_story',
        event_name: '菜单栏-品牌故事点击',
        event_page: '五菱官网' + pageTitle,
        event_position: '菜单栏-品牌故事点击',
        event_type: '',
        event_link_url: window.location.href.split("?")[0],
        sub_module: 'wuling_new_pc'
    });
    stm_clicki('send', 'event', pageTitle + '-顶部导航栏', '品牌故事-点击');
})

$('.btnK').click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick('autoTrack', {
        class_code: 'web_pc_page_browse',
        class_name: 'Web 页面浏览',
        event_code: 'click_home_page_server_online',
        event_name: '菜单栏-在线客服点击',
        event_page: '五菱官网' + pageTitle,
        event_position: '菜单栏-在线客服点击',
        event_type: '',
        event_link_url: window.location.href.split("?")[0],
        sub_module: 'wuling_new_pc'
    });
    stm_clicki('send', 'event', pageTitle + '-顶部导航栏', '在线客服-点击');
})

$('.btnY').click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick('autoTrack', {
        class_code: 'web_pc_page_browse',
        class_name: 'Web 页面浏览',
        event_code: 'click_home_page_reserve',
        event_name: '菜单栏-预约试驾点击',
        event_page: '五菱官网' + pageTitle,
        event_position: '菜单栏-预约试驾点击',
        event_type: '',
        event_link_url: window.location.href.split("?")[0],
        sub_module: 'wuling_new_pc'
    });
    stm_clicki('send', 'event', pageTitle + '-顶部导航栏', '预约试驾-点击');
})

$('.law').click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick('autoTrack', {
        class_code: 'web_pc_page_browse',
        class_name: 'Web 页面浏览',
        event_code: 'click_home_page_laws',
        event_name: '隐私法律',
        event_page: '五菱官网' + pageTitle,
        event_position: '隐私法律',
        event_type: '',
        event_link_url: window.location.href.split("?")[0],
        sub_module: 'wuling_new_pc'
    });
    stm_clicki('send', 'event', pageTitle + '-底部', '隐私法律-点击');
})

$('.lk').click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick('autoTrack', {
        class_code: 'web_pc_page_browse',
        class_name: 'Web 页面浏览',
        event_code: 'click_home_page_comprehend',
        event_name: '前往了解宝骏汽车',
        event_page: '五菱官网' + pageTitle,
        event_position: '前往了解宝骏汽车',
        event_type: '',
        event_link_url: window.location.href.split("?")[0],
        sub_module: 'wuling_new_pc'
    });
    stm_clicki('send', 'event', pageTitle + '-底部', '前往了解宝骏汽车-点击');
})

$('footer p').eq(3).click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick('autoTrack', {
        class_code: 'web_pc_page_browse',
        class_name: 'Web 页面浏览',
        event_code: 'click_home_page_icp',
        event_name: 'ICP备案号',
        event_page: '五菱官网' + pageTitle,
        event_position: 'ICP备案号',
        event_type: '',
        event_link_url: window.location.href.split("?")[0],
        sub_module: 'wuling_new_pc'
    });
    stm_clicki('send', 'event', pageTitle + '-底部', 'ICP备案号-点击');
})
$('footer p').eq(4).click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick('autoTrack', {
        class_code: 'web_pc_page_browse',
        class_name: 'Web 页面浏览',
        event_code: 'click_home_page_police',
        event_name: '公安部备案号',
        event_page: '五菱官网' + pageTitle,
        event_position: '公安部备案号',
        event_type: '',
        event_link_url: window.location.href.split("?")[0],
        sub_module: 'wuling_new_pc'
    });
    stm_clicki('send', 'event', pageTitle + '-底部', '公安部备案号-点击');
})

// --------------------


$('body').mousemove(function (e) {
    e = e || window.event;
    __xx = e.pageX || e.clientX + document.body.scroolLeft;
    __yy = e.pageY || e.clientY + document.body.scrollTop;
    // console.log(__yy)
    if (swiperMain.activeIndex > 0) {
        if (__yy < 80) {
            $('header').removeClass('hide')
        } else {
            $('header').addClass('hide')
        }
    }
});
