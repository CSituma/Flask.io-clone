import {CLEAR_TODOS, ADD_TODO} from "../Actions/types"



const initialState =  {

  id:"",
  data:"",
  completed:false

  
    }

const todo =  (state = initialState, action) => {
  switch (action.type) {

  case ADD_TODO:
    return { ...state,
     
      id:action.id,
      data:action.data,
      completed:false
      }


  case CLEAR_TODOS:
    return { ...state }
      
  

  default:
    return state
  }
}
export default todo
