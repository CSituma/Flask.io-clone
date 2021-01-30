import React from "react";
import {Link,Redirect} from "react-router-dom"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Promo from "./flask.PNG"
import Button from 'react-bootstrap/Button';
import Coffee from "./buycoffee"
import Footer from "./Footer"
import Nav from "./Nav"

function Landing ({isAuthenticated}) {

  if (isAuthenticated) {
    return <Redirect to="/Dashboard" /> 
  }


  return (
    <div>
     <Nav/>
    <div className="Homepage">
     
      <section className ="intro">
        <div>
 <h1>Really simple to-do lists you can share </h1>
    
       
<style type="text/css">
    {`
    .btn-flat {
      background-color:rgb(0,128,46);
      opacity:80%;
      color: white;
      
    }
    
    .btn-xxl {
      padding: 1.3rem 4.2rem;
      margin-top:2rem;
      float:left;
      font-size: 1.5rem;
      border-radius:0.8rem;
      border:2px inset solid rgba(53, 53, 53, 0.681);
    `}
  </style>
        <Button variant="flat" className = "btn" size="xxl">
       {!isAuthenticated?
       <Link to ="/New"> Create a to-do list </Link>
       :(
        <Link to ="/Dashboard"> Create a to-do list </Link>
       )
       } 
    </Button>{' '}
          
        
        <p className="dull">No sign up required</p>

        </div>
        <div>

          <img src ={Promo} alt="Flaskclone"/>
        </div>

</section>
<Coffee/>
<div className ="purple">

  <Footer/>
</div>

    </div>
</div>
  )
}
Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);