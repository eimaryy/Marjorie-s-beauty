import { favoritos } from "../localStorage.js";
import { acenderFavoritos } from "../mostra.js";
import { Produtos } from "../mock.js";
import { mostraQuantidadeItem, load } from "../carFav.js";

mostraQuantidadeItem();
acenderFavoritos(Produtos, favoritos);
load();

const favQuantidade = document.querySelector(".main__fav-quant");

favQuantidade.textContent = `(${favoritos.length})`;