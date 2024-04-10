const menuBt = document.querySelector('.menu');
const menuAberto = document.querySelector('#header_menu-aberto');
const menuSair = document.querySelector('.header_menu-sair')

menuBt.addEventListener('click', () => {
    menuAberto.style.display = 'flex'
});
menuSair.addEventListener('click', () => {
    menuAberto.style.display = 'none'
});
