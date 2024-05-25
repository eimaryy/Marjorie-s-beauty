import { favoritos, carrinho, atualizaFavoritos, atualizaCarrinho } from "./localStorage.js";
import { Produtos } from "./mock.js";

load();

export function load(){
    let favoritar = [];
    favoritar = document.querySelectorAll(".item__btn-fav");
    let adicionarCarrinho = document.querySelectorAll(".item__btn-sacola");

    for(let favorito of favoritar){
        favorito.addEventListener('click', (e) => {
        e.preventDefault();
        let imgFav = favorito.querySelector('.img-fav');
      if(imgFav.name == 'desativo'){
          imgFav.src = '../assets/heart-solid.svg';
          imgFav.name = 'ativo';
          favoritos.push(favorito.name);
          atualizaFavoritos();

        } else{
          imgFav.src = './assets/heart-regular.svg';
          imgFav.name = 'desativo';
          let indexRemove = favoritos.indexOf(favorito.name);
          favoritos.splice(indexRemove, 1);
          atualizaFavoritos();
        } 
      });
    }

    for(let item of adicionarCarrinho){
        item.addEventListener('click', (e) => {
            e.preventDefault();
            carrinho.push(item.name);
            atualizaCarrinho();

            let produto = Produtos.find((element) => element.id == item.name);
            alert(`${produto.titulo} foi adicionado a sacola com sucesso!`); 
        })
    }
}

