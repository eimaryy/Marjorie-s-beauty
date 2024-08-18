import { conectaAPIProduto } from "../api/produtoEndpoint.js";
import { acenderSlider } from "./mostra.js";
import { load } from "./carFav.js";

const menuBt = document.querySelector('.menu');
const menuAberto = document.querySelector('#header_menu-aberto');
const menuSair = document.querySelector('.header_menu-sair');
const categorias = document.querySelectorAll(".item-page");
const showcase = document.querySelector('#showcase');
const showcaseComFiltro = document.querySelector('#showcaseFiltro');
const bannerinfo = document.querySelector('#banner__infos')
const bannerSlide = document.querySelector('.swiper')

export function headerMenuDesativo(){
  menuAberto.style.top = '100vh'
}

export function headerMenuAtivo(){
  menuAberto.style.top = '0'
}

menuBt.addEventListener('click', headerMenuAtivo);
menuSair.addEventListener('click', headerMenuDesativo);

menuBtn();

export function menuBtn(){
  for (let sessao of categorias) {
    sessao.addEventListener('click', (e) => {
        e.preventDefault();
        headerMenuDesativo();
  
        const pesquisa = sessao.name;
  
        if (window.location.pathname.includes('pages')) {
            window.location.href = `../index.html?search=${pesquisa}`;
          }
          
        executarPesquisa(pesquisa);
    });
  }
} 

export default function executarPesquisa(pesquisa) {
  showcase.style.display = 'none';
  bannerSlide.style.display = 'none';
  bannerinfo.style.display = 'none';
  showcaseComFiltro.style.display = 'flex';

  conectaAPIProduto.findProdutoCategory(pesquisa, "?limit=25")
      .then(listaProdutosFiltrados => {
          acenderSlider(listaProdutosFiltrados, true);
          load();
          menuBtn();
      });
}