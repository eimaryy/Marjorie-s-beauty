import { conectaAPIProduto } from "../api/produtoEndpoint.js";
import Cookies from "../storage/cookies.js";
import { conectaAPICarrinho } from "../api/carrinhoEndpoint.js";
import { favoritos, atualizaFavoritos } from "../storage/localStorage.js";

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
        item.addEventListener('click', async(e) => {
            e.preventDefault();
            const userLogado = Cookies.pegaCookie("accessToken");
            if(userLogado){
              const res = await conectaAPICarrinho.addItemCarrinho(item.name)
              if(res){
                const nomeProduto = await conectaAPIProduto.findProdutoId(item.name)
                await alert(`${nomeProduto.name} foi adicionado ao seu carrinho!`);
  
              }
              mostraQuantidadeItem();
            }else{
              alert(`Para adicionar ao carrinho é necessario realizar o login primeiro!`);
              window.location.href = "./pages/logCad.html"
            }
        });
    }
}

export async function excluirItemCarrinho(lixeira){
  let res = await conectaAPICarrinho.delItemCarrinho(lixeira.name);
  return res;
}


export async function mostraQuantidadeItem(){
  const quantItemCar = document.querySelector('.car');
  const quantItemFav = document.querySelector('.fav');
  const carrinho = await conectaAPICarrinho.findCarrinho();

  if(!carrinho.mensagem){
    if (carrinho.length === 0 || carrinho[0].items.length === 0){
        quantItemCar.style.display = 'none';
    } else{
        quantItemCar.style.display = 'block';   
        quantItemCar.textContent = `${carrinho[0].items.length}`
      };
  }
    if(favoritos.length === 0){
        quantItemFav.style.display = 'none';
    }else{
        quantItemFav.style.display = 'block';   
        quantItemFav.textContent = `${favoritos.length}`
      };
};
