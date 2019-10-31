$(document).ready(function () {

  // Menu
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

  // Get window size
  var windowWidth = 0;

  function getWinSize() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
  }

  getWinSize();
  $(window).resize(getWinSize);

  // Tooltip 
  function showTooltipOnHoer() {
    $('.product__hover-area').mouseenter(function () {
      var tooltip = $(this).parent().find('.product__tooltip');

      tooltip.fadeIn(100);
      $(this).mouseleave(function () {
        tooltip.fadeOut(100);
        $(document).off('mousemove');
      });

      $(document).mousemove(function (evt) {
        var mouseY = evt.clientY,
          mouseX = evt.clientX,
          tooltipHeight = tooltip.outerHeight(),
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
    $(this).closest('.product__tooltip').fadeOut(200);
  });



  function animateCartAdding(clickedButton) {
    // var cart;
    // if (windowWidth < 1200) {
    //   cart = $('.page-header__basket-mob');
    // } else {
    //   cart = $('.page-header__basket');
    // }
    // $(window).resize(function () {
    //   if (windowWidth < 1200) {
    //     cart = $('.page-header__basket-mob');
    //   } else {
    //     cart = $('.page-header__basket');
    //   }
    // });

    // // button.find($('.cart-btn'));

    // var icon = this.find($('.cart-btn__icon'));

    // // icon.css('fill','ccc')

    // // .animate({
    // //     'top': cart.offset().top + 10,
    // //     'left': cart.offset().left + 10,
    // //   }, 1000, 'easeInOutExpo');

    //   console.log(clickedButton);
  }

  function createIconEl(button) {
    button.append('<svg class="cart-btn__add-icon" width="30" height="30"><use xlink:href="img/sprite.svg#water"></use></svg>');
  }

  $('.cart-btn').click(function (evt) {
    evt.preventDefault();
    createIconEl($(this));

    var cart;
    if (windowWidth < 1200) {
      cart = $('.page-header__basket-mob');
    } else {
      cart = $('.page-header__basket');
    }
    var btnaddcart = $(this);
    var icon = $(this).find($('.cart-btn__add-icon'));

    icon
      .css({
        'opacity': 0.5,
        'position': 'fixed',
        'top':  btnaddcart.offset().top + 10,
        'left': btnaddcart.offset().left + 10,
        'z-index': 2,
        // '-webkit-transform': 'translateX(' + '-50% ' + ')',
        // '-moz-transform': 'translateX(' + '-50% ' + ')',
        // '-ms-transform': 'translateX(' + '-50% ' + ')',
        // '-o-transform': 'translateX(' + '-50% ' + ')',
        // 'transform': 'translateX(' + '-50% ' + ')',

        // '-webkit-transform': 'translate(' + ui.value + ')',
        // '-moz-transform': 'translate(' + ui.value + ')',
        // '-ms-transform': 'translate(' + ui.value + ')',
        // '-o-transform': 'translate(' + ui.value + ')',
        // 'transform': 'translate(' + ui.value + ')',
        'width': 50,
        'height': 50
      })
      .animate({
        'opacity': 1,
      }, 300)
      .animate({
        'top': cart.offset().top + 10,
        'left': cart.offset().left + 10,
      }, 500)

    console.log(cart.offset().top)
  });

  // Footer 
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
