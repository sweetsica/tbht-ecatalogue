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
        console.log(idx)
        if (idx == 0) {
            $('.nav').removeClass('style2');
            $('.nav-01').addClass('active').siblings().removeClass('active')
        }
        if (idx == 1) {
            $('.nav').addClass('style2');
            $('.nav-02').addClass('active').siblings().removeClass('active')
        }
        if (idx == 2) {
            $('.nav').removeClass('style2');
            $('.nav-03').addClass('active').siblings().removeClass('active')
        }
        if (idx == 3) {
            $('.nav').removeClass('style2');
            $('.nav-04').addClass('active').siblings().removeClass('active')
        }
        if (idx == 4) {
            $('.nav').removeClass('style2');
            $('.nav-05').addClass('active').siblings().removeClass('active')
        }
        if (idx == 5) {
            $('.nav').removeClass('style2');
            $('.nav-06').addClass('active').siblings().removeClass('active')
        }
        if (idx == 6) {
            $('.nav').removeClass('style2');
            $('.nav-07').addClass('active').siblings().removeClass('active')
        }
        if (idx == 7) {
            $('.nav').removeClass('style2');
            $('.nav-08').addClass('active').siblings().removeClass('active')
        }
        if (idx == 0) {
            $('header').removeClass('hide');
        } else {
            $('header').addClass('hide');
        }
        if (idx == 7 && isF) {
            isF = false
            ms = new IScroll('#scroll1', {
                scrollbars: true,
                // scrollbars: 'custom',
                bounce: false,
                mouseWheel: true,
                preventDefault: false
            });
        }
    }
});

// swiperMain.slideTo(7)
// swiperMain.disableMousewheelControl();

var swiperVideo = new Swiper('.swiperVideo', {
    loop: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    mousewheelReleaseOnEdges: true,
    onSlideChangeEnd: function (swiper) {
        let idx = swiper.realIndex;
        if (idx == 0) {
            $('.video_btn').removeClass('video_btn2 video_btn3 video_btn4 video_btn5')
        }
        if (idx == 1) {
            $('.video_btn').addClass('video_btn2')
            $('.video_btn').removeClass('video_btn3 video_btn4 video_btn5')
        }
        if (idx == 2) {
            $('.video_btn').addClass('video_btn3')
            $('.video_btn').removeClass('video_btn2 video_btn4 video_btn5')
        }
        if (idx == 3) {
            $('.video_btn').addClass('video_btn4')
            $('.video_btn').removeClass('video_btn2 video_btn3 video_btn5')
        }
        if (idx == 4) {
            $('.video_btn').addClass('video_btn5')
            $('.video_btn').removeClass('video_btn2 video_btn3 video_btn4')
        }
        // console.log(idx)
    }
});
// swiperVideo.slideTo(0)
$('.video_tab_btn1').click(function () {
    swiperVideo.slideTo(1,0)
    console.log(swiperVideo.realIndex)
})

$('.video_tab_btn2').click(function () {
    swiperVideo.slideTo(2,0)
    console.log(swiperVideo.realIndex)
})

$('.video_tab_btn3').click(function () {
    swiperVideo.slideTo(3,0)
    console.log(swiperVideo.realIndex)
})
$('.video_tab_btn4').click(function () {
    swiperVideo.slideTo(4,0)
    console.log(swiperVideo.realIndex)
})
$('.video_tab_btn5').click(function () {
    swiperVideo.slideTo(5,0)
    console.log(swiperVideo.realIndex)
})

$('.video_play').click(function () {
    $('.nav').hide();
    swiperMain.disableMousewheelControl();
    if (swiperVideo.realIndex == 0) {
        $('#video').attr('src', 'jiachenvideo/v1.mp4')
    }
    if (swiperVideo.realIndex == 1) {
        $('#video').attr('src', 'jiachenvideo/v2.mp4')
    }
    if (swiperVideo.realIndex == 2) {
        $('#video').attr('src', 'jiachenvideo/v3.mp4')
    }
    if (swiperVideo.realIndex == 3) {
        $('#video').attr('src', 'jiachenvideo/v4.mp4')
    }
    if (swiperVideo.realIndex == 4) {
        $('#video').attr('src', 'jiachenvideo/v5.mp4')
    }
    $('.video-wrap').show();
    setTimeout(function () {
        $('#video')[0].play()
    }, 200)

})

$('.home-arrow').on('click', function () {
    swiperMain.slideTo(1);
})
$('.top').on('click', function () {
    swiperMain.slideTo(0, 0);
    stm_clicki('send', 'event', '五菱佳辰预售车型页-车型页底部', 'Top-点击', '五菱佳辰');
})
$('.nav li').on('click', function () {
    let idx = $(this).index()
    swiperMain.slideTo(idx);
    $('.slideliangdian').removeClass('more');
    swiperMain.enableMousewheelControl();
    $('.slideliangdian').scrollTop(0);
    $('.more-warp').hide();

})

let imgNum = 11;
for (let index = 1; index <= imgNum; index++) {
    let imgCont = '<div class="swiper-slide"><img src="images-pc-carstyle/jiachen/img/pic-0' + index + '.jpg"></div>'

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

    if (_num <= 8) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    swiperImgB.slideTo(_num)
    stm_clicki('send', 'event', '五菱佳辰预售车型页-车型美图', '车图-互动', '五菱佳辰');
})
$('.prev, .next').on('click', function () {
    if ($(this).hasClass('prev')) {
        if (_num != 0) {
            _num = _num - 1
        }
    } else {
        if (_num < 10) {
            _num = _num + 1
        }
    }
    $('.img-wrap-s ul li').eq(_num).addClass('active').siblings().removeClass('active')
    if (_num <= 8) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    swiperImgB.slideTo(_num)
    stm_clicki('send', 'event', '五菱佳辰预售车型页-车型美图', '车图-互动', '五菱佳辰');
})


$('.btn-booking').on('click', function () {
    swiperMain.slideTo(3);
    stm_clicki('send', 'event', '五菱佳辰预售车型页-浮标', '预约试驾-点击', '五菱佳辰');
})
$('.video-txt').on('click', function () {
    $('.video-wrap').fadeIn();
    $('#video')[0].play();
    $('.slideVideo').addClass('swiper-no-swiping')
    swiperMain.disableMousewheelControl();
    stm_clicki('send', 'event', '五菱佳辰预售车型页-车型视频', '视频播放-点击', '五菱佳辰');
})

$('.video-wrap .close').on('click', function () {
    $('.nav').show();
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


// ------------------
$('header .logo').click(function () {
    var pageTitle = $(document).attr("title");
    stm_clicki('send', 'event', pageTitle + '-顶部导航栏', '五菱logo-点击');
})

$('header .link.link1').click(function () {
    var pageTitle = $(document).attr("title");
    stm_clicki('send', 'event', pageTitle + '-顶部导航栏', '车型-点击');
})

$('header .link.link2').click(function () {
    var pageTitle = $(document).attr("title");
    stm_clicki('send', 'event', pageTitle + '-顶部导航栏', '购车指南-点击');
})

$('header .link.link3').click(function () {
    var pageTitle = $(document).attr("title");
    stm_clicki('send', 'event', pageTitle + '-顶部导航栏', '品牌故事-点击');
})

$('.btnK').click(function () {
    var pageTitle = $(document).attr("title");
    stm_clicki('send', 'event', pageTitle + '-顶部导航栏', '在线客服-点击');
})

$('.btnY').click(function () {
    var pageTitle = $(document).attr("title");
    stm_clicki('send', 'event', pageTitle + '-顶部导航栏', '预约试驾-点击');
})

$('.law').click(function () {
    var pageTitle = $(document).attr("title");
    stm_clicki('send', 'event', pageTitle + '-底部', '隐私法律-点击');
})

$('.lk').click(function () {
    var pageTitle = $(document).attr("title");
    stm_clicki('send', 'event', pageTitle + '-底部', '前往了解宝骏汽车-点击');
})

$('footer p').eq(3).click(function () {
    var pageTitle = $(document).attr("title");
    stm_clicki('send', 'event', pageTitle + '-底部', 'ICP备案号-点击');
})
$('footer p').eq(4).click(function () {
    var pageTitle = $(document).attr("title");
    stm_clicki('send', 'event', pageTitle + '-底部', '公安部备案号-点击');
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

var pzArr = ['<p>1.2L 5MT手动挡<br><span>劲取版封窗车</span></p>', '<p>1.2L 5MT手动挡<br><span>劲享版</span></p>', '<p>1.2L 5MT手动挡<br><span>劲取版</span></p>', '<p>1.5L 6MT手动挡<br><span>劲享版封窗车</span></p>', '<p>1.5L 6MT手动挡<br><span>劲享版</span></p>', '<p>1.5L 6MT手动挡<br><span>劲取版</span></p>']
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
        if (pzNum < 5) {
            pzNum = pzNum + 1
        }
    }
    if (pzNum == 5 || pzNum == 0) {
        $(this).addClass('disabled')
    }
    var imgDiv = '<img class="img on" on-src="images-pc-carstyle/jiachen/peizhi/images/peizhi' + pzNum + '_02.png" off-src="images-pc-carstyle/jiachen/peizhi/peizhi_02.png" src="images-pc-carstyle/jiachen/peizhi/images/peizhi' + pzNum + '_02.png">' +
        '<img class="img" on-src="images-pc-carstyle/jiachen/peizhi/images/peizhi' + pzNum + '_03.png" off-src="images-pc-carstyle/jiachen/peizhi/peizhi_03.png" src="images-pc-carstyle/jiachen/peizhi/peizhi_03.png">' +
        '<img class="img" on-src="images-pc-carstyle/jiachen/peizhi/images/peizhi' + pzNum + '_04.png" off-src="images-pc-carstyle/jiachen/peizhi/peizhi_04.png" src="images-pc-carstyle/jiachen/peizhi/peizhi_04.png">' +
        '<img class="img" on-src="images-pc-carstyle/jiachen/peizhi/images/peizhi' + pzNum + '_05.png" off-src="images-pc-carstyle/jiachen/peizhi/peizhi_05.png" src="images-pc-carstyle/jiachen/peizhi/peizhi_05.png">' +
        '<img class="img" on-src="images-pc-carstyle/jiachen/peizhi/images/peizhi' + pzNum + '_06.png" off-src="images-pc-carstyle/jiachen/peizhi/peizhi_06.png" src="images-pc-carstyle/jiachen/peizhi/peizhi_06.png">' +
        '<img class="img" on-src="images-pc-carstyle/jiachen/peizhi/images/peizhi' + pzNum + '_07.png" off-src="images-pc-carstyle/jiachen/peizhi/peizhi_07.png" src="images-pc-carstyle/jiachen/peizhi/peizhi_07.png">' +
        '<img class="img" on-src="images-pc-carstyle/jiachen/peizhi/images/peizhi' + pzNum + '_08.png" off-src="images-pc-carstyle/jiachen/peizhi/peizhi_08.png" src="images-pc-carstyle/jiachen/peizhi/peizhi_08.png">' +
        '<img class="img" on-src="images-pc-carstyle/jiachen/peizhi/images/peizhi' + pzNum + '_09.png" off-src="images-pc-carstyle/jiachen/peizhi/peizhi_09.png" src="images-pc-carstyle/jiachen/peizhi/peizhi_09.png">' +
        '<img class="img" on-src="images-pc-carstyle/jiachen/peizhi/images/peizhi' + pzNum + '_10.png" off-src="images-pc-carstyle/jiachen/peizhi/peizhi_10.png" src="images-pc-carstyle/jiachen/peizhi/peizhi_10.png">'
    $('.slidePeizhi-wrap .img-wrap div').html(imgDiv)
    $('.slidePeizhi-wrap .head-img').attr('src', 'images-pc-carstyle/jiachen/peizhi/peizhi' + pzNum + '.png')
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

$('.slidecar .left .btn').click(function () {
    swiperMain.slideTo(3)
})

var carNum = 0;
$('.car-next').click(function () {
    carNum++;

    if (carNum > 3) {
        carNum = 0
    }

    $('.carimg').attr('src', 'images-pc-carstyle/jiachen/car-' + (carNum + 1) + '.png')
    $('.car-bg').attr('src', 'images-pc-carstyle/jiachen/car-bg' + (carNum + 1) + '.png')
    $('.slidecar .left .img2').attr('src', 'images-pc-carstyle/jiachen/car-tip-2-' + (carNum + 1) + '.png')
    $('.car-main .dots .dot').eq(carNum).addClass('on').siblings().removeClass('on')

    stm_clicki('send', 'event', '五菱佳辰预售车型页-车型颜色', '车颜色-互动', '五菱佳辰');
})

$('.car-prev').click(function () {
    carNum--;

    if (carNum < 0) {
        carNum = 3;
    }

    $('.carimg').attr('src', 'images-pc-carstyle/jiachen/car-' + (carNum + 1) + '.png')
    $('.car-bg').attr('src', 'images-pc-carstyle/jiachen/car-bg' + (carNum + 1) + '.png')
    $('.slidecar .left .img2').attr('src', 'images-pc-carstyle/jiachen/car-tip-2-' + (carNum + 1) + '.png')
    $('.car-main .dots .dot').eq(carNum).addClass('on').siblings().removeClass('on')

    stm_clicki('send', 'event', '五菱佳辰预售车型页-车型颜色', '车颜色-互动', '五菱佳辰');

})

var winHeight = $(window).height();
var scrollType;

$('.slideliangdian .bom img').click(function () {
    $('.slideliangdian').addClass('more');
    scrollType = $(this).data('type');
    if (scrollType == 1) {
        $('.mw1').show();
        $('.mw2').hide();
        $('.mw3').hide();
        stm_clicki('send', 'event', '五菱佳辰预售车型页-车型亮点', '空间加乘-点击', '五菱佳辰');
    }
    if (scrollType == 2) {
        $('.mw1').hide();
        $('.mw2').show();
        $('.mw3').hide();
        stm_clicki('send', 'event', '五菱佳辰预售车型页-车型亮点', '沟通加乘-点击', '五菱佳辰');
    }
    if (scrollType == 3) {
        $('.mw1').hide();
        $('.mw2').hide();
        $('.mw3').show();
        stm_clicki('send', 'event', '五菱佳辰预售车型页-车型亮点', '品质加乘-点击', '五菱佳辰');
    }

    swiperMain.disableMousewheelControl();

    let element = $('.mw' + scrollType);
    element[0].scrollIntoView();
})

$('.slideliangdian .back').click(function () {
    $('.slideliangdian').removeClass('more');
    swiperMain.enableMousewheelControl();
    $('.slideliangdian').scrollTop(0);
    $('.more-warp').hide();
    $('.more-warp .box').children().removeClass('on');

})

$('.slideliangdian').scroll(function () {
    var a = $('.slideliangdian').scrollTop();
    if (scrollType == 1) {
        if (a > winHeight + $('.mw1 .ban').height() - 200) {
            $('.mw1 .txt1').addClass('on')
        }

        if (a > winHeight + $('.mw1 .ban').height() + $('.mw1 .box1').height() - 350) {
            $('.mw1 .txt2').addClass('on')
        }

        if (a > winHeight + $('.mw1 .ban').height() + $('.mw1 .box1').height() + $('.mw1 .box2').height() - 400) {
            $('.mw1 .txt3').addClass('on')
        }

        if (a > winHeight + $('.mw1 .ban').height() + $('.mw1 .box1').height() + $('.mw1 .box2').height() + $('.mw1 .box3').height() - 400) {
            $('.mw1 .txt4').addClass('on')
        }

        if (a > winHeight + $('.mw1 .ban').height() + $('.mw1 .box1').height() + $('.mw1 .box2').height() + $('.mw1 .box3').height() + $('.mw1 .box4').height() - 500) {
            $('.mw1 .txt5').addClass('on')
        }
    }

    if (scrollType == 2) {
        if (a > winHeight + $('.mw2 .ban').height() - 200) {
            $('.mw2 .txt1').addClass('on')
        }

        if (a > winHeight + $('.mw2 .ban').height() + $('.mw2 .box1').height() - 350) {
            $('.mw2 .txt2').addClass('on')
        }

        if (a > winHeight + $('.mw2 .ban').height() + $('.mw2 .box1').height() + $('.mw2 .box2').height() - 400) {
            $('.mw2 .txt3').addClass('on')
        }

        if (a > winHeight + $('.mw2 .ban').height() + $('.mw2 .box1').height() + $('.mw2 .box2').height() + $('.mw2 .box3').height() - 400) {
            $('.mw2 .txt4').addClass('on')
        }

        if (a > winHeight + $('.mw2 .ban').height() + $('.mw2 .box1').height() + $('.mw2 .box2').height() + $('.mw2 .box3').height() + $('.mw2 .box4').height() - 300) {
            $('.mw2 .txt5').addClass('on')
        }
    }

    if (scrollType == 3) {
        if (a > winHeight + $('.mw3 .ban').height() - 200) {
            $('.mw3 .txt1').addClass('on')
        }

        if (a > winHeight + $('.mw3 .ban').height() + $('.mw3 .box1').height() - 350) {
            $('.mw3 .txt2').addClass('on')
        }

        if (a > winHeight + $('.mw3 .ban').height() + $('.mw3 .box1').height() + $('.mw3 .box2').height() - 400) {
            $('.mw3 .txt3').addClass('on')
        }

        if (a > winHeight + $('.mw3 .ban').height() + $('.mw3 .box1').height() + $('.mw3 .box2').height() + $('.mw3 .box3').height() - 400) {
            $('.mw3 .txt4').addClass('on')
        }

        if (a > winHeight + $('.mw3 .ban').height() + $('.mw3 .box1').height() + $('.mw3 .box2').height() + $('.mw3 .box3').height() + $('.mw3 .box4').height() - 300) {
            $('.mw3 .txt5').addClass('on')
        }

        if (a > winHeight + $('.mw3 .ban').height() + $('.mw3 .box1').height() + $('.mw3 .box2').height() + $('.mw3 .box3').height() + $('.mw3 .box4').height() + $('.mw3 .box5').height() - 300) {
            $('.mw3 .txt6').addClass('on')
        }
    }
})

