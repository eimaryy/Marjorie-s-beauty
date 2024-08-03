import { carrinho } from "../storage/localStorage.js";
import { acenderCarrinho } from "../utils/mostra.js";
import { Produtos } from "../mock.js";
import { mostraQuantidadeItem, load, excluirItemCarrinho } from "../utils/carFav.js";
import { calculaValorCarrinho } from "../utils/calculaCarrinho.js"

const valorAPagar = document.querySelector(".main__carrinhoValor");

mostraQuantidadeItem();
calculaValorCarrinho(Produtos, carrinho);
acenderCarrinho(Produtos,carrinho);
load();
verificaItensCarrinho();
selecionarLixeiraCarrinho();


valorAPagar.textContent = calculaValorCarrinho(Produtos, carrinho).toFixed(2);

function verificaItensCarrinho(){
        const carQuantidade = document.querySelector(".quant-prod");
        const carrinhoSessao = document.querySelector("#main__carrinho-Container");
        const carrinhoVazio = document.querySelector(".main__carrinho-vazio");
        
        if(carrinho.length === 0){
            carrinhoVazio.style.display = 'flex';
        carrinhoSessao.style.display = 'none';
    }
    if(carrinho.length === 1){
        carQuantidade.textContent = carrinho.length + ' Produto ';
    } if(carrinho.length > 1){
        carQuantidade.textContent = carrinho.length + ' Produtos ';   
    }
}

function selecionarLixeiraCarrinho(){
let lixeiras = document.querySelectorAll(".car__img-lixeira");

    for (let lixeira of lixeiras){
        lixeira.addEventListener('click', () =>{
           excluirItemCarrinho(lixeira);
           mostraQuantidadeItem();
           acenderCarrinho(Produtos, carrinho);
           valorAPagar.textContent = calculaValorCarrinho(Produtos, carrinho).toFixed(2);
           verificaItensCarrinho();
           selecionarLixeiraCarrinho();
        });
    }
}
