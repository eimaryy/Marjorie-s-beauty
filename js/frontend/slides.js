let swiper = new Swiper('.container-swiper-1', {
    spaceBetween: 15,
    slidesPerView: 1.2,
    setWrapperSize:true,

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
 },
 navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
 breakpoints: {
    470: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    705: {
      slidesPerView: 3,
    },
    900: {
        slidesPerView: 4,
        
      },
    1180: {
      slidesPerView: 5.2,
    },
    1650: {
        slidesPerView: 7.2,
      },
  },
});  

swiper = new Swiper('.container-swiper-0', {
    spaceBetween: 15,
    slidesPerView: 1,
    setWrapperSize:true,
    effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },

    autoplay: {
        delay: 5000,
      },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
     },
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
}); 

