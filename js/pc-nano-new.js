var lowresImages = $('img');
var imgObj = []
lowresImages.each(function (i) {
    var lowres = $(this).attr('src');
    var data = { src: lowres }
    imgObj.push(data)
});


var manifest = [
    { src: "images-pc-carstyle/nano/try-1.jpg" },
    { src: "images-pc-carstyle/nano/try-2.jpg" },
    { src: "images-pc-carstyle/nano/try-3.jpg" },
    { src: "images-pc-carstyle/nano/try-4.jpg" },
    { src: "images-pc-carstyle/nano/pc-video.jpg" },
    { src: "images-pc-carstyle/nano/bg-qy-929.jpg" },
    { src: "images-pc-carstyle/nano/pc-full-1.jpg" },
    { src: "images-pc-carstyle/nano/pc-full-1-img-1.jpg" },
    { src: "images-pc-carstyle/nano/pc-full-1-img-2.jpg" },
    { src: "images-pc-carstyle/nano/pc-full-1-img-3.jpg" },
    { src: "images-pc-carstyle/nano/pc-full-2.jpg" },
    { src: "images-pc-carstyle/nano/pc-full-2-img-1.jpg" },
    { src: "images-pc-carstyle/nano/pc-full-2-img-2.jpg" },
    { src: "images-pc-carstyle/nano/pc-full-2-img-3.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-1.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-2.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-3.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-4.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-5.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-6.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-7.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-8.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-9.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-10.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-11.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-12.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-13.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-14.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-15.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-16.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-17.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-18.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-19.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-20.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-21.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-22.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-23.jpg" },
    { src: "images-pc-carstyle/nano/img/pc-p6-img-24.jpg" }
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
setTimeout(function () {
    $('.loading').fadeOut()
}, 2000)
var ms, isF = true;
// var jcqPvName = ['明星页划动', '视频页划动', '留资页划动', '政策页划动', '活出潮范划动', '车颜色页划动', '潮势所趋划动', '小而强大划动', '车型美图划动', '参数配置划动'];
let swiperMain = new Swiper('.pc-swiper-mainBody', {
    loop: false,
    direction: 'vertical',
    mousewheelControl: true,
    noSwiping: true,
    mousewheelReleaseOnEdges: true,
    onSlideChangeEnd: function (swiper) {
        let idx = swiper.activeIndex;

        $('.nav li').eq(idx).addClass('active').siblings().removeClass('active')

        if (idx == 0) {
            $('header').removeClass('hide');
        } else {
            $('header').addClass('hide');
        }
        if (idx == 7 && isF) {
            isF = false
            ms = new IScroll('#scroll1', {
                scrollbars: true,
                interactiveScrollbars: true,
                // scrollbars: 'custom',
                bounce: false,
                mouseWheel: true,
                preventDefault: false
            });
        }

        if (swiper.activeIndex == 0) {
            $('#wapper .nav').removeClass('style2');
        }
        if (swiper.activeIndex == 1) {
            $('#wapper .nav').removeClass('style2');
            // sensors_view('browse_MINIEV_nano_carstyle_video', '浏览视频播放2-展示', '五菱官网MINIEV nano视频播放2-展示')
            // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '视频播放【2】-展示', '宏光MINI EV-展示');

        }
        if (swiper.activeIndex == 2) {
            $('#wapper .nav').addClass('style2');
            // sensors_view('browse_MINIEV_nano_carstyle_testdrive', '浏览预约试驾3-展示', '五菱官网MINIEV nano预约试驾3-展示')
            // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '预约试驾【3】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 3) {
            $('#wapper .nav').addClass('style2');
            // sensors_view('browse_MINIEV_nano_carstyle_fashion', '浏览亮点_时尚跨界5-展示', '五菱官网MINIEV nano亮点_时尚跨界5-展示')
            // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '亮点_时尚跨界【5】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 4) {
            $('#wapper .nav').removeClass('style2');
            // sensors_view('browse_MINIEV_nano_carstyle_color', '浏览车颜色6-展示', '五菱官网MINIEV nano车颜色6-展示')
            // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '车颜色【6】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 5) {
            $('#wapper .nav').removeClass('style2');
            // sensors_view('browse_MINIEV_nano_carstyle_trend', '浏览亮点_潮势所趋7-展示', '五菱官网MINIEV nano亮点_潮势所趋7-展示')
            // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '亮点_潮势所趋【7】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 6) {
            $('#wapper .nav').addClass('style2');
            // sensors_view('browse_MINIEV_nano_carstyle_hightlight', '浏览亮点_小而强大8-展示', '五菱官网MINIEV nano亮点_小而强大8-展示')
            // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '亮点_小而强大【8】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 7) {
            $('#wapper .nav').addClass('style2');
            $('.swiper-mainBody').css('background', '#fff');
            // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '车型美图【9】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 8) {
            // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '参数配置【10】-展示', '宏光MINI EV-展示');
        }
    },
    onSlidePrevEnd: function (swiper) {
        var idx = swiper.activeIndex;
        // _jcq.push(['_track', "LCNanoEV_viewslide", { content: "五菱MINIEV 马卡龙上市-" + jcqPvName[idx + 1] }]);
        // console.log(jcqPvName[idx + 1])
    },
    onSlideNextEnd: function (swiper) {
        var idx = swiper.activeIndex;
        // _jcq.push(['_track', "LCNanoEV_viewslide", { content: "五菱MINIEV 马卡龙上市-" + jcqPvName[idx - 1] }]);
        // console.log(jcqPvName[idx - 1])
    }
});
// swiperMain.slideTo(3)

$('.slideHome').click(function () {
    $('#video').attr('src', 'nanovideos/v1.mp4');
    $('.video-wrap').fadeIn();
    $('#video')[0].play();

    // sensors_track('click_MINIEV_nano_carstyle_video', '五菱官网宏光MINI EV马卡龙车型页-视频播放', '视频播放-点击')
    // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-视频播放', '视频播放-点击', '宏光MINI EV');
    // _jcq.push(['_track', "LCNanoEV_video", { content: "五菱MINIEV 马卡龙上市-视频点击" }]);
})

var tryImgNum = 0;
var tryTimer;

function tryChange() {
    clearInterval(tryTimer)
    tryTimer = setInterval(function () {
        tryImgNum++;

        if (tryImgNum > 3) {
            tryImgNum = 0;
        }
        $('.slideTry .bom span').eq(tryImgNum).addClass('on').siblings().removeClass('on');
        $('.slideTry .bg').eq(tryImgNum).addClass('on').siblings('.bg').removeClass('on');
    }, 3000)
}

// tryChange()

$('.slideTry .bom span').click(function () {
    clearInterval(tryTimer)
    var index = $(this).index();
    tryImgNum = index;
    $(this).addClass('on').siblings().removeClass('on');
    $('.slideTry .bg').eq(tryImgNum).addClass('on').siblings('.bg').removeClass('on');
})

$('.btnYue').click(function (e) {
    e.stopPropagation()
    sensors_track('click_Nano_but_order','五菱NanoEV量产款车型页-立即下订点击','五菱NanoEV量产款车型页','立即下订按钮点击')
    stm_clicki('send', 'event', '五菱NanoEV量产款车型页-悬浮按钮', '立即下订-点击','五菱NanoEV量产款');
    _jcq.push(['_track', "LCNanoEV_order2", { content: "五菱NanoEV量产款车型页-立即下订点击" }]);
    swiperMain.slideTo(3)
})
$('.yuWin .yuBox .close').click(function () {
    $('.yuWin').fadeOut();
})


$('.jinWin .jinBox .close').click(function () {
    $('.jinWin').fadeOut();
})

$('.home-arrow').on('click', function () {
    swiperMain.slideTo(1);
})

$('.colorBtns .cb').hover(function () {
    var height = $(window).height();
    var index = $(this).index() + 1;

    var ccIndex = $(this).index() + 1;
    $(this).addClass('act').siblings().removeClass('act');
    carChange(ccIndex);

    if (index == 1) {
        $('.tipTxt').css({
            left: '-7px'
        }).text('电竞白拼科技黑');
    }
    if (index == 2) {
        $('.tipTxt').css({
            left: '33px'
        }).text('电竞白');
    }
    if (index == 3) {
        $('.tipTxt').css({
            left: '129px'
        }).text('街舞蓝拼数码灰');
    }
    if (index == 4) {
        $('.tipTxt').css({
            left: '162px'
        }).text('街舞蓝');
    }
    if (index == 5) {
        $('.tipTxt').css({
            left: '262px'
        }).text('嘻哈黄拼数码灰');
    }
    if (index == 6) {
        $('.tipTxt').css({
            left: '292px'
        }).text('嘻哈黄');
    }
    if (index == 7) {
        $('.tipTxt').css({
            left: '393px'
        }).text('数码灰拼科技黑');
    }
    if (index == 8) {
        $('.tipTxt').css({
            left: '425px'
        }).text('数码灰');
    }

})

var ccIndex;
$('.colorBtns .cb').click(function () {
    var ccIndex = $(this).index() + 1;
    $(this).addClass('act').siblings().removeClass('act');
    carChange(ccIndex);

    if (ccIndex == 1) {
        sensors_track('click_Nano_colour_eSports', '五菱NanoEV量产款车型页-电竞白拼科技黑-车颜色点击', '五菱NanoEV量产款车型页-潮色自定', '车颜色点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-潮色自定', '车颜色_电竞白拼科技黑-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_colour", { content: "五菱NanoEV量产款车型页-电竞白拼科技黑车颜色点击" }]);
    }

    if (ccIndex == 2) {
        sensors_track('click_Nano_colour_white', '五菱NanoEV量产款车型页-电竞白-车颜色点击', '五菱NanoEV量产款车型页-潮色自定', '车颜色点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-潮色自定', '车颜色_电竞白-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_colour", { content: "五菱NanoEV量产款车型页-电竞白车颜色点击" }]);
    }

    if (ccIndex == 3) {
        sensors_track('click_Nano_colour_Blue_grey', '五菱NanoEV量产款车型页-街舞蓝拼数码灰-车颜色点击', '五菱NanoEV量产款车型页-潮色自定', '车颜色点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-潮色自定', '车颜色_街舞蓝拼数码灰-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_colour", { content: "五菱NanoEV量产款车型页-街舞蓝拼数码灰车颜色点击" }]);
    }

    if (ccIndex == 4) {
        sensors_track('click_Nano_colour_Blue', '五菱NanoEV量产款车型页-街舞蓝-车颜色点击', '五菱NanoEV量产款车型页-潮色自定', '车颜色点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-潮色自定', '车颜色_街舞蓝-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_colour", { content: "五菱NanoEV量产款车型页-街舞蓝车颜色点击" }]);
    }

    if (ccIndex == 5) {
        sensors_track('click_Nano_colour_yellow_gray', '五菱NanoEV量产款车型页-嘻哈黄拼数码灰-车颜色点击', '五菱NanoEV量产款车型页-潮色自定', '车颜色点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-潮色自定', '车颜色_嘻哈黄拼数码灰-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_colour", { content: "五菱NanoEV量产款车型页-嘻哈黄拼数码灰车颜色点击" }]);
    }
    if (ccIndex == 6) {
        sensors_track('click_Nano_colour_yellow', '五菱NanoEV量产款车型页-嘻哈黄-车颜色点击', '五菱NanoEV量产款车型页-潮色自定', '车颜色点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-潮色自定', '车颜色_嘻哈黄-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_colour", { content: "五菱NanoEV量产款车型页-嘻哈黄车颜色点击" }]);
    }

    if (ccIndex == 7) {
        sensors_track('click_Nano_colour_dark_gray', '五菱NanoEV量产款车型页-数码灰拼科技黑-车颜色点击', '五菱NanoEV量产款车型页-潮色自定', '车颜色点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-潮色自定', '车颜色_数码灰拼科技黑-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_colour", { content: "五菱NanoEV量产款车型页-数码灰拼科技黑车颜色点击" }]);
    }
    if (ccIndex == 8) {
        sensors_track('click_Nano_colour_gray', '五菱NanoEV量产款车型页-数码灰-车颜色点击', '五菱NanoEV量产款车型页-潮色自定', '车颜色点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-潮色自定', '车颜色_数码灰-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_colour", { content: "五菱NanoEV量产款车型页-数码灰车颜色点击" }]);
    }
    
})

function carChange(ccIndex) {
    if (ccIndex == 1) {
        $('.colorBtns .cb').eq(0).addClass('act').siblings().removeClass('act');
        $('.tipTxt').css({
            left: '3%'
        }).text('电竞白拼科技黑');

        $('.carColorBg').attr('src', 'images-pc-carstyle/nano/color-car-bg-1-1.png');
        $('.carColorCy').attr('src', 'images-pc-carstyle/nano/color-car-bg-1.png');
        $('.carColorCar').attr('src', 'images-pc-carstyle/nano/color-car-car-1.png');
    }

    if (ccIndex == 2) {
        $('.carColorBg').attr('src', 'images-pc-carstyle/nano/color-car-bg-1-1.png');
        $('.carColorCy').attr('src', 'images-pc-carstyle/nano/color-car-bg-1.png');
        $('.carColorCar').attr('src', 'images-pc-carstyle/nano/color-car-car-2.png');
    }

    if (ccIndex == 3) {
        $('.carColorBg').attr('src', 'images-pc-carstyle/nano/color-car-bg-2-1.png');
        $('.carColorCy').attr('src', 'images-pc-carstyle/nano/color-car-bg-2.png');
        $('.carColorCar').attr('src', 'images-pc-carstyle/nano/color-car-car-3.png');
    }

    if (ccIndex == 4) {
        $('.carColorBg').attr('src', 'images-pc-carstyle/nano/color-car-bg-2-1.png');
        $('.carColorCy').attr('src', 'images-pc-carstyle/nano/color-car-bg-2.png');
        $('.carColorCar').attr('src', 'images-pc-carstyle/nano/color-car-car-4.png');
    }

    if (ccIndex == 5) {
        $('.carColorBg').attr('src', 'images-pc-carstyle/nano/color-car-bg-3-1.png');
        $('.carColorCy').attr('src', 'images-pc-carstyle/nano/color-car-bg-3.png');
        $('.carColorCar').attr('src', 'images-pc-carstyle/nano/color-car-car-5.png');
    }
    if (ccIndex == 6) {
        $('.carColorBg').attr('src', 'images-pc-carstyle/nano/color-car-bg-3-1.png');
        $('.carColorCy').attr('src', 'images-pc-carstyle/nano/color-car-bg-3.png');
        $('.carColorCar').attr('src', 'images-pc-carstyle/nano/color-car-car-6.png');
    }
    if (ccIndex == 7) {
        $('.carColorBg').attr('src', 'images-pc-carstyle/nano/color-car-bg-4-1.png');
        $('.carColorCy').attr('src', 'images-pc-carstyle/nano/color-car-bg-4.png');
        $('.carColorCar').attr('src', 'images-pc-carstyle/nano/color-car-car-7.png');
    }
    if (ccIndex == 8) {
        $('.carColorBg').attr('src', 'images-pc-carstyle/nano/color-car-bg-4-1.png');
        $('.carColorCy').attr('src', 'images-pc-carstyle/nano/color-car-bg-4.png');
        $('.carColorCar').attr('src', 'images-pc-carstyle/nano/color-car-car-8.png');
    }
}

$('.top').on('click', function () {
    sensors_track('click_Nano_but_back', '五菱NanoEV量产款车型页-返回第一屏', '五菱NanoEV量产款车型页-参数配置','Top按钮点击')
    stm_clicki('send', 'event', '五菱NanoEV量产款车型页-参数配置', 'Top-点击','五菱NanoEV量产款');
    _jcq.push(['_track', "LCNanoEV_top", { content: "五菱NanoEV量产款车型页-返回第一屏" }]);
    
    swiperMain.slideTo(0, 0);
})
$('.nav li').on('click', function () {
    let idx = $(this).index()

    if (idx == 0) {
        sensors_track('click_Nano_home_Navigation01', '五菱NanoEV量产款车型页-01导航栏点击', '五菱NanoEV量产款车型页-首页', '导航栏按钮点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-导航栏', '车型首页-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_navigation", { content: "五菱NanoEV量产款车型页-车型首页导航栏点击" }]);
    }
    if (idx == 1) {
        sensors_track('click_Nano_home_Navigation01', '五菱NanoEV量产款车型页-02导航栏点击', '五菱NanoEV量产款车型页-首页', '导航栏按钮点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-导航栏', '预约试驾-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_navigation", { content: "五菱NanoEV量产款车型页-预约试驾导航栏点击" }]);
    }
    if (idx == 2) {
        sensors_track('click_Nano_home_Navigation01', '五菱NanoEV量产款车型页-03导航栏点击', '五菱NanoEV量产款车型页-首页', '导航栏按钮点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-导航栏', '购车权益-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_navigation", { content: "五菱NanoEV量产款车型页-购车权益导航栏点击" }]);
    }
    if (idx == 3) {
        sensors_track('click_Nano_home_Navigation01', '五菱NanoEV量产款车型页-04导航栏点击', '五菱NanoEV量产款车型页-首页', '导航栏按钮点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-导航栏', '潮色自定-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_navigation", { content: "五菱NanoEV量产款车型页-潮色自定导航栏点击" }]);
    }
    if (idx == 4) {
        sensors_track('click_Nano_home_Navigation01', '五菱NanoEV量产款车型页-05导航栏点击', '五菱NanoEV量产款车型页-首页', '导航栏按钮点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-导航栏', '玩趣自乐-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_navigation", { content: "五菱NanoEV量产款车型页-玩趣自乐导航栏点击" }]);
    }
    if (idx == 5) {
        sensors_track('click_Nano_home_Navigation01', '五菱NanoEV量产款车型页-06导航栏点击', '五菱NanoEV量产款车型页-首页', '导航栏按钮点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-导航栏', '轻松自得-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_navigation", { content: "五菱NanoEV量产款车型页-轻松自得导航栏点击" }]);
    }
    if (idx == 6) {
        sensors_track('click_Nano_home_Navigation01', '五菱NanoEV量产款车型页-07导航栏点击', '五菱NanoEV量产款车型页-首页', '导航栏按钮点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-导航栏', '车型美图-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_navigation", { content: "五菱NanoEV量产款车型页-车型美图导航栏点击" }]);
    }
    if (idx == 7) {
        sensors_track('click_Nano_home_Navigation01', '五菱NanoEV量产款车型页-08导航栏点击', '五菱NanoEV量产款车型页-首页', '导航栏按钮点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-导航栏', '参数配置-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_navigation", { content: "五菱NanoEV量产款车型页-参数配置导航栏点击" }]);
    }

    swiperMain.slideTo(idx, 0);
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

let imgNum = 8;
for (let index = 1; index <= imgNum; index++) {
    let imgCont = '<div class="swiper-slide"><img src="images-pc-carstyle/nano/img/pc-p6-img-' + index + '.jpg"></div>'

    $('.img-wrap-b .swiper-wrapper').append(imgCont)
}
var swiperImgB = new Swiper('.img-wrap-b .swiper-container', {
    loop: false,
    mousewheelControl: false,
    simulateTouch: false,
    onSlideChangeEnd: function (swiper) {
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-车型美图', '车图-互动','五菱NanoEV量产款');
    }
});

let _num = 0;
$('.img-wrap-s ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
    _num = $(this).index();
    sensors_track('click_Nano_pic_photo1', '五菱NanoEV量产款车型页-车型美图-小图' + _num + '点击', '五菱NanoEV量产款车型页-车型美图', '车型美图-小图点击')
    _jcq.push(['_track', "LCNanoEV_picture", { content: "五菱NanoEV量产款车型页-车型美图-小图"+_num+"点击" }]);
    if (_num < 5) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    if (_num == 5) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * (_num - 1) + 'px)')
    }
    console.log(_num)
    swiperImgB.slideTo(_num)
})
$('.prev, .next').on('click', function () {
    if ($(this).hasClass('prev')) {
        if (_num != 0) {
            _num = _num - 1
        }
    } else {
        if (_num < 7) {
            _num = _num + 1
        }
    }
    $('.img-wrap-s ul li').eq(_num).addClass('active').siblings().removeClass('active')
    if (_num < 5) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    if (_num == 5) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * (_num - 1) + 'px)')
    }
    swiperImgB.slideTo(_num)
})

$('.img-wrap-s .prev').click(function () {
    sensors_track('click_Nano_pic_up', '五菱NanoEV量产款车型页-车型美图-上箭头', '五菱NanoEV量产款车型页-车型美图', '车型美图-上箭头点击')
    _jcq.push(['_track', "LCNanoEV_up", { content: "五菱NanoEV量产款车型页-车型美图-上箭头" }]);
})

$('.img-wrap-s .next').click(function () {
    sensors_track('click_Nano_pic_down', '五菱NanoEV量产款车型页-车型美图-下箭头', '五菱NanoEV量产款车型页-车型美图', '车型美图-下箭头点击')
    _jcq.push(['_track', "LCNanoEV_down", { content: "五菱NanoEV量产款车型页-车型美图-下箭头" }]);
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

    if (num == 1) {
        sensors_track('click_Nano_play_more', '五菱NanoEV量产款车型页-玩趣自乐展开更多点击', '五菱NanoEV量产款车型页-玩趣自乐', '展开更多点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-玩趣自乐', '展开更多-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_Joy_more", { content: "五菱NanoEV量产款车型页-玩趣自乐展开更多点击" }]);
    }

    if (num == 2) {
        sensors_track('click_Nano_relax_more', '五菱NanoEV量产款车型页-轻松自得展开更多点击', '五菱NanoEV量产款车型页-轻松自得', '展开更多点击')
        stm_clicki('send', 'event', '五菱NanoEV量产款车型页-轻松自得', '展开更多-点击','五菱NanoEV量产款');
        _jcq.push(['_track', "LCNanoEV_Relax_more", { content: "五菱NanoEV量产款车型页-轻松自得展开更多点击" }]);
    }
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

var carType = 0;
$('.colors ul li').on('click', function () {
    ccIndex = 1;
    carType = $(this).index();
    $('.colors ul li').eq(carType).addClass('active').siblings().removeClass('active')
    switch (Number(carType)) {
        case 0:
            $('.bottomTip').show();
            $('.carPrice').html('<span style="font-weight: bold;"><i class="p">￥</i><i class="pri">56,800</i><i class="p">元</i></span><span class="carDistance" style="position: relative;">续航里程305KM</span>')
            sensors_track('click_Nano_colour_happy', '五菱NanoEV量产款车型页-玩乐款点击', '五菱NanoEV量产款车型页-潮色自定', '车型切换点击')
            stm_clicki('send', 'event', '五菱NanoEV量产款车型页-潮色自定', '切换玩乐款车型-点击','五菱NanoEV量产款');
            _jcq.push(['_track', "LCNanoEV_car", { content: "五菱NanoEV量产款车型页-玩乐款点击" }]);
            break;
        case 1:
                $('.bottomTip').hide();
                $('.carPrice').html('<span style="font-weight: bold;"><i class="p">￥</i><i class="pri">60,800</i><i class="p">元</i></span><span class="carDistance" style="position: relative;">续航里程305KM</span>')
                sensors_track('click_Nano_colour_love', '五菱NanoEV量产款车型页-乐享款点击', '五菱NanoEV量产款车型页-潮色自定', '车型切换点击')
                stm_clicki('send', 'event', '五菱NanoEV量产款车型页-潮色自定', '切换乐享款车型-点击','五菱NanoEV量产款');
                _jcq.push(['_track', "LCNanoEV_car", { content: "五菱NanoEV量产款车型页-乐享款点击" }]);
                break;
        case 2:
            $('.bottomTip').hide();
            $('.carPrice').html('<span style="font-weight: bold;"><i class="p">￥</i><i class="pri">61,800</i><i class="p">元</i></span><span class="carDistance" style="position: relative;">续航里程305KM</span>')
            sensors_track('click_Nano_colour_love', '五菱NanoEV量产款车型页-热爱款点击', '五菱NanoEV量产款车型页-潮色自定', '车型切换点击')
            stm_clicki('send', 'event', '五菱NanoEV量产款车型页-潮色自定', '切换热爱款车型-点击','五菱NanoEV量产款');
            _jcq.push(['_track', "LCNanoEV_car", { content: "五菱NanoEV量产款车型页-热爱款点击" }]);
            break;
    }
    carChange(ccIndex);
})
$('.car-btn').on('click', function () {
    swiperMain.slideTo(7);
    _jcq.push(['_track', "HGplus_test_driving", { content: carTypeTxt + "预约试驾" }])

    sensors_track("click_hongguangPlus_model_color_reserve", "宏光Plus车型颜色页-（" + carTypeTxt + "型）预约试驾按钮点击", "浏览五菱官网宏光Plus车型颜色页", "宏光Plus车型颜色页-（" + carTypeTxt + "型）预约试驾按钮点击");
})

$('.video-txt').on('click', function () {
    $('.video-wrap').fadeIn();
    $('#video').attr('src', '../nanovideos/v1.mp4');
    $('#video')[0].play();
    // $('.slideVideo').addClass('swiper-no-swiping')
    // swiperMain.disableMousewheelControl();
})

$('.video-wrap .close').on('click', function () {
    $('.video-wrap').fadeOut();
    $('#video')[0].pause();
    $('#video').attr('src', '');
    // $('.slideVideo').removeClass('swiper-no-swiping')
    // swiperMain.enableMousewheelControl();
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
    sensors_track('click_Nano_message_secret_tick', '五菱NanoEV量产款车型页-隐私条款勾选', '五菱NanoEV量产款车型页-留资', '隐私条款勾选点击')
    _jcq.push(['_track', "LCNanoEV_privacyagree", { content: "五菱NanoEV量产款车型页-隐私条款勾选" }]);
    if (that.hasClass("active")) {
        that.removeClass("active");
    } else {
        that.addClass("active");
        _jcq.push(['_track', "LCNanoEV_agree"]); 
    }
});

var winHeight = $(window).height();

$('.slideP4-1').scroll(function () {
    var a = $('.slideP4-1').scrollTop();

    if (a > $('.slideP4-1 .more-warp .box .fullSubImg1').height() + winHeight - 800) {
        $('.slideP4-1 .more-warp .box .title1,.slideP4-1 .more-warp .box .title1-1').addClass('on')
    }

    if (a > $('.slideP4-1 .more-warp .box .fullSubImg1').height() + $('.slideP4-1 .more-warp .box .fullSubImg2').height() + winHeight - 1200) {
        $('.slideP4-1 .more-warp .box .title2').addClass('on')
    }

    if (a > $('.slideP4-1 .more-warp .box .fullSubImg1').height() + $('.slideP4-1 .more-warp .box .fullSubImg2').height() + $('.slideP4-1 .more-warp .box .fullSubImg3').height() + winHeight - 1500) {
        $('.slideP4-1 .more-warp .box .title3').addClass('on')
        $('.slideP4-1 .more-warp .box .title4').addClass('on')
    }

})

$('.slideP4-2').scroll(function () {
    var a = $('.slideP4-2').scrollTop();

    if (a > $('.slideP4-2 .more-warp .box .fullSubImg1').height() + winHeight - 500) {
        $('.slideP4-2 .more-warp .box .title1').addClass('on')
        $('.slideP4-2 .more-warp .box .title2').addClass('on')
    }

    if (a > $('.slideP4-2 .more-warp .box .fullSubImg1').height() + $('.slideP4-2 .more-warp .box .fullSubImg2').height() + winHeight - 800) {
        $('.slideP4-2 .more-warp .box .title3').addClass('on')
    }

    if (a > $('.slideP4-2 .more-warp .box .fullSubImg1').height() + $('.slideP4-2 .more-warp .box .fullSubImg2').height() + $('.slideP4-2 .more-warp .box .fullSubImg3').height() + winHeight - 1200) {
        $('.slideP4-2 .more-warp .box .title4').addClass('on')
        $('.slideP4-2 .more-warp .box .title5').addClass('on')
        $('.slideP4-2 .more-warp .box .title6').addClass('on')
    }

})

$('.slideP4-3').scroll(function () {
    var a = $('.slideP4-3').scrollTop();
    if (a > winHeight - 10) {
        $('.slideP4-3 .more-warp .box .title1,.slideP4-3 .more-warp .box .txt1').addClass('on')
    }

    if (a > winHeight + $('.slideP4-3 .more-warp .box .fullSubImg1').height() - 300) {
        $('.slideP4-3 .more-warp .box .title2').addClass('on')
    }

    if (a > winHeight + $('.slideP4-3 .more-warp .box .fullSubImg1').height() + 100) {
        $('.slideP4-3 .more-warp .box .txt2').addClass('on')
    }

    if (a > winHeight + $('.slideP4-3 .more-warp .box .fullSubImg1').height() + $('.slideP4-3 .more-warp .box .fullSubImg2').height() - 200) {
        $('.slideP4-3 .more-warp .box .title3').addClass('on')
    }

    if (a > winHeight + $('.slideP4-3 .more-warp .box .fullSubImg1').height() + $('.slideP4-3 .more-warp .box .fullSubImg2').height()) {
        $('.slideP4-3 .more-warp .box .txt3').addClass('on')
    }

})



// var ms2
$('.rule_btn').on('click', function () {
    $('.popUp-wrap').fadeIn();
    sensors_track('click_Nano_message_secret', '五菱NanoEV量产款车型页-隐私条款点击', '五菱NanoEV量产款车型页-留资', '隐私条款点击')
    _jcq.push(['_track', "LCNanoEV_privacy", { content: "五菱NanoEV量产款车型页-隐私条款点击" }]);
    // ms2 = new IScroll('#scroll2', {
    //     scrollbars: true,
    //     scrollbars: 'custom',
    //     bounce: false,
    //     mouseWheel: true,
    //     preventDefault: false
    // });

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
    _jcq.push(['_track', 'LCNanoEV_top_banner', { content: '五菱logo' }]);
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
    _jcq.push(['_track', 'LCNanoEV_top_banner', { content: '车型' }]);
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
    _jcq.push(['_track', 'LCNanoEV_top_banner', { content: '购车指南' }]);
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
    _jcq.push(['_track', 'LCNanoEV_top_banner', { content: '品牌故事' }]);
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
    _jcq.push(['_track', 'LCNanoEV_top_banner', { content: '在线客服' }]);
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
    _jcq.push(['_track', 'LCNanoEV_top_banner', { content: '预约试驾' }]);
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
    _jcq.push(['_track', 'LCNanoEV_dibu', { content: '隐私法律' }]);
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
    _jcq.push(['_track', 'LCNanoEV_dibu', { content: '前往了解宝骏汽车' }]);
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
    _jcq.push(['_track', 'LCNanoEV_dibu', { content: 'ICP备案号' }]);
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
    _jcq.push(['_track', 'LCNanoEV_dibu', { content: '公安部备案号' }]);
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

$('.btn-prev').click(function () {
    stm_clicki('send', 'event', '宏光PLUS-参数配置', '上一页-点击', '宏光PLUS');
    _jcq.push(['_track', "HGPLUS_configuration", { content: "上一页" }])
})

$('.btn-next').click(function () {
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
    if (pzNum == 7 || pzNum == 0) {
        $(this).addClass('disabled')
    }
    var imgDiv = '<img class="img on" on-src="images-pc-carstyle/nano/peizhi/images/peizhi' + pzNum + '_02.png" off-src="images-pc-carstyle/nano/peizhi/peizhi_02.png" src="images-pc-carstyle/nano/peizhi/images/peizhi' + pzNum + '_02.png">' +
        '<img class="img" on-src="images-pc-carstyle/nano/peizhi/images/peizhi' + pzNum + '_03.png" off-src="images-pc-carstyle/nano/peizhi/peizhi_03.png" src="images-pc-carstyle/nano/peizhi/peizhi_03.png">' +
        '<img class="img" on-src="images-pc-carstyle/nano/peizhi/images/peizhi' + pzNum + '_04.png" off-src="images-pc-carstyle/nano/peizhi/peizhi_04.png" src="images-pc-carstyle/nano/peizhi/peizhi_04.png">' +
        '<img class="img" on-src="images-pc-carstyle/nano/peizhi/images/peizhi' + pzNum + '_05.png" off-src="images-pc-carstyle/nano/peizhi/peizhi_05.png" src="images-pc-carstyle/nano/peizhi/peizhi_05.png">' +
        '<img class="img" on-src="images-pc-carstyle/nano/peizhi/images/peizhi' + pzNum + '_06.png" off-src="images-pc-carstyle/nano/peizhi/peizhi_06.png" src="images-pc-carstyle/nano/peizhi/peizhi_06.png">' +
        '<img class="img" on-src="images-pc-carstyle/nano/peizhi/images/peizhi' + pzNum + '_07.png" off-src="images-pc-carstyle/nano/peizhi/peizhi_07.png" src="images-pc-carstyle/nano/peizhi/peizhi_07.png">' +
        '<img class="img" on-src="images-pc-carstyle/nano/peizhi/images/peizhi' + pzNum + '_08.png" off-src="images-pc-carstyle/nano/peizhi/peizhi_08.png" src="images-pc-carstyle/nano/peizhi/peizhi_08.png">' +
        '<img class="img" on-src="images-pc-carstyle/nano/peizhi/images/peizhi' + pzNum + '_09.png" off-src="images-pc-carstyle/nano/peizhi/peizhi_09.png" src="images-pc-carstyle/nano/peizhi/peizhi_09.png">' +
        '<img class="img" on-src="images-pc-carstyle/nano/peizhi/images/peizhi' + pzNum + '_10.png" off-src="images-pc-carstyle/nano/peizhi/peizhi_10.png" src="images-pc-carstyle/nano/peizhi/peizhi_10.png">' +
        '<img class="img" on-src="images-pc-carstyle/nano/peizhi/images/peizhi' + pzNum + '_11.png" off-src="images-pc-carstyle/nano/peizhi/peizhi_11.png" src="images-pc-carstyle/nano/peizhi/peizhi_11.png">'
    $('.slidePeizhi-wrap .img-wrap div').html(imgDiv)
    $('.slidePeizhi-wrap .head-img').attr('src', 'images-pc-carstyle/nano/peizhi/peizhi' + pzNum + '.png')
    $('.slidePeizhi .slidePeizhi-wrap .btn-wrap p').html(pzArr[pzNum])
    setTimeout(function () {
        ms.destroy();
        ms = null;
        ms = new IScroll('#scroll1', {
            scrollbars: true,
            // scrollbars: 'custom',
            interactiveScrollbars: true,
            bounce: false,
            mouseWheel: true,
            preventDefault: false
        });
    }, 200)
})


$('.btn-llb').hover(function () {
    $(this).attr('src', 'images-pc-carstyle/nano/btn-llb-on.png')
}, function () {
    $(this).attr('src', 'images-pc-carstyle/nano/btn-llb.png')
})

$('.btn-tm').hover(function () {
    $(this).attr('src', 'images-pc-carstyle/nano/btn-tm-on.png')
}, function () {
    $(this).attr('src', 'images-pc-carstyle/nano/btn-tm.png')
})

$('.btn-jd').hover(function () {
    $(this).attr('src', 'images-pc-carstyle/nano/btn-jd-on.png')
}, function () {
    $(this).attr('src', 'images-pc-carstyle/nano/btn-jd.png')
})