import { conectaAPIAuth } from "../api/authEndpoint.js";
import { conectaAPIUser } from "../api/userEndpoint.js";
import Cookies from "../storage/cookies.js";
class AuthService {
    static async login(evento, form){
        evento.preventDefault();

        const email = form.email.value;
        const senha = form.senha.value;

        try{
            const res = await conectaAPIAuth.login(email, senha);
            await Cookies.createCookie("accessToken", res.accessToken);

            const user = await conectaAPIUser.findUserId(res.accessToken);

            await Cookies.createCookie("nameUser", user.name);
            
            if(user.role === "admin"){
                window.location.href = "./admin.html";   
            }else{
                window.location.href = "../index.html";   
            }

         } catch(e){
             alert(e);
         }
    }
}

export default AuthService;