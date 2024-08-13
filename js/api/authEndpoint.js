import { UrlBaseApi } from "./server.js";

async function login(email, senha){

    const conexao = await fetch(`${UrlBaseApi}auth/login`, {
        method: "POST", 
        headers: {
            "Content-type": "application/json"
        }, 
        body: JSON.stringify({
            email: email,
            password: senha
        })
    });

    if(!conexao.ok){
        throw new Error("Não foi possivel realizar o login");
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;

}

export const conectaAPIAuth = {
    login,
}