import React, {Component} from "react";
import Navpills from "../Navpills";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavpillsEs from "../NavpillsEs";
import Home from "../../pages/Home";
import Tips from "../../pages/Tips";
import TipsEs from "../../pages/TipsEs";
import otc from "../../pages/otc";
import otcEs from "../../pages/otcEs";
import Login from "../../pages/Login";
import Medication from "../../pages/Medication";
import MedicationEs from "../../pages/MedicationEs";
import MedMinder from "../../pages/MedMinder";
import MedMinderEs from "../../pages/MedMinderEs";
import Navbar from 'react-navbar';
import ReactDOM from 'react-dom';
import Mapp from "../Mapp";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import Disclaimer from "../Disclaimer";
import Auth from '../../Auth/auth.js';
import Callback from '../../Callback/Callback';
import decode from 'jwt-decode';
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
class EnglishBtn extends Component {
  state = {
    isEnglish: false,
    
  };
  handleEnglish = event => {
    
      this.setState({
        isEnglish: true,
        
      });
      const handleRouter = () => {
        console.log("checking");
       };
      console.log(this.state.isEnglish);
      handleRouter();
  };
  handleSpanish = event => {
    
      this.setState({
        isEnglish: false,
        
      });
      console.log(this.state.isEnglish);
      const handleRouter = () => {
        console.log("checking");
       };
      
      handleRouter();
  };
  
  render() {
    return (
        
        <Router>
          <div>
            <button type="button" onClick={this.handleEnglish}>Español</button>
            <button type="button" onClick={this.handleSpanish}>English</button>
              {this.state.isEnglish ?(
                <NavpillsEs>
                  <Router>
                    <div id= "demo">
                      <Router data-English= "false"  />
                      <Route exact path="/" component={Home} />
                      <Route exact path="/Tips" component={Tips} />
                      <Route exact path="/otc" component={otc} />
                      <Route exact path="/Medication" component={Medication} />
                      <Route exact path="/login" render={(props) => <Login auth={auth} {...props} />} /> 
                      <Route exact path="/Medication" render={(props) => <Login auth={auth} {...props} />} /> 
                      <Route exact path="/MedMinder" component={MedMinder} /> 
                      <AuthRoute exact path="/auth" component={Auth} />
                       <Route path="/callback" render={(props) => {
                          handleAuthentication(props);
                          return <Home {...props} /> 
                        }}/>    
                    </div>
                  </Router>;
                 Spanish</NavpillsEs>
                 ):(
                 <Navpills>
                  <Router>
                    <div id= "demo">
                      <Router data-English= "true"  />
                      <Route exact path="/" component={Home} />
                      <Route exact path="/Tips" component={Tips} />
                      <Route exact path="/otc" component={otc} />
                      <Route exact path="/Medication" component={Medication} />
                      <Route exact path="/login" render={(props) => <Login auth={auth} {...props} />} /> 
                      <Route exact path="/Medication" render={(props) => <Login auth={auth} {...props} />} /> 
                      <Route exact path="/MedMinder" component={MedMinder} /> 
                      <AuthRoute exact path="/auth" component={Auth} />
                       <Route path="/callback" render={(props) => {
                          handleAuthentication(props);
                          return <Home {...props} /> 
                        }}/>    
                    </div>
                  </Router>;
                 </Navpills>
                 )} 
          </div>
        </Router>
    );
  };
};  
export default EnglishBtn;