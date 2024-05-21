const menuBt = document.querySelector('.menu');
const menuAberto = document.querySelector('#header_menu-aberto');
const menuSair = document.querySelector('.header_menu-sair');

export function headerMenuDesativo(){
  menuAberto.style.top = '100vh'
}

export function headerMenuAtivo(){
  menuAberto.style.top = '0'
}

menuBt.addEventListener('click', headerMenuAtivo);
menuSair.addEventListener('click', headerMenuDesativo);

const btnCompra = document.querySelector('.com');
const btnAtendimento = document.querySelector('.at');
const btnSobre = document.querySelector('.sob');
const ulCompra = document.querySelector('.comprar');
const ulAtendimento = document.querySelector('.atendimento');
const ulSobre = document.querySelector('.sobre');
const span = document.querySelectorAll('.footer_item-span');
let textBtn = ['+', '-']

btnCompra.addEventListener('click', () => {
  eventoClicker(ulCompra, textBtn, span[0]);
});

btnAtendimento.addEventListener('click', () => {
  eventoClicker(ulAtendimento, textBtn, span[1]);
});

btnSobre.addEventListener('click', () => {
  eventoClicker(ulSobre, textBtn, span[2]);
});

function eventoClicker(ul, textBtn, span) {
  if (ul.style.display == 'none') {
    ul.style.display = 'flex'
    span.innerHTML = textBtn[1]
  } else {
    ul.style.display = 'none'
    span.innerHTML = textBtn[0]
  }
}

const btnVoltarInicio = document.querySelector('.showcaseFiltro_voltar-Inicio');
const showcase = document.querySelector('#showcase');
const showcaseComFiltro = document.querySelector('#showcaseFiltro');
const bannerinfo = document.querySelector('#banner__infos')
const bannerSlide = document.querySelector('.swiper')

btnVoltarInicio.addEventListener('click', (e) => {
  e.preventDefault();
  bannerSlide.style.display = 'block';
  bannerinfo.style.display = 'flex';
  showcase.style.display = 'block';
  showcaseComFiltro.style.display = 'none';
})