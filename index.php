<!DOCTYPE html>
<html>


<!-- Mirrored from www.wuling.com/binguo.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 19 Apr 2024 09:12:49 GMT -->
<head>
  <meta charset="utf-8">
  <title>Ecatalogue</title>
  <link href="css/swiper.min.css" rel="stylesheet" />
  <link href="css/pc.css" rel="stylesheet" />
  <link href="sass/index.css" rel="stylesheet" />
  <link href="sass/binguo.css" rel="stylesheet" />
  <!-- <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> -->
  <link rel="icon" href="images-pc/logo-header.png" type="image/png">
  <link rel="apple-touch-icon" href="favicon.html">
  <script src="js/jquery.min.js"></script>
  <script src="js/gsap.min.js"></script>
  <script>
    function browserRedirect() {
      var sUserAgent = navigator.userAgent.toLowerCase();
      var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
      var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
      var bIsMidp = sUserAgent.match(/midp/i) == "midp";
      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
      var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
      var bIsAndroid = sUserAgent.match(/android/i) == "android";
      var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
      var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

      if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        var arr = location.href.split("?");
        if (arr.length > 1) {
          location.replace("wap/binguod41d.html?" + arr[1]);
        } else {
          location.replace("wap/binguo.html");
        }
      } else {
      }
    }
    browserRedirect();
  </script>
  <style>
    header {
      border: 0
    }
    header.hide {
     top: 0 !important;
    }
    header .link {
      font-size: 18px;
    }
  </style>
  <script>
    (function () {
      function getQuery(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]); return "";
      }
      window.common = {
        getQuery: getQuery
      }
    }())
  </script>
  <!-- STM -->
  <script>
      (function (a, e, f, g, b, c, d) {
        a.ClickiTrackerName = b;
        a[b] = a[b] || function () { (a[b].queue = a[b].queue || []).push(arguments) };
        a[b].start = +new Date; c = e.createElement(f); d = e.getElementsByTagName(f)[0];
        c.async = 1; c.src = g; d.parentNode.insertBefore(c, d)
      })(window, document, 'script', '../stm-cdn.cn.miaozhen.com/clicki.minec92.js?v=' + Math.round(new Date().getTime() / 1000 / 300), 'stm_clicki');
    stm_clicki('create', 'dc-3797', 'auto');
    stm_clicki('send', 'pageview');
    //热力图
    stm_clicki('require', 'heatmap', '../stm-cdn.cn.miaozhen.com/plugins/heatmapec92.js?v=' + Math.round(new Date().getTime() / 1000 / 1800));
    stm_clicki('heatmap:on', 5);
  </script>
</head>

<body>
  <!-- <div class="loading">
		<img src="images-pc-carstyle/loading.gif">
	</div> -->
  <div id="wapper">
    <header>
      <a href="index.html" class="logo"><img src="images-pc/logo-text.png"></a>
      <div class="headerNav">
        <a href="carstyle.html" class="link link1">Tất cả sản phẩm<span class="line"></span></a>
        <a href="carguide.html" class="link link2">Hướng dẫn mua xe <span class="line"></span></a>
        <a href="story.html" class="link link3">Giới thiệu về nhà máy<span class="line"></span></a>
      </div>
      <a href="reserve.html" class="btnY">
        <img src="images-pc/dangkylaithuwhite.png" class="">
        <img src="images-pc/dangkylaithublack.png" class="hover">
      </a>
      <a href="javascript:void(0);" target="_blank" class="btnK living">
        <img src="images-pc/icon-kf.png" class="icon">
        <img src="images-pc/dichvutructuyen.png" class="tip">
      </a>
    </header>
    <div class="swiper-container pc-swiper-mainBody">
      <div class="swiper-wrapper swiper-no-swiping">
        <div class="swiper-slide slideTry">
          <div class="bg bg1 on"></div>
          <div class="bg bg2"></div>
          <div class="bom">
            <span class="on"></span>
            <span></span>
          </div>
        </div>
        <div class="swiper-slide slideHome">
          <div>
            <img src="images-pc-carstyle/binguo/playvideo.png" class="btn-video-play">
          </div>
          <div>
            <img src="images-pc-carstyle/binguo/playvideo.png" class="btn-video-play">
          </div>
          <div>
            <img src="images-pc-carstyle/binguo/playvideo.png" class="btn-video-play">
          </div>
        </div>
        <div class="swiper-slide colors">
          <div>
            <div class="car-main-bg car-bg-1 on">
              <div class="car-bottom">
                <img src="images-pc-carstyle/binguo/202309/color-car-txt-bottom-1.png" alt="">
              </div>
            </div>
            <div class="car-main-bg car-bg-2">
              <div class="car-bottom">
                <img src="images-pc-carstyle/binguo/202309/color-car-txt-bottom-2.png" alt="">
              </div>
            </div>
            <div class="car-main-bg car-bg-3">
              <div class="car-bottom">
                <img src="images-pc-carstyle/binguo/202309/color-car-txt-bottom-3.png" alt="">
              </div>
            </div>
            <div class="car-main-bg car-bg-4">
              <div class="car-bottom">
                <img src="images-pc-carstyle/binguo/202309/color-car-txt-bottom-4.png" alt="">
              </div>
            </div>
          </div>

          <div>
            <div class="car-main-bg-top car-bg-top-1 on">
              <img src="images-pc-carstyle/binguo/202309/color-car-bg-top-1.png" alt="">
            </div>
            <div class="car-main-bg-top car-bg-top-2">
              <img src="images-pc-carstyle/binguo/202309/color-car-bg-top-2.png" alt="">
            </div>
            <div class="car-main-bg-top car-bg-top-3">
              <img src="images-pc-carstyle/binguo/202309/color-car-bg-top-3.png" alt="">
            </div>
            <div class="car-main-bg-top car-bg-top-4">
              <img src="images-pc-carstyle/binguo/202309/color-car-bg-top-4.png" alt="">
            </div>
          </div>
          <div class="swiper-container car-main">
            <div class="swiper-wrapper">
              <div class="swiper-slide car-slide  car-1">
                <div class="car-img-wrap">
                  <img src="images-pc-carstyle/binguo/202309/color-car-1-1-1.png" alt="" class="car-img"
                    data-swiper-parallax-duration="2000" data-swiper-parallax="-50%">
                </div>

                <div class="color-select color-select-1">
                  <img src="images-pc-carstyle/binguo/202309/color-car-color-1-1.png" class="color-b color-b-1 on"
                    data-id="1" data-idx="1" alt="">
                  <img src="images-pc-carstyle/binguo/202309/color-car-color-1-2.png" class="color-b color-b-2"
                    data-id="1" data-idx="2" alt="">
                  <!-- <img src="images-pc-carstyle/binguo/202309/color-car-wheel-1-1.png" class="color-wheel color-wheel-1 on"
                    alt="" data-id="1" data-idx="1">
                  <img src="images-pc-carstyle/binguo/202309/color-car-wheel-1-2.png" class="color-wheel  color-wheel-2" alt=""
                    data-id="1" data-idx="2"> -->
                  <img src="images-pc-carstyle/binguo/202309/color-car-color-txt-1-1.png" class="color-bt color-bt-1 on"
                    alt="">
                  <img src="images-pc-carstyle/binguo/202309/color-car-color-txt-1-2.png" class="color-bt  color-bt-2"
                    alt="">
                </div>
                <img src="images-pc-carstyle/binguo/202309/color-car-txt-1.png" alt="" class="color-txt">
                <img src="images-pc-carstyle/binguo/202309/color-car-price-1.png" alt="" class="color-price"
                  data-swiper-parallax-duration="2000" data-swiper-parallax="-520%">
              </div>
              <div class="swiper-slide car-slide  car-2">
                <div class="car-img-wrap">
                  <img src="images-pc-carstyle/binguo/202309/color-car-2-1-1.png" alt="" class="car-img"
                    data-swiper-parallax-duration="2000" data-swiper-parallax="-50%">
                </div>
                <div class="color-select color-select-2">
                  <img src="images-pc-carstyle/binguo/202309/color-car-color-2-1.png" class="color-b color-b-1 on"
                    data-id="2" data-idx="1" alt="">
                  <!-- <img src="images-pc-carstyle/binguo/202309/color-car-color-2-2.png" class="color-b color-b-2"
                    data-id="2" data-idx="2" alt=""> -->
                  <!-- <img src="images-pc-carstyle/binguo/202309/color-car-wheel-2-1.png" class="color-wheel color-wheel-1 on"
                    alt="" data-id="2" data-idx="1">
                  <img src="images-pc-carstyle/binguo/202309/color-car-wheel-2-2.png" class="color-wheel  color-wheel-2" alt=""
                    data-id="2" data-idx="2"> -->
                  <img src="images-pc-carstyle/binguo/202309/color-car-color-txt-2-1.png" class="color-bt color-bt-1 on"
                    alt="">
                  <!-- <img src="images-pc-carstyle/binguo/202309/color-car-color-txt-2-2.png" class="color-bt  color-bt-2"
                    alt=""> -->
                </div>
                <img src="images-pc-carstyle/binguo/202309/color-car-txt-2.png" alt="" class="color-txt">
                <img src="images-pc-carstyle/binguo/202309/color-car-price-2.png" alt="" class="color-price"
                  data-swiper-parallax-duration="2000" data-swiper-parallax="-520%">
              </div>
              <div class="swiper-slide car-slide car-3">
                <div class="car-img-wrap">
                  <img src="images-pc-carstyle/binguo/202309/color-car-3-1-1.png" alt="" class="car-img"
                    data-swiper-parallax-duration="2000" data-swiper-parallax="-50%">
                </div>
                <div class="color-select color-select-3">
                  <img src="images-pc-carstyle/binguo/202309/color-car-color-3-1.png" class="color-b color-b-1 on"
                    data-id="3" data-idx="1" alt="">
                  <!-- <img src="images-pc-carstyle/binguo/202309/color-car-color-3-2.png" class="color-b color-b-2"
                    data-id="3" data-idx="2" alt=""> -->
                  <!-- <img src="images-pc-carstyle/binguo/202309/color-car-wheel-3-1.png" class="color-wheel color-wheel-1 on"
                    alt="" data-id="3" data-idx="1">
                  <img src="images-pc-carstyle/binguo/202309/color-car-wheel-3-2.png" class="color-wheel  color-wheel-2" alt=""
                    data-id="3" data-idx="2"> -->
                  <img src="images-pc-carstyle/binguo/202309/color-car-color-txt-3-1.png" class="color-bt color-bt-1 on"
                    alt="">
                  <!-- <img src="images-pc-carstyle/binguo/202309/color-car-color-txt-3-2.png" class="color-bt  color-bt-2"
                    alt=""> -->
                </div>
                <img src="images-pc-carstyle/binguo/202309/color-car-txt-3.png" alt="" class="color-txt">
                <img src="images-pc-carstyle/binguo/202309/color-car-price-3.png" alt="" class="color-price"
                  data-swiper-parallax-duration="2000" data-swiper-parallax="-520%">
              </div>
              <div class="swiper-slide car-slide car-4">
                <div class="car-img-wrap">
                  <img src="images-pc-carstyle/binguo/202309/color-car-4-1-1.png" alt="" class="car-img"
                    data-swiper-parallax-duration="2000" data-swiper-parallax="-50%">
                </div>
                <div class="color-select color-select-4">
                  <img src="images-pc-carstyle/binguo/202309/color-car-color-4-1.png" class="color-b color-b-1 on"
                    data-id="1" data-idx="1" alt="">
                  <!-- <img src="images-pc-carstyle/binguo/202309/color-car-wheel-4-1.png" class="color-wheel color-wheel-1 on"
                    alt="" data-id="4" data-idx="1">
                  <img src="images-pc-carstyle/binguo/202309/color-car-wheel-4-2.png" class="color-wheel  color-wheel-2" alt=""
                    data-id="4" data-idx="2"> -->
                  <img src="images-pc-carstyle/binguo/202309/color-car-color-txt-4-1.png" class="color-bt color-bt-1 on"
                    alt="">
                </div>
                <img src="images-pc-carstyle/binguo/202309/color-car-txt-4.png" alt="" class="color-txt">
                <img src="images-pc-carstyle/binguo/202309/color-car-price-4.png" alt="" class="color-price"
                  data-swiper-parallax-duration="2000" data-swiper-parallax="-520%">
              </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="color-type">
              <div class="prev p1"></div>
              <div class="type-txt"></div>
              <div class="next n1"></div>
            </div>
          </div>
        </div>
        <div class="swiper-slide compare">
          <div class="compare-wrap">
            <div class="compare-top">
              <img src="images-pc-carstyle/binguo/202306/compare-bg.jpg" class="compare-img">
              <div class="compare-mask"></div>
            </div>
            <div class="block-title">
              <div class="block-title-top"></div>
              <div class="block-title-bottom"></div>
            </div>
            <!-- <img src="images-pc-carstyle/binguo/compare-text.png" alt="" class="block-title"> -->
            <div class="icons">
              <div class="prev"></div>
              <div class="next"></div>
            </div>
          </div>
        </div>
        <div class="swiper-slide vintage">
          <div>
            <img src="images-pc-carstyle/binguo/vintage-b-img-1.jpg" alt="" class="v-b-img">
            <img src="images-pc-carstyle/binguo/vintage-b-img-2.jpg" alt="" class="v-b-img">
            <img src="images-pc-carstyle/binguo/vintage-b-img-3.jpg" alt="" class="v-b-img">
            <img src="images-pc-carstyle/binguo/vintage-b-img-4.jpg" alt="" class="v-b-img">
            <img src="images-pc-carstyle/binguo/202306/vintage-b-img-5.jpg" alt="" class="v-b-img">
            <img src="images-pc-carstyle/binguo/vintage-b-img-6.jpg" alt="" class="v-b-img">
          </div>
          <!-- <img src="images-pc-carstyle/binguo/vintage-text.png" alt="" class="block-title"> -->
          <div class="block-title on">
            <div class="block-title-top"></div>
            <div class="block-title-bottom"></div>
          </div>
          <div class="thumbs">
            <div class="thumbs-head-wrap">
              <div class="thumbs-head">
                <div class="nums">
                  <div class="on"><span>0</span><span>1</span><span>/</span><span>0</span><span>6</span></div>
                  <div class="num-next"></div>
                </div>
                <!-- <div class="nums">
                  01/03
                </div> -->
                <div class="icons">
                  <div class="prev p2"></div>
                  <div class="next n2"></div>
                </div>
              </div>
            </div>
            <div class="swiper-container vintage-thumbs">
              <div class="swiper-wrapper">
                <div class="swiper-slide on">
                  <img src="images-pc-carstyle/binguo/vintage-s-img-1.png" alt="" class="img">
                </div>
                <div class="swiper-slide">
                  <img src="images-pc-carstyle/binguo/vintage-s-img-2.png" alt="" class="img">
                </div>
                <div class="swiper-slide">
                  <img src="images-pc-carstyle/binguo/vintage-s-img-3.png" alt="" class="img">
                </div>
                <div class="swiper-slide">
                  <img src="images-pc-carstyle/binguo/vintage-s-img-4.png" alt="" class="img">
                </div>
                <div class="swiper-slide">
                  <img src="images-pc-carstyle/binguo/202306/vintage-s-img-5.png" alt="" class="img">
                </div>
                <div class="swiper-slide">
                  <img src="images-pc-carstyle/binguo/vintage-s-img-6.png" alt="" class="img">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide policy">
          <!-- <img src="images-pc-carstyle/binguo/202306/policy-logo.png" alt="" class="logo"> -->
          <img src="images-pc-carstyle/binguo/202309/policy-txt.png" alt="" class="txt">
          <div class="btns">
            <div class="btn llb">
              <img src="images-pc-carstyle/binguo/policy-btn-1.png" class="bg">
              <img src="images-pc-carstyle/binguo/policy-btn-1-hover.png" class="hover">
            </div>
            <!-- <div class="btn tmall">
              <img src="images-pc-carstyle/binguo/policy-btn-2.png" class="bg">
              <img src="images-pc-carstyle/binguo/policy-btn-2-hover.png" class="hover">
            </div> -->
          </div>
        </div>
        <div class="swiper-slide booking">
          <div class="yuBox" style="width: 100%; height: 100%;">
            <div class="testDrive-sec">
              <img class="title" src="images-pc-carstyle/binguo/202309/booking-title.png">
              <div class="reserve_form">
                <div class="grid">
                  <div class="drop_select">
                    <input type="text" name="" id="input_name" placeholder="姓名">
                  </div>
                  <div class="alert_info">请输入您的姓名</div>
                </div>

                <div class="grid">
                  <div class="drop_select">
                    <input type="tel" name="" id="input_mobile" maxlength="11" placeholder="手机">
                  </div>
                  <div class="alert_info">请输入您的手机</div>
                </div>

                <!-- <div class="grid" style="margin-right: 0;">
                  <div class="drop_select">
                    <img src="images-pc-carstyle/binguo/booking-s-down.png" class="arrow">
                    <select id="ddlCarTypes">
                    </select>
                  </div>
                  <div class="alert_info">请选择您的车型</div>
                </div> -->

                <div class="grid" style="margin-right: 0;">
                  <div class="drop_select">
                    <img src="images-pc-carstyle/binguo/booking-s-down.png" class="arrow">
                    <select id="ddlCarProv">
                    </select>
                  </div>
                  <div class="alert_info">请选择您的省份</div>
                </div>

                <div class="grid">
                  <div class="drop_select">
                    <img src="images-pc-carstyle/binguo/booking-s-down.png" class="arrow">

                    <select id="ddlCarCity">
                    </select>
                  </div>
                  <div class="alert_info">请选择您的城市</div>
                </div>

                <div class="grid" style="margin-right: 0;">
                  <div class="drop_select">
                    <img src="images-pc-carstyle/binguo/booking-s-down.png" class="arrow">

                    <select id="ddlDealer">
                    </select>
                  </div>
                  <div class="alert_info">请选择您的经销商</div>
                </div>

                <div class="btm">
                  <div class="hint">
                    <p class="txt">
                      我已阅读并同意<span class="rule_btn"> 《用户隐私协议》</span>
                      <span class="checkbox"></span>
                    </p>
                  </div>
                  <div class="btn submit_btn">
                    立即提交 <i>⇁</i></div>

                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide slideP4-1">
          <div class="cont">
            <div class="fullBg1"></div>
            <div class="fullImgBanTit1 block-title">
              <div class="block-title-top"></div>
              <div class="block-title-bottom"></div>
            </div>
            <!-- <img src="images-pc-carstyle/binguo/selling-title-1.png" class="fullImgBanTit1"> -->
            <div class="bottom-cont  splice">
              <div>
                <img src="images-pc-carstyle/binguo/bottom-text-1-1.png" class="sub-txt  active" more-num="1"
                  data-part="1">
              </div>
              <div>
                <img src="images-pc-carstyle/binguo/bottom-text-1-2.png" class="sub-txt  active" more-num="1"
                  data-part="2">
              </div>
              <div>
                <img src="images-pc-carstyle/binguo/202309/bottom-text-1-3.png" class="sub-txt  active" more-num="1"
                  data-part="3">
              </div>
              <div>
                <img src="images-pc-carstyle/binguo/bottom-text-1-4.png" class="sub-txt  active" more-num="1"
                  data-part="3">
              </div>
            </div>
          </div>
          <div class="more-warp">
            <div class="box">
              <img class="title1" src="images-pc-carstyle/binguo/pc-full-1-tit-1.png">
              <img class="title2" src="images-pc-carstyle/binguo/pc-full-1-tit-2.png">
              <img class="title3" src="images-pc-carstyle/binguo/pc-full-1-tit-3.png">
              <img class="title4" src="images-pc-carstyle/binguo/pc-full-1-tit-4.png">
              <img class="title5" src="images-pc-carstyle/binguo/pc-full-1-tit-5.png">
              <img class="title6" src="images-pc-carstyle/binguo/pc-full-1-tit-6.png">
              <img class="title7" src="images-pc-carstyle/binguo/202309/pc-full-1-tit-7.png">
              <div class="anchor anchor2"></div>
              <div class="anchor anchor3"></div>
              <div class="anchor anchor1"></div>
              <img class="fullSubImg fullSubImg1" src="images-pc-carstyle/binguo/202309/full-1-img.jpg">
            </div>
            <div class="slideP4-hide" more-num="1">

            </div>
          </div>
        </div>
        <div class="swiper-slide slideP4-2">
          <div class="cont">
            <div class="fullBg2"></div>
            <!-- <img src="images-pc-carstyle/binguo/selling-title-2.png" class="fullImgBanTit1"> -->
            <div class="fullImgBanTit2 block-title">
              <div class="block-title-top"></div>
              <div class="block-title-bottom"></div>
            </div>
            <div class="bottom-cont splice">
              <div>
                <img src="images-pc-carstyle/binguo/bottom-text-2-1.png" class="sub-txt active" more-num="2"
                  data-part="1">
              </div>
              <div>
                <img src="images-pc-carstyle/binguo/bottom-text-2-2.png" class="sub-txt active" more-num="2"
                  data-part="2">
              </div>
            </div>
          </div>
          <div class="more-warp">
            <div class="box">
              <img class="title1" src="images-pc-carstyle/binguo/pc-full-2-tit-1.png">
              <img class="title2" src="images-pc-carstyle/binguo/202309/pc-full-2-tit-2.png">
              <img class="title3" src="images-pc-carstyle/binguo/pc-full-2-tit-3.png">
              <img class="title4" src="images-pc-carstyle/binguo/pc-full-2-tit-4.png">
              <div class="anchor anchor2"></div>
              <div class="anchor anchor3"></div>
              <div class="anchor anchor4"></div>
              <img class="fullSubImg fullSubImg1" src="images-pc-carstyle/binguo/202309/full-2-img.jpg">
              <div class="slideP4-hide" more-num="2">
                <!-- <img src="images-pc-carstyle/binguo/pc-hide-btn-2.png" class="on">
                <img src="images-pc-carstyle/binguo/pc-hide-btn-2.png" class="act"> -->
                <!-- <img src="images-pc-carstyle/binguo/pc-hide-btn-act.png" class="act"> -->
              </div>
            </div>

          </div>
        </div>
        <div class="swiper-slide slideP4-3">
          <div class="cont">
            <div class="fullBg3"></div>
            <!-- <img src="images-pc-carstyle/binguo/selling-title-3.png" class="fullImgBanTit1"> -->
            <div class="fullImgBanTit3 block-title">
              <div class="block-title-top"></div>
              <div class="block-title-bottom"></div>
            </div>
            <div class="bottom-cont splice">
              <div>
                <img src="images-pc-carstyle/binguo/202309/bottom-text-3-1.png" class="sub-txt active" more-num="3"
                  data-part="1">
              </div>
              <div>
                <img src="images-pc-carstyle/binguo/202309/bottom-text-3-2.png" class="sub-txt active" more-num="3"
                  data-part="2">
              </div>
              <div>
                <img src="images-pc-carstyle/binguo/202309/bottom-text-3-3.png" class="sub-txt active" more-num="3"
                  data-part="3">
              </div>
              <div>
                <img src="images-pc-carstyle/binguo/202309/bottom-text-3-4.png" class="sub-txt active" more-num="3"
                  data-part="4">
              </div>
            </div>
          </div>
          <div class="more-warp">
            <div class="box">
              <img class="title1" src="images-pc-carstyle/binguo/202309/pc-full-3-tit-1.png">
              <img class="title2" src="images-pc-carstyle/binguo/202309/pc-full-3-tit-2-1.png">
              <img class="title22" src="images-pc-carstyle/binguo/202309/pc-full-3-tit-2-2.png">
              <img class="title3" src="images-pc-carstyle/binguo/202309/pc-full-3-tit-3.png">
              <img class="title4" src="images-pc-carstyle/binguo/202309/pc-full-3-tit-4.png">
              <img class="title5" src="images-pc-carstyle/binguo/202309/pc-full-3-tit-5.png">
              <img class="title6" src="images-pc-carstyle/binguo/202309/pc-full-3-tit-6.png">
              <div class="swiper-container swiper-4-3">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="images-pc-carstyle/binguo/202309/pc-full-3-tit-swipe-1.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="images-pc-carstyle/binguo/202309/pc-full-3-tit-swipe-2.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="images-pc-carstyle/binguo/202309/pc-full-3-tit-swipe-3.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="images-pc-carstyle/binguo/202309/pc-full-3-tit-swipe-4.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="images-pc-carstyle/binguo/202309/pc-full-3-tit-swipe-5.png" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="images-pc-carstyle/binguo/202309/pc-full-3-tit-swipe-6.png" alt="">
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev">
                <img src="images-pc-carstyle/binguo/icon-arrow-prev.png" alt="">
              </div>
              <div class="swiper-button-next">
                <img src="images-pc-carstyle/binguo/icon-arrow-next.png" alt="">
              </div>
              <div class="anchor anchor1"></div>
              <div class="anchor anchor2"></div>
              <div class="anchor anchor3"></div>
              <div class="anchor anchor4"></div>
              <div class="anchor anchor5"></div>
              <img class="fullSubImg fullSubImg1" src="images-pc-carstyle/binguo/202309/full-3-img.jpg">
            </div>
            <div class="slideP4-hide" more-num="3">
            </div>
          </div>
        </div>

        <div class="swiper-slide slideP4-4">
          <div class="cont">
            <div class="fullBg4"></div>
            <!-- <img src="images-pc-carstyle/binguo/selling-title-4.png" class="fullImgBanTit4"> -->
            <div class="fullImgBanTit4 block-title">
              <div class="block-title-top"></div>
              <div class="block-title-bottom"></div>
            </div>
            <div class="bottom-cont splice">
              <div>
                <img src="images-pc-carstyle/binguo/202309/bottom-text-4-1.png" class="sub-txt active" more-num="4"
                  data-part="2">
              </div>
              <div>
                <img src="images-pc-carstyle/binguo/202309/bottom-text-4-2.png" class="sub-txt active" more-num="4"
                  data-part="3">
              </div>
              <div>
                <img src="images-pc-carstyle/binguo/202309/bottom-text-4-3.png" class="sub-txt active" more-num="4"
                  data-part="1">
              </div>
            </div>
          </div>
          <div class="more-warp">
            <div class="box">
              <img class="title1" src="images-pc-carstyle/binguo/202309/pc-full-4-tit-1.png">
              <img class="title2" src="images-pc-carstyle/binguo/202309/pc-full-4-tit-2.png">
              <img class="title3" src="images-pc-carstyle/binguo/202309/pc-full-4-tit-3.png">
              <!-- <img class="title4" src="images-pc-carstyle/binguo/pc-full-4-tit-4.png"> -->
              <img class="title5 title51" src="images-pc-carstyle/binguo/202309/pc-full-4-tit-51.png">
              <img class="title5" src="images-pc-carstyle/binguo/202309/pc-full-4-tit-5.png">
              <img class="title6" src="images-pc-carstyle/binguo/202309/pc-full-4-tit-6.png">
              <div class="anchor anchor1"></div>
              <div class="anchor anchor2"></div>
              <div class="anchor anchor3"></div>
              <img class="fullSubImg fullSubImg1" src="images-pc-carstyle/binguo/202309/full-4-img.jpg">
            </div>
            <div class="slideP4-hide" more-num="4">
            </div>
          </div>

        </div>
        <div class="swiper-slide slideP4-5">
          <div class="cont">
            <div class="fullBg5"></div>
            <!-- <img src="images-pc-carstyle/binguo/selling-title-4.png" class="fullImgBanTit4"> -->
            <div class="fullImgBanTit5 block-title">
              <div class="block-title-top"></div>
              <div class="block-title-bottom"></div>
            </div>
            <div class="bottom-cont splice">
              <div>
                <img src="images-pc-carstyle/binguo/202309/bottom-text-5-1.png" class="sub-txt active" more-num="5"
                  data-part="1">
              </div>
              <div>
                <img src="images-pc-carstyle/binguo/202309/bottom-text-5-2.png" class="sub-txt active" more-num="5"
                  data-part="2">
              </div>
              <div>
                <img src="images-pc-carstyle/binguo/202309/bottom-text-5-3.png" class="sub-txt active" more-num="5"
                  data-part="3">
              </div>
            </div>
          </div>
          <div class="more-warp">
            <div class="box">
              <img class="title1" src="images-pc-carstyle/binguo/202309/pc-full-5-tit-1.png">
              <img class="title2" src="images-pc-carstyle/binguo/202309/pc-full-5-tit-2.png">
              <img class="title3" src="images-pc-carstyle/binguo/202309/pc-full-5-tit-3.png">
              <div class="anchor anchor1"></div>
              <div class="anchor anchor2"></div>
              <div class="anchor anchor3"></div>
              <img class="fullSubImg fullSubImg1" src="images-pc-carstyle/binguo/202309/full-5-img.jpg">
            </div>
            <div class="slideP4-hide" more-num="5">
            </div>
          </div>

        </div>
        <div class="swiper-slide slideP4-6">
          <div class="cont">
            <div class="fullBg6"></div>
            <!-- <img src="images-pc-carstyle/binguo/selling-title-4.png" class="fullImgBanTit4"> -->
            <div class="fullImgBanTit6 block-title">
              <div class="block-title-top"></div>
              <div class="block-title-bottom"></div>
            </div>
            <div class="bottom-cont splice">
              <div>
                <img src="images-pc-carstyle/binguo/bottom-text-6-1.png" class="sub-txt">
              </div>
              <div>
                <img src="images-pc-carstyle/binguo/bottom-text-6-2.png" class="sub-txt">
              </div>
            </div>
          </div>

        </div>
        <div class="swiper-slide slideImg">
          <!-- <img class="title" src="images-pc-carstyle/binguo/slideImg-title.png"> -->
          <img class="txt-1" src="images-pc-carstyle/binguo/slideImg-txt-1.png">
          <img class="txt-2" src="images-pc-carstyle/binguo/slideImg-txt-2.png">
          <div class="swiper-container slideImg-main">
            <div class="swiper-wrapper">
            </div>
          </div>
          <div class="controls">
            <div class="swiper-button-prev">
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next">
            </div>
          </div>
          <div class="slideImg-big">
            <img src="#" alt="" class="img">
            <img src="images-pc-carstyle/binguo/slideImg-btn-back.png" alt="" class="btn-back">
          </div>

        </div>
        <div class="swiper-slide slidePeizhi">
          <div class="slidePeizhi-head">
            <img class="title" src="images-pc-carstyle/binguo/pc-peizhi-title.png">
            <!-- <a target="_blank" href="images-pc-carstyle/nano/ev50pz.pdf"><img class="down" src="images-pc-carstyle/nano/pc-down.png"></a> -->
          </div>
          <div class="slidePeizhi-wrap">
            <div class="head">
              <img class="head-img" src="images-pc-carstyle/binguo/202309/peizhi/peizhi-head.png">

            </div>

            <div class="img-wrap" id="scroll1">
              <div>
                <img class="img on" on-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-1-on.png"
                  off-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-1.png"
                  src="images-pc-carstyle/binguo/202309/peizhi/peizhi-1-on.png">
                <img class="img" on-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-2-on.png"
                  off-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-2.png"
                  src="images-pc-carstyle/binguo/202309/peizhi/peizhi-2.png">
                <img class="img" on-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-3-on.png"
                  off-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-3.png"
                  src="images-pc-carstyle/binguo/202309/peizhi/peizhi-3.png">
                <img class="img" on-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-4-on.png"
                  off-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-4.png"
                  src="images-pc-carstyle/binguo/202309/peizhi/peizhi-4.png">
                <img class="img" on-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-5-on.png"
                  off-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-5.png"
                  src="images-pc-carstyle/binguo/202309/peizhi/peizhi-5.png">
                <img class="img" on-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-6-on.png"
                  off-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-6.png"
                  src="images-pc-carstyle/binguo/202309/peizhi/peizhi-6.png">
                <img class="img" on-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-7-on.png"
                  off-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-7.png"
                  src="images-pc-carstyle/binguo/202309/peizhi/peizhi-7.png">
                <img class="img" on-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-8-on.png"
                  off-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-8.png"
                  src="images-pc-carstyle/binguo/202309/peizhi/peizhi-8.png">
                <img class="img" on-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-9-on.png"
                  off-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-9.png"
                  src="images-pc-carstyle/binguo/202309/peizhi/peizhi-9.png">
                <img class="img" on-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-10-on.png"
                  off-src="images-pc-carstyle/binguo/202309/peizhi/peizhi-10.png"
                  src="images-pc-carstyle/binguo/202309/peizhi/peizhi-10.png">
              </div>
            </div>

          </div>
          <img class="txt" src="images-pc-carstyle/binguo/202309/peizhi/pc-peizhi-txt.png">
          <div class="top">
          </div>
          <footer>
            <p>Copyright © 2024 TBHT. All rights reserved.</p>
            <p class="law">Chính sách và bảo mật</p>
            <p><a href="https://tbht.vn/" target="_blank">Tìm hiểu thêm: Công ty Cổ phần Thái Bình Hưng Thịnh</a></p><br />
            <p><a href="mailto:admin@tbht.vn" target="_blank">Email：admin@tbht.vn</a></p>
            <!-- <p><a href="http://beian.miit.gov.cn/" target="_blank">桂ICP备05006817号-10</a></p> -->
            <p><a href="tel:+84 (0) 888 809 889" target="_blank">Hotline：+84 (0) 888 809 889</a></p>
          </footer>
        </div>


      </div>

    </div>

    <ul class="nav">
      <li class="nav-01 active" data-idx="0"></li>
      <li class="nav-02" data-idx="1"></li>
      <li class="nav-03" data-idx="2"></li>
      <li class="nav-04" data-idx="3"></li>
      <li class="nav-05" data-idx="4"></li>
      <li class="nav-06" data-idx="5"></li>
      <li class="nav-07" data-idx="6"></li>
      <li class="nav-08" data-idx="7"></li>
      <li class="nav-09" data-idx="8"></li>
      <li class="nav-10" data-idx="9"></li>
      <li class="nav-11" data-idx="10"></li>
      <li class="nav-12" data-idx="11"></li>
      <li class="nav-13" data-idx="12"></li>
      <li class="nav-14" data-idx="13"></li>
      <li class="nav-15" data-idx="14"></li>
    </ul>
  </div>

  <div class="tkBox">
    <div class="tk">
      <img src="images-pc/tk.png" class="imgtk">
    </div>
    <img src="images-pc/btn-close-index.png" class="close">
  </div>

  <div class="popUp-wrap">
    <div class="popUp">
      <div class="popUp-img" id="scroll2">
        <div>
          <img class="img" src="images-pc/xieyi.png">
        </div>
      </div>
    </div>
    <img class="close" src="images-pc-carstyle/pc-close2.png">
  </div>

  <div class="video-wrap">
    <div class="video-wrap-box">
      <video src="#" id="video" playsinline="" -webkit-playsinline="" controls=""></video>
    </div>
    <div class="vid-prev"><img class="img" src="images-pc-carstyle/binguo/vid-prev.png"></div>
    <div class="vid-next"><img class="img" src="images-pc-carstyle/binguo/vid-next.png"></div>
    <img class="close" src="images-pc-carstyle/binguo/btn-tc-close.png">
  </div>

  <div class="alert_pop">
    <p></p>
  </div>

  <script src="js/swiper-3.4.2.min.js"></script>
  <script src="js/preloadjs-0.4.1.min.js"></script>
  <script src="js/iscroll.js"></script>
  <script src="js/pc-binguo.js"></script>
  <script src="js/md5.min.js"></script>
  <script src="js/common.service.js"></script>
  <script>
    $(function () {
      $('.law').click(function () {
        $('.tkBox').show()
      })

      $('.tkBox .close').click(function () {
        $('.tkBox').hide()
      })
    })





    function popAlert(msg) {
      $(".alert_pop p").html(msg);
      $(".alert_pop").fadeIn().delay(800).fadeOut();
    }

    function checkPhone(phone) {
      if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
        return false;
      } else {
        return true;
      }
    }
    $(function () {
      var carData = {};
      var tabledata = [];
      var periodList = {};
      var last_carId = "";
      var last_prov = "";
      var last_city = "";
      var myProv = "";
      var myCity = "";


      $("#ddlCarProv").change(function () {
        myCity = false;
        getCity();
      });
      $("#ddlCarCity").change(function () {
        getDealers();
      });







      guess_loaction();


      function guess_loaction() {
        if (myProv == "" || myCity == "") {
          $.ajax({
            url: api_server + "/api.php?s=/sgmw/index/guess_location&r=" + Math.random(),
            type: "GET",
            data: {},
            dataType: "json",
            async: false,
            success: function success(result) {
              myProv = result.data.pro;
              myCity = result.data.city;
              getProvince();
            },
            error: function error() {
              getProvince();
            }
          });
        } else {
          getProvince();
        }
      }

      function getProvince() {
        $.ajax({
          type: "GET",
          url: api_server + "/api.php?s=/sgmw/index/getprovince_ev&r=" + parseInt(Math.random() * 10000),
          dataType: "json",
          success: function success(data) {
            if (data.data.length) {
              var prov = data.data.find(function (e) {
                return e.province_desc.substr(0, 2) == myProv.substr(0, 2);
              });
              var provId = (prov != undefined && prov.province_id > 0) ? prov.province_id : "1";
              data.data.forEach(function (e) {
                $("#ddlCarProv").append("<option value=".concat(e.province_id, ">").concat(e.province_desc, "</option>"));
              });

              $("#ddlCarProv").find("option[value=".concat(provId, "]")).attr("selected", true);

              getCity();
            }
          }
        });
      }

      function getCity() {
        var provId = $("#ddlCarProv option:selected").val();
        $.ajax({
          type: "GET",
          url: api_server + "/api.php?s=/sgmw/index/getcity_ev&r=" + parseInt(Math.random() * 10000),
          data: {
            id: provId
          },
          dataType: "json",
          success: function success(data) {
            if (data.data.length) {
              $("#ddlCarCity").empty();
              data.data.forEach(function (e) {
                $("#ddlCarCity").append("<option value=".concat(e.city_id, ">").concat(e.city_desc, "</option>"));
              });

              if (myCity) {
                var city = data.data.find(function (e) {
                  return e.city_desc.substr(0, 2) == myCity.substr(0, 2);
                });
                var cityId = city.city_id || "1";
                $("#ddlCarCity").find("option[value=".concat(cityId, "]")).attr("selected", true);
              }

              getDealers();
            }
          }
        });
      }

      function getDealers() {
        $.ajax({
          type: "GET",
          url: api_server + "/api.php?s=/sgmw/index/dealerinfo_ev&r=" + parseInt(Math.random() * 10000),
          data: {
            //cartype: encodeURI('五菱缤果'),
            cartype: '五菱缤果',
            city: $("#ddlCarCity option:selected").text(),
          },
          dataType: "json",
          success: function success(data) {
            $("#ddlDealer").empty();
            data.forEach(function (e) {
              $("#ddlDealer").append("<option value=".concat(e.code, ">").concat(e.company, "</option>"));
            })
          }
        })
      }


      function getEmpty() {
        var empty = [];
        var username = $("#input_name").val();
        var mobile = $("#input_mobile").val();
        var province = $("#ddlCarProv option:selected").text();
        var city = $("#ddlCarCity option:selected").text();
        var dealer = $("#ddlDealer option:selected").text();

        if (!username) {
          empty.push('username')
        }
        if (!mobile) {
          empty.push('mobile')
        }
        if (!province) {
          empty.push('province')
        }
        if (!city) {
          empty.push('city')
        }
        if (!dealer) {
          empty.push('dealer')
        }

        return empty.length ? empty.join(',') : 'empty'
      }

      var isloading = false;


      $(".submit_btn").click(function () {
        stm_clicki('send', 'event', '五菱缤果车型页-留资', '提交按钮-点击', '五菱缤果');

        if ($("#input_name").val() == "") {
          $("#input_name").parents(".grid").addClass("alert");

          var empty = getEmpty();
          //_jcq.push(["_tracksubmit", "LCNanoEV_", empty])

          return;
        } else {
          $("#input_name").parents(".grid").removeClass("alert");
        }

        if (!checkPhone(document.getElementById('input_mobile').value)) {
          $("#input_mobile").parents(".grid").addClass("alert");

          var empty = getEmpty();
          //_jcq.push(["_tracksubmit", "LCNanoEV_", empty])

          return;
        } else {
          $("#input_mobile").parents(".grid").removeClass("alert");
        }

        $("select").each(function () {
          if ($(this).val() == "请选择") {
            $(this).parents(".grid").addClass("alert");

            var empty = getEmpty();
            //_jcq.push(["_tracksubmit", "LCNanoEV_", empty])

            return;
          } else {
            $(this).parents(".grid").removeClass("alert");
          }
        })

        if ($(".grid.alert").length > 0) {
          var empty = getEmpty();
          //_jcq.push(["_tracksubmit", "LCNanoEV_", empty])

          popAlert("请完善您的资料");
        } else if (!$(".hint .txt").hasClass("active")) {
          var empty = getEmpty();
          //_jcq.push(["_tracksubmit", "LCNanoEV_", empty])

          popAlert("请阅读并同意条款");
        } else {
          var car_type_id = "五菱缤果";
          var car_type = "五菱缤果";
          var gender = 0;
          var username = $("#input_name").val();
          var mobile = $("#input_mobile").val();
          var province = $("#ddlCarProv option:selected").text();
          var city = $("#ddlCarCity option:selected").text();
          var dealer_code = $("#ddlDealer").val();
          var dealer = $("#ddlDealer option:selected").text();

          var source = 3;

          var project_id = window.common.getQuery("ProjectID");
          var media_id = window.common.getQuery("MediaID");

          if (isloading) {
            return;
          }
          isloading = true;

          $.ajax({
            type: "POST",
            url: api_server + "/api.php?s=/sgmw/index/testdrive&r=" + parseInt(Math.random() * 10000),
            data: {
              car_type_id: car_type_id,
              car_type: car_type,
              gender: gender,
              username: username,
              mobile: mobile,
              province: province,
              city: city,
              dealer_code: dealer_code,
              dealer: dealer,
              source: source,
              project_id: project_id,
              media_id: media_id
            },
            success: function success(data) {
              if (data.code == 1) {
                popAlert("您已提交成功！");

                stm_clicki('send', 'event', {
                  customActionId: 3,
                  customActionLabel1: data.data.id,
                  customActionLabel2: '五菱缤果车型页-预约试驾',
                  customActionLabel3: username.length > 0 ? md5(username) : "",
                  customActionLabel4: mobile.length > 0 ? md5(mobile) : "",
                  customActionLabel5: province,
                  customActionLabel6: city,
                  customActionLabel7: dealer,
                  customActionLabel8: '五菱',
                  customActionLabel9: '五菱缤果',
                  customActionValue1: 1
                });

                stm_clicki('send', 'event', '五菱缤果车型页-留资页', '立即提交-成功留资', '五菱缤果_留资') //基础事件
              } else {
                popAlert(data.msg);
              }


            },
            complete: function () {
              isloading = false;
            }
          })
        }

      })
    })
  </script>
</body>


<!-- Mirrored from www.wuling.com/binguo.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 19 Apr 2024 09:13:31 GMT -->
</html>