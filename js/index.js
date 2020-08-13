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
if(document.body.clientWidth < 780){
  $('.photo-box').removeClass('photo-zoom');
} else {
  $('.photo-zoom img').elevateZoom({
    scrollZoom : true,
    easing : true,
    zoomWindowWidth:300,
    zoomWindowHeight:300
});
}




// console.log(screen.width);

// tabs
$('ul.desc__tabs-caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.desc__tabs').find('div.desc__tabs-item').removeClass('desc__tabs-item--active').eq($(this).index()).addClass('desc__tabs-item--active');
});        


// select
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}




