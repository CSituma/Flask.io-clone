import React, { Component } from "react";
//import {Link} from "react-router-dom"
import "../../style.scss";
import axios from "axios"
import Navbar from "../Layout/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Coffee from "../Layout/buycoffee"


 export default class Register extends Component {
state = {
username:"",
usernameerror:"",
email:"",
emailerror:"",
password:"",
passworderror:"",
errors:false,
alert:null,
error:''
  }


handleChange = (e) =>{

  this.setState({[e.target.name]:e.target.value})
 
 
  }

   validatefields = () =>{
    let errors = {}
    let isError = false
  
    if (!this.state.username.trim()) {
        isError = true;
        errors.username= 'Username is required';
    }
     else if (!/^[A-Za-z]+/.test(this.state.username)) {
       isError = true
      errors.username = 'Enter a valid name';
      
    }
     else if (this.state.username) {
       isError = false;
      errors.username = '';
      
    }
  
  
    if (!this.state.email) {
      isError = true;
      errors.email = 'Email is required';
    } 
    else if (!/\S+@\S+\.\S+$/.test(this.state.email)) {
      isError = true;
      errors.email = 'Email address is invalid';
    }
    else if (this.state.email) {
      isError = false;
     errors.email = '';
     
   }


    if (!this.state.password.trim()) {
      isError = true;
      errors.password = 'Password is required';
    }
     else if (this.state.password.length < 6) {
      isError = true;
      errors.password = 'Password needs to be atleast 6 characters';
    }
    else if (this.state.password) {
      isError = false;
     errors.password= '';
     
   }
  
      if(isError)
      {this.setState(
        {emailerror:errors.email, 
        passworderror:errors.password,
        usernameerror:errors.username,
        errors:true
      })}
  
    return isError;
  
  
  }
  clear = () => {
    this.setState({
      username: "",
      email:"",
      password:"",
      passworderror: "",
      usernameerror: "",
      emailerror: "",
      errors:""
      
    });}

   submit = (e) =>{
    e.preventDefault();

   const error = this.validatefields()

   if (!error){
    const payload = {
       username:this.state.username,
      email:this.state.email,
      password:this.state.password,
     
    }
    axios({
      url: 'https://8a58396b-3b4c-45b9-8e4f-9d3c4321a45c.mock.pstmn.io/user',
      method: 'POST',
      data: payload
    })
      .then(()=> {
        this.clear();
        this.props.history.push('/Login')
      })
    .catch(error => this.setState({errors: error.response.data}))
       console.log (error)

    }

   }
 
  render() {
  console.log(this.state) 
    const {errors} = this.state
   
    return (
       
      <div>
      <Navbar/>
      <div className="Form">
      <Form onSubmit = {this.submit}>
   <h2>Sign up to save  lists</h2>
    {!errors ? "" :(
    <Alert className="red">
  <Alert.Heading>These Errors prohibited this user from being saved</Alert.Heading>
  {!this.state.emailerror?"" :(   
<li> {this.state.emailerror} </li> 
  )} 
  {!this.state.usernameerror?"" :(   
<li> {this.state.usernameerror} </li> 
  )} 
  {!this.state.passworderror?"" :(   
<li> {this.state.passworderror} </li> 
  )}  
  </Alert>)}
   

  
<Form.Group controlId="formBasicName">
  <Form.Label>Name</Form.Label>
  <Form.Control type="text" 
  name="username"
  value = {this.state.username}
  onChange={this.handleChange} 
  />
</Form.Group>
<Form.Group controlId="formBasicEmail">
  <Form.Label>Email</Form.Label>
  <Form.Control type="email" 
  name="email"
  value= {this.state.email}
  onChange={this.handleChange}
  />

</Form.Group>
<Form.Group controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" 
  autoComplete="true"
  name="password" 
  value= {this.state.password}
  onChange={this.handleChange}  
  
  />
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
<Button variant="flat" size="lg" type="submit">
  Sign Up
</Button>
<Form.Text className="text-muted">
  Forgot your password?
  </Form.Text>
</Form>
 </div>
<Coffee/>
    </div>



    );
    }
  }  
    
    


  