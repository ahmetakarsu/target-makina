// certifications
$(function () {
  var swiper3 = new Swiper(".guanxiang-about-quality .quality-list", {
    slidesPerView: 1,
    spaceBetween: 39,
    loop: true,
    pagination: {
      el: '.guanxiang-about-quality .swiper-pagination',
      type: 'progressbar',
      clickable :true
    },
    navigation: {
      nextEl: '.guanxiang-about-quality .swiper-button-next',
      prevEl: '.guanxiang-about-quality .swiper-button-prev'
    },
    breakpoints: {
      960: {
        slidesPerView: 3,
      }
    }
  });
});