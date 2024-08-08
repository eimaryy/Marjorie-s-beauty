import ehUmCpf from "./validaCPF.js";

export default function cadastrar(){
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) =>{
    campo.addEventListener("blur", () => verificaCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing', 
    'typeMismatch',
    'patternMismatch',
    'tooShort', 
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    sobrenome: {
        valueMissing: "O campo de sobrenome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um sobrenome válido.",
        tooShort: "Por favor, preencha um sobrenome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    },
    senha:{
        valueMissing: 'Você deve adicionar sua senha.',
        tooShort: "por favor, crie uma senha forte com mais de 4 caractéres."
    }
}

function verificaCampo(campo){
    let mensagem = ""; 
    campo.setCustomValidity('');
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCpf(campo);
    }
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })
    const mensagemErro = campo.parentNode.nextElementSibling;
    const validadorDeInput = campo.checkValidity();
    if (!validadorDeInput){
        mensagemErro.textContent = mensagem; 
    } else{
        mensagemErro.textContent = '';
    }
}
}