$('.header-menu__heading').click(function(event){
    // event.perventDefault();
    $(this).toggleClass('header-menu__heading--open');
    
    $('.header-menu__list').toggleClass('header-menu__list--open');
})

$('.mainBanner__slider-body').slick({
    dots: true,
    appendDots: '.mainBanner__slider-dots',
    arrows:false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                vertical: false,
                // horisontal: true
            }
        }
    ]
})