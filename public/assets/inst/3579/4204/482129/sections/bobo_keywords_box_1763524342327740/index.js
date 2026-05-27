  
$(function() {

/*
	$(window).scroll(function () {
		console.log($(this).scrollTop());
		if ($(this).scrollTop() > 1800) {
			$("body:not(.no-fix) .main-left").addClass("main-left-fix");
		} else {
			$("body:not(.no-fix) .main-left").removeClass("main-left-fix");
		}
	});
*/



  var blog = $('.az_ser_area');
  $('.bobo-keyword-box').affix({
    offset: {
      top: function () {
        return (this.top = $('.az_ser_area').offset().top);
      },
      bottom: function () {
        return (this.bottom = $('body').outerHeight(true) - blog.offset().top - blog.outerHeight(true) + 60);
      },
    },
  });


})