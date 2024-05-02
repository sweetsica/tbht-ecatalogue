var carSwiper = new Swiper(".car-main", {
  effect: "fade",
  speed: 500,
});
var swiper31 = new Swiper(".swiper-3-1", {
  effect: "fade",
  speed: 1000,
  onSlideChangeStart: function (swiper) {
    let idx = swiper.activeIndex;
    $(".swiper-3-1").siblings(".p-tab").find(".p-tab-wrap div").eq(idx).click();
  },
});
var swiper41 = new Swiper(".swiper-4-1", {
  effect: "fade",
  speed: 1000,
  onSlideChangeStart: function (swiper) {
    let idx = swiper.activeIndex;
    $(".swiper-4-1").siblings(".p-tab").find(".p-tab-wrap div").eq(idx).click();
  },
});
var swiper51 = new Swiper(".swiper-5-1", {
  effect: "fade",
  speed: 1000,
  onSlideChangeStart: function (swiper) {
    let idx = swiper.activeIndex;
    $(".swiper-5-1").siblings(".p-tab").find(".p-tab-wrap div").eq(idx).click();
  },
});

var swiper52 = new Swiper(".swiper-5-2", {
  effect: "fade",
  speed: 1000,
  onSlideChangeStart: function (swiper) {
    let idx = swiper.activeIndex;
    $(".swiper-5-2").siblings(".p-tab").find(".p-tab-wrap div").eq(idx).click();
  },
});
var swiper53 = new Swiper(".swiper-5-3", {
  effect: "fade",
  speed: 1000,
  onSlideChangeStart: function (swiper) {
    let idx = swiper.activeIndex;
    $(".swiper-5-3").siblings(".p-tab").find(".p-tab-wrap div").eq(idx).click();
  },
});
var swiper61 = new Swiper(".swiper-6-1", {
  effect: "fade",
  speed: 1000,
  onSlideChangeStart: function (swiper) {
    let idx = swiper.activeIndex;
    $(".swiper-6-1").siblings(".p-tab").find(".p-tab-wrap div").eq(idx).click();
  },
});

var swiper62 = new Swiper(".swiper-6-2", {
  effect: "fade",
  speed: 1000,
  onSlideChangeStart: function (swiper) {
    let idx = swiper.activeIndex;
    $(".swiper-6-2").siblings(".p-tab").find(".p-tab-wrap div").eq(idx).click();
  },
});

$(".car-wrap .colors div").on("click", function () {
  var idx = $(this).index();
  $(this).addClass("cur").siblings().removeClass("cur");
  carSwiper.slideTo(idx);
});

$(".p-tab .p-tab-wrap div").click(function () {
  var idx = $(this).index();
  $(this).addClass("cur").siblings().removeClass("cur");
  $(this)
    .parent()
    .siblings(".line")
    .css({
      width: $(this).width(),
      left: $(this)[0].offsetLeft,
    });
  eval($(this).parents(".p-tab").data("id")).slideTo(idx);
});
$(".p-tab .p-tab-wrap").each(function (idx, item) {
  $(this).find("div:eq(0)").click();
});

var vidIndex;
$(".p2 .btns div").on("click", function () {
  let id = $(this).data("id");
  vidIndex = id - 1;
  $(".video-wrap").fadeIn();
  $("#video").attr("src", "xingguangvideos/v" + id + ".mp4");
  $("#video")[0].play();
});
$(".video-wrap .close").on("click", function () {
  $(".video-wrap").fadeOut();
  $("#video")[0].pause();
});
vidIndex = $(".vid-next").click(function () {
  vidIndex++;
  if (vidIndex >= 2) {
    vidIndex = 0;
  }
  $("#video").attr("src", "xingguangvideos/v" + (vidIndex + 1) + ".mp4");
  setTimeout(function () {
    $("#video")[0].play();
  }, 100);
});

$(".vid-prev").click(function () {
  vidIndex--;
  if (vidIndex < 0) {
    vidIndex = 1;
  }
  $("#video").attr("src", "xingguangvideos/v" + (vidIndex + 1) + ".mp4");
  setTimeout(function () {
    $("#video")[0].play();
  }, 100);
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
  console.log($(".anchor" + (idx + 1)));
  $("body, html").animate({
    scrollTop: $(".anchor" + (idx + 1)).offset().top + 2,
  });
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
  getCurrentScrollActive();
});
function getCurrentScrollId() {
  if ($(document).scrollTop() + 200 >= $(".anchor11").offset().top) {
    $(".nav-11").addClass("active").siblings().removeClass("active");
    return;
  }
  for (var i = 1; i <= 11; i++) {
    //if (!$(".p" + (i + 1))) break;
    if (
      $(document).scrollTop() >= $(".anchor" + i).offset().top &&
      $(document).scrollTop() < $(".anchor" + (i + 1)).offset().top
    ) {
      $(".nav-" + i)
        .addClass("active")
        .siblings()
        .removeClass("active");
      if (i <= 1) {
        $("header").removeClass("hide");
        $(".btn-reserve").hide();
      } else {
        $("header").addClass("hide");
        $(".btn-reserve").show();
      }
      if (i == 2 || i == 3 || i == 7 || i == 9 || i == 10) {
        $(".nav").addClass("style2");
      } else {
        $(".nav").removeClass("style2");
      }

      // if (!$(".anchor" + i).hasClass("active")) {
      //   $(".anchor" + i).addClass("active");
      // }
    }
  }
}
function getCurrentScrollActive() {
  for (var i = 1; i <= 11; i++) {
    //if (!$(".p" + (i + 1))) break;
    if ($(document).scrollTop() >= $(".anchor" + i).offset().top - 300) {
      if (!$(".anchor" + i).hasClass("active")) {
        $(".anchor" + i).addClass("active");
      }
    }
  }
}

setTimeout(function () {
  $(".anchor1").addClass("active");
}, 1000);

$(".pz_tit").on("click", function () {
  // $(this)
  //   .parents(".pz_box")
  //   .addClass("active")
  //   .siblings()
  //   .removeClass("active");
  $(this).parents(".pz_box").toggleClass("active");
});

$(".p7 .btn-more").on("click", function () {
  $(".nav-10").click();
  $(".pz_box").each(function () {
    $(this).addClass("active");
  });
});

$(".btn-reserve,.p1 .btn-1").on("click", function () {
  // $(".nav-11").click();
  $(".anchor11")[0].scrollIntoView();
});
