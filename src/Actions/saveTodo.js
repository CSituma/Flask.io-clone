import {ADD_TODO, CLEAR_TODOS} from "./types" 
//import axios from "axios"


let nextTodoId = 0;
const SaveTodo = ({inputText}) =>  dispatch => {

   /*axios.post('https://8a58396b-3b4c-45b9-8e4f-9d3c4321a45c.mock.pstmn.io/todoitem', data)
   .then(res => {
     console.log(res.data)
     this.props.history.push('/Dashboard')

      dispatch({
         type:GET_TODO,
         payload:res.data

      })})
      .catch(error => {
        console.log(error)
        dispatch({
          type:GET_ERRORS,
          payload:error.response.data
 
       })

      })*/


      dispatch({

         type:ADD_TODO,
         id:nextTodoId++,
         payload:inputText
       })


   }



export const clearTodo = () =>{

return({

  type:CLEAR_TODOS
})


}


  
export default SaveTodo