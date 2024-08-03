import  cadastrar from "../utils/formCad.js";
const formulario = document.querySelector('.form__container');

const login =  `
<form>
<fieldset class="formulario__campo">
    <label class="campo" for="email">E-mail</label>
    <input class="campo_input" name="email" id="email" autocomplete="on" required type="email" minlength="4">
    <span class="mensagem-erro"></span>
</fieldset>
<fieldset class="formulario__campo">
    <label class="campo" for="senha">Senha</label>
    <input class="campo_input" name="senha" id="senha" autocomplete="current-password" required type="password" minlength="8">
    <span class="mensagem-erro"></span>
</fieldset>

    <input value="Entrar" class="formulario__botao" id="" data-botao-enviar type="submit">
    <span class="mensagem-erro"></span>

`;

const cadastro = `
<fieldset class="formulario__campo">
<label class="campo" for="nome">Nome</label>
<input class="campo_input" name="nome" id="nome" autocomplete="off" required type="text" minlength="2">
<span class="mensagem-erro"></span>
</fieldset>
<fieldset class="formulario__campo">
    <label class="campo" for="sobrenome">Sobrenome</label>
    <input class="campo_input" name="sobrenome" id="sobrenome" autocomplete="off" required type="text" minlength="2">
    <span class="mensagem-erro"></span>
</fieldset>
<fieldset class="formulario__campo">
<label class="campo" for="cpf">CPF</label>
<input class="campo_input" name="cpf" id="cpf" autocomplete="off" required type="text" minlength="11" maxlength="14" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}|\\d{11}">
<span class="mensagem-erro"></span>
</fieldset>
<fieldset class="formulario__campo">
<label class="campo" for="aniversario">Data de nascimento</label>
<input name="aniversario" id="aniversario" required class="campo_input campo_input-menor" type="date"/>
<span class="mensagem-erro"></span>
</fieldset>
<fieldset class="formulario__campo">
<label class="campo" for="email">E-mail</label>
<input class="campo_input" name="email" id="email" autocomplete="off" required type="email" minlength="4">
<span class="mensagem-erro"></span>
</fieldset>
<fieldset class="formulario__campo">
<label class="campo" for="senha">Crie uma senha</label>
<input class="campo_input" name="senha" id="senha" autocomplete="off" required type="password">
<span class="mensagem-erro"></span>
</fieldset>
<fieldset class="formulario__termos">
<input name="termos" id="termos" class="termos__input" required type="checkbox">
<label for="termos" class="termos__texto">Li e estou ciente quanto às condições de tratamento dos meus dados conforme
    descrito na Política
    de
    Privacidade de Marjorie's.</label>
<span class="mensagem-erro"></span>
</fieldset>

<input value="Cadastrar" class="formulario__botao" id="" data-botao-enviar type="submit">
<span class="mensagem-erro"></span>
`;

formulario.innerHTML = login;

let semConta = document.querySelector('.formulario__semConta');
semConta.addEventListener('click', () =>{
    if(semConta.name === 'cadastrar'){
        formulario.innerHTML = cadastro;
        semConta.name = 'logar';
        semConta.textContent = 'JÁ POSSUO UMA CONTA';
        cadastrar();
    } else{
        formulario.innerHTML = login;
        semConta.name = 'cadastrar';
        semConta.textContent = 'NÃO POSSUO UMA CONTA';

    }
})
