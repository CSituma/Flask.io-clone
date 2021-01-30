import {React,useEffect,useState} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "../../style.scss";
import Navbar from '../Layout/Navbar';
import Coffee from "../Layout/buycoffee"
import {Redirect} from "react-router-dom"
 import OverlayTrigger from "react-bootstrap/OverlayTrigger";
 import Tooltip from "react-bootstrap/Tooltip";
import Todoitem from "./Todoitem"
 import saveTodo from "../../Actions/saveTodo"

 function renderTooltip(props) {
  return <Tooltip id="tooltip"{...props}>Enter your first Task and press enter to save</Tooltip>;
}


const New =({auth:{isAuthenticated}})=> {
const [inputText, setinputText] = useState("")

const handleChange = (e) =>{

  setinputText(e.target.value);
       
   }


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
     saveTodo(inputText)
     
  }
  }

useEffect(() => {
  if (!isAuthenticated) {
    return <Redirect to ="/Dashboard"/>
   
 }


}, )


  return (
    <div>
     
   <Navbar/>
   <div className ="title">

     <h2>
    Create your to-do list below
   </h2>
   </div>
  
 <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
       <input type="text" name="todoitem" value ={inputText}  placeholder= "Type Here e.g-buy bacon" className="fill2"  onChange={handleChange}   onKeyPress={handleKeyDown}/>
      </OverlayTrigger>


   <Coffee/>
   <Todoitem/>
  

    </div>
  )
}

New.prototypes = {
  saveTodo:PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  errors: PropTypes.string
  
  }
  
  const mapStateToProps = (state) => ({
   auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    errors:state.auth.errors
    
  })
  
  
  
  export default connect(mapStateToProps,{saveTodo})(New)
  




