import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import otc from "./pages/otc";
import Login from "./pages/Login";
import Medication from "./pages/Medication";
import MedMinder from "./pages/MedMinder";
import Navbar from 'react-navbar';
import ReactDOM from 'react-dom';
import Mapp from "./components/Mapp";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import Disclaimer from "../src/components/Disclaimer";
import Auth from './Auth/auth.js';
import Callback from './Callback/Callback';






var reactNavBar = require('react-nav-bar');
var NavBar = reactNavBar.NavBar;
var Menu = reactNavBar.Menu;


// <body class="home-page -theme-light -page-index"><div id="main-wrap">
//     <div id="banner-wrap" class="background-custom-background">
//       <nav>
//         <div class="nav-wrapper">
          
//           <ul id="nav-mobile" class="right hide-on-med-and-down">

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () =>
  <Router>
    <div>
      <Navpills />
        <Route exact path="/" component={Home} />
        <Route exact path="/Tips" component={Tips} />
        <Route exact path="/otc" component={otc} />
        <Route exact path="/Medication" component={Medication} />
        <Route exact path="/login" render={(props) => <Login auth={auth} {...props} />} /> 
        <Route exact path="/MedMinder" component={MedMinder} /> 
         <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Home {...props} /> 
          }}/>    
    </div>
  </Router>;



export default App;