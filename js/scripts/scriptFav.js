import { conectaAPIProduto } from "../api/produtoEndpoint.js";
import { favoritos } from "../storage/localStorage.js";
import { acenderFavoritos } from "../utils/mostra.js";
import { verificaConta } from "../utils/userAccont.js";
import { mostraQuantidadeItem, load } from "../utils/carFav.js";

async function findProdutosFavoritos(){
    let Produtos = []; 

    for(let favoritoItem of favoritos){
        const produtoFavoritado = await conectaAPIProduto.findProdutoId(favoritoItem);
        if(produtoFavoritado){
            Produtos.push(produtoFavoritado);
        }
    }
    acenderFavoritos(Produtos);
    mostraQuantidadeItem();
    load();
}

verificaConta();
findProdutosFavoritos();

const favQuantidade = document.querySelector(".main__fav-quant");
const favoritosVazio = document.querySelector(".main_fav-titulo")

if(favoritos.length > 0){
    favQuantidade.textContent = `(${favoritos.length})`;
}else{
    favoritosVazio.style.color = '#1b4b3f';

}
