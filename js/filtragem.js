import { Produtos } from "./mock.js";
import { acenderSlider} from "./mostra.js";

const categorias = document.querySelectorAll(".item-page");
const showcase = document.querySelector('#showcase');
const bannerinfo = document.querySelector('#banner__infos')
const bannerSlide = document.querySelector('.swiper')

for (let sessao of categorias){
    sessao.addEventListener('click', (e) => {
        e.preventDefault();
        showcase.style.display = 'none';
        bannerSlide.style.display = 'none'; 
        bannerinfo.style.display = 'none';
        acenderSlider(Produtos, sessao.name);

    })
}

