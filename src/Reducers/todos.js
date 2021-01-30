import { ADD_TODOS, DELETE_TODOS } from "../Actions/types"

const initialState = {

  todos:[],
}

const todos = (state = initialState, action) => {
  switch (action.type) {

  case ADD_TODOS:
    return { ...state, 
      todos: [...state.todos, action.payload],
    }
  case DELETE_TODOS:
    return { ...state}

  default:
    return state
  }
}

export default todos