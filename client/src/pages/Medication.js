import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Disclaimer from "../components/Disclaimer";
import API from "../utils/API";
import Auth from '../Auth/auth';
import {Route, Switch, Redirect } from "react-router-dom";
import decode from 'jwt-decode';
import Login from "./Login";
import {isLoggedIn} from "../Auth/auth.js";

// const auth = new Auth();


// const handleAuthentication = (nextState, replace) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     auth.handleAuthentication();
//   }
// }

class chkLogin extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
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




// const checkAuth = () => {
//   const token = localStorage.getItem('token');
//   const refreshToken = localStorage.getItem('refreshToken');
//   if (!token || !refreshToken) {
//     return false;
//   }

//   try {
//     // { exp: 12903819203 }
//     const { exp } = decode(refreshToken);

//     if (exp < new Date().getTime() / 1000) {
//       return false;
//     }

//   } catch (e) {
//     return false;
//   }

//   return true;
// }

// const AuthRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     checkAuth() ? (
//       <Component {...props} />
//     ) : (
//         <Redirect to={{ Login: '/login' }} />
//       )
//   )} />
// )



class Medication extends Component {

  state = {
    prescriptions: [],
    PharmName: "",
    PharmAddress:"",
    PharmPhone:"",
    PharmDrugNum:"",
    PharmFillDate:"",
    DocName:"",
    PatientName:"",
    DrugInstruct:"",
    DrugName:"",
    DrugRefill:"",
    DrugUseByDate:""
  };

  componentDidMount() {
    this.loadPrescriptions();
  };

  loadPrescriptions = () => {
    API.getPrescriptions()
      .then(res => 
        this.setState({ prescriptions: res.data, PharmName:"",
    PharmAddress:"", PharmPhone:"", PharmDrugNum:"", PharmFillDate:"", DocName:"", PatientName:"", DrugInstruct:"", DrugName:"", DrugRefill:"", DrugUseByDate:"" })
        )
      .catch(err => console.log(err));
  };
  
  deletePrescription = id => {
    API.deletePrescription(id)
      .then(res => this.loadPrescriptions())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.PharmName && this.state.PharmAddress && this.state.PharmPhone && this.state.PharmDrugNum && this.state.PharmFillDate && this.state.DocName && this.state.PatientName && this.state. DrugInstruct && this.state.DrugName && this.state.DrugRefill && this.state.DrugUseByDate) {
      API.savePrescription({
        PharmName: this.state.PharmName,
        PharmAddress: this.state.PharmAddress,
        PharmPhone: this.state.PharmPhone,
        PharmDrugNum: this.state.PharmDrugNum,
        PharmFillDate: this.state.PharmFillDate,
        DocName: this.state.DocName,
        PatientName: this.state.PatientName,
        DrugInstruct: this.state.DrugInstruct,
        DrugName: this.state.DrugName,
        DrugRefill: this.state.DrugRefill,
        DrugUseByDate: this.state.DrugRefill
      })
        .then(res => this.loadPrescriptions())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <div className ="col-md-10 col-md-offset-1">
            <Jumbotron>
              <h1 className="text-center">Medication Translator</h1>
              <Row>
                <Col size = "md-3, col-md-offset-1">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <h3 className="text-center">
                        Use the form below to translate pharmacuetical prescriptions into spanish.
                      </h3>
                      <h3 className="text-center">
                      Click the example below to see where parts of the prescription are usually located.
                      </h3>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="row">
                <div className="col-md-6">
                  <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">Prescription Example</button>
                  <div id="demo" className="collapse">
                    <div className="thumbnail">  
                     <div className="caption, text-center">
                          <p>Here is an example of a medical prescription</p>
                      </div>
                      <img src="https://i.pinimg.com/736x/34/72/7c/34727c2d10cb6ec5c484e3b2c1c62699--ldr-gifts-medical-science.jpg" alt="Prescription example" className="img-responsive"/>
                    </div>
                  </div>
                </div>
              </div>
            </Jumbotron>
          </div>
          </Row>


            <Row>
              <div className="col-md-5 col-md-offset-1">
                <Jumbotron>
                  <form>
                    <Input
                      value = {this.state.PharmName}
                      onChange={this.handleInputChange} 
                      name="PharmName"
                      placeholder="Pharmacy Name (required)" />
                    <Input 
                      value = {this.state.PharmAddress}
                      onChange={this.handleInputChange}
                      name="PharmAddress"
                      placeholder="Pharmacy Address (required)" />
                    <Input 
                      value = {this.state.PharmPhone}
                      onChange={this.handleInputChange}
                      name="PharmPhone"
                      placeholder="Pharmacy Telephone Number (required)" />
                    <Input 
                      value = {this.state.PharmDrugNum}
                      onChange={this.handleInputChange}
                      name="PharmDrugNum"
                      placeholder="Pharmacy Drug ID Number (required)" />
                    <Input 
                      value = {this.state.PharmFillDate}
                      onChange={this.handleInputChange}
                      name="PharmFillDate"
                      placeholder="Prescription Fill Date(required)" />
                    <Input 
                      value = {this.state.DocName}
                      onChange={this.handleInputChange}
                      name="DocName"
                      placeholder="Doctor's Name (required)" />
                    <Input
                      value = {this.state.PatientName}
                      onChange={this.handleInputChange} 
                      name="PatientName"
                      placeholder="Patient Name (required)" />
                    <TextArea 
                      value = {this.state.DrugInstruct}
                      onChange={this.handleInputChange}
                      name="DrugInstruct"
                      placeholder="Drug Instructions (required)" />
                    <Input 
                      value = {this.state.DrugName}
                      onChange={this.handleInputChange}
                      name="DrugName" 
                      placeholder="Drug Name and Strength (required)" />
                    <Input 
                      value = {this.state.DrugRefill}
                      onChange={this.handleInputChange}
                      name="DrugRefill"
                      placeholder="Drug refills (required)"/>
                    <Input 
                      value = {this.state.DrugUseByDate}
                      onChange={this.handleInputChange}
                      name="DrugUseByDate"
                      placeholder="Use By Date (required)"/>

                    <FormBtn
                      disabled = {!(this.state.PharmName && this.state.PharmAddress && this.state.PharmPhone && this.state.PharmDrugNum && this.state.PharmFillDate && this.state.DocName && this.state.PatientName && this.state. DrugInstruct && this.state.DrugName && this.state.DrugRefill && this.state.DrugUseByDate)}
                      onClick={this.handleFormSubmit}
                    >
                      Translate Prescription
                    </FormBtn>
                    <br/>
                  </form>
                </Jumbotron>
              </div>

              <div className ="col-md-5">
                <Jumbotron>
                  <h1 className="text-center">Prescription List</h1>
                </Jumbotron>
                {this.state.prescriptions.length ? (
                  <List>
                    {this.state.prescriptions.map(prescription => (
                      <ListItem key={prescription._id}>
                        <Link to={"/prescriptions/" + prescription._id}>
                          <strong>
                            {prescription.PatientName} by {prescription.DrugName}
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deletePrescription(prescription._id)} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3 className="text-center">No Results to Display</h3>
                )}
              </div>
            </Row>

        <Row>
          <Disclaimer/>
        </Row>
      </Container>
    );
  }
}

export default Medication;