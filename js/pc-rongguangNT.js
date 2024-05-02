$(function(){
    var tem = '<a href="https://miaozhen.com/cn/privacy" target="_blank" style="width:30%;height:27px; display:block;margin-left:48%;margin-top:-9%;position: relative;z-index:2"></a>'
    $('.tkBox .tk .imgtk').after(tem)
})

let isNew = true

var lowresImages = $('img');
var imgObj = []
lowresImages.each(function(i) {
    var lowres = $(this).attr('src');
    var data = {src: lowres}
    imgObj.push(data)
});


var manifest = [
    { src: "images-pc-carstyle/rongguangNT/pc-home.jpg"},
    { src: "images-pc-carstyle/rongguangNT/pc-video.jpg"},
    { src: "images-pc-carstyle/rongguangNT/pc-color-btn-txt.png"},
    { src: "images-pc-carstyle/rongguangNT/pc-p4-bg-00.jpg"},
    // { src: "images-pc-carstyle/rongguangNT/pc-p4-bg-01.jpg"},
    // { src: "images-pc-carstyle/rongguangNT/pc-p4-bg-02.jpg"},
    // { src: "images-pc-carstyle/rongguangNT/pc-p4-bg-03.jpg"},
    // { src: "images-pc-carstyle/rongguangNT/pc-p4-bg-04.jpg"},
    { src: "images-pc-carstyle/rongguangNT/pc-p4-btn.png"},
    { src: "images-pc-carstyle/rongguangNT/pc-more-btn.png"},
    { src: "images-pc-carstyle/rongguangNT/pc-hide-btn.png"},
    { src: "images-pc-carstyle/rongguangNT/pc-p4-img-01.jpg"},
    { src: "images-pc-carstyle/rongguangNT/pc-p4-img-02.jpg"},
    // { src: "images-pc-carstyle/rongguangNT/pc-p4-img-03.jpg"},
    { src: "images-pc-carstyle/rongguangNT/img/pc-p6-img-1.jpg"},
    { src: "images-pc-carstyle/rongguangNT/img/pc-p6-img-2.jpg"},
    { src: "images-pc-carstyle/rongguangNT/img/pc-p6-img-3.jpg"},
    { src: "images-pc-carstyle/rongguangNT/img/pc-p6-img-4.jpg"}
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

var ms, msNew, isF = true;
let swiperMain = new Swiper('.pc-swiper-mainBody', {
    loop: false,
    direction : 'vertical',
    mousewheelControl: true,
    noSwiping : true,
    mousewheelReleaseOnEdges : true,
    onSlideChangeEnd: function(swiper){
        let idx = swiper.activeIndex
        if(idx <= 3){
            $('.nav li').eq(idx).addClass('active').siblings().removeClass('active')
        }
        if(isNew) {
            if(idx >= 7){
                $('.nav li').eq(idx - 4).addClass('active').siblings().removeClass('active')
                $('.nav').addClass('style2')
            } else {
                $('.nav').removeClass('style2')
            }
        } else {
            if(idx >= 7){
                $('.nav li').eq(idx - 3).addClass('active').siblings().removeClass('active')
                $('.nav').addClass('style2')
            } else {
                $('.nav').removeClass('style2')
            }
        }
        
        if(idx == 0) {
            $('header').removeClass('hide');
        } else {
            $('header').addClass('hide');
        }
        if(idx == 9 && isF && !isNew) {
            isF = false
            ms = new IScroll('#scroll1', {
                scrollbars: false,
                // scrollbars: 'custom',
                bounce: false,
                mouseWheel: true,
                preventDefault: false
            });
        }
        if(idx == 10 && isF) {
            isF = false
            msNew = new IScroll('#scrollNew', {
                scrollbars: false,
                // scrollbars: 'custom',
                bounce: false,
                mouseWheel: true,
                preventDefault: false
            });
        }

        if(swiper.activeIndex == 0){
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_rongguangNT_home',
                event_name: '浏览五菱官网荣光新卡首屏',
                event_page: '五菱官网荣光新卡首屏',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if(swiper.activeIndex == 1){
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_rongguangNT_video',
                event_name: '浏览五菱官网荣光新卡视频页',
                event_page: '五菱官网荣光新卡视频页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if(swiper.activeIndex == 2){
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_rongguangNT_model_color',
                event_name: '浏览五菱官网荣光新卡车型颜色页',
                event_page: '五菱官网荣光新卡车型颜色页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if(swiper.activeIndex == 3){
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_rongguangNT_model_highlights',
                event_name: '浏览五菱官网荣光新卡车型亮点一览页',
                event_page: '五菱官网荣光新卡车型亮点一览页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if(swiper.activeIndex == 4){
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_rongguangNT_model_highlights_height',
                event_name: '浏览五菱官网荣光新卡车型亮点一览-不限高页',
                event_page: '五菱官网荣光新卡车型亮点一览-不限高页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if(swiper.activeIndex == 5){
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_rongguangNT_model_highlights_length',
                event_name: '浏览五菱官网荣光新卡车型亮点一览-不限长页',
                event_page: '五菱官网荣光新卡车型亮点一览-不限长页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if(swiper.activeIndex == 6){
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_rongguangNT_model_highlights_weight',
                event_name: '浏览五菱官网荣光新卡车型亮点一览-不限重页',
                event_page: '五菱官网荣光新卡车型亮点一览-不限重页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if(swiper.activeIndex == 7){
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_rongguangNT_reserve',
                event_name: '浏览五菱官网荣光新卡预约试驾页',
                event_page: '五菱官网荣光新卡预约试驾页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if(swiper.activeIndex == 8){
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_rongguangNT_model_picture',
                event_name: '浏览五菱官网荣光新卡车型美图页',
                event_page: '五菱官网荣光新卡车型美图页',
                sub_module: 'wuling_new_pc',
                activity_channel_id: '',
                utm_source: window.common.getQuery("utm_source"),
                utn_medium: window.common.getQuery("utn_medium"),
                utm_term: window.common.getQuery("utm_term"),
                utm_campaign: window.common.getQuery("utm_campaign"),
                utm_content: window.common.getQuery("utm_content"),
            });
        }

        if(swiper.activeIndex == 9){
            sensors.quick('autoTrack', {
                class_code: 'web_pc_page_browse',
                class_name: 'Web 页面浏览',
                event_code: 'browse_wuling_pc_rongguangNT_configuration',
                event_name: '浏览五菱官网荣光新卡参数配置页',
                event_page: '五菱官网荣光新卡参数配置页',
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
$('.home-arrow').on('click', function(){
    swiperMain.slideTo(1);
})
$('.top').on('click', function(){
    swiperMain.slideTo(0,0);
})

$('.nav li').on('click', function(){
    let idx = $(this).index()
    if(idx >= 4){
        if(isNew) {
            idx = idx + 4
        } else {
            idx = idx + 3
        }
        
    }
    swiperMain.slideTo(idx);
    if(moreBoxNum != '') {
        $('.slideP4-' + moreBoxNum).removeClass('more swiper-no-swiping')
        $('.slideP4-' + moreBoxNum).find('.slideP4-more').show()
        $('.slideP4-' + moreBoxNum).find('on').removeClass('on')
        $('.slideTestDrive').removeClass('more swiper-no-swiping')
        $('.slideTestDrive').find('.finance-more').show()
        $('.loan_step1_form').hide()
        swiperMain.enableMousewheelControl(); 
    }
    
})

let imgNum = 8;
for (let index = 0; index <= imgNum; index++) {
    let imgCont = '<div class="swiper-slide"><img src="images-pc-carstyle/rongguangNT/img/pc-p6-img-' + index + '.jpg"></div>'
 
    $('.img-wrap-b .swiper-wrapper').append(imgCont)
}
var swiperImgB = new Swiper('.img-wrap-b .swiper-container', {
    loop: false,
    mousewheelControl:false,
    simulateTouch : false,
});

let _num = 0;
$('.img-wrap-s ul li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active')
    _num = $(this).index()
    if(_num <= 1) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    swiperImgB.slideTo(_num)
    sensors_track("click_rongguangNT_model_picture_S","荣光新卡车型美图页-小图按钮点击","浏览五菱官网荣光新卡车型美图页","荣光新卡车型美图页-小图按钮点击");
})
$('.prev, .next').on('click', function(){
    if($(this).hasClass('prev')) {
        if(_num != 0) {
            _num = _num - 1
        }
    } else {
        if(_num < 9) {
            _num = _num + 1
        }
    }
    $('.img-wrap-s ul li').eq(_num).addClass('active').siblings().removeClass('active')
    if(_num <= 6) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    swiperImgB.slideTo(_num)
})

// $('.slideP4 .btn-wrap .btn').on('mouseover', function(){
//     let idx = $(this).index();
//     $('.slideP4 .bg-wrap .bg').eq(idx).addClass('hover').siblings().removeClass('hover')
// })
// $('.slideP4 .btn-wrap .btn').on('mouseout', function(){
//     $('.slideP4 .bg-wrap .bg').removeClass('hover')
// })
$('.slideP4 .btn-wrap .btn').on('click', function(){
    let idx = $(this).index() + 4;
    swiperMain.slideTo(idx);
})
let moreBoxNum = '';
$('.slideP4-more').on('click', function(){
    let num = $(this).attr('more-num');
    $(this).hide()
    moreBoxNum =  num;
    $('.slideP4-' + num).addClass('more swiper-no-swiping')
    swiperMain.disableMousewheelControl(); 
    let element = $('.old-page.slideP4-' + num + ' .more-warp')
    element[0].scrollIntoView();
})
$('.slideP4-hide').on('click', function(){
    let num = $(this).attr('more-num')
    $('.slideP4-' + num).removeClass('more swiper-no-swiping')
    $('.slideP4-' + num).find('.slideP4-more').show()
    // $('.slideP4-' + num).find('on').removeClass('on')
    $(this).siblings('.box').children().removeClass('on')
    moreBoxNum = '';
    swiperMain.enableMousewheelControl(); 
})
$('.car-btn').on('click', function(){
    if(isNew) {
        swiperMain.slideTo(8);
    } else {
        swiperMain.slideTo(7);
    }
    
    if(carIndex == 1){
        _jcq.push(['_track', "RGNT_test_driving", {  content: "单排预约试驾" }])

        sensors_track("click_rongguangNT_model_color_single_reserve","荣光新卡车型颜色页-单排预约试驾按钮点击","浏览五菱官网荣光新卡车型颜色页","荣光新卡车型颜色页-单排预约试驾按钮点击");
    }else if(carIndex == 2){
        _jcq.push(['_track', "RGNT_test_driving", {  content: "双排预约试驾" }])

        sensors_track("click_rongguangNT_model_color_double_reserve","荣光新卡车型颜色页-双排预约试驾按钮点击","浏览五菱官网荣光新卡车型颜色页","荣光新卡车型颜色页-双排预约试驾按钮点击");
    }
})
$('.car-color-btn .color-btn').on('click', function(){
    let idx = $(this).index();
    $('.car-color-btn .color-btn').eq(idx).addClass('active').siblings().removeClass('active')
    switch(Number(idx)) {
        case 0:
           $('.car-wrap').removeClass('car-wrap-1 car-wrap-2 car-wrap-3')
           $('.car-btn').removeClass('car-btn-1 car-btn-2 car-btn-3')
           $('.car-wrap .img').attr('src', 'images-pc-carstyle/rongguangNT/pc-car-01.png')
           $('.car-wrap h1 span').html('星空蓝')
           break;
        case 1:
            $('.car-wrap').addClass('car-wrap-1').removeClass('car-wrap-2 car-wrap-3')
            $('.car-btn').addClass('car-btn-1').removeClass('car-btn-2 car-btn-3')
            $('.car-wrap .img').attr('src', 'images-pc-carstyle/rongguangNT/pc-car-02.png')
            $('.car-wrap h1 span').html('星云白')
           break;
        case 2:
            $('.car-wrap').addClass('car-wrap-2').removeClass('car-wrap-1 car-wrap-3')
            $('.car-btn').addClass('car-btn-2').removeClass('car-btn-1 car-btn-3')
            $('.car-wrap .img').attr('src', 'images-pc-carstyle/rongguangNT/pc-car-03.png')
            $('.car-wrap h1 span').html('星韵粉')
           break;
        case 3:
            $('.car-wrap').addClass('car-wrap-3').removeClass('car-wrap-1 car-wrap-2')
            $('.car-btn').addClass('car-btn-3').removeClass('car-btn-1 car-btn-2')
            $('.car-wrap .img').attr('src', 'images-pc-carstyle/rongguangNT/pc-car-04.png')
            $('.car-wrap h1 span').html('星辉金')
           break;
    }
})

$('.video-txt').on('click',function(){
    $('.video-wrap').fadeIn();
    $('#video')[0].play();
    $('.slideVideo').addClass('swiper-no-swiping')
    swiperMain.disableMousewheelControl(); 
    sensors_track("click_rongguangNT_video_play","荣光新卡视频页-视频播放按钮点击","浏览五菱官网荣光新卡视频页","荣光新卡视频页-视频播放按钮点击");
})

$('.video-wrap .close').on('click',function(){
    $('.video-wrap').fadeOut();
    $('#video')[0].pause();
    $('.slideVideo').removeClass('swiper-no-swiping')
    swiperMain.enableMousewheelControl(); 
})

$('.slidePeizhi-wrap').on('click', '.img-wrap img', function () {
    if($(this).hasClass('on')) {
        $(this).removeClass('on').attr('src', $(this).attr('off-src'));
        setTimeout(function(){
            if(isNew) {
                msNew.refresh();
            } else {
                ms.refresh();
            }
        },200)
        
    } else {
        $(this).addClass('on').attr('src', $(this).attr('on-src'));
        setTimeout(function(){
            if(isNew) {
                msNew.refresh();
            } else {
                ms.refresh();
            }
        },200)
    }
    // ms.refresh();
})
$(".checkbox").on('click', function () {
    var that = $(this).parent();
    if (that.hasClass("active")) {
        that.removeClass("active");
    } else {
        that.addClass("active");
    }
});

var winHeight = $(window).height();

$('.old-page.slideP4-1').scroll(function () {
    var a = $('.old-page.slideP4-1').scrollTop();
    if (a > winHeight - 10) {
        $('.old-page.slideP4-1 .more-warp .box .title1, .old-page.slideP4-1 .more-warp .box .txt1').addClass('on')
    }

    if (a > $('.old-page.slideP4-1 .more-warp .box .img1').height() + winHeight) {
        $('.old-page.slideP4-1 .more-warp .box .title2').addClass('on')
    }

    if (a > $('.old-page.slideP4-1 .more-warp .box .img1').height() + $('.old-page.slideP4-1 .more-warp .box .img2').height() + $('.old-page.slideP4-1 .more-warp .box .img3').height() + winHeight) {
        $('.old-page.slideP4-1 .more-warp .box .title3').addClass('on')
    }

})

$('.old-page.slideP4-2').scroll(function () {
    var a = $('.old-page.slideP4-2').scrollTop();
    if (a > winHeight - 10) {
        $('.old-page.slideP4-2 .more-warp .box .title1').addClass('on')
    }

    if (a > winHeight + 50) {
        $('.old-page.slideP4-2 .more-warp .box .title2').addClass('on')
    }

    if (a > $('.old-page.slideP4-2 .more-warp .box .img1').height() + $('.old-page.slideP4-2 .more-warp .box .img2').height() + $('.old-page.slideP4-2 .more-warp .box .img3').height() + winHeight) {
        $('.old-page.slideP4-2 .more-warp .box .title3').addClass('on')
    }

    if (a > $('.old-page.slideP4-2 .more-warp .box .img1').height() + $('.old-page.slideP4-2 .more-warp .box .img2').height() + $('.old-page.slideP4-2 .more-warp .box .img3').height() + $('.old-page.slideP4-2 .more-warp .box .img4').height() + winHeight) {
        $('.old-page.slideP4-2 .more-warp .box .txt').addClass('on')
    }

})

$('.old-page.slideP4-3').scroll(function () {
    var a = $('.old-page.slideP4-3').scrollTop();
    if (a > winHeight - 10) {
        $('.old-page.slideP4-3 .more-warp .box .title1').addClass('on')
    }

    if (a > winHeight + $('.old-page.slideP4-3 .more-warp .box .img1').height()) {
        $('.old-page.slideP4-3 .more-warp .box .title2,.old-page.slideP4-3 .more-warp .box .txt1,.old-page.slideP4-3 .more-warp .box .txt2').addClass('on')
    }

    if (a > $('.old-page.slideP4-3 .more-warp .box .img1').height() + $('.old-page.slideP4-3 .more-warp .box .img2').height() + winHeight) {
        $('.old-page.slideP4-3 .more-warp .box .title3').addClass('on')
    }

    if (a > $('.old-page.slideP4-3 .more-warp .box .img1').height() + $('.old-page.slideP4-3 .more-warp .box .img2').height() + $('.old-page.slideP4-3 .more-warp .box .img3').height() + winHeight) {
        $('.old-page.slideP4-3 .more-warp .box .txt3').addClass('on')
    }
})


// var ms2
$('.rule_btn').on('click', function(){
    $('.popUp-wrap').fadeIn()
    // ms2 = new IScroll('#scroll2', {
    //     scrollbars: false,
    //     scrollbars: 'custom',
    //     bounce: false,
    //     mouseWheel: true,
    //     preventDefault: false
    // });
})
$('.popUp-wrap .close').on('click', function(){
    $('.popUp-wrap').fadeOut()
})

$('.slideHome .home-btn div').on('click', function(){
    let idx = $(this).index();
    $('.slideHome .home-btn div').eq(idx).addClass('active').siblings().removeClass('active')
    $('.slideHome .bg-wrap .bg').eq(idx).addClass('show').siblings().removeClass('show')
    if(idx == 0) {
        isNew = true
        $('.old-page').addClass('hide')
        $('.new-page').removeClass('hide')
    } else {
        isNew = false
        $('.new-page').addClass('hide')
        $('.old-page').removeClass('hide')
    }
    swiperMain.update();
})
var carIndex = 1;


$('.slideP3 .home-btn2 div').on('click', function(){
    let idx = $(this).index();
    $('.slideP3 .home-btn2 div').eq(idx).addClass('active').siblings().removeClass('active')
    if(idx == 0) {
        $('.car-wrap .img').attr('src', 'images-pc-carstyle/rongguangNT/pc-car-01.png')
        carIndex = 1;
    } else {
        $('.car-wrap .img').attr('src', 'images-pc-carstyle/rongguangNT/pc-car-02.png')
        carIndex = 2;
    }
})
$('.slideP4-btn div').on('click', function(){
    let idx = $(this).index();
    var _class = $(this).parent().attr('data-class')
    $('.' + _class + ' .slideP4-btn div').eq(idx).addClass('active').siblings().removeClass('active')
    if(idx == 0) {
        $('.' + _class).find('.bg').removeClass('show')
    } else {
        $('.' + _class).find('.bg').addClass('show')
    }
})
$('.finance-more').on('click', function(){
    let num = $(this).attr('more-num');
    $(this).hide()
    moreBoxNum =  num;
    $('.slideTestDrive').addClass('more swiper-no-swiping')
    $('.loan_step1_form').show()
    swiperMain.disableMousewheelControl(); 
})
$('.finance-hide').on('click', function(){
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
    _jcq.push(['_track', 'wulingrongguang NT_top_banner', { content: '五菱logo' }]);
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
    _jcq.push(['_track', 'wulingrongguang NT_top_banner', { content: '车型' }]);
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
    _jcq.push(['_track', 'wulingrongguang NT_top_banner', { content: '购车指南' }]);
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
    _jcq.push(['_track', 'wulingrongguang NT_top_banner', { content: '品牌故事' }]);
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
    _jcq.push(['_track', 'wulingrongguang NT_top_banner', { content: '在线客服' }]);
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
    _jcq.push(['_track', 'wulingrongguang NT_top_banner', { content: '预约试驾' }]);
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
    _jcq.push(['_track', 'wulingrongguang NT_dibu', { content: '隐私法律' }]);
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
    _jcq.push(['_track', 'wulingrongguang NT_dibu', { content: '前往了解宝骏汽车' }]);
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
    _jcq.push(['_track', 'wulingrongguang NT_dibu', { content: 'ICP备案号' }]);
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
    _jcq.push(['_track', 'wulingrongguang NT_dibu', { content: '公安部备案号' }]);
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
    stm_clicki('send', 'event', '荣光新卡-参数配置', '上一页-点击', '荣光新卡');
    _jcq.push(['_track', "RGNT_configuration", { content: "上一页" }])
})

$('.btn-next').click(function(){
    stm_clicki('send', 'event', '荣光新卡-参数配置', '下一页-点击', '荣光新卡');
    _jcq.push(['_track', "RGNT_configuration", { content: "下一页" }])
})

var pzArr = ['<p>1.8L-双排</p>', '<p>1.8L-单排</p>', '<p>1.5L-双排</p>', '<p>1.5L-单排</p>']
var pzNum = 0;
$('.old-page .btn-prev, .old-page .btn-next').on('click', function () {
    if ($(this).hasClass('disabled')) return
    if ($(this).hasClass('btn-prev')) {
        $('.old-page .btn-next').removeClass('disabled')
        if (pzNum != 0) {
            pzNum = pzNum - 1
        }
    } else {
        $('.old-page .btn-prev').removeClass('disabled')
        if (pzNum < 3) {
            pzNum = pzNum + 1
        }
    }
    if(pzNum == 3 || pzNum == 0) {
        $(this).addClass('disabled')
    }
    var imgDiv = '<img class="img on" on-src="images-pc-carstyle/rongguangNT/peizhi/images/peizhi'+ pzNum +'_02.png" off-src="images-pc-carstyle/rongguangNT/peizhi/peizhi_02.png" src="images-pc-carstyle/rongguangNT/peizhi/images/peizhi'+ pzNum +'_02.png">'+
    '<img class="img" on-src="images-pc-carstyle/rongguangNT/peizhi/images/peizhi'+ pzNum +'_03.png" off-src="images-pc-carstyle/rongguangNT/peizhi/peizhi_03.png" src="images-pc-carstyle/rongguangNT/peizhi/peizhi_03.png">'+
    '<img class="img" on-src="images-pc-carstyle/rongguangNT/peizhi/images/peizhi'+ pzNum +'_04.png" off-src="images-pc-carstyle/rongguangNT/peizhi/peizhi_04.png" src="images-pc-carstyle/rongguangNT/peizhi/peizhi_04.png">'+
    '<img class="img" on-src="images-pc-carstyle/rongguangNT/peizhi/images/peizhi'+ pzNum +'_05.png" off-src="images-pc-carstyle/rongguangNT/peizhi/peizhi_05.png" src="images-pc-carstyle/rongguangNT/peizhi/peizhi_05.png">'+
    '<img class="img" on-src="images-pc-carstyle/rongguangNT/peizhi/images/peizhi'+ pzNum +'_06.png" off-src="images-pc-carstyle/rongguangNT/peizhi/peizhi_06.png" src="images-pc-carstyle/rongguangNT/peizhi/peizhi_06.png">'+
    '<img class="img" on-src="images-pc-carstyle/rongguangNT/peizhi/images/peizhi'+ pzNum +'_07.png" off-src="images-pc-carstyle/rongguangNT/peizhi/peizhi_07.png" src="images-pc-carstyle/rongguangNT/peizhi/peizhi_07.png">'
    $('.old-page .slidePeizhi-wrap .img-wrap div').html(imgDiv)
    $('.old-page .slidePeizhi-wrap .btn-wrap p').html(pzArr[pzNum])
    setTimeout(function () {
        ms.destroy();
        ms = null;
        ms = new IScroll('#scroll1', {
            scrollbars: false,
            // scrollbars: 'custom',
            bounce: false,
            mouseWheel: true,
            preventDefault: false
        });
    }, 200)
})
var pzArr2 = ['<p>荣光新卡汽车下乡版</p>', '<p>荣光新卡</p>', '<p>荣光新卡双后轮</p>']
var pzNum2 = 0;
$('.new-page .btn-wrap p').on('click', function(){
    let idx = $(this).index()
    console.log(idx)

    $('.slidePeizhi-wrap .img-wrap').scrollLeft(0)
})
$('.new-page .btn-wrap p').on('click', function(){
    let idx = $(this).index()
    pzNum2 = idx
    $('.new-page .btn-wrap p').eq(idx).addClass('active').siblings().removeClass('active')
    var imgDiv = '<img class="img on" on-src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/images/2.jpg" off-src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/2.jpg" src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/images/2.jpg">'+
    '<img class="img on" on-src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/images/3.jpg" off-src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/3.jpg" src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/images/3.jpg">'+
    '<img class="img on" on-src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/images/4.jpg" off-src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/4.jpg" src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/images/4.jpg">'+
    '<img class="img" on-src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/images/5.jpg" off-src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/5.jpg" src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/5.jpg">'+
    '<img class="img" on-src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/images/6.jpg" off-src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/6.jpg" src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/6.jpg">'+
    '<img class="img" on-src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/images/7.jpg" off-src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/7.jpg" src="images-pc-carstyle/rongguangNT/peizhi/'+ pzNum2 +'/7.jpg">'
    $('.new-page .slidePeizhi-wrap .img-wrap div').html(imgDiv)
    if(pzNum2 != 0) {
        $('.slidePeizhi.new-page .slidePeizhi-wrap .img-wrap-new .img,.slidePeizhi.new-page .slidePeizhi-wrap .img-wrap-new .head').addClass('width')
        $('.slidePeizhi.new-page .slidePeizhi-wrap .img-wrap-new').addClass('oh')
    } else {
        $('.slidePeizhi.new-page .slidePeizhi-wrap .img-wrap-new .img,.slidePeizhi.new-page .slidePeizhi-wrap .img-wrap-new .head').removeClass('width')
        $('.slidePeizhi.new-page .slidePeizhi-wrap .img-wrap-new').removeClass('oh')
    }
    setTimeout(function () {
        msNew.destroy();
        msNew = null;
        msNew = new IScroll('#scrollNew', {
            scrollbars: false,
            // scrollbars: 'custom',
            bounce: false,
            mouseWheel: true,
            preventDefault: false
        });
    }, 200)
})