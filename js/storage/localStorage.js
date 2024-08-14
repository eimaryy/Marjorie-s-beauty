export let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

export function atualizaFavoritos(){
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

