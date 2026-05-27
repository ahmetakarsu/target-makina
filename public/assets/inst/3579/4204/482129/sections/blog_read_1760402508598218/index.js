$(function() {
  $('.blog-content-nav h4').click(function () {
    if ($(this).siblings('ul').is(':hidden')) {
      $(this).removeClass('close').siblings('ul').slideDown();
    } else {
      $(this).addClass('close').siblings('ul').slideUp();
    }
  });

  var blog = $('.blog-nr');
  $('#affixMenu').affix({
    offset: {
      top: function () {
        return (this.top = $('.blog-content-left').offset().top);
      },
      bottom: function () {
        return (this.bottom = $('body').outerHeight(true) - blog.offset().top - blog.outerHeight(true) + 60);
      },
    },
  });
  $('.blog-nav a').click(function () {
    var link = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(link).offset().top + 'px',
      },
      {
        duration: 500,
        easing: 'swing',
      }
    );
    return false;
  });
})