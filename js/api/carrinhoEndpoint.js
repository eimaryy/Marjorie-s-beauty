import { UrlBaseApi } from "./server.js";
import Cookies from "../storage/cookies.js";

async function addItemCarrinho(id){
    try{
        const accessToken = await Cookies.pegaCookie("accessToken");
       const conexao = await fetch(`${UrlBaseApi}carrinho/${id}`, {
        method: "POST",
        headers:{
            'Authorization': `Bearer ${accessToken}`, 
            "Content-type": "application/json"
        }, 
        }); 
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida;

    }catch(error){
        throw new Error(`Erro ao adicionar item no carrinho`);
    }
}
async function findCarrinho(){
    try{
        const accessToken = await Cookies.pegaCookie("accessToken");
       const conexao = await fetch(`${UrlBaseApi}carrinho`, {
        method: "GET",
        headers:{
            'Authorization': `Bearer ${accessToken}`, 
            "Content-type": "application/json"
        }, 
        }); 
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida;

    }catch(error){
        throw new Error(`Erro ao mostrar o carrinho`);
    }
}

async function delItemCarrinho(id){
    try{
        const accessToken = await Cookies.pegaCookie("accessToken");
       const conexao = await fetch(`${UrlBaseApi}carrinho/${id}`, {
        method: "DELETE",
        headers:{
            'Authorization': `Bearer ${accessToken}`, 
            "Content-type": "application/json"
        }, 
        }); 
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida;

    }catch(error){
        throw new Error(`Erro ao deletar item no carrinho`);
    }
}

export const conectaAPICarrinho = {
    addItemCarrinho,
    findCarrinho,
    delItemCarrinho
    
}
