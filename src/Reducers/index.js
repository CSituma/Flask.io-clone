import {combineReducers} from "redux"
import isAuthenticated from "./isAuthenticated"
import todo from "./todo"
import todos from "./todos"


const allReducers = combineReducers ({

 auth:isAuthenticated,
 todo:todo,
 todos:todos,

})

export default allReducers;