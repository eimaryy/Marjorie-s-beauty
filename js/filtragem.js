import { Produtos } from "./mock.js";
import { acenderSlider } from "./mostra.js";
import { headerMenuDesativo } from "./script.js";

const categorias = document.querySelectorAll(".item-page");
const showcase = document.querySelector('#showcase');
const showcaseComFiltro = document.querySelector('#showcaseFiltro');
const bannerinfo = document.querySelector('#banner__infos')
const bannerSlide = document.querySelector('.swiper')

for (let sessao of categorias){
    sessao.addEventListener('click', (e) => {
        e.preventDefault();
        headerMenuDesativo();
        showcase.style.display = 'none';
        bannerSlide.style.display = 'none'; 
        bannerinfo.style.display = 'none';
        showcaseComFiltro.style.display = 'flex';
        acenderSlider(Produtos, sessao.name);

    })
}

