import { Produtos } from "./mock.js";

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
        const produtoHTML = `
            <div class="${filtro ? 'showcaseFiltro__item' : 'swiper-slide'}">
                <img src="${produto.url}" alt="${produto.alt}">
                <h3 class="${filtro ? 'item__infoStatus' : 'slide__infoStatus'}">${produto.info}</h3>
                <a href="#" class="${filtro ? 'item__btn-fav' : 'slide__btn-fav'}">
                    <img class="img-fav" src="./assets/big-heart.png" alt="Icone de coração">
                </a>
                <div class="${filtro? 'item__informacoes-Container' : 'slide__informacoes-Container'}">
                    <h2 class="${filtro ? 'item__infoNome' : 'slide__infoNome'}">${produto.titulo}</h2>
                    <a href="#" class="${filtro ? 'item__infoProduto' : 'slide__infoProduto'}"><span>${produto.descricao}</span></a>
                    <h2 class="${filtro ? 'item__infoPreco' : 'slide__infoPreco'}">${produto.preco}</h2>
                    <a href="#" class="${filtro ? 'item__btn-sacola' : 'slide__btn-sacola'}"><span>Adicionar a sacola</span></a>
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