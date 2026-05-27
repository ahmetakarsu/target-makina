// 询盘点击弹出
jQuery(document).ready(function ($) {
  if (typeof cdPopupFlag !== 'undefined') return;
  cdPopupFlag = 1;

  //open popup
  $('.cd-popup-trigger').on('click', function() {
    var index = $('.cd-popup-trigger').index(this);
    $('.click-popup').removeClass('is-visible');
    $('.click-popup').eq(index).addClass('is-visible');
  });
  // mobile popup
  $('.m-cd-popup-trigger').on('click', function() {
    $('.click-popup').removeClass('is-visible');
    $('.click-popup').eq(0).addClass('is-visible');
  });
  // three party
  $('.fix-cd-popup-trigger').on('click', function() {
    $('.click-popup').removeClass('is-visible');
    $('.click-popup').eq(0).addClass('is-visible');
  });

  //close popup
  $('.click-popup').on('click', function (event) {
    if ($(event.target).is('.cd-popup-close') || $(event.target).is('.click-popup')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  
  //close popup when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == '27') {
      $('.click-popup').removeClass('is-visible');
    }
  });

   //open popup
   $('.cd-popup-trigger-download').on('click', function() {
    localStorage.setItem('download_src', $(this).data('src'));
    $('.click-popup').removeClass('is-visible');
    $('.click-popup-download').addClass('is-visible');
  });

  //close popup
  $('.click-popup-download').on('click', function (event) {
    if ($(event.target).is('.cd-popup-close') || $(event.target).is('.click-popup-download')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
      localStorage.setItem('download_src', '');
    }
  });
  
  //close popup when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == '27') {
      $('.click-popup-download').removeClass('is-visible');
      localStorage.setItem('download_src', '');
    }
  });
});