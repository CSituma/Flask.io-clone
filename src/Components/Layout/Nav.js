import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./logo.PNG"


export default function Nav() {
  return (

     <div className="Nav">

      <Link to='/'
        className="NavLink1">
       <img src = {Logo} alt="Flaskclone"/>
      </Link>
          <div
      className="Bars"
      >
        </div>
      <div className ="NavMenu">

        <Link to='/Login'
        className="NavBtnLink">
          Log In
        </Link>
      
      </div>
      
    </div>


 
);
  
}
