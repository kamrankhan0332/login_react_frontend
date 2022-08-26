import Cookie from 'js-cookie';

const removeCookie =(cookie_name) =>{
    Cookie.remove(cookie_name);

};
export default removeCookie;