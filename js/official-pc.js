$(function(){
    var tem = '<a href="https://miaozhen.com/cn/privacy" target="_blank" style="width:30%;height:27px; display:block;margin-left:48%;margin-top:-9%;position: relative;z-index:2"></a>'
    $('.tkBox .tk .imgtk').after(tem)
})

var isScroll = false;
var swiperMain = new Swiper('.swiper1', {
    loop: false,
    direction: 'vertical',
    mousewheelControl: true,
    noSwiping: true,
    mousewheelReleaseOnEdges: true,
    observer: true,
    observeParents: true,
    // onSlideChangeStart:function(swiper){
    //     var idx = swiper.activeIndex;
    //     if (idx == 3) {
    //         $('.page-arrow').show();
    //     }else{
    //         $('.page-arrow').hide();
    //     }
    // },
    onSlideChangeEnd: function (swiper) {
        var idx = swiper.activeIndex;
        if (idx == 0) {
            $('header').removeClass('hide')
        } else {
            $('header').addClass('hide')
        }

        if (idx == 0) {
            $('#video1')[0].pause()
        }
        if (idx == 1) {
            $('#video1')[0].pause()
            $('.screen4 .txt').addClass('on');
            $('.page-arrow').show();
        }else{
            $('.page-arrow').hide();
        }
        if (idx == 2) {
           
        }

        if (idx == 3) {
            $('#video1')[0].pause()
            $('.screen5').addClass('on')
            swiperMain.disableMousewheelControl();
        }
    },

});

$('.law').click(function () {
    $('.tkBox').show();
})

$('.tkBox .close').click(function () {
    $('.tkBox').hide();
})

var asc = 0
$('.screen5').scroll(function () {
    asc = $('.screen5').scrollTop();
    console.log(asc)
    if (asc == 0) {
        swiperMain.enableMousewheelControl();
    }
})

$('#last').on("mousewheel DOMMouseScroll", function (event) {
    var delta = (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1)) ||
        (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? -1 : 1));
    if (delta > 0) {
        console.info("页面上滑");
    } else if (delta < 0) {
        console.info("页面下滑");
        if (asc == 0) {
            swiperMain.enableMousewheelControl();
        }
    }
})

$('.screen2').click(function () {
    $('#video1').show();
    $('#video1')[0].play();

    sensors_track('click_wuling_ZX_special page_video1', '五菱周迅官宣专题页-视频1点击', '五菱周迅官宣专题页', '视频1点击')
    stm_clicki('send', 'event', '五菱周迅官宣专题页', '视频1-点击','五菱');
    _jcq.push(['_track', "ZHOUXUNannounce_ZTYvideo", { content: "五菱周迅官宣-PC视频1点击" }]);
})

$('.screen3 .btn').click(function () {
    $('#video2').show();
    $('#video2')[0].play();

    sensors_track('click_wuling_ZX_special page_video2', '五菱周迅官宣专题页-视频2点击', '五菱周迅官宣专题页', '视频2点击')
    stm_clicki('send', 'event', '五菱周迅官宣专题页', '视频2-点击','五菱');
    _jcq.push(['_track', "ZHOUXUNannounce_ZTYvideo", { content: "五菱周迅官宣-PC视频2点击" }]);
})

$('.sc5bg').click(function(){
    sensors_track('click_wuling_ZX_special_page_but_direct', '五菱周迅官宣专题页-直播按钮点击', '五菱周迅官宣专题页', '直播按钮点击')
    stm_clicki('send', 'event', '五菱周迅官宣专题页', '直播-点击','五菱');
    _jcq.push(['_track', "ZHOUXUNannounce_ZTYlive", { content: "五菱周迅官宣专题页-PC直播按钮点击" }]);

})

$('.top').on('click', function () {
    swiperMain.slideTo(0, 0);
    swiperMain.enableMousewheelControl();
    $('#last').scrollTop(0)
})