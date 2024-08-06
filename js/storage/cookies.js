class Cookies {
    static createCookie(name, value, seconds =  86400) {
            let expires = "";
            if (seconds) {
                const date = new Date();
                date.setTime(date.getTime() + (seconds * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
    
    };
    
    static pegaCookie(cname) {
        const name = cname + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return null;
    }
    
    static deleteCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999; path=/'; 
    }

}


export default Cookies;