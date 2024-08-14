export function calculaValorCarrinho(carrinho){
    let valorTotalCarrinho = 0;
    carrinho[0].items.forEach(item => {
        valorTotalCarrinho += (item.price * item.quantity)
    });

    return valorTotalCarrinho;
}