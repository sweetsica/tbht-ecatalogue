$(function(){
    var tem = '<a href="https://miaozhen.com/cn/privacy" target="_blank" style="width:30%;height:27px; display:block;margin-left:48%;margin-top:-9%;position: relative;z-index:2"></a>'
    $('.tkBox .tk .imgtk').after(tem)
})
var lowresImages = $("img");
var imgObj = [];
lowresImages.each(function (i) {
    var lowres = $(this).attr("src");
    var data = { src: lowres };
    imgObj.push(data);
});

var manifest = [
    { src: "images-pc-carstyle/asta/pc-1.jpg" },
    { src: "images-pc-carstyle/asta/pc-3.jpg" },
    { src: "images-pc-carstyle/asta/pc-5.jpg" },
    { src: "images-pc-carstyle/asta/pc-5-car1.jpg" },
    { src: "images-pc-carstyle/asta/pc-5-car2.jpg" },
    { src: "images-pc-carstyle/asta/pc-5-car3.jpg" },
    { src: "images-pc-carstyle/asta/pc-5-car4.jpg" },
    { src: "images-pc-carstyle/asta/pc-5-car5.jpg" },
    { src: "images-pc-carstyle/asta/gallery/1.jpg" },
    { src: "images-pc-carstyle/asta/gallery/2.jpg" },
    { src: "images-pc-carstyle/asta/gallery/3.jpg" },
    { src: "images-pc-carstyle/asta/gallery/4.jpg" },
    { src: "images-pc-carstyle/asta/gallery/5.jpg" },
    { src: "images-pc-carstyle/asta/gallery/6.jpg" },
];
for (let index = 0; index < manifest.length; index++) {
    imgObj.unshift(manifest[index]);
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
    $(".loading").fadeOut();
}, 2000);
sensors_view("browse_XC_home_page", "浏览五菱星辰车型页-首页", "五菱星辰车型页");
var ms,
    isF = true;
var jcqPvName = ["车型首页划动", "预约试驾划动", "车型颜色划动", "车型美图划动"];
var initialSlide = window.common.getQuery("MediaID") == 1302 || window.common.getQuery("MediaID") == 1301 ? 3 : 0;
let swiperMain = new Swiper(".pc-swiper-mainBody", {
    initialSlide: initialSlide,
    loop: false,
    direction: "vertical",
    mousewheelControl: true,
    noSwiping: true,
    mousewheelReleaseOnEdges: true,
    onSlideChangeEnd: function (swiper) {
        let idx = swiper.activeIndex;
        console.log(idx);
        $(".nav li").eq(idx).addClass("active").siblings().removeClass("active");

        if (idx == 0) {
            $("header").removeClass("hide");
        } else {
            $("header").addClass("hide");
        }
        if ((idx == 5 || idx == 6) && isF) {
            isF = false;
            ms = new IScroll("#scroll1", {
                scrollbars: true,
                interactiveScrollbars: true,
                // scrollbars: 'custom',
                bounce: false,
                mouseWheel: true,
                preventDefault: false,
            });
        }

        if (swiper.activeIndex == 0) {
            sensors_view("browse_XC_home_page", "浏览五菱星辰车型页-首页", "五菱星辰车型页");
        }
        if (swiper.activeIndex == 1) {
            sensors_view("browse_XC_video_page", "浏览五菱星辰车型页-视频", "五菱星辰车型页");
        }
        if (swiper.activeIndex == 2) {
            sensors_view("browse_XC_rights_page", "浏览五菱星辰车型页-购车权益", "五菱星辰车型页");
        }
        if (swiper.activeIndex == 3) {
            sensors_view("browse_XC_material_page", "浏览五菱星辰车型页-留资", "五菱星辰车型页");
        }
        if (swiper.activeIndex == 4) {
            sensors_view("browse_XC_highlights_page", "浏览五菱星辰车型页-亮点", "五菱星辰车型页");
        }
        if (swiper.activeIndex == 5) {
            sensors_view("browse_XC_colour_page", "浏览五菱星辰车型页-车颜色", "五菱星辰车型页");
        }
        if (swiper.activeIndex == 6) {
            sensors_view("browse_XC_parameter_page", "浏览五菱星辰车型页-车型配置", "五菱星辰车型页");
        }
        if (swiper.activeIndex == 7) {
            sensors_view("browse_XC_car_page", "浏览五菱星辰车型页-车型美图", "五菱星辰车型页");
        }
        if (swiper.activeIndex == 8) {
            sensors_view("browse_XC_more_page", "浏览五菱星辰车型页-了解更多", "五菱星辰车型页");
        }
    },
    onSlidePrevEnd: function (swiper) {
        var idx = swiper.activeIndex;
        // console.log(jcqPvName[idx + 1]);
    },
    onSlideNextEnd: function (swiper) {
        var idx = swiper.activeIndex;
        // console.log(jcqPvName[idx - 1]);
    },
});
// swiperMain.slideTo(5)

let videoUrl;
let swiperVideo = new Swiper(".swiperVideo", {
    loop: true,
    mousewheelControl: false,
    noSwiping: true,
    // autoplay: 5000,
    mousewheelReleaseOnEdges: true,
    prevButton: ".button-video-prev",
    nextButton: ".button-video-next",
    onSlideChangeEnd: function (swiper) {
        let idx = swiper.realIndex;
        if (idx == 0) {
            videoUrl = "asta/video/video1.mp4";
        }
    },
});

$(".video-txt").on("click", function () {
    $(".video-wrap").fadeIn();
    $("#video").attr("src", videoUrl);
    $("#video")[0].play();
    $(".slideVideo").addClass("swiper-no-swiping");
    swiperMain.disableMousewheelControl();

    stm_clicki("send", "event", "五菱星辰车型页-车型视频", "视频播放-点击", "五菱星辰");
    sensors_track("click_wuling_XC_car_page_but_video", "五菱星辰车型页-视频播放按钮点击", "五菱星辰车型页-车型视频", "视频播放按钮点击");
    _jcq.push(["_track", "XingChen_video", { content: "五菱星辰车型页-视频播放按钮点击" }]);
});

$(".video-wrap .close").on("click", function () {
    $(".video-wrap").fadeOut();
    $("#video")[0].pause();
    $(".slideVideo").removeClass("swiper-no-swiping");
    swiperMain.enableMousewheelControl();
});

$(".home-arrow").on("click", function () {
    swiperMain.slideTo(1);
});

$(".btn-booking").on("click", function () {
    swiperMain.slideTo(3, 0);
    sensors_track("click_wuling_XC_home_page_but_appointment", "五菱星辰车型页-预约试驾按钮点击", "五菱星辰车型页-首页", "预约试驾按钮点击");
    stm_clicki("send", "event", "五菱星辰车型页", "预约试驾按钮-点击", "五菱星辰");
    _jcq.push(["_track", "XingChen_reserve", { content: "五菱星辰车型页-预约试驾按钮点击" }]);
});

$(".colorBtns .cb").hover(function () {
    var index = $(this).index() + 1;
});

var ccIndex;
var ifClisk = true;
$(".color-btns .cb").click(function () {
    if (ifClisk) {
        ifClisk = false;
        var ccIndex = $(this).index() + 1;
        $(this).addClass("act").siblings().removeClass("act");

        carChange(ccIndex);
        setTimeout(function () {
            ifClisk = true;
        }, 500);
    }
});

function carChange(ccIndex) {
    load360(ccIndex);
    // $(".colors .car").css("background-image", "url(images-pc-carstyle/asta/pc-5-car" + ccIndex + ".jpg)");
    $(".colors .name").attr("src", "images-pc-carstyle/asta/pc-5-c" + ccIndex + "-name.png");

    if (ccIndex == 1) {
        sensors_track("click_wuling_XC_colour_page_white", "五菱星辰车型页-皓月霜白颜色点击", "五菱星辰车型页-车颜色", "颜色按钮点击");
        stm_clicki("send", "event", "五菱星辰车型页-车颜色", "皓月霜白-点击", "五菱星辰");

        _jcq.push(["_track", "XingChen_colour", { content: "五菱星辰车型页-皓月霜白颜色点击" }]);
    }

    if (ccIndex == 2) {
        sensors_track("click_wuling_XC_colour_page_green", "五菱星辰车型页-雨过天青颜色点击", "五菱星辰车型页-车颜色", "颜色按钮点击");
        stm_clicki("send", "event", "五菱星辰车型页-车颜色", "雨过天青-点击", "五菱星辰");

        _jcq.push(["_track", "XingChen_colour", { content: "五菱星辰车型页-雨过天青颜色点击" }]);
    }

    if (ccIndex == 3) {
        sensors_track("click_wuling_XC_colour_page_violet", "五菱星辰车型页-寒山暮紫颜色点击", "五菱星辰车型页-车颜色", "颜色按钮点击");
        stm_clicki("send", "event", "五菱星辰车型页-车颜色", "寒山暮紫-点击", "五菱星辰");

        _jcq.push(["_track", "XingChen_colour", { content: "五菱星辰车型页-寒山暮紫颜色点击" }]);
    }

    if (ccIndex == 4) {
        sensors_track("click_wuling_XC_colour_page_blue", "五菱星辰车型页-云海苍蓝颜色点击", "五菱星辰车型页-车颜色", "颜色按钮点击");
        stm_clicki("send", "event", "五菱星辰车型页-车颜色", "云海苍蓝-点击", "五菱星辰");

        _jcq.push(["_track", "XingChen_colour", { content: "五菱星辰车型页-云海苍蓝颜色点击" }]);
    }

    if (ccIndex == 5) {
        sensors_track("click_wuling_XC_colour_page_tea", "五菱星辰车型页-薄雾暖茶颜色点击", "五菱星辰车型页-车颜色", "颜色按钮点击");
        stm_clicki("send", "event", "五菱星辰车型页-车颜色", "薄雾暖茶-点击", "五菱星辰");

        _jcq.push(["_track", "XingChen_colour", { content: "五菱星辰车型页-薄雾暖茶颜色点击" }]);
    }
}

$(".top").on("click", function () {
    swiperMain.slideTo(0, 0);
    sensors_track("click_wuling_XC_home_page_but_top", "五菱星辰车型页-Top按钮点击", "五菱星辰车型页", "Top按钮点击");
    stm_clicki("send", "event", "五菱星辰车型页-底部", "Top-点击", "五菱星辰");
    _jcq.push(["_track", "XingChen_back", { content: "五菱星辰车型页-返回第一屏" }]);
});

$(".nav li").on("click", function () {
    let idx = $(this).index();
    if (idx == 0) {
        stm_clicki("send", "event", "五菱星辰车型页-右侧导航栏", "车型首页-点击", "五菱星辰");
        _jcq.push(["_track", "XingChen_navigation", { content: "五菱星辰车型页-车型首页导航栏点击" }]);
        sensors_track("click_wuling_XC_home_page_home", "五菱星辰车型页-车型首页导航栏点击", "五菱星辰车型页", "车型首页导航栏点击");
        console.log("车型首页导航栏点击");
    }
    if (idx == 1) {
        stm_clicki("send", "event", "五菱星辰车型页-右侧导航栏", "车型视频-点击", "五菱星辰");
        _jcq.push(["_track", "XingChen_navigation", { content: "五菱星辰车型页-车型视频导航栏点击" }]);
        sensors_track("click_wuling_XC_home_page_video", "五菱星辰车型页-车型视频导航栏点击", "五菱星辰车型页", "车型视频导航栏点击");
        console.log("车型视频导航栏点击");
    }
    if (idx == 2) {
        stm_clicki("send", "event", "五菱星辰车型页-右侧导航栏", "购车权益-点击", "五菱星辰");
        _jcq.push(["_track", "XingChen_navigation", { content: "五菱星辰车型页-购车权益导航栏点击" }]);
        sensors_track("click_wuling_XC_home_page_buy", "五菱星辰车型页-购车权益导航栏点击", "五菱星辰车型页", "购车权益导航栏点击");
        console.log("购车权益导航栏点击");
    }
    if (idx == 3) {
        stm_clicki("send", "event", "五菱星辰车型页-右侧导航栏", "预约试驾-点击", "五菱星辰");
        _jcq.push(["_track", "XingChen_navigation", { content: "五菱星辰车型页-预约试驾导航栏点击" }]);
        sensors_track("click_wuling_XC_home_page_appointment", "五菱星辰车型页-预约试驾导航栏点击", "五菱星辰车型页", "预约试驾导航栏点击");
        console.log("预约试驾导航栏点击");
    }
    if (idx == 4) {
        stm_clicki("send", "event", "五菱星辰车型页-右侧导航栏", "车型亮点-点击", "五菱星辰");
        _jcq.push(["_track", "XingChen_navigation", { content: "五菱星辰车型页-车型亮点导航栏点击" }]);
        sensors_track("click_wuling_XC_home_page_Highlights", "五菱星辰车型页-车型亮点导航栏点击", "五菱星辰车型页", "车型亮点导航栏点击");
        console.log("车型亮点导航栏点击");
    }
    if (idx == 5) {
        stm_clicki("send", "event", "五菱星辰车型页-右侧导航栏", "车型颜色-点击", "五菱星辰");
        _jcq.push(["_track", "XingChen_navigation", { content: "五菱星辰车型页-车型颜色导航栏点击" }]);
        sensors_track("click_wuling_XC_home_page_colour", "五菱星辰车型页-车型颜色导航栏点击", "五菱星辰车型页", "车型颜色导航栏点击");
        console.log("车型颜色导航栏点击");
    }
    if (idx == 6) {
        stm_clicki("send", "event", "五菱星辰车型页-右侧导航栏", "车型配置-点击", "五菱星辰");
        _jcq.push(["_track", "XingChen_navigation", { content: "五菱星辰车型页-车型配置导航栏点击" }]);
        sensors_track("click_wuling_XC_home_page_Model", "五菱星辰车型页-车型配置导航栏点击", "五菱星辰车型页", "车型配置导航栏点击");
        console.log("车型配置导航栏点击");
    }
    if (idx == 7) {
        stm_clicki("send", "event", "五菱星辰车型页-右侧导航栏", "车型美图-点击", "五菱星辰");
        _jcq.push(["_track", "XingChen_navigation", { content: "五菱星辰车型页-车型美图导航栏点击" }]);
        sensors_track("click_wuling_XC_home_page_pic", "五菱星辰车型页-车型美图导航栏点击", "五菱星辰车型页", "车型美图导航栏点击");
        console.log("车型美图导航栏点击");
    }
    if (idx == 8) {
        stm_clicki("send", "event", "五菱星辰车型页-右侧导航栏", "了解更多-点击", "五菱星辰");
        _jcq.push(["_track", "XingChen_navigation", { content: "五菱星辰车型页-了解更多导航栏点击" }]);
        sensors_track("click_wuling_XC_home_page_understand", "五菱星辰车型页-了解更多导航栏点击", "五菱星辰车型页", "了解更多导航栏点击");
        console.log("了解更多导航栏点击");
    }

    swiperMain.slideTo(idx, 0);
    if (moreBoxSlide != "" && moreBoxNum != "") {
        $(".slideP4-" + moreBoxSlide).removeClass("more-1 more-2 swiper-no-swiping");
        $(".slideP4-" + moreBoxSlide)
            .find(".slideP4-more")
            .show();
        $(".slideP4-" + moreBoxNum)
            .find("on")
            .removeClass("on");
        $(".slideTestDrive").removeClass("more-1 more-2 swiper-no-swiping");
        $(".slideTestDrive").find(".finance-more").show();
        $(".loan_step1_form").hide();
        swiperMain.enableMousewheelControl();
    }
});

let imgNum = 6;
for (let index = 1; index <= imgNum; index++) {
    let imgCont = '<div class="swiper-slide"><img src="images-pc-carstyle/asta/gallery/' + index + '.jpg"></div>';

    $(".img-wrap-b .swiper-wrapper").append(imgCont);
}
var swiperImgB = new Swiper(".img-wrap-b .swiper-container", {
    loop: false,
    mousewheelControl: false,
    simulateTouch: false,
    onSlideChangeEnd: function (swiper) {},
});

let _num = 0,
    _count = imgNum - 1;
$(".img-wrap-s ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    _num = $(this).index();
    if (_num <= _count - 2) {
        let imgHeight = -$(".img-wrap-s ul li").outerHeight(true);
        $(".img-wrap-s ul").css("transform", "translateY(" + imgHeight * _num + "px)");
    }
    swiperImgB.slideTo(_num);
    _num = _num % 6;
    sensors_track("click_wuling_XC_car_page_pic_" + (_num + 1), "五菱星辰车型页-车型美图-小图" + (_num + 1) + "点击", "五菱星辰车型页-车型美图", "车型美图-小图点击");
    stm_clicki("send", "event", "五菱星辰车型页-车型美图", "车图-互动", "五菱星辰");
    _jcq.push(["_track", "XingChen_car", { content: "五菱星辰车型页-车型美图-小图" + (_num + 1) + "点击" }]);
});
$(".prev, .next").on("click", function () {
    if ($(this).hasClass("prev")) {
        if (_num != 0) {
            _num = _num - 1;
        }
        sensors_track("click_wuling_XC_car_page_but_left", "点击五菱星辰车型页-车型美图-左箭头", "五菱星辰车型页-车型美图", "车型美图-左箭头点击");
    } else {
        if (_num < _count) {
            _num = _num + 1;
        }
        sensors_track("click_wuling_XC_car_page_but_right", "点击五菱星辰车型页-车型美图-右箭头", "五菱星辰车型页-车型美图", "车型美图-左箭头点击");
    }
    $(".img-wrap-s ul li").eq(_num).addClass("active").siblings().removeClass("active");
    if (_num <= _count - 2) {
        let imgHeight = -$(".img-wrap-s ul li").outerHeight(true);
        $(".img-wrap-s ul").css("transform", "translateY(" + imgHeight * _num + "px)");
    }
    swiperImgB.slideTo(_num);
    stm_clicki("send", "event", "五菱星辰车型页-车型美图", "车图-互动", "五菱星辰");
});

$(".img-wrap-s .prev").click(function () {
    _jcq.push(["_track", "XingChen_picture", { content: "五菱星辰车型页-车型美图-左箭头" }]);
});

$(".img-wrap-s .next").click(function () {
    _jcq.push(["_track", "XingChen_picture", { content: "五菱星辰车型页-车型美图-右箭头" }]);
});

$(".slideP4 .btn-wrap .btn").on("mouseover", function () {
    let idx = $(this).index();
    $(".slideP4 .bg-wrap .bg").eq(idx).addClass("hover").siblings().removeClass("hover");
});
$(".slideP4 .btn-wrap .btn").on("mouseout", function () {
    $(".slideP4 .bg-wrap .bg").removeClass("hover");
});
$(".slideP4 .btn-wrap .btn").on("click", function () {
    let idx = $(this).index() + 3;
    swiperMain.slideTo(idx);
});

let moreBoxNum = "",
    moreBoxSlide = "";
$(".slideP4-more").on("click", function () {
    let slide = $(this).attr("more-slide");
    let num = $(this).attr("more-num");
    let title = $(this).data("title");
    $(".slideP4-" + slide)
        .find(".slideP4-more")
        .show();
    $(this).hide();
    moreBoxSlide = slide;
    moreBoxNum = num;
    $(".slideP4-" + slide)
        .removeClass("more-1 more-2")
        .addClass("more-" + num + " swiper-no-swiping");
    swiperMain.disableMousewheelControl();
    let element = $(".slideP4-" + slide + " .more-warp-" + num);
    element[0].scrollIntoView();

    if (num == 1) {
        stm_clicki("send", "event", "五菱星辰车型页-车型亮点", "灵犀系统-点击", "五菱星辰");
        sensors_track("click_wuling_XC_car_page_but_Ling", "五菱星辰车型页-灵犀系统按钮点击", "五菱星辰车型页-车型亮点", "灵犀系统按钮点击");
        _jcq.push(["_track", "XingChen_LX_system", { content: "五菱星辰车型页-灵犀系统按钮点击" }]);
    }

    if (num == 2) {
        stm_clicki("send", "event", "五菱星辰车型页-车型亮点", "焕新城市感官之旅-点击", "五菱星辰");
        sensors_track("click_wuling_XC_car_page_but_organ", "五菱星辰车型页-焕新城市感官之旅按钮点击", "五菱星辰车型页-车型亮点", "焕新城市感官之旅按钮点击");
        _jcq.push(["_track", "XingChen_HX_feeling", { content: "五菱星辰车型页-焕新城市感官之旅按钮点击" }]);
    }
});
$(".slideP4-hide").on("click", function () {
    let slide = $(this).attr("more-slide");
    let num = $(this).attr("more-num");
    $(".slideP4-" + slide).removeClass("more-1 more-2 swiper-no-swiping");
    $(".slideP4-" + slide)
        .find(".slideP4-more")
        .show();
    // $('.slideP4-' + num).find('on').removeClass('on')
    $(".slideP4-" + slide + " .more-warp-" + num)
        .children()
        .removeClass("on");
    moreBoxSlide = "";
    moreBoxNum = "";
    swiperMain.enableMousewheelControl();
});

// var carType = 0;
// $(".colors ul li").on("click", function () {
//     ccIndex = 1;
//     carType = $(this).index();
//     $(".colors ul li").eq(carType).addClass("active").siblings().removeClass("active");
//     $(".colorBtns .cb")
//         .eq(ccIndex - 1)
//         .addClass("act")
//         .siblings()
//         .removeClass("act");
//     carChange(ccIndex);
// });

$(".colors .interior").on("click", function () {
    $(".interiorBox").fadeIn();
    $(".tabRotateBox iframe").attr("src", "asta/car720/index.html?v=4" + "&isPc=true&ve=1");
    stm_clicki("send", "event", "五菱星辰车型页-车颜色", "内饰-点击", "五菱星辰");
    sensors_track("click_wuling_XC_car_page_but_Interior", "五菱星辰车型页-内饰按钮点击", "五菱星辰车型页-车颜色", "内饰按钮点击");
    _jcq.push(["_track", "XingChen_interior", { content: "五菱星辰车型页-内饰按钮点击" }]);
});

$(".colors .interiorBox .btnClose").on("click", function () {
    $(".interiorBox").fadeOut();
});

$(".slidePeizhi-wrap").on("click", ".img-wrap img", function () {
    if ($(this).hasClass("on")) {
        $(this).removeClass("on").attr("src", $(this).attr("off-src"));
        setTimeout(function () {
            ms.refresh();
        }, 200);
    } else {
        $(this).addClass("on").attr("src", $(this).attr("on-src"));
        setTimeout(function () {
            ms.refresh();
        }, 200);
    }
    ms.refresh();
});


$(".checkbox").on("click", function () {
    var that = $(this).parent();
    if (that.hasClass("active")) {
        that.removeClass("active");
    } else {
        that.addClass("active");
        _jcq.push(["_track", "XingChen_agree"]);
    }
    sensors_track("click_wuling_XC_material_page_secret_tick", "五菱星辰车型页-隐私条款勾选", "五菱星辰车型页-留资", "隐私条款勾选点击");
    _jcq.push(["_track", "XingChen_privacyagree", { content: "五菱星辰车型页-隐私条款勾选" }]);
});

var winHeight = $(window).height();
var winWidth = $(window).width();

$(".slideP4-1").scroll(function () {
    var a = $(".slideP4-1").scrollTop();
    console.log(a);
    if (moreBoxNum == 1) {
        if (a > (1380 / 1920) * winWidth) {
            $(".slideP4-1 .more-warp-1 .item4").addClass("on");
            console.log("item4");
        }
        if (a > (1695 / 1920) * winWidth) {
            $(".slideP4-1 .more-warp-1 .item5").addClass("on");
            console.log("item5");
        }
        if (a > (2120 / 1920) * winWidth) {
            $(".slideP4-1 .more-warp-1 .item7").addClass("on");
            console.log("item7");
        }
        if (a > (2456 / 1920) * winWidth) {
            $(".slideP4-1 .more-warp-1 .item8").addClass("on");
            console.log("item8");
        }
    } else if (moreBoxNum == 2) {
        if (a > (2150 / 1920) * winWidth) {
            $(".slideP4-1 .more-warp-2 .item5").addClass("on");
            console.log("item5");
        }
        if (a > (2970 / 1920) * winWidth) {
            $(".slideP4-1 .more-warp-2 .item7").addClass("on");
            console.log("item7");
        }
        if (a > (3460 / 1920) * winWidth) {
            $(".slideP4-1 .more-warp-2 .item9").addClass("on");
            console.log("item9");
        }
        if (a > (4670 / 1920) * winWidth) {
            $(".slideP4-1 .more-warp-2 .item12").addClass("on");
            console.log("item12");
        }
    }

    if (a > $(".slideP4-1 .more-warp .box .fullSubImg1").height() + $(".slideP4-1 .more-warp .box .fullSubImg2").height() + $(".slideP4-1 .more-warp .box .fullSubImg3").height() + winHeight - 200) {
        $(".slideP4-1 .more-warp .box .item7, .slideP4-1 .more-warp .box .item8").addClass("on");
    }
});

$(".slideP4-2").scroll(function () {
    var a = $(".slideP4-2").scrollTop();
    if (a > winHeight - 10) {
        $(".slideP4-2 .more-warp .box .title1").addClass("on");
    }

    if (a > $(".slideP4-2 .more-warp .box .fullSubImg1").height() + winHeight - 300) {
        $(".slideP4-2 .more-warp .box .title2").addClass("on");
    }

    if (a > $(".slideP4-2 .more-warp .box .fullSubImg1").height() + $(".slideP4-2 .more-warp .box .fullSubImg2").height() + winHeight - 300) {
        $(".slideP4-2 .more-warp .box .title3").addClass("on");
    }

    if (a > $(".slideP4-2 .more-warp .box .fullSubImg1").height() + $(".slideP4-2 .more-warp .box .fullSubImg2").height() + $(".slideP4-2 .more-warp .box .fullSubImg3").height() + winHeight - 300) {
        $(".slideP4-2 .more-warp .box .title4").addClass("on");
    }
});

// var ms2
$(".rule_btn").on("click", function () {
    $(".popUp-wrap").fadeIn();
    sensors_track("click_wuling_XC_material_page_secret", "五菱星辰车型页-隐私条款点击", "五菱星辰车型页-留资", "隐私条款点击");
    _jcq.push(["_track", "XingChen_privacy", { content: "五菱星辰车型页-隐私条款点击" }]);
});
$(".popUp-wrap .close").on("click", function () {
    $(".popUp-wrap").fadeOut();
});

// ------------------
$("header .logo").click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick("autoTrack", {
        class_code: "web_pc_page_browse",
        class_name: "Web 页面浏览",
        event_code: "click_home_page_wuling_logo",
        event_name: "五菱logo点击",
        event_page: "五菱官网" + pageTitle,
        event_position: "五菱logo",
        event_type: "",
        event_link_url: window.location.href.split("?")[0],
        sub_module: "wuling_new_pc",
    });
    stm_clicki("send", "event", pageTitle + "-顶部导航栏", "五菱logo-点击");
    _jcq.push(["_track", "Xingchen_top_banner", { content: "五菱logo" }]);
});

$("header .link.link1").click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick("autoTrack", {
        class_code: "web_pc_page_browse",
        class_name: "Web 页面浏览",
        event_code: "click_home_page_menu_vsn",
        event_name: "菜单栏-车型点击",
        event_page: "五菱官网" + pageTitle,
        event_position: "菜单栏-车型点击",
        event_type: "",
        event_link_url: window.location.href.split("?")[0],
        sub_module: "wuling_new_pc",
    });
    stm_clicki("send", "event", pageTitle + "-顶部导航栏", "车型-点击");
    _jcq.push(["_track", "Xingchen_top_banner", { content: "车型" }]);
});

$("header .link.link2").click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick("autoTrack", {
        class_code: "web_pc_page_browse",
        class_name: "Web 页面浏览",
        event_code: "click_home_page_menu_guide",
        event_name: "菜单栏-购车指南点击",
        event_page: "五菱官网" + pageTitle,
        event_position: "菜单栏-购车指南点击",
        event_type: "",
        event_link_url: window.location.href.split("?")[0],
        sub_module: "wuling_new_pc",
    });
    stm_clicki("send", "event", pageTitle + "-顶部导航栏", "购车指南-点击");
    _jcq.push(["_track", "Xingchen_top_banner", { content: "购车指南" }]);
});

$("header .link.link3").click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick("autoTrack", {
        class_code: "web_pc_page_browse",
        class_name: "Web 页面浏览",
        event_code: "click_home_page_menu_story",
        event_name: "菜单栏-品牌故事点击",
        event_page: "五菱官网" + pageTitle,
        event_position: "菜单栏-品牌故事点击",
        event_type: "",
        event_link_url: window.location.href.split("?")[0],
        sub_module: "wuling_new_pc",
    });
    stm_clicki("send", "event", pageTitle + "-顶部导航栏", "品牌故事-点击");
    _jcq.push(["_track", "Xingchen_top_banner", { content: "品牌故事" }]);
});

$(".btnK").click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick("autoTrack", {
        class_code: "web_pc_page_browse",
        class_name: "Web 页面浏览",
        event_code: "click_home_page_server_online",
        event_name: "菜单栏-在线客服点击",
        event_page: "五菱官网" + pageTitle,
        event_position: "菜单栏-在线客服点击",
        event_type: "",
        event_link_url: window.location.href.split("?")[0],
        sub_module: "wuling_new_pc",
    });
    stm_clicki("send", "event", pageTitle + "-顶部导航栏", "在线客服-点击");
    _jcq.push(["_track", "Xingchen_top_banner", { content: "在线客服" }]);
});

$(".btnY").click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick("autoTrack", {
        class_code: "web_pc_page_browse",
        class_name: "Web 页面浏览",
        event_code: "click_home_page_reserve",
        event_name: "菜单栏-预约试驾点击",
        event_page: "五菱官网" + pageTitle,
        event_position: "菜单栏-预约试驾点击",
        event_type: "",
        event_link_url: window.location.href.split("?")[0],
        sub_module: "wuling_new_pc",
    });
    stm_clicki("send", "event", pageTitle + "-顶部导航栏", "预约试驾-点击");
    _jcq.push(["_track", "Xingchen_top_banner", { content: "预约试驾" }]);
});

$(".law").click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick("autoTrack", {
        class_code: "web_pc_page_browse",
        class_name: "Web 页面浏览",
        event_code: "click_home_page_laws",
        event_name: "隐私法律",
        event_page: "五菱官网" + pageTitle,
        event_position: "隐私法律",
        event_type: "",
        event_link_url: window.location.href.split("?")[0],
        sub_module: "wuling_new_pc",
    });
    stm_clicki("send", "event", pageTitle + "-底部", "隐私法律-点击");
    _jcq.push(["_track", "Xingchen_dibu", { content: "隐私法律" }]);
});

$(".lk").click(function () {
    var pageTitle = $(document).attr("title");

    sensors.quick("autoTrack", {
        class_code: "web_pc_page_browse",
        class_name: "Web 页面浏览",
        event_code: "click_home_page_comprehend",
        event_name: "前往了解宝骏汽车",
        event_page: "五菱官网" + pageTitle,
        event_position: "前往了解宝骏汽车",
        event_type: "",
        event_link_url: window.location.href.split("?")[0],
        sub_module: "wuling_new_pc",
    });
    stm_clicki("send", "event", pageTitle + "-底部", "前往了解宝骏汽车-点击");
    _jcq.push(["_track", "Xingchen_dibu", { content: "前往了解宝骏汽车" }]);
});

$("footer p")
    .eq(3)
    .click(function () {
        var pageTitle = $(document).attr("title");

        sensors.quick("autoTrack", {
            class_code: "web_pc_page_browse",
            class_name: "Web 页面浏览",
            event_code: "click_home_page_icp",
            event_name: "ICP备案号",
            event_page: "五菱官网" + pageTitle,
            event_position: "ICP备案号",
            event_type: "",
            event_link_url: window.location.href.split("?")[0],
            sub_module: "wuling_new_pc",
        });
        stm_clicki("send", "event", pageTitle + "-底部", "ICP备案号-点击");
        _jcq.push(["_track", "Xingchen_dibu", { content: "ICP备案号" }]);
    });
$("footer p")
    .eq(4)
    .click(function () {
        var pageTitle = $(document).attr("title");

        sensors.quick("autoTrack", {
            class_code: "web_pc_page_browse",
            class_name: "Web 页面浏览",
            event_code: "click_home_page_police",
            event_name: "公安部备案号",
            event_page: "五菱官网" + pageTitle,
            event_position: "公安部备案号",
            event_type: "",
            event_link_url: window.location.href.split("?")[0],
            sub_module: "wuling_new_pc",
        });
        stm_clicki("send", "event", pageTitle + "-底部", "公安部备案号-点击");
        _jcq.push(["_track", "Xingchen_dibu", { content: "公安部备案号" }]);
    });

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

$(".btn-prev").click(function () {
    stm_clicki("send", "event", "宏光PLUS-参数配置", "上一页-点击", "宏光PLUS");
    _jcq.push(["_track", "HGPLUS_configuration", { content: "上一页" }]);
});

$(".btn-next").click(function () {
    stm_clicki("send", "event", "宏光PLUS-参数配置", "下一页-点击", "宏光PLUS");
    _jcq.push(["_track", "HGPLUS_configuration", { content: "下一页" }]);
});

var pzArr = ["<p>1.5L MT手动挡<br><span>舒适型</span></p>", "<p>1.5L MT手动挡<br><span>标准型</span></p>", "<p>1.5L MT手动挡<br><span>致富型</span></p>", "<p>1.5T MT手动挡<br><span>营运车</span></p>", "<p>1.5T MT手动挡<br><span>豪华型</span></p>", "<p>1.5T MT手动挡<br><span>舒适型</span></p>", "<p>1.5T MT手动挡<br><span>标准型</span></p>", "<p>1.5T MT手动挡<br><span>致富型</span></p>"];
var pzNum = 0;
$(".btn-prev, .btn-next").on("click", function () {
    if ($(this).hasClass("disabled")) return;
    if ($(this).hasClass("btn-prev")) {
        $(".btn-next").removeClass("disabled");
        if (pzNum != 0) {
            pzNum = pzNum - 1;
        }
    } else {
        $(".btn-prev").removeClass("disabled");
        if (pzNum < 7) {
            pzNum = pzNum + 1;
        }
    }
    if (pzNum == 7 || pzNum == 0) {
        $(this).addClass("disabled");
    }
    var imgDiv =
        '<img class="img on" on-src="images-pc-carstyle/macaron/peizhi/images/peizhi' +
        pzNum +
        '_02.png" off-src="images-pc-carstyle/macaron/peizhi/peizhi_02.png" src="images-pc-carstyle/macaron/peizhi/images/peizhi' +
        pzNum +
        '_02.png">' +
        '<img class="img" on-src="images-pc-carstyle/macaron/peizhi/images/peizhi' +
        pzNum +
        '_03.png" off-src="images-pc-carstyle/macaron/peizhi/peizhi_03.png" src="images-pc-carstyle/macaron/peizhi/peizhi_03.png">' +
        '<img class="img" on-src="images-pc-carstyle/macaron/peizhi/images/peizhi' +
        pzNum +
        '_04.png" off-src="images-pc-carstyle/macaron/peizhi/peizhi_04.png" src="images-pc-carstyle/macaron/peizhi/peizhi_04.png">' +
        '<img class="img" on-src="images-pc-carstyle/macaron/peizhi/images/peizhi' +
        pzNum +
        '_05.png" off-src="images-pc-carstyle/macaron/peizhi/peizhi_05.png" src="images-pc-carstyle/macaron/peizhi/peizhi_05.png">' +
        '<img class="img" on-src="images-pc-carstyle/macaron/peizhi/images/peizhi' +
        pzNum +
        '_06.png" off-src="images-pc-carstyle/macaron/peizhi/peizhi_06.png" src="images-pc-carstyle/macaron/peizhi/peizhi_06.png">' +
        '<img class="img" on-src="images-pc-carstyle/macaron/peizhi/images/peizhi' +
        pzNum +
        '_07.png" off-src="images-pc-carstyle/macaron/peizhi/peizhi_07.png" src="images-pc-carstyle/macaron/peizhi/peizhi_07.png">' +
        '<img class="img" on-src="images-pc-carstyle/macaron/peizhi/images/peizhi' +
        pzNum +
        '_08.png" off-src="images-pc-carstyle/macaron/peizhi/peizhi_08.png" src="images-pc-carstyle/macaron/peizhi/peizhi_08.png">' +
        '<img class="img" on-src="images-pc-carstyle/macaron/peizhi/images/peizhi' +
        pzNum +
        '_09.png" off-src="images-pc-carstyle/macaron/peizhi/peizhi_09.png" src="images-pc-carstyle/macaron/peizhi/peizhi_09.png">' +
        '<img class="img" on-src="images-pc-carstyle/macaron/peizhi/images/peizhi' +
        pzNum +
        '_10.png" off-src="images-pc-carstyle/macaron/peizhi/peizhi_10.png" src="images-pc-carstyle/macaron/peizhi/peizhi_10.png">' +
        '<img class="img" on-src="images-pc-carstyle/macaron/peizhi/images/peizhi' +
        pzNum +
        '_11.png" off-src="images-pc-carstyle/macaron/peizhi/peizhi_11.png" src="images-pc-carstyle/macaron/peizhi/peizhi_11.png">';
    $(".slidePeizhi-wrap .img-wrap div").html(imgDiv);
    $(".slidePeizhi-wrap .head-img").attr("src", "images-pc-carstyle/macaron/peizhi/peizhi" + pzNum + ".png");
    $(".slidePeizhi .slidePeizhi-wrap .btn-wrap p").html(pzArr[pzNum]);
    setTimeout(function () {
        ms.destroy();
        ms = null;
        ms = new IScroll("#scroll1", {
            scrollbars: true,
            interactiveScrollbars: true,
            // scrollbars: 'custom',
            bounce: false,
            mouseWheel: true,
            preventDefault: false,
        });
    }, 200);
});


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