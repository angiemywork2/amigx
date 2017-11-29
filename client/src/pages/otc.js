import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Disclaimer from "../components/Disclaimer";
import './otc.css';

// Benadryl
// Motrin
// Mucinex
// Sudafed
// Tylenol



const otc = () =>

  <Container fluid>
    <Row>
      <Col size ="md-10, col-md-offset-1">
        <h1>Quick Reference List of Over-The-Counter Medication</h1>
          <Jumbotron>
            <div className="panel-group" id="accordion">
              <p>Listed are commonly used over the counter medications.  
                  Please consult with your doctor before taking any medication!
              </p>
             

              <h3><strong>Advil | Motrin (Ibuprofen)</strong></h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea1">
                        <h4>About Advil | Motrin (Ibuprofen) <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>


              <h3>Aleve (Naproxen)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea1">
                        <h4>About Aleve (Naproxen) <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>


              <h3>Benadryl (Diphenhydramine: an Antihistamine)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea1">
                        <h4>About Benadryl <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>


              <h3>Mucinex (An Expectorant called Guaifenesin)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea1">
                        <h4>About Mucinex <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>


              <h3>Sudafed (Pseudoephedrine, a decongestant)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea1">
                        <h4>About Sudafed <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>


              <h3> Tylenol (Acetaminophen)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea1">
                        <h4>About Tylenol <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
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



export default otc;
