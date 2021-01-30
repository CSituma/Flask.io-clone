import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../Actions/loginUser';
import Nav from "react-bootstrap/Nav";

const Navbar = ({auth: { isAuthenticated }, logout }) => {

  const defaultLinks = (

       <div className="Navbar">
        <div className="bar1">
            <Link to ="/Login"> Log in</ Link>
        </div>
        <div className="bar2">
        <Nav className="justify-content-start" >
        <Link to='/'
          className="NavLink1">
        <h2>flask</h2> 
        </Link>
        </Nav>
        </div>
        
      </div>
  );
  const User = JSON.parse(localStorage.getItem('users'))

  const memberLinks = (

<div className="Navbar">
        <div className="bar1">

        <Nav className="memberNav">
        <Nav.Item>
          <Nav.Link to ="/" onClick={logout} >   
            Logout
            </Nav.Link>
          <Nav.Link to ="/Dashboard">
            Manage lists
            </Nav.Link>
          <Nav.Link to ="/Account">
          
              {!isAuthenticated?"": User.email}

            </Nav.Link>
            </Nav.Item>
      </Nav>
        </div>
        <div className="bar2">
        <Nav className="justify-content-start" >
        <Link to='/'
          className="NavLink1">
        <h2>flask</h2> 
        </Link>
        </Nav>
        </div>
      </div> 
  );

  

  return (
       <Fragment>
         {isAuthenticated ? memberLinks : defaultLinks}
       </Fragment> 
    
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);