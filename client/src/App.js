import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import TipsEs from "./pages/TipsEs";
import otc from "./pages/otc";
import otcEs from "./pages/otcEs";
import Login from "./pages/Login";
import Medication from "./pages/Medication";
import MedicationEs from "./pages/MedicationEs";
import MedMinder from "./pages/MedMinder";
import MedMinderEs from "./pages/MedMinderEs";
import Navbar from 'react-navbar';
import ReactDOM from 'react-dom';
import Mapp from "./components/Mapp";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import Disclaimer from "../src/components/Disclaimer";
import Auth from './Auth/auth.js';
import Callback from './Callback/Callback';
import decode from 'jwt-decode';


var reactNavBar = require('react-nav-bar');
var NavBar = reactNavBar.NavBar;
var Menu = reactNavBar.Menu;




const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


const checkAuth = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  if (!token || !refreshToken) {
    return false;
  }

  try {
    // { exp: 12903819203 }
    const { exp } = decode(refreshToken);

    if (exp < new Date().getTime() / 1000) {
      return false;
    }

  } catch (e) {
    return false;
  }

  return true;
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
  )} />
)


const App = () =>
  <Router>
    <div>
      <Navpills />
        <Route exact path="/" component={Home} />

       <Route exact path="/Tips" component={Tips} />
        <Route exact path="/TipsEs" component={TipsEs} />
        
        <Route exact path="/otcEs" component={otcEs} />

        <Route exact path="/Medication" component={Medication} />
        <Route exact path="/MedicationEs" component={MedicationEs} />
        <Route exact path="/login" render={(props) => <Login auth={auth} {...props} />} /> 
        <Route exact path="/Medication" render={(props) => <Login auth={auth} {...props} />} /> 
        <Route exact path="/MedMinder" component={MedMinder} /> 
        <Route exact path="/MedMinderEs" component={MedMinderEs} />         
        <Route exact path="/login" render={(props) => <Login auth={auth} {...props} />} /> 
        <Route exact path="/Medication" render={(props) => <Login auth={auth} {...props} />} /> 
        <Route exact path="/MedicationEs" render={(props) => <Login auth={auth} {...props} />} /> 
        
        <Route exact path="/MedMinderEs" component={MedMinderEs} /> 

        <AuthRoute exact path="/auth" component={Auth} />
         <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Home {...props} /> 
          }}/>    
    </div>
  </Router>;



export default App;



 






