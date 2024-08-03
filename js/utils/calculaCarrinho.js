export function calculaValorCarrinho(Produtos, carrinho){
    let valorTotalCarrinho = 0;
    carrinho.forEach(item => {
        for(let produto of Produtos){
            if(item === produto.id){
                valorTotalCarrinho += produto.preco;
                break;
            }
        }
    });

    return valorTotalCarrinho;
}