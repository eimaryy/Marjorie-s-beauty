import ProdutoService from "../services/ProdutoService.js";
import UserService from "../services/UserService.js";
import cadastrar from "../utils/form.js";
import { verificaConta } from "../utils/userAccont.js";
import { loadForm } from "../utils/domUtils.js";
import Cookies from "../storage/cookies.js";
import { conectaAPIUser } from "../api/userEndpoint.js";

const botoesAdmin = document.querySelectorAll('.main__botaoAncora');
const res = verificaConta();
autentificacaoUser(res);

async function autentificacaoUser(res){
    if(res){
        const token = Cookies.pegaCookie('accessToken');
        if(token){
            const user = await conectaAPIUser.findUserId(token);
            if(user.role === 'Cliente'){
                window.location.href = '../index.html'
            }
        } 
    }else{
        window.location.href = "./logCad.html"
    }
}

for(let botao of botoesAdmin){
    botao.addEventListener('click', () => {
       const acao =  botao.getAttribute("data-acao");
       manipuladorAcao(acao)
    })
}

function manipuladorAcao (acao){
    const container = document.querySelector('#main__managerAcao');

    if(acao === "criaProd"){
        loadForm("criaProduto", container);
        const formulario = document.querySelector("form"); 
        formulario.addEventListener("submit", evento => ProdutoService.criarProduto(evento, formulario));
    }else if( acao === "criaUser"){
        loadForm("criaUser", container);
        cadastrar();
        const formulario = document.querySelector("form"); 
        formulario.addEventListener("submit", evento => UserService.criarUser(evento, formulario));
    }
    const btnSair = document.querySelector('.main__managerAcaoSair');
    btnSair.addEventListener('click', () => container.innerHTML = ``);
    
}


