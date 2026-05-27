$(function () {
  if ($(document.body).width() < 1171) {
    $(".sutong-mo-header-menu").click(function () {
      $(".sutong-mo-leftmenu").toggleClass("sutong-menu-transitioning");
    });
    $(".sutong-mo-leftmenu .tit span").click(function () {
      $(".sutong-mo-leftmenu").removeClass("sutong-menu-transitioning");
    });
    $(".sutong-down-btn").on("click", function () {
      $(this).parent("li").toggleClass("active");
      $(this).siblings("ul").slideToggle();
      return false;
    });
  }

  $(".sutong-search,.sutong-mo-header-search").click(function () {
    $(".sutong-search-box").toggle();
  });
  $(".sutong-search-box .close").click(function () {
    $(".sutong-search-box").hide();
  });

  // 顶部搜索栏提交搜索请求
  $('.search-box-only .submit_btn').click(function () {
    var formData = $(this).parents('.search-box-only').find('form').serialize();
    window.location.href = `/search?${formData}`;
  });

  // // 语言切换
  // var pathArr = location.pathname.split("/") || [];
  // var lang = pathArr[1] || "en";
  // var langList = [];
  // $(".language-switch li a").each(function () {
  //   langList.push($(this).data("lang"));
  // });
  // if (langList.includes(lang)) {
  //   var imgUrl = $(".sutong-header-lang .box img").attr("src");
  //   var imgUrlSeg = imgUrl.split("/");
  //   imgUrlSeg[imgUrlSeg.length - 1] = lang + ".png";
  //   $(".sutong-header-lang .box img").attr("src", imgUrlSeg.join("/"));
  //   $(".sutong-header-lang .box em").text(lang.toUpperCase());
  // }
});
