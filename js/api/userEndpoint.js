import { UrlBaseApi } from "./server.js";

async function createUser(name, lastName, CPF, aniversario, email, password, role) {

    const conexao = await fetch(`${UrlBaseApi}user/create`, {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        }, 
        body: JSON.stringify({
            name: name,
            lastName: lastName,
            CPF: CPF,
            aniversario: aniversario,
            email: email,
            password: password, 
            role: role 
        })
    });
    if(!conexao.ok){
        throw new Error("Não foi possivel criar o usuario");
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function findUserId(accessToken) {
    const conexao = await fetch(`${UrlBaseApi}user`, {
        method: "GET",
        headers:{
            'Authorization': `Bearer ${accessToken}`, 
            "Content-type": "application/json"
        }, 
    }); 
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;

}
async function deleteUser(accessToken) {
    const conexao = await fetch(`${UrlBaseApi}user`, {
        method: "DELETE",
        headers:{
            'Authorization': `Bearer ${accessToken}`, 
            "Content-type": "application/json"
        }, 
    }); 
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;

}

export const conectaAPIUser = {
    createUser, 
    findUserId,
    deleteUser
}