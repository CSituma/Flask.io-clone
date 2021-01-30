import React from 'react';
import Navbar from "./Navbar"
import Coffee from "./buycoffee"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Dashboard () {
  return (
    <>
    <Navbar/>
   <div className ="Dash">
     <h2>My Saved lists</h2>

     <style type="text/css">
    {`
    .btn-flat {
      background-color:rgb(0,128,46);
      opacity:80%;
      color: white;
      border:0.2px solid rgba(53, 53, 53, 0.681);
      margin-top:2em;
      margin-bottom:1em;
      
    }
    `}
  </style>
 <Button size="lg" variant="flat" type="submit">
   <Link to ="/New">Create a new list</Link>
 </Button>


   </div>

    <Coffee/>
    </>
  );
}
