$(function(){
    $('.banner__slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(function () {
        $('.product-card__rate').rateYo({
            ratedFill: '#FBCF3A',
            spacing: '7px',
            normalFill: '#C4C4C4'
        });
    });

    $('.product-card__favorit').on('click', function(){
        $(this).toggleClass('favorit-active');
    });

    $('.slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        prevArrow: '<button class="slider-btn slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slider-btn slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
    });

});