"use strict";

$(function () {
  var par10 = window.common.getQuery("par10");
  if(par10){
    $(".step1").fadeOut();
    $(".step2").fadeIn();
    $(".tab").addClass("tab2");
  }
  var carData = {};
  var tabledata = [];
  var periodList = {};
  var last_carId = "";
  var last_prov = "";
  var last_city = "";
  var myProv = "北京";
  var myCity = "北京";
  var userselected = false;
  $(".ddlCarProv").change(function () {
    $("#ddlCarProv").val($(this).val());
    $("#ddlCarProv2").val($(this).val());
    $("#frame_package select").attr("disabled", "true");
    myCity = false;
    getCity();
  });
  $(".ddlCarCity").change(function () {
    $("#frame_package select").attr("disabled", "true");
    bindCarType();
    getDealers();
  }); //品牌

  $("#ddlCarBrand").change(function () {
    $("#frame_package select").attr("disabled", "true");
    bindCarType(); //车系
  }); //车系

  $("#ddlCarType").change(function () {
    $("#frame_package select").attr("disabled", "true");
    bindCarStyle();
  }); //车型

  $("#ddlCarStyle").change(function () {
    $("#frame_package select").attr("disabled", "true");
    getLoanInfo();
  }); // 套餐类型

  $("#ddlLoanType").change(function () {
    $("#ddlFirstPay").empty();
    $("#ddlPayMoney").empty();
    $("#frame_package select").attr("disabled", "true");
    getLoanInfo();
  }); // 首付

  $("#ddlFirstPay").change(function () {
    $("#frame_package select").attr("disabled", "true");
    getLoanInfo();
  }); // 金额

  $("#ddlPayMoney").change(function () {
    $("#frame_package select").attr("disabled", "true");
    var quota1 = $(this).find("option:selected").data("quota");
    getLoanInfo({
      quota1: quota1,
      quota2: 0
    });
  }); // 年限

  $("#ddlRepayment").change(function () {
    $("#frame_package select").attr("disabled", "true"); // var option = $(this).find('option:selected');
    // var val = option.data('flexible') ? option.data('flexible') : option.data('quota') ? option.data('quota') : option.data('wisdom');
    // getLoanInfo(val);
    // var type = $("#ddlLoanType").find('option:selected').data('type')
    
    getLoanInfo();
  });
  guess_loaction(); //猜测位置初始化车系
  // getLoanInfo();//初始化套餐
  //“确定”按钮

  // $("#ASearch").click(function () {
  //   $("#frame_package select").attr("disabled", "true");
  //   getLoanInfo($("#ddlCarStyle").val());
  // });

  function guess_loaction() {
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
  } //绑定


  function bindDDL(ddl, data) {
    var arr = data.split(";");
    ddl.children().remove();
    var ii = 0;

    for (var i = 0; i < arr.length - 1; i++) {
      var arrTemp = arr[i].split(",");
      var v = i == 0 ? " selected=selected" : " ";
      ddl.append($("<option value=" + arrTemp[0] + v + ">" + arrTemp[1] + "</option>"));

      if (i == 0) {
        ii = arrTemp[0]; // getLoanInfo(ii);
      }
    }

    ddl.val(ii);
  }

  function getDealers(){
      $.ajax({
          type:"GET",
          url: api_server + "/api.php?s=/sgmw/index/dealerinfo&r=" + parseInt(Math.random() * 10000),
          data:{
              city: $("#ddlCarCity option:selected").text()
          },
          dataType:"json",
          success:function success(data){
            $("#ddlDealer").empty();
            data.forEach(function(e){
                $("#ddlDealer").append("<option value=".concat(e.code,">").concat(e.company, "</option>"));
            })
          }
      })
  }

  function getProvince() {
    $.ajax({
      type: "GET",
      url: api_server + "/api.php?s=/sgmw/index/getprovince&r=" + parseInt(Math.random() * 10000),
      dataType: "json",
      success: function success(data) {
        if (data.data.length) {
          var prov = data.data.find(function (e) {
            return e.province_desc.substr(0, 2) == myProv.substr(0, 2);
          });
          
          var provId = prov.province_id || "1";

          var par1 = window.common.getQuery("par1");
          if(par1 != "" && !userselected) provId = par1;

          data.data.forEach(function (e) {
            $(".ddlCarProv").append("<option value=".concat(e.province_id, ">").concat(e.province_desc, "</option>"));
          });
          console.log(provId)
          $(".ddlCarProv").find("option[value=".concat(provId, "]")).attr("selected", true);
          getCity();
        }
      }
    });
  }

  function getCity() {
    var provId = $(".ddlCarProv option:selected").val();
    $.ajax({
      type: "GET",
      url: api_server + "/api.php?s=/sgmw/index/getcity&r=" + parseInt(Math.random() * 10000),
      data: {
        id: provId
      },
      dataType: "json",
      success: function success(data) {
        if (data.data.length) {
          $(".ddlCarCity").empty();
          data.data.forEach(function (e) {
            $(".ddlCarCity").append("<option value=".concat(e.city_id, ">").concat(e.city_desc, "</option>"));
          });

          var par2 = window.common.getQuery("par2");
          if(par2 != null && par2 != "" && !userselected){
            var cityId = par2;
            $(".ddlCarCity").find("option[value=".concat(cityId, "]")).attr("selected", true);
          }else{
            if (myCity) {
              var city = data.data.find(function (e) {
                console.log(e.city_desc)
                return e.city_desc.substr(0, 2) == myCity.substr(0, 2);
              });
              var cityId = city.city_id || "1";
              $(".ddlCarCity").find("option[value=".concat(cityId, "]")).attr("selected", true);
            }
          }

          bindCarType();
          getDealers();
        }
      }
    });
  } //绑定车系


  function bindCarType() {
    var val = $("#ddlCarBrand").val();

    if (carData[val]) {
      renderCarStyle(carData[val]);
    } else {
      $.ajax({
        type: "GET",
        url: api_server + "/api.php?s=/sgmw/index/getcarlist&r=" + parseInt(Math.random() * 10000),
        data: {
          id: val
        },
        ContentType: "text/plain",
        dataType: "json",
        success: function success(data) {
          carData[val] = data.data;
          renderCarStyle(carData[val]);
        },
        error: function error(err) {
          var err = JSON.stringify(err);
        }
      });
    }
  }

  function renderCarStyle(carData) {
    $("#ddlCarType").children().remove();
    var arr = [];

    for (var i = 0, len = carData.length; i < len; i++) {
      var car_info = carData[i].parent_car_id;

      if (arr.indexOf(car_info) == -1) {
        arr.push(car_info);
        $("#ddlCarType").append("<option data-promotion='" + carData[i].has_promotion + "' value='" + car_info + "' data-val='"+carData[i].parent_car_id+"'>" + carData[i].parent_car_desc + "</option>");
      }
    }

    var par4 = window.common.getQuery("par4");
    if(par4 != null && par4 != "" && !userselected){
      $("#ddlCarType").find("option[value=".concat(par4, "]")).attr("selected", true);
    }

    bindCarStyle();
  } //绑定车型


  function bindCarStyle() {
    var val = $("#ddlCarType").val();
    var brandVal = $("#ddlCarBrand").val();
    $("#ddlCarStyle").children().remove();

    for (var i = 0, len = carData[brandVal].length; i < len; i++) {
      var key = carData[brandVal][i];

      if (key.parent_car_id == val) {
        $("#ddlCarStyle").append("<option data-price=".concat(key.guide_price, " value=").concat(key.car_id, ">").concat(key.car_desc, "</option>"));
      }
    }

    var par5 = window.common.getQuery("par5");
    if(par5 != null && par5 != "" && !userselected){
      $("#ddlCarStyle").find("option[value=".concat(par5, "]")).attr("selected", true);
    }


    getLoanInfo();
  }

  function formatNumberRgx(num) {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  } // 获取车贷套餐


  function getLoanInfo(obj) {
    // $("#frame_package select").removeAttr("disabled");
    // return;
    var car_id = $("#ddlCarStyle option:selected").val();
    var provId = $("#ddlCarProv option:selected").val();
    var cityId = $("#ddlCarCity option:selected").val();
    var promotion = $("#ddlCarType option:selected").data("promotion");

    if (promotion == 1) {
      $(".wh_rate").show();
    } else {
      $(".wh_rate").hide();
    }

    var id = $("#ddlLoanType option:selected").val();
    $(".wh_ratio").show();
    $(".wh_money").hide();

    if (id == 2) {
      var tds = 7;
    } else if (id == 5) {
      var tds = 7;
    } else if (id == 1) {
      var tds = 6;
      $(".wh_money").show();
      $(".wh_ratio").hide();
    } else if (id == 6) {
      var tds = 9;
      $(".wh_rate").show();
    }

    setLoanTypeTable("数据加载中...", tds);

    if (car_id != last_carId || provId != last_prov || cityId != last_city) {
      $.ajax({
        type: "GET",
        url: api_server + "/api.php?s=/sgmw/index/getloan&r=" + parseInt(Math.random() * 10000),
        data: {
          car_id: car_id,
          province_id: provId,
          city_id: cityId
        },
        dataType: "json",
        success: function success(data) {
          if (data.IsSuccess == 1) {
            var par6 = window.common.getQuery("par6");
            if(par6 != null && par6 != "" && !userselected){
              $("#ddlLoanType").find("option[value=".concat(par6, "]")).attr("selected", true);
            }
            var par7 = window.common.getQuery("par7");
            if(par7 != null && par7 != "" && !userselected){
              $("#ddlFirstPay").find("option[value='".concat(par7, "']")).attr("selected", true);
            }

            tabledata = data;
            renderLoanInfo(obj);
            last_carId = car_id;
            last_prov = provId;
            last_city = cityId;
          } else {
            setLoanTypeTable("数据正在维护中，多种优惠方案敬请期待", tds);
          }
        }
      });
    } else {
      renderLoanInfo(obj);
    }
  }

  function renderLoanInfo(obj) {
    var data = tabledata.loan_type_list;
    var id = $("#ddlLoanType option:selected").val();
    var cartype = $("#ddlCarType").val();

    if (id == 2) {
    } else if (id == 5) {
    } else if (id == 1) {
      $(".wh_money").show();
      $(".wh_ratio").hide();
    } else if (id == 6) {
      $(".wh_rate").show();
    }
    // $(".wh_ratio").show();
    // $(".wh_money").hide();

    if (id == 2) {
      $(".firstpay").hide();
      $(".firstpay50").show();
      // $(".wh_wisdom").hide();
      // $(".wh_5050").show();
    } else if (id == 5) {
      $(".firstpay").show();
      $(".firstpay50").hide();
      // $(".wh_wisdom").hide();
      // $(".wh_flexible").show();
    } else if (id == 1) {
      // $(".wh_rate,.wh_money").show();
      // $(".wh_wisdom,.wh_ratio").hide();
    } else if (id == 6) {
      // $(".wh_rate,.wh_wisdom").show();
    }

    var promotion = $("#ddlCarType option:selected").data("promotion");
    var loanTypeOption = "";
    $("#ddlLoanType").empty();

    var par8 = window.common.getQuery("par8");
    var par9 = window.common.getQuery("par9");

    for (var i = 0, len = data.length; i < len; i++) {
      var arr = data[i];
      if(arr.loan_type_id == 4) continue;
      loanTypeOption = "<option value=" + arr.loan_type_id + " " + (id == arr.loan_type_id ? "selected" : "") + ">" + loanName(arr.loan_type_id) + "</option>";
      $("#ddlLoanType").append(loanTypeOption);

      if (id == arr.loan_type_id) {
        //选择了贷款类型
        var price = $("#ddlCarStyle option:selected").data("price");

        if (arr.loan_type_id == 2) {
          //选择5050

          $("#ddlFirstPay").html('<option value="' + arr.downpayment_rate + '">' + arr.downpayment_rate * 100 + "%</option>");
          $("#ddlRepayment").html('<option value="' + arr.period + '">' + arr.period + "期</option>");

          $(".province_city").html($("#ddlCarProv option:selected").text() + $("#ddlCarCity option:selected").text());
          $(".total_price").html(formatNumberRgx(price - 0)+"元");
          $(".downpayment_amount").html(formatNumberRgx(arr.downpayment_amount)+"元");
          $(".loan_amount").html(formatNumberRgx(arr.loan_amount)+"元");
          $(".month_pay").html(formatNumberRgx(arr.month_pay)+"元");
          $(".interest_rate").html((arr.interest_rate * 100).toFixed(2)+"%");


          
        } else if (arr.loan_type_id == 5) {
          //选择了灵活贷
          // if(info=='flexible'){
          //     var firstPay = 0.2;//默认选择第一个首付比例
          // }else{
          var firstPay = $("#ddlFirstPay option:selected").val() || 0.2; // }
        // var firstPay = (cartype=="宝骏E200"||cartype=="宝骏E100")?0.15:0.2;

          var paymentHtml = "";
          var firstPayHtml = "";
          var crr = [];

          for (var k = 0, len1 = arr.loan_list[0].downpayment_rate_list.length; k < len1; k++) {
            var key = arr.loan_list[0].downpayment_rate_list[k];
            firstPayHtml += '<option value="' + key.downpayment_rate + '" ' + (firstPay == key.downpayment_rate ? "selected" : "") + ">" + key.downpayment_rate * 100 + "%</option>";

            if (firstPay == key.downpayment_rate) {
              //选择首付比例
              var payment = $("#ddlRepayment option:selected").val(); //选择的年限
              if(payment == undefined){
                payment = par9;
              }

              var period_list = key.period_list;

              for (var j = 0, len2 = period_list.length; j < len2; j++) {
                var brr = key.period_list[j];

                if (crr.indexOf(brr.period) == -1) {
                  crr.push(brr.period);
                  paymentHtml += '<option value="' + brr.period + '" ' + (payment == brr.period ? "selected" : "") + ">" + brr.period + "期</option>";
                }

                if (payment == brr.period) {
                  $(".province_city").html($("#ddlCarProv option:selected").text() + $("#ddlCarCity option:selected").text());
                  $(".total_price").html(formatNumberRgx(price - 0)+"元");
                  $(".downpayment_amount").html(formatNumberRgx(key.downpayment_amount)+"元");
                  $(".loan_amount").html(formatNumberRgx(key.loan_amount)+"元");
                  $(".month_pay").html(formatNumberRgx(brr.month_pay)+"元");
                  $(".interest_rate").html((brr.interest_rate * 100).toFixed(2)+"%");
                  
                } else {
                  if (j == 0) {
                    $(".province_city").html($("#ddlCarProv option:selected").text() + $("#ddlCarCity option:selected").text());
                    $(".total_price").html(formatNumberRgx(price - 0)+"元");
                    $(".downpayment_amount").html(formatNumberRgx(key.downpayment_amount)+"元");
                    $(".loan_amount").html(formatNumberRgx(key.loan_amount)+"元");
                    $(".month_pay").html(formatNumberRgx(brr.month_pay)+"元");
                    $(".interest_rate").html((brr.interest_rate * 100).toFixed(2)+"%");
                    
                  }
                }
             }
              $("#ddlRepayment").html(paymentHtml);
            }
          }

          $("#ddlFirstPay").html(firstPayHtml); // $('#ddlFirstPay option:selected').text(firstPayT);
        } else if (arr.loan_type_id == 1) {
          //定额贷
          var crr = [];
          var paymentHtml = "";
          var payMoneyHtml = "";

          var quota = 0;
          if(obj){
            quota = obj.quota1;
          }
          if(par8 != null && par8 != "" && par8 != "null" && !userselected){
            if(!isNaN(parseInt(par8))){
              quota = parseInt(par8);
            }
          }


          for (var j = 0; j < arr.fix_loan_amount_list.length; j++) {
            var brr = arr.fix_loan_amount_list[j];
            if (j == quota) {
              payMoneyHtml += '<option data-quota="' + j + '" value="'+brr.fix_loan_amount+'" selected >' + brr.fix_loan_amount / 10000 + "W</option>";
              
            } else {
              payMoneyHtml += '<option data-quota="' + j + '" value="'+brr.fix_loan_amount+'" >' + brr.fix_loan_amount / 10000 + "W</option>";
            }
          }

          var brr = arr.fix_loan_amount_list[quota];
          
          for(var j = 0; j < brr.period_list.length; j++){
            var period_list = brr.period_list[j];
            paymentHtml += '<option data-quota="' + j + '" value="' + period_list.period + '" >' + period_list.period + "期</option>";
            if (j == 0) {

              $(".province_city").html($("#ddlCarProv option:selected").text() + $("#ddlCarCity option:selected").text());
              $(".total_price").html(formatNumberRgx(price - 0)+"元");
              $(".downpayment_amount").html(formatNumberRgx(brr.downpayment_amount)+"元");
              $(".loan_amount").html(formatNumberRgx(brr.fix_loan_amount)+"元");
              $(".month_pay").html(formatNumberRgx(period_list.month_pay)+"元");
              $(".interest_rate").html((period_list.interest_rate * 100).toFixed(2)+"%");
            }
          }

          $("#ddlRepayment").html(paymentHtml);
          $("#ddlPayMoney").html(payMoneyHtml);
        } else if (arr.loan_type_id == 6) {
          //智慧贷
          // if(info=='wisdom'){
          //     var firstPay = 0.2;//默认选择第一个首付比例
          // }else{
        var firstPay = $("#ddlFirstPay option:selected").val() || 0.2; // }
        // var firstPay = (cartype=="宝骏E200"||cartype=="宝骏E100")?0.15:0.2;

          var paymentHtml = "";
          var firstPayHtml = "";
          var crr = [];

          for (var k = 0, len1 = arr.loan_list[0].downpayment_rate_list.length; k < len1; k++) {
            var key = arr.loan_list[0].downpayment_rate_list[k];
            firstPayHtml += '<option value="' + key.downpayment_rate + '" ' + (firstPay == key.downpayment_rate ? "selected" : "") + ">" + key.downpayment_rate * 100 + "%</option>";

            if (firstPay == key.downpayment_rate) {
              //选择首付比例
              var payment = $("#ddlRepayment option:selected").val(); //选择的年限

              var period_list = key.period_list;

              for (var j = 0, len2 = period_list.length; j < len2; j++) {
                var brr = key.period_list[j];
                var month_pay_list = brr.month_pay_list[0];

                if (crr.indexOf(month_pay_list.period) == -1) {
                  crr.push(month_pay_list.period);
                  paymentHtml += '<option value="' + month_pay_list.period + '" ' + (payment == month_pay_list.period ? "selected" : "") + ">" + month_pay_list.period + "期</option>";
                }

                if (payment == month_pay_list.period) {
                  var html = "";
                  html += "<tr>";
                  html += '<td class="m_1" align="center" valign="middle" bgcolor="#FFFFFF">';
                  html += '<span class="lblPrice">' + $("#ddlCarProv option:selected").text() + $("#ddlCarCity option:selected").text();
                  "</span></td>";
                  html += '<td class="m_1" align="center" valign="middle" bgcolor="#FFFFFF">';
                  html += '<span class="lblPrice">' + formatNumberRgx(price - 0) + "元</span></td>"; //指导价

                  html += '<td align="center">';
                  html += '<span class="lblPer_1">' + formatNumberRgx(key.downpayment_amount) + "元</span></td>"; //首付

                  html += '<td align="center">';
                  html += '<span class="lblLastPersent_1">' + formatNumberRgx(key.loan_amount) + "元</span></td>"; //贷款金额

                  html += '<td align="center">';
                  html += '<span class="lblLimit_1">' + month_pay_list.tail_money_rate * 100 + "%</span></td>"; //尾款比例

                  html += '<td align="center">';
                  html += '<span class="lblPay_1">' + formatNumberRgx(month_pay_list.month_pay) + "元</span></td>"; //月供

                  html += '<td align="center">';
                  html += '<span class="lblLimit_1">' + formatNumberRgx(month_pay_list.tail_money) + "元</span></td>"; //尾款金额

                  html += '<td align="center">';
                  html += '<span class="lblLastPersent_1">' + (brr.interest_rate * 100).toFixed(2) + "%</span></td>"; //利率

                  html += '<td align="center">';
                  html += '<a href="https://www.sgmw.com.cn/loan_apply.htm" target="_blank">申请</a></td>';
                  html += "</tr>";
                } else {
                  if (j == 0) {
                    var html = "";
                    html += "<tr>";
                    html += '<td class="m_1" align="center" valign="middle" bgcolor="#FFFFFF">';
                    html += '<span class="lblPrice">' + $("#ddlCarProv option:selected").text() + $("#ddlCarCity option:selected").text();
                    "</span></td>";
                    html += '<td class="m_1" align="center" valign="middle" bgcolor="#FFFFFF">';
                    html += '<span class="lblPrice">' + formatNumberRgx(price - 0) + "元</span></td>"; //指导价

                    html += '<td align="center">';
                    html += '<span class="lblPer_1">' + formatNumberRgx(key.downpayment_amount) + "元</span></td>"; //首付

                    html += '<td align="center">';
                    html += '<span class="lblLastPersent_1">' + formatNumberRgx(key.loan_amount) + "元</span></td>"; //贷款金额

                    html += '<td align="center">';
                    html += '<span class="lblLimit_1">' + month_pay_list.tail_money_rate * 100 + "%</span></td>"; //尾款比例

                    html += '<td align="center">';
                    html += '<span class="lblPay_1">' + formatNumberRgx(month_pay_list.month_pay) + "元</span></td>"; //月供

                    html += '<td align="center">';
                    html += '<span class="lblLimit_1">' + formatNumberRgx(month_pay_list.tail_money) + "元</span></td>"; //尾款金额

                    html += '<td align="center">';
                    html += '<span class="lblLastPersent_1">' + (brr.interest_rate * 100).toFixed(2) + "%</span></td>"; //利率

                    html += '<td align="center">';
                    html += '<a href="https://www.sgmw.com.cn/loan_apply.htm" target="_blank">申请</a></td>';
                    html += "</tr>";
                  }
                }
              }

              $("#loanTypeTable").html(html);
              $("#ddlRepayment").html(paymentHtml);
            }
          }
          $("#ddlFirstPay").html(firstPayHtml);
        }
      }
    }

    var oldid = id;
    id = $("#ddlLoanType option:selected").val();
    if(oldid != id){
      $(".wh_ratio").show();
      $(".wh_money").hide();

      if (id == 2) {
      } else if (id == 5) {
      } else if (id == 1) {
        $(".wh_money").show();
        $(".wh_ratio").hide();
      } else if (id == 6) {
        $(".wh_rate").show();
      }

      renderLoanInfo();
    }

    $("#frame_package select").removeAttr("disabled");

    function loanName(id) {
      switch (id) {
        case "1":
          return "定额贷";

        case "2":
          return "5050";

        case "5":
          return "灵活贷";

        case "6":
          return "智慧贷";
      }
    }
    userselected = true;
  } // 表格加载及异常显示


  function setLoanTypeTable(str, num) {
    var html = "";
    html += "<tr>";
    html += '<td colspan="' + num + '" class="m_1" align="center" valign="middle" bgcolor="#FFFFFF"><span id="lblPrice">' + str + "</span></td>";
    html += "</tr>";
    $("#loanTypeTable").html(html);
  }

  function getLoanInfoCallBack(data) {
    //清空之前的痕迹
    clearLoan(); //绑定 车型、价格、链接

    var carInfo = $(data).find("CarInfo");
    $("#lblStyleName").text(getFormattedName(carInfo.children("Name").text()));
    $("#lblPrice").text("￥" + carInfo.children("Price").text());
    changeLink(""); //绑定套餐信息

    $(data).find("Loan").each(function (i) {
      var packageId = $(this).attr("PId");
      $("#lblPer_" + packageId).text($(this).children("Percent").text() + "%");
      $("#lblLimit_" + packageId).text($(this).children("Limit").text());
      var temp = $(this).children("LastPersent").text();

      if (temp == "0") {
        $("#lblLastPersent_" + packageId).text("--");
      } else {
        $("#lblLastPersent_" + packageId).text(temp + "%");
      }

      $("#lblPay_" + packageId).text($(this).children("Pay").text());
      changeLink($(this).children("Name").text());
    });
  }

  function clearLoan() {
    $("#lblPrice").text("--");
    $("#lblStyleName").text("--");

    for (var i = 1; i <= 7; i++) {
      $("#lblPer_" + i).text("--");
      $("#lblLimit_" + i).text("--");
      $("#lblLastPersent_" + i).text("--");
      $("#lblPay_" + i).text("--");
    }

    changeLink("#");
  }

  function changeLink(url) {
    var links = document.getElementsByName("applyLink");

    for (var i = 0; i < links.length; i++) {
      links[i].href = "ApplyIntention.aspx";
    }
  } //生成带换行的车款名


  function getFormattedName(targetName) {
    var arr = targetName.split(" ");
    var index = arr.length / 2;
    var temp = "";

    for (var i = 0; i < index; i++) {
      temp += arr[i] + " ";
    }

    return temp + "\n" + targetName.substring(temp.length, targetName.length);
  }
});