$(function(){
    var tem = '<a href="https://miaozhen.com/cn/privacy" target="_blank" style="width:30%;height:27px; display:block;margin-left:48%;margin-top:-9%;position: relative;z-index:2"></a>'
    $('.tkBox .tk .imgtk').after(tem)
})
var lowresImages = $('img');
var imgObj = []
lowresImages.each(function (i) {
    var lowres = $(this).attr('src');
    var data = { src: lowres }
    imgObj.push(data)
});


var manifest = [
    { src: "images-pc-carstyle/ev50gb/pc-home.jpg" },
    { src: "images-pc-carstyle/ev50gb/pc-video.jpg" },
    { src: "images-pc-carstyle/ev50gb/pc-color-btn-txt.png" },
    { src: "images-pc-carstyle/ev50gb/pc-p4-bg-00.jpg" },
    { src: "images-pc-carstyle/ev50gb/pc-p4-bg-01.jpg" },
    { src: "images-pc-carstyle/ev50gb/pc-p4-bg-02.jpg" },
    { src: "images-pc-carstyle/ev50gb/pc-p4-bg-03.jpg" },
    // { src: "images-pc-carstyle/ev50gb/pc-p4-bg-04.jpg"},
    { src: "images-pc-carstyle/ev50gb/pc-p4-btn.png" },
    { src: "images-pc-carstyle/ev50gb/pc-more-btn.png" },
    { src: "images-pc-carstyle/ev50gb/pc-hide-btn.png" },
    { src: "images-pc-carstyle/ev50gb/pc-p4-img-01.jpg" },
    { src: "images-pc-carstyle/ev50gb/pc-p4-img-02.jpg" },
    { src: "images-pc-carstyle/ev50gb/pc-p4-img-03.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-1.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-2.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-3.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-4.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-5.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-6.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-7.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-8.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-9.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-10.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-11.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-12.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-13.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-14.jpg" },
    { src: "images-pc-carstyle/ev50gb/img/pc-p6-img-15.jpg" }
]
for (let index = 0; index < manifest.length; index++) {
    imgObj.unshift(manifest[index])
}
let queue = new createjs.LoadQueue(false);
queue.loadManifest(imgObj);
// queue.on("progress", function(e){
//     var n = parseInt(e.loaded*99);
//     if(n == 40) {
//         $('.loading').fadeOut()
//     }
// });
// setTimeout(function(){
//     $('.loading').fadeOut()
// }, 2000)

var ms, isF = true;
let swiperMain = new Swiper('.pc-swiper-mainBody', {
    loop: false,
    direction: 'vertical',
    mousewheelControl: true,
    noSwiping: true,
    mousewheelReleaseOnEdges: true,
    onSlideChangeEnd: function (swiper) {
        // console.log(swiper.activeIndex)
        // ms.scrollTo(0, -100, 1000, IScroll.utils.ease.elastic);
        let idx = swiper.activeIndex
        if (idx <= 3) {
            $('.nav li').eq(idx).addClass('active').siblings().removeClass('active')
        }
        if (idx >= 7) {
            $('.nav li').eq(idx - 3).addClass('active').siblings().removeClass('active')
            $('.nav').addClass('style2')
        } else {
            $('.nav').removeClass('style2')
        }
        if (idx == 0) {
            $('header').removeClass('hide');
        } else {
            $('header').addClass('hide');
        }
        if (idx == 9 && isF) {
            isF = false
            ms = new IScroll('#scroll1', {
                scrollbars: true,
                // scrollbars: 'custom',
                bounce: false,
                mouseWheel: true,
                preventDefault: false
            });
        }

        if (swiper.activeIndex == 0) {
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_hongguangMINIEV_home',
                event_name: '浏览五菱官网宏光MINIEV首屏',
                event_page: '五菱官网宏光MINIEV首屏',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if (swiper.activeIndex == 1) {
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_hongguangMINIEV_video',
                event_name: '浏览五菱移动官网宏光MINIEV视频页',
                event_page: '五菱移动官网宏光MINIEV视频页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
            stm_clicki('send', 'event', '宏光MINI EV车型页', '视频页-展示', '宏光MINI EV_展示');
        }

        if (swiper.activeIndex == 4) {
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_hongguangMINIEV_reserve',
                event_name: '浏览五菱官网宏光MINIEV预约试驾页',
                event_page: '五菱官网宏光MINIEV预约试驾页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if (swiper.activeIndex == 6) {
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_hongguangMINIEV_configuration',
                event_name: '浏览五菱官网宏光MINIEV参数配置页',
                event_page: '五菱官网宏光MINIEV参数配置页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
            stm_clicki('send', 'event', '宏光MINI EV车型页', '参数配置-展示', '宏光MINI EV_展示');
        }
    }
});
$('.home-arrow').on('click', function () {
    swiperMain.slideTo(1);
})
$('.top').on('click', function () {
    swiperMain.slideTo(0, 0);
    _jcq.push(['_track', "HGMINIEV_top", { content: "返回首屏" }]);
    stm_clicki('send', 'event', '宏光MINI EV-底部', 'Top-点击', '宏光MINI EV');
})
$('.nav li').on('click', function () {
    let idx = $(this).index()
    if (idx >= 4) {
        idx = idx + 3
    }
    swiperMain.slideTo(idx);
    if (moreBoxNum != '') {
        $('.slideP4-' + moreBoxNum).removeClass('more swiper-no-swiping')
        $('.slideP4-' + moreBoxNum).find('.slideP4-more').show()
        $('.slideP4-' + moreBoxNum).find('on').removeClass('on')
        $('.slideTestDrive').removeClass('more swiper-no-swiping')
        $('.slideTestDrive').find('.finance-more').show()
        $('.loan_step1_form').hide()
        swiperMain.enableMousewheelControl();
    }
})

let imgNum = 19;
for (let index = 1; index <= imgNum; index++) {
    let imgCont = '<div class="swiper-slide"><img src="images-pc-carstyle/ev50gb/img/pc-p6-img-' + index + '.jpg"></div>'

    $('.img-wrap-b .swiper-wrapper').append(imgCont)
}
var swiperImgB = new Swiper('.img-wrap-b .swiper-container', {
    loop: false,
    mousewheelControl: false,
    simulateTouch: false,
});

let _num = 0;
$('.img-wrap-s ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
    _num = $(this).index()
    if (_num <= 16) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    swiperImgB.slideTo(_num)
})
$('.prev, .next').on('click', function () {
    if ($(this).hasClass('prev')) {
        if (_num != 0) {
            _num = _num - 1
        }
    } else {
        if (_num < 18) {
            _num = _num + 1
        }
    }
    $('.img-wrap-s ul li').eq(_num).addClass('active').siblings().removeClass('active')
    if (_num <= 16) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    swiperImgB.slideTo(_num)
})

$('.slideP4 .btn-wrap .btn').on('mouseover', function () {
    let idx = $(this).index();
    $('.slideP4 .bg-wrap .bg').eq(idx).addClass('hover').siblings().removeClass('hover')
})
$('.slideP4 .btn-wrap .btn').on('mouseout', function () {
    $('.slideP4 .bg-wrap .bg').removeClass('hover')
})
$('.slideP4 .btn-wrap .btn').on('click', function () {
    let idx = $(this).index() + 4;
    swiperMain.slideTo(idx);
})
$('.slideP4 .btn-wrap .btn-1').on('click', function () {
    _jcq.push(['_track', "HGMINIEV_feature", { content: "小巧灵动" }]);
    stm_clicki('send', 'event', '宏光MINI EV-车型亮点', '小巧灵动-点击', '宏光MINI EV');
})
$('.slideP4 .btn-wrap .btn-2').on('click', function () {
    _jcq.push(['_track', "HGMINIEV_feature", { content: "强劲实力" }]);
    stm_clicki('send', 'event', '宏光MINI EV-车型亮点', '强劲实力-点击', '宏光MINI EV');
})
$('.slideP4 .btn-wrap .btn-3').on('click', function () {
    _jcq.push(['_track', "HGMINIEV_feature", { content: "大有可为" }]);
    stm_clicki('send', 'event', '宏光MINI EV-车型亮点', '大有可为-点击', '宏光MINI EV');
})
let moreBoxNum = '';
$('.slideP4-more').on('click', function () {
    let num = $(this).attr('more-num');
    let title = $(this).data('title');
    $(this).hide()
    moreBoxNum = num;
    $('.slideP4-' + num).addClass('more swiper-no-swiping')
    swiperMain.disableMousewheelControl();
    let element = $('.slideP4-' + num + ' .more-warp')
    element[0].scrollIntoView();
    _jcq.push(['_track', "HGMINIEV_feature_more", { content: title + "-展开更多" }]);
    stm_clicki('send', 'event', '宏光MINI EV-亮点_' + title, '展开更多-点击', '宏光MINI EV');
})
$('.slideP4-hide').on('click', function () {
    let title = $(this).data('title');
    let num = $(this).attr('more-num');
    $('.slideP4-' + num).removeClass('more swiper-no-swiping')
    $('.slideP4-' + num).find('.slideP4-more').show()
    // $('.slideP4-' + num).find('on').removeClass('on')
    $(this).siblings('.box').children().removeClass('on')
    moreBoxNum = '';
    swiperMain.enableMousewheelControl();
    stm_clicki('send', 'event', '宏光MINI EV-亮点_' + title, '收起-点击', '宏光MINI EV');
})

var carstyleTxt;
var typeIndex = 0;
var buttonIndex = 0
$('.slideP3 ul li').on('click', function () {
    typeIndex = $(this).index();
    $('.slideP3 ul li').eq(typeIndex).addClass('active').siblings().removeClass('active')
    switch (Number(typeIndex)) {
        case 0:
            carstyleTxt = "2022轻松款";
            if(buttonIndex == 0){
                $('.slideP3 .car-wrap .img').attr('src','images-pc-carstyle/ev50gb/pc-car-01-red.png')
            }else{
                $('.slideP3 .car-wrap .img').attr('src','images-pc-carstyle/ev50gb/pc-car-02-red.png')
            }
            $('.carPrice .pri').html('32,800');
            $('.carPrice .carDistance i').html('120');
            stm_clicki('send', 'event', '宏光MINI EV车型页-车型颜色(配置价格)', '轻松款-点击', '宏光MINI EV');
            break;
        case 1:
            carstyleTxt = "2022自在款";
            if(buttonIndex == 0){
                $('.slideP3 .car-wrap .img').attr('src','images-pc-carstyle/ev50gb/pc-car-01.png')
            }else{
                $('.slideP3 .car-wrap .img').attr('src','images-pc-carstyle/ev50gb/pc-car-02.png')
            }
            $('.carPrice .pri').html('38,800');
            $('.carPrice .carDistance i').html('120');
            stm_clicki('send', 'event', '宏光MINI EV车型页-车型颜色(配置价格)', '自在款-点击', '宏光MINI EV');
            break;
        case 2:
            carstyleTxt = "2022悦享款";
            if(buttonIndex == 0){
                $('.slideP3 .car-wrap .img').attr('src','images-pc-carstyle/ev50gb/pc-car-01.png')
            }else{
                $('.slideP3 .car-wrap .img').attr('src','images-pc-carstyle/ev50gb/pc-car-02.png')
            }
            $('.carPrice .pri').html('44,800');
            $('.carPrice .carDistance i').html('170');
            stm_clicki('send', 'event', '宏光MINI EV车型页-车型颜色(配置价格)', '悦享款-点击', '宏光MINI EV');
            break;
    }
})

$('.car-btn').on('click', function () {
    swiperMain.slideTo(7);
    stm_clicki('send', 'event', '宏光MINI EV车型页-车型颜色(配置价格)', carstyleTxt + '_预约试驾-点击', '宏光MINI EV');
    _jcq.push(['_track', "HGMINIEV_test_driving", { content: carstyleTxt + "预约试驾" }])
})
$('.car-color-btn .color-btn').on('click', function () {
    buttonIndex = $(this).index();
    $('.car-color-btn .color-btn').eq(buttonIndex).addClass('active').siblings().removeClass('active')
    switch (Number(buttonIndex)) {
        case 0:
            $('.car-wrap').removeClass('car-wrap-1 car-wrap-2')
            $('.car-btn').removeClass('car-btn-1 car-btn-2')
            if(typeIndex == 0){
                $('.car-wrap .img').attr('src', 'images-pc-carstyle/ev50gb/pc-car-01-red.png')
            }else{
                $('.car-wrap .img').attr('src', 'images-pc-carstyle/ev50gb/pc-car-01.png')
            }
            $('.car-wrap h1 span').html('星空蓝');
            _jcq.push(['_track', "HGMINIEV_color_white", { content: carstyleTxt + "星空蓝颜色切换" }])
            stm_clicki('send', 'event', '宏光MINI EV车型页-车型颜色(配置价格)', '车型颜色_星空蓝-点击', '宏光MINI EV');
            break;
        case 1:
            $('.car-wrap').addClass('car-wrap-1').removeClass('car-wrap-2')
            $('.car-btn').addClass('car-btn-1').removeClass('car-btn-2')
            if(typeIndex == 0){
                $('.car-wrap .img').attr('src', 'images-pc-carstyle/ev50gb/pc-car-02-red.png')
            }else{
                $('.car-wrap .img').attr('src', 'images-pc-carstyle/ev50gb/pc-car-02.png')
            }
            $('.car-wrap h1 span').html('星云白');
            _jcq.push(['_track', "HGMINIEV_color_blue", { content: carstyleTxt + "星云白颜色切换" }])
            stm_clicki('send', 'event', '宏光MINI EV车型页-车型颜色(配置价格)', '车型颜色_星云白-点击', '宏光MINI EV');
            break;
    }
})

$('.video-txt').on('click', function () {
    $('.video-wrap').fadeIn();
    $('#video')[0].play();
    $('.slideVideo').addClass('swiper-no-swiping')
    swiperMain.disableMousewheelControl();
    stm_clicki('send', 'event', '宏光MINI EV车型页-视频页', '视频播放-点击', '宏光MINI EV');
})

$('.video-wrap .close').on('click', function () {
    $('.video-wrap').fadeOut();
    $('#video')[0].pause();
    $('.slideVideo').removeClass('swiper-no-swiping')
    swiperMain.enableMousewheelControl();
})

$('.slidePeizhi-wrap .img-wrap img').on('click', function () {
    if ($(this).hasClass('on')) {
        $(this).removeClass('on').attr('src', $(this).attr('off-src'));
        setTimeout(function () {
            ms.refresh();
        }, 200)

    } else {
        $(this).addClass('on').attr('src', $(this).attr('on-src'));
        setTimeout(function () {
            ms.refresh();
        }, 200)
    }
    // ms.refresh();
})
$(".checkbox").on('click', function () {
    var that = $(this).parent();
    if (that.hasClass("active")) {
        that.removeClass("active");
    } else {
        that.addClass("active");
        stm_clicki('send', 'event', '宏光MINI EV车型页-预约试驾', '同意用户隐私协议-点击', '宏光MINI EV');
    }
});

var winHeight = $(window).height();

$('.slideP4-1').scroll(function () {
    var a = $('.slideP4-1').scrollTop();
    if (a > winHeight - 10) {
        $('.slideP4-1 .more-warp .box .title1, .slideP4-1 .more-warp .box .txt1').addClass('on')
    }

    if (a > $('.slideP4-1 .more-warp .box .img1').height() + winHeight) {
        $('.slideP4-1 .more-warp .box .title2').addClass('on')
    }

    if (a > $('.slideP4-1 .more-warp .box .img1').height() + $('.slideP4-1 .more-warp .box .img2').height() + $('.slideP4-1 .more-warp .box .img3').height() + winHeight) {
        $('.slideP4-1 .more-warp .box .title3').addClass('on')
    }

})

$('.slideP4-2').scroll(function () {
    var a = $('.slideP4-2').scrollTop();
    if (a > winHeight - 10) {
        $('.slideP4-2 .more-warp .box .title1').addClass('on')
    }

    if (a > winHeight + 50) {
        $('.slideP4-2 .more-warp .box .title2').addClass('on')
    }

    if (a > $('.slideP4-2 .more-warp .box .img1').height() + $('.slideP4-2 .more-warp .box .img2').height() + $('.slideP4-2 .more-warp .box .img3').height() + winHeight) {
        $('.slideP4-2 .more-warp .box .title3').addClass('on')
    }

    if (a > $('.slideP4-2 .more-warp .box .img1').height() + $('.slideP4-2 .more-warp .box .img2').height() + $('.slideP4-2 .more-warp .box .img3').height() + $('.slideP4-2 .more-warp .box .img4').height() + winHeight) {
        $('.slideP4-2 .more-warp .box .txt').addClass('on')
    }

})

$('.slideP4-3').scroll(function () {
    var a = $('.slideP4-3').scrollTop();
    if (a > winHeight - 10) {
        $('.slideP4-3 .more-warp .box .title1').addClass('on')
    }

    if (a > winHeight + $('.slideP4-3 .more-warp .box .img1').height()) {
        $('.slideP4-3 .more-warp .box .title2,.slideP4-3 .more-warp .box .txt1,.slideP4-3 .more-warp .box .txt2').addClass('on')
    }

    if (a > $('.slideP4-3 .more-warp .box .img1').height() + $('.slideP4-3 .more-warp .box .img2').height() + winHeight) {
        $('.slideP4-3 .more-warp .box .title3').addClass('on')
    }

    if (a > $('.slideP4-3 .more-warp .box .img1').height() + $('.slideP4-3 .more-warp .box .img2').height() + $('.slideP4-3 .more-warp .box .img3').height() + winHeight) {
        $('.slideP4-3 .more-warp .box .txt3').addClass('on')
    }
})


var ms2
$('.rule_btn').on('click', function () {
    $('.popUp-wrap').fadeIn()
    // ms2 = new IScroll('#scroll2', {
    //     scrollbars: true,
    //     scrollbars: 'custom',
    //     bounce: false,
    //     mouseWheel: true,
    //     preventDefault: false
    // });
    // stm_clicki('send', 'event', '宏光MINI EV车型页-预约试驾', '用户隐私协议-点击', '宏光MINI EV');
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
    _jcq.push(['_track', 'wulinghongguang MINI EV_top_banner', { content: '五菱logo' }]);
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
    _jcq.push(['_track', 'wulinghongguang MINI EV_top_banner', { content: '车型' }]);
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
    _jcq.push(['_track', 'wulinghongguang MINI EV_top_banner', { content: '购车指南' }]);
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
    _jcq.push(['_track', 'wulinghongguang MINI EV_top_banner', { content: '品牌故事' }]);
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
    _jcq.push(['_track', 'wulinghongguang MINI EV_top_banner', { content: '在线客服' }]);
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
    _jcq.push(['_track', 'wulinghongguang MINI EV_top_banner', { content: '预约试驾' }]);
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
    _jcq.push(['_track', 'wulinghongguang MINI EV_dibu', { content: '隐私法律' }]);
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
    _jcq.push(['_track', 'wulinghongguang MINI EV_dibu', { content: '前往了解宝骏汽车' }]);
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
    _jcq.push(['_track', 'wulinghongguang MINI EV_dibu', { content: 'ICP备案号' }]);
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
    _jcq.push(['_track', 'wulinghongguang MINI EV_dibu', { content: '公安部备案号' }]);
})

// --------------------
// $('#ddlCarProv option').click(function(){
//     alert(2)
// })

// $('#ddlCarProv').on('click','option',function (e) {
//     e.stopPropagation()
// })
// $('#ddlCarCity').on('click','option', function (e) {
//     e.stopPropagation()
// })
// $('#ddlDealer').on('click','option', function (e) {
//     e.stopPropagation()
// })

$('.finance-more').on('click', function () {
    let num = $(this).attr('more-num');
    $(this).hide()
    moreBoxNum = num;
    $('.slideTestDrive').addClass('more swiper-no-swiping')
    $('.loan_step1_form').show()
    swiperMain.disableMousewheelControl();
})
$('.finance-hide').on('click', function () {
    let num = $(this).attr('more-num')
    $('.slideTestDrive').removeClass('more swiper-no-swiping')
    $('.slideTestDrive').find('.finance-more').show()
    $('.loan_step1_form').hide()
    moreBoxNum = '';
    swiperMain.enableMousewheelControl();
})