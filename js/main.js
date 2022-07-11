$(function(){
    $('.banner__slider').slick({
        //слайдер в серкції banner
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    $('.product-card__rate, .reviews__rate, .reviews__comment-mark').rateYo({
        //зірковий рейтинг на карточці товара в слайдері та в секції "Відгуки"
        ratedFill: '#FBCF3A',
        spacing: '7px',
        normalFill: '#C4C4C4'
    });

    $('.product-card__favorit').on('click', function(){
        //анімація кнопки додавання товару в категорію "улюблені"
        $(this).toggleClass('favorit-active');
    });

    $('.slider').slick({
        //слайдер секцій "Акції" та "Часто купляють"
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        prevArrow: '<button class="slider-btn slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slider-btn slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
    });

    $('.menu-btn').on('click', function(){
        $('.popup').addClass('popup--active');
    });

    $('.close').on('click', function(){
        $('.popup--active').removeClass('popup--active');
    });


});