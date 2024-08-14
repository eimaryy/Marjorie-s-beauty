import Cookies from "../storage/cookies.js";

export function checkCookies(){
    const interval = setInterval(() => {
        const cookieValue = Cookies.pegaCookie("accessToken");
        if (!cookieValue) {
          clearInterval(interval); 
          alert(`Sua sessão terminou! necessário fazer login novamente.`);
          window.location.href = 'pages/logCad.html'
        }
    }, 1000); 
}

const cookieValue = Cookies.pegaCookie("accessToken");
if(cookieValue){
    checkCookies(cookieValue);
}
