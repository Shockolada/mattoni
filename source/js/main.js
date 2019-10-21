$(document).ready(function () {

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


$(document).ready(function () {

  let windowWidth = 0,
    windowHeight = 0;

  function getWinSize() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    console.log(windowWidth);
  }

  getWinSize();
  $(window).resize(getWinSize);

  function showTooltipOnHoer() {
    $('.product__hover-area').mouseenter(function () {
      let tooltip = $(this).parent().find('.product__tooltip');
      console.log(tooltip);

      tooltip.fadeIn(100);
      $(this).mouseleave(function () {
        tooltip.fadeOut(100);
        $(document).off('mousemove');
      });

      $(document).mousemove(function (evt) {
        let mouseY = evt.clientY,
          mouseX = evt.clientX,
          tooltipHeight = tooltip.outerHeight(),
          tooltipWidth = tooltip.outerWidth();

          console.log(mouseX);

        tooltip.css({
          'left': mouseX,
          'top': mouseY + 20
        });

        if (tooltipWidth + mouseX > windowWidth) {
          tooltip.css({
            'left': mouseX - tooltipWidth
          });
        }

        // if (tooltipHeight + mouseY > windowHeight) {
        //   tooltip.css({
        //     'top': mouseY - tooltipHeight - 20
        //   });
        // }
      });
    });
  }

  function showTooltipOnClick() {
    $('.product__hover-area').click(function () {
      $(this).parent().find('.product__tooltip').fadeIn(200);
      // $('.overlay').fadeIn(200);
    });
  }
  if (windowWidth < 940) {
    showTooltipOnClick();
  } else {
    showTooltipOnHoer();
  }

  $(window).resize(function () {
    if (windowWidth < 940) {
      $('.product__hover-area').off('mouseenter mouseleave');
      $(document).off('mousemove');

      $('.product__tooltip').css({
        'left': '50%',
        'top': '50%'
      });

      showTooltipOnClick();
    } else {
      $('.product__hover-area').off('click');
      showTooltipOnHoer();
    }
  });

  $('.close-tooltip').click(function () {
    event.preventDefault();
    // $('.overlay').fadeOut(200);
    $(this).closest('.product__tooltip').fadeOut(200);
  });

  function footer() {
    var docHeight = $(window).height(),
      footerHeight = $('.page-footer__wrap').outerHeight(),
      footerTop = $('.page-footer__wrap').position().top + footerHeight;

    if (footerTop < docHeight) {
      $('.page-footer__wrap').css('margin-top', (docHeight - footerTop) + 'px');
    }
  }
  footer();

  $(window).resize(function () {
    footer();
  });
});
