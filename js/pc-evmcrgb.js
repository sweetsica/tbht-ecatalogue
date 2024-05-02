$(function () {
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
    { src: "images-pc-carstyle/evmcrgb/try-1.jpg" },
    { src: "images-pc-carstyle/evmcrgb/try-2.jpg" },
    { src: "images-pc-carstyle/evmcrgb/try-3.jpg" },
    { src: "images-pc-carstyle/evmcrgb/pc-full-1.jpg" },
    { src: "images-pc-carstyle/evmcrgb/pc-full-3.jpg" },
    { src: "images-pc-carstyle/evmcrgb/pc-full-1-img-1.jpg" },
    { src: "images-pc-carstyle/evmcrgb/pc-full-1-img-2.jpg" },
    { src: "images-pc-carstyle/evmcrgb/pc-full-1-img-3.jpg" },
    { src: "images-pc-carstyle/evmcrgb/pc-full-2-img-1.jpg" },
    { src: "images-pc-carstyle/evmcrgb/pc-full-2-img-2.jpg" },
    { src: "images-pc-carstyle/evmcrgb/pc-full-2-img-3.jpg" },
    { src: "images-pc-carstyle/evmcrgb/pc-full-3-img-1.jpg" },
    { src: "images-pc-carstyle/evmcrgb/pc-full-3-img-2.jpg" },
    { src: "images-pc-carstyle/evmcrgb/pc-full-3-img-3.jpg" },
    { src: "images-pc-carstyle/evmcrgb/img/pc-p6-img-1.jpg" },
    { src: "images-pc-carstyle/evmcrgb/img/pc-p6-img-2.jpg" },
    { src: "images-pc-carstyle/evmcrgb/img/pc-p6-img-3.jpg" },
    { src: "images-pc-carstyle/evmcrgb/img/pc-p6-img-4.jpg" },
    { src: "images-pc-carstyle/evmcrgb/img/pc-p6-img-5.jpg" },
    { src: "images-pc-carstyle/evmcrgb/img/pc-p6-img-6.jpg" }
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
var jcqPvName = ['明星页划动', '视频页划动', '留资页划动', '活出潮范划动', '车颜色页划动', '潮势所趋划动', '小而强大划动', '车型美图划动', '参数配置划动'];
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
        if (idx == 8 && isF) {
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

        }
        if (swiper.activeIndex == 1) {
            sensors_view('browse_MINIEV_Macaron_carstyle_video', '浏览视频播放2-展示', '五菱官网MINIEV Macaron视频播放2-展示')
            stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '视频播放【2】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 2) {
            sensors_view('browse_MINIEV_Macaron_carstyle_testdrive', '浏览预约试驾3-展示', '五菱官网MINIEV Macaron预约试驾3-展示')
            stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '预约试驾【3】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 3) {
            sensors_view('browse_MINIEV_Macaron_carstyle_fashion', '浏览亮点_时尚跨界4-展示', '五菱官网MINIEV Macaron亮点_时尚跨界4-展示')
            stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '亮点_时尚跨界【4】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 4) {
            sensors_view('browse_MINIEV_Macaron_carstyle_color', '浏览车颜色5-展示', '五菱官网MINIEV Macaron车颜色5-展示')
            stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '车颜色【5】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 5) {
            sensors_view('browse_MINIEV_Macaron_carstyle_trend', '浏览亮点_潮势所趋6-展示', '五菱官网MINIEV Macaron亮点_潮势所趋6-展示')
            stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '亮点_潮势所趋【6】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 6) {
            sensors_view('browse_MINIEV_Macaron_carstyle_hightlight', '浏览亮点_小而强大7-展示', '五菱官网MINIEV Macaron亮点_小而强大7-展示')
            stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '亮点_小而强大【7】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 7) {
            $('.swiper-mainBody').css('background', '#fff');
            stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '车型美图【8】-展示', '宏光MINI EV-展示');
        }
        if (swiper.activeIndex == 8) {
            stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '参数配置【8】-展示', '宏光MINI EV-展示');
        }
    },
    onSlidePrevEnd: function (swiper) {
        var idx = swiper.activeIndex;
        _jcq.push(['_track', "MINIEVMacaron_viewslide", { content: "五菱MINIEV 马卡龙上市-" + jcqPvName[idx + 1] }]);
        console.log(jcqPvName[idx + 1])
    },
    onSlideNextEnd: function (swiper) {
        var idx = swiper.activeIndex;
        _jcq.push(['_track', "MINIEVMacaron_viewslide", { content: "五菱MINIEV 马卡龙上市-" + jcqPvName[idx - 1] }]);
        console.log(jcqPvName[idx - 1])
    }
});
// swiperMain.slideTo(5)

$('.home-play').click(function () {
    $('#video').attr('src', 'macvideos/v1.mp4');
    $('.video-wrap').fadeIn();
    $('#video')[0].play();

    sensors_track('click_MINIEV_Macaron_carstyle_video', '五菱官网宏光MINI EV马卡龙车型页-视频播放', '视频播放-点击')
    stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-视频播放', '视频播放-点击', '宏光MINI EV');
    _jcq.push(['_track', "MINIEVMacaron_video", { content: "五菱MINIEV 马卡龙上市-视频点击" }]);
})

$('.slideP4-2 .title1').click(function () {
    $('#video').attr('src', 'macvideos/v1.mp4');
    $('.video-wrap').fadeIn();
    $('#video')[0].play();

    sensors_track('click_MINIEV_Macaron_carstyle_trend_video', '五菱官网宏光MINI EV马卡龙车型页-亮点-潮势所趋-视频播放', '视频播放-点击')
    stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-亮点_潮势所趋_视频播放', '视频播放-点击', '宏光MINI EV');
    _jcq.push(['_track', "MINIEVMacaron_video", { content: "五菱MINIEV 马卡龙上市-潮势所趋-视频" }]);
})

var tryImgNum = 0;
var tryTimer;

function tryChange() {
    clearInterval(tryTimer)
    tryTimer = setInterval(function () {
        tryImgNum++;

        if (tryImgNum > 7) {
            tryImgNum = 1;
        }
        $('.slideTry .bom span').eq(tryImgNum - 1).addClass('on').siblings().removeClass('on');
        $('.slideTry .bg.bg' + (tryImgNum - 1)).addClass('on').siblings('.bg').removeClass('on');
    }, 3000)
}

tryChange()

$('.slideTry .bom span').click(function () {
    clearInterval(tryTimer)
    var index = $(this).index();
    tryImgNum = index + 1;
    $(this).addClass('on').siblings().removeClass('on');
    $('.slideTry .bg.bg' + tryImgNum).addClass('on').siblings('.bg').removeClass('on');
})

$('.btnYue').click(function () {
    $('.yuWin').fadeIn();
    sensors_track('click_MINIEV_Macaron_carstyle_testdrive', '五菱官网宏光MINI EV马卡龙车型页-明星页', '预约试驾-点击')
    stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-明星页', '预约试驾-点击', '宏光MINI EV');
    _jcq.push(['_track', "MINIEVMacaron_testdrive", { content: "五菱MINIEV 马卡龙上市-预约试驾" }]);
})
$('.yuWin .yuBox .close').click(function () {
    $('.yuWin').fadeOut();
})

$('.btnJin').click(function () {
    $('.jinWin').fadeIn();
    sensors_track('click_MINIEV_Macaron_carstyle_finance', '五菱官网宏光MINI EV马卡龙车型页-明星页', '金融计算器-点击')
    stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-明星页', '金融计算器-点击', '宏光MINI EV');
    _jcq.push(['_track', "MINIEVMacaron_calculator", { content: "五菱MINIEV 马卡龙上市-金融计算器" }]);
})
$('.jinWin .jinBox .close').click(function () {
    $('.jinWin').fadeOut();
})

$('.home-arrow').on('click', function () {
    swiperMain.slideTo(1);
})

$('.colorBtns .cb').hover(function () {
    var index = $(this).index() + 1;

    if (index == 1) {
        $('.tipTxt').css({
            left: '8%',
            top: '-50%'
        }).text('牛油果绿拼白');
    }
    if (index == 2) {
        $('.tipTxt').css({
            left: '8%',
            top: '-50%'
        }).text('牛油果绿拼黑');
    }
    if (index == 3) {
        $('.tipTxt').css({
            left: '8%',
            top: '-50%'
        }).text('牛油果绿纯色');
    }
    if (index == 4) {
        $('.tipTxt').css({
            left: '43%',
            top: '-50%'
        }).text('白桃粉拼白');
    }
    if (index == 5) {
        $('.tipTxt').css({
            left: '43%',
            top: '-50%'
        }).text('白桃粉拼黑');
    }
    if (index == 6) {
        $('.tipTxt').css({
            left: '43%',
            top: '-50%'
        }).text('白桃粉纯色');
    }
    if (index == 7) {
        $('.tipTxt').css({
            left: '76%',
            top: '-50%'
        }).text('柠檬黄拼白');
    }
    if (index == 8) {
        $('.tipTxt').css({
            left: '76%',
            top: '-50%'
        }).text('柠檬黄拼黑');
    }
    if (index == 9) {
        $('.tipTxt').css({
            left: '76%',
            top: '-50%'
        }).text('柠檬黄纯色');
    }

    if (index == 10) {
        $('.tipTxt').css({
            left: '10%',
            top: '118%'
        }).text('生椰白拼白');
    }
    if (index == 11) {
        $('.tipTxt').css({
            left: '10%',
            top: '118%'
        }).text('生椰白拼黑');
    }
    if (index == 12) {
        $('.tipTxt').css({
            left: '10%',
            top: '118%'
        }).text('生椰白纯色');
    }
    if (index == 13) {
        $('.tipTxt').css({
            left: '23%',
            top: '118%'
        }).text('薰衣草紫拼白');
    }
    if (index == 14) {
        $('.tipTxt').css({
            left: '23%',
            top: '118%'
        }).text('薰衣草紫拼黑');
    }
    if (index == 15) {
        $('.tipTxt').css({
            left: '68%',
            top: '118%'
        }).text('青柠黄拼白');
    }

    if (index == 16) {
        $('.tipTxt').css({
            left: '68%',
            top: '118%'
        }).text('青柠黄拼黑');
    }
})

var ccIndex;
var ifClisk = true;
$('.colorBtns .cb').click(function () {
    if (ifClisk) {
        ifClisk = false;
        var ccIndex = $(this).data('index');
        $(this).addClass('act').siblings().removeClass('act');
        $('.c2').css('transform', 'scale(.999)')

        carChange(ccIndex);
        setTimeout(function () {
            ifClisk = true;
            $('.c2').css('transform', 'scale(1)')
        }, 1000)
    }

})

function carChange(ccIndex) {
    $('.carColorCry').attr('src', 'images-pc-carstyle/evmcrgb/cr-' + ccIndex + '.png');

    if (ccIndex == 1) {
        $('.carColorCar').css('background', '#dcf1e5');
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/gree-tit.png')
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-lv-1.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/green-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_牛油果绿拼白-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_牛油果绿拼白-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-牛油果绿拼白颜色点击" }]);
    }

    if (ccIndex == 2) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/gree-tit.png')
        $('.carColorCar').css('background', '#dcf1e5');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-lv-2.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/green-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_牛油果绿拼黑-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_牛油果绿拼黑-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-牛油果绿拼黑颜色点击" }]);
    }

    if (ccIndex == 3) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/gree-tit.png')
        $('.carColorCar').css('background', '#dcf1e5');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-lv-3.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/green-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_牛油果绿纯色-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_牛油果绿纯色-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-牛油果绿纯色颜色点击" }]);
    }

    if (ccIndex == 4) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/pink-tit.png')
        $('.carColorCar').css('background', '#fff0f0');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-pink-1.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/pink-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_白桃粉拼黑-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_白桃粉拼黑-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-白桃粉拼黑颜色点击" }]);
    }

    if (ccIndex == 5) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/pink-tit.png')
        $('.carColorCar').css('background', '#fff0f0');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-pink-2.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/pink-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_白桃粉拼黑-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_白桃粉拼黑-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-白桃粉拼黑颜色点击" }]);
    }

    if (ccIndex == 6) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/pink-tit.png')
        $('.carColorCar').css('background', '#fff0f0');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-pink-3.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/pink-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_白桃粉纯色-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_白桃粉纯色-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-白桃粉纯色颜色点击" }]);
    }

    if (ccIndex == 7) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/yellow-tit.png')
        $('.carColorCar').css('background', '#fcf3dc');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-yellow-1.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/yellow-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_柠檬黄拼白-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_柠檬黄拼白-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-柠檬黄拼白颜色点击" }]);
    }

    if (ccIndex == 8) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/yellow-tit.png')
        $('.carColorCar').css('background', '#fcf3dc');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-yellow-2.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/yellow-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_柠檬黄拼黑-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_柠檬黄拼黑-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-柠檬黄拼黑颜色点击" }]);
    }

    if (ccIndex == 9) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/yellow-tit.png')
        $('.carColorCar').css('background', '#fcf3dc');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-yellow-3.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/yellow-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_柠檬黄纯色-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_柠檬黄纯色-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-柠檬黄纯色颜色点击" }]);
    }

    if (ccIndex == 10) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/yezi-tit.png')
        $('.carColorCar').css('background', '#fef6e2');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-yezi-1.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/yezi-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_生椰白拼白-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_生椰白拼白-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-生椰白拼白颜色点击" }]);
    }

    if (ccIndex == 11) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/yezi-tit.png')
        $('.carColorCar').css('background', '#fef6e2');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-yezi-2.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/yezi-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_生椰白拼黑-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_生椰白拼黑-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-生椰白拼黑颜色点击" }]);
    }

    if (ccIndex == 12) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/yezi-tit.png')
        $('.carColorCar').css('background', '#fef6e2');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-yezi-3.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/yezi-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_梅洛蓝纯色-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_梅洛蓝纯色-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-梅洛蓝纯色颜色点击" }]);
    }

    if (ccIndex == 13) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/zise-tit.png')
        $('.carColorCar').css('background', '#cbd1f7');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-zise-1.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/zise-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_薰衣草紫拼白-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_薰衣草紫拼白-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-薰衣草紫拼白颜色点击" }]);
    }

    if (ccIndex == 14) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/zise-tit.png')
        $('.carColorCar').css('background', '#cbd1f7');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-zise-2.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/zise-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_薰衣草紫拼黑-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_薰衣草紫拼黑-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-薰衣草紫拼黑颜色点击" }]);
    }

    if (ccIndex == 15) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/qingning-tit.png')
        $('.carColorCar').css('background', '#f7fcba');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-qingning-1.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/qingning-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_青柠黄拼白-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_青柠黄拼白-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-青柠黄拼白颜色点击" }]);
    }

    if (ccIndex == 16) {
        $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/qingning-tit.png')
        $('.carColorCar').css('background', '#f7fcba');
        $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-qingning-2.png');
        $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/qingning-cr.png')

        sensors_track('click_MINIEV_Macaron_carstyle_color', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_青柠黄拼黑-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型颜色_青柠黄拼黑-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_colour", { content: "五菱MINIEV 马卡龙上市-青柠黄拼黑颜色点击" }]);
    }

    var img = $('.cri.c1').attr('src')
    $('.cri.c1').addClass('act');

    setTimeout(function () {
        $('.cri.c1').removeClass('act')
        $('.cri.c2').attr('src', img)
    }, 900)
}

$('.top').on('click', function () {
    swiperMain.slideTo(0, 0);
    sensors_track('click_MINIEV_Macaron_carstyle_top', '五菱官网宏光MINI EV马卡龙车型页-底部', 'Top-点击')
    stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-底部', 'Top-点击', '宏光MINI EV');
    _jcq.push(['_track', "MINIEVMacaron_returntop", { content: "五菱MINIEV 马卡龙上市-返回第一屏" }]);
})
$('.nav li').on('click', function () {
    let idx = $(this).index()

    if (idx == 0) {
        sensors_track('click_MINIEV_Macaron_carstyle_sidebar', '五菱官网宏光MINI EV马卡龙车型页-侧边导航栏-明星试驾', '侧边导航栏')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-侧边导航栏', '明星试驾', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_navigation", { content: "五菱MINIEV 马卡龙上市-明星试驾导航栏点击" }]);
        console.log('明星试驾导航栏点击')
    }
    if (idx == 1) {
        sensors_track('click_MINIEV_Macaron_carstyle_sidebar', '五菱官网宏光MINI EV马卡龙车型页-侧边导航栏-精彩视频', '侧边导航栏')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-侧边导航栏', '精彩视频', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_navigation", { content: "五菱MINIEV 马卡龙上市-精彩视频导航栏点击" }]);
        console.log('精彩视频导航栏点击')
    }
    if (idx == 2) {
        sensors_track('click_MINIEV_Macaron_carstyle_sidebar', '五菱官网宏光MINI EV马卡龙车型页-侧边导航栏-留资', '侧边导航栏')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-侧边导航栏', '留资', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_navigation", { content: "五菱MINIEV 马卡龙上市-留资导航栏点击" }]);
        console.log('留资导航栏点击')
    }
    if (idx == 3) {
        sensors_track('click_MINIEV_Macaron_carstyle_sidebar', '五菱官网宏光MINI EV马卡龙车型页-侧边导航栏-时尚潮范', '侧边导航栏')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-侧边导航栏', '时尚潮范', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_navigation", { content: "五菱MINIEV 马卡龙上市-时尚潮范导航栏点击" }]);
        console.log('时尚潮范导航栏点击')
    }
    if (idx == 4) {
        sensors_track('click_MINIEV_Macaron_carstyle_sidebar', '五菱官网宏光MINI EV马卡龙车型页-侧边导航栏-精彩春色', '侧边导航栏')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-侧边导航栏', '精彩春色', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_navigation", { content: "五菱MINIEV 马卡龙上市-精彩春色导航栏点击" }]);
        console.log('精彩春色导航栏点击')
    }
    if (idx == 5) {
        sensors_track('click_MINIEV_Macaron_carstyle_sidebar', '五菱官网宏光MINI EV马卡龙车型页-侧边导航栏-潮势所趋', '侧边导航栏')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-侧边导航栏', '潮势所趋', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_navigation", { content: "五菱MINIEV 马卡龙上市-潮势所趋导航栏点击" }]);
        console.log('潮势所趋导航栏点击')
    }
    if (idx == 6) {
        sensors_track('click_MINIEV_Macaron_carstyle_sidebar', '五菱官网宏光MINI EV马卡龙车型页-侧边导航栏-小而强大', '侧边导航栏')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-侧边导航栏', '小而强大', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_navigation", { content: "五菱MINIEV 马卡龙上市-小而强大导航栏点击" }]);
        console.log('小而强大导航栏点击')
    }
    if (idx == 7) {
        sensors_track('click_MINIEV_Macaron_carstyle_sidebar', '五菱官网宏光MINI EV马卡龙车型页-侧边导航栏-车型美图', '侧边导航栏')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-侧边导航栏', '车型美图', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_navigation", { content: "五菱MINIEV 马卡龙上市-车型美图导航栏点击" }]);
        console.log('车型美图导航栏点击')
    }
    if (idx == 8) {
        sensors_track('click_MINIEV_Macaron_carstyle_sidebar', '五菱官网宏光MINI EV马卡龙车型页-侧边导航栏-参数配置', '侧边导航栏')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-侧边导航栏', '参数配置', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_navigation", { content: "五菱MINIEV 马卡龙上市-参数配置导航栏点击" }]);
        console.log('参数配置导航栏点击')
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

let imgNum = 10;
for (let index = 1; index <= imgNum; index++) {
    let imgCont = '<div class="swiper-slide"><img src="images-pc-carstyle/evmcrgb/img/pc-p6-img-' + index + '.jpg"></div>'

    $('.img-wrap-b .swiper-wrapper').append(imgCont)
}
var swiperImgB = new Swiper('.img-wrap-b .swiper-container', {
    loop: false,
    mousewheelControl: false,
    simulateTouch: false,
    onSlideChangeEnd: function (swiper) {
        sensors_track('click_MINIEV_Macaron_carstyle_carpic', '五菱官网宏光MINI EV马卡龙车型页-车型美图', '车图-互动')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型美图', '车图-互动', '宏光MINI EV');
    }
});

let _num = 0;
$('.img-wrap-s ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
    _num = $(this).index()
    if (_num <= 7) {
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
        if (_num < 9) {
            _num = _num + 1
        }
    }
    $('.img-wrap-s ul li').eq(_num).addClass('active').siblings().removeClass('active')
    if (_num <= 7) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    swiperImgB.slideTo(_num)
})

$('.yueSlide').click(function () {
    var t = $(this).data('t');
    $('.yuWin').show();
    stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-' + t, '预约试驾-点击', '宏光MINI EV')
})

$('.img-wrap-s .prev').click(function () {
    _jcq.push(['_track', "MINIEVMacaron_uparrow", { content: "五菱MINIEV 马卡龙上市-车型美图-上箭头" }]);
})

$('.img-wrap-s .next').click(function () {
    _jcq.push(['_track', "MINIEVMacaron_downarrow", { content: "五菱MINIEV 马卡龙上市-车型美图-下箭头" }]);
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
    $('#wapper .nav').hide();
    let num = $(this).attr('more-num');
    let title = $(this).data('title');
    $(this).hide()
    moreBoxNum = num;
    $('.slideP4-' + num).addClass('more swiper-no-swiping')
    swiperMain.disableMousewheelControl();
    let element = $('.slideP4-' + num + ' .more-warp')
    element[0].scrollIntoView();

    if (num == 1) {
        sensors_track('click_MINIEV_Macaron_carstyle_fashion_more', '五菱官网宏光MINI EV马卡龙车型页-亮点-时尚跨界', '展开更多-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-亮点_时尚跨界', '展开更多-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_viewmore", { content: "五菱MINIEV 马卡龙上市-时尚跨界-展开更多" }]);
    }

    if (num == 2) {
        sensors_track('click_MINIEV_Macaron_carstyle_trend_more', '五菱官网宏光MINI EV马卡龙车型页-亮点-潮势所趋', '展开更多-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-亮点_潮势所趋', '展开更多-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_viewmore", { content: "五菱MINIEV 马卡龙上市-潮势所趋-展开更多" }]);
    }

    if (num == 3) {
        sensors_track('click_MINIEV_Macaron_carstyle_hightlight_more', '五菱官网宏光MINI EV马卡龙车型页-亮点-小而强大', '展开更多-点击')
        stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-亮点_小而强大', '展开更多-点击', '宏光MINI EV');
        _jcq.push(['_track', "MINIEVMacaron_viewmore", { content: "五菱MINIEV 马卡龙上市-小而强大-展开更多" }]);
    }
})
$('.slideP4-hide').on('click', function () {
    $('#wapper .nav').show();
    let num = $(this).attr('more-num')
    $('.slideP4-' + num).removeClass('more swiper-no-swiping')
    $('.slideP4-' + num).find('.slideP4-more').show()
    // $('.slideP4-' + num).find('on').removeClass('on')
    $(this).siblings('.box').children().removeClass('on')
    moreBoxNum = '';
    swiperMain.enableMousewheelControl();

    if (num == 1) {
        _jcq.push(['_track', "MINIEVMacaron_viewoff", { content: "五菱MINIEV 马卡龙上市-时尚跨界-收起" }]);
    }
    if (num == 2) {
        _jcq.push(['_track', "MINIEVMacaron_viewoff", { content: "五菱MINIEV 马卡龙上市-潮势所趋-收起" }]);
    }
    if (num == 3) {
        _jcq.push(['_track', "MINIEVMacaron_viewoff", { content: "五菱MINIEV 马卡龙上市-小而强大-收起" }]);
    }
})

var carType = 0;
$('.colors ul li').on('click', function () {
    ccIndex = 1;
    carType = $(this).index();
    $('.colors ul li').eq(carType).addClass('active').siblings().removeClass('active')
    switch (Number(carType)) {
        case 0:
            $('.carDistance').text('续航里程120km').css('marginRight', '10px');
            $('.pr1 .pri').text('43,800');
            $('.cb1,.cb2,.cb3,.cb4,.cb5,.cb6,.cb7,.cb8,.cb9,.cb10,.cb11,.cb12').show();
            $('.cb13,.cb14,.cb15,.cb16').hide();
            $('.cb.cb1').addClass('act').siblings().removeClass('act');
            $('.tipTxt').text('牛油果绿拼白').css({
                left: '8%',
                top: '-50%'
            });
            $('.carColorCar').css('background', '#dcf1e5');
            $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/gree-tit.png')
            $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-lv-1.png');
            $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/green-cr.png');
            $('.carColorCry').attr('src', 'images-pc-carstyle/evmcrgb/cr-1.png');
            sensors_track('click_MINIEV_Macaron_carstyle_style', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型选择_时尚款-点击')
            stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型选择_时尚款-点击', '宏光MINI EV');
            _jcq.push(['_track', "MINIEVMacaron_cars", { content: "五菱MINIEV 马卡龙上市-时尚款车型点击" }]);
            break;
        case 1:
            $('.carDistance').text('续航里程170km').css('marginRight', '10px');
            $('.pr1 .pri').text('49,800');
            $('.cb1,.cb2,.cb3,.cb4,.cb5,.cb6,.cb7,.cb8,.cb9,.cb10,.cb11,.cb12').show();
            $('.cb13,.cb14,.cb15,.cb16').hide();
            $('.cb.cb1').addClass('act').siblings().removeClass('act');
            $('.tipTxt').text('牛油果绿拼白').css({
                left: '8%',
                top: '-50%'
            });
            $('.carColorCar').css('background', '#dcf1e5');
            $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/gree-tit.png')
            $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-lv-1.png');
            $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/green-cr.png')
            $('.carColorCry').attr('src', 'images-pc-carstyle/evmcrgb/cr-1.png');
            sensors_track('click_MINIEV_Macaron_carstyle_style', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型选择_臻享款-点击')
            stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型选择_臻享款-点击', '宏光MINI EV');
            _jcq.push(['_track', "MINIEVMacaron_cars", { content: "五菱MINIEV 马卡龙上市-臻享款车型点击" }]);
            break;
        case 2:
            $('.carDistance').text('续航里程120km').css('marginRight', '28px');
            $('.pr1 .pri').text('46,800');
            $('.cb1,.cb2,.cb3,.cb4,.cb5,.cb6,.cb7,.cb8,.cb9,.cb10,.cb11,.cb12').hide();
            $('.cb13,.cb14,.cb15,.cb16').show();
            $('.cb.cb13').addClass('act').siblings().removeClass('act');
            $('.tipTxt').text('薰衣草紫拼白').css({
                left: '23%',
                top: '118%'
            });
            $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/zise-tit.png')
            $('.carColorCar').css('background', '#cbd1f7');
            $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-zise-1.png');
            $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/zise-cr.png');
            $('.carColorCry').attr('src', 'images-pc-carstyle/evmcrgb/cr-13.png');
            sensors_track('click_MINIEV_Macaron_carstyle_style', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型选择_缤纷款-点击')
            stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型选择_缤纷款-点击', '宏光MINI EV');
            _jcq.push(['_track', "MINIEVMacaron_cars", { content: "五菱MINIEV 马卡龙上市-缤纷款车型点击" }]);
            break;
        case 3:
            $('.carDistance').text('续航里程170km').css('marginRight', '28px');
            $('.pr1 .pri').text('52,800');
            $('.cb1,.cb2,.cb3,.cb4,.cb5,.cb6,.cb7,.cb8,.cb9,.cb10,.cb11,.cb12').hide();
            $('.cb13,.cb14,.cb15,.cb16').show();
            $('.cb.cb13').addClass('act').siblings().removeClass('act');
            $('.tipTxt').text('薰衣草紫拼白').css({
                left: '23%',
                top: '118%'
            });
            $('.lvTxt').attr('src', 'images-pc-carstyle/evmcrgb/zise-tit.png')
            $('.carColorCar').css('background', '#cbd1f7');
            $('.carColorCar .car').attr('src', 'images-pc-carstyle/evmcrgb/car-zise-1.png');
            $('.cri.c1').attr('src', 'images-pc-carstyle/evmcrgb/zise-cr.png');
            $('.carColorCry').attr('src', 'images-pc-carstyle/evmcrgb/cr-13.png');
            sensors_track('click_MINIEV_Macaron_carstyle_style', '五菱官网宏光MINI EV马卡龙车型页-车型颜色', '车型选择_绘色款-点击')
            stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-车型颜色', '车型选择_绘色款-点击', '宏光MINI EV');
            _jcq.push(['_track', "MINIEVMacaron_cars", { content: "五菱MINIEV 马卡龙上市-绘色款车型点击" }]);
            break;
    }
    var img = $('.cri.c1').attr('src')
    $('.cri.c1').addClass('act');

    setTimeout(function () {
        $('.cri.c1').removeClass('act')
        $('.cri.c2').attr('src', img)
    }, 900)
    // $('.colorBtns .cb').eq(ccIndex - 1).addClass('act').siblings().removeClass('act')
    // $('.tipTxt').css('left', '8%').text('牛油果绿拼白');
    // carChange(ccIndex);
})
$('.car-btn').on('click', function () {
    swiperMain.slideTo(7);
    _jcq.push(['_track', "HGplus_test_driving", { content: carTypeTxt + "预约试驾" }])

    sensors_track("click_hongguangPlus_model_color_reserve", "宏光Plus车型颜色页-（" + carTypeTxt + "型）预约试驾按钮点击", "浏览五菱官网宏光Plus车型颜色页", "宏光Plus车型颜色页-（" + carTypeTxt + "型）预约试驾按钮点击");
})

$('.video-txt').on('click', function () {
    $('.video-wrap').fadeIn();
    $('#video').attr('src', '../macvideos/v1.mp4');
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
    _jcq.push(['_track', "MINIEVMacaron_privacyagree", { content: "五菱MINIEV 马卡龙上市-隐私条款勾选" }]);
    if (that.hasClass("active")) {
        that.removeClass("active");
    } else {
        that.addClass("active");

    }
});

var winHeight = $(window).height();

$('.slideP4-1').scroll(function () {
    var a = $('.slideP4-1').scrollTop();

    if (a > $('.slideP4-1 .more-warp .box .fullSubImg1').height() + $('.slideP4-1 .more-warp .box .fullSubImg2').height() + winHeight - 800) {
        $('.slideP4-1 .more-warp .box .title2').addClass('on')
    }

    if (a > $('.slideP4-1 .more-warp .box .fullSubImg1').height() + $('.slideP4-1 .more-warp .box .fullSubImg2').height() + $('.slideP4-1 .more-warp .box .fullSubImg3').height() + winHeight - 200) {
        $('.slideP4-1 .more-warp .box .title4').addClass('on')
    }

})

$('.slideP4-2').scroll(function () {
    var a = $('.slideP4-2').scrollTop();
    if (a > winHeight - 10) {
        $('.slideP4-2 .more-warp .box .title1').addClass('on')
    }

    if (a > $('.slideP4-2 .more-warp .box .fullSubImg1').height() + winHeight - 300) {
        $('.slideP4-2 .more-warp .box .title2').addClass('on')
    }

    if (a > $('.slideP4-2 .more-warp .box .fullSubImg1').height() + $('.slideP4-2 .more-warp .box .fullSubImg2').height() + winHeight - 300) {
        $('.slideP4-2 .more-warp .box .title3').addClass('on')
    }

    if (a > $('.slideP4-2 .more-warp .box .fullSubImg1').height() + $('.slideP4-2 .more-warp .box .fullSubImg2').height() + $('.slideP4-2 .more-warp .box .fullSubImg3').height() + winHeight - 300) {
        $('.slideP4-2 .more-warp .box .title4').addClass('on')
    }
    if (a > $('.slideP4-2 .more-warp .box .fullSubImg1').height() + $('.slideP4-2 .more-warp .box .fullSubImg2').height() + $('.slideP4-2 .more-warp .box .fullSubImg3').height() + $('.slideP4-2 .more-warp .box .fullSubImg4').height() + winHeight - 300) {
        $('.slideP4-2 .more-warp .box .title5').addClass('on')
    }
    if (a > $('.slideP4-2 .more-warp .box .fullSubImg1').height() + $('.slideP4-2 .more-warp .box .fullSubImg2').height() + $('.slideP4-2 .more-warp .box .fullSubImg3').height() + $('.slideP4-2 .more-warp .box .fullSubImg4').height() + $('.slideP4-2 .more-warp .box .fullSubImg5').height() + winHeight - 300) {
        $('.slideP4-2 .more-warp .box .title6-1').addClass('on')
    }
    if (a > $('.slideP4-2 .more-warp .box .fullSubImg1').height() + $('.slideP4-2 .more-warp .box .fullSubImg2').height() + $('.slideP4-2 .more-warp .box .fullSubImg3').height() + $('.slideP4-2 .more-warp .box .fullSubImg4').height() + $('.slideP4-2 .more-warp .box .fullSubImg5').height() + winHeight) {
        $('.slideP4-2 .more-warp .box .title6-2').addClass('on')
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

$('.slideP4-4').scroll(function () {
    var a = $('.slideP4-4').scrollTop();
    if (a > winHeight - 10) {
        $('.slideP4-4 .more-warp .box .title1,.slideP4-4 .more-warp .box .title1-1').addClass('on')
    }

    if (a > winHeight + $('.slideP4-4 .more-warp .box .fullSubImg1').height() - 100) {
        $('.slideP4-4 .more-warp .box .title2').addClass('on')
    }

    if (a > winHeight + $('.slideP4-4 .more-warp .box .fullSubImg1').height() + $('.slideP4-4 .more-warp .box .fullSubImg2').height() - 300) {
        $('.slideP4-4 .more-warp .box .title3,.slideP4-4 .more-warp .box .title3-1').addClass('on')
    }


})



// var ms2
$('.rule_btn').on('click', function () {
    $('.popUp-wrap').fadeIn();
    _jcq.push(['_track', "MINIEVMacaron_privacy", { content: "五菱MINIEV 马卡龙上市-隐私条款点击" }]);
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
    _jcq.push(['_track', 'MINIEVMacaron_top_banner', { content: '五菱logo' }]);
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
    _jcq.push(['_track', 'MINIEVMacaron_top_banner', { content: '车型' }]);
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
    _jcq.push(['_track', 'MINIEVMacaron_top_banner', { content: '购车指南' }]);
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
    _jcq.push(['_track', 'MINIEVMacaron_top_banner', { content: '品牌故事' }]);
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
    _jcq.push(['_track', 'MINIEVMacaron_top_banner', { content: '在线客服' }]);
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
    _jcq.push(['_track', 'MINIEVMacaron_top_banner', { content: '预约试驾' }]);
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
    _jcq.push(['_track', 'MINIEVMacaron_dibu', { content: '隐私法律' }]);
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
    _jcq.push(['_track', 'MINIEVMacaron_dibu', { content: '前往了解宝骏汽车' }]);
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
    _jcq.push(['_track', 'MINIEVMacaron_dibu', { content: 'ICP备案号' }]);
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
    _jcq.push(['_track', 'MINIEVMacaron_dibu', { content: '公安部备案号' }]);
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
    var imgDiv = '<img class="img on" on-src="images-pc-carstyle/evmcrgb/peizhi/images/peizhi' + pzNum + '_02.png" off-src="images-pc-carstyle/evmcrgb/peizhi/peizhi_02.png" src="images-pc-carstyle/evmcrgb/peizhi/images/peizhi' + pzNum + '_02.png">' +
        '<img class="img" on-src="images-pc-carstyle/evmcrgb/peizhi/images/peizhi' + pzNum + '_03.png" off-src="images-pc-carstyle/evmcrgb/peizhi/peizhi_03.png" src="images-pc-carstyle/evmcrgb/peizhi/peizhi_03.png">' +
        '<img class="img" on-src="images-pc-carstyle/evmcrgb/peizhi/images/peizhi' + pzNum + '_04.png" off-src="images-pc-carstyle/evmcrgb/peizhi/peizhi_04.png" src="images-pc-carstyle/evmcrgb/peizhi/peizhi_04.png">' +
        '<img class="img" on-src="images-pc-carstyle/evmcrgb/peizhi/images/peizhi' + pzNum + '_05.png" off-src="images-pc-carstyle/evmcrgb/peizhi/peizhi_05.png" src="images-pc-carstyle/evmcrgb/peizhi/peizhi_05.png">' +
        '<img class="img" on-src="images-pc-carstyle/evmcrgb/peizhi/images/peizhi' + pzNum + '_06.png" off-src="images-pc-carstyle/evmcrgb/peizhi/peizhi_06.png" src="images-pc-carstyle/evmcrgb/peizhi/peizhi_06.png">' +
        '<img class="img" on-src="images-pc-carstyle/evmcrgb/peizhi/images/peizhi' + pzNum + '_07.png" off-src="images-pc-carstyle/evmcrgb/peizhi/peizhi_07.png" src="images-pc-carstyle/evmcrgb/peizhi/peizhi_07.png">' +
        '<img class="img" on-src="images-pc-carstyle/evmcrgb/peizhi/images/peizhi' + pzNum + '_08.png" off-src="images-pc-carstyle/evmcrgb/peizhi/peizhi_08.png" src="images-pc-carstyle/evmcrgb/peizhi/peizhi_08.png">' +
        '<img class="img" on-src="images-pc-carstyle/evmcrgb/peizhi/images/peizhi' + pzNum + '_09.png" off-src="images-pc-carstyle/evmcrgb/peizhi/peizhi_09.png" src="images-pc-carstyle/evmcrgb/peizhi/peizhi_09.png">' +
        '<img class="img" on-src="images-pc-carstyle/evmcrgb/peizhi/images/peizhi' + pzNum + '_10.png" off-src="images-pc-carstyle/evmcrgb/peizhi/peizhi_10.png" src="images-pc-carstyle/evmcrgb/peizhi/peizhi_10.png">' +
        '<img class="img" on-src="images-pc-carstyle/evmcrgb/peizhi/images/peizhi' + pzNum + '_11.png" off-src="images-pc-carstyle/evmcrgb/peizhi/peizhi_11.png" src="images-pc-carstyle/evmcrgb/peizhi/peizhi_11.png">'
    $('.slidePeizhi-wrap .img-wrap div').html(imgDiv)
    $('.slidePeizhi-wrap .head-img').attr('src', 'images-pc-carstyle/evmcrgb/peizhi/peizhi' + pzNum + '.png')
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
