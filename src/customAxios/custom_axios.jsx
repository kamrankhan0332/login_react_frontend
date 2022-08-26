import axios from "axios";
import getcookie from "../hooks/getcookie";
import removeCookie from "../hooks/removecookie";
import setCookie from "../hooks/setcookie";

const custom_axios=axios.create({});


custom_axios.interceptors.request.use(
   req=>{
       const access_token =getcookie('access_token');
       req.headers['Authorization'] = "Bearer "+access_token;
       return req;},
    err=>{return Promise.resolve(err);}
);
custom_axios.interceptors.response.use(
  res=>{return res;},
    err=>{
      const original_req = err.config;
      const status=err.response? err.response.status:null;
      const refresh_token = getcookie('token')
      if (status===403){
          console.log(original_req)
          return axios.post('/refreshtoken/',{
              refreshtoken:refresh_token
          }).then(response=>{
              removeCookie('access_token');
              setCookie('access_token', response.data.access_token);
              setCookie('token', refresh_token);
              console.log("new access token has been created");
              return custom_axios(original_req);
          }).catch(err=>{
              console.log(err.data)

          })
      }

    }


);

export default custom_axios;