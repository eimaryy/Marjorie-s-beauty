import { conectaAPIAuth } from "../api/authEndpoint.js";
import Cookies from "../storage/cookies.js";

class AuthService {
    static async login(evento, form){
        evento.preventDefault();

        const email = form.email.value;
        const senha = form.senha.value;

        try{
            const res = await conectaAPIAuth.login(email, senha);
            await Cookies.createCookie("accessToken", res.accessToken);

            // const user = await UserService.findUserId(res.accessToken);

            // if(){

            // }
         window.location.href = "../index.html";   

         } catch(e){
             alert(e);
         }
    }
}

export default AuthService;