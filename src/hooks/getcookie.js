import Cookie from 'js-cookie';

const getCookie =(cookie_name) =>{
     return Cookie.get(cookie_name ) ;
};
export default getCookie;