$(".video-txt").on("click", function () {
  $(".video-wrap").fadeIn();
  $("#video")[0].play();
  $(".slideVideo").addClass("swiper-no-swiping");
});

$(".video-wrap .close").on("click", function () {
  $(".video-wrap").fadeOut();
  $("#video")[0].pause();
  $(".slideVideo").removeClass("swiper-no-swiping");
});

$(".checkbox").on("click", function () {
  var that = $(this).parent();
  if (that.hasClass("active")) {
    that.removeClass("active");
  } else {
    that.addClass("active");
  }
});
$(".rule_btn").on("click", function () {
  $(".popUp-wrap").fadeIn();
  // ms2 = new IScroll('#scroll2', {
  //     scrollbars: false,
  //     scrollbars: 'custom',
  //     bounce: false,
  //     mouseWheel: true,
  //     preventDefault: false
  // });
});
$(".popUp-wrap .close").on("click", function () {
  $(".popUp-wrap").fadeOut();
});

$(".nav li").on("click", function () {
  let idx = $(this).index();

  //$(".nav li").eq(idx).addClass("active").siblings().removeClass("active");
  $("body, html").animate({ scrollTop: $(".p" + (idx + 1)).offset().top + 2 });
});
$(".top").on("click", function () {
  $("body, html").scrollTop(0);
});

$(window).scroll(function () {
  //   if ($(document).scrollTop() >= 0) {
  //     alert("滚动条已经到达顶部");
  //   }
  //   if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
  //     alert("滚动条已经到达底部");
  //   }
  getCurrentScrollId();
});
function getCurrentScrollId() {
  if ($(document).scrollTop() >= $(".p6").offset().top) {
    $(".nav-06").addClass("active").siblings().removeClass("active");
    return;
  }
  for (var i = 1; i <= 5; i++) {
    //if (!$(".p" + (i + 1))) break;
    if (
      $(document).scrollTop() >= $(".p" + i).offset().top &&
      $(document).scrollTop() < $(".p" + (i + 1)).offset().top
    ) {
      $(".nav-0" + i)
        .addClass("active")
        .siblings()
        .removeClass("active");
      if (i <= 1) {
        $("header").removeClass("hide");
      } else {
        $("header").addClass("hide");
      }
      if (i > 2) {
        $(".nav").addClass("style2");
      } else {
        $(".nav").removeClass("style2");
      }
    }
  }
}

let imgNum = 11;
for (let index = 0; index <= imgNum; index++) {
  let imgCont =
    '<div class="swiper-slide"><img src="images-pc-carstyle/longka/img/' +
    (index + 1) +
    '.jpg"></div>';

  $(".img-wrap-b .swiper-wrapper").append(imgCont);
}
var swiperImgB = new Swiper(".img-wrap-b .swiper-container", {
  loop: false,
  mousewheelControl: false,
  simulateTouch: false,
});

let _num = 0;
$(".img-wrap-s ul li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  _num = $(this).index();
  if (_num <= 1) {
    let imgHeight = -$(".img-wrap-s ul li").outerHeight(true);
    $(".img-wrap-s ul").css(
      "transform",
      "translateY(" + imgHeight * _num + "px)"
    );
  }
  swiperImgB.slideTo(_num);
});
$(".prev, .next").on("click", function () {
  if ($(this).hasClass("prev")) {
    if (_num != 0) {
      _num = _num - 1;
    }
  } else {
    if (_num < 11) {
      _num = _num + 1;
    }
  }
  //console.log(_num);
  $(".img-wrap-s ul li")
    .eq(_num)
    .addClass("active")
    .siblings()
    .removeClass("active");
  if (_num <= 9) {
    let imgHeight = -$(".img-wrap-s ul li").outerHeight(true);
    $(".img-wrap-s ul").css(
      "transform",
      "translateY(" + imgHeight * _num + "px)"
    );
  }
  swiperImgB.slideTo(_num);
});
