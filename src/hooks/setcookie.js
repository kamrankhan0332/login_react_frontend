import Cookie from 'js-cookie';

const setCookie =(cookie_name, token) =>{
    Cookie.set(cookie_name, token,{
        expires: 365,
        secure: true,
        sameSite: 'strict',
        path:'/'
    } );
    console.log(Cookie.get(token))
};
export default setCookie;