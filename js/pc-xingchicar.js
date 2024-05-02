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
            $('.nav-01').addClass('active').siblings().removeClass('active')
        }
        if (idx == 1) {
            $('.nav-02').addClass('active').siblings().removeClass('active')
        }
        if (idx == 2) {
            $('.nav-03').addClass('active').siblings().removeClass('active')
        }
        if (idx == 3) {
            $('.nav-04').addClass('active').siblings().removeClass('active')
        }
        if (idx == 4) {
            $('.nav-05').addClass('active').siblings().removeClass('active')
        }
        if (idx == 5) {
            $('.nav-06').addClass('active').siblings().removeClass('active')
        }
        if (idx == 6) {
            $('.nav-07').addClass('active').siblings().removeClass('active')
        }
        // if (idx == 7) {
        //     $('.nav-08').addClass('active').siblings().removeClass('active')
        // }
        if(idx == 6) {
            $('.nav').addClass('style2').removeClass('style3 style4');
        } else if (idx == 1){
            $('.nav').addClass('style3').removeClass('style2 style4');
        } else if (idx == 2){
            $('.nav').addClass('style4').removeClass('style2 style3');
        } else {
            $('.nav').removeClass('style2 style3 style4');
        }
        if (idx == 0) {
            $('header').removeClass('hide');
        } else {
            $('header').addClass('hide');
        }
        if (idx == 6 && isF) {
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

$('.home-arrow').on('click', function () {
    swiperMain.slideTo(1);
})
$('.top').on('click', function () {
    swiperMain.slideTo(0, 0);
    stm_clicki('send', 'event', '五菱星驰车型页-车型页底部', 'Top按钮-点击','五菱星驰');
})

$('.nav li').on('click', function () {
    let idx = $(this).index()
    swiperMain.slideTo(idx);
    $('.slideliangdian').removeClass('more');
    swiperMain.enableMousewheelControl();
    $('.slideliangdian').scrollTop(0);
    $('.more-warp').hide();

})

let imgNum = 8;
for (let index = 1; index <= imgNum; index++) {
    let imgCont = '<div class="swiper-slide"><img src="images-pc-carstyle/xingchicar/pic/' + index + '.jpg"></div>'

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

    if (_num <= 5) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    swiperImgB.slideTo(_num)
    stm_clicki('send', 'event', '五菱星驰车型页-车型美图', '小图-点击','五菱星驰');
})
$('.prev, .next').on('click', function () {
    if ($(this).hasClass('prev')) {
        if (_num != 0) {
            _num = _num - 1
        }
        stm_clicki('send', 'event', '五菱星驰车型页-车型美图', '下箭头-点击','五菱星驰');
    } else {
        if (_num < 5) {
            _num = _num + 1
        }
        stm_clicki('send', 'event', '五菱星驰车型页-车型美图', '上箭头-点击','五菱星驰');
    }
    $('.img-wrap-s ul li').eq(_num).addClass('active').siblings().removeClass('active')
    if (_num <= 5) {
        let imgHeight = -$('.img-wrap-s ul li').outerHeight(true);
        $('.img-wrap-s ul').css('transform', 'translateY(' + imgHeight * _num + 'px)')
    }
    swiperImgB.slideTo(_num)
})


$('.video-txt').on('click', function () {
    $('.video-wrap').fadeIn();
    $('#video')[0].play();
    $('.slideVideo').addClass('swiper-no-swiping')
    swiperMain.disableMousewheelControl();
    stm_clicki('send', 'event', '五菱星驰车型页-车型视频', '视频播放-点击','五菱星驰');
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
    stm_clicki('send', 'event', '五菱星驰车型页-留资', '隐私条款勾选-点击','五菱星驰');
    var that = $(this).parent();
    if (that.hasClass("active")) {
        that.removeClass("active");
    } else {
        that.addClass("active");
    }
});

var winHeight = $(window).height(), winWidth = $(window).width();


var sartsWidth = $('.slideliangdian .bom .btn-box .btn-wrap .stars').width();
$('.stars img,.stars-active img').css('width', sartsWidth)
// var ms2
$('.rule_btn').on('click', function () {
    $('.popUp-wrap').fadeIn()
    stm_clicki('send', 'event', '五菱星驰车型页-留资', '隐私条款-点击','五菱星驰');
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

$('.slidecar .left .btn').click(function(){
    swiperMain.slideTo(3)
})

var scrollType;


$('.slideliangdian .bom .btn-wrap').click(function () {
    $(this).addClass('active')
    $('.td-btn').hide();
    setTimeout(()=> {
        $('.slideliangdian').addClass('more');
        scrollType = $(this).data('type');
        $('.more-warp').eq(scrollType).show().siblings().hide()
        
        let hlImg = $('.hl-img')

        hlImg.each(function (i) {
            let hlWidth = $(this).width(), hlHeight = $(this).height();
            $(this).find('img').css({width: hlWidth})
        });

        swiperMain.disableMousewheelControl();

        let element = $('.mw' + scrollType);
        element[0].scrollIntoView()
        if(scrollType == 0) {
            $('.hl-1-img-1,.hl-1-img-2').addClass('on')
            stm_clicki('send', 'event', '五菱星驰车型页-车型亮点', '风格，玩得起图片-点击','五菱星驰');
        }
        if(scrollType == 1) {
            $('.hl-2-img-1').addClass('on')
            stm_clicki('send', 'event', '五菱星驰车型页-车型亮点', '运动，玩得起图片-点击','五菱星驰');
        }
        if(scrollType == 2) {
            $('.hl-3-img-1').addClass('on')
            stm_clicki('send', 'event', '五菱星驰车型页-车型亮点', '智能，玩得起图片-点击','五菱星驰');
        }
        if(scrollType == 3) {
            $('.hl-4-img-1,.hl-4-img-2').addClass('on')
            stm_clicki('send', 'event', '五菱星驰车型页-车型亮点', '空间，玩得起图片-点击','五菱星驰');
        }
        if(scrollType == 4) {
            $('.hl-5-img-1').addClass('on')
            stm_clicki('send', 'event', '五菱星驰车型页-车型亮点', '品质，玩得起图片-点击','五菱星驰');
        }

        $('.nav').hide()

    }, 1200)
    
})




$('.color-btn').on('click', function(){
    let idx = $(this).index()
    $('.color-btn').eq(idx-1).addClass('active').siblings().removeClass('active')
    $('.car-img img').attr('src', 'images-pc-carstyle/xingchicar/car-' + idx +'.jpg')
    if(idx == 1) {
        stm_clicki('send', 'event', '五菱星驰车型页-车型颜色', '1.5T钮北黄-点击','五菱星驰');
    }
    if(idx == 2) {
        stm_clicki('send', 'event', '五菱星驰车型页-车型颜色', '1.5T勒芒蓝-点击','五菱星驰');
    }
    if(idx == 3) {
        stm_clicki('send', 'event', '五菱星驰车型页-车型颜色', '1.5T雪邦白-点击','五菱星驰');
    }
    if(idx == 4) {
        stm_clicki('send', 'event', '五菱星驰车型页-车型颜色', '1.5L钮北黄-点击','五菱星驰');
    }
    if(idx == 5) {
        stm_clicki('send', 'event', '五菱星驰车型页-车型颜色', '1.5L银石灰-点击','五菱星驰');
    }
    if(idx == 6) {
        stm_clicki('send', 'event', '五菱星驰车型页-车型颜色', '1.5L雪邦白-点击','五菱星驰');
    }
    if(idx == 7) {
        stm_clicki('send', 'event', '五菱星驰车型页-车型颜色', '1.5L斯帕绿-点击','五菱星驰');
    }
})


$('.slideliangdian .hl-return .btn').click(function () {
    $('.slideliangdian').removeClass('more');
    swiperMain.enableMousewheelControl();
    $('.slideliangdian').scrollTop(0);
    $('.more-warp').hide();
    $('.slideliangdian .con').show();
    $('.slideliangdian .bom .btn-wrap').removeClass('active')
    setTimeout(()=>{
        $('.hl-img').removeClass('on');
    },1000)
    $('.nav').show();
    $('.td-btn').show();
    stm_clicki('send', 'event', '五菱星驰车型页-车型亮点', '返回上一页-点击','五菱星驰');
})

$('.slideliangdian').scroll(function () {
    var a = $('.slideliangdian').scrollTop();
    if (scrollType == 0) {
        if (a >= parseInt($('.hl-1-img-3').css('top')) - winHeight / 1.5 ) {
            $('.hl-1-img-3,.hl-1-img-4').addClass('on')
        }
        if (a >= parseInt($('.hl-1-img-5').css('top')) - winHeight / 1.5 ) {
            $('.hl-1-img-5').addClass('on')
        }
        if (a >= parseInt($('.hl-1-img-6').css('top')) - winHeight / 1.5 ) {
            $('.hl-1-img-6').addClass('on')
        }
        if (a >= parseInt($('.hl-1-img-7').css('top')) - winHeight / 1.5 ) {
            $('.hl-1-img-7').addClass('on')
        }
        if (a >= parseInt($('.hl-1-img-8').css('top')) - winHeight / 1.5 ) {
            $('.hl-1-img-8').addClass('on')
        }
        if (a >= parseInt($('.hl-1-img-9').css('top')) - winHeight / 1.5 ) {
            $('.hl-1-img-9').addClass('on')
        }
        if (a >= parseInt($('.hl-1-img-10').css('top')) - winHeight / 1.5 ) {
            $('.hl-1-img-10').addClass('on')
        }
    }

    if (scrollType == 1) {
        if (a >= parseInt($('.hl-2-img-2').css('top')) - winHeight / 1.5 ) {
            $('.hl-2-img-2').addClass('on')
        }
        if (a >= parseInt($('.hl-2-img-3').css('top')) - winHeight / 1.5 ) {
            $('.hl-2-img-3,.hl-2-img-3-txt').addClass('on')
        }
        if (a >= parseInt($('.hl-2-img-4').css('top')) - winHeight / 1.5 ) {
            $('.hl-2-img-4').addClass('on')
        }
        if (a >= parseInt($('.hl-2-img-5').css('top')) - winHeight / 1.5 ) {
            $('.hl-2-img-5').addClass('on')
        }
        if (a >= parseInt($('.hl-2-img-6').css('top')) - winHeight / 1.5 ) {
            $('.hl-2-img-6').addClass('on')
        }
        if (a >= parseInt($('.hl-2-img-7').css('top')) - winHeight / 1.5 ) {
            $('.hl-2-img-7').addClass('on')
        }
    }

    if (scrollType == 2) {
        if (a >= parseInt($('.hl-3-img-2').css('top')) - winHeight / 1.5 ) {
            $('.hl-3-img-2').addClass('on')
        }
        if (a >= parseInt($('.hl-3-img-3').css('top')) - winHeight / 1.5 ) {
            $('.hl-3-img-3').addClass('on')
        }
        if (a >= parseInt($('.hl-3-img-4').css('top')) - winHeight / 1.5 ) {
            $('.hl-3-img-4').addClass('on')
        }
        if (a >= parseInt($('.hl-3-img-5').css('top')) - winHeight / 1.5 ) {
            $('.hl-3-img-5').addClass('on')
        }
        if (a >= parseInt($('.hl-3-img-6').css('top')) - winHeight / 1.5 ) {
            $('.hl-3-img-6').addClass('on')
        }
        if (a >= parseInt($('.hl-3-img-7').css('top')) - winHeight / 1.5 ) {
            $('.hl-3-img-7').addClass('on')
        }
    }
    if (scrollType == 3) {
        if (a >= parseInt($('.hl-4-img-3').css('top')) - winHeight / 1.5 ) {
            $('.hl-4-img-3').addClass('on')
        }
        if (a >= parseInt($('.hl-4-img-4').css('top')) - winHeight / 1.5 ) {
            $('.hl-4-img-4').addClass('on')
        }
        if (a >= parseInt($('.hl-4-img-5').css('top')) - winHeight / 1.5 ) {
            $('.hl-4-img-5').addClass('on')
        }
        if (a >= parseInt($('.hl-4-img-6').css('top')) - winHeight / 1.5 ) {
            $('.hl-4-img-6').addClass('on')
        }
        if (a >= parseInt($('.hl-4-img-7').css('top')) - winHeight / 1.5 ) {
            $('.hl-4-img-7').addClass('on')
        }
        if (a >= parseInt($('.hl-4-img-8').css('top')) - winHeight / 1.5 ) {
            $('.hl-4-img-8').addClass('on')
        }
    }
    if (scrollType == 4) {
        if (a >= parseInt($('.hl-5-img-2').css('top')) - winHeight / 1.5 ) {
            $('.hl-5-img-2').addClass('on')
        }
        if (a >= parseInt($('.hl-5-img-3').css('top')) - winHeight / 1.5 ) {
            $('.hl-5-img-3').addClass('on')
        }
        if (a >= parseInt($('.hl-5-img-4').css('top')) - winHeight / 1.5 ) {
            $('.hl-5-img-4').addClass('on')
            setTimeout(()=>{
                $('.hl-5-img-6-txt').addClass('on')
            },500) 
        }
        if (a >= parseInt($('.hl-5-img-5').css('top')) - winHeight / 1.5 ) {
            $('.hl-5-img-5').addClass('on')
        }
        if (a >= parseInt($('.hl-5-img-6').css('top')) - winHeight / 1.5 ) {
            $('.hl-5-img-6').addClass('on')
        }
        if (a >= parseInt($('.hl-5-img-7').css('top')) - winHeight / 1.5 ) {
            $('.hl-5-img-7').addClass('on')
        }
    }
})

$('.td-btn').on('click', function () {
    stm_clicki('send', 'event', '五菱星驰车型页', '预约试驾-点击','五菱星驰');
    swiperMain.slideTo(3);
})

$('.lc').on('click', function() {
    stm_clicki('send', 'event', '五菱星驰车型页-预约试驾', '前往LING Club下订-点击','五菱星驰');
    window.open('http://cdn-mall.00bang.cn/#/app/car/detail?carTypeId=89')
})
$('.tmall').on('click', function() {
    stm_clicki('send', 'event', '五菱星驰车型页-预约试驾', '前往天猫下订-点击','五菱星驰');
    window.open('https://detail.tmall.com/item.htm?id=684776819159')
})
$('.jd').on('click', function() {
    stm_clicki('send', 'event', '五菱星驰车型页-预约试驾', '前往京东下订-点击','五菱星驰');
    window.open('https://item.jd.com/10060720726474.html')
})
