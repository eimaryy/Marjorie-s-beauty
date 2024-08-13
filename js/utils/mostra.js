import { favoritos } from "../storage/localStorage.js";
import { UrlBaseApi } from "../api/server.js";

export function acenderSlider(Produtos, filtro) {

    const showcase = document.querySelector('#showcase');
    
    if(Produtos.message){
        const showcaseProdutos = document.querySelector('#showcase__produtos');
        showcaseProdutos.style.display = 'none';
        const paragrafo = document.createElement('p');
        paragrafo.className = 'showcase__produtosMessage';
        paragrafo.textContent = 'Não há produtos para mostrar no momento :/';

        showcase.appendChild(paragrafo);

        return;
    }  

    const swiperContainer1 = document.querySelector('.s1');
    const swiperContainer2 = document.querySelector('.s2');
    const showcaseComFiltro = document.querySelector('#showcaseFiltro_container');
    
    showcaseComFiltro.innerHTML = '';
        
    if (Produtos.length === 0 && filtro) {
        showcaseComFiltro.innerHTML = '<p>Essa sessão está vazia no momento.</p>';
        return;
    }
    
    Produtos.forEach(produto => {
        let isFav = favoritos.find((element) => element == produto._id);
        const produtoHTML = `
        <div class="${filtro ? 'showcaseFiltro__item' : 'swiper-slide'}">
        <img class="img-produto" src="${UrlBaseApi}uploads/${produto.src}" alt="${produto.alt}">
                <h3 class="item__infoStatus">${produto.status}</h3>
                <a class="item__btn-fav" name="${produto._id}">
                    <img class="img-fav" name="${isFav ? 'ativo' : 'desativo'}" 
                    src="${isFav ? '../assets/heart-solid.svg' : '../assets/heart-regular.svg'}"
                     alt="Icone de coração">
                </a>
                <div class="item__informacoes-Container">
                    <h2 class="item__infoNome">${produto.name}</h2>
                    <a href="#" class="item__infoProduto"><span>${produto.description}</span></a>
                    <h2 class="item__infoPreco">R$ ${produto.price}</h2>
                    <a href="#" class="item__btn-sacola" name="${produto._id}"><span>Adicionar a sacola</span></a>
                </div>
            </div>
        `;

        if (filtro) {
            showcaseComFiltro.innerHTML += produtoHTML;
        } else {
            const container = produto.category !== 'artesanal' ? swiperContainer1 : swiperContainer2;
            container.innerHTML += produtoHTML;
        }
    });

    if (!filtro) {
        showcase.style.display = 'block';
    } else {
        showcase.style.display = 'none';
    }
}

export function acenderFavoritos(Produtos){
    const mostraFavContainer = document.querySelector('.main__list-item-fav')
    let mensagem = '';

    if(Produtos.length === 0){
        mensagem = 'Você não possui produtos na sua lista de favoritos';
        return mostraFavContainer.innerHTML = `
        <div class="main__item-aviso">
            <p>${mensagem}.</p>
        </div>`
    }
   
    Produtos.reverse().forEach(produto => {
        const produtoHTML = `
        <div class="main__item-fav">
            <img class="img-produto" src="${UrlBaseApi}uploads/${produto.src}" alt="${produto.alt}">
            <h3 class="item__infoStatus">${produto.status}</h3>
            <a class="item__btn-fav" name="${produto._id}">
                <img class="img-fav" name="${Produtos ? 'ativo' : 'desativo'}"
                src="${Produtos ? '../assets/heart-solid.svg' : 'assets/heart-regular.svg'}" 
                alt="Icone de coração">
            </a>
            <div class="item__informacoes-Container">
                <h2 class="item__infoNome">${produto.name}</h2>
                <a href="#" class="item__infoProduto"><span>${produto.description}</span></a>
                <h2 class="item__infoPreco">R$ ${produto.price}</h2>
                <a href="#" class="item__btn-sacola" name="${produto._id}"><span>Adicionar a sacola</span></a>
            </div>
        </div>
        `;
            mostraFavContainer.innerHTML += produtoHTML;
    });

    
}

export function acenderCarrinho(Produtos, carrinho){
    const carrinhoItem = document.querySelector(".main__carrinho-itemContainer");
    const produtosCarrinho = [];
    carrinhoItem.innerHTML = '';

    carrinho.forEach(item => {
        for(let produto of Produtos){
            if (item === produto.id){
                produtosCarrinho.push(produto);
                break;
            }
        }
    });

    produtosCarrinho.reverse().forEach(produto => {
        let quantidade = 0;
        for(let item of produtosCarrinho){
            if(produto.id === item.id){
                quantidade++;
                if(quantidade >= 2){
                const index = produtosCarrinho.indexOf(item);
                produtosCarrinho.splice(index, 1);
                };
            };
        };

        const produtoHTML = `
        <hr />
         <div class="main__carrinho-item">
            <img class="car__img-produto" src="${UrlBaseApi}uploads/${produto.src}" alt="${produto.alt}">
            <div class="item__carrinho-Container">
            <h2 class="item__Nome">${produto.name}</h2>
            <a href="#" class="item__quantProduto"><span>Quantidade: ${quantidade}</span></a>
            <div class="item__container-preco">
                <h2 class="item__Preco">R$ ${produto.price}</h2>
                <div class="item__precoLixeira-opcoes">
                    <img  class="car__img-lixeira" name="${produto._id}" src="../assets/trash-solid.svg" alt="Excluir produto">
                </div>
            </div>
            </div>
         </div>
        `
        carrinhoItem.innerHTML += produtoHTML;
    });


}