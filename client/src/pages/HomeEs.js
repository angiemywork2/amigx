import React, { Component } from 'react';


import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "../components/Navpills";
import NavpillsEs from "../components/NavpillsEs";

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

import DisclaimerEs from "../components/DisclaimerEs";
import "./Home.css";

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



const HomeEs = () =>

   <Container fluid>
   <div>
    <h1><center>Bienvenido a Mi Amig<sub>x</sub></center></h1>
   </div>
    <Row>
      <Col size ="md-10, col-md-offset-1">
        <Jumbotron>
        <h2><center>Tu salud es importante!</center></h2>
          <div className="row">
            <div className="text-center">
              <h3>Mi Amigx está aquí para ayudarlo a controlar su salud ayudándole a 
              administrar sus medicamentos. Re encontrará información útil para los 
              medicamentos de venta libre comúnmente usados. Usted puede ¡también 
              personalice una lista de sus medicamentos y establezca recordatorios para 
              que nunca se salte una dosis otra vez!</h3>
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
      <DisclaimerEs></DisclaimerEs>
    </Row>
  </Container>

export default HomeEs;