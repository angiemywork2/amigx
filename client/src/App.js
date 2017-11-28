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
import Navbar from 'react-navbar';
import ReactDOM from 'react-dom';

import { Button } from 'react-bootstrap';

import Disclaimer from "../src/components/Disclaimer";




var reactNavBar = require('react-nav-bar');
var NavBar = reactNavBar.NavBar;
var Menu = reactNavBar.Menu;


// <body class="home-page -theme-light -page-index"><div id="main-wrap">
//     <div id="banner-wrap" class="background-custom-background">
//       <nav>
//         <div class="nav-wrapper">
          
//           <ul id="nav-mobile" class="right hide-on-med-and-down">



const App = () =>
  <Router>
    <div>
      <Navpills />
        <Route exact path="/" component={Home} />
        <Route exact path="/Tips" component={Tips} />
        <Route exact path="/otc" component={otc} />
        <Route exact path="/Medication" component={Medication} />
        <Route exact path="/Login" component={Login} />       
             
    </div>
  </Router>;



export default App;



 






