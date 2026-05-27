$(function () {

  var swiper3 = new Swiper('.bobo-quality .swiper', {

    loop: true,

    autoplay: 5000,

    slidesPerView: 2,

    spaceBetween: 16,

    pagination: {

      el: '.bobo-quality .swiper-pagination',

      clickable: true

    },

    navigation: {

      nextEl: '.bobo-quality .swiper-button-next',

      prevEl: '.bobo-quality .swiper-button-prev',

    },

    breakpoints: {

      1500: {

        slidesPerView: 3,

        spaceBetween: 58

      },

      1280: {

        slidesPerView: 3,

        spaceBetween: 45

      },

      992: {

        slidesPerView: 3,

        spaceBetween: 30

      }

    }

  });


});


