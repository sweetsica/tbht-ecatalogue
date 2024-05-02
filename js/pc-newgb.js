$(function () {
    var tem = '<a href="https://miaozhen.com/cn/privacy" target="_blank" style="width:30%;height:27px; display:block;margin-left:48%;margin-top:-9%;position: relative;z-index:2"></a>'
    $('.tkBox .tk .imgtk').after(tem)
})

var ms, sIndex, isF = true;
let swiperMain = new Swiper('.pc-swiper-mainBody', {
    loop: false,
    direction: 'vertical',
    mousewheelControl: true,
    noSwiping: true,
    mousewheelReleaseOnEdges: true,
    onSlideChangeEnd: function (swiper) {
        let idx = swiper.activeIndex;
        sIndex = swiper.activeIndex;
        console.log(idx)
        if (idx == 0) {
            $('.nav').removeClass('ot');
            $('.nav-01').addClass('active').siblings().removeClass('active')
        }
        if (idx == 1) {
            $('.nav').addClass('ot');
            $('.nav-02').addClass('active').siblings().removeClass('active')
            $('.gameMask').show();
        }
        if (idx == 2) {
            $('.gameMask').show();
            setTimeout(function () {
                $('.gameMask').hide();
            }, 1000)
            $('.nav').removeClass('ot');
            $('.nav-03').addClass('active').siblings().removeClass('active')

            $('.gamebox.black').css('width', '36%')
            $('.gamebox.black').siblings('.gamebox').css('width', '12.8%')
            $('.gamebox.black').siblings('.gamebox').children('.txt-off').css('width', '150%')
            $('.gamebox.black').addClass('on')
        }
        if (idx == 3) {
            $('.gameMask').show();
            $('.nav').removeClass('ot');
            $('.nav-04').addClass('active').siblings().removeClass('active')
        }
        if (idx == 4) {
            $('.nav').removeClass('ot');
            $('.nav-05').addClass('active').siblings().removeClass('active')
        }
        if (idx == 5) {
            $('.nav').addClass('ot');
            $('.nav-06').addClass('active').siblings().removeClass('active')
        }
        if (idx == 6) {
            $('.nav').addClass('ot');
            $('.nav-07').addClass('active').siblings().removeClass('active')
        }
        if (idx == 7) {
            $('.nav').addClass('ot');
            $('.nav-08').addClass('active').siblings().removeClass('active')
        }
        if (idx == 8) {
            $('.nav').addClass('ot');
            $('.nav-09').addClass('active').siblings().removeClass('active')
        }
        // if (idx == 9) {
        //     $('.nav').removeClass('ot');
        //     $('.nav-10').addClass('active').siblings().removeClass('active')
        // }

        if (idx == 0) {
            $('header').removeClass('hide');
        } else {
            $('header').addClass('hide');
        }
        if (idx == 8 && isF) {
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

// swiperMain.slideTo(2)
// swiperMain.disableMousewheelControl();
// let videoUrl;
let swiperVideo = new Swiper('.swiperVideo', {
    loop: true,
    mousewheelControl: false,
    noSwiping: true,
    // autoplay: 5000,
    mousewheelReleaseOnEdges: true,
    prevButton: '.button-video-prev',
    nextButton: '.button-video-next',
    onSlideChangeEnd: function (swiper) {
        let idx = swiper.realIndex;
        if (idx == 0) {
            $('#video').attr('src','newgbvideo/v1.mp4')
        }
        if (idx == 1) {
            $('#video').attr('src','newgbvideo/v1-1.mp4')
        }
        console.log(idx)
    }
});

var autoChangeTimer;

// swipergb.params.autoplay=200; 

$('.v-sec .btn').click(function () {
    $('#video-cny').show();
    $('#video-cny')[0].play();
    $('.cny-video-close').show();
    if (vidIndex == 0) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-GAMEBOY', '飓风魅影_视频播放-点击', '宏光MINIEV GAMEBOY');
    }
    if (vidIndex == 1) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-GAMEBOY', '丛林穿越_视频播放-点击', '宏光MINIEV GAMEBOY');
    }
    if (vidIndex == 2) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-GAMEBOY', '星际漫游_视频播放-点击', '宏光MINIEV GAMEBOY');
    }
    if (vidIndex == 3) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-GAMEBOY', '派对甜心_视频播放-点击', '宏光MINIEV GAMEBOY');
    }
})

$('.cny-video-close').click(function () {
    $('#video-cny').hide();
    $('#video-cny')[0].pause();
    $('.cny-video-close').hide();
})

// $(document).mousemove(function () {
//     if(sIndex == 1){
//         $('.gameMask').show();
//     }
//     if(sIndex == 2){
//         setTimeout(function(){
//             $('.gameMask').hide();
//         },600)
//     }
//     if(sIndex == 3){
//         $('.gameMask').show();
//     }
// })

$('.gamebox').hover(function () {
    $(this).addClass('on').siblings('.gamebox').removeClass('on')
    $(this).css('width', '36%')
    $(this).siblings('.gamebox').css('width', '12.8%')
    $(this).siblings('.gamebox').children('.txt-off').css('width', '150%')
}, function () {
    $('.gamebox').css('width', (100 / 6) + '%');
    $('.gamebox .txt-off ').css('width', '120%');
    $('.gamebox').removeClass('on')
})

var vidIndex = 0;
var gbmid1, gbmid2, gbmid3, gbmid4, gbmid5, gbmid6;
gbmid1 = new Swiper('.sw-mid-black', {
    slidesPerView: 2.3,
    centeredSlides: true,
    autoplay: 2000,
    // loopedSlides: 6,
    loopAdditionalSlides: 2,
    loop: true,
    spaceBetween: 40,
    observer: true,
    observeParents: true,
    nextButton: '.n1',
    prevButton: '.p1',
});

gbmid2 = new Swiper('.sw-mid-green', {
    slidesPerView: 2.3,
    centeredSlides: true,
    autoplay: 2000,
    // loopedSlides: 6,
    loopAdditionalSlides: 2,
    loop: true,
    spaceBetween: 40,
    observer: true,
    observeParents: true,
    nextButton: '.n2',
    prevButton: '.p2',
});

gbmid3 = new Swiper('.sw-mid-white', {
    slidesPerView: 2.3,
    centeredSlides: true,
    autoplay: 2000,
    // loopedSlides: 6,
    loopAdditionalSlides: 2,
    loop: true,
    spaceBetween: 40,
    observer: true,
    observeParents: true,
    nextButton: '.n3',
    prevButton: '.p3',
});

gbmid4 = new Swiper('.sw-mid-cof', {
    slidesPerView: 2.3,
    centeredSlides: true,
    autoplay: 2000,
    // loopedSlides: 6,
    loopAdditionalSlides: 2,
    loop: true,
    spaceBetween: 40,
    observer: true,
    observeParents: true,
    nextButton: '.n4',
    prevButton: '.p4',
});

gbmid5 = new Swiper('.sw-mid-lemon', {
    slidesPerView: 2.3,
    centeredSlides: true,
    autoplay: 2000,
    // loopedSlides: 6,
    loopAdditionalSlides: 2,
    loop: true,
    spaceBetween: 40,
    observer: true,
    observeParents: true,
    nextButton: '.n5',
    prevButton: '.p5',
});

gbmid6 = new Swiper('.sw-mid-pink', {
    slidesPerView: 2.3,
    centeredSlides: true,
    autoplay: 2000,
    // loopedSlides: 6,
    loopAdditionalSlides: 2,
    loop: true,
    spaceBetween: 40,
    observer: true,
    observeParents: true,
    nextButton: '.n6',
    prevButton: '.p6',
});

gbmid1.stopAutoplay()
gbmid2.stopAutoplay()
gbmid3.stopAutoplay()
gbmid4.stopAutoplay()
gbmid5.stopAutoplay()
gbmid6.stopAutoplay()
$('.gamebox').click(function () {
    $('.gameBoy').addClass('more swiper-no-swiping')
    swiperMain.disableMousewheelControl();
    let element = $('.game-main');
    element[0].scrollIntoView();
    var index = $(this).index();
    vidIndex = index;
    switch (index) {
        case 0:
            $('.game-main .v-sec').show().addClass('black').removeClass('green white cof')
            $('.game-main .v-sec .btn').attr('src', 'images-pc-carstyle/newgb/black-v-btn.png')
            $('#video-cny').attr('src', 'newgbvideo/v-b.mp4')
            $('.game-main .p-sec .top-img').attr('src', 'images-pc-carstyle/newgb/black-p-top.png')
            $('.game-main .p-sec .bom-img').attr('src', 'images-pc-carstyle/newgb/black-p-bom.png')
            $('.sw-mid-black').show();
            $('.sw-mid-green,.sw-mid-white,.sw-mid-cof,.sw-mid-pink,.sw-mid-lemon').hide();
            gbmid1.startAutoplay()
            stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-GAMEBOY', '飓风魅影_展开更多-点击', '宏光MINIEV GAMEBOY');
            break;
        case 1:
            $('.game-main .v-sec').show().addClass('green').removeClass('black white cof')
            $('.game-main .v-sec .btn').attr('src', 'images-pc-carstyle/newgb/green-v-btn.png')
            $('#video-cny').attr('src', 'newgbvideo/v-g.mp4')
            $('.game-main .p-sec .top-img').attr('src', 'images-pc-carstyle/newgb/green-p-top.png')
            $('.game-main .p-sec .bom-img').attr('src', 'images-pc-carstyle/newgb/green-p-bom.png')
            $('.sw-mid-green').show();
            $('.sw-mid-black,.sw-mid-white,.sw-mid-cof,.sw-mid-pink,.sw-mid-lemon').hide();
            gbmid2.startAutoplay()
            stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-GAMEBOY', '丛林穿越_展开更多-点击', '宏光MINIEV GAMEBOY');
            break;
        case 2:
            $('.game-main .v-sec').show().addClass('white').removeClass('green black cof')
            $('.game-main .v-sec .btn').attr('src', 'images-pc-carstyle/newgb/white-v-btn.png')
            $('#video-cny').attr('src', 'newgbvideo/v-w.mp4')
            $('.game-main .p-sec .top-img').attr('src', 'images-pc-carstyle/newgb/white-p-top.png')
            $('.game-main .p-sec .bom-img').attr('src', 'images-pc-carstyle/newgb/white-p-bom.png')
            $('.sw-mid-white').show();
            $('.sw-mid-green,.sw-mid-black,.sw-mid-cof,.sw-mid-pink,.sw-mid-lemon').hide();
            gbmid3.startAutoplay()
            stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-GAMEBOY', '星际漫游_展开更多-点击', '宏光MINIEV GAMEBOY');
            break;
        case 3:
            $('.game-main .v-sec').show().addClass('cof').removeClass('green white black')
            $('.game-main .v-sec .btn').attr('src', 'images-pc-carstyle/newgb/cof-v-btn.png')
            $('#video-cny').attr('src', 'newgbvideo/v-c.mp4')
            $('.game-main .p-sec .top-img').attr('src', 'images-pc-carstyle/newgb/cof-p-top.png')
            $('.game-main .p-sec .bom-img').attr('src', 'images-pc-carstyle/newgb/cof-p-bom.png')
            $('.sw-mid-cof').show();
            $('.sw-mid-green,.sw-mid-white,.sw-mid-black,.sw-mid-pink,.sw-mid-lemon').hide();
            gbmid4.startAutoplay()
            stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-GAMEBOY', '派对甜心_展开更多-点击', '宏光MINIEV GAMEBOY');
            break;
        case 4:
            $('.game-main .v-sec').hide()
            $('.game-main .p-sec .top-img').attr('src', 'images-pc-carstyle/newgb/lemon-p-top.png')
            $('.game-main .p-sec .bom-img').attr('src', 'images-pc-carstyle/newgb/lemon-p-bom.png')
            $('.sw-mid-lemon').show();
            $('.sw-mid-green,.sw-mid-white,.sw-mid-black,.sw-mid-cof,.sw-mid-pink').hide();
            gbmid5.startAutoplay()
            stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-GAMEBOY', '青柠苏打_展开更多-点击', '宏光MINIEV GAMEBOY');
            break;
        case 5:
            $('.game-main .v-sec').hide()
            $('.game-main .p-sec .top-img').attr('src', 'images-pc-carstyle/newgb/pink-p-top.png')
            $('.game-main .p-sec .bom-img').attr('src', 'images-pc-carstyle/newgb/pink-p-bom.png')
            $('.sw-mid-pink').show();
            $('.sw-mid-green,.sw-mid-white,.sw-mid-black,.sw-mid-cof,.sw-mid-lemon').hide();
            gbmid6.startAutoplay()
            stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-GAMEBOY', '落英缤纷_展开更多-点击', '宏光MINIEV GAMEBOY');
            break;
    }
})

$('.game-back').on('click', function () {
    $('.gameBoy').removeClass('more swiper-no-swiping')
    $('.gameBoy').scrollTop(0)
    swiperMain.enableMousewheelControl();
})

$('.home-arrow').on('click', function () {
    swiperMain.slideTo(1);
})
$('.top').on('click', function () {
    swiperMain.slideTo(0, 0);
    stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-车型页底部', 'Top-点击', '宏光MINIEV GAMEBOY');
})
$('.nav li').on('click', function () {
    let idx = $(this).index();
    if (idx == 0) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-右侧导航栏', '车型首页-点击', '宏光MINIEV GAMEBOY');
    }
    if (idx == 1) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-右侧导航栏', '潮创领地-点击', '宏光MINIEV GAMEBOY');
    }
    if (idx == 2) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-右侧导航栏', 'GAMEBOY-点击', '宏光MINIEV GAMEBOY');
    }
    if (idx == 3) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-右侧导航栏', '订车权益-点击', '宏光MINIEV GAMEBOY');
    }
    if (idx == 4) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-右侧导航栏', '预约试驾-点击', '宏光MINIEV GAMEBOY');
    }
    if (idx == 5) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-右侧导航栏', '潮级个性-点击', '宏光MINIEV GAMEBOY');
    }
    if (idx == 6) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-右侧导航栏', '潮级实力-点击', '宏光MINIEV GAMEBOY');
    }
    if (idx == 7) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-右侧导航栏', '潮级适逸-点击', '宏光MINIEV GAMEBOY');
    }
    if (idx == 8) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-右侧导航栏', '潮级酷装-点击', '宏光MINIEV GAMEBOY');
    }
    if (idx == 9) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-右侧导航栏', '车型配置-点击', '宏光MINIEV GAMEBOY');
    }

    swiperMain.slideTo(idx);

    $('.spot').removeClass('more swiper-no-swiping')
    $('.spot .txt').removeClass('on');
    $('.spot').scrollTop(0)
    swiperMain.enableMousewheelControl();

    clearInterval(cmTimer)
    clearInterval(wheelTimer)
    clearInterval(kuangTimer)
    // clearInterval(semoTimer)
    cmNum = 0;
    wheelNum = 0;
    kuangNum = 0;
    // semoNum = 0;

    $('.gameBoy').removeClass('more swiper-no-swiping')
    $('.gameBoy').scrollTop(0)
    swiperMain.enableMousewheelControl();
})

$('.btn-booking').on('click', function () {
    swiperMain.slideTo(4);
})

$('.btn-toy').on('click', function () {
    $('.video-box').fadeIn();
    $('#video').attr('src', 'newgbvideo/v-toy.mp4');
    setTimeout(function () {
        $('#video')[0].play();
    }, 200)

    $('.toy-video').addClass('swiper-no-swiping')
    swiperMain.disableMousewheelControl();
    stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-大玩具来袭', '视频播放-点击', '宏光MINIEV GAMEBOY');
})
$('.video-txt').on('click', function () {
    $('.video-box').fadeIn();
    setTimeout(function () {
        $('#video')[0].play();
    }, 200)

    $('.slideVideo').addClass('swiper-no-swiping')
    swiperMain.disableMousewheelControl();
    stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-潮创领地', '视频播放-点击', '宏光MINIEV GAMEBOY');
})

$('.video-box .close').on('click', function () {
    $('.video-box').fadeOut();
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
    var imgDiv = '<img class="img on" on-src="images-pc-carstyle/newgb/peizhi/images/peizhi' + pzNum + '_02.png" off-src="images-pc-carstyle/newgb/peizhi/peizhi_02.png" src="images-pc-carstyle/newgb/peizhi/images/peizhi' + pzNum + '_02.png">' +
        '<img class="img" on-src="images-pc-carstyle/newgb/peizhi/images/peizhi' + pzNum + '_03.png" off-src="images-pc-carstyle/newgb/peizhi/peizhi_03.png" src="images-pc-carstyle/newgb/peizhi/peizhi_03.png">' +
        '<img class="img" on-src="images-pc-carstyle/newgb/peizhi/images/peizhi' + pzNum + '_04.png" off-src="images-pc-carstyle/newgb/peizhi/peizhi_04.png" src="images-pc-carstyle/newgb/peizhi/peizhi_04.png">' +
        '<img class="img" on-src="images-pc-carstyle/newgb/peizhi/images/peizhi' + pzNum + '_05.png" off-src="images-pc-carstyle/newgb/peizhi/peizhi_05.png" src="images-pc-carstyle/newgb/peizhi/peizhi_05.png">' +
        '<img class="img" on-src="images-pc-carstyle/newgb/peizhi/images/peizhi' + pzNum + '_06.png" off-src="images-pc-carstyle/newgb/peizhi/peizhi_06.png" src="images-pc-carstyle/newgb/peizhi/peizhi_06.png">' +
        '<img class="img" on-src="images-pc-carstyle/newgb/peizhi/images/peizhi' + pzNum + '_07.png" off-src="images-pc-carstyle/newgb/peizhi/peizhi_07.png" src="images-pc-carstyle/newgb/peizhi/peizhi_07.png">' +
        '<img class="img" on-src="images-pc-carstyle/newgb/peizhi/images/peizhi' + pzNum + '_08.png" off-src="images-pc-carstyle/newgb/peizhi/peizhi_08.png" src="images-pc-carstyle/newgb/peizhi/peizhi_08.png">' +
        '<img class="img" on-src="images-pc-carstyle/newgb/peizhi/images/peizhi' + pzNum + '_09.png" off-src="images-pc-carstyle/newgb/peizhi/peizhi_09.png" src="images-pc-carstyle/newgb/peizhi/peizhi_09.png">' +
        '<img class="img" on-src="images-pc-carstyle/newgb/peizhi/images/peizhi' + pzNum + '_10.png" off-src="images-pc-carstyle/newgb/peizhi/peizhi_10.png" src="images-pc-carstyle/newgb/peizhi/peizhi_10.png">'
    $('.slidePeizhi-wrap .img-wrap div').html(imgDiv)
    $('.slidePeizhi-wrap .head-img').attr('src', 'images-pc-carstyle/newgb/peizhi/peizhi' + pzNum + '.png')
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

$('.spot .btn').click(function () {
    var num = $(this).data('type');
    $(this).hide();
    $(this).parent().parent().parent().addClass('more')
    swiperMain.disableMousewheelControl();
    let element = $('.spot-more-' + num)
    element[0].scrollIntoView();

    if (num == 1) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-潮级个性', '展开更多-点击', '宏光MINIEV GAMEBOY');
    }

    if (num == 2) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-潮级实力', '展开更多-点击', '宏光MINIEV GAMEBOY');
    }

    if (num == 3) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-潮级适逸', '展开更多-点击', '宏光MINIEV GAMEBOY');
    }

    if (num == 4) {
        stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-潮级酷装', '展开更多-点击', '宏光MINIEV GAMEBOY');

        cmTimer = setInterval(function () {
            cmNum++;
            if (cmNum > 3) {
                cmNum = 0
            }
            $('.spot-car-cm').eq(cmNum).addClass('on').siblings().removeClass('on')
        }, 3000)

        wheelTimer = setInterval(function () {
            wheelNum++;
            if (wheelNum > 5) {
                wheelNum = 0
            }
            $('.wheel .slide .img').eq(wheelNum).addClass('on').siblings().removeClass('on')
            // console.log('wheelNum: '+wheelNum)
        }, 1500)

        kuangTimer = setInterval(function () {
            kuangNum++;
            if (kuangNum > 7) {
                kuangNum = 0
            }
            $('.kuang .kuang-box .img').eq(kuangNum).addClass('on').siblings().removeClass('on')
        }, 1500)

        // semoTimer = setInterval(function () {
        //     semoNum++;
        //     if (semoNum > 1) {
        //         semoNum = 0
        //     }
        //     $('.semo .car').eq(semoNum).addClass('on').siblings('.car').removeClass('on')
        // }, 1500)
    }
})

$('.spot .hide').on('click', function () {
    $('.spot .btn').show();
    $('.spot').removeClass('more swiper-no-swiping')
    $('.spot .txt').removeClass('on');
    $('.spot').scrollTop(0)
    swiperMain.enableMousewheelControl();

    clearInterval(cmTimer)
    clearInterval(wheelTimer)
    clearInterval(kuangTimer)
    // clearInterval(semoTimer)
    cmNum = 0;
    wheelNum = 0;
    kuangNum = 0;
    // semoNum = 0;
})

$('.spot-1').scroll(function () {
    var a = $('.spot-1').scrollTop();
    if (a > winHeight - 500) {
        $('.spot-1 .txt1').addClass('on')
    }

    if (a > winHeight + $('.im1').height()) {
        $('.spot-1 .txt2').addClass('on')
    }

    if (a > winHeight + $('.im1').height() + $('.im2').height() - 800) {
        $('.spot-1 .txt3').addClass('on')
    }

    if (a > winHeight + $('.im1').height() + $('.im2').height() + $('.im3').height() - 200) {
        $('.spot-1 .txt4').addClass('on')
        $('.spot-1 .txt5').addClass('on')
    }

    if (a > winHeight + $('.im1').height() + $('.im2').height() + $('.im3').height() + $('.im4').height() - 200) {
        $('.spot-1 .txt6').addClass('on')
    }
})

$('.spot-2').scroll(function () {
    var a = $('.spot-2').scrollTop();
    if (a > winHeight - 500) {
        $('.spot-2 .txt1').addClass('on')
    }

    if (a > winHeight + $('.im1').height() - 500) {
        $('.spot-2 .txt2').addClass('on')
    }

    if (a > winHeight + $('.im1').height() + $('.im2').height() - 1200) {
        $('.spot-2 .txt3').addClass('on')
    }
})

$('.spot-3').scroll(function () {
    var a = $('.spot-3').scrollTop();
    if (a > winHeight - 500) {
        $('.spot-3 .txt1').addClass('on')
    }
})

var cmNum = 0;
var cmTimer;

var wheelNum = 0;
var wheelTimer;

var kuangNum = 0;
var kuangTimer;

// var semoNum = 0;
// var semoTimer;


var chetie = 0;
$('.chetie .arr-next').click(function () {
    chetie++;
    if (chetie > 7) {
        chetie = 0
    }
    $('.chetie .car').eq(chetie).addClass('on').siblings().removeClass('on')
    $('.chetie .dots .dot').eq(chetie).addClass('on').siblings().removeClass('on')
    stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-潮级酷装', '右箭头点击', '宏光MINIEV GAMEBOY');
})

$('.chetie .arr-prev').click(function () {
    chetie--;
    if (chetie < 0) {
        chetie = 7
    }
    $('.chetie .car').eq(chetie).addClass('on').siblings().removeClass('on')
    $('.chetie .dots .dot').eq(chetie).addClass('on').siblings().removeClass('on')
    stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-潮级酷装', '左箭头点击', '宏光MINIEV GAMEBOY');
})

var leidiao = new Swiper('.leidiao-main', {
    slidesPerView: 2.3,
    centeredSlides: true,
    // loopedSlides: 4,
    autoplay: 2000,
    loop: true,
    spaceBetween: 40,
    observer: true,
    observeParents: true,
});

$('.baowei .dots .dot').click(function () {
    var index = $(this).index();
    $(this).addClass('on').siblings().removeClass('on')
    $('.baowei .b-img').eq(index).addClass('on').siblings().removeClass('on')
    stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-潮级酷装', '潮流套色包围装饰件_色块-点击', '宏光MINIEV GAMEBOY');
})

// $('.semo .dots .dot').click(function () {
//     var index = $(this).index();
//     $(this).addClass('on').siblings().removeClass('on')
//     $('.semo .car').eq(index).addClass('on').siblings().removeClass('on')
//     stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页-潮级酷装', '渐变炫彩色膜_色块-点击', '宏光MINIEV GAMEBOY');
// })

// $('.slide-btn').hover(function () {
//     $('.xiading').fadeIn()
//     stm_clicki('send', 'event', '宏光MINIEV GAMEBOY上市车型页', '立即定制-点击', '宏光MINIEV GAMEBOY');
// }, function () { })

$('.xiading').click(function () {
    $(this).fadeOut()
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
