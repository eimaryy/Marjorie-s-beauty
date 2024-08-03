async function listProdutos() {
    try{
        const endpointDaAPI = 'http://127.0.0.1:8000/produtos'
        const conexao = await fetch(endpointDaAPI)
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida;

    }catch(error){
        throw new Error(`Erro ao conectar com a API: ${error.statusText}`);
    }

}

async function createProduto(category, amount, status, name, file, alt, description, price) {

    const formData = new FormData();
    formData.append("category", category);
    formData.append("amount", amount);
    formData.append("status", status);
    formData.append("name", name);
    formData.append("file", file); 
    formData.append("alt", alt);
    formData.append("description", description);
    formData.append("price", price);

    const conexao = await fetch("http://127.0.0.1:8000/produto/create", {
        method: "POST",
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
    createProduto
}

//  async function teste(){
//     const mostra = await conectaAPIProduto.listProdutos();

//     console.log(mostra);
//  }

