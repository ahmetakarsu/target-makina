$(function () {
  var swiper3 = new Swiper(".zhiqing-application .swiper", {
    pagination: {
      el: ".zhiqing-application .swiper-pagination",
      clickable: true,
    },
    loop: false,
    // 移除autoplay配置，或显式设置为false，即可关闭自动轮播
    autoplay: false, // 核心修改：禁用自动轮播
  });
});