import { getCookie, setCookie } from "./cookies";
import { getLocalStorage, setLocalStorage } from "./localStorage";

export const setAuthentification =(user,token)=>{
    setLocalStorage('user',user);
    setCookie('token',token)
}

export const isAuthenticated =()=>{

    const cookie = getCookie('token');

    if(cookie && getLocalStorage('user')){
        return getLocalStorage('user')
    }else{
        return false
    }
}