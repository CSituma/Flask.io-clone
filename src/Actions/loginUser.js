import {GET_ERRORS, LOG_IN,LOGOUT} from "./types"
import axios from "axios"
import jwt_decode from "jwt-decode"


const LoginUser = (email,password) => dispatch => {
  const payload = {

    email,
    password
   
  }
  axios.post('https://8a58396b-3b4c-45b9-8e4f-9d3c4321a45c.mock.pstmn.io/user/log', payload)
    .then( res => {
      console.log(res.data)
      const {token} = res.data;
      
///////////////////////////////////////
      /*checking for token,
      saving and deleting it on localstorage*/
///////////////////////////////////////////
      const setAuthToken = token => {
        if (token) {
          //apply to every request
          axios.defaults.headers.common['Authorization'] = token;
          localStorage.setItem('token', token);
        } else {
          delete axios.defaults.headers.common['Authorization'];
          localStorage.removeItem('token');
        }
      };
      /////////////////////////////////////////////////////
      setAuthToken(token);
      ///Decode Token to get user data

      const decoded = jwt_decode(token);


////saving user in local storage//////////////

       const user = JSON.stringify(decoded)

       const saveUser = users => {
        if (users) {
 
          localStorage.setItem('user', users);
        } else {
          localStorage.removeItem('user');
        }
      };
      /////////////////////////////////////////////////////
      saveUser(user);


       dispatch({
        type:  LOG_IN,
        payload:user
      
      })
    

    })
    .catch(error => {
        console.log(error)
        dispatch({
          type:GET_ERRORS,
          payload:error.response.data
 
       })

      })
  

}


//////LOGOUT




export const logout = () =>dispatch =>{

    localStorage.removeItem('token');
    localStorage.removeItem('userss');
    localStorage.removeItem('Todos');
       dispatch({
       type: LOGOUT
      })


} 

export default LoginUser