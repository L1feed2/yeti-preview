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
if (document.body.clientWidth < 780) {
  $('.photo-box').removeClass('photo-zoom');
} else {
  $('.photo-zoom img').elevateZoom({
    scrollZoom: true,
    easing: true,
    zoomWindowWidth: 300,
    zoomWindowHeight: 300
  });
}




// console.log(screen.width);

// tabs
$('ul.desc__tabs-caption').on('click', 'li:not(.active)', function () {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.desc__tabs').find('div.desc__tabs-item').removeClass('desc__tabs-item--active').eq($(this).index()).addClass('desc__tabs-item--active');
});


function select(selectObj) {
  var selectSingle = selectObj.selectSingle;
  var selectSingle_title = selectObj.selectSingle_title;
  var selectSingle_labels = selectObj.selectSingle_labels;
  // selectSingle_title.remove();
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


  function select(selectObj) {
    var selectSingle = selectObj.selectSingle;
    var selectSingle_title = selectObj.selectSingle_title;
    var selectSingle_labels = selectObj.selectSingle_labels;
    selectSingle_title.remove();
  }
}


function selectCreate(selectId) {
  var selectItem = document.querySelector(selectId);
  var obj = {
    selectSingle: selectItem.querySelector('.__select'),
    selectSingle_title: selectItem.querySelector('.__select__title'),
    selectSingle_labels: selectItem.querySelectorAll('.__select__label')
  }

  select(obj);
}

selectCreate('#select');
selectCreate('#select2');


// lazy
var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
  // ... more custom settings?
});






