import { conectaAPIProduto } from "../api/produtoEndpoint.js";
import { acenderSlider } from "./mostra.js";
import { headerMenuDesativo } from "./menu.js";
import { load } from "./carFav.js";

const categorias = document.querySelectorAll(".item-page");
const showcase = document.querySelector('#showcase');
const showcaseComFiltro = document.querySelector('#showcaseFiltro');
const bannerinfo = document.querySelector('#banner__infos')
const bannerSlide = document.querySelector('.swiper')
const barraDePesquisa = document.querySelector('#pesquisaItem'); 

for (let sessao of categorias){
    sessao.addEventListener('click', async (e) => {
        e.preventDefault();
        headerMenuDesativo();
        showcase.style.display = 'none';
        bannerSlide.style.display = 'none'; 
        bannerinfo.style.display = 'none';
        showcaseComFiltro.style.display = 'flex';

        const listaProdutosFiltrados = await conectaAPIProduto.findProdutoCategory(sessao.name, "?limit=25");

        acenderSlider(listaProdutosFiltrados, true);
        load();

    })
}

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

