import { favoritos } from "../storage/localStorage.js";
import { acenderFavoritos } from "../utils/mostra.js";
import { Produtos } from "../mock.js";
import { mostraQuantidadeItem, load } from "../utils/carFav.js";

mostraQuantidadeItem();
acenderFavoritos(Produtos, favoritos);
load();

const favQuantidade = document.querySelector(".main__fav-quant");
const favoritosVazio = document.querySelector(".main_fav-titulo")

if(favoritos.length > 0){
    favQuantidade.textContent = `(${favoritos.length})`;
}else{
    favoritosVazio.style.color = '#1b4b3f';

}
