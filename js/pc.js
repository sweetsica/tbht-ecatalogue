$(function () {
    var tem = '<a href="https://miaozhen.com/cn/privacy" target="_blank" style="width:30%;height:27px; display:block;margin-left:48%;margin-top:-9%;position: relative;z-index:2"></a>'
    $('.tkBox .tk .imgtk').after(tem)
})

$('header .logo').click(function () {
    var pageTitle = $('body').data("title");

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
    _jcq.push(['_track', pageTitle + '_top_banner', { content: '五菱logo' }]);
})

$('header .link.link1').click(function () {
    var pageTitle = $('body').data("title");

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
    _jcq.push(['_track', pageTitle + '_top_banner', { content: '车型' }]);
})

$('header .link.link2').click(function () {
    var pageTitle = $('body').data("title");

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
    _jcq.push(['_track', pageTitle + '_dibu', { content: '购车指南' }]);
})

$('header .link.link3').click(function () {
    var pageTitle = $('body').data("title");

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
    _jcq.push(['_track', pageTitle + '_dibu', { content: '品牌故事' }]);
})

$('.btnK').click(function () {
    var pageTitle = $('body').data("title");

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
    _jcq.push(['_track', pageTitle + '_top_banner', { content: '在线客服' }]);
})

$('.btnY').click(function () {
    var pageTitle = $('body').data("title");

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
    _jcq.push(['_track', pageTitle + '_top_banner', { content: '预约试驾' }]);
})

$('.law').click(function () {
    var pageTitle = $('body').data("title");

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
    _jcq.push(['_track', pageTitle + '_dibu', { content: '隐私法律' }]);
})

$('.lk').click(function () {
    var pageTitle = $('body').data("title");

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
    _jcq.push(['_track', pageTitle + '_dibu', { content: '前往了解宝骏汽车' }]);
})

$('footer p').eq(3).click(function () {
    var pageTitle = $('body').data("title");

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
    _jcq.push(['_track', pageTitle + '_dibu', { content: 'ICP备案号' }]);
})
$('footer p').eq(4).click(function () {
    var pageTitle = $('body').data("title");

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
    _jcq.push(['_track', pageTitle + '_dibu', { content: '公安部备案号' }]);
})

var swiperhome = new Swiper('.swiper-home', {
    direction: 'vertical',
    mousewheelControl: true,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    onSlideChangeEnd: function (swiper) {
        if (swiper.realIndex == 0) {
            swiperIndexBan.params.autoplay = 3000;
            swiperIndexBom.params.autoplay = false;
        }
        if (swiper.realIndex == 1) {
            swiperIndexBan.params.autoplay = false;
            swiperIndexBom.params.autoplay = false;
        }
        if (swiper.realIndex == 2) {
            swiperIndexBan.params.autoplay = false;
            swiperIndexBom.params.autoplay = false;
        }
        if (swiper.realIndex == 3) {
            swiperIndexBan.params.autoplay = false;
            swiperIndexBom.params.autoplay = 3000;
        }
    }
});
// swiperhome.slideTo(1);

var swiperIndexBan = new Swiper('.swiper-indexBan', {
    loop: true,
    autoplay: 4000,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    pagination: '.index-banner-pagination',
    paginationClickable: true,
    onSlideChangeEnd: function (swiper) {
        console.log(swiper.realIndex)
        if (swiper.realIndex == 0) {
            stm_clicki('send', 'event', '首页-焦点图', '展示+焦点图1_五菱宏光MINI EV_7.2_车型kv', '宏光MINI EV_展示');
        }
        if (swiper.realIndex == 1) {
            stm_clicki('send', 'event', '首页-焦点图', '展示+焦点图2_凯捷 Victory_7.2_车型kv', '凯捷 Victory_展示');
        }
    }
});



var swiperindexRedCar = new Swiper('.swiper-indexCar-red', {
    slidesPerView: 2.5,
    // spaceBetween: 30,
    loopedSlides: 6,
    centeredSlides: true,
    loop: true,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    nextButton: '.swiper-indexred-button-next',
    prevButton: '.swiper-indexred-button-prev',
    onSlideChangeEnd: function (swiper) {
        // console.log(swiper.realIndex)
        if (swiper.realIndex == 0) {
            $('.swiper-indexCar-red .indexCarInfo .pri').html('售价<i>¥62,800 - ¥65,800</i>');
            $('.swiper-indexCar-red .indexCarInfo .inf').text('五菱龙卡3.8米｜横竖都能拉');
            $('.swiper-indexCar-red .indexCarInfo .viewMore').attr('href', 'longka.html').css('opacity', '1');
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-sensors', "click_home_page_red_logo_car_detail|热销车型-红标-龙卡-了解更多|五菱官网首页|红标-了解更多");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-jcq', "hot_selling_models|首页红标了解更多+征程");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('onclick', "window.location.href='longka.html';stm_clicki('send', 'event', '首页-热销车型','了解更多-点击+红标_龙卡_展示')");
            stm_clicki('send', 'event', '首页-热销车型', '展示+红标_龙卡', '龙卡_展示');
        }
        if (swiper.realIndex == 1) {
            $('.swiper-indexCar-red .indexCarInfo .pri').html('售价<i>¥69,800 - ¥90,800</i>');
            $('.swiper-indexCar-red .indexCarInfo .inf').text('五菱征程 ｜超大空间宽体商务车');
            $('.swiper-indexCar-red .indexCarInfo .viewMore').attr('href', 'zhengcheng.html').css('opacity', '1');
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-sensors', "click_home_page_red_logo_car_detail|热销车型-红标-征程-了解更多|五菱官网首页|红标-了解更多");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-jcq', "hot_selling_models|首页红标了解更多+征程");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('onclick', "window.location.href='zhengcheng.html';stm_clicki('send', 'event', '首页-热销车型','了解更多-点击+红标_征程_展示')");
            stm_clicki('send', 'event', '首页-热销车型', '展示+红标_征程', '征程_展示');
        }
        if (swiper.realIndex == 2) {
            $('.swiper-indexCar-red .indexCarInfo .pri').html('售价<i>¥58,800 - ¥62,800</i>');
            $('.swiper-indexCar-red .indexCarInfo .inf').text('征途Fighting｜青春奋斗卡');
            $('.swiper-indexCar-red .indexCarInfo .viewMore').attr('href', 'adventure.html').css('opacity', '1');
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-sensors', "click_home_page_red_logo_car_detail|热销车型-红标-征途Fighting-了解更多|五菱官网首页|红标-了解更多");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-jcq', "hot_selling_models|首页红标了解更多+征途Fighting");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('onclick', "window.location.href='adventure.html';stm_clicki('send', 'event', '首页-热销车型','了解更多-点击+红标_征途Fighting','征途Fighting_展示')");
            stm_clicki('send', 'event', '首页-热销车型', '展示+红标_征途Fighting', '征途Fighting_展示');
        }
        if (swiper.realIndex == 3) {
            $('.swiper-indexCar-red .indexCarInfo .pri').html('售价<i>¥58,800 - ¥79,800</i>');
            $('.swiper-indexCar-red .indexCarInfo .inf').text('五菱宏光PLUS ｜ 全新一代宽体商务车');
            $('.swiper-indexCar-red .indexCarInfo .viewMore').attr('href', 'hongguangplus.html').css('opacity', '1');
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-sensors', "click_home_page_red_logo_car_detail|热销车型-红标-五菱宏光PLUS-了解更多|五菱官网首页|红标-了解更多");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-jcq', "hot_selling_models|首页红标了解更多+五菱宏光PLUS");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('onclick', "window.location.href='hongguangplus.html';stm_clicki('send', 'event', '首页-热销车型','了解更多-点击+红标_五菱宏光PLUS','五菱宏光PLUS_展示')");
            stm_clicki('send', 'event', '首页-热销车型', '展示+红标_五菱宏光PLUS', '五菱宏光PLUS_展示');
        }
        if (swiper.realIndex == 4) {
            $('.swiper-indexCar-red .indexCarInfo .pri').html('售价<i>¥51,800 - ¥81,800</i>');
            $('.swiper-indexCar-red .indexCarInfo .inf').text('五菱宏光S3 ｜ 盘山之王');
            $('.swiper-indexCar-red .indexCarInfo .viewMore').attr('href', 'hongguangS3.html').css('opacity', '1');
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-sensors', "click_home_page_red_logo_car_detail|热销车型-红标-五菱宏光S3-了解更多|五菱官网首页|红标-了解更多");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-jcq', "hot_selling_models|首页红标了解更多+五菱宏光S3");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('onclick', "window.location.href='hongguangS3.html';stm_clicki('send', 'event', '首页-热销车型','了解更多-点击+红标_五菱宏光S3','五菱宏光S3_展示')");
            stm_clicki('send', 'event', '首页-热销车型', '展示+红标_五菱宏光S3', '五菱宏光S3_展示');
        }
        if (swiper.realIndex == 5) {
            $('.swiper-indexCar-red .indexCarInfo .pri').html('售价<i>¥44,800 - ¥51,800</i>');
            $('.swiper-indexCar-red .indexCarInfo .inf').text('2021款五菱宏光V ｜ 城市物流领导者');
            $('.swiper-indexCar-red .indexCarInfo .viewMore').attr('href', 'hongguangV.html').css('opacity', '1');
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-sensors', "click_home_page_red_logo_car_detail|热销车型-红标-五菱宏光V-了解更多|五菱官网首页|红标-了解更多");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-jcq', "hot_selling_models|首页红标了解更多+五菱宏光V");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('onclick', "window.location.href='hongguangV.html';stm_clicki('send', 'event', '首页-热销车型','了解更多-点击+红标_五菱宏光V','五菱宏光V_展示')");
            stm_clicki('send', 'event', '首页-热销车型', '展示+红标_五菱宏光V', '五菱宏光V_展示');
        }
        if (swiper.realIndex == 6) {
            $('.swiper-indexCar-red .indexCarInfo .pri').html('售价<i>¥46,800 - ¥53,800</i>');
            $('.swiper-indexCar-red .indexCarInfo .inf').text('五菱荣光新卡 ｜ 专业货运实力派');
            $('.swiper-indexCar-red .indexCarInfo .viewMore').attr('href', 'rongguangNT.html').css('opacity', '1');
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-sensors', "click_home_page_red_logo_car_detail|热销车型-红标-五菱荣光新卡-了解更多|五菱官网首页|红标-了解更多");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('data-jcq', "hot_selling_models|首页红标了解更多五菱荣光新卡");
            $('.swiper-indexCar-red .indexCarInfo .viewMore,.swiper-indexCar-red .swiper-slide-active').attr('onclick', "window.location.href='rongguangNT.html';stm_clicki('send', 'event', '首页-热销车型','了解更多-点击+红标_五菱荣光新卡','五菱荣光新卡_展示')");
            stm_clicki('send', 'event', '首页-热销车型', '展示+红标_五菱荣光新卡', '五菱荣光新卡_展示');
        }
    }
});

// alert(swiperindexRedCar.height)


var swiperindexYinCar = new Swiper('.swiper-indexCar-yin', {
    slidesPerView: 2.5,
    // spaceBetween: 30,
    loopedSlides: 6,
    centeredSlides: true,
    loop: true,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    nextButton: '.swiper-indexyin-button-next',
    prevButton: '.swiper-indexyin-button-prev',
    onSlideChangeEnd: function (swiper) {
        console.log(swiper.realIndex)
        if (swiper.realIndex == 0) {
            $('.swiper-indexCar-yin .indexCarInfo .pri').html('售价<i>¥88,800 - ¥105,800</i').css('top', '0');
            $('.swiper-indexCar-yin .indexCarInfo .inf').html('五菱星光 | 五菱首款超A级家轿');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore').attr('href', 'xingguang.html');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore,.swiper-indexCar-guang .swiper-slide-active').attr('onclick', "window.location.href='xingguang.html'");
        }
        if (swiper.realIndex == 1) {
            $('.swiper-indexCar-yin .indexCarInfo .pri').html('售价<i>¥89,800 - ¥105,800</i').css('top', '0');
            $('.swiper-indexCar-yin .indexCarInfo .inf').html('五菱星云 | 燃油SUV模范生');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore').attr('href', 'xingyun.html');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore,.swiper-indexCar-guang .swiper-slide-active').attr('onclick', "window.location.href='xingyun.html'");
        }
        if (swiper.realIndex == 2) {
            $('.swiper-indexCar-yin .indexCarInfo .pri').html('售价<i>¥129,800 - ¥149,800</i>');
            $('.swiper-indexCar-yin .indexCarInfo .inf').text('凯捷混动铂金版 SPA级大四座家用车');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore').attr('href', 'kaijiehundongbojinban.html');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore,.swiper-indexCar-yin .swiper-slide-active').attr('onclick', "window.location.href='kaijiehundongbojinban.html'");
        }
        if (swiper.realIndex == 3) {
            $('.swiper-indexCar-yin .indexCarInfo .pri').html('售价<i>¥56,800 - ¥86,800</i>');
            $('.swiper-indexCar-yin .indexCarInfo .inf').text('五菱星驰 | 五菱银标首款年轻力座驾');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore').attr('href', 'xingchicar.html');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore,.swiper-indexCar-yin .swiper-slide-active').attr('onclick', "window.location.href='xingchicar.html'");
        }
        if (swiper.realIndex == 4) {
            $('.swiper-indexCar-yin .indexCarInfo .pri').html('售价<i>¥99,800 - ¥109,800</i>');
            $('.swiper-indexCar-yin .indexCarInfo .inf').text('五菱星辰混动版 | 超能打全能SUV');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore').attr('href', 'xingchenhundong.html');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore,.swiper-indexCar-yin .swiper-slide-active').attr('onclick', "window.location.href='xingchenhundong.html'");
        }
        if (swiper.realIndex == 5) {
            $('.swiper-indexCar-yin .indexCarInfo .pri').html('售价<i>¥68,800 - ¥115,800</i>');
            $('.swiper-indexCar-yin .indexCarInfo .inf').text('五菱佳辰 | Ling OS·7座家用车');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore').attr('href', 'jiachen.html');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore,.swiper-indexCar-yin .swiper-slide-active').attr('onclick', "window.location.href='jiachen.html'");
        }
        if (swiper.realIndex == 6) {
            $('.swiper-indexCar-yin .indexCarInfo .pri').html('售价<i>¥68,800 - ¥99,800</i>');
            $('.swiper-indexCar-yin .indexCarInfo .inf').text('五菱星辰Asta | Ling OS（灵犀）生态SUV');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore').attr('href', 'asta.html');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore,.swiper-indexCar-yin .swiper-slide-active').attr('onclick', "window.location.href='asta.html'");
        }
        if (swiper.realIndex == 7) {
            $('.swiper-indexCar-yin .indexCarInfo .pri').html('售价<i>¥85,800 - ¥125,800</i>');
            $('.swiper-indexCar-yin .indexCarInfo .inf').text('五菱凯捷Victory ｜ 大四座家用车');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore').attr('href', 'victory.html');
            $('.swiper-indexCar-yin .indexCarInfo .viewMore,.swiper-indexCar-yin .swiper-slide-active').attr('onclick', "window.location.href='victory.html'");
        }
    }
});

var swiperindexGuangCar = new Swiper('.swiper-indexCar-guang', {
    slidesPerView: 2.5,
    // spaceBetween: 30,
    loopedSlides: 6,
    centeredSlides: true,
    loop: true,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    nextButton: '.swiper-indexguang-button-next',
    prevButton: '.swiper-indexguang-button-prev',
    onSlideChangeEnd: function (swiper) {
        if (swiper.realIndex == 0) {
            $('.swiper-indexCar-guang .indexCarInfo .pri').html('售价<i>¥59,800 - ¥88,800</i>').css('top', '0');
            $('.swiper-indexCar-guang .indexCarInfo .inf').html('五菱缤果 | 大空间5门纯电车');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore').attr('href', 'binguo.html');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore,.swiper-indexCar-guang .swiper-slide-active').attr('onclick', "window.location.href='binguo.html'");
        }
        if (swiper.realIndex == 1) {
            $('.swiper-indexCar-guang .indexCarInfo .pri').html('售价<i>¥57,800 - ¥69,800</i>').css('top', '0');
            $('.swiper-indexCar-guang .indexCarInfo .inf').html('五菱Air ev晴空 ｜质感生活基本款');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore').attr('href', 'airev.html');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore,.swiper-indexCar-guang .swiper-slide-active').attr('onclick', "window.location.href='airev.html'");
        }
        if (swiper.realIndex == 2) {
            $('.swiper-indexCar-guang .indexCarInfo .pri').html('售价<i>¥99,900</i>').css('top', '0');
            $('.swiper-indexCar-guang .indexCarInfo .inf').html('宏光MINIEV 敞篷版 ｜ 年轻人的浪漫敞篷车');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore').attr('href', 'changpeng.html');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore,.swiper-indexCar-guang .swiper-slide-active').attr('onclick', "window.location.href='changpeng.html'");
        }
        if (swiper.realIndex == 3) {
            $('.swiper-indexCar-guang .indexCarInfo .pri').html('售价<i>¥55,800 - ¥69,800</i>').css('top', '0');
            $('.swiper-indexCar-guang .indexCarInfo .inf').html('宏光MINIEV GAMEBOY ｜ 都市潮创社交新装备');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore').attr('href', 'gb.html');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore,.swiper-indexCar-guang .swiper-slide-active').attr('onclick', "window.location.href='gb.html'");
        }
        if (swiper.realIndex == 4) {
            $('.swiper-indexCar-guang .indexCarInfo .pri').html('售价<i>¥32,800 - ¥44,800</i').css('top', '0');
            $('.swiper-indexCar-guang .indexCarInfo .inf').html('五菱宏光MINIEV 2022年度款');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore').attr('href', 'ev50gb.html');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore,.swiper-indexCar-guang .swiper-slide-active').attr('onclick', "window.location.href='ev50gb.html'");
        }
        if (swiper.realIndex == 5) {
            $('.swiper-indexCar-guang .indexCarInfo .pri').html('售价<i>¥43,800 - ¥52,800</i>').css('top', '0');
            $('.swiper-indexCar-guang .indexCarInfo .inf').text('五菱宏光MINIEV Macaron | 人民的代步车');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore').attr('href', 'evmcrgb.html');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore,.swiper-indexCar-guang .swiper-slide-active').attr('onclick', "window.location.href='evmcrgb.html'");
        }
        if (swiper.realIndex == 6) {
            $('.swiper-indexCar-guang .indexCarInfo .pri').html('售价<i>¥56,800 - ¥61,800</i>').css('top', '0');
            $('.swiper-indexCar-guang .indexCarInfo .inf').html('五菱NanoEV ｜ Couple Car');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore').attr('href', 'nano.html');
            $('.swiper-indexCar-guang .indexCarInfo .viewMore,.swiper-indexCar-guang .swiper-slide-active').attr('onclick', "window.location.href='nano.html'");
        }
    }
});

$('span.red').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('span.guang').removeClass('act');
    $('.swiper-indexCar-red').addClass('on');
    $('.swiper-indexCar-yin').removeClass('on');
    $('.swiper-indexCar-guang').removeClass('on');
    $('.indexCarInfoYin').hide();
    $('.indexCarInfo').show();
    $('.indexCarInfoGuang').hide();

})

$('span.yin').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('span.red').addClass('act');
    $('.swiper-indexCar-red').removeClass('on');
    $('.swiper-indexCar-yin').addClass('on');
    $('.swiper-indexCar-guang').removeClass('on');
    $('.indexCarInfoYin').show();
    $('.indexCarInfo').show();
    $('.indexCarInfoGuang').hide();
    stm_clicki('send', 'event', '首页-热销车型', '展示+银标_凯捷Victory', '凯捷Victory_展示');

})

$('span.guang').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('span.guang').removeClass('act');
    $('.swiper-indexCar-red').removeClass('on');
    $('.swiper-indexCar-yin').removeClass('on');
    $('.swiper-indexCar-guang').addClass('on');
    $('.indexCarInfoYin').show();
    $('.indexCarInfo').show();
    $('.indexCarInfoGuang').show();
    stm_clicki('send', 'event', '首页-热销车型', '展示+银标_凯捷Victory', '凯捷Victory_展示');

})

var swiperIndexBom = new Swiper('.swiper-indexBom', {
    loop: true,
    // autoplay: 3000,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    nextButton: '.button-indexBom-next',
    prevButton: '.button-indexBom-prev',
    pagination: '.index-bom-pagination',
    onSlideChangeEnd: function (swiper) {
        console.log(swiper.realIndex)
        if (swiper.realIndex == 0) {
            stm_clicki('send', 'event', '首页-菱菱邦', '微博-展示');
        }
        if (swiper.realIndex == 1) {
            stm_clicki('send', 'event', '首页-菱菱邦', '菱菱邦公众号-展示');
        }
        if (swiper.realIndex == 2) {
            stm_clicki('send', 'event', '首页-菱菱邦', '菱菱邦企业号-展示');
        }
        if (swiper.realIndex == 3) {
            stm_clicki('send', 'event', '首页-菱菱邦', '菱菱邦App-展示');
        }
    }
});

$('.law').click(function () {
    $('.tkBox').show()
})

$('.tkBox .close').click(function () {
    $('.tkBox').hide()
})

$('.redBar').click(function () {
    $('.tab').css('height', '13%');
    $(this).addClass('on');
    $('.yinBar').removeClass('on');
    $('.guangBar').removeClass('on');
    $('.redBar .logoBom,.yinBar .logoBom,.guangBar .logoBom').hide();
    // $('.redBar .logo,.yinBar .logo').css('width', '40%');
    $('body').css({
        overflowY: 'auto',
    })

    // var imgH = $('.swiper-carstyle-red .swiper-slide.swiper-slide-active .info img').height();
    // $('.swiper-carstyle-red .swiper-slide.swiper-slide-active .info').css('height', imgH);

    setTimeout(function () {
        $('.swiper-carstyle-red').addClass('on');
        $('.swiper-carstyle-yin').removeClass('on')
        $('.swiper-carstyle-guang').removeClass('on');
    }, 500)

})

$('.yinBar').click(function () {
    $('.tab').css('height', '13%');
    $(this).addClass('on');
    $('.redBar').removeClass('on');
    $('.guangBar').removeClass('on');
    $('.redBar .logoBom,.yinBar .logoBom,.guangBar .logoBom').hide();
    // $('.redBar .logo,.yinBar .logo').css('width', '40%');
    $('body').css({
        overflowY: 'auto',
    })

    // var imgH = $('.swiper-carstyle-yin .swiper-slide.swiper-slide-active .info img').height();
    // $('.swiper-carstyle-yin .swiper-slide.swiper-slide-active .info').css('height', imgH);

    setTimeout(function () {
        $('.swiper-carstyle-red').removeClass('on');
        $('.swiper-carstyle-guang').removeClass('on');
        $('.swiper-carstyle-yin').addClass('on');
    }, 500)
})

$('.guangBar').click(function () {
    $('.tab').css('height', '13%');
    $(this).addClass('on');
    $('.redBar').removeClass('on');
    $('.yinBar').removeClass('on');
    $('.redBar .logoBom,.yinBar .logoBom,.guangBar .logoBom').hide();
    // $('.redBar .logo,.guangBar .logo').css('width', '40%');
    $('body').css({
        overflowY: 'auto',
    })

    // var imgH = $('.swiper-carstyle-guang .swiper-slide.swiper-slide-active .info img').height();
    // $('.swiper-carstyle-guang .swiper-slide.swiper-slide-active .info').css('height', imgH);

    setTimeout(function () {
        $('.swiper-carstyle-red').removeClass('on');
        $('.swiper-carstyle-yin').removeClass('on');
        $('.swiper-carstyle-guang').addClass('on');
    }, 500)
})


var swiperCarStyleRed = new Swiper('.swiper-carstyle-red', {
    slidesPerView: 2,
    // spaceBetween: 30,
    loopedSlides: 6,
    centeredSlides: true,
    loop: true,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    pagination: '.carstyle-red-pagination',
    paginationClickable: true,
    // paginationBulletRender: function (swiper, index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
    nextButton: '.swiper-carstyle-red-button-next',
    prevButton: '.swiper-carstyle-red-button-prev',
    onSlideChangeStart: function (swiper) {
        // var imgH = $('.swiper-carstyle-red .swiper-slide.swiper-slide-active .info img').height();
        // $('.swiper-carstyle-red .swiper-slide.swiper-slide-active .info').css('height', imgH);
    }
});

var swiperCarStyleYin = new Swiper('.swiper-carstyle-yin', {
    slidesPerView: 2,
    // spaceBetween: 30,
    loopedSlides: 6,
    centeredSlides: true,
    loop: true,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    pagination: '.carstyle-yin-pagination',
    paginationClickable: true,
    // paginationBulletRender: function (swiper, index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
    nextButton: '.swiper-carstyle-yin-button-next',
    prevButton: '.swiper-carstyle-yin-button-prev',
    onSlideChangeStart: function (swiper) {
        // var imgH = $('.swiper-carstyle-yin .swiper-slide.swiper-slide-active .info img').height();
        // $('.swiper-carstyle-yin .swiper-slide.swiper-slide-active .info').css('height', imgH);
    }
});

var swiperCarStyleGuang = new Swiper('.swiper-carstyle-guang', {
    slidesPerView: 2,
    // spaceBetween: 30,
    loopedSlides: 6,
    centeredSlides: true,
    loop: true,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    pagination: '.carstyle-guang-pagination',
    paginationClickable: true,
    // paginationBulletRender: function (swiper, index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
    nextButton: '.swiper-carstyle-guang-button-next',
    prevButton: '.swiper-carstyle-guang-button-prev',
    onSlideChangeStart: function (swiper) {
        // var imgH = $('.swiper-carstyle-guang .swiper-slide.swiper-slide-active .info img').height();
        // $('.swiper-carstyle-guang .swiper-slide.swiper-slide-active .info').css('height', imgH);
    }
});

// $('.swiper-carstyle-red-button-prev,.swiper-carstyle-red-button-next').click(function () {
//     var imgH = $('.swiper-carstyle-red .swiper-slide.swiper-slide-active .info img').height();
//     $('.swiper-carstyle-red .swiper-slide.swiper-slide-active .info').css('height', imgH);
// })

// $('.swiper-carstyle-yin-button-prev,.swiper-carstyle-yin-button-next').click(function () {
//     var imgH = $('.swiper-carstyle-yin .swiper-slide.swiper-slide-active .info img').height();
//     $('.swiper-carstyle-yin .swiper-slide.swiper-slide-active .info').css('height', imgH);
// })

// $('.swiper-carstyle-guang-button-prev,.swiper-carstyle-guang-button-next').click(function () {
//     var imgH = $('.swiper-carstyle-guang .swiper-slide.swiper-slide-active .info img').height();
//     $('.swiper-carstyle-guang .swiper-slide.swiper-slide-active .info').css('height', imgH);
// })


$('.cw .cwlab .check').click(function () {
    $(this).addClass('on');
    $(this).parent().siblings('.cwlab').children('.check').removeClass('on');
})

$('.bom .check').click(function () {
    var status = $(this).hasClass('on');
    if (status) {
        $(this).removeClass('on')
    } else {
        $(this).addClass('on')
    }
})

function tip() {
    var tem = '<div class="tipBox"><img src="images-pc/img-tip.png"></div>';
    $('body').append(tem);

    setTimeout(function () {
        $('.tipBox').fadeOut();
    }, 2000)
    setTimeout(function () {
        $('.tipBox').remove();
    }, 2100)
}

function tipErr(tipTxt) {
    var tem = '<div class="resTip">' + tipTxt + '</div>';
    $('.infoBox').append(tem);

    setTimeout(function () {
        $('.resTip').fadeOut();
    }, 2000)
    setTimeout(function () {
        $('.resTip').remove();
    }, 2100)
}

function tipLoanErr(tipTxt) {
    var tem = '<div class="loanTipErr">' + tipTxt + '</div>';
    $('body').append(tem);

    setTimeout(function () {
        $('.loanTipErr').fadeOut();
    }, 2000)
    setTimeout(function () {
        $('.loanTipErr').remove();
    }, 2100)
}

// tip('请完善您的资料')


$('.allTab span.redCar').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('.allTab .line').css({
        left: '67%',
        background: '#e70c31'
    });
    $('.allCarTab.red').show();
    $('.allCarTab.yin').hide();
    $('.allCarTab.guang').hide();
    $('.carsList').eq(4).show().siblings('.carsList').hide();
    $('.allCarTab.red span').eq(0).addClass('on').siblings().removeClass('on');
    $('.allCarTab .line').css('transform', 'translate(0,0)');
})

$('.allTab span.yinCar').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('.allTab .line').css({
        left: '33%',
        background: '#384868'
    });
    $('.allCarTab.red').hide();
    $('.allCarTab.yin').show();
    $('.allCarTab.guang').hide();
    $('.carsList').eq(1).show().siblings('.carsList').hide();
    $('.allCarTab.yin span').eq(0).addClass('on').siblings().removeClass('on');
    $('.allCarTab .line').css('transform', 'translate(0,0)');
})

$('.allTab span.guangCar').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('.allTab .line').css({
        left: '0',
        background: '#9fb0bb'
    });
    $('.allCarTab.red').hide();
    $('.allCarTab.yin').hide();
    $('.allCarTab.guang').show();
    $('.carsList').eq(0).show().siblings('.carsList').hide();
    $('.allCarTab.guang span').eq(0).addClass('on').siblings().removeClass('on');
    $('.allCarTab .line').css('transform', 'translate(0,0)');
})

$('.allCarTab.red span').click(function () {
    var w = $(this).width();
    var index = $(this).index();
    $('.allCarTab .line').css('transform', 'translate(' + index * w + 'px' + ',0)');
    $(this).addClass('on').siblings().removeClass('on');
    $('.carsList').eq(index + 4).show().siblings('.carsList').hide()
})

$('.allCarTab.yin span').click(function () {
    var w = $(this).width();
    var index = $(this).index();
    console.log(index)
    $('.allCarTab .line').css('transform', 'translate(' + index * w + 'px' + ',0)');
    $(this).addClass('on').siblings().removeClass('on');
    $('.carsList').eq(index + 1).show().siblings('.carsList').hide()
})

var swiperAllCarBan = new Swiper('.swiper-allcarBan', {
    loop: true,
    autoplay: 3000,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    pagination: '.allcar-banner-pagination',
    paginationClickable: true,
});

var swiperChinaRedBom = new Swiper('.swiper-chinaRedBom', {
    loop: true,
    // autoplay: 3000,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    nextButton: '.button-chinaRedBom-next',
    prevButton: '.button-chinaRedBom-prev',
    pagination: '.chinaRedBom-pagination',
    onSlideChangeEnd: function (swiper) {
        console.log(swiper.realIndex)
        if (this.activeIndex == 2) {
            stm_clicki('send', 'event', '品牌故事页-菱菱邦', '微博-展示');
        }
        if (this.activeIndex == 3) {
            stm_clicki('send', 'event', '品牌故事页-菱菱邦', '菱菱邦公众号-展示');
        }
        if (this.activeIndex == 4) {
            stm_clicki('send', 'event', '品牌故事页-菱菱邦', '菱菱邦App-展示');
        }
    }

});

$('.dealerBox .dealerList').on('click', 'li .btn', function () {
    var company = $(this).siblings('.comName').text();
    var car = $('.locationChose .cBox select#ddlCarType option:selected').text();
    var pro = $('.locationChose .cBox select#ddlCarProv option:selected').text();
    var city = $('.locationChose .cBox select#ddlCarCity option:selected').text();
    // alert(car)
    sensors.track('web_mobile_element_click', {
        class_code: 'web_mobile_element_click',
        class_name: 'Web 元素点击',
        event_code: 'click_dealer_search',
        event_name: '经销商查询页-' + company + '经销商预约试驾点击',
        event_page: '五菱官网经销商查询页',
        event_position: '经销商查询页-' + company + '经销商预约试驾',
        event_type: '',
        event_link_url: window.location.href.split("?")[0],
        sub_module: 'wuling_new_mobile'
    });
    stm_clicki('send', 'event', '经销商查询页', company + '_' + car + '_预约试驾-点击', '');
    _jcq.push(['_track', 'dealer_test_drive', { content: car + '+' + company + '+' + pro + '+' + city }]);
})

$('.carsList li').click(function (e) {
    e.stopPropagation();
    var carName = $(this).children('.carName').text();
    // alert(carName)
    _jcq.push(['_track', 'all_car', { content: '车型页-' + carName }]);
})

$('.newsMain .viewMore').click(function () {
    $('.newsMain ul li').show();
    $(this).hide()
})

$('.newsVideo,.gloYinV').click(function () {
    $('.videoMain').show();
    $('#video')[0].play();
})
$('.videoBox .close').click(function () {
    $('.videoMain').hide();
    $('#video')[0].pause();
})

$('.newsMain ul').on('click', 'li', function () {
    var newTitle = $(this).children('.info').children('.title').children('span').text();
    var newTime = $(this).children('.info').children('.time').text();

    sensors.track('web_mobile_element_click', {
        class_code: 'web_mobile_element_click',
        class_name: 'Web 元素点击',
        event_code: 'click_dealer_search',
        event_name: '品牌故事页-新闻咨询Tab-' + newTitle + '新闻阅读点击',
        event_page: '五菱官网品牌故事页',
        event_position: '品牌故事页-新闻咨询Tab-' + newTitle + '新闻阅读',
        event_type: '',
        event_link_url: window.location.href.split("?")[0],
        sub_module: 'wuling_new_mobile'
    });
    stm_clicki('send', 'event', '品牌故事页-新闻资讯', '新闻-点击+' + newTitle + '_' + newTime);
    _jcq.push(['_track', 'story', { content: '新闻咨询Tab-' + newTitle + '新闻阅读' }]);
})

var swiperYears = new Swiper('.swiper-years', {
    // loop: true,
    // autoplay: 3000,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    nextButton: '.button-years-next',
    prevButton: '.button-years-prev',
    onSlideChangeEnd: function (swiper) {
        console.log(swiper.activeIndex)

        $('.yearsLine span').eq(swiper.activeIndex).addClass('on').siblings().removeClass('on');
        if (swiper.activeInde == 0) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '1958_内容展示')
        }
        if (swiper.activeInde == 1) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '1985_内容展示')
        }
        if (swiper.activeInde == 2) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '1991_内容展示')
        }
        if (swiper.activeInde == 3) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '1998_内容展示')
        }
        if (swiper.activeInde == 4) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '2002_内容展示')
        }
        if (swiper.activeInde == 5) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '2005_内容展示')
        }
        if (swiper.activeInde == 6) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '2008_内容展示')
        }
        if (swiper.activeInde == 7) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '2009_内容展示')
        }
        if (swiper.activeInde == 8) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '2010_内容展示')
        }
        if (swiper.activeInde == 9) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '2014_内容展示')
        }
        if (swiper.activeInde == 10) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '2015_内容展示')
        }
        if (swiper.activeInde == 11) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '2017_内容展示')
        }
        if (swiper.activeInde == 12) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '2021_内容展示')
        }
        if (swiper.activeInde == 13) {
            stm_clicki('send', 'event', '品牌故事页-品牌文化', '2023_内容展示')
        }
    }
});

$('.yearsLine span').click(function () {
    var index = $(this).index();
    swiperYears.slideTo(index, 0)
})

$('.storyNav span').click(function () {
    var index = $(this).index();
    $(this).addClass('on').siblings().removeClass('on')

    switch (index) {
        case 0:
            $('.chapt0').show();
            $('.chapt1').hide();
            $('.chapt2').hide();
            $('.chapt3').hide();
            $('.chapt4').hide();
            break;
        case 1:
            $('.chapt0').hide();
            $('.chapt1').show();
            $('.chapt2').hide();
            $('.chapt3').hide();
            $('.chapt4').hide();
            break;
        case 2:
            $('.chapt0').hide();
            $('.chapt1').hide();
            $('.chapt2').show();
            $('.chapt3').hide();
            $('.chapt4').hide();
            break;
        case 3:
            $('.chapt0').hide();
            $('.chapt1').hide();
            $('.chapt2').hide();
            $('.chapt3').show();
            $('.chapt4').hide();
            var yearW = $('.years').width();
            $('.yearsLine span').css('width', (yearW - 60) / 14 + 'px');
            console.log(yearW)
            break;
        case 4:
            $('.chapt0').hide();
            $('.chapt1').hide();
            $('.chapt2').hide();
            $('.chapt3').hide();
            $('.chapt4').show();
            break;
    }
})

$('.loan_application').click(function () {
    var wHeight = $(window).height();
    $('body,html').scrollTop(0);
    if (wHeight > 1000) {
        $('footer').css({
            position: 'fixed',
            left: 0,
            bottom: 0
        })
    }
})

$('.backPrev').click(function () {
    $('footer').css({
        position: '',
        left: 0,
        bottom: 0
    })
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

// 新闻内页右侧切换
let newsLength = document.querySelectorAll('.listImgs .imgBox').length;
let warpp = document.querySelector('.warpp')
let newsIndex = 0;


$('.btn-next').click(function(){
    newsIndex++
    if (newsIndex > newsLength - 3) {
        newsIndex = newsLength - 3
    }
    warpp.style.transform = `translateY(${-newsIndex * 216}px)`
})
$('.btn-prev').click(function(){
    newsIndex--
    if (newsIndex < 0) {
        newsIndex = 0
    }
    
    warpp.style.transform = `translateY(${-newsIndex * 216}px)`
})

// carguide 弹窗
$('.show-pop').click(function(){
    $('.carguide-prop').show()
})
$('.carguide-prop').click(function(){
    $(this).hide()
})