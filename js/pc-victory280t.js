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
    { src: "images-pc-carstyle/victory280t/pc-home.jpg" },
    { src: "images-pc-carstyle/victory280t/pc-color-btn-txt.png" },
    { src: "images-pc-carstyle/victory280t/pc-p4-bg-00.jpg" },
    { src: "images-pc-carstyle/victory280t/pc-p4-bg-01.jpg" },
    { src: "images-pc-carstyle/victory280t/pc-p4-bg-02.jpg" },
    { src: "images-pc-carstyle/victory280t/pc-p4-bg-03.jpg" },
    { src: "images-pc-carstyle/victory280t/pc-p4-btn.png" },
    { src: "images-pc-carstyle/victory280t/pc-more-btn.png" },
    { src: "images-pc-carstyle/victory280t/pc-hide-btn.png" },
    { src: "images-pc-carstyle/victory280t/pc-p4-img-01.jpg" },
    { src: "images-pc-carstyle/victory280t/pc-p4-img-02.jpg" },
    { src: "images-pc-carstyle/victory280t/pc-p4-img-03.jpg" }
]
for (let index = 0; index < manifest.length; index++) {
    imgObj.unshift(manifest[index])
}
let queue = new createjs.LoadQueue(false);
queue.loadManifest(imgObj);
// queue.on('complete', function () {
//     $('.loading').fadeOut()
// });
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
            $('.nav').addClass('style2');
            $('.nav-05').addClass('active').siblings().removeClass('active')
        }
        if (idx == 5) {
            $('.nav').addClass('style2');
            $('.nav-05').addClass('active').siblings().removeClass('active')
        }
        if (idx == 6) {
            $('.nav').addClass('style2');
            $('.nav-05').addClass('active').siblings().removeClass('active')
        }
        if (idx == 7) {
            $('.nav').addClass('style2');
            $('.nav-05').addClass('active').siblings().removeClass('active')
        }
        if (idx == 8) {
            $('.nav').addClass('style2');
            $('.nav-05').addClass('active').siblings().removeClass('active')
        }
        if (idx == 9) {
            $('.nav').addClass('style2');
            $('.nav-05').addClass('active').siblings().removeClass('active')
        }
        if (idx == 10) {
            $('.nav').addClass('style2');
            $('.nav-06').addClass('active').siblings().removeClass('active')
        }
        if (idx == 11) {
            $('.nav').removeClass('style2');
            $('.nav-07').addClass('active').siblings().removeClass('active')
        }
        if (idx == 12) {
            $('.nav').removeClass('style2');
            $('.nav-08').addClass('active').siblings().removeClass('active')
        }
        if (idx == 13) {
            $('.nav').removeClass('style2');
            $('.nav-09').addClass('active').siblings().removeClass('active')
        }
        if (idx == 0) {
            $('header').removeClass('hide');
        } else {
            $('header').addClass('hide');
        }
        if (idx == 12 && isF) {
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
        }

        if (swiper.activeIndex == 1) { }

        if (swiper.activeIndex == 2) { }

        if (swiper.activeIndex == 3) { }

        if (swiper.activeIndex == 4) { }

        if (swiper.activeIndex == 5) { }

        if (swiper.activeIndex == 6) { }

        if (swiper.activeIndex == 7) { }

        if (swiper.activeIndex == 8) { }

        if (swiper.activeIndex == 9) {
        }
    }
});

// swiperMain.slideTo(11)
// swiperMain.disableMousewheelControl();

let videoUrl;
let swiperVideo = new Swiper('.swiperVideo', {
    loop: true,
    mousewheelControl: false,
    noSwiping: true,
    autoplay: 5000,
    mousewheelReleaseOnEdges: true,
    prevButton: '.button-video-prev',
    nextButton: '.button-video-next',
    onSlideChangeEnd: function (swiper) {
        let idx = swiper.realIndex;
        if (idx == 0) {
            videoUrl = 'victoryvideo/video6.mp4';
        }
        if (idx == 1) {
            videoUrl = 'victoryvideo/video1.mp4';
        }
        if (idx == 2) {
            videoUrl = 'victoryvideo/video4.mp4';
        }
        if (idx == 3) {
            videoUrl = 'victoryvideo/video2.mp4';
        }
        if (idx == 4) {
            videoUrl = 'victoryvideo/video.mp4';
        }
        if (idx == 5) {
            videoUrl = 'victoryvideo/video5.mp4';
        }
    }
});
// let player = document.querySelector('#root') 
// player.src = "新的地址" 
// player.play()
$('.home-arrow').on('click', function () {
    swiperMain.slideTo(1);
})
$('.top').on('click', function () {
    swiperMain.slideTo(0, 0);
})
$('.nav li').on('click', function () {
    let idx = $(this).index()
    if (idx >= 5) {
        idx = idx + 5
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

let imgNum = 11;
for (let index = 1; index <= imgNum; index++) {
    let imgCont = '<div class="swiper-slide"><img src="images-pc-carstyle/victory280t/img/pic-0' + index + '.jpg"></div>'

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
    sensors_track('click_KJ_car_but_pic_' + _num, '五菱凯捷车型页-车型美图-小图' + _num + '点击', '五菱凯捷车型页-车型美图', '车型美图-小图' + _num + '点击点击');
    stm_clicki('send', 'event', '五菱凯捷280T车型页-车型美图', '车图-互动', '五菱凯捷280T');

    if (_num <= 8) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    swiperImgB.slideTo(_num)
})
$('.prev, .next').on('click', function () {
    stm_clicki('send', 'event', '五菱凯捷280T车型页-车型美图', '车图-互动', '五菱凯捷280T');
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
})

$('.slideP4 .btn-wrap .btn').on('mouseover', function () {
    let idx = $(this).index();
    $('.slideP4 .bg-wrap .bg').eq(idx).addClass('hover').siblings().removeClass('hover')
})
$('.slideP4 .btn-wrap .btn').on('mouseout', function () {
    $('.slideP4 .bg-wrap .bg').removeClass('hover')
})
$('.slideP4 .btn-wrap .btn').on('click', function () {
    let idx = $(this).index() + 7;
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
$('.slideP4-hide').on('click', function () {
    let num = $(this).attr('more-num')
    $('.slideP4-' + num).removeClass('more swiper-no-swiping')
    $('.slideP4-' + num).find('.slideP4-more').show()
    // $('.slideP4-' + num).find('on').removeClass('on')
    $(this).siblings('.box').children().removeClass('on')
    moreBoxNum = '';
    swiperMain.enableMousewheelControl();
})
$('.btn-booking').on('click', function () {
    swiperMain.slideTo(3);
})
$('.video-txt').on('click', function () {
    $('.video-wrap').fadeIn();
    $('#video').attr('src', videoUrl);
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

$('.slideP3 ul li').on('click', function () {
    let idx = $(this).index();
    $('.slideP3 ul li').eq(idx).addClass('active').siblings().removeClass('active')
    switch (Number(idx)) {
        case 0:
            $('.carPrice .pri').html('85,800')
            break;
        case 1:
            $('.carPrice .pri').html('95,800')
            break;
        case 2:
            $('.carPrice .pri').html('106,800')
            break;
        case 3:
            $('.carPrice .pri').html('116,800')
            break;
        case 4:
            $('.carPrice .pri').html('115,800')
            break;
        case 5:
            $('.carPrice .pri').html('125,800')
            break;
    }
})
$('.car-color-btn .color-btn').on('click', function () {
    let idx = $(this).index();
    $('.car-color-btn .color-btn').eq(idx).addClass('active').siblings().removeClass('active')
    switch (Number(idx)) {
        case 0:
            $('.car-wrap').removeClass('car-wrap-1 car-wrap-2 car-wrap-3')
            $('.car-btn').removeClass('car-btn-1 car-btn-2 car-btn-3')
            $('.car-wrap .img').attr('src', 'images-pc-carstyle/victory280t/pc-car-01.png')
            $('.car-wrap h1 span').html('加勒比蓝')
            $('.slideP3 .bg1').addClass('show');
            $('.slideP3 .bg2, .slideP3 .bg3, .slideP3 .bg4,.slideP3 .bg5').removeClass('show');
            break;
        case 1:
            $('.car-wrap').addClass('car-wrap-1').removeClass('car-wrap-2 car-wrap-3')
            $('.car-btn').addClass('car-btn-1').removeClass('car-btn-2 car-btn-3')
            $('.car-wrap .img').attr('src', 'images-pc-carstyle/victory280t/pc-car-02.png')
            $('.car-wrap h1 span').html('都柏林灰')
            $('.slideP3 .bg2').addClass('show');
            $('.slideP3 .bg1, .slideP3 .bg3, .slideP3 .bg4,.slideP3 .bg5').removeClass('show');
            break;
        case 2:
            $('.car-wrap').addClass('car-wrap-2').removeClass('car-wrap-1 car-wrap-3')
            $('.car-btn').addClass('car-btn-2').removeClass('car-btn-1 car-btn-3')
            $('.car-wrap .img').attr('src', 'images-pc-carstyle/victory280t/pc-car-03.png')
            $('.car-wrap h1 span').html('诺曼底金')
            $('.slideP3 .bg3').addClass('show');
            $('.slideP3 .bg1, .slideP3 .bg2, .slideP3 .bg4,.slideP3 .bg5').removeClass('show');
            break;
        case 3:
            $('.car-wrap').addClass('car-wrap-4').removeClass('car-wrap-1 car-wrap-2 car-wrap-3 car-wrap-5')
            $('.car-btn').addClass('car-btn-4').removeClass('car-btn-1 car-wrap-2 car-btn-3 car-btn-5')
            $('.car-wrap .img').attr('src', 'images-pc-carstyle/victory280t/pc-car-04.png')
            $('.car-wrap h1 span').html('富士山白')
            $('.slideP3 .bg4').addClass('show');
            $('.slideP3 .bg1, .slideP3 .bg2, .slideP3 .bg3,.slideP3 .bg5').removeClass('show');
            break;
        case 4:
            $('.car-wrap').addClass('car-wrap-5').removeClass('car-wrap-1 car-wrap-2 car-wrap-3 car-wrap-4')
            $('.car-btn').addClass('car-btn-5').removeClass('car-btn-1 car-wrap-2 car-btn-3 car-btn-4')
            $('.car-wrap .img').attr('src', 'images-pc-carstyle/victory280t/pc-car-05.png')
            $('.car-wrap h1 span').html('波士顿红')
            $('.slideP3 .bg5').addClass('show');
            $('.slideP3 .bg1, .slideP3 .bg2, .slideP3 .bg3,.slideP3 .bg4').removeClass('show');
            break;
    }
})


$('.slideP4-1').scroll(function () {
    var a = $('.slideP4-1').scrollTop();
    if (a > winHeight - 10) {
        $('.p4-1-img1').addClass('on')
    }

    if (a > winHeight + $('.slideP4-1 .more-warp .box .p4-1-img1').height()) {
        $('.p4-1-img5').addClass('on')
    }

    if (a > 3800 / 3840 * winWidth) {
        $('.p4-1-img6').addClass('on')
    }

    if (a > 6465 / 3840 * winWidth) {
        $('.p4-1-img10').addClass('on')
    }

    if (a > 7230 / 3840 * winWidth) {
        $('.p4-1-img13').addClass('on')
    }
})

$('.slideP4-2').scroll(function () {
    var a = $('.slideP4-2').scrollTop();
    if (a > winHeight - 10) {
        $('.p4-2-img3').addClass('on')
    }

    if (a > 2008 / 3840 * winWidth) {
        $('.p4-2-img4').addClass('on')
    }

    if (a > 3400 / 3840 * winWidth) {
        $('.p4-2-img7').addClass('on')
    }

    if (a > 4200 / 3840 * winWidth) {
        $('.p4-2-img8').addClass('on')
    }

    if (a > 5800 / 3840 * winWidth) {
        $('.p4-2-img10').addClass('on')
    }

    if (a > 8025 / 3840 * winWidth) {
        $('.p4-2-img12').addClass('on')
    }

    if (a > 10025 / 3840 * winWidth) {
        $('.p4-2-img14').addClass('on')
    }
})

$('.slideP4-3').scroll(function () {
    var a = $('.slideP4-3').scrollTop();
    if (a > winHeight - 10) {
        $('.p4-3-img1').addClass('on')
    }

    if (a > 6790 / 3840 * winWidth) {
        $('.p4-3-img4').addClass('on')
    }

    if (a > 10340 / 3840 * winWidth) {
        $('.p4-3-img6, .p4-3-img7').addClass('on')
    }

    if (a > 11500 / 3840 * winWidth) {
        $('.p4-3-img9').addClass('on')
    }

    if (a > 13000 / 3840 * winWidth) {
        $('.p4-3-img10').addClass('on')
    }
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
    var imgDiv = '<img class="img on" on-src="images-pc-carstyle/victory280t/peizhi/images/peizhi' + pzNum + '_02.png" off-src="images-pc-carstyle/victory280t/peizhi/peizhi_02.png" src="images-pc-carstyle/victory280t/peizhi/images/peizhi' + pzNum + '_02.png">' +
        '<img class="img" on-src="images-pc-carstyle/victory280t/peizhi/images/peizhi' + pzNum + '_03.png" off-src="images-pc-carstyle/victory280t/peizhi/peizhi_03.png" src="images-pc-carstyle/victory280t/peizhi/peizhi_03.png">' +
        '<img class="img" on-src="images-pc-carstyle/victory280t/peizhi/images/peizhi' + pzNum + '_04.png" off-src="images-pc-carstyle/victory280t/peizhi/peizhi_04.png" src="images-pc-carstyle/victory280t/peizhi/peizhi_04.png">' +
        '<img class="img" on-src="images-pc-carstyle/victory280t/peizhi/images/peizhi' + pzNum + '_05.png" off-src="images-pc-carstyle/victory280t/peizhi/peizhi_05.png" src="images-pc-carstyle/victory280t/peizhi/peizhi_05.png">' +
        '<img class="img" on-src="images-pc-carstyle/victory280t/peizhi/images/peizhi' + pzNum + '_06.png" off-src="images-pc-carstyle/victory280t/peizhi/peizhi_06.png" src="images-pc-carstyle/victory280t/peizhi/peizhi_06.png">' +
        '<img class="img" on-src="images-pc-carstyle/victory280t/peizhi/images/peizhi' + pzNum + '_07.png" off-src="images-pc-carstyle/victory280t/peizhi/peizhi_07.png" src="images-pc-carstyle/victory280t/peizhi/peizhi_07.png">' +
        '<img class="img" on-src="images-pc-carstyle/victory280t/peizhi/images/peizhi' + pzNum + '_08.png" off-src="images-pc-carstyle/victory280t/peizhi/peizhi_08.png" src="images-pc-carstyle/victory280t/peizhi/peizhi_08.png">' +
        '<img class="img" on-src="images-pc-carstyle/victory280t/peizhi/images/peizhi' + pzNum + '_09.png" off-src="images-pc-carstyle/victory280t/peizhi/peizhi_09.png" src="images-pc-carstyle/victory280t/peizhi/peizhi_09.png">' +
        '<img class="img" on-src="images-pc-carstyle/victory280t/peizhi/images/peizhi' + pzNum + '_10.png" off-src="images-pc-carstyle/victory280t/peizhi/peizhi_10.png" src="images-pc-carstyle/victory280t/peizhi/peizhi_10.png">'
    $('.slidePeizhi-wrap .img-wrap div').html(imgDiv)
    $('.slidePeizhi-wrap .head-img').attr('src', 'images-pc-carstyle/victory280t/peizhi/peizhi' + pzNum + '.png')
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


$('.dbBox span').on('click', function () {
    $('.slideDongLi').addClass('more swiper-no-swiping')
    swiperMain.disableMousewheelControl();
})

$('.dbb1').click(function () {
    let element = $('.dlMore');
    element[0].scrollIntoView();
})

$('.dbb2').click(function () {
    let element = $('.bmb2');
    element[0].scrollIntoView();
})

$('.dbb3').click(function () {
    let element = $('.dlMore .box .txt3');
    element[0].scrollIntoView();
})

$('.dbb4').click(function () {
    let element = $('.bmb4');
    element[0].scrollIntoView();
})

$('.dlMore .boxMain .hide').on('click', function () {
    $('.slideDongLi').removeClass('more swiper-no-swiping')
    $('.dlMore .box .txt1,.dlMore .box .txt2,.dlMore .box .txt3,.dlMore .box .txt4').removeClass('on');
    $('.slideDongLi').scrollTop(0)
    swiperMain.enableMousewheelControl();
})

var winHeight = $(window).height();
$('.slideDongLi').scroll(function () {
    var a = $('.slideDongLi').scrollTop();
    if (a > winHeight - 500) {
        $('.dlMore .box .txt1').addClass('on')
    }

    if (a > winHeight + $('.im1').height() - 500) {
        $('.dlMore .box .txt2').addClass('on')
    }

    if (a > winHeight + $('.im1').height() + $('.im2').height() - 100) {
        $('.dlMore .box .txt3').addClass('on')
    }

    if (a > winHeight + $('.im1').height() + $('.im2').height() + $('.im3').height() - 200) {
        $('.dlMore .box .txt4').addClass('on')
    }
})

$('.liBox span').on('click', function () {
    $('.swiperLing').addClass('more swiper-no-swiping')
    swiperMain.disableMousewheelControl();
})

$('.lib1').click(function () {
    let element = $('.liMore');
    element[0].scrollIntoView();
})

$('.lib2').click(function () {
    let element = $('.limb2');
    element[0].scrollIntoView();
})

$('.lib3').click(function () {
    let element = $('.liMore .box .txt3')
    element[0].scrollIntoView();
})

$('.lib4').click(function () {
    let element = $('.limb4');
    element[0].scrollIntoView();
})

$('.liMore .boxMain .hide').on('click', function () {
    $('.swiperLing').removeClass('more swiper-no-swiping')
    $('.liMore .box .txt1,.liMore .box .txt2,.liMore .box .txt3,.liMore .box .txt4').removeClass('on');
    $('.swiperLing').scrollTop(0)
    swiperMain.enableMousewheelControl();
})

$('.swiperLing').scroll(function () {
    var a = $('.swiperLing').scrollTop();
    if (a > winHeight - 500) {
        $('.liMore .box .txt1').addClass('on')
    }

    if (a > winHeight + $('.im1').height() - 500) {
        $('.liMore .box .txt2').addClass('on')
    }

    if (a > winHeight + $('.im1').height() + $('.im2').height() - 100) {
        $('.liMore .box .txt3').addClass('on')
    }

    if (a > winHeight + $('.im1').height() + $('.im2').height() + $('.im3').height() - 200) {
        $('.liMore .box .txt4').addClass('on')
    }
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
