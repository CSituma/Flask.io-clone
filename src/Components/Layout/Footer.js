import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom"


export default function Footer() {
  return (
    <div className="footer">
      <Nav className="justify-content-end" >
        <Nav.Item>
          <Nav.Link>
            < Link to ="/About"> About</ Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="foo">
          < Link to ="/About">
            Developers
            </ Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="bar">Suggest a Feature</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

