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
// import "./client/public/img/amigxlogo.jpg";
import Amigx from './amigxlogo.jpg';

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
              <h3>Mi Amigx is here to help you manage your health by helping you manage your medications.  
              re you will find helpful information for commonly used over the counter medications.  You can 
              also customize a list of your medications and set reminders so that you never skip a dose again!</h3>
            </div>
          </div><br />
      
        <div className="row">
          
                  <div id="amigx">
                  <img src={Amigx} alt="react-pillbottle - Logo" align="center" width="300px" height="300px" />     
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