import { conectaAPIUser } from "../api/userEndpoint.js";
class UserService {
    static async criarUser(evento, form){
        evento.preventDefault();

        let role;
        if(form.role){
            const roles = form.role;
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].checked) {
                    role = roles[i].value;
                    break;
                }
            }
        }else{
            role = "Cliente";
        }

        const name = form.nome.value;
        const sobrenome = form.sobrenome.value;
        const CPF = form.cpf.value;
        const aniversario = form.aniversario.value;
        const email = form.email.value;
        const senha = form.senha.value;

        const aniversarioDate = new Date(aniversario);

    try{
       const res = await conectaAPIUser.createUser(name, sobrenome, CPF, aniversarioDate, email, senha, role);
        alert(`${res.message}. Por favor, realize o login!`);
        window.location.href = "./logCad.html"
    } catch(e){
        alert(e);
    }
    }
}
export default UserService;