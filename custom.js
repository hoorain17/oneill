$(document).ready(function() {

    // MOBILE-NAVIGATION-LIST

    $('.navigation-list').clone().appendTo('.mobile-menu-body');

    $('.hamburger').on('click', function() {
        if (!$('.mobile-menu').hasClass('mobile-view')) {
            $('.mobile-menu').addClass('mobile-view');
        } else {
            $('.mobile-menu').removeClass('mobile-view');
        }
    });

    $('#menu-close').on('click', function() {
        $('.mobile-menu').removeClass('mobile-view');
    });

    // SCROLL JS

    // $('.scroller').mCustomScrollbar();

    // WOW JS

    new WOW().init();

    // Services Slider JS

    $('.testimonial-slider').slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });


    // PROJECT SLIDER START

    $('.project-slider').slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });

    // PRODUCT DETAIL SLIDER START

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    // PRODUCT DETAIL SLIDER END

    // DEAL SECTION START

    $('.deal-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    // SOCIAL SLIDER JS

    $('.social-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    // PRODUCT-SHOP-DETAIL SLIDER JS

    $('.for-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.nav-slider',
        arrows: false,
        dots: false,
    });
    $('.nav-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.for-slider',
        focusOnSelect: true
    });


    $(document).ready(function() {
        $('.num-in span').click(function() {
            var $input = $(this).parents('.num-block').find('input.in-num');
            if ($(this).hasClass('minus')) {
                var count = parseFloat($input.val()) - 1;
                count = count < 1 ? 1 : count;
                if (count < 2) {
                    $(this).addClass('dis');
                } else {
                    $(this).removeClass('dis');
                }
                $input.val(count);
            } else {
                var count = parseFloat($input.val()) + 1
                $input.val(count);
                if (count > 1) {
                    $(this).parents('.num-block').find(('.minus')).removeClass('dis');
                }
            }
            $input.change();
            return false;
        });

    });

});