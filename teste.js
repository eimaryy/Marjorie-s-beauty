const swiperContainer = document.querySelector('.s1');

const Produtos = [{
    id: '1',
    categoria: 'perfume',
    categoria: 'lancamento',
    titulo: 'serum',
    url: './assets/products/perfume2.jpg',
    alt: 'produto',
    descricao: 'texto texto texto', 
    preco: 20.00,
},
{
    id: '2',
    categoria: 'perfume',
    info: '20 desconto',
    titulo: 'serum',
    url: './assets/products/perfume2.jpg',
    alt: 'produto',
    descricao: 'texto texto texto', 
    preco: 20.00,
    
},

];

Produtos.forEach((produto) => {
    swiperContainer.innerHTML += `
        <div class="swiper-slide">
        <img src="${produto.url}" alt="${produto.alt}">
        <h3 class="slide__infoStatus">${produto.categoria}</h3>
        <a href="#" class="slide__btn-fav"><img src="./assets/big-heart.png" alt="Icone de coração"></a>
        <div class="slide__informacoes-Container">
            <h2 class="slide__infoNome">${produto.titulo}</h2>
            <a href="#" class="slide__infoProduto"><span>${produto.descricao}</span></a>
            <h2 class="slide__infoPreco">${produto.preco}</h2>
            <a href="#" class="slide__btn-sacola"><span>Adicionar a sacola</span></a>
            
        </div>
        
    </div>
    `
    
});