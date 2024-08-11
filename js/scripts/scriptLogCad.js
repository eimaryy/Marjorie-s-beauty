import AuthService from "../services/AuthService.js";
import  cadastrar from "../utils/form.js";
import { loadForm } from "../utils/domUtils.js";
import UserService from "../services/UserService.js";

const formularioContainer = document.querySelector('.form__container');
let semConta = document.querySelector('.formulario__semConta');
let formulario; 

function initLogin(evento) {
    AuthService.login(evento, formulario);
}

 function initCadastro(evento) {
    UserService.criarUser(evento, formulario);
}

function inicializaLogin() {
        loadForm("login", formularioContainer);
        cadastrar();
        formulario = document.querySelector("form");
        formulario.addEventListener("submit", initLogin);
        semConta.name = 'cadastrar';
        semConta.textContent = 'NÃO POSSUO UMA CONTA';

    }

semConta.addEventListener('click', () =>{
    if(semConta.name === 'cadastrar'){
        formulario.removeEventListener("submit", initLogin);
        loadForm("cadastro", formularioContainer);
        semConta.name = 'logar';
        semConta.textContent = 'JÁ POSSUO UMA CONTA';
        formulario = document.querySelector("form");
        cadastrar();
        formulario.addEventListener("submit", initCadastro);
    } else{
        formulario.removeEventListener("submit", initCadastro);
       inicializaLogin();
    }
})

inicializaLogin();

