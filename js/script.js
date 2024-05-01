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
    430: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
    },
    900: {
        slidesPerView: 4,
        
      },
    1024: {
      slidesPerView: 5.2,
    },
    1500: {
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


const menuBt = document.querySelector('.menu');
const menuAberto = document.querySelector('#header_menu-aberto');
const menuSair = document.querySelector('.header_menu-sair');
const corpo = document.body;

menuBt.addEventListener('click', () => {
    menuAberto.style.top = '0'
    corpo.style.overflowY = 'Hidden'
    
    // menuAberto.style.display = 'block'

});
menuSair.addEventListener('click', () => {
    menuAberto.style.top = '100vh'
    corpo.style.overflowY = 'scroll'
    // menuAberto.style.display = 'none'

   
});

const btnCompra = document.querySelector('.com');
const btnAtendimento = document.querySelector('.at');
const btnSobre = document.querySelector('.sob');
const ulCompra = document.querySelector('.comprar');
const ulAtendimento = document.querySelector('.atendimento');
const ulSobre = document.querySelector('.sobre');
const span = document.querySelectorAll('.footer_item-span');
let textBtn = ['+', '-']

btnCompra.addEventListener('click', () =>{
    eventoClicker(ulCompra, btnCompra, textBtn, span[0]);
});

btnAtendimento.addEventListener('click', () =>{
    eventoClicker(ulAtendimento, btnAtendimento, textBtn, span[1]);
});

btnSobre.addEventListener('click', () =>{
    eventoClicker(ulSobre, btnSobre, textBtn, span[2]);
});

function eventoClicker(ul, btn, textBtn, span){
if (ul.style.display == 'none'){
    ul.style.display = 'flex'
    span.innerHTML = textBtn[1]
} else{
    ul.style.display = 'none'
    span.innerHTML = textBtn[0]
}
}

