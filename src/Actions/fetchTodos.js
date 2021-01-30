import axios from "axios"
import {GET_TODOS,  PROFILE_ERRORS } from "./types"




 const  fetchTodos =()=> dispatch =>{
 

 axios.get('https://8a58396b-3b4c-45b9-8e4f-9d3c4321a45c.mock.pstmn.io')
 .then(res => {
   console.log(res.data)
  
   
   const Todos = JSON.stringify(res.data)

   const saveTodos = todos => {
    if (Todos) {

      localStorage.setItem('Todos', todos);
    } else {
      localStorage.removeItem('Todos');
    }
  };
  /////////////////////////////////////////////////////
  saveTodos(Todos);
   dispatch({

   type:GET_TODOS,
   payload:Todos
   })
  

 })
 .catch(error =>
  {  dispatch({
     type:PROFILE_ERRORS,
      payload:error.response.data
      })

  })
}

export default fetchTodos