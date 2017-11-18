import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import otc from "./pages/otc";
import Medication from "./pages/Medication";

var reactNavBar = require('react-nav-bar');
var NavBar = reactNavBar.NavBar;
var Menu = reactNavBar.Menu;


const App = () =>
  <Router>
    <div>
      <div className="Nav">
        <header className="Navpills">
          <Navpills />
          <Route exact path="/" component={Home} />
          <Route exact path="/Tips" component={Tips} />
          <Route exact path="/otc" component={otc} />
          <Route exact path="/Medication" component={Medication} />
        </header>
      </div>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MiMediAmig<sub>X</sub></h1>
        </header>
      </div>
    </div>
  </Router>;





export default App;
