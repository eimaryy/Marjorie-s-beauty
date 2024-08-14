import { conectaAPICarrinho } from "../api/carrinhoEndpoint.js";
import { acenderCarrinho } from "../utils/mostra.js";
import { mostraQuantidadeItem, load, excluirItemCarrinho } from "../utils/carFav.js";
import { calculaValorCarrinho } from "../utils/calculaCarrinho.js"

const valorAPagar = document.querySelector(".main__carrinhoValor");

async function pegaCarrinho(){
    const carrinho = await conectaAPICarrinho.findCarrinho();
    return carrinho;
}

async function startCart(){
    const carrinho = await pegaCarrinho()
    mostraQuantidadeItem();
    calculaValorCarrinho(carrinho).toFixed(2);
    acenderCarrinho(carrinho);
    load();
    valorAPagar.textContent = calculaValorCarrinho(carrinho).toFixed(2);
    verificaItensCarrinho();
}

async function verificaItensCarrinho(){
    const carrinho = await pegaCarrinho()
        const carQuantidade = document.querySelector(".quant-prod");
        const carrinhoSessao = document.querySelector("#main__carrinho-Container");
        const carrinhoVazio = document.querySelector(".main__carrinho-vazio");
        
        if(carrinho[0].items.length === 0){
            carrinhoVazio.style.display = 'flex';
            carrinhoSessao.style.display = 'none';
        }
        if(carrinho[0].items.length === 1){
            carQuantidade.textContent = carrinho[0].items.length + ' Produto ';
        } if(carrinho[0].items.length > 1){
            carQuantidade.textContent = carrinho[0].items.length + ' Produtos ';   
        }
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
            verificaItensCarrinho();
            selecionarLixeiraCarrinho();
        });
    }
}

if(window.location.pathname.includes('pages/meu-carrinho.html')) {
startCart();
}