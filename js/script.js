const menuBt = document.querySelector('.menu');
const menuAberto = document.querySelector('#header_menu-aberto');
const menuSair = document.querySelector('.header_menu-sair');
const corpo = document.body;

menuBt.addEventListener('click', () => {
  menuAberto.style.top = '0'

});
menuSair.addEventListener('click', () => {
  menuAberto.style.top = '100vh'

});

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

