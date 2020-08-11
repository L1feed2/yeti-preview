$('.header-menu__heading').click(function (event) {
    // event.perventDefault();
    $(this).toggleClass('header-menu__heading--open');

    $('.header-menu__list').toggleClass('header-menu__list--open');
})

$('.mainBanner__slider-body').slick({
    dots: true,
    appendDots: '.mainBanner__slider-dots',
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
        breakpoint: 600,
        settings: {
            vertical: false,
            // horisontal: true
        }
    }]
})




var gallery1 = new Gallery('gallery');


// zoom
$('.photo-box img').elevateZoom({
    scrollZoom : true,
    easing : true,
    // zoomWindowWidth:300,
    // zoomWindowHeight:300
});


// tabs
$('ul.desc__tabs-caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.desc__tabs').find('div.desc__tabs-item').removeClass('desc__tabs-item--active').eq($(this).index()).addClass('desc__tabs-item--active');
});        

