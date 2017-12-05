import React, { Component } from 'react';


import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "../components/Navpills";

import Tips from "../pages/Tips";
import otc from "../pages/otc";
import Login from "../pages/Login";
import Medication from "../pages/Medication";
import Navbar from 'react-navbar';
import ReactDOM from 'react-dom';
// import Auth from './Auth/Auth.js';
import { Button } from 'react-bootstrap';

import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

import Disclaimer from "../components/Disclaimer";
import "./Home.css";

import App from "../App";





var reactNavBar = require('react-nav-bar');
var NavBar = reactNavBar.NavBar;
var Menu = reactNavBar.Menu;


// <body class="home-page -theme-light -page-index"><div id="main-wrap">
//     <div id="banner-wrap" class="background-custom-background">
//       <nav>
//         <div class="nav-wrapper">
          
//           <ul id="nav-mobile" class="right hide-on-med-and-down">

// What I think will work to link language pages to buttons
// const isSpanish = () => {
//     state = {
//       spanish: true,
//     }
//   }

// const Language = () => {

//     getInitialState() => {
//         return {
//             isEnglish: (input English routes here)
//         };
//     },

//     isSpanish() => {

//         this.setState({isSpanish: (Spanish routes go here)});
//     },

//     render: function() {
//         return(


//             <{this.state.isSpanish} onClick={this.isSpanish.bind(this)} />
//         );
//     }
// };

// module.exports = Language;



const Home = () =>

   <Container fluid>
   <div>
    <h1><center>Welcome to Mi Amig<sub>x</sub></center></h1>
   </div>
    <Row>
      <Col size ="md-10, col-md-offset-1">
        <Jumbotron>
        <h2><center> Your Health is Important!!!!</center></h2>
          <div className="row">
            <div className="text-center">
              <button type="button" className="btn btn-primary btn-sx" data-toggle="collapse" data-target="#demo">English</button>
          </div>
          </div><br />
      
        <div className="row">
            <div className="text-center">
              <button type="button" className="btn btn-primary btn-sx" data-toggle="collapse" data-target="#demo">Español
              </button>
              <div id="demo" className="collapse">
                <div className="thumbnail">  
                 <div className="caption, text-center">
                      <p>Here is an example of a medical prescription</p>
                  </div>
                  <img src="https://i.pinimg.com/736x/34/72/7c/34727c2d10cb6ec5c484e3b2c1c62699--ldr-gifts-medical-science.jpg" alt="Lights" className="img-responsive"/>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
      </Col>
    </Row>
    <Row>
      <Disclaimer></Disclaimer>
    </Row>
  </Container>

export default Home;