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
    // Hover
    $('.product__hover-area').each(function () {
      $(this).mouseover(function () {
        $(this).parent().find('.product__tooltip').fadeIn(100);
      });
      $(this).mouseleave(function () {
        $(this).parent().find('.product__tooltip').fadeOut(100);
      });
    });

    // Position
    $(document).mousemove(function (evt) {
      let mouseY = evt.clientY,
        mouseX = evt.clientX,
        tooltipHeight,
        tooltipWidth;

      $('.product__tooltip').each(function () {
        var tooltip = $(this);
        tooltipHeight = tooltip.outerHeight();
        tooltipWidth = tooltip.outerWidth();

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

  // $(window).resize(function () {
  //   if (windowWidth < 940) {
  //     showTooltipOnClick();
  //   } else {
  //     showTooltipOnHoer();
  //   }
  // });

  $('.close-tooltip').click(function () {
    event.preventDefault();
    // $('.overlay').fadeOut(200);
    $(this).closest('.product__tooltip').fadeOut(200);
  });
});
