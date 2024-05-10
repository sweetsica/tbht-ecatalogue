var lowresImages = $("img");
var imgObj = [];
lowresImages.each(function (i) {
  var lowres = $(this).attr("src");
  var data = { src: lowres };
  imgObj.push(data);
});

var manifest = [];
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
var isfirstVisitVintage = true;
var ms,
  isF = true;
let swiperMain = new Swiper(".pc-swiper-mainBody", {
  loop: false,
  direction: "vertical",
  speed: 1500,
  mousewheelControl: true,
  noSwiping: true,
  mousewheelReleaseOnEdges: true,
  onSlideChangeStart: function () { },
  onSlideChangeEnd: function (swiper) {
    let idx = swiper.activeIndex;

    //$(".nav li").eq(idx).addClass("active").siblings().removeClass("active");
    let navidx = idx;
    //if (navidx > 3) navidx = navidx - 1;
    $(".nav li").eq(navidx).addClass("active").siblings().removeClass("active");
    if (idx == 0) {
      $("header").removeClass("hide");
    } else {
      $("header").addClass("hide");
    }

    if (swiper.activeIndex == 0) {
    }
    if (swiper.activeIndex == 1) {
    }
    if (swiper.activeIndex == 2) {
      carSwiper.startAutoplay();
    } else {
      carSwiper.stopAutoplay();
    }
    if (swiper.activeIndex == 3) {
      $(".compare .block-title").addClass("on");
    } else {
      $(".compare .block-title").removeClass("on");
    }
    if (swiper.activeIndex == 4) {
      //$(".vintage .block-title").addClass("on");
      //if (isfirstVisitVintage) {
      gsap.to($(".vintage-thumbs .swiper-slide-active"), {
        left: "0%",
        duration: 1,
        delay: 0.6,
      });
      gsap.to($(".vintage-thumbs .swiper-slide-next"), {
        left: "0%",
        duration: 1,
        delay: 0.7,
      });
      gsap.to($($(".vintage-thumbs .swiper-slide-next")).next(), {
        left: "0%",
        duration: 1,
        delay: 0.8,
      });
      setTimeout(function () {
        $(".thumbs-head").addClass("on");
      }, 1000);

      //isfirstVisitVintage = false;
      //}
    } else {
      //$(".vintage .block-title").removeClass("on");
      gsap.to($(".vintage-thumbs .swiper-slide-active"), {
        left: "100%",
        duration: 0,
      });
      gsap.to($(".vintage-thumbs .swiper-slide-next"), {
        left: "100%",
        duration: 0,
      });
      gsap.to($($(".vintage-thumbs .swiper-slide-next")).next(), {
        left: "100%",
        duration: 0,
      });
      $(".thumbs-head").removeClass("on");
    }
    if (swiper.activeIndex == 5) {
    }
    if (swiper.activeIndex == 7) {
      $(".slideP4-1 .block-title").addClass("on");
      //$("#wapper .nav").addClass("style2");
    } else {
      $(".slideP4-1 .block-title").removeClass("on");
    }
    if (swiper.activeIndex == 8) {
      $(".slideP4-2 .block-title").addClass("on");
      //$("#wapper .nav").addClass("style2");
      // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '车型美图【9】-展示', '宏光MINI EV-展示');
    } else {
      $(".slideP4-2 .block-title").removeClass("on");
    }
    if (swiper.activeIndex == 9) {
      $(".slideP4-3 .block-title").addClass("on");
      // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '参数配置【10】-展示', '宏光MINI EV-展示');
    } else {
      $(".slideP4-3 .block-title").removeClass("on");
    }
    if (swiper.activeIndex == 10) {
      $(".slideP4-4 .block-title").addClass("on");
      // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '参数配置【10】-展示', '宏光MINI EV-展示');
    } else {
      $(".slideP4-4 .block-title").removeClass("on");
    }
    if (swiper.activeIndex == 11) {
      $(".slideP4-5 .block-title").addClass("on");
      // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '参数配置【10】-展示', '宏光MINI EV-展示');
    } else {
      $(".slideP4-5 .block-title").removeClass("on");
    }
    if (swiper.activeIndex == 12) {
      $(".slideP4-6 .block-title").addClass("on");
      // stm_clicki('send', 'event', '宏光MINI EV马卡龙车型页', '参数配置【10】-展示', '宏光MINI EV-展示');
    } else {
      $(".slideP4-6 .block-title").removeClass("on");
    }
    if (swiper.activeIndex == 14) {
      ms.refresh();
    }
  },
  onSlidePrevEnd: function (swiper) {
    var idx = swiper.activeIndex;
    // console.log(jcqPvName[idx + 1])
  },
  onSlideNextEnd: function (swiper) {
    var idx = swiper.activeIndex;
    // console.log(jcqPvName[idx - 1])
  },
});

//slide4-3 内部swiper
new Swiper(".swiper-4-3", {
  slidesPerView: 3,
  // centeredSlides: true,
  // loopedSlides: 4,
  //autoplay: 2000,
  //loop: false,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  prevButton: ".slideP4-3 .swiper-button-prev",
  nextButton: ".slideP4-3 .swiper-button-next",
});

var ms = new IScroll("#scroll1", {
  scrollbars: true,
  interactiveScrollbars: true,
  // scrollbars: 'custom',
  bounce: false,
  mouseWheel: true,
  preventDefault: false,
});

//美图
let imgNum = 17;
for (let index = 1; index <= imgNum; index++) {
  let imgCont =
    '<div class="swiper-slide slideImg-' +
    index +
    '" data-idx="' +
    index +
    '"><img src="images-pc-carstyle/binguo/202309/nicepic/' +
    index +
    '.jpg"></div>';

  $(".slideImg-main .swiper-wrapper").append(imgCont);
}
var meitu = new Swiper(".slideImg-main", {
  slidesPerView: 3,
  centeredSlides: true,
  //autoplay: 2000,
  loop: true,
  loopAdditionalSlides: 100,
  //spaceBetween: 40,
  speed: 1000,
  //grabCursor: true,
  observer: true,
  observeParents: true,
  prevButton: ".slideImg .swiper-button-prev",
  nextButton: ".slideImg .swiper-button-next",
  //pagination: ".slideImg .swiper-pagination",
  //paginationClickable: true,
  // paginationBulletRender: function (swiper, index, className) {
  //   return (
  //     '<span class="' +
  //     className +
  //     '">' +
  //     (index + 1 < 10 ? "0" + (index + 1) : index + 1) +
  //     "</span>"
  //   );
  // },
  onInit: function (swiper) {
    var html = "";
    for (var i = 0; i < 25; i++) {
      html +=
        '<span class="swiper-pagination-bullet">' +
        (i + 1 < 10 ? "0" + (i + 1) : i + 1) +
        "</span>";
    }
    $(".slideImg .swiper-pagination").html(html);
    swiper.initActiveIndex = swiper.activeIndex;
    $(".slideImg .swiper-pagination .swiper-pagination-bullet").on(
      "click",
      function () {
        swiper.slideTo(swiper.initActiveIndex + $(this).index());
        $(this)
          .addClass("swiper-pagination-bullet-active")
          .siblings()
          .removeClass("swiper-pagination-bullet-active");
        stm_clicki(
          "send",
          "event",
          "五菱缤果车型页-车型美图",
          "数字按钮-点击",
          "五菱缤果"
        );
      }
    );
    $(".slideImg .swiper-pagination .swiper-pagination-bullet:eq(0)").addClass(
      "swiper-pagination-bullet-active"
    );

    $(".slideImg .swiper-pagination .swiper-pagination-bullet:gt(9)").hide();
    swiper.range = [0, 9];
  },
  onSlideChangeStart: function (swiper) {
    var idx = swiper.realIndex;

    $(".slideImg-" + (idx + 1)).addClass("img-active");
    $(":not(.slideImg-" + (idx + 1) + ")").removeClass("img-active");
    console.log(swiper.activeIndex, swiper.realIndex);
    $(
      ".slideImg .swiper-pagination .swiper-pagination-bullet:eq(" +
      swiper.realIndex +
      ")"
    )
      .addClass("swiper-pagination-bullet-active")
      .siblings()
      .removeClass("swiper-pagination-bullet-active");

    swiper.lastRealIndex = swiper.realIndex;
  },
  onSlideChangeEnd: function (swiper) {
    var idx = swiper.realIndex;
  },
});
$(".controls .swiper-button-prev").on("click", function (e, isFromImg) {
  var idx = meitu.realIndex;
  if (idx == meitu.range[0] - 1 || idx == 24) {
    if (idx > 14) {
      $(".slideImg .swiper-pagination .swiper-pagination-bullet:lt(15)").hide();
      $(".slideImg .swiper-pagination .swiper-pagination-bullet:gt(14)").show();
      meitu.range = [15, 24];
    } else {
      $(".slideImg .swiper-pagination .swiper-pagination-bullet").each(
        function (index, item) {
          if (index < idx || index > idx + 9) {
            $(item).hide();
          } else {
            $(item).show();
          }
        }
      );
      meitu.range = [idx, idx + 9];
    }
  }
  if (!isFromImg) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型美图",
      "左按钮-点击",
      "五菱缤果"
    );
  }
});
$(".controls .swiper-button-next").on("click", function (e, isFromImg) {
  var idx = meitu.realIndex;
  if (idx == meitu.range[1] + 1 || idx == 0) {
    if (idx < 10) {
      $(".slideImg .swiper-pagination .swiper-pagination-bullet:gt(9)").hide();
      $(".slideImg .swiper-pagination .swiper-pagination-bullet:lt(10)").show();
      meitu.range = [0, 9];
    } else {
      $(".slideImg .swiper-pagination .swiper-pagination-bullet").each(
        function (index, item) {
          if (index < idx - 9 || index > idx) {
            $(item).hide();
          } else {
            $(item).show();
          }
        }
      );
      meitu.range = [idx - 9, idx];
    }
  }
  if (!isFromImg) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型美图",
      "右按钮-点击",
      "五菱缤果"
    );
  }
});
$("body").on("click", ".slideImg-main .swiper-slide-active img", function () {
  $(".slideImg-big").show();
  $(".slideImg-big .img").attr("src", $(this).attr("src"));
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-车型美图",
    "图片-点击",
    "五菱缤果"
  );
});
$("body").on("click", ".slideImg-main .swiper-slide-prev img", function () {
  //var idx = $(this).parent().data("idx");
  meitu.slidePrev();
  $(".controls .swiper-button-prev").trigger("click", 1);
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-车型美图",
    "图片-点击",
    "五菱缤果"
  );
});
$("body").on("click", ".slideImg-main .swiper-slide-next img", function () {
  //var idx = $(this).parent().data("idx");
  meitu.slideNext();
  $(".controls .swiper-button-next").trigger("click", 1);
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-车型美图",
    "图片-点击",
    "五菱缤果"
  );
});

$(".slideImg-big .btn-back").on("click", function () {
  $(".slideImg-big").hide();
});

var tryImgNum = 0;
var tryTimer;

function tryChange() {
  clearInterval(tryTimer);
  tryTimer = setInterval(function () {
    tryImgNum++;

    if (tryImgNum > 1) {
      tryImgNum = 0;
    }
    $(".slideTry .bom span")
      .eq(tryImgNum)
      .addClass("on")
      .siblings()
      .removeClass("on");
    $(".slideTry .bg")
      .eq(tryImgNum)
      .addClass("on")
      .siblings(".bg")
      .removeClass("on");
  }, 3000);
}

tryChange();

$(".slideTry .bom span").click(function () {
  clearInterval(tryTimer);
  var index = $(this).index();
  tryImgNum = index;
  $(this).addClass("on").siblings().removeClass("on");
  $(".slideTry .bg")
    .eq(tryImgNum)
    .addClass("on")
    .siblings(".bg")
    .removeClass("on");
});

$(".top").on("click", function () {
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-车型页底部",
    "Top按钮-点击",
    "五菱缤果"
  );

  swiperMain.slideTo(0, 0);
  $("#wapper .nav").removeClass("style2");
});
$(".nav li").on("click", function () {
  //let idx = $(this).index();
  let idx = $(this).data().idx;

  if (idx == 0) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "车型首页-点击",
      "五菱缤果"
    );
  }
  if (idx == 1) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "摩登影像-点击",
      "五菱缤果"
    );
  }
  if (idx == 2) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "摩登四色-点击",
      "五菱缤果"
    );
  }
  if (idx == 3) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "优雅内饰-点击",
      "五菱缤果"
    );
  }
  if (idx == 4) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "流动美学-点击",
      "五菱缤果"
    );
  }
  if (idx == 5) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "上市政策-点击",
      "五菱缤果"
    );
  }
  if (idx == 6) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "预约试驾-点击",
      "五菱缤果"
    );
  }
  if (idx == 7) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "复古美学-点击",
      "五菱缤果"
    );
  }
  if (idx == 8) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "越级空间-点击",
      "五菱缤果"
    );
  }
  if (idx == 9) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "智感驾乘-点击",
      "五菱缤果"
    );
  }
  if (idx == 10) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "可靠安全-点击",
      "五菱缤果"
    );
  }
  if (idx == 11) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "出色能耗-点击",
      "五菱缤果"
    );
  }
  if (idx == 12) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "贴心服务-点击",
      "五菱缤果"
    );
  }
  if (idx == 13) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "车型美图-点击",
      "五菱缤果"
    );
  }
  if (idx == 14) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-右侧导航栏",
      "车型配置-点击",
      "五菱缤果"
    );
  }
  if (idx == 13 || idx == 14) {
    $("#wapper .nav").addClass("style2");
  } else {
    $("#wapper .nav").removeClass("style2");
  }

  if (Math.abs(swiperMain.activeIndex - idx) == 1) {
    swiperMain.slideTo(idx);
  } else {
    swiperMain.slideTo(idx, 0);
  }

  if (moreBoxNum != "") {
    $(".slideP4-" + moreBoxNum).removeClass("more swiper-no-swiping");
    $(".slideP4-" + moreBoxNum)
      .find(".slideP4-more")
      .show();
    $(".slideP4-" + moreBoxNum)
      .find("on")
      .removeClass("on");
    $(".slideTestDrive").removeClass("more swiper-no-swiping");
    $(".slideTestDrive").find(".finance-more").show();
    $(".loan_step1_form").hide();
    swiperMain.enableMousewheelControl();
    $("footer,.top").show();
  }
});

let moreBoxNum = "";

$(".slideP4-hide").on("click", function () {
  let num = $(this).attr("more-num");
  $("#wapper .nav").show();
  $(".slideP4-" + num).removeClass("more swiper-no-swiping");
  $(".slideP4-" + num)
    .find(".slideP4-more")
    .show();
  // $(".slideP4-" + num)
  //   .find("on")
  //   .removeClass("on");
  $(this).siblings(".box").children().removeClass("on");
  $(".slideP4-" + num + " .block-title").addClass("on");
  moreBoxNum = "";
  swiperMain.enableMousewheelControl();
  $("footer,.top").show();
  if (num == 1) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（复古美学）",
      "收起按钮-点击",
      "五菱缤果"
    );
  }
  if (num == 2) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（越级空间）",
      "收起按钮-点击",
      "五菱缤果"
    );
  }
  if (num == 3) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（智感驾乘）",
      "收起按钮-点击",
      "五菱缤果"
    );
  }
  if (num == 4) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（可靠安全）",
      "收起按钮-点击",
      "五菱缤果"
    );
  }
});

var vidIndex;
$(".btn-video-play").on("click", function () {
  var idx = $(".slideHome .btn-video-play").index($(this));
  vidIndex = idx;
  $("#video").attr("src", "binguovideos/202309/v" + (idx + 1) + ".mp4");
  $(".video-wrap").fadeIn();
  $("#video")[0].play();
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-车型视频",
    "播放视频按钮-点击",
    "五菱缤果"
  );
});

$(".video-wrap .close").on("click", function () {
  $(".video-wrap").fadeOut();
  $("#video")[0].pause();
  $("#video").attr("src", "");
  // $('.slideVideo').removeClass('swiper-no-swiping')
  // swiperMain.enableMousewheelControl();
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
  // ms.refresh();
});

$(".checkbox").on("click", function () {
  var that = $(this).parent();
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-留资",
    "隐私条款勾选-点击",
    "五菱缤果"
  );
  if (that.hasClass("active")) {
    that.removeClass("active");
  } else {
    that.addClass("active");
  }
});

$(".vid-next").click(function () {
  vidIndex++;
  if (vidIndex >= 3) {
    vidIndex = 0;
  }
  $("#video").attr("src", "binguovideos/202309/v" + (vidIndex + 1) + ".mp4");
  setTimeout(function () {
    $("#video")[0].play();
  }, 100);
});

$(".vid-prev").click(function () {
  vidIndex--;
  if (vidIndex < 0) {
    vidIndex = 2;
  }
  $("#video").attr("src", "binguovideos/202309/v" + (vidIndex + 1) + ".mp4");
  setTimeout(function () {
    $("#video")[0].play();
  }, 100);
});

var winHeight = $(window).height();

$(".slideP4-1").scroll(function () {
  var a = $(".slideP4-1").scrollTop();
  // if (a > winHeight + 100) {
  //   $(".slideP4-1 .more-warp .box .title1").addClass("on");
  // }
  if (a > winHeight + $(".slideP4-1 .anchor1").position().top) {
    $(".slideP4-1 .more-warp .box .title1").addClass("on");
    $(".slideP4-1 .more-warp .box .title2").addClass("on");
  }
  if (a > winHeight + $(".slideP4-1 .anchor2").position().top - 400) {
    $(".slideP4-1 .more-warp .box .title3").addClass("on");
  }
  if (a > winHeight + $(".slideP4-1 .anchor2").position().top + 200) {
    $(".slideP4-1 .more-warp .box .title4").addClass("on");
  }
  if (a > winHeight + $(".slideP4-1 .anchor3").position().top - 20) {
    $(".slideP4-1 .more-warp .box .title5").addClass("on");
  }
  if (a > winHeight + $(".slideP4-1 .anchor3").position().top + 40) {
    $(".slideP4-1 .more-warp .box .title6").addClass("on");
    $(".slideP4-1 .more-warp .box .title7").addClass("on");
  }
});

$(".slideP4-2").scroll(function () {
  var a = $(".slideP4-2").scrollTop();
  if (a > winHeight + 100) {
    $(".slideP4-2 .more-warp .box .title1").addClass("on");
  }

  if (a > winHeight + $(".slideP4-2 .anchor2").position().top - 400) {
    $(".slideP4-2 .more-warp .box .title2").addClass("on");
  }
  if (a > winHeight + $(".slideP4-2 .anchor3").position().top) {
    $(".slideP4-2 .more-warp .box .title3").addClass("on");
  }
  if (a > winHeight + $(".slideP4-2 .anchor4").position().top) {
    $(".slideP4-2 .more-warp .box .title4").addClass("on");
  }
});

$(".slideP4-3").scroll(function () {
  var a = $(".slideP4-3").scrollTop();
  if (a > winHeight + $(".slideP4-3 .anchor1").position().top) {
    $(".slideP4-3 .more-warp .box .title1").addClass("on");
  }
  if (a > winHeight + $(".slideP4-3 .anchor2").position().top - 300) {
    $(".slideP4-3 .more-warp .box .title2").addClass("on");
    $(".slideP4-3 .more-warp .box .title22").addClass("on");
  }
  if (a > winHeight + $(".slideP4-3 .anchor3").position().top - 100) {
    $(".slideP4-3 .more-warp .box .title3").addClass("on");
    $(".slideP4-3 .more-warp .box .title4").addClass("on");
  }
  if (a > winHeight + $(".slideP4-3 .anchor4").position().top - 200) {
    $(".slideP4-3 .more-warp .box .title5").addClass("on");
  }
  if (a > winHeight + $(".slideP4-3 .anchor5").position().top - 200) {
    $(".slideP4-3 .more-warp .box .title6").addClass("on");
  }
});

$(".slideP4-4").scroll(function () {
  var a = $(".slideP4-4").scrollTop();
  if (a > winHeight + $(".slideP4-4 .anchor3").position().top) {
    $(".slideP4-4 .more-warp .box .title1").addClass("on");
  }
  if (a > winHeight + $(".slideP4-4 .anchor3").position().top + 200) {
    $(".slideP4-4 .more-warp .box .title2").addClass("on");
    $(".slideP4-4 .more-warp .box .title3").addClass("on");
    $(".slideP4-4 .more-warp .box .title4").addClass("on");
  }
  if (a > winHeight + $(".slideP4-4 .anchor1").position().top - 300) {
    $(".slideP4-4 .more-warp .box .title5").addClass("on");
    // $(".slideP4-4 .more-warp .box .title51").addClass("on");
  }
  if (a > winHeight + $(".slideP4-4 .anchor2").position().top - 400) {
    $(".slideP4-4 .more-warp .box .title6").addClass("on");
  }
});

$(".slideP4-5").scroll(function () {
  var a = $(".slideP4-5").scrollTop();
  if (a > winHeight + $(".slideP4-5 .anchor1").position().top - 200) {
    $(".slideP4-5 .more-warp .box .title1").addClass("on");
  }
  if (a > winHeight + $(".slideP4-5 .anchor2").position().top - 200) {
    $(".slideP4-5 .more-warp .box .title2").addClass("on");
  }
  if (a > winHeight + $(".slideP4-5 .anchor3").position().top - 200) {
    $(".slideP4-5 .more-warp .box .title3").addClass("on");
  }
});

$(".rule_btn").on("click", function () {
  $(".popUp-wrap").fadeIn();
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-留资",
    "隐私条款-点击",
    "五菱缤果"
  );
});
$(".popUp-wrap .close").on("click", function () {
  $(".popUp-wrap").fadeOut();
});

$(".llb").click(function () {
  window.location.href =
    "https://tbht.vn/lien-he";
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-上市政策",
    "LING Club APP按钮-点击",
    "五菱缤果"
  );
});
$(".tmall").click(function () {
  window.location.href = "https://detail.tmall.com/item.htm?id=701277641503";

  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-上市政策",
    "五菱天猫旗舰店按钮-点击",
    "五菱缤果"
  );
});

$(".popUp-wrap .close").on("click", function () {
  $(".popUp-wrap").fadeOut();
});

// ------------------
$("header .logo").click(function () {
  var pageTitle = $(document).attr("title");

  // sensors.quick("autoTrack", {
  //   class_code: "web_pc_page_browse",
  //   class_name: "Web 页面浏览",
  //   event_code: "click_home_page_wuling_logo",
  //   event_name: "五菱logo点击",
  //   event_page: "五菱官网" + pageTitle,
  //   event_position: "五菱logo",
  //   event_type: "",
  //   event_link_url: window.location.href.split("?")[0],
  //   sub_module: "wuling_new_pc",
  // });
  stm_clicki("send", "event", pageTitle + "-顶部导航栏", "五菱logo-点击");
  //_jcq.push(["_track", "LCNanoEV_top_banner", { content: "五菱logo" }]);
});

$("header .link.link1").click(function () {
  var pageTitle = $(document).attr("title");

  // sensors.quick("autoTrack", {
  //   class_code: "web_pc_page_browse",
  //   class_name: "Web 页面浏览",
  //   event_code: "click_home_page_menu_vsn",
  //   event_name: "菜单栏-车型点击",
  //   event_page: "五菱官网" + pageTitle,
  //   event_position: "菜单栏-车型点击",
  //   event_type: "",
  //   event_link_url: window.location.href.split("?")[0],
  //   sub_module: "wuling_new_pc",
  // });
  stm_clicki("send", "event", pageTitle + "-顶部导航栏", "车型-点击");
  //_jcq.push(["_track", "LCNanoEV_top_banner", { content: "车型" }]);
});

$("header .link.link2").click(function () {
  var pageTitle = $(document).attr("title");

  // sensors.quick("autoTrack", {
  //   class_code: "web_pc_page_browse",
  //   class_name: "Web 页面浏览",
  //   event_code: "click_home_page_menu_guide",
  //   event_name: "菜单栏-购车指南点击",
  //   event_page: "五菱官网" + pageTitle,
  //   event_position: "菜单栏-购车指南点击",
  //   event_type: "",
  //   event_link_url: window.location.href.split("?")[0],
  //   sub_module: "wuling_new_pc",
  // });
  stm_clicki("send", "event", pageTitle + "-顶部导航栏", "购车指南-点击");
  //_jcq.push(["_track", "LCNanoEV_top_banner", { content: "购车指南" }]);
});

$("header .link.link3").click(function () {
  var pageTitle = $(document).attr("title");

  // sensors.quick("autoTrack", {
  //   class_code: "web_pc_page_browse",
  //   class_name: "Web 页面浏览",
  //   event_code: "click_home_page_menu_story",
  //   event_name: "菜单栏-品牌故事点击",
  //   event_page: "五菱官网" + pageTitle,
  //   event_position: "菜单栏-品牌故事点击",
  //   event_type: "",
  //   event_link_url: window.location.href.split("?")[0],
  //   sub_module: "wuling_new_pc",
  // });
  stm_clicki("send", "event", pageTitle + "-顶部导航栏", "品牌故事-点击");
  //_jcq.push(["_track", "LCNanoEV_top_banner", { content: "品牌故事" }]);
});

$(".btnK").click(function () {
  var pageTitle = $(document).attr("title");

  // sensors.quick("autoTrack", {
  //   class_code: "web_pc_page_browse",
  //   class_name: "Web 页面浏览",
  //   event_code: "click_home_page_server_online",
  //   event_name: "菜单栏-在线客服点击",
  //   event_page: "五菱官网" + pageTitle,
  //   event_position: "菜单栏-在线客服点击",
  //   event_type: "",
  //   event_link_url: window.location.href.split("?")[0],
  //   sub_module: "wuling_new_pc",
  // });
  stm_clicki("send", "event", pageTitle + "-顶部导航栏", "在线客服-点击");
  //_jcq.push(["_track", "LCNanoEV_top_banner", { content: "在线客服" }]);
});

$(".btnY").click(function () {
  var pageTitle = $(document).attr("title");

  // sensors.quick("autoTrack", {
  //   class_code: "web_pc_page_browse",
  //   class_name: "Web 页面浏览",
  //   event_code: "click_home_page_reserve",
  //   event_name: "菜单栏-预约试驾点击",
  //   event_page: "五菱官网" + pageTitle,
  //   event_position: "菜单栏-预约试驾点击",
  //   event_type: "",
  //   event_link_url: window.location.href.split("?")[0],
  //   sub_module: "wuling_new_pc",
  // });
  stm_clicki("send", "event", pageTitle + "-顶部导航栏", "预约试驾-点击");
  //_jcq.push(["_track", "LCNanoEV_top_banner", { content: "预约试驾" }]);
});

$(".law").click(function () {
  var pageTitle = $(document).attr("title");

  // sensors.quick("autoTrack", {
  //   class_code: "web_pc_page_browse",
  //   class_name: "Web 页面浏览",
  //   event_code: "click_home_page_laws",
  //   event_name: "隐私法律",
  //   event_page: "五菱官网" + pageTitle,
  //   event_position: "隐私法律",
  //   event_type: "",
  //   event_link_url: window.location.href.split("?")[0],
  //   sub_module: "wuling_new_pc",
  // });
  stm_clicki("send", "event", pageTitle + "-底部", "隐私法律-点击");
  //_jcq.push(["_track", "LCNanoEV_dibu", { content: "隐私法律" }]);
});

$(".lk").click(function () {
  var pageTitle = $(document).attr("title");

  // sensors.quick("autoTrack", {
  //   class_code: "web_pc_page_browse",
  //   class_name: "Web 页面浏览",
  //   event_code: "click_home_page_comprehend",
  //   event_name: "前往了解宝骏汽车",
  //   event_page: "五菱官网" + pageTitle,
  //   event_position: "前往了解宝骏汽车",
  //   event_type: "",
  //   event_link_url: window.location.href.split("?")[0],
  //   sub_module: "wuling_new_pc",
  // });
  stm_clicki("send", "event", pageTitle + "-底部", "前往了解宝骏汽车-点击");
  //_jcq.push(["_track", "LCNanoEV_dibu", { content: "前往了解宝骏汽车" }]);
});

$("footer p")
  .eq(3)
  .click(function () {
    var pageTitle = $(document).attr("title");

    // sensors.quick("autoTrack", {
    //   class_code: "web_pc_page_browse",
    //   class_name: "Web 页面浏览",
    //   event_code: "click_home_page_icp",
    //   event_name: "ICP备案号",
    //   event_page: "五菱官网" + pageTitle,
    //   event_position: "ICP备案号",
    //   event_type: "",
    //   event_link_url: window.location.href.split("?")[0],
    //   sub_module: "wuling_new_pc",
    // });
    stm_clicki("send", "event", pageTitle + "-底部", "ICP备案号-点击");
    //_jcq.push(["_track", "LCNanoEV_dibu", { content: "ICP备案号" }]);
  });
$("footer p")
  .eq(4)
  .click(function () {
    var pageTitle = $(document).attr("title");

    // sensors.quick("autoTrack", {
    //   class_code: "web_pc_page_browse",
    //   class_name: "Web 页面浏览",
    //   event_code: "click_home_page_police",
    //   event_name: "公安部备案号",
    //   event_page: "五菱官网" + pageTitle,
    //   event_position: "公安部备案号",
    //   event_type: "",
    //   event_link_url: window.location.href.split("?")[0],
    //   sub_module: "wuling_new_pc",
    // });
    stm_clicki("send", "event", pageTitle + "-底部", "公安部备案号-点击");
    //_jcq.push(["_track", "LCNanoEV_dibu", { content: "公安部备案号" }]);
  });

var carSwiper = new Swiper(".car-main", {
  loop: true,
  direction: "horizontal",
  // observer: true,
  // observeParents: true,
  nextButton: ".n1",
  prevButton: ".p1",
  speed: 2000,
  pagination: ".swiper-pagination",
  autoplay: 3000,
  autoplayDisableOnInteraction: false,
  onInit: function () {
    $(".car-1").addClass("car-active");
  },
  onSlideChangeStart: function (swiper) {
    var idx = swiper.realIndex;
    $(".car-main-bg-top").siblings().removeClass("on");
    $(".car-main-bg").siblings().removeClass("on").eq(idx).addClass("on");
    setTimeout(function () {
      $(".car-main-bg-top").eq(idx).addClass("on");
      // $(".color-txt").attr(
      //   "src",
      //   "images-pc-carstyle/binguo/color-car-txt-" + (idx + 1) + ".png"
      // );
      // $(".color-price").attr(
      //   "src",
      //   "images-pc-carstyle/binguo/color-car-price-" + (idx + 1) + ".png"
      // );
      $(".color-select").siblings().removeClass("on").eq(idx).addClass("on");
      $(".color-type")[0].className = "color-type color-type-" + (idx + 1);
    }, 800);
    $(".car-slide.car-" + (idx + 1)).addClass("car-active");
    $(".car-slide:not(.car-" + (idx + 1) + ")").removeClass("car-active");
  },
  onSlideChangeEnd: function (swiper) {
    var idx = swiper.realIndex;
  },
});
$(".car-main .p1").on("click", function () {
  carSwiper.stopAutoplay();
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-摩登四色",
    "左按钮-点击",
    "五菱缤果"
  );
});
$(".car-main .n1").on("click", function () {
  carSwiper.stopAutoplay();
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-摩登四色",
    "右按钮-点击",
    "五菱缤果"
  );
});

$(".color-select .color-b").on("click", function () {
  carSwiper.stopAutoplay();
  var idx = $(this).data("idx");
  var wheelIdx = $(this).siblings(".color-wheel.on").data("idx");
  wheelIdx = 1;
  $(this).siblings(".color-b").removeClass("on").end().addClass("on");
  $(this)
    .siblings(".color-bt")
    .removeClass("on")
    .eq(idx - 1)
    .addClass("on");
  $(".car-main .car-" + $(this).data().id + " .car-img").attr(
    "src",
    "images-pc-carstyle/binguo/color-car-" +
    $(this).data().id +
    "-" +
    idx +
    "-" +
    wheelIdx +
    ".png"
  );
  var did = $(this).data().id;
  var didx = $(this).data().idx;
  if (did == 1) {
    if (didx == 1) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "奶咖白拼黑顶-点击",
        "五菱缤果"
      );
    }
    if (didx == 2) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "奶咖白-点击",
        "五菱缤果"
      );
    }
  }
  if (did == 2) {
    if (didx == 1) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "极光绿拼黑顶-点击",
        "五菱缤果"
      );
    }
    if (didx == 2) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "极光绿-点击",
        "五菱缤果"
      );
    }
  }
  if (did == 3) {
    if (didx == 1) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "冰莓粉拼白顶-点击",
        "五菱缤果"
      );
    }
    if (didx == 2) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "冰莓粉-点击",
        "五菱缤果"
      );
    }
  }
  if (did == 4) {
    if (didx == 1) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "耀夜黑-点击",
        "五菱缤果"
      );
    }
  }
});

$(".color-select .color-wheel").on("click", function () {
  carSwiper.stopAutoplay();
  var idx = $(this).data("idx");
  var colorIdx = $(this).siblings(".color-b.on").data("idx");
  $(this).siblings(".color-wheel").removeClass("on").end().addClass("on");
  //$(this).siblings(".color-bt").removeClass("on").eq(idx).addClass("on");
  $(".car-main .car-" + $(this).data().id + " .car-img").attr(
    "src",
    "images-pc-carstyle/binguo/color-car-" +
    $(this).data().id +
    "-" +
    colorIdx +
    "-" +
    idx +
    ".png"
  );
  var did = $(this).data().id;
  var didx = $(this).data().idx;
  if (did == 1) {
    if (didx == 1) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "奶咖白LV0轮毂-点击",
        "五菱缤果"
      );
    }
    if (didx == 2) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "奶咖白LV1轮毂-点击",
        "五菱缤果"
      );
    }
  }
  if (did == 2) {
    if (didx == 1) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "极光绿LV0轮毂-点击",
        "五菱缤果"
      );
    }
    if (didx == 2) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "极光绿LV1轮毂-点击",
        "五菱缤果"
      );
    }
  }
  if (did == 3) {
    if (didx == 1) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "冰莓粉LV0轮毂-点击",
        "五菱缤果"
      );
    }
    if (didx == 2) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "冰莓粉LV1轮毂-点击",
        "五菱缤果"
      );
    }
  }
  if (did == 4) {
    if (didx == 1) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "耀夜黑LV0轮毂-点击",
        "五菱缤果"
      );
    }
    if (didx == 2) {
      stm_clicki(
        "send",
        "event",
        "五菱缤果车型页-摩登四色",
        "耀夜黑LV1轮毂-点击",
        "五菱缤果"
      );
    }
  }
});

gsap.to($(".vintage .v-b-img").eq(0), {
  opacity: 1,
  scale: 1,
  duration: 2,
});
var vintageCount = 5;
var vintageAnimatingIdx = 0; //当前动画大图
var vintageThumbsPrevIdx = 0; //fadeout的元素idx
var vintageAnimateFinish = true; //大图动画完成
var vintageNumAnimateFinish = true; //数字动画完成
var vintageSwipe = new Swiper(".vintage-thumbs", {
  //loop: true,
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  speed: 1000,
  // nextButton: ".n2",
  // prevButton: ".p2",
  onInit: function () {
    gsap.to($(".vintage-thumbs .swiper-slide-active"), {
      left: "100%",
      duration: 0,
    });
    gsap.to($(".vintage-thumbs .swiper-slide-next"), {
      left: "100%",
      duration: 0,
    });
    gsap.to($($(".vintage-thumbs .swiper-slide-next")).next(), {
      left: "100%",
      duration: 0,
    });
  },
  onSlideChangeStart: function (swiper) {
    if (swiperMain.activeIndex != 4) return;
  },
  onSlideChangeEnd: function (swiper) { },
});

$(".vintage-thumbs .img").on("click", function () {
  if (!vintageAnimateFinish || !vintageNumAnimateFinish) return;
  var idx = $(".vintage-thumbs .img").index($(this));
  vintageAnimatingIdx = idx;
  console.log(vintageAnimatingIdx);
  if (idx == vintageThumbsPrevIdx) return; //重复点击当前小图

  vintageBigImgAnimate(idx);

  if (vintageAnimatingIdx == 0) {
    vintageSwipe.slideTo(0);
  } else if (vintageAnimatingIdx == vintageCount - 1) {
    vintageSwipe.slideTo(vintageCount - 1);
  } else {
    vintageSwipe.slideTo(vintageAnimatingIdx - 1);
  }
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-流动美学",
    "小图片-点击",
    "五菱缤果"
  );
});
$(".vintage .prev").on("click", function () {
  if (!vintageAnimateFinish || !vintageNumAnimateFinish) return;
  vintagePrev();
  if (vintageAnimatingIdx >= vintageCount - 1) {
    //回到最后一个
    vintageSwipe.slideTo(vintageCount - 1);
  }
  if (vintageAnimatingIdx < vintageCount - 2) {
    //往前
    vintageSwipe.slidePrev();
  }
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-流动美学",
    "内饰选择左按钮-点击",
    "五菱缤果"
  );
  //vintageSwipe.slidePrev();
});
$(".vintage .next").on("click", function () {
  if (!vintageAnimateFinish || !vintageNumAnimateFinish) return;
  vintageNext();
  if (vintageAnimatingIdx == 0) {
    //回到第一个
    vintageSwipe.slideTo(0);
  }
  if (vintageAnimatingIdx > 1) {
    //往后
    vintageSwipe.slideNext();
  }
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-流动美学",
    "内饰选择右按钮-点击",
    "五菱缤果"
  );

  //vintageSwipe.slideNext();
});
function vintagePrev() {
  if (vintageAnimatingIdx == 0) vintageAnimatingIdx = vintageCount - 1;
  else {
    vintageAnimatingIdx = vintageAnimatingIdx - 1;
  }
  var idx = vintageAnimatingIdx;

  vintageBigImgAnimate(idx);
}
function vintageNext() {
  if (vintageAnimatingIdx == vintageCount - 1) vintageAnimatingIdx = 0;
  else {
    vintageAnimatingIdx = vintageAnimatingIdx + 1;
  }
  var idx = vintageAnimatingIdx;
  console.log(idx);
  vintageBigImgAnimate(idx);
}
function vintageBigImgAnimate(idx) {
  //$(".vintage .block-title").removeClass("on");
  vintageNumAnimateFinish = false;
  // setTimeout(function () {
  //   $(".vintage .block-title").addClass("on");
  // }, 500);
  $(".thumbs .nums .on").addClass("pass");

  $(".thumbs .nums div:not('.on')").html(
    "<span>0</span><span>" +
    (idx + 1) +
    "</span><span>/</span><span>0</span><span>" +
    vintageCount +
    "</span>"
  );
  setTimeout(function () {
    $(".thumbs .nums div:not('.on')").addClass("on");
  }, 10);

  setTimeout(function () {
    $(".thumbs .nums .pass").html("");
    $(".thumbs .nums .pass").removeClass("on").removeClass("pass");
    vintageNumAnimateFinish = true;
  }, 1000);

  $(".vintage-thumbs .swiper-slide:eq(" + idx + ")")
    .addClass("on")
    .siblings()
    .removeClass("on");
  vintageAnimateFinish = false;
  gsap.to($(".vintage .v-b-img").eq(idx), {
    opacity: 1,
    scale: 1.1,
    duration: 1.5,
    ease: "ease-in",
    onComplete: function () {
      vintageAnimateFinish = true;
    },
  });
  var prevEl = $(".vintage .v-b-img").eq(vintageThumbsPrevIdx);
  gsap.to(prevEl, {
    opacity: 0,
    scale: 2,
    webkitFilter: "blur(3px)",
    duration: 0.5,
    ease: "ease-out",
    onComplete: function () {
      gsap.to(prevEl, {
        opacity: 0,
        scale: 1,
        webkitFilter: "blur(0)",
        duration: 0,
      });
    },
  });
  vintageThumbsPrevIdx = idx;
}

$(".slideP4-1 .bottom-cont .sub-txt").on("click", function () {
  var idx = $(".slideP4-1 .bottom-cont .sub-txt").index($(this));
  $("#wapper .nav").hide();

  let num = $(this).attr("more-num");
  let part = $(this).data("part");
  moreBoxNum = num;
  $(".slideP4-" + num).addClass("more swiper-no-swiping");
  swiperMain.disableMousewheelControl();
  $(".slideP4-" + num + " .on").removeClass("on");
  let element = $(".slideP4-" + num + " .more-warp");
  $(".slideP4-1 .more-warp .anchor" + part)[0].scrollIntoView();

  if (idx == 0) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（复古美学）",
      "LED大灯按钮-点击",
      "五菱缤果"
    );
  } else if (idx == 1) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（复古美学）",
      "LED尾灯按钮-点击",
      "五菱缤果"
    );
  } else if (idx == 2) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（复古美学）",
      "高清大联屏按钮-点击",
      "五菱缤果"
    );
  } else if (idx == 3) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（复古美学）",
      "浮岛中控按钮-点击",
      "五菱缤果"
    );
  }
});

$(".slideP4-2 .bottom-cont .sub-txt").on("click", function () {
  var idx = $(".slideP4-2 .bottom-cont .sub-txt").index($(this));
  $("#wapper .nav").hide();

  let num = $(this).attr("more-num");
  let part = $(this).data("part");
  moreBoxNum = num;
  $(".slideP4-" + num).addClass("more swiper-no-swiping");
  swiperMain.disableMousewheelControl();
  $(".slideP4-" + num + " .on").removeClass("on");
  let element = $(".slideP4-" + num + " .more-warp");
  if (part == 2) {
    var top =
      //$(window).height() + $(".slideP4-2 .more-warp .anchor2").position().top;
      //$(".slideP4-2").animate({ scrollTop: top }, 1500);
      $(".slideP4-2 .more-warp .anchor2")[0].scrollIntoView();
  } else {
    //$(".slideP4-2").animate({ scrollTop: $(window).height() }, 500);
    element[0].scrollIntoView();
  }
  if (idx == 0) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（越级空间）",
      "轴距按钮-点击",
      "五菱缤果"
    );
  } else if (idx == 1) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（越级空间）",
      "后备箱按钮-点击",
      "五菱缤果"
    );
  }
});

$(".slideP4-3 .bottom-cont .sub-txt").on("click", function () {
  var idx = $(".slideP4-3 .bottom-cont .sub-txt").index($(this));
  $("#wapper .nav").hide();

  let num = $(this).attr("more-num");
  let part = $(this).data("part");
  moreBoxNum = num;
  $(".slideP4-" + num).addClass("more swiper-no-swiping");
  swiperMain.disableMousewheelControl();
  $(".slideP4-" + num + " .on").removeClass("on");
  let element = $(".slideP4-" + num + " .more-warp");
  if ($(".slideP4-3 .more-warp .anchor" + part).length) {
    $(".slideP4-3 .more-warp .anchor" + part)[0].scrollIntoView();
  }
  // if (part == 4) {
  //   $(".slideP4-3").scrollTop($(".slideP4-3 .fullSubImg").height());
  // }
  $("footer,.top").hide();
  if (idx == 0) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（智感驾乘）",
      "智能系统按钮-点击",
      "五菱缤果"
    );
  } else if (idx == 1) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（智感驾乘）",
      "远程车控按钮-点击",
      "五菱缤果"
    );
  } else if (idx == 2) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（智感驾乘）",
      "浮岛中控按钮-点击",
      "五菱缤果"
    );
  }
});

$(".slideP4-4 .bottom-cont .sub-txt.active").on("click", function () {
  var idx = $(".slideP4-4 .bottom-cont .sub-txt").index($(this));
  $("#wapper .nav").hide();

  let num = $(this).attr("more-num");
  let part = $(this).data("part");
  moreBoxNum = num;
  $(".slideP4-" + num).addClass("more swiper-no-swiping");
  swiperMain.disableMousewheelControl();
  $(".slideP4-" + num + " .on").removeClass("on");
  let element = $(".slideP4-" + num + " .more-warp");
  if (part == 3) {
    //var top =
    //$(window).height() + $(".slideP4-4 .more-warp .anchor2").position().top;
    //$(".slideP4-4").animate({ scrollTop: top }, 1500);
    element[0].scrollIntoView();
  } else {
    //$(".slideP4-4").animate({ scrollTop: $(window).height() }, 500);
    $(".slideP4-4 .more-warp .anchor" + part)[0].scrollIntoView();
  }
  $("footer,.top").hide();
  if (idx == 0) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（可靠安全）",
      "安全气囊按钮-点击",
      "五菱缤果"
    );
  } else if (idx == 1) {
    stm_clicki(
      "send",
      "event",
      "五菱缤果车型页-车型亮点（可靠安全）",
      "超强度钢按钮-点击",
      "五菱缤果"
    );
  }
});

$(".slideP4-5 .bottom-cont .sub-txt.active").on("click", function () {
  var idx = $(".slideP4-5 .bottom-cont .sub-txt").index($(this));
  $("#wapper .nav").hide();

  let num = $(this).attr("more-num");
  let part = $(this).data("part");
  moreBoxNum = num;
  $(".slideP4-" + num).addClass("more swiper-no-swiping");
  swiperMain.disableMousewheelControl();
  $(".slideP4-" + num + " .on").removeClass("on");
  let element = $(".slideP4-" + num + " .more-warp");
  $(".slideP4-5 .more-warp .anchor" + part)[0].scrollIntoView();
  $("footer,.top").hide();
});

var compareInitPos; //初始位置
var compareCurPos = 0; //当前位置
var compareSide = ""; //鼠标在哪侧

let resetItv;
function compareReset(quick) {
  console.log("reset");
  if (quick) {
    var compareElmWidth = $(".compare").width();
    compareInitPos = compareElmWidth / 2 + 30;
    compareCurPos = compareInitPos;
    $(".compare-top").css(
      "-webkit-mask",
      "linear-gradient(300deg, transparent " + compareInitPos + "px, #fff 0)"
    );
  } else {
    if (compareSide == "center") return;
    compareSide = "center";
    //if (campareAnimating) return;
    campareAnimating = true;

    clearInterval(resetItv);
    resetItv = setInterval(function () {
      if (compareInitPos > compareCurPos) {
        compareCurPos = compareCurPos + 10;
      } else {
        compareCurPos = compareCurPos - 10;
      }

      $(".compare-top").css(
        "-webkit-mask",
        "linear-gradient(300deg, transparent " + compareCurPos + "px, #fff 0)"
      );
      if (compareInitPos == compareCurPos) {
        campareAnimating = false;
        comparefullpage = false;
        clearInterval(resetItv);
      }
    }, 5);
  }
}
compareReset(true);
var inCompareCenter = false;
var compareStartTime;

$(".compare").on("mousemove", function (e) {
  // if (campareAnimating) return;
  // if (comparefullpage) {

  // } else {
  //   if (e.originalEvent.clientX < $(this).width() / 2 - 60) {
  //     //左侧
  //     compareOpenRight();
  //   } else if (e.originalEvent.clientX > $(this).width() / 2 + 60) {
  //     compareOpenLeft();
  //   }
  // }
  //鼠标在中间附近恢复原位置;
  if (Math.abs(e.originalEvent.clientX - $(this).width() / 2) < 60) {
    //要停留一秒才操作
    console.log("在中间区域");
    //compareSide = "center";
    if (!inCompareCenter) {
      //刚从外面进来中间，计时
      compareStartTime = new Date();
      clearInterval(window.itver);
      window.itver = setInterval(function () {
        if (new Date() - compareStartTime >= 500) {
          //一秒后还在区间里
          console.log("恢复中间位置");
          comparefullpage = false;
          inCompareCenter = false;
          compareReset();
          clearInterval(window.itver);
        }
      }, 5);
    }
    inCompareCenter = true;
  } else {
    inCompareCenter = false;
    clearInterval(window.itver);
  }

  if (e.originalEvent.clientX < $(this).width() / 5) {
    //左侧1/5内触发
    compareOpenRight();
    console.log("左侧");
  } else if (e.originalEvent.clientX > $(this).width() - $(this).width() / 5) {
    //右侧1/5内触发
    compareOpenLeft();
    console.log("右侧");
  }
});

var comparefullpage = false;
var campareAnimating = false;
var itv;
$(".compare .prev").on("click", function () {
  //if (campareAnimating) return;
  //comparefullpage = true;
  compareSide = "left";
  compareOpenLeft();
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-优雅内饰",
    "浅色内饰按钮-点击",
    "五菱缤果"
  );
});
function compareOpenLeft() {
  //if (campareAnimating) return;
  campareAnimating = true;
  if (compareSide == "right") return;
  compareSide = "right";

  //当前位置展开
  clearInterval(itv);

  itv = setInterval(function () {
    if (compareInitPos * 2 - compareCurPos >= 0) {
      compareCurPos = compareCurPos + 10;
      $(".compare-top").css(
        "-webkit-mask",
        "linear-gradient(300deg, transparent " + compareCurPos + "px, #fff 0)"
      );
    } else {
      campareAnimating = false;
      comparefullpage = true;
      clearInterval(itv);
    }
  }, 5);
}
$(".compare .next").on("click", function () {
  //if (campareAnimating) return;
  //comparefullpage = true;
  compareSide = "right";
  compareOpenRight();
  stm_clicki(
    "send",
    "event",
    "五菱缤果车型页-优雅内饰",
    "深色内饰按钮-点击",
    "五菱缤果"
  );
});
function compareOpenRight() {
  //if (campareAnimating) return;
  campareAnimating = true;
  if (compareSide == "left") return;
  compareSide = "left";
  //当前位置展开
  clearInterval(itv);

  itv = setInterval(function () {
    if (compareCurPos >= 0) {
      compareCurPos = compareCurPos - 10;
      $(".compare-top").css(
        "-webkit-mask",
        "linear-gradient(300deg, transparent " + compareCurPos + "px, #fff 0)"
      );
    } else {
      campareAnimating = false;
      comparefullpage = true;
      clearInterval(itv);
    }
  }, 5);
}
