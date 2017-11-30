// import React from "react";
import React, { Component } from 'react';
import Navbar from 'react-navbar';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import Auth from '../Auth/auth.js';


class Login extends Component {
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
            {
              !isAuthenticated() && (
                  <button onClick={this.login.bind(this)}
                  >
                    Log In
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </button>
                )
            }
          
      </div>
    );
  }
}

  

export default Login;
