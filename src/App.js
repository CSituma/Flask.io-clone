import React, { Component } from 'react'
import  Register from "./Components/Auth/Register"
import Login from "./Components/Auth/Login"
import About from "./Components/Layout/About"
import Landing from "./Components/Layout/Landing"
import Navbar from "./Components/Layout/Nav.js"
import Nav from "./Components/Layout/Nav.js"
import Dashboard from "./Components/Layout/Dashboard"
import Footer from "./Components/Layout/Footer"
import New from "./Components/Todo/New"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Account from './Components/Layout/Account'

class App extends Component {
  
  render() {
    return (
         <Router> 
             <Switch>   
        <Route path='/'exact component={Landing}/>                 
         <Route path='/Dashboard' exact component={Dashboard}/>
         <Route path='/Navbar'exact component={Navbar}/>
         <Route path='/Nav'exact component={Nav}/>
         <Route path='/New'exact component={New}/>
        <Route path='/About 'exact component={About}/>
        <Route path='/Login'exact component={Login}/>
        <Route path='/Register'exact component={Register}/>
        <Route path='/Footer'exact component={Footer}/>
        <Route path='/Account'exact component={Account}/>
          </Switch>   
      </Router>

  
    )
  }
}

export default App;
