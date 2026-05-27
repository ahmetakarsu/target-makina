$(function () {
  initSwiper()
  function initSwiper() {
    // keshiou-browse-goods-carousel-swiper
    new Swiper(`.kuangke-advantage-swiper`, {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 3000
      },
      effect: 'slide',
      breakpoints: {
        1280: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        552: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        1: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    })
  }
})
