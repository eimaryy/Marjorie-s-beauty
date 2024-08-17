import Cookies from "../storage/cookies.js";

export function checkCookies(){
    const interval = setInterval(() => {
        const cookieValue = Cookies.pegaCookie("accessToken");
        if (!cookieValue) {
          clearInterval(interval); 
          alert(`Sua sessão terminou! É necessário fazer login novamente.`);

          const currentPath = window.location.pathname;
          let redirectPath;

          if (currentPath.includes("/pages/")) {
              redirectPath = 'logCad.html';
          } else {
              redirectPath = 'pages/logCad.html';
          }

          window.location.href = redirectPath;
        }
    }, 1000); 
}

const cookieValue = Cookies.pegaCookie("accessToken");
if(cookieValue){
    checkCookies(cookieValue);
}