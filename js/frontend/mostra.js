import { Produtos } from "./mock.js";
import { favoritos } from "./localStorage.js";

const swiperContainer1 = document.querySelector('.s1');
const swiperContainer2 = document.querySelector('.s2');
const showcaseComFiltro = document.querySelector('#showcaseFiltro_container');
const showcase = document.querySelector('#showcase');
const showcase2 = document.querySelector('#showcaseFiltro');

acenderSlider(Produtos, '');

export function acenderSlider(Produtos, filtro) {
    showcaseComFiltro.innerHTML = '';

    const ProdutosFiltrados = filtro ? filtro : Produtos;

    if (ProdutosFiltrados.length === 0) {
        showcaseComFiltro.innerHTML = '<p>Essa sessão está vazia no momento.</p>';
        return;
    }

    ProdutosFiltrados.forEach(produto => {
        let isFav = favoritos.find((element) => element == produto.id);
        const produtoHTML = `
            <div class="${filtro ? 'showcaseFiltro__item' : 'swiper-slide'}">
                <img class="img-produto" src="${produto.url}" alt="${produto.alt}">
                <h3 class="item__infoStatus">${produto.info}</h3>
                <a class="item__btn-fav" name="${produto.id}">
                    <img class="img-fav" name="${isFav ? 'ativo' : 'desativo'}" 
                    src="${isFav ? '../assets/heart-solid.svg' : '../assets/heart-regular.svg'}"
                     alt="Icone de coração">
                </a>
                <div class="item__informacoes-Container">
                    <h2 class="item__infoNome">${produto.titulo}</h2>
                    <a href="#" class="item__infoProduto"><span>${produto.descricao}</span></a>
                    <h2 class="item__infoPreco">${produto.preco}</h2>
                    <a href="#" class="item__btn-sacola" name="${produto.id}"><span>Adicionar a sacola</span></a>
                </div>
            </div>
        `;

        if (filtro) {
            showcaseComFiltro.innerHTML += produtoHTML;
        } else {
            const container = produto.categoria !== 'Artesanal' ? swiperContainer1 : swiperContainer2;
            container.innerHTML += produtoHTML;
        }
    });

    if (!filtro) {
        showcase.style.display = 'block';
    } else {
        showcase.style.display = 'none';
    }
}
