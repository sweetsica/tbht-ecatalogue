$(function(){
    var tem = '<a href="https://miaozhen.com/cn/privacy" target="_blank" style="width:30%;height:27px; display:block;margin-left:48%;margin-top:-9%;position: relative;z-index:2"></a>'
    $('.tkBox .tk .imgtk').after(tem)
})

$(function () {
    _jcq.push(["_trackform", "#input_name", "focusin", "Adventure", "input", "name"])      //姓名 
    _jcq.push(["_trackform", "#input_mobile", "focusin", "Adventure", "input", "telephone"])      //电话 
    _jcq.push(["_trackform", "#ddlCarProv", "change", "Adventure", "input", "province"])      //省份
    _jcq.push(["_trackform", "#ddlCarCity", "change", "Adventure", "input", "city"])      //城市
    _jcq.push(["_trackform", "#ddlDealer", "change", "Adventure", "input", "dealer"])      //经销商 
    _jcq.push(["_trackform", ".checkbox", "click", "Adventure", "input", "agree"])      //同意隐私协议
})


sensors_view('browse_zhengtu_belisted_index','浏览五菱征途上市-首页','五菱征途上市-首页');

var tackPvName = ['首页','视频页','留资页','政策页','亮点页','全面升级页'];

var swiperMain = new Swiper('.swiper1', {
    loop: false,
    direction: 'vertical',
    mousewheelControl: true,
    noSwiping: true,
    mousewheelReleaseOnEdges: true,
    observer: true,
    observeParents: true,
    onSlideChangeEnd: function (swiper) {
        var idx = swiper.activeIndex;
        if (idx == 0) {
            $('header').removeClass('hide')
        }else {
            $('header').addClass('hide')
        }
        var tackPvCode = ['browse_zhengtu_belisted_index','browse_zhengtu_belisted_video','browse_zhengtu_belisted_clue','browse_zhengtu_belisted_policy','browse_zhengtu_belisted_brightpoints','browse_zhengtu_belisted_levelup']
        sensors_view(tackPvCode[idx],'浏览五菱征途上市-'+tackPvName[idx],'五菱征途上市-'+tackPvName[idx]);


        var stmTackName = ['首页','视频播放','预约试驾','政策页','亮点页','全面升级页']
        stm_clicki('send', 'event', '五菱征途车型页', stmTackName[idx]+'【'+(idx+1)+'】-展示', '五菱征途-展示');

        _jcq.push(['_track', "Adventure_viewslide",{content: "五菱征途上市-"+tackPvName[idx]+"划动"}]);

        if(idx == 5 && isF){
            isF = false
            ms = new IScroll('#scroll1', {
                scrollbars: true,
                // scrollbars: 'custom',
                bounce: false,
                mouseWheel: true,
                preventDefault: false
            });
        }
    },
    // onSlidePrevEnd:function (swiper){
    //     var idx = swiper.activeIndex;
    //     _jcq.push(['_track', "Adventure_viewslide",{content: "五菱征途上市-"+tackPvName[idx+1]+"划动"}]);
    // },
    // onSlideNextEnd:function (swiper){
    //     var idx = swiper.activeIndex;
    //     _jcq.push(['_track', "Adventure_viewslide",{content: "五菱征途上市-"+tackPvName[idx-1]+"划动"}]);
    // }
});

$('.page-arrow').on('click', function () {
    swiperMain.slideTo(1);
})

$('.videoSec').click(function(){
    $('.video-wrap').fadeIn();
    $('#video')[0].play();
})

$('.video-wrap .close').click(function(){
    $('.video-wrap').fadeOut();
    $('#video')[0].pause();
})

$('.law').click(function () {
    $('.tkBox').show();
})

$('.tkBox .close').click(function () {
    $('.tkBox').hide();
})

$('.btn-popcode').on('mousemove',function () {
    $('.popcode').fadeIn();
    sensors_track('click_zhengtu_belisted_cluster','五菱征途上市-企业群点击','五菱征途上市页','企业群点击')
    _jcq.push(['_track', "Adventure_wechat", { content: "五菱征途上市-企业群点击"}]);
    stm_clicki('send', 'event', '五菱征途车型页-首页', '企业微信粉丝群-点击','五菱征途');
})
$('.popcode .close').on('click',function () {
    $('.popcode').fadeOut();
})


$('.btn-open').on('click', function () {
    $(this).hide()
    $(this).parents('.swiper-slide').addClass('more swiper-no-swiping')
    $(this).parents('.kv').hide()
    swiperMain.disableMousewheelControl();
    $(this).parents('.swiper-slide').find('span').each(function(){
        carboxArray.push($(this).offset().top)
    })
})
$('.btn-close').on('click', function () {
    $(this).parents('.swiper-slide').scrollTop(0);
    $(this).parents('.swiper-slide').removeClass('more swiper-no-swiping')
    $(this).parents('.swiper-slide').find('.btn-open').show()
    $(this).parents('.swiper-slide').find('.kv').show()
    $(this).parents('.swiper-slide').find('span').removeClass('on')
    swiperMain.enableMousewheelControl();
    carboxArray = [];
    scrollIdx = 0;
})

var carboxArray = [];
var scrollIdx = 0;
$('.scroll-ani').scroll(function () {
    var a = $('.scroll-ani').scrollTop();
    if (a > carboxArray[scrollIdx] - ($(window).height()/2)) {
        $('.scroll-ani .copy-'+(scrollIdx+1)).addClass('on')
        scrollIdx++;
    }
})

var ms, isF = true;

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

$('.top').on('click', function () {
    swiperMain.slideTo(0, 0);
})
