import { conectaAPIProduto } from "../api/produtoEndpoint.js";
import { acenderSlider } from "./mostra.js";
import { load } from "./carFav.js";

const showcase = document.querySelector('#showcase');
const showcaseComFiltro = document.querySelector('#showcaseFiltro');
const bannerinfo = document.querySelector('#banner__infos')
const bannerSlide = document.querySelector('.swiper')
const barraDePesquisa = document.querySelector('#pesquisaItem'); 

barraDePesquisa.addEventListener('submit', (e) =>{ 
    e.preventDefault();
    filtrarPesquisa(barraDePesquisa.pesquisa.value);
});

async function filtrarPesquisa(valorPesquisa){
    showcase.style.display = 'none';
    bannerSlide.style.display = 'none'; 
    bannerinfo.style.display = 'none';
    showcaseComFiltro.style.display = 'flex';
    if(valorPesquisa != ""){

       const listaProdutosFiltrados = await conectaAPIProduto.searchProduto(valorPesquisa, "?limit=20");
        
        acenderSlider(listaProdutosFiltrados, true);
        load();
    } 

}

