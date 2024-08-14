import { acenderSlider } from "../utils/mostra.js";
import ProdutoService from "../services/ProdutoService.js";
import { load, mostraQuantidadeItem } from "../utils/carFav.js";

let Produtos = await ProdutoService.listarProduto(`?limit=12`);

acenderSlider(Produtos, false);
mostraQuantidadeItem();
load();

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
const swiperButton = document.querySelectorAll('.swiper-button-next');

btnVoltarInicio.addEventListener('click', (e) => {
  e.preventDefault();
  bannerSlide.style.display = 'block';
  bannerinfo.style.display = 'flex';
  showcase.style.display = 'block';
  showcaseComFiltro.style.display = 'none';
});

let number = 1;
const botaoSlide = [swiperButton[2], swiperButton[3]]
for(let btn of botaoSlide){
  btn.addEventListener('click', async () => {
    console.log('clicado')
    number++;
    Produtos = await ProdutoService.listarProduto(`?page=${number}`);

    if(Produtos.length){
      acenderSlider(Produtos, false);
    }
    load();
  })
}