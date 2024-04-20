const menuBt = document.querySelector('.menu');
const menuAberto = document.querySelector('#header_menu-aberto');
const menuSair = document.querySelector('.header_menu-sair');

menuBt.addEventListener('click', () => {
    menuAberto.style.display = 'flex'
});
menuSair.addEventListener('click', () => {
    menuAberto.style.display = 'none'
});

const btnCompra = document.querySelector('.com');
const btnAtendimento = document.querySelector('.at');
const btnSobre = document.querySelector('.sob');
const ulCompra = document.querySelector('.comprar');
const ulAtendimento = document.querySelector('.atendimento');
const ulSobre = document.querySelector('.sobre');

btnCompra.addEventListener('click', () =>{
    let textBtn = ['Comprar +', 'Comprar -']
    eventoClicker(ulCompra, btnCompra, textBtn);
});

btnAtendimento.addEventListener('click', () =>{
    let textBtn = ['Atendimento ao Cliente +', 'Atendimento ao Cliente -']
    eventoClicker(ulAtendimento, btnAtendimento, textBtn);
});

btnSobre.addEventListener('click', () =>{
    let textBtn = ['Sobre +', 'Sobre -']
    eventoClicker(ulSobre, btnSobre, textBtn);
});

function eventoClicker(ul, btn, textBtn){
if (ul.style.display == 'none'){
    ul.style.display = 'flex'
    btn.innerHTML = textBtn[1]
} else{
    ul.style.display = 'none'
    btn.innerHTML = textBtn[0]
}
}
