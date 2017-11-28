$(document).ready(function() {

    $('.fixed-btn-up').click(function() {
        $('body,html').animate({
            scrollTop: 60
        }, 600).animate({
            scrollTop: 0
        }, 900);
        return false;
    });

    $(window).scroll(function() {

        var wScroll = $(this).scrollTop();

        if (wScroll > 0) {
            $('body').addClass('fixed-ui');
        } else {
            $('body').removeClass('fixed-ui');
        }

        if ($(document).scrollTop() > 100) {
            $('.fixed-btn-up').fadeIn();
        } else {
            $('.fixed-btn-up').fadeOut();
        }

        if( $('#mainContent').hasClass('scroll-ui') ) {

          $('.block-bcg-1 .block-bcg-center').css({
              'top': wScroll / 2 - $('.block-bcg-1 .block-bcg-center').offset().top / 3
          });

          $('.block-bcg-2 .block-bcg-center').css({
              'bottom': wScroll / 2 - $('.block-bcg-2 .block-bcg-center').offset().top / 3
          });

          $('.block-bcg-3 .block-bcg-center').css({
              'top': wScroll / 2 - $('.block-bcg-3 .block-bcg-center').offset().top / 3
          });

        };


    });

    $('.head-top-nav .item').hover(

        function() {
            $('.sub-nav').removeClass('active animate');
            $(this).children('.sub-nav').stop(true, false).fadeIn(300, completeOpen).addClass('active');
        },

        function() {
            $('.sub-nav').removeClass('active animate').stop(true, false).fadeOut(300);
        }

    );

    function completeOpen() {
        $('.sub-nav.active').addClass('animate');
    }

    $('#open-button').click(function() {
        $('.head-top-nav').slideToggle();
    });

    $('.slider-head-init').slick({
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
    });

    $('.slider-title-text').click(function() {
        $('.slider-nav').removeClass('active-up');
        $(this).parent().parent('.slider-nav').addClass('active-up');
        $('.slider-head-init').slick('slickGoTo', $(this).parent().parent('.slider-nav').index());
    });

    $('.slider-head-init').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        $('.slider-nav').removeClass('active-up');
        $('.slider-nav').eq(currentSlide).addClass('active-up');
    });

    $('.bottom-jump-block span').click(function() {
        $('body,html').animate({
            scrollTop: $(".services-main").offset().top - 100
        }, 500).animate({
            scrollTop: $(".services-main").offset().top
        }, 800);
    });

    $('.datepicker-field .custom-field').pickmeup();

    $('.form-request-email').validate({
      rules: {
        name: "required",
        phone: "required",
        pickup: "required",
        vehicle: "required",
        hours: "required",
        services: "required",
        passengers: "required"
      },

      messages: {
        name: 'No name',
        phone: 'No phone number',
        pickup: 'No pickup location',
        vehicle: 'No vehicle type',
        hours: 'No hours',
        services: 'No service type',
        passengers: 'No number of passengers'
      }
    });

    $('.form-contact').validate({
      rules: {
        name: "required",
        phone: "required",
        email: "required"
      },

      messages: {
        name: 'No name',
        phone: 'No phone number',
        email: 'No E-mail'
      }        
    });

    $('.form-contact .form-clear').click(function() {
      $('.form-contact *').val('');
    });
});

$(window).on('load resize', function() {
  if( $(window).width() < 768 ) {
    $('.push-up-top .push-block').clone().prependTo('.push-up-top');
    $('.push-up-top .push-block').last().remove();

    $('.push-up-bottom .push-block').clone().prependTo('.push-up-bottom');
    $('.push-up-bottom .push-block').last().remove();

  } else {
    $('.push-up-top .push-block').clone().appendTo('.push-up-top');
    $('.push-up-top .push-block').first().remove();

    $('.push-up-bottom .push-block').clone().appendTo('.push-up-bottom');
    $('.push-up-bottom .push-block').first().remove();
  }
});
