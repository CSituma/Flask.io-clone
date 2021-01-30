import {
  GET_ERRORS,
  LOG_IN,
  LOGOUT,
} from "../Actions/types"

const initialState = {
  token:localStorage.getItem('token'),
  isAuthenticated: localStorage.getItem('token')? true :false,
  loading:true,
  errors:'',
  user:localStorage.getItem('userss'),
 
 
};

const isAuthenticated = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOG_IN:
      return {
        ...state,
        token:localStorage.getItem('token'),
        isAuthenticated: localStorage.getItem('token')? true :false,
        loading: false,
         errors:null,
         user:payload
       
      };
    

    case GET_ERRORS:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        errors:payload
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: localStorage.getItem('token')? true :false,
        loading: false,
        user: null,
        errors:''
      };
    default:
      return state;
  }
}
export default isAuthenticated