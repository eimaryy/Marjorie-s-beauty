export let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
export let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

export function atualizaFavoritos(){
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

export function atualizaCarrinho(){
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}
