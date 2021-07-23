const swiper = new Swiper('.js-main-slider', {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 32,
  centeredSlides: false,
  freeMode: true,
  watchOverflow: true,

  navigation: {
    nextEl: '.js-main-slider-next',
    prevEl: '.js-main-slider-prev',
    hiddenClass: 'swiper-button-hidden',
    lockClass: 'swiper-button-lock',
  }, 
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    864: {
      slidesPerView: 3,
    },
    1160: {
      slidesPerView: 4,
    },
  },
});