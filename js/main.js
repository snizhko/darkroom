$(function () {
    //slick slider
    $('.js-collection-slider').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                },
            }, {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    });

    function scrollTopNav() {
        $('.header_inner').animate({
            scrollTop: ($('.header_inner').offset().top + 28) * -1
        }, 500);
    }

    function menuResponse() {
        if ($(window).width() <= 880) {

            $('.js-nav-btn').on('touchstart', function () {
                var $this = $(this);
                var $navItems = $('.js-nav-item');

                scrollTopNav();

                $('.js-submenu').addClass('is-hidden');
                $this.siblings('.js-submenu').removeClass('is-hidden');

                if ($this.parent('.js-nav-item').hasClass('is-active')) {
                    $this.parent('.js-nav-item').removeClass('is-active');
                    $this.siblings('.js-submenu').addClass('is-hidden');
                    $navItems.removeClass('is-hidden');
                    return;
                } else {
                    $navItems.removeClass('is-active');
                    $navItems.addClass('is-hidden');
                    $this.parent('.js-nav-item').removeClass('is-hidden').addClass('is-active');
                }
            });

            $('nav').css("height", $('nav').outerHeight());
        }
    }

    menuResponse();

    $(window).resize(function () {
        menuResponse();
    });

    $('.js-nav-switcher-btn').on('click', function () {
        $('header').toggleClass('is-active');

        if ($('header').hasClass('is-active')) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        scrollTopNav();
    });

    $('.js-notification-btn').on('click', function () {
        $('.js-notification').removeClass('is-active');
    });

});