import { UrlBaseApi } from "./server.js";

async function listProdutos(pagination = '') {
    try{
        const endpointDaAPI = `${UrlBaseApi}produtos${pagination}`;
        const conexao = await fetch(endpointDaAPI)
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida;

    }catch(error){
        throw new Error(`Erro ao conectar com a API`);
    }
}

async function searchProduto(keyword = '', pagination) {
    if(keyword.trim() === ""){
        return {message: "Não foi possivel realizar a pesquisa. O campo esta vazio!"}
    }
    try{
        const endpointDaAPI = `${UrlBaseApi}produtos/search/keyword/${keyword}${pagination}`;
        const conexao = await fetch(endpointDaAPI)
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida;

    }catch(error){
        throw new Error(`Erro ao conectar com a API`);
    }
}

async function findProdutoCategory(keyword = '', pagination) {
    try{
        const endpointDaAPI = `${UrlBaseApi}produtos/category/${keyword}${pagination}`;
        const conexao = await fetch(endpointDaAPI)
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida;

    }catch(error){
        throw new Error(`Erro ao conectar com a API`);
    }
}

async function findProdutoId(id) {
    try{
        const endpointDaAPI = `${UrlBaseApi}produto/search/${id}`;
        const conexao = await fetch(endpointDaAPI)
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida;

    }catch(error){
        throw new Error(`Erro ao conectar com a API`);
    }
}


async function createProduto(category, amount, status, name, file, alt, description, price, accessToken) {

    const formData = new FormData();
    formData.append("category", category);
    formData.append("amount", amount);
    formData.append("status", status);
    formData.append("name", name);
    formData.append("file", file); 
    formData.append("alt", alt);
    formData.append("description", description);
    formData.append("price", price);

    const conexao = await fetch(`${UrlBaseApi}produto/create`, {
        method: "POST",
        headers:{
            'Authorization': `Bearer ${accessToken}`, 
        }, 
        body: formData
    });
    if(!conexao.ok){
        throw new Error("Não foi possivel criar o produto");
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaAPIProduto = {
    listProdutos,
    searchProduto,
    findProdutoId,
    findProdutoCategory,
    createProduto
}
