import React from 'react';
import Button from 'react-bootstrap/Button';


export default function Coffee() {
  return (
    <>
    
<style type="text/css">
    {`
    
    .btn-float{
      background:rgb(0,128,30);
      opacity:80%;
      color: white;
      font-size:1.2rem;
      
    }
    
    .btn-sml {
      padding: 0.5rem  1rem;
       position:fixed;
      float:right;
      right:2px;
      bottom: 30px;
      border-radius:0.2rem;
      box-shadow:2px 2px 2px white;
    


    }
    `}

</style>


<Button variant="float" className = "btnn" size="sml">
   <a href="https://www.buymeacoffee.com/flask" >  Buy me A coffee  </a> 
    </Button>{' '}
    </>
  );
}
