// import React from "react";
import React, { Component } from 'react';
import Navbar from 'react-navbar';
import ReactDOM from 'react-dom';
import Auth from '../Auth/Auth.js';
import { Button } from 'react-bootstrap';


const auth = new Auth();
auth.login();

class Home extends Component {

  // <div>
  //   <h1><center>Welcome to Mi MediAmig<sub>X</sub></center></h1>
  //   <center><p>
  //     Mi MediAmig<sub>X</sub>
  //   </p></center>
  // </div>;



 goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
 }

export default Home;