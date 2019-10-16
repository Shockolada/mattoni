$(document).ready(function () {

  if ($(window).width() < 940) {
    $('.product__hover-area').click(function () {
      console.log('+');
      $(this).parent().find('.product__tooltip').fadeIn(200);
      // $('.overlay').fadeIn(200);
    });
  } else {
    // $('.product__hover-area').mouseenter(function () {
    //   console.log('++');
    //   $(this).parent().find('.product__tooltip').fadeIn(100);
    // });
    // $('.product__hover-area').mouseleave(function () {
    //   $(this).parent().find('.product__tooltip').fadeOut(100);
    // });
  }

  $(window).resize(function () {
    if ($(window).width() < 940) {
      $('.product__hover-area').click(function () {
        console.log('+');
        $(this).parent().find('.product__tooltip').fadeIn(200);
        // $('.overlay').fadeIn(200);
      });
    } else {

    }
  });

  $('.close-tooltip').click(function () {
    event.preventDefault();
    $('.overlay').fadeOut(200);
    $(this).closest('.product__tooltip').fadeOut(200);
  });



  //   $('.overlay').click(function () {
  //     event.preventDefault();
  //     $(this).fadeOut(200);
  //     $('.modal').removeClass('active');
  //   });

  // $('.modal__close-btn').click(function () {
  //   event.preventDefault();
  //   $('.overlay').fadeOut(200);
  //   $('.modal').removeClass('active');
  // });

  $('.menu__btn').click(function () {
    event.preventDefault();
    $('.menu').slideToggle(200);
    $(this).toggleClass('active');
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 200) {
      $('.page-header__wrap').addClass('scrolled');
    } else {
      $('.page-header__wrap').removeClass('scrolled');
    }
  });
});
