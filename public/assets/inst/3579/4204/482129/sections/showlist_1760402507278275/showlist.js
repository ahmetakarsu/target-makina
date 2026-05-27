$(function() {
  // 询盘表单弹出
  $('.showlist-cd-popup-trigger').on('click', function(event) {
    event.preventDefault();
    $('.showlist-cd-popup').addClass('is-visible');
  });
  $('.showlist-cd-popup').on('click', function(event) {
    if ($(event.target).is('.showlist-cd-popup-close')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
});
