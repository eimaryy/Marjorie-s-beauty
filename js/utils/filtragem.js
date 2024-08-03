import { Produtos } from "../mock.js";
import { acenderSlider } from "./mostra.js";
import { headerMenuDesativo } from "./menu.js";
import { load } from "./carFav.js";

const categorias = document.querySelectorAll(".item-page");
const showcase = document.querySelector('#showcase');
const showcaseComFiltro = document.querySelector('#showcaseFiltro');
const bannerinfo = document.querySelector('#banner__infos')
const bannerSlide = document.querySelector('.swiper')
const barraDePesquisa = document.querySelector('#header_pesquisa-caixa'); 

for (let sessao of categorias){
    sessao.addEventListener('click', (e) => {
        e.preventDefault();
        headerMenuDesativo();
        showcase.style.display = 'none';
        bannerSlide.style.display = 'none'; 
        bannerinfo.style.display = 'none';
        showcaseComFiltro.style.display = 'flex';
        let listaProdutosFiltrados = [];

        for(let produto of Produtos){
            if(produto.categoria == sessao.name){
                listaProdutosFiltrados.push(produto);
            }
        }

        acenderSlider(Produtos, listaProdutosFiltrados);
        load();

    })
}

barraDePesquisa.addEventListener('input', (e) =>{ 
    e.preventDefault();
    filtrarPesquisa(Produtos);
});

function filtrarPesquisa(Produtos){
    let listaProdutosFiltrados = [];

    showcase.style.display = 'none';
    bannerSlide.style.display = 'none'; 
    bannerinfo.style.display = 'none';
    showcaseComFiltro.style.display = 'flex';

    if(barraDePesquisa.value != ""){
        for(let produto of Produtos){
            let produtoConvertido = produto.descricao.toLocaleLowerCase();
            let valorPesquisa = barraDePesquisa.value.toLocaleLowerCase();
            
            if(produtoConvertido.includes(valorPesquisa)){
                listaProdutosFiltrados.push(produto);
            }
        }
        acenderSlider(Produtos, listaProdutosFiltrados);
        load();
    } 

}

