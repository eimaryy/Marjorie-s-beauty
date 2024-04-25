const swiperContainer1 = document.querySelector('.s1');
const swiperContainer2 = document.querySelector('.s2');
const swiperContainer3 = document.querySelector('.s3');


function acenderSlider(Produtos){
Produtos.forEach((produto, index) => {
    if(index <= 9){
    swiperContainer1.innerHTML += `
        <div class="swiper-slide">
        <img src="${produto.url}" alt="${produto.alt}">
        <h3 class="slide__infoStatus">${produto.info}</h3>
        <a href="#" class="slide__btn-fav"><img src="./assets/big-heart.png" alt="Icone de coração"></a>
        <div class="slide__informacoes-Container">
            <h2 class="slide__infoNome">${produto.titulo}</h2>
            <a href="#" class="slide__infoProduto"><span>${produto.descricao}</span></a>
            <h2 class="slide__infoPreco">${produto.preco}</h2>
            <a href="#" class="slide__btn-sacola"><span>Adicionar a sacola</span></a>
            
        </div>
        
    </div>
    `} 
    else if( index > 9 && index <= 18){
        swiperContainer2.innerHTML += `
        <div class="swiper-slide">
        <img src="${produto.url}" alt="${produto.alt}">
        <h3 class="slide__infoStatus">${produto.info}</h3>
        <a href="#" class="slide__btn-fav"><img src="./assets/big-heart.png" alt="Icone de coração"></a>
        <div class="slide__informacoes-Container">
            <h2 class="slide__infoNome">${produto.titulo}</h2>
            <a href="#" class="slide__infoProduto"><span>${produto.descricao}</span></a>
            <h2 class="slide__infoPreco">${produto.preco}</h2>
            <a href="#" class="slide__btn-sacola"><span>Adicionar a sacola</span></a>
            
        </div>
        
    </div>
    `
    } else{
        swiperContainer3.innerHTML += `
        <div class="swiper-slide">
        <img src="${produto.url}" alt="${produto.alt}">
        <h3 class="slide__infoStatus">${produto.info}</h3>
        <a href="#" class="slide__btn-fav"><img src="./assets/big-heart.png" alt="Icone de coração"></a>
        <div class="slide__informacoes-Container">
            <h2 class="slide__infoNome">${produto.titulo}</h2>
            <a href="#" class="slide__infoProduto"><span>${produto.descricao}</span></a>
            <h2 class="slide__infoPreco">${produto.preco}</h2>
            <a href="#" class="slide__btn-sacola"><span>Adicionar a sacola</span></a>
            
        </div>
        
    </div>
    `
    }
    
});
}

const Produtos = [{
    id: '1',
    categoria: 'perfume',
    info: 'lançamento',
    titulo: 'Fiery',
    url: './assets/products/perfume0.jpg',
    alt: 'imagem perfume',
    descricao: 'Fiery desodorante colonia 90ml', 
    preco: 'R$ '+100.00,
},
{
    id: '2',
    categoria: 'rosto',
    info: '20% desconto',
    titulo: 'Lighten',
    url: './assets/products/serum0.jpg',
    alt: 'imagem Serum',
    descricao: 'Sérum ácido Hialurônico 30ml', 
    preco: 'R$ '+20.00,
    
},
{
    id: '3',
    categoria: 'perfume',
    info: 'Nova formula',
    titulo: 'Doré',
    url: './assets/products/perfume1.jpg',
    alt: 'imagem perfume',
    descricao: 'Doré desodorante colonia 90ml', 
    preco: 'R$ '+149.99,

},
{
    id: '4',
    categoria: 'maquiagem',
    info: 'lançamento',
    titulo: 'Flowers',
    url: './assets/products/batom1.jpg',
    alt: 'imagem batom',
    descricao: 'Batom cremoso rose 3,8g', 
    preco: 'R$ '+14.99,

},
{
    id: '5',
    categoria: 'pele',
    info: 'Compre 1 leve 2',
    titulo: 'Doux',
    url: './assets/products/cremeHidra+1.jpg',
    alt: 'imagem Cremes hidratante',
    descricao: 'Creme hidratante 60g', 
    preco: 'R$ '+35.49,

},
{
    id: '6',
    categoria: 'rosto',
    info: '10% desconto',
    titulo: 'Kit Prudent',
    url: './assets/products/kitrosto.jpg',
    alt: 'imagem kit produtos Prudent',
    descricao: 'Skincare completo Prudent', 
    preco: 'R$ '+76.35,

},
{
    id: '7',
    categoria: 'cabelo',
    info: 'lancamento',
    titulo: 'Kit Argent',
    url: './assets/products/kitcabelo.jpg',
    alt: 'imagem kit produtos argent',
    descricao: 'kit para cabelos Argent', 
    preco: 'R$ '+120.00,

},
{
    id: '8',
    categoria: 'perfume',
    info: '+15% Fidelidade',
    titulo: 'Préféré',
    url: './assets/products/perfume2.jpg',
    alt: 'imagem perfume préféré',
    descricao: 'Préféré desodorante colonia 40ml', 
    preco: 'R$ '+200.00,

},
{
    id: '9',
    categoria: 'creme',
    info: '+2 Fidelidade',
    titulo: 'Pour la peau',
    url: './assets/products/rosamosqueta.jpg',
    alt: 'imagem Creme facial rosa mosqueta',
    descricao: 'Creme facial Rosa Mosqueta 3,8g', 
    preco: 'R$ '+25.00,

},
{
    id: '10',
    categoria: 'rosto',
    info: '2% desconto',
    titulo: 'Kit Prudent',
    url: './assets/products/kitmask+oil.jpg',
    alt: 'imagem produtos Prudent',
    descricao: 'Mascara facial + oleo de argan Prudent', 
    preco: 'R$ '+62.00,

},
{
    id: '11',
    categoria: 'rosto',
    info: 'Lançamento',
    titulo: 'Pour la peau',
    url: './assets/products/serum2.jpg',
    alt: 'imagem Serum Pour la peau',
    descricao: 'Serum rosa mosqueta 30ml', 
    preco: 'R$ '+40.00,

},
{
    id: '12',
    categoria: 'pele',
    info: '5% desconto',
    titulo: 'Pour la peau',
    url: './assets/products/rosamosqueta0.jpg',
    alt: 'imagem creme hidratante Pour la peau',
    descricao: 'creme hidratante rosa mosqueta 140g', 
    preco: 'R$ '+40.00,

},
{
    id: '13',
    categoria: 'rosto',
    info: '+30% Fidelidade',
    titulo: 'Lighten++',
    url: './assets/products/serum1.jpg',
    alt: 'imagem serum Lighten++',
    descricao: 'Serum revitalizante retinol puro 30ml', 
    preco: 'R$ '+200.00,

},
{
    id: '14',
    categoria: 'maquiagem',
    info: '+3% Fidelidade',
    titulo: '+magnifique',
    url: './assets/products/kitMake.jpg',
    alt: 'imagem kit produtos +magnifique',
    descricao: 'Kit make +magnifique', 
    preco: 'R$ '+99.99,

},
{
    id: '15',
    categoria: 'pele',
    info: 'Compre 3 pague 2',
    titulo: '+magnifique',
    url: './assets/products/kitAcido+gelHidra+cremecorp.png',
    alt: 'imagem kit produtos',
    descricao: 'Vitamina C + gel facial + creme corpo Doux', 
    preco: 'R$ '+119.99,

},
{
    id: '16',
    categoria: 'pele',
    info: '+5% Fidelidade',
    titulo: 'Fiery',
    url: './assets/products/bodySplash.jpg',
    alt: 'imagem Body Splash',
    descricao: 'Body Splash Fiery 250ml', 
    preco: 'R$ '+55.00,

},
{
    id: '17',
    categoria: 'pele',
    info: '+2% Fidelidade',
    titulo: 'Doux',
    url: './assets/products/cremecorp.jpg',
    alt: 'imagem creme corporal Doux',
    descricao: 'Creme Hidratante Corpo Doux 250ml', 
    preco: 'R$ '+55.00,

},
{
    id: '18',
    categoria: 'cabelo',
    info: 'Lançamento',
    titulo: 'Argent',
    url: './assets/products/maskCap.jpg',
    alt: 'imagem mascara capilar Argent',
    descricao: 'Mascara capilar Argent 250ml', 
    preco: 'R$ '+69.99,

},
{
    id: '19',
    categoria: 'pele',
    info: 'Lançamento',
    titulo: 'Fiery',
    url: './assets/products/desodorantePe.jpg',
    alt: 'imagem desodorante pé',
    descricao: 'Desodorante para Pé 140ml', 
    preco: 'R$ '+55.00,

},
{
    id: '20',
    categoria: 'Artesanal',
    info: 'Lançamento',
    titulo: 'Marjorie`s',
    url: './assets/products/saboneteArt1.jpg',
    alt: 'imagem Sabonete artificial',
    descricao: 'Sabonete Artesanal camomila 120g', 
    preco: 'R$ '+119.99,

},
{
    id: '21',
    categoria: 'Artesanal',
    info: 'Lançamento',
    titulo: 'Marjorie`s',
    url: './assets/products/saboneteArt0.jpg',
    alt: 'imagem Sabonete artificial',
    descricao: 'Sabonete Artesanal de açafrão 120g', 
    preco: 'R$ '+139.99,

},
{
    id: '22',
    categoria: 'Artesanal',
    info: 'Lançamento',
    titulo: 'Marjorie`s',
    url: './assets/products/saboneteliquido.jpg',
    alt: 'imagem Sabonete artificial',
    descricao: 'Sabonete Artesanal de alegrim 250ml', 
    preco: 'R$ '+60.00,

},
{
    id: '23',
    categoria: 'Artesanal',
    info: 'Lançamento',
    titulo: 'Marjorie`s',
    url: './assets/products/saboneteArt.webp',
    alt: 'imagem Sabonete artificial',
    descricao: 'Sabonete Artesanal de glicerina 120g', 
    preco: 'R$ '+109.99,

},
{
    id: '24',
    categoria: 'Artesanal',
    info: 'Lançamento',
    titulo: 'Marjorie`s',
    url: './assets/products/saboneteArt3.jpg',
    alt: 'imagem Sabonete artificial',
    descricao: 'Sabonete Artesanal argila branca 120g', 
    preco: 'R$ '+79.90,

},
{
    id: '25',
    categoria: 'Artesanal',
    info: 'Compre 2 pague 1',
    titulo: 'Marjorie`s',
    url: './assets/products/saboneteArt4.jpg',
    alt: 'imagem Sabonete artificial',
    descricao: 'Sabonete Artesanal rosa mosqueta + maracuja 120g', 
    preco: 'R$ '+130.00,

},
{
    id: '26',
    categoria: 'Artesanal',
    info: 'Compre 2 pague 1',
    titulo: 'Marjorie`s',
    url: './assets/products/saboneteArt5.jpg',
    alt: 'imagem Sabonete artificial',
    descricao: 'Sabonete Artesanal coco 120g', 
    preco: 'R$ '+40.00,

},

];

acenderSlider(Produtos);