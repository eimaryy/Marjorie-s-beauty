import ProdutoService from "../services/ProdutoService.js";

const botoesAdmin = document.querySelectorAll('.main__botaoAncora');

for(let botao of botoesAdmin){
    botao.addEventListener('click', () => {
       const acao =  botao.getAttribute("data-acao");
       manipuladorAcao(acao)
    })
}

function manipuladorAcao (acao){
    if(acao === "criaProd"){
        const container = document.querySelector('#main__managerAcao');
        container.innerHTML = criaProd
    }
    const formulario = document.querySelector("form"); 
    formulario.addEventListener("submit", evento => ProdutoService.criarProduto(evento, formulario));

}

const criaProd = `
         <form>
  <div class="form__container">
    <fieldset class="formulario__campoRadio">
      <legend>Selecione a Categoria:</legend>
      <input class="campo_inputRadio" name="category" id="category1" type="radio" value="skincare">
      <label class="campoRadio" for="category1">Skincare</label>
      
      <input class="campo_inputRadio" name="category" id="category2" type="radio" value="perfumaria">
      <label class="campoRadio" for="category2">Perfumaria</label>
      
      <input class="campo_inputRadio" name="category" id="category3" type="radio" value="maquiagem">
      <label class="campoRadio" for="category3">Maquiagem</label>
      
      <input class="campo_inputRadio" name="category" id="category4" type="radio" value="corpo e banho">
      <label class="campoRadio" for="category4">Corpo e banho</label>
      
      <input class="campo_inputRadio" name="category" id="category5" type="radio" value="cabelos">
      <label class="campoRadio" for="category5">Cabelos</label>
      
      <input class="campo_inputRadio" name="category" id="category6" type="radio" value="infantil">
      <label class="campoRadio" for="category6">Infantil</label>
      
      <input class="campo_inputRadio" name="category" id="category7" type="radio" value="artesanal">
      <label class="campoRadio" for="category7">Artesanal</label>
      
      <span class="mensagem-erro"></span>
    </fieldset>
    
    <fieldset class="formulario__campo">
      <label class="campo" for="amount">Quantidade em estoque</label>
      <input class="campo_input" name="amount" id="amount" autocomplete="current-password" required type="number">
      <span class="mensagem-erro"></span>
    </fieldset>
    
    <fieldset class="formulario__campo">
      <label class="campo" for="status">Status</label>
      <input class="campo_input" name="status" id="status" autocomplete="current-password" required type="text" minlength="2">
      <span class="mensagem-erro"></span>
    </fieldset>
    
    <fieldset class="formulario__campo">
      <label class="campo" for="name">Nome do produto</label>
      <input class="campo_input" name="name" id="name" autocomplete="on" required type="text" minlength="2">
      <span class="mensagem-erro"></span>
    </fieldset>
    
    <fieldset class="formulario__campo">
      <label class="campo" for="file">Adicione a imagem do produto</label>
      <input class="campo_input" name="file" id="file" required type="file">
      <span class="mensagem-erro"></span>
    </fieldset>
    
    <fieldset class="formulario__campo">
      <label class="campo" for="alt">Descrição da imagem</label>
      <input class="campo_input" name="alt" id="alt" autocomplete="on" required type="text" maxlength="40">
      <span class="mensagem-erro"></span>
    </fieldset>
    
    <fieldset class="formulario__campo">
      <label class="campo" for="description">Descrição do produto</label>
      <input class="campo_input" name="description" id="description" autocomplete="on" required type="text" maxlength="200">
      <span class="mensagem-erro"></span>
    </fieldset>
    
    <fieldset class="formulario__campo">
      <label class="campo" for="price">Valor do produto</label>
      <input class="campo_input" name="price" id="price" autocomplete="current-password" required type="text">
      <span class="mensagem-erro"></span>
    </fieldset>
    
    <input value="Criar Produto" class="formulario__botao" id="botao_criarProduto" data-botao-criarProduto type="submit">
    <span class="mensagem-erro"></span>
  </div>
</form>

`

