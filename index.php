<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>[TBHT] E-Catalogue</title>
  <link href="css/swiper.min.css" rel="stylesheet" />
  <link href="css/pc.css" rel="stylesheet" />
  <link href="sass/index.css" rel="stylesheet" />
  <link href="sass/binguo.css" rel="stylesheet" />
  <link rel="icon" href="images-pc/logo-header.png" type="image/png">
  <link rel="apple-touch-icon" href="favicon.html">
  <script src="js/jquery.min.js"></script>
  <script src="js/gsap.min.js"></script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap" rel="stylesheet">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.min.js" integrity="sha512-EKWWs1ZcA2ZY9lbLISPz8aGR2+L7JVYqBAYTq5AXgBkSjRSuQEGqWx8R1zAX16KdXPaCjOCaKE8MCpU0wcHlHA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css" integrity="sha512-Ez0cGzNzHR1tYAv56860NLspgUGuQw16GiOOp/I2LuTmpSK9xDXlgJz3XN4cnpXWDmkNBKXR/VDMTCnAaEooxA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script>
    // function browserRedirect() {
    //   var sUserAgent = navigator.userAgent.toLowerCase();
    //   var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    //   var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    //   var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    //   var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    //   var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    //   var bIsAndroid = sUserAgent.match(/android/i) == "android";
    //   var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    //   var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    //   if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
    //     var arr = location.href.split("?");
    //     if (arr.length > 1) {
    //       location.replace("wap/binguod41d.html?" + arr[1]);
    //     } else {
    //       location.replace("wap/binguo.html");
    //     }
    //   } else {
    //   }
    // }
    // browserRedirect();
  </script>
  <style>
    .link {
      
    }

    header {
      border: 0
    }
    header.hide {
     top: 0 !important;
    }
    header .link {
      font-size: 18px;
    }

    .menu{
      right: 12px !important;
      cursor: pointer;
      display: none;
      z-index: 99;
    }

    .img-menu {
      scale: 150% !important;
    }
    
    .menu-mobile {
      position: fixed;
      margin-top: 69px;
      left: 0;
      right: 0;
    }

    .list-menu_mobile {
        display: flex;
        flex-direction: column;
        padding: 0;
       
    }

    .item-mobile {
      margin: 10px 0;
      border-bottom: 1px solid #555;
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
  <script>
      (function (a, e, f, g, b, c, d) {
        a.ClickiTrackerName = b;
        a[b] = a[b] || function () { (a[b].queue = a[b].queue || []).push(arguments) };
        a[b].start = +new Date; c = e.createElement(f); d = e.getElementsByTagName(f)[0];
        c.async = 1; c.src = g; d.parentNode.insertBefore(c, d)
      })(window, document, 'script', '../stm-cdn.cn.miaozhen.com/clicki.minec92.js?v=' + Math.round(new Date().getTime() / 1000 / 300), 'stm_clicki');
    stm_clicki('create', 'dc-3797', 'auto');
    stm_clicki('send', 'pageview');
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
      <a href="https://tbht.vn/" class="logo"><img src="images-pc/logo-text.png"></a>
      <!-- Menu Mobile -->
      <!-- Start -->
      <a class="btnK menu" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <img src="images-pc/icon-menu.png" alt="Menu" class="icon img-menu">
      </a>
      <div class="collapse menu-mobile" id="collapseExample">
       <div class="card">
          <div class="card-body">
            <ul class="list-menu_mobile">
              <li class="item-mobile"> <a href="https://tbht.vn/" class="link link1" target="_blank">Trang chủ<span class="line"></span></a></li>
              <li class="item-mobile"> <a href="https://tbht.vn/cua-hang" class="link link1" target="_blank">Cửa hàng<span class="line"></span></a></li>
              <li class="item-mobile"> <a href="https://tbht.vn/lien-he" class="link link2" target="_blank">Đặt hàng<span class="line"></span></a></li>
              <li class="item-mobile"> <a href="https://tbht.vn/tin-tuc/chinh-sach-dai-ly" class="link link2" target="_blank">Đăng ký đối tác<span class="line"></span></a></li>
              <li class="item-mobile"> <a href="https://tbht.vn/nha-may-xe-dien-thai-hung " class="link link3" target="_blank">Giới thiệu nhà máy<span class="line"></span></a></li>
            </ul>
          </div>
       </div>
      </div>
      <!-- End -->
      <div class="headerNav">
        <a href="https://tbht.vn/" class="link link1" target="_blank">Trang chủ<span class="line"></span></a>
        <a href="https://tbht.vn/cua-hang" class="link link1" target="_blank">Cửa hàng<span class="line"></span></a>
        <a href="https://tbht.vn/lien-he" class="link link2" target="_blank">Đặt hàng<span class="line"></span></a>
        <a href="https://tbht.vn/tin-tuc/chinh-sach-dai-ly" class="link link2" target="_blank">Đăng ký đối tác<span class="line"></span></a>
        <a href="https://tbht.vn/nha-may-xe-dien-thai-hung " class="link link3" target="_blank">Giới thiệu nhà máy<span class="line"></span></a>
      </div>
      
      <a href="https://tbht.vn/dang-ky-lai-thu" class="btnY">
        <img src="images-pc/dangkylaithuwhite.png" class="">
        <img src="images-pc/dangkylaithublack.png" class="hover">
      </a>

      <a href="https://tbht.vn/lien-he" target="_blank" class="btnK living">
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
                  <img src="images-pc-carstyle/binguo/202309/color-car-color-txt-2-1.png" class="color-bt color-bt-1 on"
                    alt="">
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
                  <img src="images-pc-carstyle/binguo/202309/color-car-color-txt-3-1.png" class="color-bt color-bt-1 on"
                    alt="">
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
          <img src="images-pc-carstyle/binguo/202309/policy-txt.png" alt="" class="txt">
          <div class="btns">
            <div class="btn llb">
              <img src="images-pc-carstyle/binguo/policy-btn-1.png" class="bg">
              <img src="images-pc-carstyle/binguo/policy-btn-1-hover.png" class="hover">
            </div>
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
              </div>
            </div>

          </div>
        </div>
        <div class="swiper-slide slideP4-3">
          <div class="cont">
            <div class="fullBg3"></div>
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
            <p><a href="tel:+84 (0) 888 809 889" target="_blank">Hotline：+84 (0) 888 809 889</a></p>
          </footer>
        </div>
      </div>
    </div>
    <ul class="nav" style="display: block !important">
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
</body>
</html> 