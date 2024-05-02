$(function () {
    var tem = '<a href="https://miaozhen.com/cn/privacy" target="_blank" style="width:30%;height:27px; display:block;margin-left:48%;margin-top:-9%;position: relative;z-index:2"></a>'
    $('.tkBox .tk .imgtk').after(tem)
})

function audioAutoPlay(id) {
    var audio = document.getElementById(id),
        play = function () {
            audio.play();
            document.removeEventListener("touchstart", play, false);
        };
    audio.play();

    document.addEventListener("WeixinJSBridgeReady", function () { //微信
        play();
    }, false);
    document.addEventListener("touchstart", play, false);
}

// $(window).load(function () {
//     audioAutoPlay('video-1');
//     audioAutoPlay('video-2');
//     audioAutoPlay('video-3');
// })

// var lowresImages = $('img');
// var imgObj = []
// lowresImages.each(function (i) {
//     var lowres = $(this).attr('src');
//     var data = { src: lowres }
//     imgObj.push(data)
// });


// var manifest = [
//     { src: "images-pc-carstyle/airev/try-1.jpg" },
//     { src: "images-pc-carstyle/airev/try-2.jpg" },
//     { src: "images-pc-carstyle/airev/try-3.jpg" },
//     { src: "images-pc-carstyle/airev/pc-full-1.jpg" },
//     { src: "images-pc-carstyle/airev/pc-full-3.jpg" },
//     { src: "images-pc-carstyle/airev/pc-full-1-img-1.jpg" },
//     { src: "images-pc-carstyle/airev/pc-full-1-img-2.jpg" },
//     { src: "images-pc-carstyle/airev/pc-full-1-img-3.jpg" },
//     { src: "images-pc-carstyle/airev/pc-full-2-img-1.jpg" },
//     { src: "images-pc-carstyle/airev/pc-full-2-img-2.jpg" },
//     { src: "images-pc-carstyle/airev/pc-full-2-img-3.jpg" },
//     { src: "images-pc-carstyle/airev/pc-full-3-img-1.jpg" },
//     { src: "images-pc-carstyle/airev/pc-full-3-img-2.jpg" },
//     { src: "images-pc-carstyle/airev/pc-full-3-img-3.jpg" },
//     { src: "images-pc-carstyle/airev/img/pc-p6-img-1.jpg" },
//     { src: "images-pc-carstyle/airev/img/pc-p6-img-2.jpg" },
//     { src: "images-pc-carstyle/airev/img/pc-p6-img-3.jpg" },
//     { src: "images-pc-carstyle/airev/img/pc-p6-img-4.jpg" },
//     { src: "images-pc-carstyle/airev/img/pc-p6-img-5.jpg" },
//     { src: "images-pc-carstyle/airev/img/pc-p6-img-6.jpg" }
// ]
// for (let index = 0; index < manifest.length; index++) {
//     imgObj.unshift(manifest[index])
// }
// let queue = new createjs.LoadQueue(false);
// queue.loadManifest(imgObj);
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

        // $('.slide-bar li').eq(idx).addClass('on').siblings().removeClass('on')

        if (idx == 0) {
            $('header').removeClass('hide');
        } else {
            $('header').addClass('hide');
        }
        if (as == 9 && isF) {
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

        // if (idx == 4) {
        //     $('.tot').addClass('on')
        // } else {
        //     $('.tot').removeClass('on')
        // }

        // if (idx == 5) {
        //     $('.slideP4-1').addClass('on')
        // } else {
        //     $('.slideP4-1').removeClass('on')
        // }

        // if (idx == 6) {
        //     $('.slideP4-2').addClass('on')
        // } else {
        //     $('.slideP4-2').removeClass('on')
        // }

        // if (idx == 7) {
        //     $('.slideP4-3').addClass('on')
        // } else {
        //     $('.slideP4-3').removeClass('on')
        // }

        // if (idx == 8) {
        //     $('.slideP4-4').addClass('on')
        // } else {
        //     $('.slideP4-4').removeClass('on')
        // }
    },
});
// swiperMain.slideTo(1)



// let videoUrl;
// let swiperVideo = new Swiper('.swiperVideo', {
//     loop: true,
//     mousewheelControl: false,
//     noSwiping: true,
//     autoplay: 5000,
//     mousewheelReleaseOnEdges: true,
//     prevButton: '.button-video-prev',
//     nextButton: '.button-video-next',
//     onSlideChangeEnd: function (swiper) {
//         let idx = swiper.realIndex;
//         if (idx == 0) {
//             videoUrl = 'victoryvideo/video6.mp4';
//         }
//         if (idx == 1) {
//             videoUrl = 'victoryvideo/video1.mp4';
//         }
//         if (idx == 2) {
//             videoUrl = 'victoryvideo/video4.mp4';
//         }
//         if (idx == 3) {
//             videoUrl = 'victoryvideo/video2.mp4';
//         }
//         if (idx == 4) {
//             videoUrl = 'victoryvideo/video.mp4';
//         }
//         if (idx == 5) {
//             videoUrl = 'victoryvideo/video5.mp4';
//         }
//     }
// });

//
var vidIndex = 1;
$('.video-box .item').click(function () {
    stm_clicki('send', 'event', '五菱Air ev车型页-车型视频', '视频播放按钮-点击', '五菱Air ev');
    vidIndex = $(this).index() + 1;

    $('.slide-bar').hide();
    $('#video').attr('src', 'airevvideos/v' + vidIndex + '.mp4');
    $('.video-wrap').fadeIn();
    setTimeout(function () {
        $('#video')[0].play();
    }, 100)

})
$('.video-wrap .close').on('click', function () {
    $('.slide-bar').show();
    $('.video-wrap').fadeOut();
    $('#video')[0].pause();
    $('#video').attr('src', '');
    // $('.slideVideo').removeClass('swiper-no-swiping')
    // swiperMain.enableMousewheelControl();
})

$('.vid-next').click(function () {
    vidIndex++;
    if (vidIndex > 3) {
        vidIndex = 1
    }
    $('#video').attr('src', 'airevvideos/v' + vidIndex + '.mp4');
    setTimeout(function () {
        $('#video')[0].play();
    }, 100)
})

$('.vid-prev').click(function () {
    vidIndex--;
    if (vidIndex < 1) {
        vidIndex = 3
    }
    $('#video').attr('src', 'airevvideos/v' + vidIndex + '.mp4');
    setTimeout(function () {
        $('#video')[0].play();
    }, 100)
})
// $('.slideP4-2 .title1').click(function () {
//     $('#video').attr('src', 'airevvideos/v1.mp4');
//     $('.video-wrap').fadeIn();
//     $('#video')[0].play();
// })

var tryImgNum = 0;
var tryTimer;

// function tryChange() {
//     clearInterval(tryTimer)
//     tryTimer = setInterval(function () {
//         tryImgNum++;

//         if (tryImgNum > 3) {
//             tryImgNum = 0;
//         }
//         $('.slideTry .bom span').eq(tryImgNum).addClass('on').siblings().removeClass('on');
//         $('.slideTry .bg.bg' + (tryImgNum)).addClass('on').siblings('.bg').removeClass('on');
//     }, 3000)
// }

// tryChange()

// $('.slideTry .bom span').click(function () {
//     clearInterval(tryTimer)
//     var index = $(this).index();
//     tryImgNum = index;
//     $(this).addClass('on').siblings().removeClass('on');
//     $('.slideTry .bg.bg' + tryImgNum).addClass('on').siblings('.bg').removeClass('on');
// })

$('.btnYue').click(function () {
    $('.yuWin').fadeIn();
})
$('.yuWin .yuBox .close').click(function () {
    $('.yuWin').fadeOut();
})

$('.btnJin').click(function () {
    $('.jinWin').fadeIn();
})
$('.jinWin .jinBox .close').click(function () {
    $('.jinWin').fadeOut();
})

$('.home-arrow').on('click', function () {
    swiperMain.slideTo(1);
})

$('.top').on('click', function () {
    as = 0
    pageChangeUp(as)
    stm_clicki('send', 'event', '五菱Air ev车型页-车型页底部', 'Top按钮-点击', '五菱Air ev');
})

let swiperPic = new Swiper('.swiper-pic', {
    loop: true,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    mousewheelControl: false,
    mousewheelReleaseOnEdges: true,
    onSlideChangeEnd: function (swiper) {
        let idx = swiper.realIndex;
    }
});

var swiperImgB = new Swiper('.img-wrap-b .swiper-container', {
    loop: true,
    mousewheelControl: false,
    simulateTouch: false,
    onSlideChangeEnd: function (swiper) {
    }
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
    loop: true,
    direction: 'vertical',
    spaceBetween: 10,
    // centeredSlides: true,
    slidesPerView: 3,
    // touchRatio: 0.2,
    slideToClickedSlide: true,
    onSlideChangeEnd: function (swiper) {
        // swiperImgB.slideTo(swiper.realIndex + 2)
    }
});


$('.prev,.pic-prev').click(function () {
    galleryThumbs.slidePrev()
    swiperImgB.slidePrev()
    swiperPic.slidePrev()
})

$('.next,.pic-next').click(function () {
    galleryThumbs.slideNext()
    swiperImgB.slideNext()
    swiperPic.slideNext()
})

$('.prev').click(function () {
    stm_clicki('send', 'event', '五菱Air ev车型页-车型美图', '上箭头-点击', '五菱Air ev');
})
$('.next').click(function () {
    stm_clicki('send', 'event', '五菱Air ev车型页-车型美图', '下箭头-点击', '五菱Air ev');
})

$('.pic-prev').click(function () {
    stm_clicki('send', 'event', '五菱Air ev车型页-车型美图', '左箭头-点击', '五菱Air ev');
})
$('.pic-next').click(function () {
    stm_clicki('send', 'event', '五菱Air ev车型页-车型美图', '右箭头-点击', '五菱Air ev');
})

$('.yueSlide').click(function () {
    var t = $(this).data('t');
    $('.yuWin').show();
    stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页-' + t, '预约试驾-点击', '宏光MINI EV')
})

$('.img-wrap-s .prev').click(function () {

})

$('.img-wrap-s .next').click(function () {

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

$(".checkbox").on('click', function () {
    stm_clicki('send', 'event', '五菱Air ev车型页-留资', '隐私条款勾选-点击', '五菱Air ev');

    var that = $(this).parent();

    if (that.hasClass("active")) {
        that.removeClass("active");
        $(this).children().attr('src', 'images-pc-carstyle/dot2.png')
    } else {
        that.addClass("active");
        $(this).children().attr('src', 'images-pc-carstyle/dot3.png')
    }
});


// var ms2
$('.rule_btn').on('click', function () {
    stm_clicki('send', 'event', '五菱Air ev车型页-留资', '隐私条款-点击', '五菱Air ev');

    $('.popUp-wrap').fadeIn();

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

$('.img-wrap-b img').click(function () {
    $('.slide-bar').hide()
    // var index = $(this).data('index')
    // swiperPic.slideTo(index)
    $('.mack-pic').css('z-index', '99999999999999');
})

$('.mack-pic .close').click(function () {
    $('.slide-bar').show()
    $('.mack-pic').css('z-index', '-99999999999999');
})

$('.slide-tit').click(function () {
    var status = $(this).parent().hasClass('on')

    if (status) {
        $(this).parent().removeClass('on')
        $(this).siblings('.slide-list').hide();
        $(this).children('img').attr('src', 'images-pc-carstyle/airev/peizhi/pz_arr1.png')
    } else {
        $(this).parent().addClass('on')
        $(this).siblings('.slide-list').show();
        $(this).children('img').attr('src', 'images-pc-carstyle/airev/peizhi/pz_arr2.png')
    }

    setTimeout(function () {
        ms.refresh();
    }, 200)

})


let moreBoxNum = '';
$('.more-btn').on('click', function () {
    isAdd = false;
    $('.slide-bar li').hide();
    $('.hide-btn').show();
    $(this).parent().parent().siblings('.more-warp').addClass('on')
    let num = $(this).attr('more-num');
    moreBoxNum = num;
    // swiperMain.disableMousewheelControl();
    // let element = $('.slideP4-' + num + ' .more-warp')
    // element[0].scrollIntoView();
    if (moreBoxNum == 1) {
        stm_clicki('send', 'event', '五菱Air ev车型页-车型亮点（轻巧设计）', '点击查看详情按钮-点击', '五菱Air ev');
    }

    if (moreBoxNum == 2) {
        stm_clicki('send', 'event', '五菱Air ev车型页-车型亮点（轻盈交互）', '点击查看详情按钮-点击', '五菱Air ev');
    }

    if (moreBoxNum == 3) {
        stm_clicki('send', 'event', '五菱Air ev车型页-车型亮点（轻享动力）', '点击查看详情按钮-点击', '五菱Air ev');
    }

    if (moreBoxNum == 4) {
        stm_clicki('send', 'event', '五菱Air ev车型页-车型亮点（轻松护航）', '点击查看详情按钮-点击', '五菱Air ev');
    }

    if (num == 4) {
        $('.hide-btn').addClass('left')
    }

})
$('.hide-btn').on('click', function () {
    isAdd = true;
    $('.slide-bar li').show();
    $('.hide-btn').hide()
    $('.slideP4-' + moreBoxNum).find('.slideP4-more').show()
    if (moreBoxNum == 1) {
        stm_clicki('send', 'event', '五菱Air ev车型页-车型亮点（轻巧设计）', '返回按钮-点击', '五菱Air ev');
    }

    if (moreBoxNum == 2) {
        stm_clicki('send', 'event', '五菱Air ev车型页-车型亮点（轻盈交互）', '返回按钮-点击', '五菱Air ev');
    }

    if (moreBoxNum == 3) {
        stm_clicki('send', 'event', '五菱Air ev车型页-车型亮点（轻享动力）', '返回按钮-点击', '五菱Air ev');
    }

    if (moreBoxNum == 4) {
        stm_clicki('send', 'event', '五菱Air ev车型页-车型亮点（轻松护航）', '返回按钮-点击', '五菱Air ev');
    }
    moreBoxNum = '';
    $('.more-warp').scrollTop(0).removeClass('on')
    // swiperMain.enableMousewheelControl();
    $('.hide-btn').removeClass('left')
})

swiperMain.disableMousewheelControl();

function color(color) {
    for (var i = 1; i < 12; i++) {
        $('.dot' + i).attr('src', 'images-pc-carstyle/airev/' + color + '-nav-' + i + '-off.png')
        $('.img' + i).attr('src', 'images-pc-carstyle/airev/' + color + '-nav-' + i + '-on.png')
    }
}

var as = 0;
var isWheel = true;
var isAdd = true;
var dal;

function pageChangeUp(as) {
    if (as == 0) {
        color('blue')
        swiperMain.slideTo(0)
        $('.tot').hide().css('z-index', '9')
        $('.slideP4-1').hide().css('z-index', '9')
        $('.slideP4-2').hide().css('z-index', '9')
        $('.slideP4-3').hide().css('z-index', '9')
        $('.slideP4-4').hide().css('z-index', '9')
    }
    // if (as == 1) {
    //     swiperMain.slideTo(1)
    //     $('.tot').hide().css('z-index', '9')
    //     $('.slideP4-1').hide().css('z-index', '9')
    //     $('.slideP4-2').hide().css('z-index', '9')
    //     $('.slideP4-3').hide().css('z-index', '9')
    //     $('.slideP4-4').hide().css('z-index', '9')
    // }
    if (as == 1) {
        swiperMain.slideTo(1)
        $('.tot').hide().css('z-index', '9')
        $('.slideP4-1').hide().css('z-index', '9')
        $('.slideP4-2').hide().css('z-index', '9')
        $('.slideP4-3').hide().css('z-index', '9')
        $('.slideP4-4').hide().css('z-index', '9')
    }
    if (as == 2) {
        color('blue')
        swiperMain.slideTo(2)
        $('.tot').hide()
        $('.slideP4-1').hide().css('z-index', '9')
        $('.slideP4-2').hide().css('z-index', '9')
        $('.slideP4-3').hide().css('z-index', '9')
        $('.slideP4-4').hide().css('z-index', '9')
    }

    if (as == 3) {
        color('white')
        $('.tot').fadeIn(1000).css('z-index', '10')
        $('.slideP4-1').css('z-index', '9')
        $('.slideP4-2').css('z-index', '9')
        $('.slideP4-3').css('z-index', '9')
        $('.slideP4-4').css('z-index', '9')

        setTimeout(function () {
            $('.slideP4-1').hide()
            $('.slideP4-2').hide()
            $('.slideP4-3').hide()
            $('.slideP4-4').hide()
        }, 1000)

    }

    if (as == 4) {
        color('white')
        $('.slideP4-1').fadeIn(1000).css('z-index', '10')
        $('.tot').css('z-index', '9')
        $('.slideP4-2').css('z-index', '9')
        $('.slideP4-3').css('z-index', '9')
        $('.slideP4-4').css('z-index', '9')
        setTimeout(function () {
            $('.tot').hide()
            $('.slideP4-2').hide()
            $('.slideP4-3').hide()
            $('.slideP4-4').hide()
        }, 1000)
    }

    if (as == 5) {
        color('white')
        $('.slideP4-2').fadeIn(1000).css('z-index', '10')
        $('.tot').css('z-index', '9')
        $('.slideP4-1').css('z-index', '9')
        $('.slideP4-3').css('z-index', '9')
        $('.slideP4-4').css('z-index', '9')
        setTimeout(function () {
            $('.tot').hide()
            $('.slideP4-1').hide()
            $('.slideP4-3').hide()
            $('.slideP4-4').hide()
        }, 1000)
    }

    if (as == 6) {
        color('white')
        $('.slideP4-3').fadeIn(1000).css('z-index', '10')
        $('.tot').css('z-index', '9')
        $('.slideP4-1').css('z-index', '9')
        $('.slideP4-2').css('z-index', '9')
        $('.slideP4-4').css('z-index', '9')
        setTimeout(function () {
            $('.tot').hide()
            $('.slideP4-1').hide()
            $('.slideP4-2').hide()
            $('.slideP4-4').hide()
        }, 1000)
    }

    if (as == 7) {
        color('white')
        $('.slideP4-4').fadeIn(1000).css('z-index', '10')
        $('.tot').css('z-index', '9')
        $('.slideP4-1').css('z-index', '9')
        $('.slideP4-2').css('z-index', '9')
        $('.slideP4-3').css('z-index', '9')
        setTimeout(function () {
            $('.tot').hide()
            $('.slideP4-1').hide()
            $('.slideP4-2').hide()
            $('.slideP4-3').hide()
        }, 1000)
    }

    if (as == 8) {
        color('blue')
        swiperMain.slideTo(3)
        $('.tot').hide().css('z-index', '9')
        $('.slideP4-1').hide().css('z-index', '9')
        $('.slideP4-2').hide().css('z-index', '9')
        $('.slideP4-3').hide().css('z-index', '9')
        $('.slideP4-4').hide().css('z-index', '9')
    }

    if (as == 9) {
        color('blue')
        swiperMain.slideTo(4)
        $('.tot').hide().css('z-index', '9')
        $('.slideP4-1').hide().css('z-index', '9')
        $('.slideP4-2').hide().css('z-index', '9')
        $('.slideP4-3').hide().css('z-index', '9')
        $('.slideP4-4').hide().css('z-index', '9')
    }

    $('.slide-bar li').eq(as).addClass('on').siblings().removeClass('on')
}

var scrollFunc = function (e) {
    if (isAdd) {
        if (isWheel) {
            isWheel = false;
            e = e || window.event;
            if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
                if (e.wheelDelta > 0) { //当滑轮向上滚动时  
                    //事件
                    console.log('向上')
                    as--;
                    if (as < 0) {
                        as = 0
                    }
                    console.log(as)

                }
                if (e.wheelDelta < 0) { //当滑轮向下滚动时  
                    console.log('向下')
                    as++;
                    if (as > 9) {
                        as = 9
                    }
                    console.log(as)

                }
            } else if (e.detail) {  //Firefox滑轮事件  
                if (e.detail > 0) { //当滑轮向上滚动时  
                    //事件 
                    console.log('向上')
                    as++;
                    if (as > 9) {
                        as = 9
                    }
                    console.log(as)

                }
                if (e.detail < 0) { //当滑轮向下滚动时  
                    //事件  
                    console.log('向下')
                    as--;
                    if (as < 0) {
                        as = 0
                    }
                    console.log(as)
                }
            }

            pageChangeUp(as)

            setTimeout(function () {
                isWheel = true
            }, 1000)
        }
    }
}

//给页面绑定滑轮滚动事件  
if (document.addEventListener) {//firefox  
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法  //ie 谷歌  
window.onmousewheel = document.onmousewheel = scrollFunc;

$('.slide-bar li').on('click', function () {
    // alert(1)
    if (isWheel) {
        isWheel = false;
        var idx = $(this).index();
        // console.log(idx)
        as = idx;
        pageChangeUp(idx)
        setTimeout(function () {
            isWheel = true
        }, 1000)
    }
})