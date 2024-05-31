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
