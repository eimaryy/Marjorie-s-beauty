import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiperContainer = document.querySelectorAll('.swiper');
let swiper1;
let swiper2;

document.addEventListener('DOMContentLoaded', () => {
for( let i= 1; i < swiperContainer.length; i++){
    swiper1 = new Swiper(swiperContainer[i], {
     spaceBetween: 15,
     slidesPerView: 1.2,
     setWrapperSize:true,
     observer: true,
     observeParents: true,
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
}

swiper2 = new Swiper(swiperContainer[0], {
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


});
