import { conectaAPIUser } from "../api/userEndpoint.js";
import Cookies from "../storage/cookies.js";

export function verificaConta(){
    const contaLogada = Cookies.pegaCookie("nameUser");
  if(contaLogada){
    addItensContaHTML();
  return contaLogada;
}

function addItensContaHTML(){
  const perfilUser = document.querySelector('[data-user]');
  const userMenu = document.querySelector('.logMenu');
  const perfil = document.querySelector('.header_list-footer-ancoras');
    perfilUser.innerHTML = ` 
       <p class='userName'>Olá, ${contaLogada}<p>
       <ul class="menu-list" style="display: none;"> 
           <li class="item" excluir-conta>Excluir Conta</li>
           <li class="item" sair-conta >Sair da conta</li>
          
       </ul>
       `;
 if(perfil){
   perfil.innerHTML +=`
      <li class='userItem'>Olá, ${contaLogada}</li>
      <li class="userItem" excluir-conta>Excluir Conta</li>
      <li class="userItem" sair-conta>Sair da conta</li>
      `;
      userMenu.style.display = "none";
 }       
 
   const userName = document.querySelector('.userName')
   const menuList = document.querySelector('.menu-list')
   
   userName.addEventListener('click', () =>{
     if(menuList.style.display == 'none'){
       menuList.style.display = 'block'
     }else{
       menuList.style.display = 'none'
     }
   });

 optionsConta()
}

function optionsConta(){
  const btnSair = document.querySelectorAll('[sair-conta]');
  const btnExcluir = document.querySelectorAll('[excluir-conta]');

  for(let btn of btnExcluir){
    btn.addEventListener('click', async ()=>{
     const confirmacao = confirm("Tem certeza de que deseja excluir sua conta?");
     if(confirmacao){
      const token = Cookies.pegaCookie('accessToken');
      const res = await conectaAPIUser.deleteUser(token);
      alert(res);
      Cookies.deleteCookie("accessToken");
      Cookies.deleteCookie("nameUser");
      let basePath = '';
      if (window.location.pathname.includes('pages')) {
          basePath = '../';
      } else {
          basePath = './';
      }
window.location.href = `${basePath}index.html`;
      window.location.href = ''
    }

    });
  }
  for(let btn of btnSair){
    btn.addEventListener('click', ()=>{
      Cookies.deleteCookie("accessToken");
      Cookies.deleteCookie("nameUser");

    });
  }

}
}
