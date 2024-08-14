import { conectaAPICarrinho } from "../api/carrinhoEndpoint.js";
import { acenderCarrinho } from "../utils/mostra.js";
import { mostraQuantidadeItem, load, excluirItemCarrinho } from "../utils/carFav.js";
import { calculaValorCarrinho } from "../utils/calculaCarrinho.js"; 
import Cookies from "../storage/cookies.js";

const valorAPagar = document.querySelector(".main__carrinhoValor");

async function pegaCarrinho(){
    const carrinho = await conectaAPICarrinho.findCarrinho();
    return carrinho;
}

async function startCart(carrinho){
    acenderCarrinho(carrinho);
    load();
    calculaValorCarrinho(carrinho).toFixed(2);
    valorAPagar.textContent = calculaValorCarrinho(carrinho).toFixed(2);
    selecionarLixeiraCarrinho();
}

export async function selecionarLixeiraCarrinho(){
    let lixeiras = document.querySelectorAll(".car__img-lixeira");

    for (let lixeira of lixeiras){
        lixeira.addEventListener('click', async() =>{
            let newCarrinho = []
            const res = await excluirItemCarrinho(lixeira);
            newCarrinho.push(res)
            acenderCarrinho(newCarrinho);
            mostraQuantidadeItem();
            valorAPagar.textContent = calculaValorCarrinho(newCarrinho).toFixed(2);
            verificaItensCarrinho(newCarrinho);
            selecionarLixeiraCarrinho();
        });
    }
}

async function verificaItensCarrinho(carrinho){
    const carQuantidade = document.querySelector(".quant-prod");
    if(carrinho[0].items.length === 0){
        carrinhoVazioMessage(`<h2>Sua sacola está vazia</h2>
        <p>Você não possui nenhum item em sua sacola.<br>Clique <a href="../index.html">aqui</a> para continuar comprando.</p>`);
    }
    if(carrinho[0].items.length === 1){
        carQuantidade.textContent = carrinho[0].items.length + ' Produto ';
    } else if(carrinho[0].items.length > 1){
        carQuantidade.textContent = carrinho[0].items.length + ' Produtos ';   
    }
}

function carrinhoVazioMessage(message){
    const carrinhoVazio = document.querySelector(".main__carrinho-vazio");
    const carrinhoSessao = document.querySelector("#main__carrinho-Container");
    carrinhoVazio.innerHTML = message;
    carrinhoVazio.style.display = 'flex';
    carrinhoSessao.style.display = 'none';
}

async function initPageCarrinho(){
    const carrinho = await pegaCarrinho()
    if(carrinho[0].items.length === 0){
        carrinhoVazioMessage(`<h2>Sua sacola está vazia</h2>
            <p>Você não possui nenhum item em sua sacola.<br>Clique <a href="../index.html">aqui</a> para continuar comprando.</p>`);
    }else{
        const carrinhoSessao = document.querySelector("#main__carrinho-Container");
        carrinhoSessao.style.display = 'flex'; 
        verificaItensCarrinho(carrinho);
        startCart(carrinho)
    }

}

if(window.location.pathname.includes('pages/meu-carrinho')) {
    mostraQuantidadeItem();
    const userLogado = Cookies.pegaCookie("accessToken");
    if(userLogado){
      initPageCarrinho()
    }else{
        carrinhoVazioMessage(`<h2>É necessário fazer o login primeiro!</h2>
        <p>Para acessar seu carrinho, você precisa entrar na sua conta.<br>Clique <a href="./logCad.html">aqui</a> para continuar comprando.</p>`);
    }
}