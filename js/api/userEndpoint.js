async function createUser(name, lastName, CPF, aniversario, email, password, role) {

    const conexao = await fetch("http://127.0.0.1:8000/user/create", {
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

export const conectaAPIUser = {
    createUser
}