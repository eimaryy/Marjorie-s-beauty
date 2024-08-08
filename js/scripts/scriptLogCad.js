import AuthService from "../services/AuthService.js";
import  cadastrar from "../utils/form.js";
import { loadForm } from "../utils/domUtils.js";
// import UserService from "../services/UserService.js";

const formularioContainer = document.querySelector('.form__container');
const formulario = document.querySelector("form"); 

loadForm("login", formularioContainer);
cadastrar();
formulario.addEventListener("submit", evento => AuthService.login(evento, formulario));


let semConta = document.querySelector('.formulario__semConta');
semConta.addEventListener('click', () =>{
    if(semConta.name === 'cadastrar'){
        loadForm("cadastro", formularioContainer);
        semConta.name = 'logar';
        semConta.textContent = 'JÁ POSSUO UMA CONTA';
        cadastrar();
        // formulario.addEventListener("submit", evento => UserService.criarUser(evento, formulario));
    } else{
        loadForm("login", formularioContainer);
        semConta.name = 'cadastrar';
        semConta.textContent = 'NÃO POSSUO UMA CONTA';
        // formulario.addEventListener("submit", evento => AuthService.login(evento, formulario));
    }
})



