import React, { Component } from "react";
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import "../../style.scss";
import Form from 'react-bootstrap/Form';
import Coffee from './buycoffee';
import Button from 'react-bootstrap/Button';
import Navbar from "./Navbar";
import { logout } from '../../Actions/loginUser';

class Account extends Component {

state = {
username:"",
email:"",
  }

  handleChange = (e) =>{

    this.setState({[e.target.name]:e.target.value})
        
    }
 

     clear = () => {
    this.setState({
      username:"",
      email:"",

    });
  };
  

   submit = (e) =>{
    e.preventDefault();
    //const {username,email} = this.state
  

   this.clear();
   
  }


  render() {
  
  
  console.log(this.state)


    return (
      <div>
      <Navbar/>
      <div className="Form">
       <Form  onSubmit = {this.submit}>
    <h2>Account Settings</h2>
    <Form.Group controlId="formBasicName">
   <Form.Label>Name</Form.Label>
   <Form.Control type="text"
   name="username"
   value= {this.state.username} 
   onChange={this.handleChange}/>
 </Form.Group>
 <Form.Group controlId="formBasicEmail">
   <Form.Label>Email </Form.Label>
   <Form.Control type="email"  
   name="email"
    value = {this.state.email}
    onChange={this.handleChange} />
 </Form.Group>
 
 <Form.Text className="text-muted">
    Click here to change your password
   </Form.Text>
 <style type="text/css">
    {`
    .btn-flat {
      background-color:rgb(0,128,46);
      opacity:80%;
      color: white;
      border:0.2px solid rgba(53, 53, 53, 0.681);
      margin-top:2em;
      margin-bottom:em;
      
    }
    `}
  </style>
 <Button size="lg" variant="flat" type="submit">
   Save changes
 </Button>
</Form>
<div className="purpletext">
  <Link to="./Landing" onClick={logout}>Log out</Link>
</div>
</div>
<Coffee/>
     </div>
    )
  
    }
}
Account.prototypes = {
logout:PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors:state.auth.errors
  
})



export default connect(mapStateToProps,{logout})(Account)
