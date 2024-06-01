import { favoritos, carrinho, atualizaFavoritos, atualizaCarrinho } from "./localStorage.js";
import { Produtos } from "./mock.js";

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
          imgFav.src = '../assets/heart-regular.svg';
          imgFav.name = 'desativo';
          let indexRemove = favoritos.indexOf(favorito.name);
          favoritos.splice(indexRemove, 1);
          atualizaFavoritos();
        } 
        mostraQuantidadeItem();
      });
    }

    for(let item of adicionarCarrinho){
        item.addEventListener('click', (e) => {
            e.preventDefault();
            carrinho.push(item.name);
            atualizaCarrinho();

            let produto = Produtos.find((element) => element.id == item.name);
            alert(`${produto.titulo} foi adicionado a sacola com sucesso!`); 
            mostraQuantidadeItem();
        });
    }
}

export function excluirItemCarrinho(lixeira){
  let indexRemove = carrinho.indexOf(lixeira.name);
  carrinho.splice(indexRemove, 1);
  atualizaCarrinho();
  return carrinho;
}


export function mostraQuantidadeItem(){
  const quantItemCar = document.querySelector('.car');
  const quantItemFav = document.querySelector('.fav');

  if (carrinho.length === 0){
      quantItemCar.style.display = 'none';
  } else{
      quantItemCar.style.display = 'block';   
      quantItemCar.textContent = `${carrinho.length}`
  };
  if(favoritos.length === 0){
      quantItemFav.style.display = 'none';
  }else{
      quantItemFav.style.display = 'block';   
      quantItemFav.textContent = `${favoritos.length}`
  };
};
