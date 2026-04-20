const swiper = new Swiper('.productSwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.product-next',
        prevEl: '.product-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



const cardSwiper = new Swiper('.cardSwiper', {
    loop: true,
    navigation: {
        nextEl: '.card-next',
        prevEl: '.card-prev',
    },
});



const featuredSwiper = new Swiper('.swiper-analytics', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next featureNext',
    prevEl: '.swiper-button-prev featurePrev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


