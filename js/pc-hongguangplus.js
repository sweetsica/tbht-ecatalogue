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
    { src: "images-pc-carstyle/hongguangplus/pc-home.jpg" },
    { src: "images-pc-carstyle/hongguangplus/pc-color-btn-txt.png" },
    { src: "images-pc-carstyle/hongguangplus/pc-p4-bg-00.jpg" },
    { src: "images-pc-carstyle/hongguangplus/pc-p4-bg-01.jpg" },
    { src: "images-pc-carstyle/hongguangplus/pc-p4-bg-02.jpg" },
    { src: "images-pc-carstyle/hongguangplus/pc-p4-bg-03.jpg" },
    { src: "images-pc-carstyle/hongguangplus/pc-p4-bg-04.jpg" },
    { src: "images-pc-carstyle/hongguangplus/pc-p4-btn.png" },
    { src: "images-pc-carstyle/hongguangplus/pc-more-btn.png" },
    { src: "images-pc-carstyle/hongguangplus/pc-hide-btn.png" },
    { src: "images-pc-carstyle/hongguangplus/pc-p4-img-01.jpg" },
    { src: "images-pc-carstyle/hongguangplus/pc-p4-img-02.jpg" },
    { src: "images-pc-carstyle/hongguangplus/pc-p4-img-03.jpg" },
    { src: "images-pc-carstyle/hongguangplus/img/pc-p6-img-1.jpg" },
    { src: "images-pc-carstyle/hongguangplus/img/pc-p6-img-2.jpg" },
    { src: "images-pc-carstyle/hongguangplus/img/pc-p6-img-3.jpg" },
    { src: "images-pc-carstyle/hongguangplus/img/pc-p6-img-4.jpg" },
    { src: "images-pc-carstyle/hongguangplus/img/pc-p6-img-5.jpg" }
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
setTimeout(function(){
    $('.loading').fadeOut()
}, 2000)
var ms, isF = true;
let swiperMain = new Swiper('.pc-swiper-mainBody', {
    loop: false,
    direction: 'vertical',
    mousewheelControl: true,
    noSwiping: true,
    mousewheelReleaseOnEdges: true,
    onSlideChangeEnd: function (swiper) {
        let idx = swiper.activeIndex
        if (idx <= 2) {
            $('.nav li').eq(idx).addClass('active').siblings().removeClass('active')
        }
        if (idx >= 7) {
            $('.nav li').eq(idx - 4).addClass('active').siblings().removeClass('active')
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
                event_code: 'browse_wuling_pc_hongguangPlus_home',
                event_name: '浏览五菱官网宏光Plus首屏',
                event_page: '五菱官网宏光Plus首屏',
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
                event_code: 'browse_wuling_pc_hongguangPlus_model_color',
                event_name: '浏览五菱官网宏光Plus车型颜色页',
                event_page: '五菱官网宏光Plus车型颜色页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if (swiper.activeIndex == 2) {
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_hongguangPlus_model_highlights',
                event_name: '浏览五菱官网宏光Plus车型亮点一览页',
                event_page: '五菱官网宏光Plus车型亮点一览页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if (swiper.activeIndex == 3) {
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_hongguangPlus_model_highlights_brand',
                event_name: '浏览五菱官网宏光Plus车型亮点一览-大品牌页',
                event_page: '五菱官网宏光Plus车型亮点一览-大品牌页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if (swiper.activeIndex == 4) {
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_hongguangPlus_model_highlights_power',
                event_name: '浏览五菱官网宏光Plus车型亮点一览-大动力页',
                event_page: '五菱官网宏光Plus车型亮点一览-大动力页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if (swiper.activeIndex == 5) {
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_hongguangPlus_model_highlights_space',
                event_name: '浏览五菱官网宏光Plus车型亮点一览-大空间页',
                event_page: '五菱官网宏光Plus车型亮点一览-大空间页',
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
                event_code: 'browse_wuling_pc_hongguangPlus_model_highlights_safe',
                event_name: '浏览五菱官网宏光Plus车型亮点一览-大稳妥页',
                event_page: '五菱官网宏光Plus车型亮点一览-大稳妥页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if (swiper.activeIndex == 7) {
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_hongguangPlus_reserve',
                event_name: '浏览五菱官网宏光Plus预约试驾页',
                event_page: '五菱官网宏光Plus预约试驾页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if (swiper.activeIndex == 8) {
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_hongguangPlus_model_picture',
                event_name: '浏览五菱官网宏光Plus车型美图页',
                event_page: '五菱官网宏光Plus车型美图页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if (swiper.activeIndex == 9) {
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_hongguangPlus_configuration',
                event_name: '浏览五菱官网宏光Plus参数配置页',
                event_page: '五菱官网宏光Plus参数配置页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }
    }
});
$('.home-arrow').on('click', function () {
    swiperMain.slideTo(1);
})
$('.top').on('click', function () {
    swiperMain.slideTo(0, 0);
    _jcq.push(['_track', "HGPlus_top", { content: "返回首屏" }]);
})
$('.nav li').on('click', function () {
    let idx = $(this).index()
    if (idx >= 3) {
        idx = idx + 4
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

let imgNum = 5;
for (let index = 1; index <= imgNum; index++) {
    let imgCont = '<div class="swiper-slide"><img src="images-pc-carstyle/hongguangplus/img/pc-p6-img-' + index + '.jpg"></div>'

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
    if (_num <= 2) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    swiperImgB.slideTo(_num)
    sensors_track("click_hongguangPlus_model_picture_S", "宏光Plus车型美图页-小图按钮点击", "浏览五菱官网宏光Plus车型美图页", "宏光Plus车型美图页-小图按钮点击");
})
$('.prev, .next').on('click', function () {
    if ($(this).hasClass('prev')) {
        if (_num != 0) {
            _num = _num - 1
        }
    } else {
        if (_num < 4) {
            _num = _num + 1
        }
    }
    $('.img-wrap-s ul li').eq(_num).addClass('active').siblings().removeClass('active')
    if (_num <= 2) {
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
    let idx = $(this).index() + 3;
    swiperMain.slideTo(idx);
})
$('.slideP4 .btn-wrap .btn-1').on('click', function () {
    _jcq.push(['_track', "HGplus_feature", { content: "大品牌" }])
})
$('.slideP4 .btn-wrap .btn-2').on('click', function () {
    _jcq.push(['_track', "HGplus_feature", { content: "大动力" }])
})
$('.slideP4 .btn-wrap .btn-3').on('click', function () {
    _jcq.push(['_track', "HGplus_feature", { content: "大空间" }])
})
$('.slideP4 .btn-wrap .btn-4').on('click', function () {
    _jcq.push(['_track', "HGplus_feature", { content: "大稳妥" }])
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
    _jcq.push(['_track', "HGplus_feature", { content: "宏光Plus-" + title + "-展开更多" }])
})
$('.slideP4-hide').on('click', function () {
    let num = $(this).attr('more-num')
    $('.slideP4-' + num).removeClass('more swiper-no-swiping')
    $('.slideP4-' + num).find('.slideP4-more').show()
    // $('.slideP4-' + num).find('on').removeClass('on')
    $(this).siblings('.box').children().removeClass('on')
    moreBoxNum = '';
    swiperMain.enableMousewheelControl();
})
var carTypeTxt = "标准型";
$('.slideP3 ul li').on('click', function () {
    let idx = $(this).index();
    $('.slideP3 ul li').eq(idx).addClass('active').siblings().removeClass('active')
    switch (Number(idx)) {
        case 0:
            $('.carPrice .pri').html('58,800');
            carTypeTxt = "标准型";
            stm_clicki('send', 'event', '五菱宏光Plus车型页-车型颜色(配置价格)', '标准型-点击', '五菱宏光PLUS');
            _jcq.push(['_track', 'HGplus_Type', { content: '标准型车型' }]);
            break;
        case 1:
            $('.carPrice .pri').html('60,800');
            carTypeTxt = '致富型';
            stm_clicki('send', 'event', '五菱宏光Plus车型页-车型颜色(配置价格)', '致富型-点击', '五菱宏光PLUS');
            _jcq.push(['_track', 'HGplus_Type', { content: '致富型车型' }]);
            break;
        case 2:
            $('.carPrice .pri').html('67,800');
            carTypeTxt = '舒适型';
            stm_clicki('send', 'event', '五菱宏光Plus车型页-车型颜色(配置价格)', '舒适型-点击', '五菱宏光PLUS');
            _jcq.push(['_track', 'HGplus_Type', { content: '舒适型车型' }]);
            break;
    }
})
$('.car-btn').on('click', function () {
    swiperMain.slideTo(7);
    _jcq.push(['_track', "HGplus_test_driving", { content: carTypeTxt + "预约试驾" }])

    sensors_track("click_hongguangPlus_model_color_reserve", "宏光Plus车型颜色页-（" + carTypeTxt + "型）预约试驾按钮点击", "浏览五菱官网宏光Plus车型颜色页", "宏光Plus车型颜色页-（" + carTypeTxt + "型）预约试驾按钮点击");
})
$('.car-color-btn .color-btn').on('click', function () {
    let idx = $(this).index();
    $('.car-color-btn .color-btn').eq(idx).addClass('active').siblings().removeClass('active')
    switch (Number(idx)) {
        case 0:
            $('.car-wrap').removeClass('car-wrap-1 car-wrap-2 car-wrap-3')
            $('.car-btn').removeClass('car-btn-1 car-btn-2 car-btn-3')
            $('.car-wrap .img').attr('src', 'images-pc-carstyle/hongguangplus/pc-car-01.png')
            $('.car-wrap h1 span').html('青石蓝')
            _jcq.push(['_track', "HGplus_color_blue", { content: carTypeTxt + "星青石蓝颜色切换" }]);
            stm_clicki('send', 'event', '五菱宏光Plus车型页-车型颜色(配置价格)', '车型颜色_青石蓝-点击', '五菱宏光PLUS');
            sensors_track("click_hongguangPlus_model_color_color", "宏光Plus车型颜色页-（" + carTypeTxt + "型）（青石蓝颜色）切换按钮点击", "浏览五菱官网宏光Plus车型颜色页", "宏光Plus车型颜色页-（" + carTypeTxt + "型）（青石蓝颜色）切换按钮点击");

            break;
        case 1:
            $('.car-wrap').addClass('car-wrap-1').removeClass('car-wrap-2 car-wrap-3')
            $('.car-btn').addClass('car-btn-1').removeClass('car-btn-2 car-btn-3')
            $('.car-wrap .img').attr('src', 'images-pc-carstyle/hongguangplus/pc-car-02.png')
            $('.car-wrap h1 span').html('极地白')
            _jcq.push(['_track', "HGplus_color_white", { content: carTypeTxt + "极地白颜色切换" }]);
            stm_clicki('send', 'event', '五菱宏光Plus车型页-车型颜色(配置价格)', '车型颜色_极地白-点击', '五菱宏光Plus');
            sensors_track("click_hongguangPlus_model_color_color", "宏光Plus车型颜色页-（" + carTypeTxt + "型）（极地白颜色）切换按钮点击", "浏览五菱官网宏光Plus车型颜色页", "宏光Plus车型颜色页-（" + carTypeTxt + "型）（极地白颜色）切换按钮点击");
            break;
        case 2:
            $('.car-wrap').addClass('car-wrap-2').removeClass('car-wrap-1 car-wrap-3')
            $('.car-btn').addClass('car-btn-2').removeClass('car-btn-1 car-btn-3')
            $('.car-wrap .img').attr('src', 'images-pc-carstyle/hongguangplus/pc-car-03.png')
            $('.car-wrap h1 span').html('极光银')
            _jcq.push(['_track', "HGplus_color_silver", { content: carTypeTxt + "极光银颜色切换" }]);
            stm_clicki('send', 'event', '五菱宏光Plus车型页-车型颜色(配置价格)', '车型颜色_极光银-点击', '五菱宏光Plus');
            sensors_track("click_hongguangPlus_model_color_color", "宏光Plus车型颜色页-（" + carTypeTxt + "型）（极光银颜色）切换按钮点击", "浏览五菱官网宏光Plus车型颜色页", "宏光Plus车型颜色页-（" + carTypeTxt + "型）（极光银颜色）切换按钮点击");
            break;
        case 3:
            $('.car-wrap').addClass('car-wrap-3').removeClass('car-wrap-1 car-wrap-2')
            $('.car-btn').addClass('car-btn-3').removeClass('car-btn-1 car-btn-2')
            $('.car-wrap .img').attr('src', 'images-pc-carstyle/hongguangplus/pc-car-04.png')
            $('.car-wrap h1 span').html('星耀黑')
            _jcq.push(['_track', "HGplus_color_black", { content: carTypeTxt + "星耀黑颜色切换" }]);
            stm_clicki('send', 'event', '五菱宏光Plus车型页-车型颜色(配置价格)', '车型颜色_星耀黑-点击', '五菱宏光Plus');
            sensors_track("click_hongguangPlus_model_color_color", "宏光Plus车型颜色页-（" + carTypeTxt + "型）（星耀黑颜色）切换按钮点击", "浏览五菱官网宏光Plus车型颜色页", "宏光Plus车型颜色页-（" + carTypeTxt + "型）（星耀黑颜色）切换按钮点击");
            break;
    }
})

$('.video-txt').on('click', function () {
    $('.video-wrap').fadeIn();
    $('#video')[0].play();
    $('.slideVideo').addClass('swiper-no-swiping')
    swiperMain.disableMousewheelControl();
})

$('.video-wrap .close').on('click', function () {
    $('.video-wrap').fadeOut();
    $('#video')[0].pause();
    $('.slideVideo').removeClass('swiper-no-swiping')
    swiperMain.enableMousewheelControl();
})

$('.slidePeizhi-wrap').on('click', '.img-wrap img', function () {
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
    stm_clicki('send', 'event', '五菱宏光PLUS车型页-预约试驾', '用户隐私选择-点击', '五菱宏光PLUS');
    if (that.hasClass("active")) {
        that.removeClass("active");
    } else {
        that.addClass("active");
        _jcq.push(['_track', "HGplus_test_drive", { content: "同意" }]);
        _jcq.push(['_track', "HGplus_agree"]);
    }
});

var winHeight = $(window).height();

$('.slideP4-1').scroll(function () {
    var a = $('.slideP4-1').scrollTop();
    if (a > winHeight - 10) {
        $('.slideP4-1 .more-warp .box .title1, .slideP4-1 .more-warp .box .txt1').addClass('on')
    }

    if (a > $('.slideP4-1 .more-warp .box .img1').height() + winHeight - 200) {
        $('.slideP4-1 .more-warp .box .title2').addClass('on')
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
        $('.slideP4-3 .more-warp .box .title2,.slideP4-3 .more-warp .box .txt1').addClass('on')
    }

    if (a > $('.slideP4-3 .more-warp .box .img1').height() + $('.slideP4-3 .more-warp .box .img2').height() + winHeight) {
        $('.slideP4-3 .more-warp .box .title3').addClass('on')
    }

})


$('.slideP4-4').scroll(function () {
    var a = $('.slideP4-4').scrollTop();
    if (a > winHeight - 10) {
        $('.slideP4-4 .more-warp .box .title1').addClass('on')
    }

    if (a > winHeight + $('.slideP4-4 .more-warp .box .img1').height()) {
        $('.slideP4-4 .more-warp .box .title2,.slideP4-4 .more-warp .box .txt1,.slideP4-4 .more-warp .box .txt2').addClass('on')
    }

    if (a > $('.slideP4-4 .more-warp .box .img1').height() + $('.slideP4-4 .more-warp .box .img2').height() + winHeight) {
        $('.slideP4-4 .more-warp .box .title3').addClass('on')
    }

    if (a > $('.slideP4-4 .more-warp .box .img1').height() + $('.slideP4-4 .more-warp .box .img2').height() + $('.slideP4-4 .more-warp .box .img3').height() + winHeight) {
        $('.slideP4-4 .more-warp .box .txt3').addClass('on')
    }
})


// var ms2
$('.rule_btn').on('click', function () {
    $('.popUp-wrap').fadeIn()
    // ms2 = new IScroll('#scroll2', {
    //     scrollbars: true,
    //     scrollbars: 'custom',
    //     bounce: false,
    //     mouseWheel: true,
    //     preventDefault: false
    // });
    stm_clicki('send', 'event', '五菱宏光PLUS车型页-预约试驾', '用户隐私协议-点击', '五菱宏光PLUS');
    _jcq.push(['_track', "HGplus_test_drive", { content: "用户隐私协议" }]);
    _jcq.push(['_track', "HGMINIEV_check"]);
})
$('.popUp-wrap .close').on('click', function () {
    $('.popUp-wrap').fadeOut()
})
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
    _jcq.push(['_track', 'wulinghongguang PLUS_top_banner', { content: '五菱logo' }]);
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
    _jcq.push(['_track', 'wulinghongguang PLUS_top_banner', { content: '车型' }]);
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
    _jcq.push(['_track', 'wulinghongguang PLUS_top_banner', { content: '购车指南' }]);
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
    _jcq.push(['_track', 'wulinghongguang PLUS_top_banner', { content: '品牌故事' }]);
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
    _jcq.push(['_track', 'wulinghongguang PLUS_top_banner', { content: '在线客服' }]);
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
    _jcq.push(['_track', 'wulinghongguang PLUS_top_banner', { content: '预约试驾' }]);
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
    _jcq.push(['_track', 'wulinghongguang PLUS_dibu', { content: '隐私法律' }]);
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
    _jcq.push(['_track', 'wulinghongguang PLUS_dibu', { content: '前往了解宝骏汽车' }]);
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
    _jcq.push(['_track', 'wulinghongguang PLUS_dibu', { content: 'ICP备案号' }]);
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
    _jcq.push(['_track', 'wulinghongguang PLUS_dibu', { content: '公安部备案号' }]);
})

// --------------------
// $('#ddlCarProv option').on('click', function (e) {
//     e.stopPropagation()
// })
// $('#ddlCarCity option').on('click', function (e) {
//     e.stopPropagation()
// })
// $('#ddlDealer option').on('click', function (e) {
//     e.stopPropagation()
// })

$('.btn-prev').click(function(){
    stm_clicki('send', 'event', '宏光PLUS-参数配置', '上一页-点击', '宏光PLUS');
    _jcq.push(['_track', "HGPLUS_configuration", { content: "上一页" }])
})

$('.btn-next').click(function(){
    stm_clicki('send', 'event', '宏光PLUS-参数配置', '下一页-点击', '宏光PLUS');
    _jcq.push(['_track', "HGPLUS_configuration", { content: "下一页" }])
})

var pzArr = ['<p>1.5L MT手动挡<br><span>舒适型</span></p>', '<p>1.5L MT手动挡<br><span>标准型</span></p>', '<p>1.5L MT手动挡<br><span>致富型</span></p>', '<p>1.5T MT手动挡<br><span>营运车</span></p>', '<p>1.5T MT手动挡<br><span>豪华型</span></p>', '<p>1.5T MT手动挡<br><span>舒适型</span></p>', '<p>1.5T MT手动挡<br><span>标准型</span></p>', '<p>1.5T MT手动挡<br><span>致富型</span></p>']
var pzNum = 0;
$('.btn-prev, .btn-next').on('click', function () {
    if ($(this).hasClass('disabled')) return
    if ($(this).hasClass('btn-prev')) {
        $('.btn-next').removeClass('disabled')
        if (pzNum != 0) {
            pzNum = pzNum - 1
        }
    } else {
        $('.btn-prev').removeClass('disabled')
        if (pzNum < 7) {
            pzNum = pzNum + 1
        }
    }
    if(pzNum == 7 || pzNum == 0) {
        $(this).addClass('disabled')
    }
    var imgDiv = '<img class="img on" on-src="images-pc-carstyle/hongguangplus/peizhi/images/peizhi'+ pzNum +'_02.png" off-src="images-pc-carstyle/hongguangplus/peizhi/peizhi_02.png" src="images-pc-carstyle/hongguangplus/peizhi/images/peizhi'+ pzNum +'_02.png">'+
    '<img class="img" on-src="images-pc-carstyle/hongguangplus/peizhi/images/peizhi'+ pzNum +'_03.png" off-src="images-pc-carstyle/hongguangplus/peizhi/peizhi_03.png" src="images-pc-carstyle/hongguangplus/peizhi/peizhi_03.png">'+
    '<img class="img" on-src="images-pc-carstyle/hongguangplus/peizhi/images/peizhi'+ pzNum +'_04.png" off-src="images-pc-carstyle/hongguangplus/peizhi/peizhi_04.png" src="images-pc-carstyle/hongguangplus/peizhi/peizhi_04.png">'+
    '<img class="img" on-src="images-pc-carstyle/hongguangplus/peizhi/images/peizhi'+ pzNum +'_05.png" off-src="images-pc-carstyle/hongguangplus/peizhi/peizhi_05.png" src="images-pc-carstyle/hongguangplus/peizhi/peizhi_05.png">'+
    '<img class="img" on-src="images-pc-carstyle/hongguangplus/peizhi/images/peizhi'+ pzNum +'_06.png" off-src="images-pc-carstyle/hongguangplus/peizhi/peizhi_06.png" src="images-pc-carstyle/hongguangplus/peizhi/peizhi_06.png">'+
    '<img class="img" on-src="images-pc-carstyle/hongguangplus/peizhi/images/peizhi'+ pzNum +'_07.png" off-src="images-pc-carstyle/hongguangplus/peizhi/peizhi_07.png" src="images-pc-carstyle/hongguangplus/peizhi/peizhi_07.png">'+
    '<img class="img" on-src="images-pc-carstyle/hongguangplus/peizhi/images/peizhi'+ pzNum +'_08.png" off-src="images-pc-carstyle/hongguangplus/peizhi/peizhi_08.png" src="images-pc-carstyle/hongguangplus/peizhi/peizhi_08.png">'+
    '<img class="img" on-src="images-pc-carstyle/hongguangplus/peizhi/images/peizhi'+ pzNum +'_09.png" off-src="images-pc-carstyle/hongguangplus/peizhi/peizhi_09.png" src="images-pc-carstyle/hongguangplus/peizhi/peizhi_09.png">'+
    '<img class="img" on-src="images-pc-carstyle/hongguangplus/peizhi/images/peizhi'+ pzNum +'_10.png" off-src="images-pc-carstyle/hongguangplus/peizhi/peizhi_10.png" src="images-pc-carstyle/hongguangplus/peizhi/peizhi_10.png">'+
    '<img class="img" on-src="images-pc-carstyle/hongguangplus/peizhi/images/peizhi'+ pzNum +'_11.png" off-src="images-pc-carstyle/hongguangplus/peizhi/peizhi_11.png" src="images-pc-carstyle/hongguangplus/peizhi/peizhi_11.png">'
    $('.slidePeizhi-wrap .img-wrap div').html(imgDiv)
    $('.slidePeizhi-wrap .head-img').attr('src', 'images-pc-carstyle/hongguangplus/peizhi/peizhi'+ pzNum +'.png')
    $('.slidePeizhi .slidePeizhi-wrap .btn-wrap p').html(pzArr[pzNum])
    setTimeout(function () {
        ms.destroy();
        ms = null;
        ms = new IScroll('#scroll1', {
            scrollbars: true,
            // scrollbars: 'custom',
            bounce: false,
            mouseWheel: true,
            preventDefault: false
        });
    }, 200)
})
