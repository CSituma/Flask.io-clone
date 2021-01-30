import React, { Component } from "react";
import PropTypes from "prop-types"
import {connect} from "react-redux"
import LoginUser from "../../Actions/loginUser"
import {Link, Redirect} from "react-router-dom"
import "../../style.scss";
import Form from 'react-bootstrap/Form';
import Coffee from '../Layout/buycoffee';
import Button from 'react-bootstrap/Button';
import Navbar from "../Layout/Navbar";


class Login extends Component {

state = {
email:"",
password:"",
errors:''
  }

  handleChange = (e) =>{

    this.setState({[e.target.name]:e.target.value})
        
    }
 

     clear = () => {
    this.setState({
      email: '',
      password: '',
      errors:''

  
    });
  };
  

   submit = (e) =>{
    e.preventDefault();
    const {email,password} = this.state
   this.props.LoginUser(email, password);

   this.clear();
   
  }


  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/Dashboard" /> 
    }
    
  
  console.log(this.state)

  
    return (
      <div>
      <Navbar/>
      <div className="Form">
       <Form  onSubmit = {this.submit}>
    <h2>Log in to save and access your lists</h2>
   <p>New to Flask.io?<span className="purpletext"> 
    <Link to="/Register"> Sign up here to save your lists.</Link></span></p>
 <Form.Group controlId="formBasicEmail">
   <Form.Label>Email </Form.Label>
   <Form.Control type="email"  
   name="email"
    value = {this.state.email}
    onChange={this.handleChange} />
 </Form.Group>
 <Form.Group controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
   <Form.Control type="password"
   name="password"
   value= {this.state.password} 
   onChange={this.handleChange}/>
 </Form.Group>

 <style type="text/css">
    {`
    .btn-flat {
      background-color:rgb(0,128,46);
      opacity:80%;
      color: white;
      border:0.2px solid rgba(53, 53, 53, 0.681);
      
    }
    `}
  </style>
 <Button size="lg" variant="flat" type="submit">
   Log in
 </Button>
 <Form.Text className="text-muted">
     Forgot your password?
   </Form.Text>
</Form>
</div>
<Coffee/>
     </div>
    )
  
    }
}
Login.prototypes = {
LoginUser:PropTypes.func.isRequired,
isAuthenticated: PropTypes.bool,
errors: PropTypes.string

}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors:state.auth.errors
  
})



export default connect(mapStateToProps,{LoginUser})(Login)
