import  cadastrar from "../utils/formCad.js";
import { loadForm } from "../utils/domUtils.js";

const formulario = document.querySelector('.form__container');

loadForm("login", formulario);

let semConta = document.querySelector('.formulario__semConta');
semConta.addEventListener('click', () =>{
    if(semConta.name === 'cadastrar'){
        loadForm("cadastro", formulario);
        semConta.name = 'logar';
        semConta.textContent = 'JÁ POSSUO UMA CONTA';
        cadastrar();
    } else{
        formulario.innerHTML = login;
        semConta.name = 'cadastrar';
        semConta.textContent = 'NÃO POSSUO UMA CONTA';

    }
})
